import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile, mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isRealDate, isSafeUrl, screenPublicText, validateDataset } from '../scripts/validate.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const contract = JSON.parse(await readFile(join(root, 'data/contract.json'), 'utf8'));

function fixture() {
  const lanes = Array.from({ length: 10 }, (_, index) => {
    const id = `R${String(index + 1).padStart(2, '0')}`;
    const source = { id: `${id}-S1`, title: 'Published evidence', url: `https://example.test/${id}/evidence`, retrievedAt: '2026-11-21', publishedAt: null, kind: 'vendor-documentation', limitations: ['Documentary only.'] };
    const browser = { id: `${id}-B1`, name: 'Example browser', engine: 'Example engine', platforms: ['Windows'], lifecycle: 'active', summary: 'Vendor documented example.', sourceIds: [source.id], evidenceType: 'vendor-documented', confidence: 'medium', limitations: ['Not installed.'] };
    const feature = { id: `${id}-F1`, browserId: browser.id, title: 'Example feature', category: 'navigation', description: 'A documented navigation capability.', platforms: ['Windows'], availability: 'documented', sourceIds: [source.id], evidenceType: 'vendor-documented', confidence: 'medium', limitations: ['Not exercised.'] };
    return { schemaVersion: 1, id, title: `Research ${id}`, agentSessionId: `ses_fixture${index}`, scope: 'A bounded research domain.', status: 'complete', sources: [source], browsers: index < 6 ? [browser] : [], features: index < 6 ? [feature] : [], issues: [], limitations: ['Bounded coverage.'] };
  });
  return { contract, lanes };
}

function upstreamIssue() {
  return { id: 'R07-I1', title: 'Existing upstream report', kind: 'upstream-report', status: 'upstream-open', sourceIds: ['R07-S1'], upstreamUrl: 'https://example.test/R07/evidence', upstreamStatus: 'Assigned', reportedVersions: ['123.0'], testedVersions: [], reproduction: 'not-run', steps: ['Reported: open the menu.'], expected: 'Reported expected outcome.', observed: 'Reporter describes an inconsistency.', evidenceType: 'upstream-reported', confidence: 'medium', limitations: ['Not reproduced by this project.'], submission: { status: 'existing-upstream', url: 'https://example.test/R07/evidence', reason: 'Existing report, not our submission.' } };
}

function verifiedSubmission(url) {
  return { status: 'submitted', url, reason: 'Synthetic verified receipt.', receipt: { verified: true, url, observedAt: '2026-11-21T12:00:00Z', reference: 'tool-result:call_synthetic_receipt' } };
}

function runtimeWithUnrunFollowup() {
  return {
    id: 'R11-runtime', status: 'partial', agentSessionId: 'ses_fixtureRuntime', sources: [],
    testedArtifact: { fileVersion: '123.0.0.0', sha256: 'a'.repeat(64), lengthBytes: 1 },
    nativeChecks: [],
    unrunSourceFollowups: [{ id: 'R11-followup', title: 'Exercise a source behavior in its test fixture.', status: 'unrun', reason: 'The source test has not been executed.' }],
    counts: {
      nativeChecklist: { total: 0, pass: 0, fail: 0, unrun: 0 },
      sourceFollowups: { total: 1, pass: 0, fail: 0, unrun: 1 },
      combined: { total: 1, pass: 0, fail: 0, unrun: 1 },
    },
    limitations: ['Source follow-up remains unrun.'],
  };
}

const codes = result => result.errors.map(error => error.code);

test('CLI rejects an absent dataset instead of reporting silent success', async t => {
  const base = join(tmpdir(), 'opencode');
  await mkdir(base, { recursive: true });
  const sandbox = await mkdtemp(join(base, 'chrome-validator-'));
  t.after(() => rm(sandbox, { recursive: true, force: true }));
  const result = spawnSync(process.execPath, [join(root, 'scripts/validate.mjs'), '--root', sandbox, '--json'], { encoding: 'utf8', timeout: 30000 });
  assert.equal(result.status, 1, 'Missing inputs must not yield a successful exit.');
  const output = JSON.parse(result.stdout);
  assert.ok(output.errors.length > 0);
});

