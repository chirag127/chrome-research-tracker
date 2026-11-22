# Chrome research tracker

In the registered workspace checkout, read the [workspace policy](../../../../../AGENTS.md), [public-project policy](../../../../../docs/okf/agent-policies/public-project.md), and [canonical operating notes](../../../../../docs/okf/chrome-research-tracker/index.md). In a linked worktree, use the canonical operating notes at `C:/ws/docs/okf/chrome-research-tracker/index.md`. Workspace notes are private operating context; public research must be understandable from this repository's own records.

## Data and evidence

- Original research datasets live in `data/lanes/R01.json` through `R10.json`. Use the contract in `data/contract.json`; IDs are lane-prefixed. Each writer owns only its assigned lane.
- Every factual record cites source IDs from its lane, with retrieval dates and explicit limitations. Publication dates remain null when not established.
- Vendor documentation, upstream reports, source observations, and local reproductions are different evidence types. Preserve exact platforms, rollout qualifications, and lifecycle status.
- Never mark a defect locally reproduced without an observed reproduction and tested version. Existing upstream reports are not submissions by this project. A sent report requires a verified receipt URL.
- Public files contain no credentials, environment values, personal browsing data, raw transcripts, local usernames, or employer configuration. Environment examples use placeholders or public build constants only.
- Keep project operating documentation single-sourced in the workspace OKF directory. Public datasets, submission records, and original research summaries are the project's deliverables.

## Verification and publishing

Run `npm test` and `npm run validate`. Review changed files and citation/status consistency before publication. GitHub publication and Google submissions are owned by the coordinating parent session; research workers do not publish independently.

The user approved public research and reporting. The later user-requested Chromium/depot_tools removal superseded the earlier full-build approval: retain historical build evidence, but do not recreate the fork, restore the removed build checkouts, or resume compilation. The research tracker remains the active deliverable. Use a disposable profile for separately authorized runtime checks.

After working-tree loss, R02/R05/R06/R10 were recovered at their reviewed hashes. R01/R03/R04/R07/R08/R09 use explicitly labelled reconstruction from retained JSON values, research reports and generated previews. Preserve their recovery metadata, original research identities and dates; reconstruction is not fresh research or byte-exact recovery.
