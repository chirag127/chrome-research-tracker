import { lstat, readFile, readdir } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const LANES = Array.from({ length: 10 }, (_, i) => `R${String(i + 1).padStart(2, '0')}`);
const COLLECTIONS = { sources: 'source', browsers: 'browser', features: 'feature', issues: 'issue' };
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const text = value => typeof value === 'string' && value.trim().length > 0;
const strings = (value, minimum = 0) => Array.isArray(value) && value.length >= minimum && value.every(text);
const session = value => typeof value === 'string' && /^ses_[A-Za-z0-9]+$/.test(value);
const own = (value, key) => Object.hasOwn(value, key);
const digest = value => typeof value === 'string' && /^[a-fA-F0-9]{64}$/.test(value);
const DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?(Z|[+-]\d{2}:?\d{2}))?$/;

export function isRealDate(value) {
  if (typeof value !== 'string') return false;
  const match = DATE_PATTERN.exec(value);
  if (!match) return false;
  const [, year, month, day, hour, minute, second, , zone] = match;
  const y = Number(year), m = Number(month), d = Number(day);
  const leap = y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);
  const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (y < 1 || m < 1 || m > 12 || d < 1 || d > days[m - 1]) return false;
  if (hour !== undefined && (Number(hour) > 23 || Number(minute) > 59 || Number(second ?? 0) > 59)) return false;
  if (zone && zone !== 'Z') {
    const offset = zone.slice(1).replace(':', '');
    if (Number(offset.slice(0, 2)) > 23 || Number(offset.slice(2)) > 59) return false;
  }
  return true;
}

function dateOnOrBefore(left, right) {
  // A date-only value has day precision: compare written days without assuming a midnight instant.
  if (left.length === 10 || right.length === 10) return left.slice(0, 10) <= right.slice(0, 10);
  const [a, b] = [left, right].map(value => {
    const [, year, month, day, hour, minute, second = '00', fraction = '', zone] = DATE_PATTERN.exec(value);
    const offset = zone === 'Z' ? zone : `${zone.slice(0, 3)}:${zone.slice(-2)}`;
    return { time: Date.parse(`${year}-${month}-${day}T${hour}:${minute}:${second}${offset}`), fraction };
  });
  if (a.time !== b.time) return a.time < b.time;
  // Keep fractions separate so Date's millisecond precision cannot truncate accepted timestamps.
  const precision = Math.max(a.fraction.length, b.fraction.length);
  return a.fraction.padEnd(precision, '0') <= b.fraction.padEnd(precision, '0');
}

function placeholder(value) {
  return typeof value === 'string' && /^(?:|<(?:redacted|placeholder|user(?:name)?|your[-_ ][a-z0-9_-]+)>|REDACTED|CHANGEME|YOUR_[A-Z0-9_]+|\$\{[A-Z_][A-Z0-9_]*\}|%[A-Z_][A-Z0-9_]*%)$/i.test(value.trim());
}

function credentialKey(key, query = false) {
  const normalized = key.toLowerCase().replace(/[^a-z0-9]/g, '');
  return /(?:apikey|password|passwd|clientsecret|accesstoken|refreshtoken|idtoken|authtoken|sessiontoken)$/.test(normalized)
    || ['secret', 'token', 'authorization', 'cookie', 'privatekey', 'awssecretaccesskey'].includes(normalized)
    || (query && ['key', 'auth', 'code', 'sig', 'signature', 'session', 'sessionid', 'xamzcredential', 'xamzsignature', 'xgoogcredential', 'xgoogsignature'].includes(normalized));
}

export function isSafeUrl(value) {
  if (!text(value) || value !== value.trim() || /[\s\\<>\u0000-\u001f]/.test(value)) return false;
  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol) || !url.hostname || url.username || url.password) return false;
    for (const [key, entry] of url.searchParams) {
      if (credentialKey(key, true) && !placeholder(entry)) return false;
    }
    // OAuth fragments are not part of searchParams.
    for (const [key, entry] of new URLSearchParams(url.hash.slice(1))) {
      if (credentialKey(key, true) && !placeholder(entry)) return false;
    }
    return true;
  } catch {
    return false;
  }
}

const SECRET_PATTERNS = [
  /\bgh[pousr]_[A-Za-z0-9]{20,}\b/,
  /\bgithub_pat_[A-Za-z0-9_]{20,}\b/,
  /\bAIza[A-Za-z0-9_-]{30,}\b/,
  /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/,
  /\bxox[baprs]-[A-Za-z0-9-]{16,}\b/,
  /\bsk-(?:proj-|ant-api03-)?[A-Za-z0-9_-]{24,}\b/,
  /-----BEGIN (?:RSA |EC |DSA |OPENSSH |ENCRYPTED )?PRIVATE KEY-----/,
  /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/,
  /\bBearer\s+[A-Za-z0-9+/_=-]{12,}/i,
];

function containsBasicCredential(value) {
  for (const [, token] of value.matchAll(/\bBasic[ \t]+([A-Za-z0-9+/]+={0,2})/gi)) {
    const decoded = Buffer.from(token, 'base64');
    const canonical = decoded.toString('base64').replace(/=+$/, '');
    if (canonical === token.replace(/=+$/, '') && decoded.includes(0x3a)) return true;
  }
  return false;
}

function safeSegment(key) {
  return /^[A-Za-z_][A-Za-z0-9_-]{0,70}$/.test(key) && !SECRET_PATTERNS.some(pattern => pattern.test(key)) ? key : '[field]';
}

function walk(value, path, visit) {
  if (Array.isArray(value)) {
    value.forEach((entry, index) => walk(entry, `${path}[${index}]`, visit));
  } else if (object(value)) {
    visit(value, path);
    for (const [key, entry] of Object.entries(value)) walk(entry, `${path}.${safeSegment(key)}`, visit);
  }
}

function issue(path, code, message) {
  return { path, code, message };
}