test('valid evidence passes without rewriting the input or counting existing reports as new', () => {
  const input = fixture();
  input.lanes[6].issues.push(upstreamIssue());
  const before = JSON.stringify(input);
  const result = validateDataset(input);
  assert.deepEqual(result.errors, []);
  assert.equal(result.counts.lanes, 10);
  assert.equal(result.counts.browsers, 6);
  assert.equal(result.counts.newSubmissions, 0);
  assert.equal(JSON.stringify(input), before);
});

test('partial mode permits missing lanes but retains citation validation', () => {
  const input = fixture();
  input.lanes = [input.lanes[0]];
  input.lanes[0].status = 'partial';
  assert.ok(codes(validateDataset(input)).includes('missing-lane'));
  assert.deepEqual(validateDataset(input, { allowPartial: true }).errors, []);
  input.lanes[0].features[0].sourceIds = ['R02-S1'];
  assert.ok(codes(validateDataset(input, { allowPartial: true })).includes('reference'));
});

test('all browser-family records require substantive feature coverage', () => {
  const input = fixture();
  input.lanes[1].features = [];
  assert.ok(codes(validateDataset(input)).includes('incomplete-features'));
});

test('duplicate IDs and nested cross-lane citations cannot pass as valid evidence', () => {
  const input = fixture();
  input.lanes[0].sources.push(structuredClone(input.lanes[0].sources[0]));
  input.lanes[0].features[0].quotations = [{ text: 'Wrong citation domain.', sourceIds: ['R02-S1'] }];
  const result = validateDataset(input);
  assert.ok(codes(result).includes('duplicate-id'));
  assert.ok(codes(result).includes('reference'));
});

test('source citations cannot be promoted to a local browser reproduction', () => {
  const input = fixture();
  const record = upstreamIssue();
  record.reproduction = 'local-reproduced';
  record.evidenceType = 'locally-observed';
  record.testedVersions = ['Chrome 123.0 on Windows'];
  input.lanes[6].issues.push(record);
  assert.ok(codes(validateDataset(input)).includes('reproduction-evidence'));
  record.reproductionEvidence = [{ kind: 'browser-runtime', observedAt: '2026-11-21', artifact: 'evidence/menu.json', sha256: 'a'.repeat(64) }];
  assert.deepEqual(validateDataset(input).errors, []);
});

test('a form URL, bare receipt assertion, or old upstream report is not a new submission', () => {
  const input = fixture();
  const record = upstreamIssue();
  record.submission = { status: 'submitted', url: 'https://issues.chromium.org/issues/new', reason: 'Attempted navigation.' };
  input.lanes[6].issues.push(record);
  const result = validateDataset(input);
  assert.ok(codes(result).includes('existing-upstream'));
  assert.ok(codes(result).includes('receipt-evidence'));
  assert.ok(codes(result).includes('receipt'));
  assert.equal(result.counts.newSubmissions, 0);
});

for (const [status, evidenceType, upstreamStatus] of [
  ['upstream-open', 'upstream-reported', 'Assigned'],
  ['upstream-closed', 'upstream-reported', 'Fixed'],
  ['upstream-open', 'hypothesis', 'Assigned'],
  ['proposal', 'upstream-reported', 'Assigned'],
]) {
  test(`existing feature-proposal (${status}, ${evidenceType}) is not a new submission`, () => {
    const input = fixture();
    const url = 'https://issues.chromium.org/issues/483899631';
    Object.assign(input.lanes[6].sources[0], { url, kind: 'issue-tracker' });
    const record = { ...upstreamIssue(), kind: 'feature-proposal', status, evidenceType, upstreamStatus, upstreamUrl: url };
    record.submission.url = url;
    input.lanes[6].issues.push(record);
    assert.deepEqual(validateDataset(input).errors, [], 'The existing-upstream fixture must be valid before promotion.');

    record.submission = verifiedSubmission(url);
    const result = validateDataset(input);
    assert.deepEqual(result.errors.map(({ path, code }) => ({ path, code })), [{ path: 'data/lanes/R07.json.issues[0].submission', code: 'existing-upstream' }]);
    assert.equal(result.counts.newSubmissions, 0);
  });
}

