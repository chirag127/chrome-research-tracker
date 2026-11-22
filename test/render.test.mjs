import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile, readdir, writeFile, mkdir, mkdtemp, rm, stat } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderReports } from '../scripts/render.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const contract = JSON.parse(await readFile(join(root, 'data/contract.json'), 'utf8'));
const names = ['CATALOG.md', 'FEATURES.md', 'ISSUES.md', 'AGENTS-LEDGER.md', 'RECOMMENDATIONS.md'];
const run = promisify(execFile);

function fixture() {
  const lanes = ['R01', 'R02'].map((id, index) => {
    const sources = ['01', '02'].map((n) => ({
      id: `${id}-S${n}`, title: `${id} source ${n}`,
      url: `https://example.test/${id}/${n}?hl=en&co=GENIE.Platform%3DDesktop#L7-L12`,
      retrievedAt: '2026-11-21T14:00:00Z', publishedAt: n === '01' ? null : '2025-02-03',
      updatedAt: '2026-01-02', kind: 'vendor-documentation', limitations: ['Documentary, not a runtime test.'],
    }));
    const sourceIds = sources.map((source) => source.id);
    const browsers = ['01', '02'].map((n) => ({
      id: `${id}-B${n}`, name: `${index ? 'Comparator' : 'Chrome fixture'} ${n}`,
      engine: 'Documented engine; edition differences unresolved.', platforms: ['Desktop'],
      lifecycle: index ? 'sunset-announced' : 'active', summary: 'A bounded browser record.',
      sourceIds, evidenceType: 'vendor-documented', confidence: 'medium',
      limitations: ['Mobile parity remains unknown.'],
      lifecycleDetails: { sunsetAt: '2026-12-22', qualification: 'Announcement, not an observed shutdown.', sourceIds },
    }));
    const features = browsers.map((browser, i) => ({
      id: `${id}-F0${i + 1}`, browserId: browser.id, title: `Feature ${id} ${i + 1}`,
      category: 'organization', description: `Saved description for ${id}-F0${i + 1}.`,
      platforms: ['Desktop; mobile unverified'], availability: index ? 'historical' : 'staged',
      sourceIds, evidenceType: 'vendor-documented', confidence: 'medium',
      eligibility: 'Only eligible accounts in the documented rollout.', limitations: ['No task-time benefit measured.'],
    }));
    const kinds = index ? ['source-inconsistency', 'hypothesis', 'feature-proposal'] : ['upstream-report'];
    const issues = kinds.map((kind, i) => ({
      id: `${id}-I0${i + 1}`, title: `${kind} fixture`, kind,
      status: kind === 'upstream-report' ? 'upstream-open' : kind === 'feature-proposal' ? 'proposal' : 'needs-validation',
      sourceIds, upstreamUrl: kind === 'upstream-report' ? 'https://example.test/issues/1?view=all&sort=oldest' : null,
      upstreamStatus: kind === 'upstream-report' ? 'Accepted' : 'unknown',
      reportedVersions: ['123.0'], testedVersions: [], reproduction: index ? 'source-only' : 'not-run',
      steps: ['First establish the baseline.', 'Then inspect the proposed condition.'],
      expected: 'A testable outcome.', observed: 'Source observation only.',
      evidenceType: index ? 'source-inspected' : 'upstream-reported', confidence: 'medium',
      limitations: ['No new defect or local reproduction established.'],
      submission: { status: index ? 'not-submitted' : 'existing-upstream', url: index ? null : 'https://example.test/issues/1', reason: 'Saved evidence only.' },
    }));
    return {
      schemaVersion: 1, id, title: `Lane ${id}`, agentSessionId: `ses_fixture_${id}`,
      scope: `Bounded scope ${id}`, status: index ? 'partial' : 'complete',
      sources, browsers, features, issues, limitations: ['Assigned scope only; not project completion.'],
    };
  });
  return {
    contract, lanes,
    agents: { asOf: '2026-11-21', statusMeaning: 'Saved outcomes only.', agents: [
      { id: 'AGENT-B', sessionId: 'ses_supplement_B', role: 'Recovery', status: 'partial', deliverables: ['data/lanes/R02.json'], outcome: 'Retained partial conversion.' },
      { id: 'AGENT-A', sessionId: 'ses_supplement_A', role: 'Review', status: 'complete', deliverables: [], outcome: 'Bounded documentary review.' },
    ], limitations: ['No live session query.'] },
    recommendations: {
      asOf: '2026-11-21', scope: 'Editorial proposals from saved evidence.',
      methodology: { priority: 'Editorial, not a measurement.', parity: 'partial-baseline does not establish absence.' },
      recommendations: ['01', '02'].map((n) => ({
        id: `REC-${n}`, title: `Refinement ${n}`, priority: n === '01' ? 'P1' : 'P2', category: 'organization',
        target: 'Chrome desktop', status: 'needs-validation', chromeParity: 'partial-baseline',
        chromeBaselineFeatureIds: ['R01-F01', 'R01-F02'], comparatorFeatureIds: ['R02-F01', 'R02-F02'],
        chromeBaseline: `Chrome already provides baseline ${n}.`, proposal: `Evaluate the additional outcome ${n}.`,
        acceptanceCriteria: ['Measure against the existing baseline.', 'Record unsupported conditions.'],
        tradeoffs: ['Extra controls increase complexity.'], limitations: ['No Chrome absence claim.'],
        sourceIds: ['R01-S01', 'R02-S01'], relatedIssueIds: ['R02-I01', 'R02-I02'],
      })),
    },
  };
}

