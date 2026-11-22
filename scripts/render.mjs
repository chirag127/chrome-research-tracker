import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const reportNames = ['CATALOG.md', 'FEATURES.md', 'ISSUES.md', 'AGENTS-LEDGER.md', 'RECOMMENDATIONS.md'];
const compare = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
const byId = (records) => [...records].sort((a, b) => compare(a.id, b.id));
const sortedIds = (ids) => [...new Set(ids)].sort(compare);
const own = (object, key) => Object.hasOwn(object, key);

const footer = `<footer class="hire-me">
  <h3>Hire me</h3>
  <p>Chirag Singhal — building free, open APIs and tools.</p>
  <p>
    <a href="mailto:chirag@oriz.in">chirag@oriz.in</a> ·
    <a href="https://github.com/chirag127">GitHub</a> ·
    <a href="https://www.linkedin.com/in/chirag127/">LinkedIn</a> ·
    <a href="https://x.com/singhal127">X</a> ·
    <a href="https://www.youtube.com/@ChiragSinghal127">YouTube</a> ·
    <a href="https://www.instagram.com/chiragsinghal127/">Instagram</a> ·
    <a href="https://www.reddit.com/user/Far_Macaron_9910/">Reddit</a> ·
    <a href="https://buymeacoffee.com/chirag127">Buy me a coffee</a>
  </p>
</footer>`;

function html(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);
}