for (const [kind, status, evidenceType] of [
  ['feature-proposal', 'proposal', 'hypothesis'],
  ['source-inconsistency', 'needs-validation', 'source-inspected'],
]) {
  test(`a new project-origin ${kind} with a verified receipt counts as a submission`, () => {
    const input = fixture();
    const record = {
      ...upstreamIssue(), kind, status, evidenceType, title: 'Project-origin finding',
      upstreamUrl: null, upstreamStatus: null, reportedVersions: [], steps: [],
      expected: 'Proposed expected behavior.', observed: 'Research identified an opportunity for validation.',
      limitations: ['Project-origin finding, not a local browser reproduction.'],
      submission: verifiedSubmission('https://issues.chromium.org/issues/987654321'),
    };
    input.lanes[6].issues.push(record);
    let result = validateDataset(input);
    assert.deepEqual(result.errors, []);
    assert.equal(result.counts.newSubmissions, 1);

    record.upstreamUrl = record.submission.url;
    record.upstreamStatus = 'New';
    result = validateDataset(input);
    assert.deepEqual(result.errors, [], 'Retaining the new receipt metadata does not change project provenance.');
    assert.equal(result.counts.newSubmissions, 1);
  });
}

for (const status of ['pass', 'fail']) {
  test(`an unrun source follow-up cannot become ${status} by updating its counters`, () => {
    const input = fixture();
    input.runtime = runtimeWithUnrunFollowup();
    assert.deepEqual(validateDataset(input).errors, [], 'The unrun fixture must be valid before promotion.');

    input.runtime.unrunSourceFollowups[0].status = status;
    for (const key of ['sourceFollowups', 'combined']) input.runtime.counts[key] = { total: 1, pass: status === 'pass' ? 1 : 0, fail: status === 'fail' ? 1 : 0, unrun: 0 };
    const result = validateDataset(input);
    assert.deepEqual(result.errors.map(({ path, code }) => ({ path, code })), [{ path: 'data/runtime.json.unrunSourceFollowups[0].status', code: 'enum' }]);
  });
}

test('a native check with concrete runtime evidence can pass while a source follow-up stays unrun', () => {
  const input = fixture();
  input.runtime = runtimeWithUnrunFollowup();
  input.runtime.sources.push({ id: 'R11-S1', title: 'Synthetic runtime evidence', kind: 'local-runtime-evidence', url: null, retrievedAt: '2026-11-21', publishedAt: null, artifact: 'evidence/native.json', sha256: 'b'.repeat(64), retention: 'local-only', limitations: ['Synthetic fixture.'] });
  input.runtime.nativeChecks.push({ id: 'R11-native', title: 'Inspect the native interface.', status: 'pass', expected: 'The menu is present.', observed: 'The menu was present.', sourceIds: ['R11-S1'] });
  input.runtime.counts.nativeChecklist = { total: 1, pass: 1, fail: 0, unrun: 0 };
  input.runtime.counts.combined = { total: 2, pass: 1, fail: 0, unrun: 1 };
  assert.deepEqual(validateDataset(input).errors, []);
});

for (const [name, publishedAt, retrievedAt, valid] of [
  ['later publication on the same UTC day', '2026-11-21T12:00:00Z', '2026-11-21T11:00:00Z', false],
  ['earlier publication on the next local day', '2026-11-22T00:30:00+05:30', '2026-11-21T20:00:00Z', true],
  ['later publication on the previous local day', '2026-11-21T23:30:00-0500', '2026-11-22T01:00:00Z', false],
  ['equal instants across local days with minute precision and a compact offset', '2026-11-22T00:30+0530', '2026-11-21T19:00Z', true],
  ['equal instants with different fractional precision', '2026-11-21T12:00:00.1234567000Z', '2026-11-21T12:00:00.1234567Z', true],
  ['sub-millisecond publication after retrieval', '2026-11-21T12:00:00.1234568Z', '2026-11-21T12:00:00.1234567Z', false],
  ['sub-millisecond publication before retrieval', '2026-11-21T12:00:00.1234566Z', '2026-11-21T12:00:00.1234567Z', true],
  ['negative offset making a same-day publication later', '2026-11-21T10:00:00-05:00', '2026-11-21T12:00:00Z', false],
  ['date-only publication keeps the written day despite a positive retrieval offset', '2026-11-21', '2026-11-21T00:30:00+05:30', true],
  ['date-only retrieval keeps the written day despite a negative publication offset', '2026-11-21T23:30:00-05:00', '2026-11-21', true],
  ['a later date-only publication is rejected even when retrieval is next day in UTC', '2026-11-22', '2026-11-21T23:30:00-05:00', false],
  ['a later written publication day is rejected when retrieval is date-only', '2026-11-22T00:30:00+05:30', '2026-11-21', false],
  ['equal date-only values', '2026-11-21', '2026-11-21', true],
  ['later date-only publication', '2026-11-22', '2026-11-21', false],
]) {
  test(`source date ordering: ${name}`, () => {
    const input = fixture();
    Object.assign(input.lanes[0].sources[0], { publishedAt, retrievedAt });
    const result = validateDataset(input);
    assert.deepEqual(result.errors.map(({ path, code }) => ({ path, code })), valid ? [] : [{ path: 'data/lanes/R01.json.sources[0].publishedAt', code: 'date-order' }]);
  });
}