function freeze(value) {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.values(value).forEach(freeze);
    Object.freeze(value);
  }
  return value;
}

const anchorIds = (report) => [...report.matchAll(/<a id="([^"]+)"><\/a>/g)].map((match) => match[1]);
const destinations = (report) => [...report.matchAll(/\]\(<([^>\r\n]*)>\)/g)].map((match) => match[1]);
const unescapeDestination = (value) => value.replace(/\\([!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~\\])/g, '$1');
function urlMeaning(value) {
  const url = new URL(unescapeDestination(value));
  return { origin: url.origin, path: decodeURIComponent(url.pathname), query: [...url.searchParams], fragment: decodeURIComponent(url.hash) };
}

test('record collections and citation sets have stable ordering without losing records or mutating inputs', () => {
  const input = freeze(fixture());
  const before = JSON.stringify(input);
  const expected = renderReports(input);
  let seed = 0x20f2026;
  const shuffle = (items) => {
    for (let i = items.length - 1; i > 0; i--) {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      const j = seed % (i + 1);
      [items[i], items[j]] = [items[j], items[i]];
    }
  };
  for (let sample = 0; sample < 12; sample++) {
    const permuted = structuredClone(input);
    shuffle(permuted.lanes);
    for (const lane of permuted.lanes) {
      for (const key of ['sources', 'browsers', 'features', 'issues']) shuffle(lane[key]);
      for (const record of [...lane.browsers, ...lane.features, ...lane.issues]) shuffle(record.sourceIds);
    }
    shuffle(permuted.agents.agents);
    shuffle(permuted.recommendations.recommendations);
    for (const record of permuted.recommendations.recommendations) {
      for (const key of ['sourceIds', 'chromeBaselineFeatureIds', 'comparatorFeatureIds', 'relatedIssueIds']) shuffle(record[key]);
    }
    const actual = renderReports(freeze(permuted));
    for (const name of names) assert.ok(actual[name] === expected[name], `${name}: permutation ${sample}, seed 0x20f2026`);
  }
  assert.equal(JSON.stringify(input), before);
  const ids = (key) => input.lanes.flatMap((lane) => lane[key].map((record) => record.id)).sort();
  assert.deepEqual(anchorIds(expected['CATALOG.md']).sort(), ids('browsers'));
  assert.deepEqual(anchorIds(expected['FEATURES.md']).sort(), [...ids('browsers'), ...ids('features')].sort());
  assert.deepEqual(anchorIds(expected['ISSUES.md']).sort(), ids('issues'));
  assert.deepEqual(anchorIds(expected['RECOMMENDATIONS.md']).sort(), ['REC-01', 'REC-02']);
  assert.ok(expected['ISSUES.md'].indexOf('1. First establish the baseline.') < expected['ISSUES.md'].indexOf('2. Then inspect the proposed condition.'));
});