export function screenPublicText(value, path = 'public-file') {
  const errors = [];
  const add = (code, message) => errors.push(issue(path, code, message));
  const markdown = /\.md$/i.test(path);
  const prose = markdown ? value.replace(/\\([!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~\\])/g, '$1') : value;
  const entities = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&apos;': "'", '&#39;': "'", '&#x27;': "'" };
  const normalized = prose.replace(/&(?:amp|lt|gt|quot|apos|#39|#x27);/gi, entity => entities[entity.toLowerCase()]);
  if (SECRET_PATTERNS.some(pattern => pattern.test(normalized)) || containsBasicCredential(normalized)) add('credential', 'Credential-shaped material must not appear in public files.');
  // Recognize slash-escaped schemes without hiding their literal backslashes from URL validation.
  const withoutUrls = normalized.replace(/https?:(?:\\*\/){2}[^\s<>"'`]+/gi, match => {
    const candidate = (markdown ? match.split('](')[0] : match).replace(/[),.;]+$/, '');
    if (!isSafeUrl(candidate)) add('unsafe-url', 'An HTTP URL is malformed or contains credential-bearing components.');
    return '';
  });
  // Remote repository paths can legitimately contain /home/ or /Users/; inspect local paths outside HTTP URLs.
  const homePath = /(?:[A-Za-z]:[\\/]+(?:Users|Documents and Settings)[\\/]+|(?<![A-Za-z0-9_/])\/(?:Users|home)\/)([^\\/\s"'<>]+)/gi;
  for (const match of withoutUrls.matchAll(homePath)) {
    if (!placeholder(match[1]) && !/^(?:\$HOME|\$USER|%USERNAME%)$/i.test(match[1])) {
      add('private-path', 'A private absolute user path must be redacted.');
      break;
    }
  }
  if (/(?:^|[\s"'=])\/root\//m.test(withoutUrls)) add('private-path', 'A private absolute user path must be redacted.');
  for (const match of withoutUrls.matchAll(/["']?([A-Za-z_][A-Za-z0-9_-]*)["']?\s*[:=]\s*["']([^"'\r\n]*)["']/g)) {
    if (credentialKey(match[1]) && !placeholder(match[2])) add('credential-value', 'A credential-named field contains a non-placeholder value.');
  }
  for (const match of withoutUrls.matchAll(/^\s*(?:export\s+)?([A-Z][A-Z0-9_]*)\s*=\s*([^\r\n]*)$/gm)) {
    const entry = match[2].trim().replace(/^['"]|['"]$/g, '');
    if (!placeholder(entry) && (credentialKey(match[1]) || /^(?:PATH|HOME|USERPROFILE|APPDATA|LOCALAPPDATA|USERNAME|COMPUTERNAME|HOMEPATH|HOMEDRIVE|PSMODULEPATH)$/.test(match[1]))) {
      add('raw-environment', 'Raw environment assignments must not appear in public files.');
    }
  }
  return errors.filter((entry, index, all) => all.findIndex(other => other.code === entry.code) === index);
}

function screenPublicData(value, path) {
  const errors = new Map();
  const add = entry => errors.set(entry.code, entry);
  // JSON escapes are representation, not prose: keep decoded strings and keys separate.
  const visit = entry => {
    if (typeof entry === 'string') screenPublicText(entry, path).forEach(add);
    else if (Array.isArray(entry)) entry.forEach(visit);
    else if (object(entry)) for (const [key, child] of Object.entries(entry)) {
      visit(key);
      if (typeof child === 'string' && credentialKey(key) && !placeholder(child)) add(issue(path, 'credential-value', 'A credential-named field contains a non-placeholder value.'));
      visit(child);
    }
  };
  visit(value);
  return [...errors.values()];
}

function context() {
  const result = { errors: [], warnings: [], counts: { lanes: 0, sources: 0, browsers: 0, features: 0, issues: 0, recommendations: 0, newSubmissions: 0, publicFiles: 0 } };
  const ids = new Map();
  return {
    result, ids, receipts: new Set(),
    check(condition, path, code, message) {
      if (!condition) result.errors.push(issue(path, code, message));
      return Boolean(condition);
    },
    required(value, keys, path) {
      if (!this.check(object(value), path, 'type', 'Expected an object.')) return false;
      for (const key of keys) this.check(own(value, key), `${path}.${safeSegment(key)}`, 'required', 'Required field is missing.');
      return true;
    },
    id(value, path, prefix) {
      if (!this.check(text(value) && value === value.trim(), path, 'id', 'Expected a nonempty, unpadded identifier.')) return;
      if (prefix) this.check(value.startsWith(`${prefix}-`) && text(value.slice(prefix.length + 1)), path, 'id-prefix', 'Record ID must start with the owning lane and a nonempty suffix.');
      this.check(!ids.has(value) || ids.get(value) === path, path, 'duplicate-id', 'Identifier is already defined elsewhere.');
      if (!ids.has(value)) ids.set(value, path);
    },
    enum(value, values, path) { this.check(values.includes(value), path, 'enum', 'Value is outside the permitted enumeration.'); },
    date(value, path, nullable = false) { this.check((nullable && value === null) || isRealDate(value), path, 'date', 'Expected a real calendar date or an ISO timestamp with Z or a numeric offset.'); },
    url(value, path, nullable = false) { this.check((nullable && value === null) || isSafeUrl(value), path, 'url', 'Expected an HTTP(S) URL without credentials.'); },
    texts(value, path, minimum = 0) { this.check(strings(value, minimum), path, 'type', minimum ? 'Expected a nonempty array of nonblank strings.' : 'Expected an array of nonblank strings.'); },
    integer(value, path) { this.check(Number.isSafeInteger(value) && value >= 0, path, 'type', 'Expected a nonnegative safe integer.'); },
  };
}

function references(c, value, path, ids, nonempty = true) {
  if (!c.check(strings(value, nonempty ? 1 : 0), path, 'references', 'Expected an array of reference IDs.')) return;
  c.check(new Set(value).size === value.length, path, 'duplicate-reference', 'Reference IDs must not repeat within one list.');
  value.forEach((id, index) => c.check(ids.has(id), `${path}[${index}]`, 'reference', 'Reference does not resolve in the required collection and scope.'));
}

function recursiveReferences(c, value, path, indexes, { allowEmptySources = false } = {}) {
  walk(value, path, (record, at) => {
    for (const [key, collection] of [['sourceIds', 'sources'], ['sourceId', 'sources'], ['browserId', 'browsers'], ['browserIds', 'browsers'], ['featureIds', 'features'], ['featureId', 'features'], ['relatedIssueIds', 'issues'], ['issueId', 'issues']]) {
      if (!own(record, key) || !indexes[collection]) continue;
      if (key.endsWith('Ids')) references(c, record[key], `${at}.${key}`, indexes[collection], !(allowEmptySources && key === 'sourceIds'));
      else c.check(text(record[key]) && indexes[collection].has(record[key]), `${at}.${key}`, 'reference', 'Reference does not resolve in the required collection and scope.');
    }
  });
}

function concreteEvidence(value) {
  if (!object(value)) return false;
  const reference = value.reference ?? value.evidenceReference;
  return (text(reference) && (isSafeUrl(reference) || /^(?:tool-result:call_[A-Za-z0-9_-]+|ev_[a-fA-F0-9]{32,64})$/.test(reference)))
    || (text(value.artifact) && safeRelativePath(value.artifact) && digest(value.sha256));
}

function safeRelativePath(value) {
  return text(value) && !/^[A-Za-z]:|^[\\/]|[\u0000-\u001f]/.test(value) && !value.split(/[\\/]/).some(part => part === '..');
}

function resourceUrl(value) {
  if (!isSafeUrl(value)) return null;
  const url = new URL(value);
  url.hash = '';
  url.pathname = url.pathname.replace(/\/$/, '') || '/';
  return url.href;
}

function submission(c, value, path, contract, { upstreamUrl, existing = false, aggregate = false } = {}) {
  const urlKey = object(value) && own(value, 'receiptUrl') ? 'receiptUrl' : 'url';
  if (!c.required(value, ['status', urlKey, 'reason'], path)) return false;
  c.enum(value.status, contract.issue.submission.status, `${path}.status`);
  c.check(text(value.reason), `${path}.reason`, 'type', 'A nonblank reason is required.');
  const sent = value.status === 'submitted';
  const old = value.status === 'existing-upstream';
  c.url(value[urlKey], `${path}.${urlKey}`, !(sent || old));
  if (own(value, 'url') && own(value, 'receiptUrl')) c.check(value.url === value.receiptUrl, path, 'receipt', 'Receipt URL fields disagree.');
  if (!sent && !old) c.check(value[urlKey] === null, `${path}.${urlKey}`, 'receipt', 'An unsent report cannot have a submission receipt URL.');
  if (old && upstreamUrl !== undefined) c.check(isSafeUrl(upstreamUrl) && resourceUrl(value[urlKey]) === resourceUrl(upstreamUrl), path, 'existing-upstream', 'Existing-upstream URL must match the cited upstream report.');
  if (own(value, 'newReportsSubmitted') && !sent) c.check(value.newReportsSubmitted === 0, `${path}.newReportsSubmitted`, 'submission-count', 'Unsent or existing-upstream records cannot count as new submissions.');
  if (own(value, 'countedAsNew')) c.check(value.countedAsNew === sent, `${path}.countedAsNew`, 'submission-count', 'New-submission counting must agree with receipt status.');
  if (!sent) return false;
  const before = c.result.errors.length;
  c.check(!existing, path, 'existing-upstream', 'An existing upstream report cannot be reclassified as this project\'s new submission.');
  const receipt = value.receipt;
  c.check(object(receipt) && receipt.verified === true && isRealDate(receipt.observedAt) && concreteEvidence(receipt), `${path}.receipt`, 'receipt-evidence', 'Submitted requires a verified receipt with observedAt and a concrete evidence reference or artifact digest.');
  if (object(receipt) && own(receipt, 'url')) c.check(resourceUrl(receipt.url) === resourceUrl(value[urlKey]), `${path}.receipt.url`, 'receipt', 'Receipt evidence must identify the same URL.');
  if (isSafeUrl(value[urlKey])) {
    const url = new URL(value[urlKey]);
    c.check(url.pathname !== '/' && !/(?:^|\/)(?:new|create|login|signin|submit)\/?$/i.test(url.pathname) && url.hostname !== 'accounts.google.com', `${path}.${urlKey}`, 'receipt', 'A form, login page, or service home is not a submission receipt.');
  }
  const valid = isSafeUrl(value[urlKey]) && c.result.errors.length === before;
  if (valid && !aggregate) c.receipts.add(resourceUrl(value[urlKey]));
  return valid;
}

function validateIssue(c, record, path, contract, sources) {
  for (const key of ['kind', 'status', 'reproduction']) c.enum(record[key], contract.issue[key], `${path}.${key}`);
  for (const key of ['title', 'expected', 'observed']) c.check(text(record[key]), `${path}.${key}`, 'type', 'Expected a nonblank string.');
  for (const key of ['reportedVersions', 'testedVersions', 'steps']) c.texts(record[key], `${path}.${key}`);
  c.url(record.upstreamUrl, `${path}.upstreamUrl`, true);
  c.check(record.upstreamStatus === null || text(record.upstreamStatus), `${path}.upstreamStatus`, 'type', 'Expected an upstream status string or null.');
  const local = record.reproduction === 'local-reproduced';
  if (local) {
    c.check(record.evidenceType === 'locally-observed', `${path}.evidenceType`, 'reproduction', 'Local reproduction requires locally observed evidence.');
    c.check(strings(record.testedVersions, 1) && record.testedVersions.every(version => /\d/.test(version) && !/^(?:unknown|latest|not[- ]tested|unverified|tbd)$/i.test(version)), `${path}.testedVersions`, 'reproduction', 'Local reproduction requires concrete tested versions.');
    c.check(strings(record.steps, 1), `${path}.steps`, 'reproduction', 'Local reproduction requires executed steps.');
    c.check(Array.isArray(record.reproductionEvidence) && record.reproductionEvidence.length > 0 && record.reproductionEvidence.every(entry => object(entry) && entry.kind === 'browser-runtime' && isRealDate(entry.observedAt) && concreteEvidence(entry)), `${path}.reproductionEvidence`, 'reproduction-evidence', 'Local reproduction requires dated browser-runtime evidence references; source citations alone do not establish a test.');
  } else {
    c.check(Array.isArray(record.testedVersions) && record.testedVersions.length === 0, `${path}.testedVersions`, 'reproduction', 'Untested and source-only records must have empty testedVersions.');
    c.check(record.evidenceType !== 'locally-observed', `${path}.evidenceType`, 'reproduction', 'Source-only or unrun issues cannot claim locally observed browser behavior.');
  }
  for (const flag of ['browserReproduced', 'locallyReproduced', 'runtimeConfirmed']) {
    if (own(record, flag)) c.check(typeof record[flag] === 'boolean' && (!record[flag] || local), `${path}.${flag}`, 'reproduction', 'Runtime claim must agree with reproduction evidence.');
  }
  const upstream = record.kind === 'upstream-report' || ['upstream-open', 'upstream-closed'].includes(record.status);
  if (upstream) {
    c.check(isSafeUrl(record.upstreamUrl) && text(record.upstreamStatus) && !/^(?:unknown|not-established)$/i.test(record.upstreamStatus), path, 'upstream-status', 'An upstream record requires its URL and observed status.');
    c.check(Array.isArray(record.sourceIds) && record.sourceIds.some(id => resourceUrl(sources.get(id)?.url) !== null && resourceUrl(sources.get(id)?.url) === resourceUrl(record.upstreamUrl)), `${path}.upstreamUrl`, 'upstream-source', 'The upstream URL must be supported by a cited source.');
  }
  if (text(record.upstreamStatus)) {
    const closed = /^(?:fixed|verified|closed|duplicate|won.t fix|wontfix|not reproducible|intended behavior|obsolete|infeasible)\b/i.test(record.upstreamStatus);
    const open = /^(?:new|open|assigned|accepted|in progress|untriaged|started)\b/i.test(record.upstreamStatus);
    c.check(!(record.status === 'upstream-open' && closed) && !(record.status === 'upstream-closed' && open), `${path}.status`, 'upstream-status', 'Open/closed classification contradicts the observed upstream status.');
  }
  if (record.status === 'proposal') c.check(record.kind === 'feature-proposal', `${path}.kind`, 'issue-kind', 'Proposal status requires a feature proposal.');
  submission(c, record.submission, `${path}.submission`, contract, { upstreamUrl: record.upstreamUrl, existing: upstream || record.evidenceType === 'upstream-reported' });
}

function validateSource(c, record, path, contract, localRuntime = false) {
  if (!c.required(record, contract.source.required, path)) return;
  for (const key of ['title']) c.check(text(record[key]), `${path}.${key}`, 'type', 'Expected a nonblank string.');
  c.date(record.retrievedAt, `${path}.retrievedAt`);
  c.date(record.publishedAt, `${path}.publishedAt`, true);
  c.texts(record.limitations, `${path}.limitations`);
  if (localRuntime && record.kind === 'local-runtime-evidence') {
    c.check(record.url === null, `${path}.url`, 'runtime-source', 'Local-only runtime evidence uses a null URL.');
    c.check(safeRelativePath(record.artifact) && digest(record.sha256) && record.retention === 'local-only', path, 'runtime-source', 'Local runtime evidence requires an artifact label, SHA-256 and local-only retention.');
  } else {
    c.enum(record.kind, contract.source.kind, `${path}.kind`);
    c.url(record.url, `${path}.url`);
  }
  if (isRealDate(record.publishedAt) && isRealDate(record.retrievedAt)) {
    c.check(dateOnOrBefore(record.publishedAt, record.retrievedAt), `${path}.publishedAt`, 'date-order', 'Publication cannot be after retrieval.');
  }
}

export function validateDataset(data, { allowPartial = false } = {}) {
  const c = context();
  if (!c.required(data, ['contract', 'lanes'], 'dataset')) return c.result;
  const contract = data.contract;
  const contractValid = object(contract) && contract.schemaVersion === 1
    && ['lane', 'source', 'browser', 'feature', 'issue'].every(key => object(contract[key]) && strings(contract[key].required, 1))
    && object(contract.common) && object(contract.issue.submission)
    && [contract.lane.status, contract.source.kind, contract.browser.lifecycle, contract.feature.availability, contract.issue.kind, contract.issue.status, contract.issue.reproduction, contract.issue.submission.status, contract.common.evidenceType, contract.common.confidence].every(values => strings(values, 1));
  if (!c.check(contractValid, 'data/contract.json', 'contract', 'Unsupported or malformed version-1 contract.')) return c.result;
  if (!c.check(Array.isArray(data.lanes), 'data/lanes', 'type', 'Expected an array of lane objects.')) return c.result;
  const indexes = { lanes: new Map(), sources: new Map(), browsers: new Map(), features: new Map(), issues: new Map(), recommendations: new Map() };
  data.lanes.forEach((lane, index) => {
    const path = LANES.includes(lane?.id) ? `data/lanes/${lane.id}.json` : `data/lanes[${index}]`;
    if (!c.required(lane, contract.lane.required, path)) return;
    c.check(LANES.includes(lane.id), `${path}.id`, 'lane-id', 'Lane ID must be R01 through R10.');
    c.check(!indexes.lanes.has(lane.id), `${path}.id`, 'duplicate-lane', 'Lane is defined more than once.');
    if (LANES.includes(lane.id) && !indexes.lanes.has(lane.id)) indexes.lanes.set(lane.id, lane);
    c.check(lane.schemaVersion === contract.schemaVersion, `${path}.schemaVersion`, 'version', 'Schema version must match the contract.');
    for (const key of ['title']) c.check(text(lane[key]), `${path}.${key}`, 'type', 'Expected a nonblank string.');
    c.check(text(lane.scope) || strings(lane.scope, 1), `${path}.scope`, 'type', 'Scope must be a nonblank string or a nonempty string array.');
    c.check(session(lane.agentSessionId), `${path}.agentSessionId`, 'session', 'Expected a session identifier.');
    c.enum(lane.status, contract.lane.status, `${path}.status`);
    c.texts(lane.limitations, `${path}.limitations`);
    if (!allowPartial) c.check(lane.status === 'complete', `${path}.status`, 'incomplete', 'Strict validation requires a completed lane.');
    for (const collection of Object.keys(COLLECTIONS)) {
      if (!c.check(Array.isArray(lane[collection]), `${path}.${collection}`, 'type', 'Expected a record array.')) continue;
      c.result.counts[collection] += lane[collection].length;
      lane[collection].forEach((record, i) => {
        if (!object(record)) return;
        c.id(record.id, `${path}.${collection}[${i}].id`, lane.id);
        if (text(record.id) && !indexes[collection].has(record.id)) indexes[collection].set(record.id, record);
      });
    }
  });
  c.result.counts.lanes = indexes.lanes.size;
  if (!allowPartial) {
    for (const id of LANES) c.check(indexes.lanes.has(id), `data/lanes/${id}.json`, 'missing-lane', 'Strict validation requires all ten lane shards.');
  }
  for (const [laneId, lane] of indexes.lanes) {
    const path = `data/lanes/${laneId}.json`;
    const local = Object.fromEntries(Object.keys(COLLECTIONS).map(key => [key, new Map((Array.isArray(lane[key]) ? lane[key] : []).filter(record => object(record) && text(record.id)).map(record => [record.id, record]))]));
    if (!allowPartial) {
      c.check(local.sources.size > 0, `${path}.sources`, 'incomplete', 'A completed research lane must contain sources.');
      if (LANES.indexOf(laneId) < 6) {
        c.check(local.browsers.size > 0 && local.features.size > 0, path, 'incomplete-features', 'Browser-family lanes require browser and substantive feature records.');
        for (const browser of local.browsers.values()) c.check([...local.features.values()].some(feature => feature.browserId === browser.id && text(feature.description) && strings(feature.sourceIds, 1)), `${path}.features`, 'incomplete-features', 'Every browser in a browser-family lane needs at least one cited feature.');
      }
    }
    for (const [collection, kind] of Object.entries(COLLECTIONS)) {
      if (!Array.isArray(lane[collection])) continue;
      lane[collection].forEach((record, index) => {
        const at = `${path}.${collection}[${index}]`;
        if (!c.required(record, contract[kind].required, at)) return;
        if (kind === 'source') { validateSource(c, record, at, contract); return; }
        c.enum(record.evidenceType, contract.common.evidenceType, `${at}.evidenceType`);
        c.enum(record.confidence, contract.common.confidence, `${at}.confidence`);
        c.texts(record.limitations, `${at}.limitations`);
        if (kind === 'browser') {
          for (const key of ['name', 'engine', 'summary']) c.check(text(record[key]), `${at}.${key}`, 'type', 'Expected a nonblank string.');
          c.texts(record.platforms, `${at}.platforms`, 1);
          c.enum(record.lifecycle, contract.browser.lifecycle, `${at}.lifecycle`);
        } else if (kind === 'feature') {
          for (const key of ['title', 'category', 'description']) c.check(text(record[key]), `${at}.${key}`, 'type', 'Expected a nonblank string.');
          c.texts(record.platforms, `${at}.platforms`, 1);
          c.enum(record.availability, contract.feature.availability, `${at}.availability`);
        } else validateIssue(c, record, at, contract, local.sources);
      });
    }
    recursiveReferences(c, lane, path, local);
    walk(lane, path, (record, at) => {
      // Extra metadata can contain external numeric component IDs and REA IDs. Only lane-owned IDs join this namespace.
      if (text(record.id) && record.id.startsWith(`${laneId}-`)) c.id(record.id, `${at}.id`, laneId);
    });
  }
  validateSupplements(c, data, indexes, contract, allowPartial);
  for (const [key, value] of Object.entries(data)) {
    if (key !== 'lanes' && value !== undefined) c.result.errors.push(...screenPublicData(value, `data/${safeSegment(key)}.json`));
  }
  data.lanes.forEach((lane, index) => c.result.errors.push(...screenPublicData(lane, LANES.includes(lane?.id) ? `data/lanes/${lane.id}.json` : `data/lanes[${index}]`)));
  c.result.counts.newSubmissions = c.receipts.size;
  return c.result;
}

function validateRecommendations(c, value, indexes) {
  const path = 'data/recommendations.json';
  if (!c.required(value, ['schemaVersion', 'asOf', 'scope', 'recommendations'], path)) return;
  c.check(value.schemaVersion === 1, `${path}.schemaVersion`, 'version', 'Expected schema version 1.');
  c.date(value.asOf, `${path}.asOf`);
  c.check(text(value.scope), `${path}.scope`, 'type', 'Expected a research scope.');
  if (!c.check(Array.isArray(value.recommendations), `${path}.recommendations`, 'type', 'Expected recommendations.')) return;
  value.recommendations.forEach((record, index) => {
    const at = `${path}.recommendations[${index}]`;
    const keys = ['id', 'title', 'priority', 'category', 'target', 'status', 'chromeParity', 'chromeBaselineFeatureIds', 'comparatorFeatureIds', 'chromeBaseline', 'sourceIds', 'proposal', 'acceptanceCriteria', 'tradeoffs', 'limitations'];
    if (!c.required(record, keys, at)) return;
    c.id(record.id, `${at}.id`);
    if (text(record.id)) indexes.recommendations.set(record.id, record);
    for (const key of ['title', 'category', 'target', 'chromeBaseline', 'proposal']) c.check(text(record[key]), `${at}.${key}`, 'type', 'Expected nonblank proposal text.');
    c.enum(record.priority, ['P1', 'P2'], `${at}.priority`);
    c.enum(record.status, ['needs-validation', 'proposal'], `${at}.status`);
    c.enum(record.chromeParity, ['documented-gap', 'partial-baseline', 'unassessed'], `${at}.chromeParity`);
    for (const key of ['acceptanceCriteria', 'tradeoffs', 'limitations']) c.texts(record[key], `${at}.${key}`, 1);
    for (const key of ['chromeBaselineFeatureIds', 'comparatorFeatureIds']) references(c, record[key], `${at}.${key}`, indexes.features);
    if (strings(record.chromeBaselineFeatureIds, 1)) {
      c.check(record.chromeBaselineFeatureIds.every(id => id.startsWith('R01-')), `${at}.chromeBaselineFeatureIds`, 'baseline', 'Chrome baselines must reference the Chrome research lane.');
      if (record.chromeParity === 'documented-gap') c.check(record.chromeBaselineFeatureIds.some(id => indexes.features.get(id)?.availability === 'explicitly-unsupported'), `${at}.chromeParity`, 'gap-evidence', 'A documented gap needs an explicitly unsupported Chrome baseline.');
    }
    if (strings(record.comparatorFeatureIds, 1)) c.check(record.comparatorFeatureIds.every(id => !id.startsWith('R01-')), `${at}.comparatorFeatureIds`, 'comparator', 'Comparator features must refer to alternatives.');
    recursiveReferences(c, record, at, indexes);
  });
  c.result.counts.recommendations = value.recommendations.length;
}

function validateAgents(c, value) {
  const path = 'data/agents.json';
  if (!c.required(value, ['schemaVersion', 'asOf', 'agents', 'limitations'], path)) return;
  c.check(value.schemaVersion === 1, `${path}.schemaVersion`, 'version', 'Expected schema version 1.');
  c.date(value.asOf, `${path}.asOf`);
  c.texts(value.limitations, `${path}.limitations`);
  if (!c.check(Array.isArray(value.agents), `${path}.agents`, 'type', 'Expected an agent array.')) return;
  const sessions = new Set();
  value.agents.forEach((record, index) => {
    const at = `${path}.agents[${index}]`;
    if (!c.required(record, ['id', 'sessionId', 'role', 'deliverables', 'status', 'outcome'], at)) return;
    c.id(record.id, `${at}.id`);
    c.check(session(record.sessionId), `${at}.sessionId`, 'session', 'Expected a session identifier.');
    c.check(!sessions.has(record.sessionId), `${at}.sessionId`, 'duplicate-session', 'A continuation is not a new agent.');
    sessions.add(record.sessionId);
    for (const key of ['role', 'status', 'outcome']) c.check(text(record[key]), `${at}.${key}`, 'type', 'Expected nonblank agent evidence.');
    c.texts(record.deliverables, `${at}.deliverables`);
    if (Array.isArray(record.deliverables)) record.deliverables.forEach((entry, i) => c.check(safeRelativePath(entry), `${at}.deliverables[${i}]`, 'path', 'Deliverables must use repository-relative paths.'));
  });
  value.agents.forEach((record, index) => {
    if (object(record) && own(record, 'parentSessionId')) c.check(sessions.has(record.parentSessionId), `${path}.agents[${index}].parentSessionId`, 'reference', 'Parent session must appear in the agent ledger.');
  });
}

function validateEnvironment(c, value) {
  const path = 'data/environment.json';
  if (!c.required(value, ['schemaVersion', 'observedAt', 'credentialValuesIncluded', 'variables', 'limitations'], path)) return;
  c.check(value.schemaVersion === 1, `${path}.schemaVersion`, 'version', 'Expected schema version 1.');
  c.date(value.observedAt, `${path}.observedAt`);
  c.check(value.credentialValuesIncluded === false, `${path}.credentialValuesIncluded`, 'environment', 'Public metadata must exclude credential values.');
  c.texts(value.limitations, `${path}.limitations`);
  if (!c.check(Array.isArray(value.variables), `${path}.variables`, 'type', 'Expected a variable catalogue.')) return;
  const names = new Set();
  value.variables.forEach((record, index) => {
    const at = `${path}.variables[${index}]`;
    if (!c.required(record, ['name', 'origin', 'example', 'requiredByTracker', 'note'], at)) return;
    c.check(typeof record.name === 'string' && /^[A-Z_][A-Z0-9_]*$/.test(record.name), `${at}.name`, 'environment', 'Expected an environment-variable name.');
    c.check(!names.has(record.name), `${at}.name`, 'environment', 'Variable names must be unique.');
    names.add(record.name);
    const publicConstant = record.origin === 'documented-build-setting' && record.name === 'DEPOT_TOOLS_WIN_TOOLCHAIN' && record.example === '0';
    c.check(placeholder(record.example) || publicConstant, `${at}.example`, 'environment', 'Only placeholders or the documented local-toolchain constant are public examples.');
    c.check(!own(record, 'value'), `${at}.value`, 'environment', 'Raw environment values are not part of the catalogue.');
    c.check(typeof record.requiredByTracker === 'boolean', `${at}.requiredByTracker`, 'type', 'Expected a boolean.');
    for (const key of ['origin', 'note']) c.check(text(record[key]), `${at}.${key}`, 'type', 'Expected explanatory text.');
  });
}

function validateRuntime(c, value, contract) {
  const path = 'data/runtime.json';
  if (!c.required(value, ['id', 'status', 'agentSessionId', 'sources', 'testedArtifact', 'nativeChecks', 'unrunSourceFollowups', 'counts', 'limitations'], path)) return;
  c.id(value.id, `${path}.id`);
  c.enum(value.status, ['partial', 'complete'], `${path}.status`);
  c.check(session(value.agentSessionId), `${path}.agentSessionId`, 'session', 'Expected a session identifier.');
  c.texts(value.limitations, `${path}.limitations`);
  const sources = new Map();
  if (c.check(Array.isArray(value.sources), `${path}.sources`, 'type', 'Expected runtime sources.')) value.sources.forEach((source, index) => {
    const at = `${path}.sources[${index}]`;
    if (!object(source)) { c.check(false, at, 'type', 'Expected a source object.'); return; }
    c.id(source.id, `${at}.id`);
    sources.set(source.id, source);
    validateSource(c, source, at, contract, true);
  });
  if (c.required(value.testedArtifact, ['fileVersion', 'sha256', 'lengthBytes'], `${path}.testedArtifact`)) {
    c.check(text(value.testedArtifact.fileVersion), `${path}.testedArtifact.fileVersion`, 'runtime', 'A tested artifact needs a version.');
    c.check(digest(value.testedArtifact.sha256), `${path}.testedArtifact.sha256`, 'digest', 'Expected a SHA-256.');
    c.integer(value.testedArtifact.lengthBytes, `${path}.testedArtifact.lengthBytes`);
  }
  const totals = [];
  for (const [key, countKey] of [['nativeChecks', 'nativeChecklist'], ['unrunSourceFollowups', 'sourceFollowups']]) {
    if (!c.check(Array.isArray(value[key]), `${path}.${key}`, 'type', 'Expected runtime checks.')) continue;
    const counts = { total: value[key].length, pass: 0, fail: 0, unrun: 0 };
    value[key].forEach((record, index) => {
      const at = `${path}.${key}[${index}]`;
      if (!c.required(record, ['id', 'title', 'status'], at)) return;
      c.id(record.id, `${at}.id`);
      c.enum(record.status, key === 'unrunSourceFollowups' ? ['unrun'] : ['pass', 'fail', 'unrun'], `${at}.status`);
      if (own(counts, record.status)) counts[record.status]++;
      if (key === 'nativeChecks') {
        for (const field of ['expected', 'observed']) c.check(text(record[field]), `${at}.${field}`, 'runtime', 'A runtime check must explain its result.');
        if (record.status !== 'unrun') c.check(strings(record.sourceIds, 1) && record.sourceIds.some(id => sources.get(id)?.kind === 'local-runtime-evidence'), `${at}.sourceIds`, 'runtime-evidence', 'Executed checks need a local runtime evidence reference.');
      }
    });
    totals.push(counts);
    for (const [key, count] of Object.entries(counts)) c.check(value.counts?.[countKey]?.[key] === count, `${path}.counts.${countKey}.${key}`, 'runtime-count', 'Runtime counts must match saved checks.');
  }
  if (totals.length === 2) for (const key of ['total', 'pass', 'fail', 'unrun']) c.check(value.counts?.combined?.[key] === totals[0][key] + totals[1][key], `${path}.counts.combined.${key}`, 'runtime-count', 'Combined counts must match both check collections.');
  if (value.status === 'complete') c.check(totals.every(counts => counts.unrun === 0), `${path}.status`, 'runtime-status', 'Unrun checks require partial coverage status.');
  recursiveReferences(c, value, path, { sources });
  if (value.submission) submission(c, value.submission, `${path}.submission`, contract);
}

function validateSubmissions(c, value, indexes, contract) {
  const path = 'data/submissions.json';
  if (!c.required(value, ['schemaVersion', 'asOf', 'channels', 'records', 'limitations'], path)) return;
  c.check(value.schemaVersion === 1, `${path}.schemaVersion`, 'version', 'Expected schema version 1.');
  c.date(value.asOf, `${path}.asOf`);
  c.texts(value.limitations, `${path}.limitations`);
  const channels = new Set();
  if (c.check(Array.isArray(value.channels), `${path}.channels`, 'type', 'Expected channels.')) value.channels.forEach((channel, index) => {
    const at = `${path}.channels[${index}]`;
    if (!c.required(channel, ['id', 'url', 'purpose', 'sourceIds'], at)) return;
    c.id(channel.id, `${at}.id`);
    channels.add(channel.id);
    c.url(channel.url, `${at}.url`);
    references(c, channel.sourceIds, `${at}.sourceIds`, indexes.sources, false);
  });
  const googleReceipts = new Set();
  if (c.check(Array.isArray(value.records), `${path}.records`, 'type', 'Expected submission records.')) value.records.forEach((record, index) => {
    const at = `${path}.records[${index}]`;
    if (!c.required(record, ['id', 'channelId', 'status', 'url', 'reason'], at)) return;
    c.id(record.id, `${at}.id`);
    c.check(channels.has(record.channelId), `${at}.channelId`, 'reference', 'Unknown reporting channel.');
    const valid = submission(c, record, at, contract);
    if (valid && record.channelId === 'google-chromium') googleReceipts.add(resourceUrl(record.url));
    if (own(record, 'recommendationId')) c.check(indexes.recommendations.has(record.recommendationId), `${at}.recommendationId`, 'reference', 'Unknown recommendation.');
    recursiveReferences(c, record, at, indexes);
  });
  if (own(value, 'googleSubmission')) {
    submission(c, value.googleSubmission, `${path}.googleSubmission`, contract, { aggregate: true });
    c.check(value.googleSubmission?.newReportsSubmitted === googleReceipts.size, `${path}.googleSubmission.newReportsSubmitted`, 'submission-count', 'Google counts must match individually verified Google records.');
  }
}

function validateSupplements(c, data, indexes, contract) {
  if (own(data, 'recommendations')) validateRecommendations(c, data.recommendations, indexes);
  if (own(data, 'agents')) validateAgents(c, data.agents);
  if (own(data, 'environment')) validateEnvironment(c, data.environment);
  if (own(data, 'runtime')) validateRuntime(c, data.runtime, contract);
  if (own(data, 'submissions')) validateSubmissions(c, data.submissions, indexes, contract);
  if (own(data, 'projectStatus')) {
    const value = data.projectStatus;
    const path = 'data/project-status.json';
    if (!c.required(value, ['schemaVersion', 'asOf', 'overallStatus', 'build', 'credentialValuesIncluded'], path)) return;
    c.date(value.asOf, `${path}.asOf`);
    c.check(value.credentialValuesIncluded === false, `${path}.credentialValuesIncluded`, 'environment', 'Project status must not include credential values.');
    if (c.check(object(value.build), `${path}.build`, 'type', 'Expected build status.')) {
      c.check(typeof value.build.compiledBrowser === 'boolean', `${path}.build.compiledBrowser`, 'build', 'Build completion must be explicit.');
      if (value.build.compiledBrowser) {
        c.check(text(value.build.sourceRevision) && /^[a-f0-9]{40}$/i.test(value.build.sourceRevision), `${path}.build.sourceRevision`, 'build', 'A completed build needs its source revision.');
        c.check(object(value.build.artifact) && digest(value.build.artifact.sha256) && Number.isSafeInteger(value.build.artifact.sizeBytes) && value.build.artifact.sizeBytes > 0, `${path}.build.artifact`, 'build', 'A completed browser build needs an identified artifact.');
        c.check(value.build.exitCode === 0 && concreteEvidence(value.build.evidence), `${path}.build.evidence`, 'build', 'A completed build needs a successful command and concrete evidence.');
      } else c.check(value.build.artifact === null, `${path}.build.artifact`, 'build', 'An unfinished build cannot claim a compiled artifact.');
    }
    if (data.submissions?.googleSubmission && value.googleReporting) c.check(value.googleReporting.newReportsSubmitted === data.submissions.googleSubmission.newReportsSubmitted, `${path}.googleReporting.newReportsSubmitted`, 'submission-count', 'Project Google count must match the receipt ledger.');
  }
}

export async function validateRepository(root = ROOT, options = {}) {
  const errors = [];
  const data = {};
  const readJson = async (name, required = false) => {
    try {
      const path = join(root, name);
      const info = await lstat(path);
      if (!info.isFile() || info.isSymbolicLink()) { errors.push(issue(name, 'file', 'Expected a regular local data file.')); return undefined; }
      const body = await readFile(path, 'utf8');
      try { return JSON.parse(body.replace(/^\uFEFF/, '')); }
      catch { errors.push(issue(name, 'json', 'Invalid JSON; file contents are not printed.')); return undefined; }
    } catch (error) {
      if (required || error.code !== 'ENOENT') errors.push(issue(name, 'read', 'Required input is missing or unreadable.'));
      return undefined;
    }
  };
  data.contract = await readJson('data/contract.json', true);
  data.lanes = [];
  try {
    const directory = join(root, 'data/lanes');
    if ((await lstat(directory)).isSymbolicLink()) throw new Error('Linked data directory');
    for (const name of (await readdir(directory)).sort()) {
      if (!/^R(?:0[1-9]|10)\.json$/.test(name)) { errors.push(issue('data/lanes', 'filename', 'Unexpected lane file; expected R01.json through R10.json.')); continue; }
      const lane = await readJson(`data/lanes/${name}`, true);
      if (lane !== undefined) {
        if (lane?.id !== name.slice(0, -5)) errors.push(issue(`data/lanes/${name}`, 'filename', 'Lane ID does not match the file name.'));
        data.lanes.push(lane);
      }
    }
  } catch { errors.push(issue('data/lanes', 'read', 'Lane directory is missing, linked or unreadable.')); }
  for (const [key, filename] of Object.entries({ recommendations: 'recommendations', agents: 'agents', environment: 'environment', runtime: 'runtime', submissions: 'submissions', projectStatus: 'project-status' })) {
    const value = await readJson(`data/${filename}.json`);
    if (value !== undefined) data[key] = value;
  }
  const result = validateDataset(data, options);
  result.errors.unshift(...errors);
  let entries = [];
  try { entries = await readdir(root, { withFileTypes: true }); }
  catch { result.errors.push(issue('repository', 'read', 'Repository root is unreadable.')); }
  for (const entry of entries) {
    if (!entry.name.endsWith('.md') && entry.name !== '.env.example') continue;
    if (entry.isSymbolicLink() || !entry.isFile()) { result.errors.push(issue(safeSegment(entry.name), 'file', 'Public prose must be a regular file.')); continue; }
    try {
      result.errors.push(...screenPublicText(await readFile(join(root, entry.name), 'utf8'), entry.name));
      result.counts.publicFiles++;
    } catch { result.errors.push(issue(entry.name, 'read', 'Public file is unreadable.')); }
  }
  result.counts.publicFiles += data.lanes.length + Object.keys(data).length - 1;
  return result;
}

async function main(args) {
  let root = ROOT;
  let json = false;
  let allowPartial = false;
  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    if (arg === '--json') json = true;
    else if (arg === '--allow-partial') allowPartial = true;
    else if (arg === '--root' && args[index + 1] && !args[index + 1].startsWith('--')) root = resolve(args[++index]);
    else if (arg === '--help') { console.log('Usage: node scripts/validate.mjs [--root <directory>] [--allow-partial] [--json]'); return; }
    else throw new Error('Unknown or incomplete validator option.');
  }
  const result = await validateRepository(root, { allowPartial });
  if (json) console.log(JSON.stringify(result, null, 2));
  else {
    for (const error of result.errors) console.error(`${error.path}: [${error.code}] ${error.message}`);
    console.log(`${result.errors.length ? 'FAIL' : 'PASS'}: ${result.counts.lanes} lanes, ${result.counts.browsers} browsers, ${result.counts.features} features, ${result.counts.sources} sources, ${result.counts.issues} issue records, ${result.counts.recommendations} recommendations; ${result.errors.length} errors.`);
  }
  process.exitCode = result.errors.length ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main(process.argv.slice(2)).catch(() => {
    const result = { errors: [issue('validator', 'execution', 'Validation could not finish; no input contents are printed.')] };
    if (process.argv.includes('--json')) console.log(JSON.stringify(result));
    else console.error(result.errors[0].message);
    process.exitCode = 1;
  });
}
