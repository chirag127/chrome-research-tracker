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

## Reporting to Google

Chromium's official GitHub mirror has issues disabled. Use [Chromium's issue tracker](https://crbug.com/new) for focused reports, [Chrome's feedback instructions](https://support.google.com/chrome/answer/95315?hl=en) for product feedback, and [Gerrit](https://chromium-review.googlesource.com/) for upstream code review.

**No new Google submission is claimed.** The tested reporting form required Google sign-in; the access observation and next action are in [submission records](data/submissions.json). Issues in this repository are independent research tracking, not Google acknowledgments or implementation commitments. Existing upstream URLs remain attributed to their original reports.

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