test('comparison rows credit Chrome, cite comparator features, and show the proposed outcome and parity', () => {
  const input = fixture();
  const report = renderReports(input)['RECOMMENDATIONS.md'];
  for (const record of input.recommendations.recommendations) {
    const row = report.split('\n').find((line) => line.startsWith('| ') && line.includes(`](<#${record.id}>)`));
    assert.ok(row, `comparison row ${record.id}`);
    for (const text of [record.chromeBaseline, record.proposal, record.priority, record.chromeParity]) assert.ok(row.includes(text), `${record.id}: matrix omits ${text}`);
    for (const id of [...record.chromeBaselineFeatureIds, ...record.comparatorFeatureIds]) assert.ok(row.includes(`FEATURES.md#${id}`), `${record.id}: missing ${id}`);
    for (const id of record.sourceIds) assert.ok(row.includes(`[${id}](<https://`), `${record.id}: direct citation ${id}`);
    for (const text of [...record.acceptanceCriteria, ...record.tradeoffs, ...record.limitations]) assert.ok(report.includes(text), `${record.id}: missing qualification`);
  }
  assert.ok(report.includes('**Availability:** staged'));
  assert.ok(report.includes('**Browser lifecycle:** sunset-announced'));
  assert.ok(report.includes('Only eligible accounts in the documented rollout.'));
  assert.ok(report.includes('ISSUES.md#R02-I02'));
});