for (const field of ['publishedAt', 'retrievedAt']) {
  test(`timezone-less ${field} timestamps are rejected instead of resolved in the host timezone`, () => {
    for (const value of ['2026-11-21T12:00', '2026-11-21T12:00:00', '2026-11-21T12:00:00.1234567']) {
      const input = fixture();
      Object.assign(input.lanes[0].sources[0], { publishedAt: '2026-11-21T12:00:00Z', retrievedAt: '2026-11-21T13:00:00Z', [field]: value });
      const result = validateDataset(input);
      assert.deepEqual(result.errors.map(({ path, code }) => ({ path, code })), [{ path: `data/lanes/R01.json.sources[0].${field}`, code: 'date' }], value);
    }
  });
}

test('real calendar boundaries accept leap days and reject rollover dates', () => {
  const cases = [
    ['2000-02-29', true], ['1900-02-29', false], ['2024-02-29', true], ['2026-02-29', false],
    ['2026-04-31', false], ['2026-00-12', false], ['2026-11-00', false],
    ['2026-11-21T23:59:59.1234567+05:30', true], ['2026-11-21T24:00:00Z', false],
    ['2026-11-21T12:60:00Z', false], ['2026-11-21T12:00:00+05:60', false],
  ];
  for (const [value, valid] of cases) assert.equal(isRealDate(value), valid, value);
  for (const month of ['01', '03', '05', '07', '08', '10', '12']) {
    assert.equal(isRealDate(`2026-${month}-31`), true);
    assert.equal(isRealDate(`2026-${month}-32`), false);
  }
});

test('source URLs preserve public query data and reject authentication material', () => {
  assert.equal(isSafeUrl('https://example.test/help?hl=en&co=GENIE.Platform%3DAndroid#L7-L12'), true);
  for (const url of [
    'javascript:alert(1)', 'https://user:password@example.test/', 'https://example.test/?access_token=private',
    'https://example.test/#id_token=private', 'https://example.test/?X-Amz-Signature=private',
    'https://example.test/\npage',
  ]) assert.equal(isSafeUrl(url), false, url);
});

test('public text diagnostics detect disclosure without echoing the secret', () => {
  const secret = 'ghp_' + 'A'.repeat(36);
  const result = screenPublicText(`Credential: ${secret}`);
  assert.ok(result.some(error => error.code === 'credential'));
  assert.ok(!JSON.stringify(result).includes(secret));
  assert.ok(screenPublicText('C:\\Users\\private-person\\profile').some(error => error.code === 'private-path'));
  assert.deepEqual(screenPublicText('https://github.com/example/project/blob/main/home/user/readme.md'), []);
  assert.deepEqual(screenPublicText('OPTIONAL_API_KEY=<redacted>\nDEPOT_TOOLS_WIN_TOOLCHAIN=0'), []);
});

test('ordinary basic prose passes while encoded HTTP Basic credentials are detected', () => {
  assert.deepEqual(screenPublicText('Complete basic recovery/help tasks; basic functionality and basic accessibility remain documented.'), []);
  assert.deepEqual(screenPublicText('Keep basic organization and basic autocomplete available.'), []);
  for (const pair of ['user:password', 'u:', ':password']) {
    const encoded = Buffer.from(pair).toString('base64');
    const result = screenPublicText(`Basic ${encoded}`);
    assert.ok(result.some(error => error.code === 'credential'));
    assert.ok(!JSON.stringify(result).includes(encoded));
  }
});