function md(value) {
  // Escape Markdown before introducing HTML entities, whose # must remain intact.
  return html(String(value ?? 'Not recorded')
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
    .replace(/[\\`*_[\]{}#!~]/g, '\\$&'))
    .replace(/\|/g, '&#124;')
    .replace(/\r\n?|\n/g, '<br>');
}

function link(label, url) {
  try {
    if (typeof url !== 'string' || /[\u0000-\u0020\u007f]/.test(url)) throw new Error();
    const parsed = new URL(url);
    if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password) throw new Error();
    const destination = parsed.href
      .replace(/[<>"`|\\]/g, (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`)
      // Markdown entities can change query names; protect only entity-like ampersands.
      .replace(/&(?=(?:#[xX][0-9a-fA-F]+|#\d+|[A-Za-z][A-Za-z0-9]*);)/g, '\\&');
    return `[${md(label)}](<${destination}>)`;
  } catch {
    return `${md(label)} (link unavailable: expected a public HTTP(S) URL)`;
  }
}

const anchor = (id) => `<a id="${html(id)}"></a>`;
const localLink = (label, path) => `[${md(label)}](<${path}>)`;
const laneLink = (lane) => localLink(lane.id, `data/lanes/${encodeURIComponent(lane.id)}.json`);
const table = (headers, rows) => [
  `| ${headers.map(md).join(' | ')} |`,
  `| ${headers.map(() => '---').join(' | ')} |`,
  ...rows.map((row) => `| ${row.join(' | ')} |`),
].join('\n');
const bullets = (values) => values.length ? values.map((value) => `- ${md(value)}`).join('\n') : 'None recorded.';
const dates = (sources) => [...new Set(sources.map((source) => source.retrievedAt.slice(0, 10)))].sort(compare);
const dateRange = (sources) => {
  const days = dates(sources);
  return days.length ? (days[0] === days.at(-1) ? days[0] : `${days[0]} to ${days.at(-1)}`) : 'No source retrieval dates recorded';
};

function validateInput(contract, lanes) {
  const ids = new Set();
  const lanePattern = new RegExp(contract.lane.idPattern);
  const requireKeys = (record, type) => {
    if (!record || typeof record !== 'object' || Array.isArray(record)) throw new Error(`Expected a ${type} object`);
    for (const key of contract[type].required) {
      if (!own(record, key)) throw new Error(`${record.id ?? type}: missing ${key}`);
    }
    if (typeof record.id !== 'string' || !/^[A-Za-z0-9][A-Za-z0-9._:-]*$/.test(record.id)) throw new Error(`Invalid ${type} ID`);
    if (ids.has(record.id)) throw new Error(`Duplicate ID: ${record.id}`);
    ids.add(record.id);
    if (!Array.isArray(record.limitations)) throw new Error(`${record.id}: limitations must be an array`);
  };
  for (const lane of lanes) {
    requireKeys(lane, 'lane');
    if (!lanePattern.test(lane.id)) throw new Error(`Lane ID outside the contract: ${lane.id}`);
    if (!contract.lane.status.includes(lane.status)) throw new Error(`${lane.id}: unknown lane status`);
    for (const [collection, type] of [['sources', 'source'], ['browsers', 'browser'], ['features', 'feature'], ['issues', 'issue']]) {
      if (!Array.isArray(lane[collection])) throw new Error(`${lane.id}: ${collection} must be an array`);
      for (const record of lane[collection]) {
        requireKeys(record, type);
        if (!record.id.startsWith(`${lane.id}-`)) throw new Error(`${record.id}: incorrect lane prefix`);
      }
    }
    const sourceIds = new Set(lane.sources.map((source) => source.id));
    const browserIds = new Set(lane.browsers.map((browser) => browser.id));
    for (const source of lane.sources) {
      if (typeof source.retrievedAt !== 'string' || !/^\d{4}-\d{2}-\d{2}(?:$|T)/.test(source.retrievedAt)) throw new Error(`${source.id}: missing explicit retrieval date`);
    }
    for (const record of [...lane.browsers, ...lane.features, ...lane.issues]) {
      if (!Array.isArray(record.sourceIds) || !record.sourceIds.length || record.sourceIds.some((id) => !sourceIds.has(id))) throw new Error(`${record.id}: unresolved source references`);
    }
    for (const feature of lane.features) {
      if (!browserIds.has(feature.browserId)) throw new Error(`${feature.id}: unresolved browser reference`);
    }
    for (const issue of lane.issues) {
      if (!contract.issue.kind.includes(issue.kind)) throw new Error(`${issue.id}: unknown issue kind`);
      if (!Array.isArray(issue.testedVersions) || !Array.isArray(issue.reportedVersions) || !Array.isArray(issue.steps)) throw new Error(`${issue.id}: invalid issue lists`);
      if (issue.reproduction === 'local-reproduced' && (!issue.testedVersions.length || issue.evidenceType !== 'locally-observed')) throw new Error(`${issue.id}: local reproduction lacks tested versions or local evidence`);
      if (issue.reproduction !== 'local-reproduced' && issue.testedVersions.length) throw new Error(`${issue.id}: tested versions without a local reproduction`);
      if (!issue.submission || !contract.issue.submission.status.includes(issue.submission.status)) throw new Error(`${issue.id}: invalid submission status`);
      if (['existing-upstream', 'submitted'].includes(issue.submission.status) && !issue.submission.url) throw new Error(`${issue.id}: submission status lacks a recorded URL`);
    }
  }
}

function context(lanes) {
  const sources = new Map(lanes.flatMap((lane) => lane.sources.map((source) => [source.id, source])));
  const used = new Set();
  const cite = (ids) => sortedIds(ids).map((id) => {
    const source = sources.get(id);
    if (!source) return `${md(id)} (not resolved in saved sources)`;
    used.add(id);
    return link(id, source.url);
  }).join(', ');
  const value = (input, key = '') => {
    if (input === null || input === undefined) return 'Not recorded';
    if (key === 'sourceIds' && Array.isArray(input)) return cite(input);
    if (key === 'sourceId' && typeof input === 'string') return cite([input]);
    if (Array.isArray(input)) return input.length ? input.map((item) => value(item)).join('<br>') : 'None recorded';
    if (typeof input === 'object') return Object.keys(input).sort(compare).map((field) => `**${md(field)}:** ${value(input[field], field)}`).join('<br>');
    return typeof input === 'string' && /^https?:\/\//i.test(input) ? link(input, input) : md(input);
  };
  const extras = (record, keys) => keys.filter((key) => own(record, key)).map((key) => `- **${md(key.replace(/([a-z])([A-Z])/g, '$1 $2'))}:** ${value(record[key], key)}`).join('\n');
  const sourceLedger = () => {
    const sections = ['## Source ledger', 'Direct links and dates below are the saved evidence, not fresh retrievals. Publication dates remain unknown when the source record does not establish them. Other dates retain their original field labels.'];
    for (const lane of lanes) {
      const records = byId(lane.sources.filter((source) => used.has(source.id)));
      if (!records.length) continue;
      sections.push(`### ${md(lane.id)} — ${md(lane.title)}`);
      for (const source of records) {
        sections.push(`**${md(source.id)} — ${link(source.title, source.url)}**\n\nKind: ${md(source.kind)}. Retrieved: ${md(source.retrievedAt)}. Published: ${source.publishedAt === null ? 'not established' : md(source.publishedAt)}.`);
        const notes = extras(source, ['updatedAt', 'modifiedAt', 'committedAt', 'effectiveAt', 'contentDate', 'reportedMetadataDate', 'reportedPublicationOrUpdateDate', 'pageDateMetadata', 'publicationPeriod', 'publicationDateScope', 'dateEvidence', 'dateVerification', 'dateScope', 'sourceRevision', 'bodyVerified', 'retrievalOutcome', 'accessOutcome', 'coverage']);
        if (notes) sections.push(notes);
        sections.push(`Source limitations:\n\n${bullets(source.limitations)}`);
      }
    }
    if (!used.size) sections.push('No source citations in this report.');
    return sections.join('\n\n');
  };
  return { cite, value, extras, sourceLedger };
}

function header(title, lanes) {
  const count = (key) => lanes.reduce((sum, lane) => sum + lane[key].length, 0);
  const complete = lanes.filter((lane) => lane.status === 'complete').length;
  const partial = lanes.filter((lane) => lane.status === 'partial').length;
  const reconstructed = lanes.filter((lane) => lane.recovery?.byteExact === false);
  return [
    `# ${title}`,
    reportNames.map((name) => localLink(name.replace('.md', ''), name)).join(' · '),
    'Generated from the saved JSON research shards. Rendering performs no research, source refresh, browser tests, builds, or submissions.',
    ...(reconstructed.length ? [`**Recovery notice:** Loaded lanes labelled as non-byte-exact reconstructions: ${reconstructed.map(laneLink).join(', ')}. See the \`recovery\` metadata in each linked JSON shard for provenance and limitations. Reconstruction does not establish fresh research or testing; original source dates and saved lane status retain their meanings.`] : []),
    `Loaded snapshot: **${lanes.length} lane shards**, **${count('browsers')} browser records**, **${count('features')} feature records**, **${count('issues')} issue records**, **${count('sources')} source records**. Counts describe records, not unique products or independently verified claims.`,
    `Saved lane status: **${complete} complete**, **${partial} partial**, out of **${lanes.length} loaded shards**. These are the shards’ own scope/status labels; “complete” does not mean a complete project, exhaustive catalog, finished validation, or completed publication. Missing shards are outside this snapshot.`,
    `Recorded source-retrieval days: **${md(dateRange(lanes.flatMap((lane) => lane.sources)))}**. Exact retrieval and original publication dates appear with the cited sources; no generation timestamp is substituted.`,
    'Documentary descriptions and upstream observations do not establish local behavior or universal availability. A missing browser, feature, or issue is not evidence of absence. Chrome parity and new-defect claims require their own evidence.',
  ].join('\n\n');
}

function catalog(lanes) {
  const ctx = context(lanes);
  const sections = [header('Browser catalog', lanes)];
  for (const lane of lanes) {
    sections.push(`## ${md(lane.id)} — ${md(lane.title)}`, `Saved scope: ${ctx.value(lane.scope)}. Shard: ${laneLink(lane)}. Status: ${md(lane.status)}.`);
    if (!lane.browsers.length) sections.push('No browser records in this shard; this does not imply missing research outside its assigned scope.');
    for (const browser of byId(lane.browsers)) {
      sections.push(`${anchor(browser.id)}\n\n### ${md(browser.name)} — ${md(browser.id)}`);
      sections.push(table(['Lifecycle', 'Platforms / editions', 'Engine', 'Evidence / confidence'], [[md(browser.lifecycle), ctx.value(browser.platforms), md(browser.engine), `${md(browser.evidenceType)} / ${md(browser.confidence)}`]]));
      sections.push(md(browser.summary));
      const notes = ctx.extras(browser, ['lifecycleScope', 'lifecycleDetails', 'platformLifecycle', 'platformQualifications', 'platformBoundaries', 'channelQualifications', 'engineVersionScope', 'productKind', 'maintenanceEvidence', 'documentedVersion', 'latestRelease', 'observedReleases', 'latestOverallRelease', 'access', 'variants', 'roadmap', 'tradeoffs', 'recommendationRole']);
      if (notes) sections.push(notes);
      const features = lane.features.filter((feature) => feature.browserId === browser.id).length;
      sections.push(`Saved feature records: **${features}**. ${localLink('Feature details', `FEATURES.md#${encodeURIComponent(browser.id)}`)}.\n\nSources: ${ctx.cite(browser.sourceIds)}.\n\nBrowser limitations:\n\n${bullets(browser.limitations)}`);
    }
    sections.push(`Lane limitations:\n\n${bullets(lane.limitations)}`);
  }
  return [...sections, ctx.sourceLedger(), footer].join('\n\n') + '\n';
}

function features(lanes) {
  const ctx = context(lanes);
  const sections = [header('Browser features', lanes), 'Availability labels are saved documentary classifications. “Documented” is not a successful local test; “not-established” is not “unsupported”. Historical, staged, limited, and explicitly unsupported entries retain their qualifications.'];
  for (const lane of lanes) {
    sections.push(`## ${md(lane.id)} — ${md(lane.title)}`, `Saved scope: ${ctx.value(lane.scope)}. Shard: ${laneLink(lane)}. Status: ${md(lane.status)}.`);
    if (!lane.browsers.length) sections.push('No browser/feature entries in this shard.');
    for (const browser of byId(lane.browsers)) {
      sections.push(`${anchor(browser.id)}\n\n### ${md(browser.name)} — ${md(browser.id)}`, `Browser lifecycle: **${md(browser.lifecycle)}**. Browser platforms: ${ctx.value(browser.platforms)}. ${localLink('Catalog qualifications', `CATALOG.md#${encodeURIComponent(browser.id)}`)}. Sources: ${ctx.cite(browser.sourceIds)}.`);
      const notes = ctx.extras(browser, ['lifecycleScope', 'lifecycleDetails', 'platformLifecycle', 'platformQualifications', 'platformBoundaries', 'channelQualifications']);
      if (notes) sections.push(notes);
      const records = byId(lane.features.filter((feature) => feature.browserId === browser.id));
      if (!records.length) sections.push('No feature records saved for this browser in the loaded snapshot. This is a coverage gap, not a claim that the browser lacks features.');
      for (const feature of records) {
        sections.push(`${anchor(feature.id)}\n\n#### ${md(feature.title)} — ${md(feature.id)}`, table(['Category', 'Platform / edition', 'Availability', 'Evidence / confidence'], [[md(feature.category), ctx.value(feature.platforms), md(feature.availability), `${md(feature.evidenceType)} / ${md(feature.confidence)}`]]), md(feature.description));
        const qualifiers = ctx.extras(feature, ['platformQualifications', 'platformCoverage', 'eligibility', 'defaultState', 'chromeParity']);
        if (qualifiers) sections.push(qualifiers);
        sections.push(`Sources: ${ctx.cite(feature.sourceIds)}.\n\nFeature limitations:\n\n${bullets(feature.limitations)}`);
      }
      sections.push(`Browser limitations:\n\n${bullets(browser.limitations)}`);
    }
    sections.push(`Lane limitations:\n\n${bullets(lane.limitations)}`);
  }
  return [...sections, ctx.sourceLedger(), footer].join('\n\n') + '\n';
}

function issues(lanes) {
  const ctx = context(lanes);
  const all = lanes.flatMap((lane) => byId(lane.issues).map((issue) => ({ lane, issue })));
  const groups = [
    ['upstream-report', 'Existing upstream reports', 'Existing reports retain the upstream status observed in the saved evidence. Open and closed reports are distinguished below; neither status establishes present-day local behavior.'],
    ['source-inconsistency', 'Source inconsistencies', 'Document or source-code inconsistencies do not by themselves establish a released-product defect, runtime reproduction, policy bypass, or novelty.'],
    ['hypothesis', 'Unverified hypotheses', 'These are candidates requiring validation, not confirmed new bugs.'],
    ['feature-proposal', 'Feature proposals', 'These are proposals, not implementation or submission claims. A proposal may cite an already existing upstream request.'],
  ];
  const sections = [header('Issue and proposal evidence', lanes), table(['Recorded reproduction', 'Count'], ['not-run', 'source-only', 'local-reproduced'].map((state) => [md(state), String(all.filter(({ issue }) => issue.reproduction === state).length)])), table(['Recorded submission status', 'Count'], ['existing-upstream', 'not-submitted', 'blocked', 'submitted'].map((state) => [md(state), String(all.filter(({ issue }) => issue.submission.status === state).length)])), 'Counts reflect saved issue records. An existing upstream URL is not a submission by this project. A recorded submission URL is shown as a saved receipt reference; the renderer does not verify receipts.'];
  for (const [kind, title, boundary] of groups) {
    const records = all.filter(({ issue }) => issue.kind === kind);
    sections.push(`## ${title} (${records.length})`, boundary);
    if (!records.length) sections.push('No records of this kind in the loaded snapshot.');
    for (const { lane, issue } of records) {
      sections.push(`${anchor(issue.id)}\n\n### ${md(issue.id)} — ${md(issue.title)}`, `Lane: ${laneLink(lane)} — ${md(lane.title)}.`, table(['Kind', 'Record status', 'Upstream status at saved observation', 'Reproduction', 'Evidence / confidence'], [[md(issue.kind), md(issue.status), md(issue.upstreamStatus), md(issue.reproduction), `${md(issue.evidenceType)} / ${md(issue.confidence)}`]]));
      sections.push(`Upstream: ${issue.upstreamUrl ? link('Existing upstream reference', issue.upstreamUrl) : 'No upstream URL recorded'}.\n\nReported versions (source claims): ${ctx.value(issue.reportedVersions)}.\n\nLocally tested versions recorded by this project: ${ctx.value(issue.testedVersions)}.`);
      const qualifiers = ctx.extras(issue, ['platforms', 'component', 'category', 'statusObservedAt', 'sourceRevision', 'confirmationScope', 'inferredFailureScenario', 'regressionAssessment', 'configuration', 'channel', 'fixEvidence', 'upstreamVerification', 'verificationStillNeeded', 'duplicateLookup', 'confidenceBasis']);
      if (qualifiers) sections.push(qualifiers);
      const stepLabel = issue.reproduction === 'local-reproduced' ? 'Recorded local reproduction steps' : issue.kind === 'upstream-report' ? 'Reported workflow (not executed by this renderer)' : 'Saved inspection or proposed validation steps (not a local reproduction)';
      sections.push(`**${stepLabel}**\n\n${issue.steps.length ? issue.steps.map((step, index) => `${index + 1}. ${md(step)}`).join('\n') : 'No steps recorded.'}`, `**Expected / proposed outcome:** ${md(issue.expected)}`, `**Observation as recorded (${md(issue.evidenceType)}):** ${md(issue.observed)}`);
      if (issue.codeEvidence) sections.push(`**Pinned code evidence**\n\n${ctx.value(issue.codeEvidence)}`);
      sections.push(`**Submission:** ${md(issue.submission.status)}. ${md(issue.submission.reason)}\n\n${issue.submission.url ? `${issue.submission.status === 'existing-upstream' ? 'Existing report, not this project’s submission' : 'Saved submission receipt reference'}: ${link(issue.submission.url, issue.submission.url)}.` : 'No submission receipt URL recorded.'}`, `Sources: ${ctx.cite(issue.sourceIds)}.\n\nIssue limitations:\n\n${bullets(issue.limitations)}`);
    }
  }
  sections.push('## Lane-level limitations');
  for (const lane of lanes.filter((lane) => lane.issues.length)) sections.push(`### ${md(lane.id)} — ${md(lane.title)}\n\n${bullets(lane.limitations)}`);
  return [...sections, ctx.sourceLedger(), footer].join('\n\n') + '\n';
}

function agentsLedger(lanes, agents) {
  const ctx = context(lanes);
  const sections = [header('Research agent ledger', lanes), 'The lane table preserves each shard’s actual agentSessionId, assigned scope, and saved status. It is a provenance ledger, not a live session query. A lane marked complete may still document limited coverage, unrun validation, pending integration, or missing follow-up work.', table(['Lane', 'Research agentSessionId', 'Saved status', 'Browsers', 'Features', 'Issues', 'Sources', 'Retrieval days'], lanes.map((lane) => [laneLink(lane), md(lane.agentSessionId), md(lane.status), ...['browsers', 'features', 'issues', 'sources'].map((key) => String(lane[key].length)), md(dateRange(lane.sources))]))];
  if (agents === null) {
    sections.push('No supplementary data/agents.json was available. Research agent IDs above are derived directly from the saved lane shards; no worker IDs have been invented.');
  } else {
    sections.push('## Supplementary saved agent inventory', `${localLink('data/agents.json', 'data/agents.json')} supplies the saved roles and outcomes below. These entries may overlap the lane table; they are not additional research agents or live completion checks.`);
    if (Array.isArray(agents.agents)) {
      sections.push(ctx.extras(agents, ['asOf', 'scope', 'coordinatorSessionId', 'statusMeaning']));
      sections.push(table(['Agent', 'Session ID', 'Role', 'Saved status', 'Deliverables / saved outcome'], byId(agents.agents).map((agent) => [md(agent.id), md(agent.sessionId), md(agent.role), md(agent.status), `${ctx.value(agent.deliverables)}<br>${md(agent.outcome)}`])));
      if (agents.limitations) sections.push(`Inventory limitations:\n\n${bullets(agents.limitations)}`);
    } else {
      sections.push(ctx.value(agents));
    }
  }
  for (const lane of lanes) {
    sections.push(`${anchor(lane.id)}\n\n## ${md(lane.id)} — ${md(lane.title)}`, `Agent session: **${md(lane.agentSessionId)}**. Saved lane status: **${md(lane.status)}**. Original shard: ${laneLink(lane)}.\n\n**Scope:** ${ctx.value(lane.scope)}`);
    const notes = ctx.extras(lane, ['asOf', 'researchCutoff', 'investigationDate', 'researchWindow', 'retrievalWindow', 'sourceRevision', 'confirmationBoundary', 'evidenceScope']);
    if (notes) sections.push(notes);
    sections.push(`**Limitations of this assignment:**\n\n${bullets(lane.limitations)}`, `Saved source receipts: ${lane.sources.length ? ctx.cite(byId(lane.sources).map((source) => source.id)) : 'None recorded'}.`);
  }
  return [...sections, ctx.sourceLedger(), footer].join('\n\n') + '\n';
}

function recommendationsReport(lanes, data) {
  const ctx = context(lanes);
  const sections = [header('Chrome improvement proposals', lanes), 'Priorities are editorial judgments. The saved Chrome baseline is credited before each proposed refinement; comparator documentation is not a benchmark or proof that Chrome lacks a capability. Acceptance criteria describe work to perform, not tests completed by this project.'];
  if (data === null) {
    sections.push('No data/recommendations.json was available. No proposals have been inferred from missing input.');
    return [...sections, footer].join('\n\n') + '\n';
  }
  const records = byId(data.recommendations);
  const featureById = new Map(lanes.flatMap((lane) => lane.features.map((feature) => [feature.id, feature])));
  const browserById = new Map(lanes.flatMap((lane) => lane.browsers.map((browser) => [browser.id, browser])));
  const issueById = new Map(lanes.flatMap((lane) => lane.issues.map((issue) => [issue.id, issue])));
  const featureLink = (id) => {
    const feature = featureById.get(id);
    if (!feature) return `${md(id)} (feature record not in the loaded snapshot)`;
    const browser = browserById.get(feature.browserId);
    return localLink(`${browser.name}: ${feature.title} — ${id}`, `FEATURES.md#${encodeURIComponent(id)}`);
  };
  const featureLinks = (ids) => ids.length ? sortedIds(ids).map(featureLink).join('<br>') : 'No feature references recorded';
  const featureEvidence = (ids) => ids.length ? sortedIds(ids).map((id) => {
    const feature = featureById.get(id);
    if (!feature) return featureLink(id);
    const browser = browserById.get(feature.browserId);
    return [
      `#### ${featureLink(id)}`,
      `**Availability:** ${md(feature.availability)}. **Platforms / editions:** ${ctx.value(feature.platforms)}. **Browser lifecycle:** ${md(browser.lifecycle)}. ${localLink('Browser qualifications', `CATALOG.md#${encodeURIComponent(browser.id)}`)}.`,
      `**Evidence / confidence:** ${md(feature.evidenceType)} / ${md(feature.confidence)}.`,
      md(feature.description),
      ctx.extras(browser, ['lifecycleScope', 'lifecycleDetails', 'platformLifecycle', 'platformQualifications', 'platformBoundaries', 'channelQualifications']),
      ctx.extras(feature, ['platformQualifications', 'platformCoverage', 'eligibility', 'defaultState', 'chromeParity']),
      `Feature limitations:\n\n${bullets(feature.limitations)}`,
      `Sources: ${ctx.cite(feature.sourceIds)}.`,
    ].filter(Boolean).join('\n\n');
  }).join('\n\n') : 'No feature references recorded. This is not a claim of absence.';
  sections.push(`Saved synthesis: ${localLink('data/recommendations.json', 'data/recommendations.json')}. **${records.length} proposal records**. As of: **${md(data.asOf)}**.`, md(data.scope));
  if (data.methodology) sections.push('## Synthesis qualifications', ctx.extras(data.methodology, Object.keys(data.methodology).sort(compare)));
  if (data.limitations) sections.push(`Synthesis limitations:\n\n${bullets(data.limitations)}`);
  sections.push('## Comparison matrix', 'Feature links lead to the saved platform, availability, and lifecycle evidence. Direct primary-source links and their original dates appear in the detailed sections and source ledger.');
  sections.push(table(['Proposal / target', 'Editorial priority / Chrome parity', 'Recorded Chrome baseline', 'Comparator feature records', 'Proposed outcome / sources'], records.map((record) => [
    `${localLink(`${record.id} — ${record.title}`, `#${encodeURIComponent(record.id)}`)}<br>${md(record.target)}`,
    `${md(record.priority)}<br>${md(record.chromeParity)}`,
    `${md(record.chromeBaseline)}<br>${featureLinks(record.chromeBaselineFeatureIds)}`,
    featureLinks(record.comparatorFeatureIds),
    `${md(record.proposal)}<br>Sources: ${ctx.cite(record.sourceIds)}`,
  ])));
  for (const record of records) {
    sections.push(`${anchor(record.id)}\n\n## ${md(record.id)} — ${md(record.title)}`);
    sections.push(table(['Target', 'Category', 'Editorial priority', 'Saved status', 'Chrome parity'], [[md(record.target), md(record.category), md(record.priority), md(record.status), md(record.chromeParity)]]));
    sections.push(`### Recorded Chrome baseline\n\n${md(record.chromeBaseline)}`, featureEvidence(record.chromeBaselineFeatureIds));
    sections.push(`### Proposed refinement\n\n${md(record.proposal)}`, '### Comparator evidence', featureEvidence(record.comparatorFeatureIds));
    sections.push(`### Acceptance criteria — proposed, not executed\n\n${bullets(record.acceptanceCriteria)}`, `### Tradeoffs\n\n${bullets(record.tradeoffs)}`, `### Proposal limitations\n\n${bullets(record.limitations)}`);
    if (record.relatedIssueIds?.length) sections.push(`Related issue evidence: ${sortedIds(record.relatedIssueIds).map((id) => {
      const issue = issueById.get(id);
      return issue ? `${localLink(`${id} — ${issue.title}`, `ISSUES.md#${encodeURIComponent(id)}`)} (${md(issue.kind)}; ${md(issue.status)})` : `${md(id)} (issue record not in the loaded snapshot)`;
    }).join('; ')}.`);
    sections.push(`Sources cited by this proposal: ${ctx.cite(record.sourceIds)}.`);
  }
  return [...sections, ctx.sourceLedger(), footer].join('\n\n') + '\n';
}

export function renderReports({ contract, lanes, agents = null, recommendations = null }) {
  validateInput(contract, lanes);
  const ordered = byId(lanes);
  return {
    'CATALOG.md': catalog(ordered),
    'FEATURES.md': features(ordered),
    'ISSUES.md': issues(ordered),
    'AGENTS-LEDGER.md': agentsLedger(ordered, agents),
    'RECOMMENDATIONS.md': recommendationsReport(ordered, recommendations),
  };
}

async function readOptional(path) {
  try { return await readFile(path, 'utf8'); }
  catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}

async function main(args) {
  let check = false;
  let outputDir = root;
  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    if (arg === '--check') check = true;
    else if (arg === '--output-dir' && args[index + 1] && !args[index + 1].startsWith('--')) outputDir = resolve(args[++index]);
    else if (arg.startsWith('--output-dir=') && arg.slice('--output-dir='.length)) outputDir = resolve(arg.slice('--output-dir='.length));
    else if (arg === '--help') { console.log('Usage: node scripts/render.mjs [--check] [--output-dir <directory>]'); return; }
    else throw new Error(`Unknown or incomplete argument: ${arg}`);
  }
  const contract = JSON.parse(await readFile(join(root, 'data', 'contract.json'), 'utf8'));
  const laneDir = join(root, 'data', 'lanes');
  let names;
  try { names = (await readdir(laneDir)).filter((name) => name.endsWith('.json')).sort(compare); }
  catch (error) { if (error.code !== 'ENOENT') throw error; names = []; }
  const lanes = await Promise.all(names.map(async (name) => {
    const lane = JSON.parse(await readFile(join(laneDir, name), 'utf8'));
    if (name !== `${lane.id}.json`) throw new Error(`Shard filename does not match its ID: ${name}`);
    return lane;
  }));
  const [agentText, recommendationText] = await Promise.all(['agents.json', 'recommendations.json'].map((name) => readOptional(join(root, 'data', name))));
  const reports = renderReports({ contract, lanes, agents: agentText === null ? null : JSON.parse(agentText), recommendations: recommendationText === null ? null : JSON.parse(recommendationText) });
  const prior = await Promise.all(reportNames.map((name) => readOptional(join(outputDir, name))));
  const stale = reportNames.filter((name, index) => reports[name] !== prior[index]);
  if (check) {
    if (stale.length) {
      console.error(`Stale or missing reports: ${stale.join(', ')}`);
      process.exitCode = 1;
      return;
    }
    console.log(`Verified ${reportNames.length} reports against ${lanes.length} saved lane shards.`);
    return;
  }
  await mkdir(outputDir, { recursive: true });
  await Promise.all(stale.map((name) => writeFile(join(outputDir, name), reports[name], 'utf8')));
  console.log(`Rendered ${reportNames.length} reports from ${lanes.length} saved lane shards (${stale.length} updated).`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main(process.argv.slice(2)).catch((error) => { console.error(`render: ${error.message}`); process.exitCode = 1; });
}