test('HTTP citation destinations preserve repeated query values, encoded values, and fragments', () => {
  const urls = [
    'https://example.test/help?hl=en&co=GENIE.Platform%3DAndroid&n=1&n=2&blank=&q=a+b&literal=%2526#L7-L12',
    'https://example.test/a_(b)?v=x%26y&copy;=keep&amp;=literal#part_(two)',
    'https://example.test/code?expression=a%3Db&quote=%27&pipe=%7C#fragment%26name',
    'https://[2001:db8::1]/reference?platform=Android&edition=beta#details',
  ];
  for (const url of urls) {
    const input = fixture();
    input.lanes[0].sources[0].url = url;
    const report = renderReports(input)['CATALOG.md'];
    const destination = report.match(/\[R01-S01\]\(<([^>\r\n]*)>\)/)?.[1];
    assert.ok(destination, url);
    assert.deepEqual(urlMeaning(destination), urlMeaning(url), url);
    assert.ok(!/(?<!\\)&(?:#[xX][0-9a-fA-F]+|#\d+|[A-Za-z][A-Za-z0-9]*);/.test(destination), 'entity-like query names need Markdown protection');
    if (url.includes('&co=')) assert.ok(destination.includes('&co=GENIE.Platform%3DAndroid'), 'ordinary query delimiters remain intact');
  }
});

test('unsafe schemes, protocol-relative links, credentials and control characters never become links', () => {
  for (const url of ['javascript:alert(1)', 'data:text/html,<script>bad</script>', 'file:///private/example', 'vbscript:bad', '//example.test/', 'https://user:secret@example.test/', 'https://example.test/\npage']) {
    const input = fixture();
    input.lanes[0].sources[0].url = url;
    const report = renderReports(input)['CATALOG.md'];
    assert.ok(report.includes('R01-S01 (link unavailable:'), 'unsafe source is identified without an active link');
    assert.ok(!report.includes('[R01-S01](<'), 'unsafe source cannot be clickable');
    for (const destination of destinations(report).filter((value) => /^[a-z]+:/i.test(value))) {
      const parsed = new URL(unescapeDestination(destination));
      assert.ok(['http:', 'https:'].includes(parsed.protocol));
      assert.equal(parsed.username, '');
      assert.equal(parsed.password, '');
    }
  }
});

test('untrusted prose and table text are escaped while apostrophes remain valid entities', () => {
  const input = fixture();
  const text = "O'Brien | <script>alert(1)</script>\n# Heading [click](javascript:alert(1)) `code`";
  input.lanes[0].browsers[0].name = text;
  input.lanes[0].browsers[0].summary = text;
  input.lanes[0].features[0].category = text;
  input.lanes[0].sources[0].title = text;
  input.recommendations.recommendations[0].proposal = text;
  input.agents.agents[0].role = text;
  for (const [name, report] of Object.entries(renderReports(input))) {
    if (name === 'ISSUES.md') continue;
    assert.ok(report.includes('O&#39;Brien'), `${name}: readable apostrophe`);
    assert.ok(!report.includes('&\\#39;'), `${name}: escaped entity corruption`);
    assert.ok(!report.includes('<script>'), `${name}: raw HTML`);
    assert.ok(!report.includes('\n# Heading'), `${name}: injected heading`);
    assert.ok(report.includes('&#124; &lt;script&gt;'), `${name}: escaped table cell`);
    assert.ok(!destinations(report).some((url) => url.startsWith('javascript:')));
  }
  const featureTable = renderReports(input)['FEATURES.md'].split('\n').filter((line) => line.startsWith('| '));
  assert.ok(featureTable.every((line) => (line.match(/\|/g) ?? []).length === 5), 'four-column tables retain their width');
});

test('original source dates, publication unknowns, lane scope and supplementary sessions remain distinct', () => {
  const input = fixture();
  const reports = renderReports(input);
  for (const report of Object.values(reports)) {
    assert.ok(report.includes('2026-11-21T14:00:00Z'));
    assert.ok(report.includes('Published: not established.'));
    assert.ok(report.includes('Published: 2025-02-03.'));
    assert.ok(report.includes('2026-01-02'));
    assert.ok(report.includes('**1 complete**, **1 partial**'));
    assert.ok(report.includes('“complete” does not mean a complete project'));
  }
  assert.ok(reports['AGENTS-LEDGER.md'].includes('| Agent | Session ID | Role | Saved status |'));
  for (const lane of input.lanes) assert.ok(reports['AGENTS-LEDGER.md'].includes(lane.agentSessionId.replaceAll('_', '\\_')));
  assert.ok(reports['AGENTS-LEDGER.md'].includes('ses\\_supplement\\_B'));
  assert.ok(reports['ISSUES.md'].includes('| local-reproduced | 0 |'));
  assert.ok(reports['ISSUES.md'].includes('| submitted | 0 |'));
  for (const title of ['Existing upstream reports', 'Source inconsistencies', 'Unverified hypotheses', 'Feature proposals']) assert.ok(reports['ISSUES.md'].includes(`## ${title} (1)`));
});

test('recovery notice links precisely the non-byte-exact lanes in every report header', () => {
  for (const [flags, expectedLinks] of [
    [[false, true], ['data/lanes/R01.json']],
    [[true, false], ['data/lanes/R02.json']],
    [[false, false], ['data/lanes/R01.json', 'data/lanes/R02.json']],
  ]) {
    const input = fixture();
    const original = renderReports(input);
    input.lanes.forEach((lane, index) => {
      lane.recovery = { byteExact: flags[index], reconstructedAt: '2030-01-02T12:34:56Z' };
    });
    input.lanes.reverse();
    const before = JSON.stringify(input);
    const reports = renderReports(freeze(input));
    for (const name of names) {
      const report = reports[name];
      const header = report.split('\n## ')[0];
      const notices = header.split('\n\n').filter((paragraph) => paragraph.startsWith('**Recovery notice:**'));
      assert.equal(notices.length, 1, `${name}: one visible recovery notice before report content`);
      const [notice] = notices;
      assert.match(notice, /non-byte-exact reconstructions/i, `${name}: reconstruction qualification`);
      assert.match(notice, /`recovery`/, `${name}: identifies the linked JSON metadata`);
      assert.deepEqual(destinations(notice), expectedLinks, `${name}: only flagged lanes, in stable order`);
      assert.equal(report.replace(`${notice}\n\n`, ''), original[name], `${name}: recovery metadata does not alter dates, status, evidence or footer`);
    }
    assert.equal(JSON.stringify(input), before, 'rendering preserves recovery metadata and original research inputs');
  }
});

test('recovery notice includes a loaded empty shard when R01 and supplementary inputs are absent', () => {
  const lane = {
    ...fixture().lanes[1], sources: [], browsers: [], features: [], issues: [],
    recovery: { byteExact: false, reconstructedAt: '2030-01-02T12:34:56Z' },
  };
  const reports = renderReports(freeze({ contract, lanes: [lane] }));
  for (const name of names) {
    const header = reports[name].split('\n## ')[0];
    const notice = header.split('\n\n').find((paragraph) => paragraph.startsWith('**Recovery notice:**'));
    assert.ok(notice, `${name}: loaded reconstruction remains visible without records or supplements`);
    assert.deepEqual(destinations(notice), ['data/lanes/R02.json'], `${name}: absent lanes are not inferred`);
    assert.ok(header.includes('No source retrieval dates recorded'), `${name}: reconstruction date is not a retrieval date`);
    assert.ok(!header.includes(lane.recovery.reconstructedAt), `${name}: recovery timestamp is not research evidence`);
  }
});

test('recovery notice is absent unless a loaded lane explicitly has byteExact false', () => {
  for (const recovery of [undefined, null, {}, { byteExact: true }, { byteExact: 0 }, { byteExact: 'false' }]) {
    const input = fixture();
    input.lanes[0].recovery = recovery;
    for (const [name, report] of Object.entries(renderReports(freeze(input)))) {
      assert.doesNotMatch(report, /\*\*Recovery notice:\*\*|non-byte-exact reconstructions/i, `${name}: no reconstruction inferred from ${JSON.stringify(recovery)}`);
    }
  }
  for (const [name, report] of Object.entries(renderReports({ contract, lanes: [] }))) {
    assert.doesNotMatch(report, /\*\*Recovery notice:\*\*|non-byte-exact reconstructions/i, `${name}: no loaded lanes`);
  }
});

test('partial shards and absent optional inputs are labeled without inventing features or agents', () => {
  const input = fixture();
  const partial = renderReports({ contract, lanes: [input.lanes[0]], recommendations: input.recommendations });
  assert.ok(partial['RECOMMENDATIONS.md'].includes('R02-F01 (feature record not in the loaded snapshot)'));
  assert.ok(partial['RECOMMENDATIONS.md'].includes('R02-S01 (not resolved in saved sources)'));
  assert.ok(!partial['RECOMMENDATIONS.md'].includes('](<FEATURES.md#R02-F01>)'));
  assert.ok(partial['CATALOG.md'].includes('**1 lane shards**'));
  const empty = renderReports({ contract, lanes: [] });
  assert.deepEqual(Object.keys(empty), names);
  assert.ok(empty['AGENTS-LEDGER.md'].includes('No supplementary data/agents.json was available.'));
  assert.ok(empty['RECOMMENDATIONS.md'].includes('No data/recommendations.json was available.'));
  assert.ok(empty['CATALOG.md'].includes('**0 browser records**'));
});

test('every generated view ends in exactly one ordered canonical contact block', () => {
  const urls = [
    'mailto:chirag@oriz.in', 'https://github.com/chirag127', 'https://www.linkedin.com/in/chirag127/',
    'https://x.com/singhal127', 'https://www.youtube.com/@ChiragSinghal127', 'https://www.instagram.com/chiragsinghal127/',
    'https://www.reddit.com/user/Far_Macaron_9910/', 'https://buymeacoffee.com/chirag127',
  ];
  for (const report of Object.values(renderReports(fixture()))) {
    assert.equal(report.split('<footer class="hire-me">').length - 1, 1);
    const footer = report.slice(report.indexOf('<footer class="hire-me">'));
    assert.deepEqual([...footer.matchAll(/href="([^"]+)"/g)].map((match) => match[1]), urls);
    assert.ok(footer.endsWith('</footer>\n'));
  }
});

test('the saved research corpus retains every browser, feature, issue, proposal and cited source', async () => {
  const lanes = await Promise.all((await readdir(join(root, 'data/lanes'))).filter((name) => name.endsWith('.json')).map(async (name) => JSON.parse(await readFile(join(root, 'data/lanes', name), 'utf8'))));
  const recommendations = JSON.parse(await readFile(join(root, 'data/recommendations.json'), 'utf8'));
  const agents = JSON.parse(await readFile(join(root, 'data/agents.json'), 'utf8'));
  const reports = renderReports(freeze({ contract, lanes, recommendations, agents }));
  const expected = (key) => lanes.flatMap((lane) => lane[key].map((item) => item.id)).sort();
  assert.deepEqual(anchorIds(reports['CATALOG.md']).sort(), expected('browsers'));
  assert.deepEqual(anchorIds(reports['FEATURES.md']).sort(), [...expected('browsers'), ...expected('features')].sort());
  assert.deepEqual(anchorIds(reports['ISSUES.md']).sort(), expected('issues'));
  assert.deepEqual(anchorIds(reports['RECOMMENDATIONS.md']).sort(), recommendations.recommendations.map((record) => record.id).sort());
  for (const lane of lanes) for (const source of lane.sources) {
    const escapedId = source.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const url = reports['AGENTS-LEDGER.md'].match(new RegExp(`\\[${escapedId}\\]\\(<([^>\\r\\n]*)>\\)`))?.[1];
    assert.ok(url, `${source.id}: direct citation`);
    assert.deepEqual(urlMeaning(url), urlMeaning(source.url), `${source.id}: source destination`);
    assert.ok(reports['AGENTS-LEDGER.md'].includes(source.retrievedAt), `${source.id}: original retrieval date`);
  }
  for (const record of recommendations.recommendations) {
    for (const id of [...record.chromeBaselineFeatureIds, ...record.comparatorFeatureIds]) assert.ok(reports['RECOMMENDATIONS.md'].includes(`FEATURES.md#${id}`), `${record.id}: ${id}`);
  }
  assert.ok(!Object.values(reports).some((report) => /not resolved in saved sources|feature record not in the loaded snapshot|link unavailable/.test(report)), 'complete corpus has no unresolved renderer references');
});

test('CLI detects missing and stale reports without writing, and unchanged rerenders preserve bytes and mtimes', async (t) => {
  const base = join(tmpdir(), 'opencode');
  await mkdir(base, { recursive: true });
  const sandbox = await mkdtemp(join(base, 'chrome-render-test-'));
  t.after(() => rm(sandbox, { recursive: true, force: true }));
  await mkdir(join(sandbox, 'scripts'), { recursive: true });
  await mkdir(join(sandbox, 'data/lanes'), { recursive: true });
  const input = fixture();
  const files = new Map([
    ['scripts/render.mjs', await readFile(join(root, 'scripts/render.mjs'), 'utf8')],
    ['data/contract.json', JSON.stringify(contract)],
    ['data/recommendations.json', JSON.stringify(input.recommendations)],
    ['data/agents.json', JSON.stringify(input.agents)],
    ...input.lanes.map((lane) => [`data/lanes/${lane.id}.json`, JSON.stringify(lane)]),
  ]);
  await Promise.all([...files].map(([name, text]) => writeFile(join(sandbox, name), text)));
  const output = join(sandbox, 'preview with spaces');
  const cli = async (...args) => {
    try { return { code: 0, ...await run(process.execPath, [join(sandbox, 'scripts/render.mjs'), '--output-dir', output, ...args], { cwd: sandbox }) }; }
    catch (error) { if (typeof error.code !== 'number') throw error; return { code: error.code, stdout: error.stdout, stderr: error.stderr }; }
  };
  const missing = await cli('--check');
  assert.equal(missing.code, 1);
  assert.ok(names.every((name) => missing.stderr.includes(name)));
  await assert.rejects(stat(output), { code: 'ENOENT' });
  assert.equal((await cli()).code, 0);
  const contents = await Promise.all(names.map((name) => readFile(join(output, name), 'utf8')));
  const times = await Promise.all(names.map(async (name) => (await stat(join(output, name))).mtimeMs));
  assert.equal((await cli('--check')).code, 0);
  const rerender = await cli();
  assert.equal(rerender.code, 0);
  assert.ok(rerender.stdout.includes('(0 updated)'));
  assert.deepEqual(await Promise.all(names.map((name) => readFile(join(output, name), 'utf8'))), contents);
  assert.deepEqual(await Promise.all(names.map(async (name) => (await stat(join(output, name))).mtimeMs)), times);
  await writeFile(join(output, 'FEATURES.md'), 'Intentionally stale preview.\n');
  const stale = await cli('--check');
  assert.equal(stale.code, 1);
  assert.ok(stale.stderr.includes('Stale or missing reports: FEATURES.md'));
  assert.equal(await readFile(join(output, 'FEATURES.md'), 'utf8'), 'Intentionally stale preview.\n');
  assert.equal((await cli()).code, 0);
  assert.equal((await cli('--check')).code, 0);
  for (const [name, text] of files) assert.equal(await readFile(join(sandbox, name), 'utf8'), text, `${name}: read-only input`);
});