for (const [name, prose] of [
  ['newline', 'Reported change: https://chromium-review.googlesource.com/8428359.\nLimits / later reports: Documentary evidence only.'],
  ['CRLF', 'Reported change: https://chromium-review.googlesource.com/8428359.\r\nLimits / later reports: Documentary evidence only.'],
  ['tab', 'Reported change: https://chromium-review.googlesource.com/8428359.\tLimits / later reports: Documentary evidence only.'],
  ['quotation mark', 'See "https://example.test/reference" for public context.'],
  ['escaped JSON slashes', JSON.parse('"https:\\/\\/example.test\\/reference"')],
]) {
  test(`decoded JSON ${name} preserves public URL boundaries in values and keys`, () => {
    const input = fixture();
    input.lanes[7].context = [[prose], { [prose]: 'Public context.' }];
    input.publicNotes = [{ note: prose }, { [prose]: null }];
    const serialized = JSON.stringify(input);
    const decoded = JSON.parse(serialized);
    assert.deepEqual(validateDataset(decoded).errors, []);
    assert.equal(JSON.stringify(decoded), serialized, 'Screening must not rewrite the JSON values or keys.');
  });
}

for (const [name, value, code] of [
  ['literal backslash escape', 'https://example.test/reference\\nLimits', 'unsafe-url'],
  ['literal escaped slash', 'https://example.test/reference\\/suffix', 'unsafe-url'],
  ['literal escaped scheme', 'https:\\/\\/example.test/reference', 'unsafe-url'],
  ['escaped scheme userinfo', 'https:\\/\\/fixture:synthetic@example.test/reference', 'unsafe-url'],
  ['malformed authority', 'https://[invalid]/reference', 'unsafe-url'],
  ['HTTP userinfo', 'https://fixture:synthetic@example.test/reference', 'unsafe-url'],
  ['query credential', 'https://example.test/?access_token=synthetic', 'unsafe-url'],
  ['fragment credential', 'https://example.test/#id_token=synthetic', 'unsafe-url'],
  ['provider credential', 'ghp_' + 'A'.repeat(36), 'credential'],
  ['tabbed Basic credential', 'Basic\t' + Buffer.from('fixture:synthetic').toString('base64'), 'credential'],
  ['newline bearer credential', 'Bearer\n' + 'A'.repeat(24), 'credential'],
  ['Windows user path', 'C:\\Users\\fixture-user\\profile', 'private-path'],
  ['POSIX user path', '/home/fixture-user/profile', 'private-path'],
  ['root home path', '/root/profile', 'private-path'],
  ['quoted credential assignment', 'api_key = "synthetic-value"', 'credential-value'],
  ['raw environment assignment', 'PATH=/fixture/bin', 'raw-environment'],
]) {
  test(`decoded JSON screening rejects ${name} in nested strings and keys`, () => {
    for (const location of ['string', 'key']) {
      const input = fixture();
      const context = location === 'string' ? [[value]] : [{ [value]: null }];
      input.lanes[7].context = context;
      input.publicNotes = structuredClone(context);
      const result = validateDataset(JSON.parse(JSON.stringify(input)));
      for (const path of ['data/lanes/R08.json', 'data/publicNotes.json']) {
        assert.ok(result.errors.some(error => error.path === path && error.code === code), `${location} in ${path} must report ${code}.`);
      }
      assert.ok(!JSON.stringify(result).includes(value), 'Diagnostics must not echo screened values or keys.');
    }
  });
}

test('decoded JSON credential-named string fields still require placeholders', () => {
  for (const record of [
    JSON.parse('{"client\\u0053ecret":"synthetic-value"}'),
    { api_key: 'synthetic\nvalue' },
    { token: 'synthetic"quoted"value' },
  ]) {
    const input = fixture();
    input.lanes[7].context = [[record]];
    input.publicNotes = [[structuredClone(record)]];
    const result = validateDataset(JSON.parse(JSON.stringify(input)));
    assert.deepEqual(result.errors.map(({ path, code }) => ({ path, code })), [
      { path: 'data/publicNotes.json', code: 'credential-value' },
      { path: 'data/lanes/R08.json', code: 'credential-value' },
    ]);
    for (const value of Object.values(record)) assert.ok(!JSON.stringify(result).includes(value));
  }
});

