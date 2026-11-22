# Chrome research tracker

Evidence-backed research to improve Google Chrome: alternative-browser capabilities, existing Chromium reports, focused source investigations, and testable feature proposals.

**Research snapshot: 21 November 2026.** This is an independent project. Source references point to the [official Chromium mirror](https://github.com/chromium/chromium); upstream development uses its own issue tracker and Gerrit. The personal source fork created during this investigation was subsequently removed at the project owner's request.

## Explore the research

| View | Contents |
| --- | --- |
| [Browser catalogue](CATALOG.md) | Engines, platforms, lifecycle and limitations for the researched alternatives, plus the Chrome baseline |
| [Feature records](FEATURES.md) | Source-linked capabilities with edition, platform and availability qualifications |
| [Chrome comparison and recommendations](RECOMMENDATIONS.md) | Prioritized proposals, credited existing Chrome features, acceptance criteria and tradeoffs |
| [Issue evidence](ISSUES.md) | Existing upstream reports, source inconsistencies and explicitly unverified hypotheses |
| [Agent ledger](AGENTS-LEDGER.md) | Actual research and recovery sessions, assignments and retained outcomes |
| [Project status](data/project-status.json) | Publication, verification, build and remaining-work status |
| [Reporting receipts](data/submissions.json) | Supported reporting channels, actual submissions and access blockers |
| [Reporting preparation](data/reporting-preparation.json) | All 62 item dispositions, qualified drafts, destinations and dated duplicate evidence |
| [Environment metadata](data/environment.json) | Relevant variable names and redacted examples; no credential values |

Original records live in [`data/lanes`](data/lanes), following [`data/contract.json`](data/contract.json). Public summaries are generated views of those records. Source retrieval and publication dates are separate; an undated source remains undated.

The validated snapshot contains **47 browser/project records, 286 feature records, 403 source records, 38 issue records, and 24 proposals** across ten research lanes. Counts describe records; products can appear in more than one research context. The issue records comprise 24 existing upstream families, nine alternative-browser documentary inconsistencies, and five focused source-audit candidates. **None is claimed as a locally reproduced Chrome defect.**

**Recovery provenance:** After loss of the uncommitted working directory, R02/R05/R06/R10 were restored at their independently reviewed file hashes. The other six lanes use labelled reconstruction from retained JSON values, original research reports and generated previews. Their `recovery` metadata identifies the evidence and unavailable optional fields. Reconstructed files are not byte-exact originals, and reconstruction does not refresh source dates or establish browser behavior.

## Findings worth acting on

- **Credit Chrome's existing features.** Help captured in the research snapshot documents desktop vertical tabs, two-page split view, immersive reading mode, saved/synced groups, toolbar reordering, and local generative-model removal/download controls. Requests should specify the additional outcome wanted. See [R01](data/lanes/R01.json).
- **Prioritize concrete improvements.** The synthesis evaluates Android extensions, identity-aware workspaces, portable project structures, richer layouts, accessible customization, citation-preserving capture and understandable AI controls. Most are refinement hypotheses; [REC-01](data/recommendations.json) is grounded in an explicit mobile-extension limitation.
- **Validate the focused source findings.** [R09](data/lanes/R09.json) records managed Home-button metadata/enablement inconsistency, a WebUI test-fixture icon contract mismatch, and three toolbar-state hypotheses at a pinned source revision. Source inspection is not proof of a released-browser failure.
- **Keep lifecycle and platform distinctions.** Historical, sunset-announced and experimental products are retained as design precedents, not automatically recommended as daily browsers. Desktop and mobile editions can use different engines and expose different features.

The catalogue is a substantial, bounded investigation, not a claim to cover every browser or every Chrome issue. Vendor descriptions are not measured privacy, security, speed or battery rankings. The issue ledger distinguishes already reported or fixed problems from candidates requiring reproduction.

## Published backlog

The [research publication](https://github.com/chirag127/chrome-research-tracker/commit/d61d6fc420994613b78b3f9cb6a99013cd3d42eb) and **31 project tracking issues** were read back from GitHub on 22 November 2026. Each issue's URL, title, body digest, labels and observed state are retained in [publication receipts](data/submissions.json).

- **24 feature proposals:** [REC-01](https://github.com/chirag127/chrome-research-tracker/issues/1) through [REC-24](https://github.com/chirag127/chrome-research-tracker/issues/24).
- **Five source investigations:** [R09-C1](https://github.com/chirag127/chrome-research-tracker/issues/25), [R09-C2](https://github.com/chirag127/chrome-research-tracker/issues/26), [R09-H1](https://github.com/chirag127/chrome-research-tracker/issues/27), [R09-H2](https://github.com/chirag127/chrome-research-tracker/issues/28), and [R09-H3](https://github.com/chirag127/chrome-research-tracker/issues/29).
- **Build history:** [BUILD-01](https://github.com/chirag127/chrome-research-tracker/issues/30), closed as not planned after the later cancellation.
- **Google reporting prerequisite:** [REPORTING-01](https://github.com/chirag127/chrome-research-tracker/issues/31), originally opened for authentication and candidate validation; current access and outcomes appear below.

At publication, 30 items were open and one was closed. These are research tasks, not 31 newly discovered defects or Google submissions.

## Reporting to Google

Chromium's official GitHub mirror has issues disabled. Use [Chromium's issue tracker](https://crbug.com/new) for focused reports, [Chrome's feedback instructions](https://support.google.com/chrome/answer/95315?hl=en) for product feedback, and [Gerrit](https://chromium-review.googlesource.com/) for upstream code review.

**Reporting follow-up, 22 November 2026:** authenticated Chromium form access and the bounded assessment of all **62 saved items** are complete. [Reporting preparation](data/reporting-preparation.json) retains the qualified drafts and evidence: 24 existing upstream families; 24 recommendations assessed as 14 proposed creates, eight comments and two restricted-thread holds; two source-only comments; three conditional hypotheses; and nine other-browser documentation findings.

The Home-button and icon-fixture comments are prepared on existing Chromium threads, with sending blocked by manual reCAPTCHA. **No new Chromium issue/comment receipt is recorded.** **REC-05 was sent once as native product feedback:** the API returned success and the correlated upload received HTTP 204. This establishes feedback upload, not a tracker permalink or human review. The other 21 actionable feature drafts remain unsent; their forms were not all individually challenge-tested. Current dispositions and delivery evidence are in [submission records](data/submissions.json).

### Other-browser reports sent

| Owner | Report | Verified outcome |
| --- | --- | --- |
| Orion | [Linux update-status wording](https://github.com/kagisearch/kagi-docs/issues/1059) | New documentation issue, independently read back |
| Mullvad | [Remaining hard-facts wording](https://github.com/mullvad/mullvad-browser/issues/19#issuecomment-7081241584) | Comment on the completed rename discussion, independently read back |
| Nyxt | [Version-qualified renderer and macOS guidance](https://github.com/atlas-engineer/nyxt/issues/1191#issuecomment-7081250809) | Documentation follow-up comment, independently read back |
| Cromite | [Supported versus experimental Android extensions](https://github.com/uazo/cromite/discussions/3139) | Q&A discussion, independently read back |
| Quetta, Falkon, Lynx | Platform wording, RSS release dates, and release-page footer respectively | Three emails sent once and separately read back in Sent; recipient acceptance and public receipt URLs remain unknown |

These are documentation inquiries with explicit runtime limitations. The earlier Quetta collection-disclosure premise is superseded by current platform/optional-collection qualifications; Dillo retains the already completed canonical-source correction. Neither generated another report. Existing upstream issue identities and all 31 original project receipts are preserved.

## Binary and build evidence

[R10](data/lanes/R10.json) identifies one installed Windows Chrome executable, version **158.0.8127.37**, using SHA-256 and bounded static inspection. The recorded Windows signature check succeeded with cache-only retrieval and revocation checking disabled. That does not establish current revocation status, runtime mitigations, download provenance or source-build equivalence.

The full local Chromium build was **cancelled before compilation** following the owner's later request to remove the personal source fork and local source/tool checkouts. The retained stages include successful toolchain setup and dependency sync; `gclient runhooks` exited -1 with empty output and an unknown cause. GN generation and browser compilation never started. [Project status](data/project-status.json) preserves the historical inputs and outcomes.

The supplemental [native UI observations](data/runtime.json) contain three baseline passes, four unrun native checks and five unrun source follow-ups. They establish no runtime-confirmed browser defect.

## Validate and regenerate

Node.js 22 or newer; the research tooling has no third-party runtime dependencies and needs no API key.

```sh
npm test
npm run validate
node scripts/render.mjs
node scripts/render.mjs --check
```

Validation checks structure and evidence consistency; it does not re-fetch every cited website or reproduce Chromium bugs. The package's `private` flag prevents accidental npm publication and does not change this repository's public visibility.

The requested `ws.env` was not present; the observed workspace file was `.env`. Only allowlisted names and placeholders are recorded. [`.env.example`](.env.example) is optional documentation, not a required configuration file. Raw workspace configuration, browser profiles and local investigation logs are excluded.

## Contributing evidence

Include the exact browser version, platform, source URL and retrieval date. For defects, distinguish reported behavior from a reproduction you actually ran, record expected/observed results, and search existing upstream reports. For proposals, describe the user outcome and credit existing Chrome capabilities. Original project tooling is MIT-licensed; cited material and Chromium retain their own licenses.

<footer class="hire-me">
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
</footer>