test('decoded JSON screening accepts placeholders and remote repository paths', () => {
  const input = fixture();
  input.lanes[7].context = {
    apiKey: '<redacted>', access_token: '${ACCESS_TOKEN}', password: 'CHANGEME', token: '',
    nested: [null, false, 0, { note: 'https://github.com/example/project/blob/main/home/user/readme.md' }],
    publicPath: 'C:\\Users\\<username>\\profile',
  };
  input.publicNotes = structuredClone(input.lanes[7].context);
  assert.deepEqual(validateDataset(JSON.parse(JSON.stringify(input))).errors, []);
});

test('a newline inside a structured source URL remains invalid', () => {
  const input = fixture();
  input.lanes[7].sources[0].url = 'https://example.test/reference\npage';
  const result = validateDataset(JSON.parse(JSON.stringify(input)));
  assert.ok(result.errors.some(error => error.path === 'data/lanes/R08.json.sources[0].url' && error.code === 'url'));
});

test('cross-lane comparison references and explicit-gap claims require their evidence', () => {
  const input = fixture();
  const proposal = { id: 'REC-01', title: 'A proposed capability', priority: 'P1', category: 'navigation', target: 'Chrome desktop', status: 'needs-validation', chromeParity: 'partial-baseline', chromeBaselineFeatureIds: ['R01-F1'], comparatorFeatureIds: ['R02-F1'], chromeBaseline: 'Existing related capability.', sourceIds: ['R01-S1', 'R02-S1'], proposal: 'Evaluate a refinement.', acceptanceCriteria: ['Measure against the baseline.'], tradeoffs: ['More UI complexity.'], limitations: ['Not a proven gap.'] };
  input.recommendations = { schemaVersion: 1, asOf: '2026-11-21', scope: 'Editorial synthesis.', recommendations: [proposal] };
  assert.deepEqual(validateDataset(input).errors, []);
  proposal.comparatorFeatureIds = ['R02-missing'];
  assert.ok(codes(validateDataset(input)).includes('reference'));
  proposal.comparatorFeatureIds = ['R02-F1'];
  proposal.chromeParity = 'documented-gap';
  assert.ok(codes(validateDataset(input)).includes('gap-evidence'));
});

test('Markdown URL labels and escaped source snippets are screened without mistaking escapes for credentials', () => {
  const prose = '[https://issues.chromium.org/issues/123\\#comment1](<https://issues.chromium.org/issues/123#comment1>)\n' +
    'Source: https://example.test/\\~author/file\\_name.pdf and https://[2001:db8::1]/reference\n' +
    'iconUrl: &#39;https://example.test/foo\\_1.png&#39;';
  assert.deepEqual(screenPublicText(prose, 'ISSUES.md'), []);
  assert.ok(screenPublicText('https://example.test/?access\\_token=private', 'ISSUES.md').some(error => error.code === 'unsafe-url'));
  assert.ok(screenPublicText('[public](<https://user:private@example.test/>)', 'ISSUES.md').some(error => error.code === 'unsafe-url'));
  assert.equal(isSafeUrl('https://example.test/foo\\_1.png'), false, 'Data URLs remain strict, independent of Markdown screening.');
});

test('CLI reports malformed JSON without printing private file contents', async t => {
  const base = join(tmpdir(), 'opencode');
  await mkdir(base, { recursive: true });
  const sandbox = await mkdtemp(join(base, 'chrome-validator-json-'));
  t.after(() => rm(sandbox, { recursive: true, force: true }));
  await mkdir(join(sandbox, 'data/lanes'), { recursive: true });
  const privateMarker = 'do-not-echo-this-input';
  await writeFile(join(sandbox, 'data/contract.json'), `{ broken: ${privateMarker}`);
  const result = spawnSync(process.execPath, [join(root, 'scripts/validate.mjs'), '--root', sandbox, '--json'], { encoding: 'utf8', timeout: 30000 });
  assert.equal(result.status, 1);
  assert.ok(!`${result.stdout}${result.stderr}`.includes(privateMarker));
  assert.ok(JSON.parse(result.stdout).errors.some(error => error.code === 'json'));
});
