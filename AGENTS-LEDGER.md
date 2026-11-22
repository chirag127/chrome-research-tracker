# Research agent ledger

[CATALOG](<CATALOG.md>) · [FEATURES](<FEATURES.md>) · [ISSUES](<ISSUES.md>) · [AGENTS-LEDGER](<AGENTS-LEDGER.md>) · [RECOMMENDATIONS](<RECOMMENDATIONS.md>)

Generated from the saved JSON research shards. Rendering performs no research, source refresh, browser tests, builds, or submissions.

**Recovery notice:** Loaded lanes labelled as non-byte-exact reconstructions: [R01](<data/lanes/R01.json>), [R03](<data/lanes/R03.json>), [R04](<data/lanes/R04.json>), [R07](<data/lanes/R07.json>), [R08](<data/lanes/R08.json>), [R09](<data/lanes/R09.json>). See the `recovery` metadata in each linked JSON shard for provenance and limitations. Reconstruction does not establish fresh research or testing; original source dates and saved lane status retain their meanings.

Loaded snapshot: **10 lane shards**, **47 browser records**, **286 feature records**, **38 issue records**, **403 source records**. Counts describe records, not unique products or independently verified claims.

Saved lane status: **10 complete**, **0 partial**, out of **10 loaded shards**. These are the shards’ own scope/status labels; “complete” does not mean a complete project, exhaustive catalog, finished validation, or completed publication. Missing shards are outside this snapshot.

Recorded source-retrieval days: **2026-11-21**. Exact retrieval and original publication dates appear with the cited sources; no generation timestamp is substituted.

Documentary descriptions and upstream observations do not establish local behavior or universal availability. A missing browser, feature, or issue is not evidence of absence. Chrome parity and new-defect claims require their own evidence.

The lane table preserves each shard’s actual agentSessionId, assigned scope, and saved status. It is a provenance ledger, not a live session query. A lane marked complete may still document limited coverage, unrun validation, pending integration, or missing follow-up work.

| Lane | Research agentSessionId | Saved status | Browsers | Features | Issues | Sources | Retrieval days |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [R01](<data/lanes/R01.json>) | ses\_e018c78a9ffd4jJDnb3INRrctI | complete | 1 | 21 | 0 | 42 | 2026-11-21 |
| [R02](<data/lanes/R02.json>) | ses\_e018c78a8fferGQLyoej3pKp78 | complete | 7 | 54 | 0 | 64 | 2026-11-21 |
| [R03](<data/lanes/R03.json>) | ses\_e018c78a4ffegz3KgWfZpI1xs2 | complete | 8 | 48 | 1 | 43 | 2026-11-21 |
| [R04](<data/lanes/R04.json>) | ses\_e018c7881ffdKxT3pUQi9j1u66 | complete | 11 | 62 | 0 | 65 | 2026-11-21 |
| [R05](<data/lanes/R05.json>) | ses\_e018c7878ffermgsE7dkTi4Cmi | complete | 10 | 52 | 3 | 57 | 2026-11-21 |
| [R06](<data/lanes/R06.json>) | ses\_e018c7860ffe0U1lgZ8j9Qiw6m | complete | 10 | 49 | 5 | 49 | 2026-11-21 |
| [R07](<data/lanes/R07.json>) | ses\_e018c785effea8CQ4RypYDSiZs | complete | 0 | 0 | 12 | 29 | 2026-11-21 |
| [R08](<data/lanes/R08.json>) | ses\_e018c785bffex5F5aBOcrx3IFH | complete | 0 | 0 | 12 | 17 | 2026-11-21 |
| [R09](<data/lanes/R09.json>) | ses\_e018c785affemZYsrUmX82PrxF | complete | 0 | 0 | 5 | 33 | 2026-11-21 |
| [R10](<data/lanes/R10.json>) | ses\_e018c7858ffeeCboat9Enku581 | complete | 0 | 0 | 0 | 4 | 2026-11-21 |

## Supplementary saved agent inventory

[data/agents.json](<data/agents.json>) supplies the saved roles and outcomes below. These entries may overlap the lane table; they are not additional research agents or live completion checks.

- **as Of:** 2026-11-22
- **scope:** Actual research, review, recovery and implementation sessions assigned to this project. Repeated continuations of one session are not new agents.
- **coordinator Session Id:** ses\_e018f667affelthDYS6ST26upX
- **status Meaning:** Status describes retained deliverable evidence, not a live query of agent execution. Recovery workers inherit only unfinished work.

| Agent | Session ID | Role | Saved status | Deliverables / saved outcome |
| --- | --- | --- | --- | --- |
| AGENT-BUILD-INITIAL | ses\_e01880decffeMDtTZnshCn99re | Windows full-build readiness and initial setup | readiness-complete-setup-interrupted | None recorded<br>Documented hardware/toolchain requirements and approved src layout. Microsoft installers were acquired and verified; installation/build work transferred after session loss. |
| AGENT-CHECKER-FIXES | ses\_dfed056a7ffdjlji3kkvfILxEg | Correct reviewed checker defects and serialized-text scanning | complete-scope-released | scripts/validate.mjs<br>test/validate.test.mjs<br>All three reviewed defects have red/green evidence: 14 intended regression failures followed by 39 passing validator tests; 16 date cases also passed in each of two timezones. The later decoded-string/key scanner correction passed all 63 validator tests, preserving credential, path and unsafe-URL checks. The scanner output is shared with AGENT-CHECKER-SCANNING and counted once; this session produced no R01 reconstruction. |
| AGENT-CHECKER-SCANNING | ses\_dfe995950ffe3HCA60UYvN1Qnl | Decoded JSON screening correction and evidence reconciliation | complete-scope-released | scripts/validate.mjs<br>test/validate.test.mjs<br>Returned the verified decoded-string/key screening correction and its 63 passing validator tests. This is the same scanner output credited to AGENT-CHECKER-FIXES, not a second implementation. The earlier R01 assignment label was incorrect; this session produced no R01 bytes. The coordinator performed that reconstruction. |
| AGENT-CODE-REVIEW | ses\_dff8592cdffdOcDKFgeCfJYuiq | Independent validator, renderer and publication review | review-complete-findings-corrected | None recorded<br>Retained 29 original reviewed-file hashes and demonstrated three local checker defects: existing feature-request submission counting, unsupported promotion of unrun follow-ups, and timestamp ordering. The final delta review confirmed their resolution and found no additional actionable issue in decoded-string screening, recovery notices or the frozen issue publisher/payload pair. Reused matching 63-test validator and 12-test synthetic renderer evidence; reconstructed-corpus and live-publication verification were coordinator-owned. |
| AGENT-CONVERSION-R02 | ses\_e011ed747ffeWLzzE6f8BnyRTv | Restore mainstream feature conversion | conversion-saved | data/lanes/R02.json<br>Exclusive R02 conversion child; saved 54 source-linked feature records and 24 candidate recommendations from completed research. No new browser testing is implied. |
| AGENT-CONVERSION-R06 | ses\_e011ed746ffeXtzQgl1OBrLtoA | Restore independent-engine feature conversion | conversion-saved | data/lanes/R06.json<br>Exclusive R06 conversion child; saved 49 source-linked features and 12 candidate recommendations while retaining lifecycle and engine qualifications. No runtime testing is implied. |
| AGENT-COORDINATOR | ses\_e018f667affelthDYS6ST26upX | Research integration, final baseline reconstruction and publication | research-and-project-issues-published | data/lanes/R01.json<br>data/agents.json<br>data/project-status.json<br>data/recommendations.json<br>data/submissions.json<br>README.md<br>Integrated recovered and reconstructed research with original researcher identities. Reconstructed R01 from sixteen complete retained values, three explicitly partial optional findings and nine decoded limitations: 90 retained-value checks, zero one-lane validation errors/warnings, and four matching preview blocks. Completed R08&#39;s previously blocked validation. The integrated corpus passed all 76 tests, validation with zero errors, and all five generated-report comparisons. Published and read back the research commit and 31 project tracking issues; imported their verified receipts. Google reporting remains blocked with zero submissions. |
| AGENT-DATA-REVIEW | ses\_e00654b09ffePutMZ2zTapMbxS | Independent retained-evidence review | review-complete | None recorded<br>Reviewed 47 browser records, 286 features, 403 sources, 38 issues and 24 proposals against saved research. Reported two provenance/status corrections and two direct-citation additions. Recorded 2966 reference checks with zero unresolved references; code, generated reports and final publication were outside that review. |
| AGENT-DESIGN | ses\_e018306b2ffePM6RO4M8hJvDSa | Independent design review | complete | None recorded<br>Returned nothing important left before user design approval. This was design review, not validation of the eventual implementation. |
| AGENT-ISSUE-DRAFTS | ses\_dff57fed8ffeiBxVMjlVu4R3dF | Prepare source-linked project tracking issues | drafts-complete-scope-released | None recorded<br>Prepared 31 unique draft keys: 24 recommendations, five R09 investigations, BUILD-01 and REPORTING-01. Parent updated the build item to cancellation. Drafts and local checks are not remote submissions. |
| AGENT-PAYLOAD-REVIEW | ses\_dfe995908ffdX59Bvc5HOiIxrO | Independent public tracking payload review | review-complete-correction-integrated | None recorded<br>Read all 31 payloads and checked unique markers, 380 links, source labels and record references against retained evidence. Identified an unqualified R09-C2 compilation checkbox; the coordinator corrected it to defer compilation under the cancelled-build boundary. No new Google submission was claimed. |
| AGENT-R01 | ses\_e018c78a9ffd4jJDnb3INRrctI | Chrome baseline and official reporting routes | research-complete | data/lanes/R01.json<br>Primary-source Chrome capability, rollout, source/licensing and reporting evidence retained. Documentary availability is distinct from runtime verification. |
| AGENT-R01-REVIEW | ses\_dfe67773effe29IbPxsl6aozYL | Independent Chrome-baseline reconstruction and internal-link review | review-complete-scope-released | None recorded<br>Verified all sixteen retained whole values, 74 complete items, 21 feature projections, nine limitations and 42 source URL/retrieval pairs against retained R01 evidence. The extended static review checked the integrated copy, 625 internal links, 490 fragment references and 452 expected anchors. No actionable finding within pinned inputs and bounded coverage; non-byte-exact recovery and three omitted optional fields remain explicit. |
| AGENT-R02 | ses\_e018c78a8fferGQLyoej3pKp78 | Mainstream alternatives | research-complete-conversion-recovered | data/lanes/R02.json<br>Firefox, Edge, Safari, Brave, Vivaldi, Opera and Opera GX researched. Interrupted structured conversion continued by AGENT-RECOVERY-212. |
| AGENT-R03 | ses\_e018c78a4ffegz3KgWfZpI1xs2 | Privacy and independent browser workflows | research-complete | data/lanes/R03.json<br>Eight browser projects documented, including privacy/anonymity distinctions and explicitly unmeasured protection claims. |
| AGENT-R04 | ses\_e018c7881ffdKxT3pUQi9j1u66 | Productivity and AI browsers | research-complete | data/lanes/R04.json<br>Eleven products researched with lifecycle, platform and entitlement qualifications; historical products remain marked historical. |
| AGENT-R05 | ses\_e018c7878ffermgsE7dkTi4Cmi | Mobile alternatives | research-complete-conversion-recovered | data/lanes/R05.json<br>Ten mobile browser families researched. Android/iOS and regional distinctions retained; interrupted conversion continued by AGENT-RECOVERY-213. |
| AGENT-R06 | ses\_e018c7860ffe0U1lgZ8j9Qiw6m | Independent engines and keyboard-first browsers | research-complete-conversion-recovered | data/lanes/R06.json<br>Ten projects researched, including experimental engines and terminal browsers. Interrupted feature conversion continued by AGENT-RECOVERY-212. |
| AGENT-R07 | ses\_e018c785effea8CQ4RypYDSiZs | Existing Chrome menu and UI reports | research-complete | data/lanes/R07.json<br>Twelve primary tracker records retained with open/closed and bug/feature distinctions. They are existing upstream reports, not new project submissions. |
| AGENT-R08 | ses\_e018c785bffex5F5aBOcrx3IFH | Accessibility and reliability reports | research-complete | data/lanes/R08.json<br>Twelve issue families spanning thirteen upstream IDs researched; one duplicate consolidated. No independent reproduction claimed. |
| AGENT-R09 | ses\_e018c785affemZYsrUmX82PrxF | Pinned Chromium toolbar source audit | research-complete | data/lanes/R09.json<br>Thirty source/test files examined at a recorded revision. Two source inconsistencies and three hypotheses require their stated validation; zero runtime-confirmed defects. |
| AGENT-R10 | ses\_e018c7858ffeeCboat9Enku581 | Installed Chrome binary evidence | research-complete | data/lanes/R10.json<br>One executable identified by version/hash, five target-free REA inspections and a cache-only Windows signature check. Static declarations are not runtime guarantees. |
| AGENT-R11 | ses\_e014a4de6ffeD13d17DmK2qBgQ | Bounded native Chrome UI observation | delivered-partial-coverage | data/runtime.json<br>Delivered one native snapshot supporting three baseline passes, zero failures, four unrun native checks and five unrun source follow-ups. Alt+F input was not delivered; a later bounded inventory found no owned processes. No native menu defect or crash was established. |
| AGENT-RECONSTRUCT-R03-A | ses\_dfebeb811ffe627RW1QUVvc6Ig | R03 reconstruction and retained-artifact handoff | complete | data/lanes/R03.json<br>Returned the shared R03 reconstruction receipt: 43 sources, eight browsers, 48 features, one issue and twelve candidates; original values and rendered evidence matched, with byteExact false and optional-field losses explicit. This is the same output identified by the R03-B receipt, not additional research. |
| AGENT-RECONSTRUCT-R03-B | ses\_dfebeb749ffeK7H7XFUjnR5Btx | R03 reconstruction verification participant | complete | data/lanes/R03.json<br>Returned the same R03 output hash and fourteen-check verification receipt. Participant identities are retained separately; the shared artifact and research are counted once. |
| AGENT-RECONSTRUCT-R04-A | ses\_dfebeb80dffed1k8BbRn0u2Emv | R04 retained-evidence reconstruction | complete | data/lanes/R04.json<br>Returned 65 sources, eleven browsers, 62 features and ten candidates. Complete extracted records were preserved and displayed evidence matched the retained preview. Nineteen report qualifications and optional-metadata losses are labelled separately. |
| AGENT-RECONSTRUCT-R04-B | ses\_dfebeb748ffeUrYBTNiVx7JJvd | R04 reconstruction reconciliation participant | complete | data/lanes/R04.json<br>Returned the same R04 output hash with retained passing single-lane verification and a later artifact reconciliation. Shared output is counted once. |
| AGENT-RECONSTRUCT-R07-A | ses\_dfebeb7a9ffd55bVjhG7wjZdS2 | R07 existing-upstream reconstruction | complete | data/lanes/R07.json<br>Returned twelve original issue records and 29 sources, with 49 retained-value fingerprint matches and twelve issue-section matches. All reports remain existing-upstream and locally unrun. |
| AGENT-RECONSTRUCT-R07-B | ses\_dfebeb746ffeEYVeTc9ZjXyP46 | R07 reconstruction verification participant | complete | data/lanes/R07.json<br>Returned the same R07 output hash and passing single-lane validation. Shared output is counted once; original formatting and optional query/related-lead fields remain unavailable. |
| AGENT-RECONSTRUCT-R08-A | ses\_dfebeb7a8ffeltYN7xWJq4PSTh | R08 accessibility and reliability reconstruction | complete-validation-integrated | data/lanes/R08.json<br>Preserved twelve issue families, seventeen sources, thirteen upstream IDs and the consolidated duplicate. Six intact issue values were retained; six others were decoded with labelled report context. The coordinator completed the previously blocked one-lane validation on 22 November: zero errors or warnings, with the original reconstruction hash unchanged. |
| AGENT-RECONSTRUCT-R08-B | ses\_dfebeb745ffeJ3A6pcpH2ELqBu | R08 reconstruction reconciliation participant | complete-validation-integrated | data/lanes/R08.json<br>Returned the same R08 output hash and an explicit missing-checkout validation blocker, subsequently resolved by coordinator validation in the linked worktree. Shared output is counted once; its one-space compatibility normalization and optional-field omissions remain documented. |
| AGENT-RECONSTRUCT-R09-A | ses\_dfebeb787ffeRkBnj3VdFeEUr1 | R09 source-audit reconstruction reconciliation | complete | data/lanes/R09.json<br>Returned the same R09 reconstruction with 33 sources, five findings and 39 codeEvidence entries; retained verification passed at its recorded inputs. Later canonical-path absence was reported separately. |
| AGENT-RECONSTRUCT-R09-B | ses\_dfebeb741ffeIFNyAasGwL21jL | R09 source-audit reconstruction | complete | data/lanes/R09.json<br>Preserved 54 retained fingerprints and 39 normalized preview blocks at audit pin 04d6a2d2bd0626ad343da0ef33e812e1360b44bd. Two source inconsistencies and three unrun hypotheses remain unsent; shared output is counted once. |
| AGENT-RECONSTRUCTION-REVIEW | ses\_dfe77d273ffe23snC8jDIqi3le | Independent reconstructed-data evidence review | review-complete-scope-released | None recorded<br>Reviewed R03/R04/R07/R08/R09: 346 core records, 215 complete retained-value checks, 617 inventory-field and 3168 preview-field comparisons with zero mismatches. Bounded platform/lifecycle/date/status and optional-context samples found no actionable discrepancy. Declared optional losses remain; this was preservation review, not fresh research or browser testing. |
| AGENT-RECOVERY-20F | ses\_e0137e20fffe32oWeR7n6ZVvM6 | Deterministic research rendering | completed-and-recovered | scripts/render.mjs<br>test/render.test.mjs<br>Delivered the renderer and ten passing renderer tests, with five generated views and stable unchanged bytes/mtimes. Both implementation files were restored at their independently reviewed SHA-256 identities before the later recovery-notice enhancement. Rendering is not fresh source verification. |
| AGENT-RECOVERY-211 | ses\_e0137e211ffeshuRYsdx21wf21 | Dataset validator and regression checks | partial-handoff-to-coordinator | package.json<br>scripts/validate.mjs<br>Saved package metadata and part of the validator, then explicitly released writer scope without completed checks. The coordinator completed missing supplemental validation and CLI behavior and added regression tests. |
| AGENT-RECOVERY-212 | ses\_e0137e212ffe0bHJiVAmaBkKzh | Recover mainstream and engine feature records | conversion-saved | data/lanes/R02.json<br>data/lanes/R06.json<br>Restored R02&#39;s 54 features and 24 candidates and R06&#39;s 49 features and 12 candidates through two exclusive conversion children. Original research source and author IDs are preserved. |
| AGENT-RECOVERY-213 | ses\_e0137e213ffe9WxsdHhzmVOfIz | Recover mobile research conversion | conversion-saved | data/lanes/R05.json<br>Saved ten browser records, 52 features and ten recommendation candidates from the existing R05 investigation. Integration validation is separate from the saved conversion. |
| AGENT-RECOVERY-215 | ses\_e0137e215ffe7HQHkKEparkOcp | Historical Windows toolchain, source registration and build attempt | build-cancelled-scope-released | data/project-status.json<br>Returned the historical build outcomes summarized in project status: verified VS 2026/C++/ATL/MFC and Windows SDK/debuggers, successful source/tool registration, bootstrap, gclient configuration and dependency sync. Hooks exited -1 with empty output and unknown cause. The owner&#39;s later removal request cancelled GN generation and compilation before they started; final receipts were returned and writer scope released. |
| AGENT-RECOVERY-NOTICE | ses\_dfe995908ffewY8wv9KsnJ1hg8 | Expose reconstructed-lane provenance in generated reports | complete | scripts/render.mjs<br>test/render.test.mjs<br>Added a shared header notice linking only lanes explicitly marked byteExact false. Two intended red failures preceded twelve passing synthetic renderer/CLI checks; full-corpus verification remains an integration check. |
| AGENT-REPORTS-REVIEW-A | ses\_dfe602a67ffet7uMfr0Z1c5K7C | Independent final generated-report audit | review-complete-scope-released | None recorded<br>Returned the final five-report audit: all 625 local links and 490 fragments resolve; core records and cited-source ledgers are complete; six-lane reconstruction notices and ordered contact footers match. Included the then-current 44-agent inventory and matching 76-test publication checks. No actionable discrepancy; hosted rendering and external reachability were outside scope. Shared report is counted once with AGENT-REPORTS-REVIEW-B. |
| AGENT-REPORTS-REVIEW-B | ses\_dfe602aa2ffevjrSGr9Gn2Bkw2 | Generated-report audit reconciliation participant | review-complete-scope-released | None recorded<br>Returned the same final five-report audit as AGENT-REPORTS-REVIEW-A, covering local links, record/source coverage, reconstruction notices and contact footers. Participant identity is retained separately; the shared artifact and review findings are counted once. Later publication-receipt and contributor updates are coordinator-owned. |
| AGENT-SNAPSHOT-RECOVERY | ses\_dfeee710cffeMCjq74dphzh7qh | Bounded snapshot-byte recovery | completed-no-tracker-bytes-scope-released | None recorded<br>Inventoried 16842 snapshot-owned objects and examined 10934 trees. All 262 tracker-path entries were submodule links to the initial commit; four unreferenced blobs matched none of the 29 expected hashes. This is a scoped negative result, not proof of global absence. |
| AGENT-TOOL-RECOVERY | ses\_dfeee710affeQH7Wk43Y72xcgw | Recover original tracker bytes from retained task records | bounded-recovery-complete | None recorded<br>Recovered 18 independently hash-matched reviewed files plus successful original add payloads, then saved reliable partial values for six remaining shards. The bounded original-byte search ended without complete originals for those six; labelled conversion uses their surviving reports and previews. |
| AGENT-VALIDATOR-INITIAL | ses\_e01521630ffe9HB2Vo3x02pg3I | Initial dataset validation assignment | interrupted | None recorded<br>Session became unavailable after restart; no completed validator receipt retained. Unfinished implementation transferred to AGENT-RECOVERY-211. |
| AGENT-WORKSPACE-REVIEW | ses\_dfecad7d0ffegDRO2b2WsFA08g | Read-only task-only Git integration review | review-complete | None recorded<br>Identified the Chrome registration stanza, two index rows, four operating notes and gitlink; documented an alternate-index integration procedure preserving unrelated staged and unstaged workspace changes. |

Inventory limitations:

- Original research workers reported no child agents. The two later children of the recovery/conversion worker are recorded separately; no unobserved sessions are inferred.
- The search service&#39;s auxiliary answer engine is not counted as a dispatched subagent.
- Raw conversations, private operating notes, environment values and machine-specific process records are excluded.
- A saved session ID is provenance, not a promise that the session remains available after a harness restart.

<a id="R01"></a>

## R01 — Chrome–Chromium source, reporting channels, release, and feature baseline

Agent session: **ses\_e018c78a9ffd4jJDnb3INRrctI**. Saved lane status: **complete**. Original shard: [R01](<data/lanes/R01.json>).

**Scope:** Primary-source research on Chrome versus Chromium source availability and licensing, the official source mirror, contribution and reporting routes, Stable release evidence, and Chrome features relevant to competitor-derived improvement requests.

- **as Of:** 2026-11-21
- **research Window:** **endedAt:** 2026-11-21T14:30:13Z<br>**startedAt:** 2026-11-21T14:13:04Z

**Limitations of this assignment:**

- All feature claims are documentary. No feature, defect, browser installation, local build, account, policy, or website behavior was hands-on validated by this lane.
- Vendor documentation may describe staged features without pinning every instruction to a version. Documented availability is not universal enablement and must not be relabeled locally tested.
- Main/HEAD source documents were read at moving references without commit hashes. Later source implementation work should establish its own revision.
- Publication and update dates were not recoverable for many Help pages. Generic extractor dates, repository creation dates, and search snippets were not used as publication evidence.
- Several free-search engines timed out, were rate-limited, or were benched. Working results led to the official bodies cited here, but exhaustive discovery is not claimed.
- Reader extraction omitted content on release and policy sites and stripped parts of some region/language/action tables. Successful alternatives and unresolved gaps are recorded explicitly.
- Comprehensive anti-fingerprinting or ad blocking, post-retirement private-relay behavior, consumer screenshot/editor UI, advanced workspaces, universal collaborative groups, arbitrary-site sidebars, comprehensive menu editing, universal consumer all-AI-off, and self-hosted/account-free sync remain not established.
- No actual upstream issue was established or submitted. Recommendation candidates are conditional proposals, not accepted reports, reproduced defects, implementation commitments, or predictions of upstream acceptance.
- This baseline contains no competitor ranking or benchmark. It supplies source-qualified Chrome findings for later comparison and report preparation.

Saved source receipts: [R01-S01](<https://developer.chrome.com/docs/web-platform/chrome-chromium>), [R01-S02](<https://www.google.com/chrome/terms/>), [R01-S03](<https://github.com/chromium/chromium>), [R01-S04](<https://raw.githubusercontent.com/chromium/chromium/main/LICENSE>), [R01-S05](<https://chromium.googlesource.com/chromium/src.git/+/HEAD/docs/adding_to_third_party.md>), [R01-S06](<https://chromium.googlesource.com/chromium/src/+/main/docs/contributing.md>), [R01-S07](<https://www.chromium.org/for-testers/bug-reporting-guidelines/>), [R01-S08](<https://support.google.com/chrome/answer/95315?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S09](<https://www.chromium.org/Home/chromium-security/reporting-security-bugs>), [R01-S10](<https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html>), [R01-S11](<https://developer.chrome.com/docs/web-platform/versionhistory/reference>), [R01-S12](<https://versionhistory.googleapis.com/v1/chrome/platforms/win64/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S13](<https://versionhistory.googleapis.com/v1/chrome/platforms/mac_arm64/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S14](<https://versionhistory.googleapis.com/v1/chrome/platforms/linux/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S15](<https://versionhistory.googleapis.com/v1/chrome/platforms/android/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S16](<https://versionhistory.googleapis.com/v1/chrome/platforms/ios/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S17](<https://blog.google/products-and-platforms/products/chrome/new-chrome-productivity-features>), [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S19](<https://blog.google/products-and-platforms/products/chrome/chrome-productivity-improvements>), [R01-S20](<https://support.google.com/chrome/answer/16971124?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R01-S22](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S23](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DiOS>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>), [R01-S26](<https://support.google.com/chrome/answer/2364824?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S28](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S29](<https://developer.chrome.com/blog/devtools-tips-33>), [R01-S30](<https://support.google.com/android/answer/9075928?hl=en>), [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S32](<https://support.google.com/chrome/answer/2790761?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S33](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S35](<https://support.google.com/chrome/answer/9890866?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S36](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S37](<https://developer.chrome.com/docs/extensions/reference/api/sidePanel>), [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S39](<https://support.google.com/chrome/answer/16961953?hl=en>), [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>), [R01-S41](<https://support.google.com/chrome_webstore/answer/1698338?hl=en>), [R01-S42](<https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies>).

<a id="R02"></a>

## R02 — Mainstream browser features and lessons for Chrome

Agent session: **ses\_e018c78a8fferGQLyoej3pKp78**. Saved lane status: **complete**. Original shard: [R02](<data/lanes/R02.json>).

**Scope:** Firefox, Microsoft Edge, Apple Safari, Brave, Vivaldi, Opera One, and Opera GX: documented features, engine and platform differences, lifecycle qualifications, and candidate lessons for Chrome.

- **as Of:** 2026-11-21

**Limitations of this assignment:**

- All observations are documentary. No installed-browser, runtime, accessibility, privacy, performance, or regression tests were performed for this research.
- Chrome parity is unassessed. The Chrome developer source is used only for engine-family facts; competitor advertising is not evidence that Chrome lacks a feature.
- Feature availability is scoped to the cited product, platform, version, account, pricing, and rollout evidence. Active lifecycle does not mean every listed feature is mature or universally available.
- Mozilla support pages returned client challenges; Brave Sync/Leo support pages returned 403. Alternative official product, architecture, blog, and policy sources were retained. Failed-page snippets were not promoted into factual records.
- Safari Highlights extraction was insufficient and a separate summaries link resolved to a generic guide. Highlights-specific claims were not retained. Opera minimum OS versions could not be recovered from the requirements-page body.
- Some documentation is mutable or internally inconsistent: Edge Collections contains older transitional text, Workspaces switching has support/release timing differences, and Flow retains Opera Touch wording.
- Historical Containers and Vivaldi platform announcements establish documented designs, not current binary versions. Latest Brave, Vivaldi, and GX builds and Safari patch versions per OS were not pinned.
- Vendor speed, RAM, battery, accuracy, privacy-superiority, no-log audit, user-count, and award claims were not independently measured or adopted as benchmark results.
- Candidate recommendations are hypotheses with proposed validation criteria, not filed reports or proven Chrome defects. No upstream submissions or publication receipts exist for this lane.
- Only public-source findings and research provenance are retained; private operating context, machine-specific paths, credentials, environment values, personal browsing data, and raw tool transcripts are excluded.

Saved source receipts: [R02-A1](<https://developer.chrome.com/docs/web-platform/blink>), [R02-A2](<https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/>), [R02-B1](<https://brave.com/features/>), [R02-B2](<https://brave.com/privacy/browser/>), [R02-B3](<https://brave.com/leo/>), [R02-B4](<https://brave.com/playlist/>), [R02-B5](<https://brave.com/privacy-updates/39-email-aliases/>), [R02-B6](<https://brave.com/blog/brave-origin>), [R02-B7](<https://brave.com/firewall-vpn/>), [R02-E1](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel>), [R02-E2](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-supported-operating-systems>), [R02-E3](<https://support.microsoft.com/en-us/edge/getting-started-with-microsoft-edge-workspaces>), [R02-E4](<https://support.microsoft.com/en-us/edge/organize-your-ideas-with-collections-in-microsoft-edge>), [R02-E5](<https://explore.microsoft.com/en-us/edge/features/split-screen>), [R02-E6](<https://explore.microsoft.com/en-us/edge/features/vertical-tabs>), [R02-E7](<https://support.microsoft.com/en-us/edge/learn-about-performance-features-in-microsoft-edge>), [R02-E8](<https://support.microsoft.com/en-us/accessibility/edge/accessibility-features-in-microsoft-edge>), [R02-F1](<https://www.firefox.com/en-US/firefox/160.0/releasenotes/>), [R02-F10](<https://www.firefox.com/en-US/features/picture-in-picture/>), [R02-F11](<https://www.firefox.com/en-US/features/pdf-editor/>), [R02-F2](<https://www.firefox.com/en-US/firefox/160.0/system-requirements/>), [R02-F3](<https://firefox-source-docs.mozilla.org/overview/gecko.html>), [R02-F4](<https://firefox-source-docs.mozilla.org/overview/ios.html>), [R02-F5](<https://www.firefox.com/en-US/features/total-cookie-protection/>), [R02-F6](<https://blog.mozilla.org/security/2020/02/06/multi-account-containers-sync/>), [R02-F7](<https://www.firefox.com/en-US/features/translate/>), [R02-F8](<https://blog.mozilla.org/en/firefox/cjk-translation-on-android/>), [R02-F9](<https://www.firefox.com/en-US/features/vertical-tabs/>), [R02-G1](<https://blogs.opera.com/news/2026/03/opera-gx-lands-on-linux/>), [R02-G2](<https://www.opera.com/gx/linux>), [R02-G3](<https://www.opera.com/gx/features/gx-control>), [R02-G4](<https://www.opera.com/gx/features/mods>), [R02-G5](<https://www.opera.com/gx/features/workspaces>), [R02-G6](<https://blogs.opera.com/news/2026/06/step-into-summer-with-a-massive-update-from-gx/>), [R02-G7](<https://www.opera.com/gx/features/rgx>), [R02-G8](<https://www.opera.com/gx/features/gx-cleaner>), [R02-O1](<https://www.opera.com/download>), [R02-O2](<https://blogs.opera.com/desktop/2026/11/opera-140-0-6074-36-stable-update/>), [R02-O3](<https://help.opera.com/en/latest/features/>), [R02-O4](<https://www.opera.com/features/tab-islands>), [R02-O5](<https://blogs.opera.com/security/2026/07/how-opera-paste-protect-guards-against-clipboard-attacks/>), [R02-O6](<https://www.opera.com/features/free-vpn>), [R02-O7](<https://help.opera.com/latest/security-and-privacy/#VPN>), [R02-O8](<https://www.opera.com/download/requirements>), [R02-S1](<https://support.apple.com/en-us/102665>), [R02-S10](<https://support.apple.com/guide/apple-vision-pro/browse-the-web-privately-tan4d3bd79f8/visionos>), [R02-S2](<https://webkit.org/blog/18486/webkit-features-for-safari-27-1/>), [R02-S3](<https://support.apple.com/en-us/105100>), [R02-S4](<https://support.apple.com/guide/safari/share-tab-groups-collaborate-safari-mac-ibrw7f189b02/mac>), [R02-S5](<https://support.apple.com/en-us/105028>), [R02-S6](<https://support.apple.com/en-us/120682>), [R02-S7](<https://support.apple.com/en-us/104996>), [R02-S8](<https://support.apple.com/guide/safari/hide-ads-when-reading-sfri32632/mac>), [R02-S9](<https://support.apple.com/guide/safari/prevent-cross-site-tracking-sfri40732/mac>), [R02-V1](<https://vivaldi.com/download>), [R02-V10](<https://help.vivaldi.com/desktop/panels/panels/>), [R02-V2](<https://vivaldi.com/blog/vivaldi-on-desktop-6-4/>), [R02-V3](<https://vivaldi.com/blog/vivaldi-on-desktop-7-8/>), [R02-V4](<https://help.vivaldi.com/desktop/tabs/workspaces/>), [R02-V5](<https://help.vivaldi.com/desktop/tabs/tab-stacks/>), [R02-V6](<https://help.vivaldi.com/desktop/tabs/tab-tiling/>), [R02-V7](<https://help.vivaldi.com/desktop/shortcuts/command-chains/>), [R02-V8](<https://help.vivaldi.com/desktop/panels/web-panels/>), [R02-V9](<https://help.vivaldi.com/desktop/panels/notes/>).

<a id="R03"></a>

## R03 — Privacy, anonymity, and independent-browser workflows

Agent session: **ses\_e018c78a4ffegz3KgWfZpI1xs2**. Saved lane status: **complete**. Original shard: [R03](<data/lanes/R03.json>).

**Scope:** Tor Browser<br>Mullvad Browser<br>LibreWolf<br>ungoogled-chromium<br>Waterfox<br>Pale Moon<br>Basilisk<br>DuckDuckGo Browser

- **research Cutoff:** 2026-11-21

**Limitations of this assignment:**

- This lane records primary-source documentation and release metadata, not hands-on browser results. No local reproduction, install, network capture, source-code audit, performance benchmark or fingerprint-population experiment was performed.
- Chrome absence, parity, defaults, rollout and platform coverage remain not established for every candidate; the dedicated baseline lane must determine them.
- Tor-network anonymity, ordinary tracker resistance, local data retention, DNS privacy, security and compatibility are distinct properties. No blanket browser ranking or unmeasured superiority is claimed.
- Latest observed records are retrieval snapshots, not guarantees that every distribution channel is current. LibreWolf&#39;s latest overall release and date, DuckDuckGo&#39;s latest app versions, and several exact engine patch levels remain unknown.
- LibreWolf release endpoints returned HTTP 403, as did the raw Tor build changelog; public installation pages and release-announcement bodies supplied the narrower evidence retained here.
- A guessed DuckDuckGo Windows repository returned HTTP 404 and a guessed sync-help path returned generic text; neither failure establishes absence. The actual Sync &amp; Backup policy was read instead.
- Sources are mutable. The older Mullvad hard-facts DNS/reset descriptions conflict with the newer 16.0 announcement; release-specific evidence is used for those fields.
- Unverified extraction dates were discarded rather than converted into publication facts. Quarterly update periods and release dates are explicitly distinguished from unknown page publication dates.
- Vendor claims about zero telemetry, no collection, nearly identical fingerprints, stronger protection or relative resource usage were not independently audited. Documentation is evidence of the claim or mechanism, not proof of effectiveness.
- Recommendation candidates are unsubmitted hypotheses with proposed acceptance questions. The single issue is a source inconsistency, not a reproduced browser defect or an upstream report submitted by this project.
- The 48 feature records preserve all 46 substantive feature-table rows from the completed research and separately retain two documented Waterfox capabilities from its release discussion. No additional research or cross-lane build work was performed.

Saved source receipts: [R03-S-B1](<https://www.basilisk-browser.org/>), [R03-S-B2](<https://www.basilisk-browser.org/features.html>), [R03-S-B3](<https://www.basilisk-browser.org/releasenotes.html>), [R03-S-B4](<https://www.basilisk-browser.org/download.html>), [R03-S-D1](<https://duckduckgo.com/duckduckgo-help-pages/get-duckduckgo/does-duckduckgo-make-a-browser>), [R03-S-D10](<https://duckduckgo.com/duckduckgo-help-pages/get-duckduckgo/get-duckduckgo-browser-on-windows>), [R03-S-D11](<https://duckduckgo.com/duckduckgo-help-pages/get-duckduckgo/get-duckduckgo-browser-on-mac>), [R03-S-D12](<https://chromium.googlesource.com/chromium/src/+/HEAD/android_webview/README.md>), [R03-S-D2](<https://duckduckgo.com/updates>), [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>), [R03-S-D4](<https://duckduckgo.com/duckduckgo-help-pages/privacy/fire-tabs>), [R03-S-D5](<https://duckduckgo.com/sync_and_backup/privacy>), [R03-S-D6](<https://spreadprivacy.com/windows-browser-open-beta/>), [R03-S-D7](<https://spreadprivacy.com/duckduckgo-for-mac-open-beta/>), [R03-S-D8](<https://github.com/duckduckgo/apple-browsers>), [R03-S-D9](<https://github.com/duckduckgo/Android>), [R03-S-L1](<https://librewolf.net/>), [R03-S-L2](<https://librewolf.net/docs/features/>), [R03-S-L3](<https://librewolf.net/installation/windows/>), [R03-S-L4](<https://librewolf.net/installation/macos/>), [R03-S-L5](<https://librewolf.net/installation/linux/>), [R03-S-M1](<https://mullvad.net/en/browser>), [R03-S-M2](<https://mullvad.net/en/browser/hard-facts>), [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>), [R03-S-M4](<https://github.com/mullvad/mullvad-browser>), [R03-S-M5](<https://api.github.com/repos/mullvad/mullvad-browser/releases/latest>), [R03-S-P1](<https://www.palemoon.org/>), [R03-S-P2](<https://www.palemoon.org/releasenotes.shtml>), [R03-S-T1](<https://blog.torproject.org/new-release-tor-browser-160>), [R03-S-T2](<https://support.torproject.org/tor-browser/getting-started/about-tor-browser>), [R03-S-T3](<https://support.torproject.org/tor-browser/features/managing-identities>), [R03-S-T4](<https://support.torproject.org/tor-browser/features/fingerprinting-protections>), [R03-S-T5](<https://blog.torproject.org/new-release-tor-browser-1601>), [R03-S-T6](<https://blog.torproject.org/new-release-tor-browser-1602>), [R03-S-T7](<https://blog.torproject.org/>), [R03-S-U1](<https://github.com/ungoogled-software/ungoogled-chromium>), [R03-S-U2](<https://api.github.com/repos/ungoogled-software/ungoogled-chromium/releases/latest>), [R03-S-W1](<https://www.waterfox.com/>), [R03-S-W2](<https://www.waterfox.com/releases>), [R03-S-W3](<https://www.waterfox.com/download/>), [R03-S-W4](<https://www.waterfox.com/releases/6.7.8>), [R03-S-W5](<https://api.github.com/repos/BrowserWorks/Waterfox/releases/latest>), [R03-S-W6](<https://api.github.com/repos/BrowserWorks/Waterfox-Android/releases/latest>).

<a id="R04"></a>

## R04 — Productivity, workspaces, and AI-native browsers

Agent session: **ses\_e018c7881ffdKxT3pUQi9j1u66**. Saved lane status: **complete**. Original shard: [R04](<data/lanes/R04.json>).

**Scope:** Arc<br>Dia<br>Zen Browser<br>Floorp<br>SigmaOS<br>Sidekick<br>Wavebox<br>Shift<br>Perplexity Comet<br>ChatGPT Atlas<br>Opera Neon

- **research Cutoff:** 2026-11-21

**Limitations of this assignment:**

- This is a conversion of completed documentary research, not a fresh search or a browser reproduction. No tested browser versions are asserted.
- Chrome parity is unassessed for every feature and recommendation candidate. The coordinating baseline lane owns version, OS, account, region and rollout comparisons.
- SigmaOS current maintenance and backend operation remain unresolved. Sidekick retirement is distributor-supported; its original maker notice and complete historical engine/platform matrix were not recovered.
- Atlas retirement is maker-confirmed but its exact shutdown day remains unestablished. Arc features are legacy design evidence despite still-visible pre-sunset downloads.
- Arc desktop versus Arc Search, Comet desktop versus mobile, Dia Mac versus Windows and AI free versus paid are separate surfaces. No unsupported engine or feature parity is implied.
- Dia AI prices/quotas and exact Wavebox paid rates remain incomplete. Comet Background Assistants entitlement is grounded in a dated launch note. Prices are retrieval-time offering terms, not purchase verification.
- Official pages contain unresolved or superseded text: Comet no-mobile FAQs, Neon paid-only/account-required FAQ, SigmaOS old FAQ prices, and legacy Arc security promises.
- Arc Help Center and Shift release-note hosts returned 403; this does not establish absence. OpenAI source bodies were recovered by direct public-page reads. Sidekick&#39;s Microsoft Store result was title-only.
- Page extractors omitted some dates, headings and bodies. Generic template dates and footer years were not converted into publication dates; relative dates and disputed metadata are retained as qualifications.
- No independent performance, battery, reliability, privacy, certification, security-effectiveness or full extension-compatibility audit was performed.
- Experimental, retired, sunset-announced and uncertain-maintenance products are retained as qualified evidence, not promoted to actively recommended replacements.
- Source instructions and example prompts were treated as document content, never as authority to execute tools or publish. This lane created no child agents or remote submissions.
- Issues is intentionally empty: the lane supplies product evidence and recommendation hypotheses, not locally reproduced defects or upstream report submissions.

Saved source receipts: [R04-A1](<https://arc.net/>), [R04-A2](<https://arc.net/download>), [R04-A3](<https://start.arc.net/command-bar-actions>), [R04-A4](<https://arc.net/security>), [R04-C1](<https://www.perplexity.ai/help-center/comet/en/articles/11583798-what-is-comet-s-browser-engine.md>), [R04-C10](<https://www.perplexity.ai/changelog/what-we-shipped--march-27-2026>), [R04-C11](<https://www.perplexity.ai/help-center/comet/en/articles/11734737-comet-mobile-app.md>), [R04-C12](<https://www.perplexity.ai/help-center/comet/en/articles/12324462-split-view-mode.md>), [R04-C13](<https://www.perplexity.ai/comet>), [R04-C2](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>), [R04-C3](<https://www.perplexity.ai/help-center/comet/en/articles/11734688-assistant-panel.md>), [R04-C4](<https://www.perplexity.ai/help-center/comet/en/articles/12658082-control-what-comet-assistant-can-use.md>), [R04-C5](<https://www.perplexity.ai/help-center/comet/en/articles/11906981-comet-query-shortcuts.md>), [R04-C6](<https://www.perplexity.ai/help-center/en/articles/13531023-managing-comet-assistant-permissions.md>), [R04-C7](<https://www.perplexity.ai/changelog/what-we-shipped-october-3rd>), [R04-C8](<https://www.perplexity.ai/help-center/comet/en/articles/12875447-comet-for-android-quick-start-and-key-features.md>), [R04-C9](<https://www.perplexity.ai/hub/blog/meet-comet-for-ios>), [R04-D1](<https://www.diabrowser.com/>), [R04-D2](<https://www.diabrowser.com/changelog>), [R04-D3](<https://www.diabrowser.com/security>), [R04-D4](<https://www.diabrowser.com/privacy>), [R04-F1](<https://floorp.app/en>), [R04-F2](<https://blog.floorp.app/en/release/12.21.2/>), [R04-F3](<https://docs.floorp.app/docs/features/workspaces/>), [R04-F4](<https://docs.floorp.app/docs/features/split-view/>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>), [R04-H1](<https://shift.com/>), [R04-H2](<https://shift.com/spaces/>), [R04-H3](<https://shift.com/builder/>), [R04-H4](<https://shift.com/ai/>), [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>), [R04-H6](<https://shift.com/pricing/>), [R04-H7](<https://shift.com/security/>), [R04-H8](<https://shift.com/download/?platform=mac>), [R04-H9](<https://shift.com/app-integrated/>), [R04-K1](<https://www.meetsidekick.com/>), [R04-K2](<https://appsumo.com/products/sidekick/>), [R04-K3](<https://apps.microsoft.com/detail/xp89dmjvg2wpz1?hl=en-GB&gl=MX>), [R04-N1](<https://www.operaneon.com/>), [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>), [R04-S1](<https://sigmaos.com/>), [R04-S2](<https://docs.sigmaos.com/common-questions>), [R04-S3](<https://docs.sigmaos.com/tutorial/workspaces>), [R04-S4](<https://docs.sigmaos.com/tutorial/split-screen>), [R04-S5](<https://docs.sigmaos.com/release-notes>), [R04-S6](<https://sigmaos.com/updates/1-17-0>), [R04-S7](<https://sigmaos.com/blog>), [R04-T1](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>), [R04-T2](<https://openai.com/index/introducing-chatgpt-atlas/>), [R04-T3](<https://openai.com/index/building-chatgpt-atlas>), [R04-W1](<https://wavebox.io/>), [R04-W2](<https://wavebox.io/platform>), [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>), [R04-W4](<https://wavebox.io/pricing>), [R04-W5](<https://wavebox.io/download>), [R04-W6](<https://hub.wavebox.io/tag/releases/>), [R04-Z1](<https://zen-browser.app/>), [R04-Z2](<https://zen-browser.app/download>), [R04-Z3](<https://zen-browser.app/release-notes>), [R04-Z4](<https://docs.zen-browser.app/user-manual/workspaces>), [R04-Z5](<https://docs.zen-browser.app/user-manual/glance>).

<a id="R05"></a>

## R05 — Mobile and regional browsers: documented capabilities and Chrome investigation candidates

Agent session: **ses\_e018c7878ffermgsE7dkTi4Cmi**. Saved lane status: **complete**. Original shard: [R05](<data/lanes/R05.json>).

**Scope:** Samsung Browser, Cromite, GrapheneOS Vanadium, Firefox Focus, Via, Quetta, Kiwi Browser, Aloha, Yandex Browser, and UC Browser. Documentary snapshot of mobile capabilities, regional editions, engine evidence, distribution and lifecycle. Chrome Android and iOS baseline comparison belongs to R01 and has not been performed in this lane.

- **as Of:** 2026-11-21

**Limitations of this assignment:**

- Complete means the assigned documentary handoff has been converted into sources, ten browser records, substantive features, source inconsistencies and ten proposal candidates. It does not mean unresolved engine, distribution, runtime, Chrome parity or feasibility questions have been answered.
- Research is documentary and source-inspected, not hands-on: no installations, browser launches, reproductions, compatibility tests, benchmarks, VPN captures or cryptographic audits were performed.
- All Chrome improvement candidates are hypotheses with parity unknown until R01 compares current Android and iOS versions separately, including device, region and channel. This lane establishes no missing Chrome feature.
- Retrieval dates refer to the saved research session on 2026-11-21. Page metadata, repository creation dates, corporate founding dates and unrelated extractor dates were not promoted to publication dates. Known version-release dates are labeled as such.
- Storefront/API records are snapshots. Recent source activity does not prove prompt binary security delivery, and an old release does not prove formal discontinuation. Kiwi has an explicit maintenance-ending notice; Focus has repository migrations.
- Platform, package, region, device, account, plan and media-site boundaries remain attached to claims. No privacy/security/performance superiority ranking is supported.

Saved source receipts: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-C01](<https://raw.githubusercontent.com/uazo/cromite/master/README.md>), [R05-C02](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FEATURES.md>), [R05-C03](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FAQ.md>), [R05-C04](<https://api.github.com/repos/uazo/cromite>), [R05-C05](<https://api.github.com/repos/uazo/cromite/releases/latest>), [R05-C05a](<https://github.com/uazo/cromite/releases/tag/v153.0.8010.37-11507ac1061b5ea227806f5e84db5a57df6ccf6a>), [R05-C06](<https://raw.githubusercontent.com/uazo/cromite/11507ac1061b5ea227806f5e84db5a57df6ccf6a/build/patches/Experimental-support-for-extensions-on-Android.patch>), [R05-C07](<https://api.github.com/repos/uazo/cromite/issues/comments/5679359966>), [R05-C07a](<https://github.com/uazo/cromite/issues/3040#issuecomment-5679359966>), [R05-F01](<https://www.firefox.com/en-US/mobile/focus/>), [R05-F02](<https://hacks.mozilla.org/2018/09/focus-with-geckoview/>), [R05-F03](<https://github.com/mozilla-mobile/focus-android>), [R05-F04](<https://github.com/mozilla-mobile/firefox-android>), [R05-F05](<https://github.com/mozilla-mobile/focus-ios>), [R05-F06](<https://github.com/mozilla-mobile/firefox-ios>), [R05-F07](<https://raw.githubusercontent.com/mozilla-mobile/firefox-ios/9e923b05c99b2b0e19c6cadf198b222acf1ddb5b/focus-ios/Blockzilla/Modules/WebView/LegacyWebViewController.swift>), [R05-F08](<https://apps.apple.com/us/app/firefox-focus-privacy-browser/id1055677337>), [R05-F09](<https://support.mozilla.org/en-US/kb/firefox-focus-ios>), [R05-G01](<https://grapheneos.org/features#vanadium>), [R05-G02](<https://api.github.com/repos/GrapheneOS/Vanadium/releases/latest>), [R05-G02a](<https://github.com/GrapheneOS/Vanadium/releases/tag/158.0.8127.42.0>), [R05-K01](<https://github.com/kiwibrowser/src.next>), [R05-K02](<https://github.com/kiwibrowser/src>), [R05-L01](<https://alohabrowser.com/>), [R05-L02](<https://alohabrowser.com/posts-aloha-core-i-love-and-hate-you>), [R05-L03](<https://apps.apple.com/us/app/aloha-browser-private-vpn/id1105317682>), [R05-L04](<https://alohabrowser.com/download.html>), [R05-P01](<https://developer.apple.com/support/alternative-browser-engines/>), [R05-Q01](<https://play.google.com/store/apps/details?id=net.quetta.browser&hl=en>), [R05-Q02](<https://www.quetta.net/features/extensions>), [R05-Q03](<https://www.quetta.net/products/ios>), [R05-Q04](<https://apps.apple.com/app/quetta-private-browser/id6504077999>), [R05-Q05](<https://www.quetta.net/downloads>), [R05-Q06](<https://www.quetta.net/features/video-downloader>), [R05-Q07](<https://www.quetta.net/features/playlist>), [R05-Q08](<https://www.quetta.net/faq>), [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>), [R05-S02](<https://developer.samsung.com/browser/release-note/android-release-note.html>), [R05-S03](<https://developer.samsung.com/browser/release-note/windows-release-note.html>), [R05-S04](<https://developer.samsung.com/browser/android/extensions-dev-overview.html>), [R05-U01](<https://play.google.com/store/apps/details?id=com.UCMobile.intl&hl=en>), [R05-U02](<https://open-uc.uc.cn/solution/u4>), [R05-U03](<https://www.alibabagroup.com/en-US/document-1489318545857708032>), [R05-U04](<https://itunes.apple.com/search?term=UC%E6%B5%8F%E8%A7%88%E5%99%A8&country=cn&entity=software&limit=10>), [R05-U04a](<https://apps.apple.com/cn/app/uc%E6%B5%8F%E8%A7%88%E5%99%A8-%E9%9A%8F%E5%BF%83%E6%90%9C-%E7%95%85%E5%BF%AB%E7%9C%8B/id586871187>), [R05-U05](<https://www.ucweb.com/download/pc>), [R05-V01](<https://github.com/tuyafeng/Via>), [R05-V02](<https://play.google.com/store/apps/details?id=mark.via.gp&hl=en>), [R05-V03](<https://apps.apple.com/us/app/via-browser/id1639085829>), [R05-Y01](<https://play.google.com/store/apps/details?id=com.yandex.browser&hl=en>), [R05-Y02](<https://yandex.com/support/browser-mobile-android-phone/en/personal-settings/extensions>), [R05-Y02a](<https://yandex.com/support/browser-mobile-android-tablet/en/personal-settings/extensions>), [R05-Y03](<https://yandex.com/support/browser-mobile-android-phone/en/navigation/translation>), [R05-Y04](<https://yandex.com/support/browser-mobile-iphone/en/navigation/translation>), [R05-Y05](<https://yandex.com/support/browser-mobile-iphone/en/install/install>), [R05-Y06](<https://yandex.com/bugbounty/i/browser>).

<a id="R06"></a>

## R06 — Independent, keyboard-first, lightweight, experimental, and text browsers

Agent session: **ses\_e018c7860ffe0U1lgZ8j9Qiw6m**. Saved lane status: **complete**. Original shard: [R06](<data/lanes/R06.json>).

**Scope:** Orion by Kagi<br>GNOME Web / Epiphany<br>Falkon<br>qutebrowser<br>Nyxt<br>Ladybird<br>Servo<br>Dillo<br>Lynx<br>w3m

- **research Cutoff:** 2026-11-21
- **evidence Scope:** Documentary observations only. No browser installation, execution, compatibility benchmark, accessibility audit or local reproduction underlies these records.

**Limitations of this assignment:**

- All research is documentary. Sources and release metadata are not runtime, security, performance or accessibility evidence.
- The ten projects include released graphical browsers, specialist interfaces, a constrained graphical browser, experimental browser/engine work and terminal text tools; they are not interchangeable Chrome replacements.
- No current Chrome baseline was inspected, so no Chrome feature absence, locally reproduced defect or measured inferiority is claimed.
- Original discovery had benched/refused search engines and duplicate returned batches; duplicates were not counted as independent corroboration. Conversion reused completed research without new queries.
- Long source histories and some reader-mode responses were truncated. Claims are limited to inspected passages; generic extraction metadata was not silently promoted to publication dates.
- Unresolved: Orion Linux/Windows source-handoff completion and successor stewardship; Nyxt native Windows readiness; exact Falkon 26.08.3 release date; w3m original-upstream activity and distribution-specific support.
- Ladybird&#39;s first alpha remained future-facing in inspected sources. Servo&#39;s 0.8.0 release remains a tech demo/prototype despite its GitHub channel flag.
- Failed reads included the Orion extension-document URL (404), GNOME GitLab raw documents (406), w3m SourceForge homepage (403), an incorrect w3m README.md path (404), Lynx CHANGES URL (404), and Qt overview (403). Failure is not feature or project absence.
- Source-linked recommendations are proposals requiring a current Chrome baseline and appropriate measurement. No upstream reports were submitted and no local reproductions were performed.

Saved source receipts: [R06-D1](<https://dillo-browser.org/>), [R06-D2](<https://dillo-browser.org/release/3.3.0/>), [R06-D3](<https://dillo-browser.org/user_help.html>), [R06-D4](<https://dillo-browser.org/release/3.2.0/>), [R06-D5](<https://git.dillo-browser.org/dillo/>), [R06-D6](<https://dillo-browser.github.io/>), [R06-F1](<https://www.falkon.org/about/>), [R06-F2](<https://apps.kde.org/falkon/index.xml>), [R06-F3](<https://raw.githubusercontent.com/KDE/falkon/master/CHANGELOG>), [R06-F4](<https://apps.kde.org/falkon/>), [R06-F5](<https://www.falkon.org/posts/>), [R06-G1](<https://raw.githubusercontent.com/GNOME/epiphany/main/README.md>), [R06-G2](<https://raw.githubusercontent.com/GNOME/epiphany/main/NEWS>), [R06-G3](<https://apps.gnome.org/Epiphany/>), [R06-L1](<https://ladybird.org/>), [R06-L2](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/README.md>), [R06-L3](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/Documentation/FAQ.md>), [R06-N1](<https://raw.githubusercontent.com/atlas-engineer/nyxt/master/README.org>), [R06-N2](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>), [R06-N3](<https://nyxt-browser.com/article/release-5.0.0.org>), [R06-N4](<https://api.github.com/repos/atlas-engineer/nyxt/releases/tags/5.0.0>), [R06-N5](<https://nyxt.atlas.engineer/faq>), [R06-O1](<https://blog.kagi.com/orion>), [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>), [R06-O3](<https://orionbrowser.com/updates/orion-release-notes>), [R06-O4](<https://help.kagi.com/orion/getting-started/installing-orion.html>), [R06-Q1](<https://qutebrowser.org/doc/changelog.html>), [R06-Q2](<https://qutebrowser.org/doc/quickstart.html>), [R06-Q3](<https://qutebrowser.org/doc/install.html>), [R06-S1](<https://servo.org/>), [R06-S2](<https://raw.githubusercontent.com/servo/servo/main/README.md>), [R06-S3](<https://api.github.com/repos/servo/servo/releases/latest>), [R06-S4](<https://github.com/servo/servo/releases/tag/v0.8.0>), [R06-S5](<https://servo.org/blog/2026/04/30/march-in-servo/>), [R06-S6](<https://servo.org/blog/2026/08/31/july-in-servo/>), [R06-W1](<https://raw.githubusercontent.com/tats/w3m/master/README>), [R06-W2](<https://raw.githubusercontent.com/tats/w3m/master/doc/README>), [R06-W3](<https://raw.githubusercontent.com/tats/w3m/master/doc/w3m.1>), [R06-W4](<https://raw.githubusercontent.com/tats/w3m/master/doc/README.tab>), [R06-W5](<https://raw.githubusercontent.com/tats/w3m/master/doc/README.sixel>), [R06-W6](<https://api.github.com/repos/tats/w3m/commits?per_page=3>), [R06-W7](<https://tracker.debian.org/pkg/w3m>), [R06-W8](<https://github.com/tats/w3m/releases>), [R06-Y1](<https://lynx.invisible-island.net/>), [R06-Y2](<https://lynx.invisible-island.net/lynx2.9.3/index.html>), [R06-Y3](<https://lynx.invisible-island.net/current/index.html>), [R06-Y4](<https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html>), [R06-Y5](<https://lynx.invisible-island.net/manpage/>), [R06-Y6](<https://invisible-island.net/lynx/>).

<a id="R07"></a>

## R07 — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings

Agent session: **ses\_e018c785effea8CQ4RypYDSiZs**. Saved lane status: **complete**. Original shard: [R07](<data/lanes/R07.json>).

**Scope:** Publicly documented browser-chrome defects and usability complaints, including toolbar pinning and the operating-system settings surface for Chrome permissions. Excludes general web rendering, DevTools, security vulnerability hunting, and local build work.

- **research Cutoff:** 2026-11-21
- **retrieval Window:** **from:** 2026-11-21T14:13:25Z<br>**to:** 2026-11-21T14:44:47Z

**Limitations of this assignment:**

- This conversion reuses completed research; it adds no fresh research, browser inspection, or local reproduction.
- All 12 main records have source-verified identities, current snapshots, and original descriptions. Their reported behavior is not independently verified by this project.
- All testedVersions arrays are empty and all reproduction values are not-run. Source steps are attributed procedures, not test receipts.
- Existing reports use existing-upstream submission state. No entry represents a submission by this project.
- Original descriptions, current metadata, selected related records, and selected fixing changes were read; complete comment pagination and attachments were not retrieved.
- Two related records remain unresolved outside the main issue inventory. The three verified duplicate relationships and one historical relationship are folded into their main records.
- Exact first shipped Stable versions for several fixes remain unknown. M131 and M154 branch evidence is not substituted for binary or release-note verification.
- The full closure rationale for the Not reproducible fullscreen report and Intended behavior Split View request was not recovered; their observed closed statuses are preserved.
- Publication dates remain null when not established. Generic extraction placeholder dates were rejected.
- Search-engine timeouts, off-topic filtering, empty results, and primary-source rate limits constrain recall. This is a targeted inventory, not an exhaustive or prevalence-ranked survey.
- No browser or feature inventory belongs to this lane. Personal profile data, private addresses, internal links, and configuration examples unnecessary to public evidence are omitted.

Saved source receipts: [R07-source-365519965](<https://issues.chromium.org/issues/365519965>), [R07-source-387203448](<https://issues.chromium.org/issues/387203448>), [R07-source-40742612](<https://issues.chromium.org/issues/40742612>), [R07-source-443106403](<https://issues.chromium.org/issues/443106403>), [R07-source-457156374](<https://issues.chromium.org/issues/457156374>), [R07-source-469174762](<https://issues.chromium.org/issues/469174762>), [R07-source-475853506](<https://issues.chromium.org/issues/475853506>), [R07-source-478527840](<https://issues.chromium.org/issues/478527840>), [R07-source-483899631](<https://issues.chromium.org/issues/483899631>), [R07-source-492117351](<https://issues.chromium.org/issues/492117351>), [R07-source-496291031](<https://issues.chromium.org/issues/496291031>), [R07-source-504663589](<https://issues.chromium.org/issues/504663589>), [R07-source-540469616](<https://issues.chromium.org/issues/540469616>), [R07-source-552741956](<https://issues.chromium.org/issues/552741956>), [R07-source-564673918](<https://issues.chromium.org/issues/564673918>), [R07-source-587381526](<https://issues.chromium.org/issues/587381526>), [R07-source-cl-5961164](<https://chromium-review.googlesource.com/changes/5961164/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>), [R07-source-cl-5983233](<https://chromium-review.googlesource.com/changes/5983233/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>), [R07-source-cl-7903002](<https://chromium-review.googlesource.com/changes/7903002/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>), [R07-source-cl-8427141](<https://chromium-review.googlesource.com/changes/8427141/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>), [R07-source-cl-8830787](<https://chromium-review.googlesource.com/changes/8830787/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>), [R07-source-fix-457156374](<https://chromium.googlesource.com/chromium/src/+/5c9ced36765132da8c3bd8de398862a47cd082e6>), [R07-source-fix-469174762](<https://chromium.googlesource.com/chromium/src/+/dd8ba744e49b4f97caa2d3eb1ff9cb5335dc04be>), [R07-source-fix-496291031](<https://chromium.googlesource.com/chromium/src/+/2be0ae48ad7c700ec9dca07e83e73407947cbad4>), [R07-source-fix-552741956-initial](<https://chromium.googlesource.com/chromium/src/+/46f7721abc728d993b52cc180bf0fe00f3401260>), [R07-source-release-fetch-gap](<https://chromereleases.googleblog.com/2026/10/stable-channel-update-for-desktop.html>), [R07-source-split-view-help](<https://support.google.com/chrome/answer/16971124?hl=en-en&ref_topic=7439636>), [R07-source-status-definitions](<https://developers.google.com/issue-tracker/concepts/issues>), [R07-source-tracker-status-mapping](<https://www.gstatic.com/_/buganizer/_/js/k=buganizer.b.en_US.Hx_8ilZ1QCE.2018.O/am=AkAAYA/d=1/rs=AI3Ihhq_V2E_ndcb2iZwoKqX7T2bznB_BQ/m=c>).

<a id="R08"></a>

## R08 — Chrome/Chromium accessibility, performance and reliability regressions

Agent session: **ses\_e018c785bffex5F5aBOcrx3IFH**. Saved lane status: **complete**. Original shard: [R08](<data/lanes/R08.json>).

**Scope:** Publicly documented accessibility, performance/memory, platform reliability, printing/PDF/download and extension-regression issues, investigated on 2026-11-21. Reuses completed documentary research; includes proposed verification but no local browser reproductions.

- **investigation Date:** 2026-11-21

**Limitations of this assignment:**

- Curated documentary sample, not an exhaustive Chromium audit, incidence estimate or guarantee that every user on a named milestone encounters a failure.
- Zero independently reproduced defects: every issue has reproduction not-run and an empty testedVersions array. Upstream results are explicitly separate.
- All 13 primary upstream records have type Bug. The duplicate is consolidated; intentional Manifest V3 design and resolved platform gaps are not added to the bug count.
- Eight closed and four open families reflect observed tracker metadata. Closed families can retain unvalidated follow-ups; open historical records require current-version checks.
- Complete history coverage means all returned public events, not deleted/redacted comments, private attachments, internal telemetry, hidden revisions or every linked issue.
- Linked change titles/descriptions were read from issue history. Their source pages were not independently reviewed or built; a proposal or landed change alone does not prove shipment.
- Related issue IDs are retained as cited cross-references with unknown independent current status unless explicitly consolidated from a fully read record.
- Attachments, browser diagnostic dumps, HARs, crash/memory dumps and videos were not used as independently validated runtime evidence. This dataset omits personal/profile details and nonpublic evidence URLs.
- The dated Stable announcement does not establish the newest release on 2026-11-21. Documentation publication dates remain null where original publication was not established.
- No live browser actions, installations, browser-policy changes, local reproductions, credential/environment inspection or remote issue submissions were performed for this research.
- Recovery qualification: this is a labelled, non-byte-exact reconstruction from retained sections, the original report and generated previews. The original complete status is preserved; omitted optional structures are listed in recovery.omittedOptionalFields. Report-only fix and follow-up qualifications are explicitly labelled in the reconstructed observations.

Saved source receipts: [R08-S001](<https://issues.chromium.org/issues/481634944>), [R08-S002](<https://issues.chromium.org/issues/573260296>), [R08-S003](<https://issues.chromium.org/issues/568838775>), [R08-S004](<https://issues.chromium.org/issues/475536280>), [R08-S005](<https://issues.chromium.org/issues/499717573>), [R08-S006](<https://issues.chromium.org/issues/554057759>), [R08-S007](<https://issues.chromium.org/issues/339313336>), [R08-S008](<https://issues.chromium.org/issues/382394786>), [R08-S009](<https://issues.chromium.org/issues/500975618>), [R08-S010](<https://issues.chromium.org/issues/521708068>), [R08-S011](<https://issues.chromium.org/issues/519243472>), [R08-S012](<https://issues.chromium.org/issues/522564418>), [R08-S013](<https://issues.chromium.org/issues/559795247>), [R08-S014](<https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_018223192.html>), [R08-S015](<https://developer.chrome.com/docs/extensions/develop/migrate/known-issues>), [R08-S016](<https://support.google.com/chrome/a/answer/7679408?hl=en&co=CHROME_ENTERPRISE._Product%3DChromeBrowser>), [R08-S017](<https://developers.google.com/issue-tracker/concepts/issues>).

<a id="R09"></a>

## R09 — Chromium desktop toolbar menus and customization: source-only audit

Agent session: **ses\_e018c785affemZYsrUmX82PrxF**. Saved lane status: **complete**. Original shard: [R09](<data/lanes/R09.json>).

**Scope:** Bounded inspection of toolbar button context-menu construction and enablement, responsive overflow-menu identity and state, and Customize Toolbar pinning/settings, with selected menu, preference, action and test dependencies.

- **source Revision:** 04d6a2d2bd0626ad343da0ef33e812e1360b44bd
- **confirmation Boundary:** Source-confirmed means the inspected code establishes an interface or fixture inconsistency. It does not establish a local reproduction, released-version impact, measured accessibility behavior, or novelty. Every issue still needs validation.

**Limitations of this assignment:**

- This shard converts completed source research; it adds no new Chromium research or runtime evidence.
- Thirty files were inspected, some only in focused excerpts; this is not a general audit of all desktop menus.
- App three-dot menu internals, tab-strip/renderer context menus, macOS native integration, complete feature gates, full policy-test inventory and platform-wide accessibility remain unaudited.
- Chromium main at the pinned revision is the only source baseline. Installed/released Chrome versions and field-trial states were not inspected, so released-version impact is unknown.
- No Chromium build, source execution, browser reproduction or Chromium test run was performed in this lane. Proposed reproduction steps are not test results.
- Per-file publication dates were not established; copyright years are not publication dates. Some retrievals retain only date-level precision.
- No candidate has a repository-wide test search or exhaustive body-verified duplicate search. Issue 359863838 remains an inaccessible overlap lead.
- Null-active-tab, checkbox-role-transition and drag-edge leads were not traced far enough to promote. TODOs, nonfatal CHECK migration markers and intentional feature gates were not counted as defects.
- No child agents or upstream submissions were made. All five issue records remain needs-validation with empty testedVersions.

Saved source receipts: [R09-S00](<https://github.com/chromium/chromium/commit/04d6a2d2bd0626ad343da0ef33e812e1360b44bd>), [R09-S01](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_action_toolbar_button_menu_model.cc>), [R09-S02](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_action_toolbar_button_menu_model_browsertest.cc>), [R09-S03](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc>), [R09-S04](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.h>), [R09-S05](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu_unittest.cc>), [R09-S06](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/toolbar_controller.cc>), [R09-S07](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_toolbar_actions_container.cc>), [R09-S08](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/home_button.cc>), [R09-S09](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/home_button_browsertest.cc>), [R09-S10](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc>), [R09-S11](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.h>), [R09-S12](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar.mojom>), [R09-S13](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler_unittest.cc>), [R09-S14](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler_browsertest.cc>), [R09-S15](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/toolbar/pinned_toolbar/pinned_toolbar_actions_model.cc>), [R09-S16](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side_panel/customize_chrome/customize_toolbar/toolbar.ts>), [R09-S17](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side_panel/customize_chrome/customize_toolbar/toolbar.html.ts>), [R09-S18](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/test/data/webui/side_panel/customize_chrome/toolbar_test.ts>), [R09-S19](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/test/data/webui/side_panel/customize_chrome/customize_chrome_browsertest.cc>), [R09-S20](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/policy/configuration_policy_handler_list_factory.cc>), [R09-S21](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/policy/resources/templates/policy_definitions/Startup/ShowHomeButton.yaml>), [R09-S22](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_service.cc>), [R09-S23](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_value_store.cc>), [R09-S24](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_value_store.h>), [R09-S25](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/menus/simple_menu_model.cc>), [R09-S26](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/views/controls/menu/menu_model_adapter.cc>), [R09-S27](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/views/controls/menu/menu_delegate.cc>), [R09-S28](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/webui/resources/cr_elements/cr_toggle/cr_toggle.ts>), [R09-S29](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/webui/resources/js/assert.ts>), [R09-S30](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/actions/actions.cc>), [R09-S31](<https://issues.chromium.org/359863838>), [R09-S32](<https://api.github.com/repos/chromium/chromium/commits?sha=04d6a2d2bd0626ad343da0ef33e812e1360b44bd&path=chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc&per_page=6>).

<a id="R10"></a>

## R10 — Installed Chrome executable: bounded static evidence

Agent session: **ses\_e018c7858ffeeCboat9Enku581**. Saved lane status: **complete**. Original shard: [R10](<data/lanes/R10.json>).

**Scope:** One installed Windows chrome.exe: identity, five target-free REA inspections, and cache-only Windows Authenticode verification.

**Limitations of this assignment:**

- This is not a full reverse engineering of Chrome or a completed Chromium source build.
- Feature, menu and runtime behavior cannot be inferred from these static declarations.
- Discovery examined three standard executable locations, not the entire computer.

Saved source receipts: [R10-S01](<https://learn.microsoft.com/en-us/windows/win32/api/wintrust/ns-wintrust-wintrust_data>), [R10-S02](<https://learn.microsoft.com/en-us/windows/win32/api/wintrust/nf-wintrust-winverifytrust>), [R10-S03](<https://learn.microsoft.com/en-us/windows/win32/seccrypto/example-c-program--verifying-the-signature-of-a-pe-file>), [R10-S04](<https://learn.microsoft.com/en-us/windows/win32/api/wintrust/ns-wintrust-wintrust_file_info>).

## Source ledger

Direct links and dates below are the saved evidence, not fresh retrievals. Publication dates remain unknown when the source record does not establish them. Other dates retain their original field labels.

### R01 — Chrome–Chromium source, reporting channels, release, and feature baseline

**R01-S01 — [Chrome and Chromium](<https://developer.chrome.com/docs/web-platform/chrome-chromium>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:13:35Z. Published: not established.

- **reported Metadata Date:** 2026-11-11
- **date Evidence:** The captured page metadata reported this date; the extracted body did not establish whether it was publication or update.

Source limitations:

- This is Google&#39;s product explanation, not an audit of all Chrome components or every platform-specific engine.
- The recorded metadata date is not promoted to a verified publication date.

**R01-S02 — [Chrome additional terms of service](<https://www.google.com/chrome/terms/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:23Z. Published: not established.

- **updated At:** 2025-09-30
- **date Evidence:** The body states: Last modified: 30 September, 2025.

Source limitations:

- The explicit date is a modification date, not an established original publication date.
- Terms for the executable distribution do not establish that every Chrome component is open source or that every dependency has the Chromium root license.

**R01-S03 — [Official GitHub mirror of the Chromium source and README](<https://github.com/chromium/chromium>)**

Kind: source-code. Retrieved: 2026-11-21T14:13:37Z. Published: not established.

- **source Revision:** Moving main reference; no commit hash captured.

Source limitations:

- The repository and its README are moving references. A repository creation date is not a README publication or revision date.
- Reading the mirror does not constitute an upstream contribution, checkout, or build.

**R01-S04 — [Chromium root LICENSE](<https://raw.githubusercontent.com/chromium/chromium/main/LICENSE>)**

Kind: source-code. Retrieved: 2026-11-21T14:13:04Z. Published: not established.

- **source Revision:** Moving main reference; no commit hash captured.

Source limitations:

- The text has the three-clause BSD structure. This is a finding about the root license, not every bundled dependency.
- The copyright year is not a verified publication date for the retrieved revision.

**R01-S05 — [Adding third-party libraries to Chromium](<https://chromium.googlesource.com/chromium/src.git/+/HEAD/docs/adding_to_third_party.md>)**

Kind: source-code. Retrieved: 2026-11-21T14:30:04Z. Published: not established.

- **source Revision:** Moving HEAD reference; no commit hash captured.

Source limitations:

- The body does not establish a publication date; a generic extractor date was discarded.
- The policy explains distinct dependency licenses and credit generation. No inventory or compliance audit of a particular build was performed.

**R01-S06 — [Contributing to Chromium](<https://chromium.googlesource.com/chromium/src/+/main/docs/contributing.md>)**

Kind: source-code. Retrieved: 2026-11-21. Published: not established.

- **source Revision:** Moving main reference; no commit hash captured.

Source limitations:

- The retained research ledger establishes the retrieval day but not an exact retrieval time for this source.
- The long guide was partially truncated in the captured output; the cited Gerrit, CLA, feature-discussion, testing, and OWNERS requirements were visible.
- A conventional root CONTRIBUTING.md URL returned 404; the actual docs/contributing.md guide was found and read. No contribution was attempted.

**R01-S07 — [Bug Life Cycle and Reporting Guidelines](<https://www.chromium.org/for-testers/bug-reporting-guidelines/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:13:04Z. Published: not established.

Source limitations:

- The page body is undated.
- The guide was read; no individual upstream issue, reporting form submission, or browser reproduction was verified.

**R01-S08 — [Report an issue or send feedback on Chrome](<https://support.google.com/chrome/answer/95315?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:31Z. Published: not established.

Source limitations:

- The body is undated; generic help-page extractor dates were not accepted.
- Instructions describe the computer feedback route. No feedback was sent and no receipt exists.

**R01-S09 — [Reporting Security Bugs](<https://www.chromium.org/Home/chromium-security/reporting-security-bugs>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:07Z. Published: not established.

Source limitations:

- The body is undated. The page establishes the security-specific reporting route, not any particular vulnerability, reward eligibility, or submitted report.

**R01-S10 — [Stable Channel Update for Desktop — November 17, 2026](<https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html>)**

Kind: release-note. Retrieved: 2026-11-21T14:19:19.839Z. Published: 2026-11-17.

- **date Evidence:** The page date heading states Tuesday, November 17, 2026.

Source limitations:

- Reader extraction at 2026-11-21T14:17:58Z returned only the date and footer. A read-only HTTP retrieval recovered the actual post body at the recorded retrievedAt time.
- The announcement establishes promotion and staged rollout, not installation on every Stable client.
- The November archive returned HTTP 429; the month was not exhaustively enumerated.

**R01-S11 — [VersionHistory API reference](<https://developer.chrome.com/docs/web-platform/versionhistory/reference>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:01Z. Published: not established.

- **reported Metadata Date:** 2021-03-04
- **date Evidence:** The captured metadata reported this date; original publication versus update was not established from the body.

Source limitations:

- The reference documents live-release filtering and numerical version ordering, but this lane did not establish the full population semantics of every fractionGroup returned by the API.
- A serving interval timestamp is not an article publication date or a feature-enablement timestamp.

**R01-S12 — [VersionHistory — live Windows 64-bit Stable releases](<https://versionhistory.googleapis.com/v1/chrome/platforms/win64/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:19:19.889Z. Published: not established.

Source limitations:

- This is a dated live API readback, not an article with a publication date.
- Distinct fraction groups, rollout/control entries, and zero-fraction records coexist. Their fractions must not be pooled into one global user population.
- The response does not prove which version any particular client had installed or which features were enabled.

**R01-S13 — [VersionHistory — live macOS ARM64 Stable releases](<https://versionhistory.googleapis.com/v1/chrome/platforms/mac_arm64/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:19:19.889Z. Published: not established.

Source limitations:

- This is a dated live API readback; publication does not apply.
- Distinct fraction groups prevent treating all returned fractions as one global distribution.
- Intel macOS was not independently queried and feature enablement was not tested.

**R01-S14 — [VersionHistory — live Linux Stable releases](<https://versionhistory.googleapis.com/v1/chrome/platforms/linux/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:19:19.881Z. Published: not established.

Source limitations:

- One live release was returned at retrieval. This is not proof that every Linux installation was updated or that every feature was enabled.
- The serving timestamp is retained as release data, not a publication date.

**R01-S15 — [VersionHistory — live Android Stable releases](<https://versionhistory.googleapis.com/v1/chrome/platforms/android/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:19:19.888Z. Published: not established.

Source limitations:

- Multiple M157, M158, and M159 records were live. Selecting only the highest version would erase the rollout qualification.
- No Android installation, Play Store delivery, or feature enablement was inspected.
- The API supplies serving intervals, not a publication date.

**R01-S16 — [VersionHistory — live iOS Stable releases](<https://versionhistory.googleapis.com/v1/chrome/platforms/ios/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:19:19.887Z. Published: not established.

Source limitations:

- One live version was returned at retrieval. This does not establish the installed version or enabled features on a particular iPhone or iPad.
- The API does not establish iOS rendering-engine details.

**R01-S17 — [Get more done with new vertical tabs and immersive reading mode in Chrome](<https://blog.google/products-and-platforms/products/chrome/new-chrome-productivity-features>)**

Kind: release-note. Retrieved: 2026-11-21T14:13:43Z. Published: not established.

- **reported Metadata Date:** 2026-04-07
- **date Evidence:** The research capture recorded this page-metadata date. The extracted body says rollout is beginning but does not independently display a publication date.

Source limitations:

- The launch wording describes a staged rollout, not a guarantee for every user.
- The recorded metadata date is preserved without asserting a separately verified publication date.
- Productivity benefits are vendor claims, not measured results from this lane.

**R01-S18 — [Manage tabs in Chrome — computer](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:15:13Z. Published: not established.

Source limitations:

- The help body is undated and does not pin all instructions to one Chrome version or rollout cohort.
- Desktop tab groups, vertical tabs, named windows, and tab search are documented; richer workspace or collaboration semantics are not thereby established.
- No local operation of these controls was tested.

**R01-S19 — [New features in Chrome for work, life and everything in between](<https://blog.google/products-and-platforms/products/chrome/chrome-productivity-improvements>)**

Kind: release-note. Retrieved: 2026-11-21T14:13:46Z. Published: not established.

- **reported Metadata Date:** 2026-02-19
- **date Evidence:** The captured page metadata reported 2026-02-19. A discovery snippet reported a different date and was not used. The body did not independently establish publication.

Source limitations:

- The announcement also covers PDF annotations and Save to Google Drive, but this lane&#39;s requested baseline focuses on split view.
- Claims about time saved or tester productivity were not independently measured.
- The metadata date is retained separately from publication.

**R01-S20 — [Use split view for multitasking in Chrome — computer](<https://support.google.com/chrome/answer/16971124?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:13:50Z. Published: not established.

Source limitations:

- The undated help body documents computer use and platform-specific shortcuts, not identical phone support.
- The documented two-view workflow does not alone prove that every richer multi-pane configuration is impossible.
- Side-panel and active-view behavior was not tested locally.

**R01-S21 — [Use reading mode in Chrome — default computer body](<https://support.google.com/chrome/answer/14218344?hl=en>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:15:16Z. Published: not established.

Source limitations:

- The body is undated. It documents both full-page and optional side-panel modes, not universal compatibility with every website.
- The explicit Googlebook exception is retained; it must not be generalized to all ChromeOS devices.
- Read-aloud quality, accessibility behavior, and site extraction were not tested.

**R01-S22 — [Use reading mode in Chrome — Android](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DAndroid>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:10Z. Published: not established.

Source limitations:

- The undated Android body documents a reading-mode command and font, size, and background controls.
- The page can report reading mode unavailable for a website. Computer-only read-aloud and spacing features must not be inferred for Android from the shared introduction.

**R01-S23 — [Use reading mode in Chrome — iPhone and iPad](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DiOS>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:13Z. Published: not established.

Source limitations:

- The undated iOS body documents on/off commands and typography/background controls.
- The source explicitly allows page failures; equivalent computer-only features or universal site coverage were not established.

**R01-S24 — [Manage tabs in Chrome — Android](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:34Z. Published: not established.

Source limitations:

- The undated page combines phone, tablet, and keyboard/mouse instructions. Tablet multiwindow and split-screen descriptions do not establish the same in-window split view on phones.
- Sharing selected tab links is not proof of a live cross-account collaborative workspace.
- Same-account syncing, deletion propagation, and inactive-tab behavior were not reproduced locally.

**R01-S25 — [Manage tabs in Chrome — iPhone and iPad](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:37Z. Published: not established.

Source limitations:

- The undated body explicitly describes saved and synced tab-group changes, but parts of the action table were incompletely extracted.
- iPad windows and OS Split View are distinct from the desktop Chrome in-window split-view feature.
- A shared split-view help link in the introduction is not evidence of phone support for that feature.

**R01-S26 — [Manage Chrome with multiple profiles](<https://support.google.com/chrome/answer/2364824?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:28:03Z. Published: not established.

Source limitations:

- The body is undated and describes profile separation, not a locked security boundary against other users of the same device.
- Profiles do not by themselves establish persistent project-workspace or cross-account collaboration semantics.

**R01-S27 — [Customize the Chrome toolbar — computer](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:04Z. Published: not established.

Source limitations:

- The undated documentation concerns offered toolbar buttons and pinned controls; it does not establish arbitrary relocation of every browser control or a full menu editor.
- No per-platform toolbar behavior was tested locally.

**R01-S28 — [Customize the Chrome toolbar — Android](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DAndroid>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:26:55Z. Published: not established.

Source limitations:

- The undated Android instructions cover a selected or adaptive shortcut rather than full desktop-style toolbar rearrangement.
- The attempted iOS variant returned Android instructions; it was not used to establish iOS menu or toolbar support.

**R01-S29 — [4 ways to capture screenshots with DevTools](<https://developer.chrome.com/blog/devtools-tips-33>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:21:52Z. Published: not established.

- **updated At:** 2024-08-09
- **date Evidence:** The body explicitly states Last updated 2024-08-09 UTC; original publication was not independently established.

Source limitations:

- This establishes developer-tool capture, not a consumer-facing browser capture, annotation, or redaction workflow.
- The linked video was not independently assessed and capture was not performed locally.

**R01-S30 — [Take a screenshot or record your screen on Android](<https://support.google.com/android/answer/9075928?hl=en>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:58Z. Published: not established.

Source limitations:

- The undated source describes Android OS capture, not a Chrome-specific screenshot command.
- Scrolling capture is documented for Android 12 and later on most screens that allow scrolling; support on every Chrome page or device was not established.

**R01-S31 — [Delete, allow, and manage cookies in Chrome](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:21:41Z. Published: not established.

Source limitations:

- The body is undated. Allow/block controls and Incognito&#39;s default do not establish default blocking for every ordinary session or comprehensive anti-tracking.
- The body retains ad-privacy and related-site cross-links despite the later-read retirement-plan source. Two linked ad-privacy help URLs returned generic introductory content.
- Exact shipped states of the older Privacy Sandbox controls were not established.

**R01-S32 — [Turn Do Not Track on or off](<https://support.google.com/chrome/answer/2790761?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:21:43Z. Published: not established.

Source limitations:

- The body is undated and describes a request signal, not enforced tracker blocking.
- The page distinguishes DNT from a separate opt-out setting. Website compliance was not measured.

**R01-S33 — [Send an opt-out request regarding use of your data](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:26Z. Published: not established.

Source limitations:

- The body is undated and expressly describes a regional staged rollout. It does not establish universal availability.
- Residency is evaluated per profile and location signals can affect eligibility. No account or residency was inspected.
- Sites determine responses subject to applicable law; signal delivery and compliance were not tested.

**R01-S34 — [Browse in Incognito mode](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:26:58Z. Published: not established.

Source limitations:

- The body is undated. Local-session retention limits are distinct from anonymity against websites or network operators.
- No privacy effectiveness, network behavior, or local retention behavior was independently tested.

**R01-S35 — [Choose your Safe Browsing protection level in Chrome](<https://support.google.com/chrome/answer/9890866?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:55Z. Published: not established.

Source limitations:

- The undated source documents protection modes and associated data handling; their security efficacy and performance were not independently measured.
- Safe Browsing and its security-lookup privacy servers are not evidence of comprehensive ad/tracker blocking or a general browsing relay.

**R01-S36 — [Get your bookmarks, passwords, and more on all your devices](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:21:46Z. Published: not established.

Source limitations:

- The undated documentation describes Google Account-based data saving and optional passphrase trade-offs, not a hands-on interoperability or cryptographic audit.
- An extension appearing in synced information does not establish extension execution on mobile.
- Self-hosted or account-free synchronization was not established.

**R01-S37 — [Extension Side Panel API](<https://developer.chrome.com/docs/extensions/reference/api/sidePanel>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:25:43Z. Published: not established.

- **reported Metadata Date:** 2026-10-29
- **date Evidence:** The captured metadata reported this date; publication versus update was not established from the body.

Source limitations:

- An extension API for extension-hosted content is not proof of a built-in arbitrary-website sidebar or multiple simultaneous independent panels.
- The availability heading was incompletely extracted. Method/version details do not establish universal platform support.
- No extension was installed or executed.

**R01-S38 — [Use Gemini in Chrome — computer](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:07Z. Published: not established.

Source limitations:

- The undated body expressly describes gradual rollout, supported devices, region/language/account/age requirements, and feature-specific permissions.
- Supported region and language tables were empty or partially stripped; their entries were not invented.
- Hiding the Gemini icon, changing tab sharing, and disabling all AI are not interchangeable. No runtime behavior or universal consumer all-AI-off control was established.

**R01-S39 — [Manage on-device Generative AI models in Chrome](<https://support.google.com/chrome/answer/16961953?hl=en>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:26:46Z. Published: not established.

Source limitations:

- The undated source describes a supported setting on eligible computers, with per-user and per-device scope.
- The approximately 20 GB figure is a minimum free-disk-space condition, not a claimed download or model-file size.
- Turning off local generative models does not disable every other AI feature. No model download, deletion, or prevention of re-download was tested locally.

**R01-S40 — [Gemini in Chrome — administrator documentation](<https://support.google.com/chrome/a/answer/16291696?hl=en>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:25:37Z. Published: not established.

Source limitations:

- The undated administrator page has different age, account, device, and regional conditions from consumer help. These scopes must remain distinct.
- Region and language tables were incompletely extracted. Android availability was explicitly scoped to the U.S.; other supported regions were not reconstructed.
- Enterprise data-use assurances are vendor statements under the stated account/edition terms, not consumer guarantees or an independent audit.
- No administrator settings or policies were applied.

**R01-S41 — [Fix problems with apps, extensions, or themes — Chrome Web Store](<https://support.google.com/chrome_webstore/answer/1698338?hl=en>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:21:49Z. Published: not established.

Source limitations:

- The body is undated but contains an explicit mobile exclusion, rather than merely omitting mobile instructions.
- This supports a Chrome Web Store/mobile Chrome limitation; it is not a finding about all other Chromium-derived browsers.
- Installation was not attempted. Managed-device and Incognito/Guest installation restrictions are separate qualifications.

**R01-S42 — [Update on Plans for Privacy Sandbox Technologies](<https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies>)**

Kind: release-note. Retrieved: 2026-11-21T14:26:49Z. Published: 2025-10-17.

- **date Evidence:** The body displays Oct 17, 2025 and names Anthony Chavez, VP, Privacy Sandbox.

Source limitations:

- This is a retirement decision and transition plan. It does not establish the removal milestone or current enablement of every listed API or UI control.
- Some named Android technologies are broader than the Chrome browser; platform scope must not be flattened.
- The source says CHIPS and FedCM continue to be supported; it is not an announcement that every Privacy Sandbox-related capability is gone.

### R02 — Mainstream browser features and lessons for Chrome

**R02-A1 — [What is Blink?](<https://developer.chrome.com/docs/web-platform/blink>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:28:22Z. Published: not established.

- **reported Publication Or Update Date:** 2026-11-11

Source limitations:

- Date is extraction metadata; original publication versus update was not established.
- Used for engine families, not Chrome feature parity. The general iOS statement is qualified by regional alternative-engine rules and R02-A2.

**R02-A2 — [Why there are still no non-WebKit browsers on iOS](<https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:36:54Z. Published: 2026-11-20.

Source limitations:

- Dated Mozilla policy commentary. Its statement about absence of launched alternative-engine browsers is a vendor observation, not an independent App Store census.
- Regional permission for alternative engines does not establish that a specific browser has shipped one.

**R02-B1 — [Brave Browser Features](<https://brave.com/features/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:13:32Z. Published: not established.

Source limitations:

- Product-page extraction exposed a subset of the feature catalogue. Generic date metadata was rejected.
- Blocking effectiveness and comparative privacy claims were not measured.

**R02-B2 — [Browser Privacy Policy](<https://brave.com/privacy/browser/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:33:38Z. Published: not established.

- **reported Publication Or Update Date:** 2026-09-23

Source limitations:

- Current policy text and extracted date metadata were read. Statements describe vendor commitments, not a traffic capture or compliance audit.
- Service-specific exceptions, feedback retention, caching, and experimental AI browsing must remain distinct from general privacy headlines.

**R02-B3 — [Brave Leo AI](<https://brave.com/leo/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:37Z. Published: not established.

- **reported Publication Or Update Date:** 2024-02-14

Source limitations:

- Extracted metadata may predate later changes to the mutable product page. Exact model versions and BYOM platform coverage were not pinned.
- Privacy headlines are qualified by R02-B2. Hosted page analysis is not local-only processing.

**R02-B4 — [Brave Playlist](<https://brave.com/playlist/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:21:09Z. Published: not established.

- **reported Publication Or Update Date:** 2025-01-23

Source limitations:

- Date is extracted publication/update metadata. iPhone/iPad support is documented; desktop/Android are described as future availability.
- DRM-protected media is unsupported; saved media is not exportable and was not tested.

**R02-B5 — [Brave launches Email Aliases to keep your personal email address private from websites](<https://brave.com/privacy-updates/39-email-aliases/>)**

Kind: release-note. Retrieved: 2026-11-21T14:21:12Z. Published: 2026-08-27.

Source limitations:

- Launch covers desktop 1.94 and five free aliases. Mobile support and a Premium expansion are plans in this source.
- Delivery quality is unmeasured; the post acknowledges mail may initially reach spam folders. R02-B2 qualifies retention.

**R02-B6 — [New Brave Origin premium experience offers users a minimalist version of the Brave browser](<https://brave.com/blog/brave-origin>)**

Kind: release-note. Retrieved: 2026-11-21T14:16:10Z. Published: 2026-06-04.

Source limitations:

- Updated launch post distinguishes standalone compilation from in-place disabling and confirms later iOS and desktop-alias availability.
- US price and Linux-free status are vendor-listed terms, not a global checkout verification. Exact latest Brave build was not determined.

**R02-B7 — [Brave VPN: The secure, fast VPN, right in your browser](<https://brave.com/firewall-vpn/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:51Z. Published: not established.

Source limitations:

- Extracted date coincided with an audit link and was not accepted as publication evidence.
- Linux remains coming soon in the read page. Listed prices, device limits, no-log claims, audit references, and throughput were not independently verified.

**R02-E1 — [Microsoft Edge release notes for Stable Channel](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel>)**

Kind: release-note. Retrieved: 2026-11-21T14:16:04Z. Published: not established.

Source limitations:

- Mutable aggregate page; November 19 is the latest inspected release-entry date, not the page&#39;s original publication date.
- Feature rollout may differ by platform/account. Planned retirement in a future version is not completed removal.

**R02-E2 — [Microsoft Edge Supported Operating Systems](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-supported-operating-systems>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:22Z. Published: not established.

- **reported Publication Or Update Date:** 2026-11-09

Source limitations:

- Date is extracted publication/update metadata. OS requirements vary by Edge version.
- The Windows 10 browser update commitment does not extend support for the operating system itself.

**R02-E3 — [Getting started with Microsoft Edge Workspaces](<https://support.microsoft.com/en-us/edge/getting-started-with-microsoft-edge-workspaces>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:58Z. Published: not established.

- **reported Publication Or Update Date:** 2026-10-06

Source limitations:

- Date is extracted publication/update metadata. The page labels some in-window behavior forthcoming while Edge 158 release notes list it as an update.
- New Workspaces is individual-use; older collaboration descriptions must not be carried forward.

**R02-E4 — [Organize your ideas with Collections in Microsoft Edge](<https://support.microsoft.com/en-us/edge/organize-your-ideas-with-collections-in-microsoft-edge>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:16:06Z. Published: not established.

- **reported Publication Or Update Date:** 2026-09-14

Source limitations:

- Current lead says unavailable from Edge 149, released June 4, 2026, but later paragraphs retain older transitional-access language.
- Retirement lead is retained alongside the inconsistency; no runtime access check was performed.

**R02-E5 — [Multitask with Split Screen Browsing](<https://explore.microsoft.com/en-us/edge/features/split-screen>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:19:07Z. Published: not established.

Source limitations:

- Undated product page explicitly qualifies availability by device, market, and browser version. No mobile-wide support claim is made.

**R02-E6 — [Stay Organized with Vertical Tabs](<https://explore.microsoft.com/en-us/edge/features/vertical-tabs>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:19:04Z. Published: not established.

Source limitations:

- Undated product documentation qualifies availability by device, market, and browser version.

**R02-E7 — [Learn about performance features in Microsoft Edge](<https://support.microsoft.com/en-us/edge/learn-about-performance-features-in-microsoft-edge>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:01Z. Published: not established.

- **reported Publication Or Update Date:** 2026-11-09

Source limitations:

- Date is extracted publication/update metadata. Defaults and exemptions differ by platform and mode.
- The document still describes Performance detector; R02-E1 separately announces its future retirement. Savings and responsiveness were not benchmarked.

**R02-E8 — [Accessibility features in Microsoft Edge](<https://support.microsoft.com/en-us/accessibility/edge/accessibility-features-in-microsoft-edge>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:19:07Z. Published: not established.

- **reported Publication Or Update Date:** 2026-09-16

Source limitations:

- Date is extracted publication/update metadata. Reader page eligibility and image-description languages are limited.
- Processing location, voice availability, and assistive-technology quality were not tested.

**R02-F1 — [Firefox 160.0 Release Notes](<https://www.firefox.com/en-US/firefox/160.0/releasenotes/>)**

Kind: release-note. Retrieved: 2026-11-21T14:18:34Z. Published: 2026-11-10.

Source limitations:

- Explicit versioned release date. This was the latest Firefox release inspected, not proof that no patch followed.
- Mini Window is an early version; French Smart Window tab organization is progressively rolled out.

**R02-F10 — [Get more done with pop-out videos](<https://www.firefox.com/en-US/features/picture-in-picture/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:43Z. Published: not established.

Source limitations:

- Undated product page documents multiple PiP windows. Player compatibility, DRM behavior, and practical resource limits were not tested.

**R02-F11 — [Edit PDFs in Firefox - Free, Secure Built-in PDF Editor](<https://www.firefox.com/en-US/features/pdf-editor/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:52Z. Published: not established.

Source limitations:

- Undated product documentation supports annotation/form/signature workflows, not arbitrary replacement of existing PDF text, certificate-based signing, or universal form compatibility.

**R02-F2 — [Firefox 160.0 System Requirements](<https://www.firefox.com/en-US/firefox/160.0/system-requirements/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:55Z. Published: not established.

Source limitations:

- Version-specific desktop requirements. Generic January-1 extraction metadata was rejected.
- Does not establish mobile minimum OS versions or an ESR support horizon.

**R02-F3 — [Gecko - Firefox Source Docs](<https://firefox-source-docs.mozilla.org/overview/gecko.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:52Z. Published: not established.

Source limitations:

- Architecture documentation was read; no implementation or binary was tested.
- The extracted older date was not accepted as this mutable document&#39;s publication date.

**R02-F4 — [Firefox for iOS - Firefox Source Docs](<https://firefox-source-docs.mozilla.org/overview/ios.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:55Z. Published: not established.

Source limitations:

- Undated architecture documentation explicitly distinguishes WebKit from Gecko. It does not establish desktop feature parity on iOS.

**R02-F5 — [Total Cookie Protection](<https://www.firefox.com/en-US/features/total-cookie-protection/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:37Z. Published: not established.

Source limitations:

- Undated product documentation; generic January-1 metadata was rejected.
- Mechanism, default, and exceptions are vendor-documented. Comparative privacy superiority and tracking resistance were not measured.

**R02-F6 — [Multi-Account Containers Add-on Sync Feature](<https://blog.mozilla.org/security/2020/02/06/multi-account-containers-sync/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:19Z. Published: 2020-02-06.

Source limitations:

- Historical official add-on announcement establishes the documented design, not its current extension version or default installation status.
- The contemporary support page returned a challenge; its search snippet was not accepted as read documentation.

**R02-F7 — [Translate a webpage with Firefox](<https://www.firefox.com/en-US/features/translate/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:28:04Z. Published: not established.

Source limitations:

- Product page lists supported languages and describes local processing; translation quality, network behavior, and model storage were not measured.
- Generic January-1 extraction metadata was rejected.

**R02-F8 — [Firefox just got better for Chinese, Japanese and Korean speakers on Android](<https://blog.mozilla.org/en/firefox/cjk-translation-on-android/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:28:07Z. Published: not established.

- **reported Publication Or Update Date:** 2025-08-18

Source limitations:

- Fetched publication metadata and search-result dating disagreed; original publication date is not promoted as established.
- The article documents desktop/Android translation and offline use after model download; it does not establish iOS support or translation accuracy.

**R02-F9 — [Vertical Tabs](<https://www.firefox.com/en-US/features/vertical-tabs/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:46Z. Published: not established.

Source limitations:

- Undated desktop-oriented product page. Advanced tree views and automation are described as extension capabilities, not native functionality.

**R02-G1 — [Opera GX Lands on Linux](<https://blogs.opera.com/news/2026/03/opera-gx-lands-on-linux/>)**

Kind: release-note. Retrieved: 2026-11-21T14:33:39Z. Published: 2026-03-19.

Source limitations:

- Dated Linux launch confirms RAM/network controls and listed distribution families; it does not establish a Linux CPU limiter.
- Performance, privacy-superiority, and long-term support promises remain vendor claims.

**R02-G2 — [Opera GX is now on Linux](<https://www.opera.com/gx/linux>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:40:22Z. Published: not established.

Source limitations:

- Extracted older date was not accepted as publication evidence. Linux page explicitly names RAM and network limits; generic GX CPU wording is not Linux proof.
- Weekly builds and RAM savings are vendor statements, not an observed update history or benchmark.

**R02-G3 — [GX Control - Control your browser&#39;s performance](<https://www.opera.com/gx/features/gx-control>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:28:19Z. Published: not established.

Source limitations:

- Undated generic GX desktop product page does not provide a complete per-platform limiter matrix.
- Hard-cap adherence, gaming benefit, and suggested resource allocations were not tested.

**R02-G4 — [GX Mods - Customize your browser](<https://www.opera.com/gx/features/mods>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:40Z. Published: not established.

Source limitations:

- Undated product page describes free community mods and authoring tools. Review/permission policy and performance costs were not assessed.

**R02-G5 — [Workspaces in GX - Simplify browsing with separate tab groups](<https://www.opera.com/gx/features/workspaces>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:43Z. Published: not established.

Source limitations:

- Undated desktop-oriented product help. Tab organization is not evidence of isolated cookies, credentials, or authenticated identities.

**R02-G6 — [Step into Summer with a Massive Update from GX](<https://blogs.opera.com/news/2026/06/step-into-summer-with-a-massive-update-from-gx/>)**

Kind: release-note. Retrieved: 2026-11-21T14:33:39Z. Published: 2026-06-25.

Source limitations:

- Recap separates released changes from Early Bird tests; features are not all assigned exact introducing build numbers.
- Reaktinator removal differs from hidden RGX/Video Pickup buttons. Launch-speed and efficiency claims were not benchmarked.

**R02-G7 — [RGX Mode in GX - Improve online video quality](<https://www.opera.com/gx/features/rgx>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:07Z. Published: not established.

Source limitations:

- Undated product page documents enhancement controls. HD-quality and low-resource language are vendor claims; recovered detail and processing cost were not measured.

**R02-G8 — [GX Cleaner - Clear browser history and data quickly](<https://www.opera.com/gx/features/gx-cleaner>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:46Z. Published: not established.

Source limitations:

- Undated product help documents graded/time-scoped cleanup. Exact deletion semantics and claimed performance improvements were not tested.

**R02-O1 — [Download Opera](<https://www.opera.com/download>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:10Z. Published: not established.

Source limitations:

- Catalogue text was read without downloading products. Generic January-1 metadata was rejected.
- Opera One, GX, Air, Neon, and Mini are different products; mobile listings do not establish desktop feature parity.

**R02-O2 — [Opera 140.0.6074.36 Stable update](<https://blogs.opera.com/desktop/2026/11/opera-140-0-6074-36-stable-update/>)**

Kind: release-note. Retrieved: 2026-11-21T14:33:39Z. Published: 2026-11-18.

Source limitations:

- Release-note evidence for Opera Stable and its Chromium revision; not an installed-version check, security-lag measurement, or GX build number.

**R02-O3 — [Features - Opera Help](<https://help.opera.com/en/latest/features/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:13:34Z. Published: not established.

- **reported Publication Or Update Date:** 2026-08-31

Source limitations:

- Mutable multi-feature help; previously retrieved sections were reused. Date is extracted publication/update metadata.
- My Flow retains Opera Touch wording. Currency rates are reference rates. Snapshot&#39;s viewport image must not be confused with a full-page PDF.

**R02-O4 — [Tab Islands - Arrange tabs in separate tab groups](<https://www.opera.com/features/tab-islands>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:40:22Z. Published: not established.

Source limitations:

- Undated product page. Optional AI analysis and vertical-strip presentation are separate from basic grouping; exact platform rollout is unquantified.

**R02-O5 — [Here&#39;s how Opera&#39;s Paste Protect brings you native ClickFix protection](<https://blogs.opera.com/security/2026/07/how-opera-paste-protect-guards-against-clipboard-attacks/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:40:22Z. Published: 2026-07-02.

Source limitations:

- Dated security-feature announcement documents defaults, platform-specific checks, and overrides.
- Detection efficacy, false-positive rates, comparative first/unique claims, and cited malware statistics were not measured or adopted.

**R02-O6 — [Free VPN - Browse anywhere, privately](<https://www.opera.com/features/free-vpn>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:36:55Z. Published: not established.

Source limitations:

- Undated product page; free/accountless/unlimited are vendor-listed terms, not a checkout or network test.
- Current country labels differ from older help&#39;s continental locations. Region availability, no-log audits, and throughput were not independently established.

**R02-O7 — [Security and privacy - Opera Help](<https://help.opera.com/latest/security-and-privacy/#VPN>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:35:53Z. Published: not established.

- **reported Publication Or Update Date:** 2026-05-18

Source limitations:

- Date is extracted publication/update metadata. Browser-to-server VPN scope does not establish device-wide protection or removal of cookie/account identity.

**R02-O8 — [Opera system requirements - Browser for Windows, macOS and Linux](<https://www.opera.com/download/requirements>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:58Z. Published: not established.

Source limitations:

- Only the title and heading were usable. Retained solely for named desktop OS families, not minimum versions or a complete support matrix.
- Generic date metadata was rejected; this is weaker coverage than a fully extracted requirements page.

**R02-S1 — [Update to the latest version of Safari](<https://support.apple.com/en-us/102665>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:40:22Z. Published: not established.

- **reported Publication Or Update Date:** 2025-10-16

Source limitations:

- Date is extracted publication/update metadata. Used for OS-bound updates and Apple-only support, not a current patch version for each OS.
- The page&#39;s historical Windows release-year statement was not independently verified and is not retained as a factual finding.

**R02-S10 — [Browse privately in Safari on Apple Vision Pro](<https://support.apple.com/guide/apple-vision-pro/browse-the-web-privately-tan4d3bd79f8/visionos>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:33:40Z. Published: not established.

- **reported Publication Or Update Date:** 2026-07-16

Source limitations:

- Vision Pro-specific guide with extracted date metadata. Private Relay requires iCloud+ and is unavailable in some countries/regions.
- Exact UI and traffic scope are not generalized to other OSes or a full-device VPN.

**R02-S2 — [WebKit Features for Safari 27.1](<https://webkit.org/blog/18486/webkit-features-for-safari-27-1/>)**

Kind: release-note. Retrieved: 2026-11-21T14:24:31Z. Published: 2026-10-23.

Source limitations:

- Article specifically concerns Safari 27.1 on iPhone Duo; it does not establish universal availability of that version on every Apple OS.
- Device Posture and Viewport Segments APIs are developer previews behind flags.

**R02-S3 — [Use profiles in Safari on Mac](<https://support.apple.com/en-us/105100>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:19:09Z. Published: not established.

- **reported Publication Or Update Date:** 2025-12-05

Source limitations:

- Date is extracted publication/update metadata. Profile isolation is partial: passwords, AutoFill, and several settings remain shared.
- External-link routing has specific conditions and is not a general routing rule for all links.

**R02-S4 — [Share Tab Groups and collaborate in Safari on Mac](<https://support.apple.com/guide/safari/share-tab-groups-collaborate-safari-mac-ibrw7f189b02/mac>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:28Z. Published: not established.

- **reported Publication Or Update Date:** 2026-07-16

Source limitations:

- Mutable Mac guide with extracted date metadata. Requires Apple Accounts, iCloud Safari, and two-factor authentication; collaboration was not exercised.

**R02-S5 — [How to use Locked Private Browsing in Safari](<https://support.apple.com/en-us/105028>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:19:12Z. Published: not established.

- **reported Publication Or Update Date:** 2026-10-01

Source limitations:

- Date is extracted publication/update metadata. Defaults differ on desktop/mobile, and audio/video playback prevents locking.
- Documentary support does not establish protection against every local observation threat.

**R02-S6 — [Hide distracting items on webpages in Safari](<https://support.apple.com/en-us/120682>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:19:16Z. Published: not established.

- **reported Publication Or Update Date:** 2026-06-15

Source limitations:

- Date is extracted publication/update metadata. Distraction Control does not permanently hide frequently changing ads/content.
- Cross-device persistence was not established; same-device profile and private-session behavior have different scope.

**R02-S7 — [Use Safari web apps on Mac](<https://support.apple.com/en-us/104996>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:28:09Z. Published: not established.

- **reported Publication Or Update Date:** 2026-05-27

Source limitations:

- Date is extracted publication/update metadata. Mac-specific web-app behavior must not be generalized to all platforms or every credential type.
- Notification support and permission are still site-dependent.

**R02-S8 — [Hide distractions when reading articles in Safari on Mac](<https://support.apple.com/guide/safari/hide-ads-when-reading-sfri32632/mac>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:49Z. Published: not established.

- **reported Publication Or Update Date:** 2026-07-16

Source limitations:

- Mutable Mac guide with extracted date metadata. Reader eligibility and Apple Intelligence language/region/usage restrictions are explicit.
- Hardware eligibility and summary accuracy were not established; ordinary Reader use is not necessarily AI-dependent.

**R02-S9 — [Prevent cross-site tracking in Safari on Mac](<https://support.apple.com/guide/safari/prevent-cross-site-tracking-sfri40732/mac>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:33:39Z. Published: not established.

- **reported Publication Or Update Date:** 2026-07-16

Source limitations:

- Mutable guide with extracted date metadata. Privacy mechanisms and exception handling are documented, not independently measured anonymity or superiority.

**R02-V1 — [Download Vivaldi](<https://vivaldi.com/download>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:13Z. Published: not established.

Source limitations:

- Undated download-page text only; no installer was downloaded. User counts and comparative marketing claims were not validated.
- Does not establish feature parity or current minimum OS versions.

**R02-V10 — [Panels - Vivaldi Browser Help](<https://help.vivaldi.com/desktop/panels/panels/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:33:40Z. Published: not established.

- **reported Publication Or Update Date:** 2016-01-29

Source limitations:

- Mutable desktop help with extracted date metadata. Mail/Calendar/Feeds must be enabled; third-party service prerequisites are outside this page&#39;s coverage.

**R02-V2 — [Vivaldi gets more powerful and works across all devices](<https://vivaldi.com/blog/vivaldi-on-desktop-6-4/>)**

Kind: release-note. Retrieved: 2026-11-21T14:35:54Z. Published: 2023-10-26.

Source limitations:

- Historical cross-platform release, not a claim that 6.4 is current. Phone, Raspberry Pi, and automotive support do not imply desktop feature parity or all-vehicle availability.

**R02-V3 — [Vivaldi 7.8: No AI Slop. Just Powerful Features.](<https://vivaldi.com/blog/vivaldi-on-desktop-7-8/>)**

Kind: release-note. Retrieved: 2026-11-21T14:21:23Z. Published: 2026-01-29.

Source limitations:

- Establishes released 7.8 desktop capabilities, not the latest version at the cutoff.
- Performance and stability rhetoric was not treated as measurement.

**R02-V4 — [Workspaces - Vivaldi Browser Help](<https://help.vivaldi.com/desktop/tabs/workspaces/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:21:19Z. Published: not established.

- **reported Publication Or Update Date:** 2023-04-18

Source limitations:

- Mutable desktop help; extraction date does not date each feature. Workspaces organize tabs and do not establish cookie/account isolation.
- A workspace can be open in only one browser window at a time.

**R02-V5 — [Tab Stacks - Vivaldi Browser Help](<https://help.vivaldi.com/desktop/tabs/tab-stacks/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:46Z. Published: not established.

- **reported Publication Or Update Date:** 2017-01-26

Source limitations:

- Mutable desktop help; old extraction metadata is not a shipping date for every current option.
- Settings can cause stacking or shortcut conflicts; no hands-on assessment was performed.

**R02-V6 — [Tab Tiling in Vivaldi](<https://help.vivaldi.com/desktop/tabs/tab-tiling/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:21:16Z. Published: not established.

- **reported Publication Or Update Date:** 2026-01-29

Source limitations:

- Date is extracted publication/update metadata. No documented tab-count ceiling does not establish practical usability at arbitrary counts or screen sizes.

**R02-V7 — [Command Chains - Vivaldi Browser Help](<https://help.vivaldi.com/desktop/shortcuts/command-chains/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:34Z. Published: not established.

- **reported Publication Or Update Date:** 2021-07-28

Source limitations:

- Mutable desktop help, with historical extraction metadata. Adjustable delays and a Test Chain control do not prove completion-aware or reliable automation.

**R02-V8 — [Web Panels - Vivaldi Browser Help](<https://help.vivaldi.com/desktop/panels/web-panels/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:28:16Z. Published: not established.

- **reported Publication Or Update Date:** 2017-05-09

Source limitations:

- Mutable desktop help; current options are not all dated by old extraction metadata. Narrow viewports and website mobile/desktop compatibility can limit usefulness.
- Panels are not evidence of separate account storage.

**R02-V9 — [Creating Notes in Vivaldi](<https://help.vivaldi.com/desktop/panels/notes/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:43Z. Published: not established.

- **reported Publication Or Update Date:** 2016-01-29

Source limitations:

- Mutable desktop help, not a timestamp for every feature. Export and capture are documented but attachment fidelity and sync behavior were not tested.

### R03 — Privacy, anonymity, and independent-browser workflows

**R03-S-B1 — [Basilisk homepage and system requirements](<https://www.basilisk-browser.org/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:15:37Z. Published: not established.

Source limitations:

- Application support for an old operating system is not evidence of that operating system&#39;s vendor security support.
- The page establishes independent UXP lineage, not current Firefox parity.

**R03-S-B2 — [Basilisk features](<https://www.basilisk-browser.org/features.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:22:49Z. Published: not established.

Source limitations:

- Describes Goanna/UXP architecture and design goals; no broad modern-web compatibility or usability result was measured.

**R03-S-B3 — [Basilisk release notes: 2026.11.01](<https://www.basilisk-browser.org/releasenotes.html>)**

Kind: release-note. Retrieved: 2026-11-21T14:15:39Z. Published: 2026-11-01.

- **source Revision:** UXP commit 6b18be917d, as identified in the release body

Source limitations:

- The body explicitly says Published 2026-11-01.
- The linked UXP commit was not separately audited; the listed fixes and polyfills remain documentary evidence.

**R03-S-B4 — [Download Basilisk: 2026.11.01 artifacts and update limitations](<https://www.basilisk-browser.org/download.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:22:52Z. Published: not established.

Source limitations:

- The current-release label is 2026.11.01; the release-notes body separately establishes the release date.
- Download filenames establish offered platforms, not verified execution or automatic-update behavior on those platforms.

**R03-S-D1 — [Does DuckDuckGo make a browser?](<https://duckduckgo.com/duckduckgo-help-pages/get-duckduckgo/does-duckduckgo-make-a-browser>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:15:45Z. Published: not established.

Source limitations:

- Establishes four platform apps, not identical protection coverage or measured superiority over Chrome.

**R03-S-D10 — [How to get the DuckDuckGo Browser on Windows](<https://duckduckgo.com/duckduckgo-help-pages/get-duckduckgo/get-duckduckgo-browser-on-windows>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:22Z. Published: not established.

Source limitations:

- The x86 update cutoff is version-based, after 0.170.0; the body supplies no calendar end-of-support date.
- The page does not establish the newest Windows app release or every supported CPU architecture.

**R03-S-D11 — [How to get the DuckDuckGo Browser on Mac](<https://duckduckgo.com/duckduckgo-help-pages/get-duckduckgo/get-duckduckgo-browser-on-mac>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:24Z. Published: not established.

Source limitations:

- The App Store and direct-download editions have different documented capabilities; neither was installed or tested.

**R03-S-D12 — [Chromium Android WebView implementation README](<https://chromium.googlesource.com/chromium/src/+/HEAD/android_webview/README.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:36:06Z. Published: not established.

Source limitations:

- HEAD is mutable; this repository documentation establishes WebView implementation provenance, not a particular installed engine version or DuckDuckGo runtime build.

**R03-S-D2 — [What&#39;s New in DuckDuckGo: Q3 2026](<https://duckduckgo.com/updates>)**

Kind: release-note. Retrieved: 2026-11-21T14:15:43Z. Published: not established.

- **publication Period:** Q3 2026, explicitly stated in the body; exact publication day unknown

Source limitations:

- Quarterly product updates do not establish the newest version of each app.
- Feature availability and rollouts must retain platform qualifiers; the video-ad-blocking statement says most users, not everyone.
- Search and Duck.ai service features are distinct from browser-engine capabilities.

**R03-S-D3 — [DuckDuckGo Web Tracking Protections](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:16Z. Published: not established.

Source limitations:

- The long extraction was truncated; cited later sections were recovered from the saved retrieval.
- Platform-specific tables include roadmap entries and limitations; the full list is not uniformly shipped.
- Historical Chrome/Topics comparisons may be stale and are not a current Chrome baseline.
- Coverage percentages, relative protection, and policy promises were not independently verified.

**R03-S-D4 — [The Fire Button, Fire Windows, and Fire Tabs](<https://duckduckgo.com/duckduckgo-help-pages/privacy/fire-tabs>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:25:06Z. Published: not established.

Source limitations:

- Describes local storage and session controls, not network anonymity.
- Erasure and Fireproof exceptions were not tested against actual browser storage.

**R03-S-D5 — [DuckDuckGo Sync &amp; Backup Privacy Policy](<https://duckduckgo.com/sync_and_backup/privacy>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:26:06Z. Published: not established.

Source limitations:

- The last-updated value was absent from the inspected body; extraction metadata was not accepted.
- Encryption architecture, retention, and access statements are policy/documentation claims, not an independent cryptographic or server audit.

**R03-S-D6 — [DuckDuckGo&#39;s Windows browser now in public beta: architecture article](<https://spreadprivacy.com/windows-browser-open-beta/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:26:19Z. Published: not established.

Source limitations:

- Historical launch article; exact publication date was not independently established from the body.
- Its WebView2/Blink description is historical architecture evidence, not a current runtime inspection.
- Old beta, extension-roadmap, comparative performance, and feature-parity statements are not treated as current facts.

**R03-S-D7 — [DuckDuckGo for Mac beta now open to the public: architecture article](<https://spreadprivacy.com/duckduckgo-for-mac-open-beta/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:33:03Z. Published: not established.

Source limitations:

- Historical article that explicitly says it was edited after initial publication; exact publication/edit dates were not established from the body.
- The WKWebView-linked rendering API is architecture evidence, not a current engine-version audit.
- Old roadmap and relative data-use claims are not current comparative findings.

**R03-S-D8 — [Official DuckDuckGo Apple browsers repository README](<https://github.com/duckduckgo/apple-browsers>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:26:13Z. Published: not established.

Source limitations:

- README only; no build or code audit was performed.
- The README identifies a proprietary font dependency and an external-contributor fallback, so it does not support a claim that every distributed asset is open source.

**R03-S-D9 — [Official DuckDuckGo Android repository README](<https://github.com/duckduckgo/Android>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:26:16Z. Published: not established.

Source limitations:

- Repository documentation establishes a public Android source project, not a tested app version or an implementation audit.

**R03-S-L1 — [LibreWolf homepage](<https://librewolf.net/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:20:46Z. Published: not established.

Source limitations:

- The statement about always following Firefox stable is a maintenance policy claim, not a measured update-lag result.

**R03-S-L2 — [LibreWolf features and default settings](<https://librewolf.net/docs/features/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:13:35Z. Published: not established.

Source limitations:

- A date associated with linked material was not accepted as this page&#39;s publication date.
- Settings were not verified in a binary or clean profile.
- Certificate-revocation bullets are insufficiently clear for a present-day TLS assessment.
- Claims such as best-in-class resistance and no data collection are not measured comparative findings.

**R03-S-L3 — [LibreWolf Windows installation](<https://librewolf.net/installation/windows/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:20:49Z. Published: not established.

Source limitations:

- The body offered 160.0-1 downloads; this does not establish the newest release across all channels or its publication date.
- Scheduled WinUpdater is an optional setup path; automatic updating cannot be assumed for every installation.

**R03-S-L4 — [LibreWolf macOS installation](<https://librewolf.net/installation/macos/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:20:52Z. Published: not established.

Source limitations:

- Intel and ARM64 160.0-1 download links were observed, without a verified release publication date or channel-lag measurement.

**R03-S-L5 — [LibreWolf other Linux installation](<https://librewolf.net/installation/linux/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:20:55Z. Published: not established.

Source limitations:

- The page describes different package routes and Flatpak sandbox/process-isolation differences; no packaging-specific security outcome was tested.
- The observed 160.0-1 AppImage link is not an exhaustive latest-release check.

**R03-S-M1 — [Free the internet with Mullvad Browser](<https://mullvad.net/en/browser>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:13:35Z. Published: not established.

Source limitations:

- Product positioning and efficacy statements are vendor claims, not comparative measurements.
- The page explicitly describes operation without the Tor network.

**R03-S-M2 — [The Mullvad Browser hard facts: list of settings and modifications](<https://mullvad.net/en/browser/hard-facts>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:28Z. Published: not established.

Source limitations:

- The last-updated value was not established from the body.
- Mullvad DoH defaults and New Identity terminology are superseded by the 16.0 release announcement.
- Other settings are documented defaults, not an audit of every shipped build.

**R03-S-M3 — [Mullvad Browser 16.0](<https://mullvad.net/en/blog/mullvad-browser-160>)**

Kind: release-note. Retrieved: 2026-11-21T14:18:25Z. Published: 2026-11-06T09:51:23.319Z.

- **date Verification:** **method:** Source HTML time element explicitly contained the publication timestamp.<br>**retrievedAt:** 2026-11-21T14:27:48Z

Source limitations:

- Release-specific evidence takes precedence over older generic DNS and reset-button documentation.
- No accessibility or DNS-routing behavior was tested.

**R03-S-M4 — [Official Mullvad Browser repository README](<https://github.com/mullvad/mullvad-browser>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:31Z. Published: not established.

Source limitations:

- The inspected README supplies platform and project information; the source code was not audited.
- Repository creation time is not the README publication/update time.

**R03-S-M5 — [Mullvad Browser official latest-release API: 16.0.2](<https://api.github.com/repos/mullvad/mullvad-browser/releases/latest>)**

Kind: release-note. Retrieved: 2026-11-21T14:32:33Z. Published: 2026-11-17T13:03:22Z.

Source limitations:

- Latest-release endpoint is mutable; version and publication time describe the retrieved record.
- The record is not a verification of the binary engine patch level or all platform delivery channels.

**R03-S-P1 — [Pale Moon homepage](<https://www.palemoon.org/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:15:31Z. Published: not established.

Source limitations:

- The news body dates release 35.0.3 to 2026-10-27; that is not the page&#39;s publication date.
- Claims that single-process design is safer or uses fewer resources were not independently measured.
- The page explicitly acknowledges website compatibility limitations.

**R03-S-P2 — [Pale Moon release notes: 35.0.3 and earlier 35.0 releases](<https://www.palemoon.org/releasenotes.shtml>)**

Kind: release-note. Retrieved: 2026-11-21T14:15:34Z. Published: 2026-10-27.

- **publication Date Scope:** Date explicitly attached to the latest entry, v35.0.3, rather than to the entire multi-release page.

Source limitations:

- Release notes distinguish applicable security fixes and defense-in-depth changes; CVE counts were not used as a security ranking.
- No exhaustive build/channel inventory or patch-latency comparison was performed.

**R03-S-T1 — [New Release: Tor Browser 16.0](<https://blog.torproject.org/new-release-tor-browser-160>)**

Kind: release-note. Retrieved: 2026-11-21T14:13:35Z. Published: not established.

Source limitations:

- The cleaned body did not establish an exact announcement day; extraction metadata was not accepted as a publication date.
- The long changelog was truncated, but the sections used here were present.
- Future circuit-display work is a roadmap statement, not a shipped capability.

**R03-S-T2 — [Tor Browser: About Tor Browser](<https://support.torproject.org/tor-browser/getting-started/about-tor-browser>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:23Z. Published: not established.

Source limitations:

- Undated first-party documentation; describes design and intended protections rather than a measured anonymity result.

**R03-S-T3 — [Tor Browser: Managing identities](<https://support.torproject.org/tor-browser/features/managing-identities>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:23Z. Published: not established.

Source limitations:

- Undated user documentation; UI availability must be distinguished from network behavior and qualified by platform.
- No circuit, identity-reset, or application-routing behavior was exercised locally.

**R03-S-T4 — [Tor Browser: Fingerprinting protections](<https://support.torproject.org/tor-browser/features/fingerprinting-protections>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:23Z. Published: not established.

Source limitations:

- Describes normalization and bucketing; explicitly does not establish identical fingerprints across every user.
- No population-level fingerprinting or compatibility experiment was run.

**R03-S-T5 — [New Release: Tor Browser 16.0.1](<https://blog.torproject.org/new-release-tor-browser-1601>)**

Kind: release-note. Retrieved: 2026-11-21T14:33:03Z. Published: not established.

Source limitations:

- Exact announcement day was not established from the cleaned body.
- The changelog establishes the advertised engine update, not installation on every release channel.

**R03-S-T6 — [New Release (Android Only): Tor Browser 16.0.2](<https://blog.torproject.org/new-release-tor-browser-1602>)**

Kind: release-note. Retrieved: 2026-11-21T14:32:31Z. Published: not established.

Source limitations:

- Exact announcement day was not established from the cleaned body.
- The body explicitly limits this release to Android; it must not be labeled a desktop update.

**R03-S-T7 — [Tor Project blog index](<https://blog.torproject.org/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:15Z. Published: not established.

Source limitations:

- Mutable, multi-entry index; there is no single publication date.
- Used to locate release announcements, not as an exhaustive distribution inventory.

**R03-S-U1 — [Official ungoogled-chromium repository README](<https://github.com/ungoogled-software/ungoogled-chromium>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:13:35Z. Published: not established.

Source limitations:

- README inspection is not a patch audit, build verification, or network measurement.
- The common repository is distinct from platform build repositories and contributor binaries.
- The README says almost all additional privacy/control tweaks need manual activation.

**R03-S-U2 — [ungoogled-chromium official latest-release API: 158.0.8127.36-1](<https://api.github.com/repos/ungoogled-software/ungoogled-chromium/releases/latest>)**

Kind: release-note. Retrieved: 2026-11-21T14:21:00Z. Published: 2026-11-19T19:22:08Z.

Source limitations:

- The non-prerelease common-repository record had an empty body and no binary assets.
- It establishes a source release record, not availability, authenticity, update behavior, or patch completeness of platform binaries.
- The latest-release endpoint is mutable.

**R03-S-W1 — [Waterfox homepage and product FAQ](<https://www.waterfox.com/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:15:25Z. Published: not established.

Source limitations:

- The inspected page describes desktop workflows; Android parity is not established for them.
- No-telemetry, no-collection, privacy, and compatibility statements are first-party claims, not measurements.

**R03-S-W2 — [Waterfox changelog index](<https://www.waterfox.com/releases>)**

Kind: release-note. Retrieved: 2026-11-21T14:15:28Z. Published: not established.

Source limitations:

- The extracted index showed a 6.7.8 summary but did not expose a trustworthy publication date; the official release API establishes the release date.

**R03-S-W3 — [Download Waterfox: desktop requirements and downloads](<https://www.waterfox.com/download/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:22:55Z. Published: not established.

Source limitations:

- A 6.7.8 download and desktop requirements were observed; exact page publication time was not exposed.
- Desktop system requirements do not establish Android requirements.

**R03-S-W4 — [Waterfox 6.7.8: iCloud Passwords and a Feeds sidebar](<https://www.waterfox.com/releases/6.7.8>)**

Kind: release-note. Retrieved: 2026-11-21T14:26:03Z. Published: not established.

Source limitations:

- The release publication date is independently established by the official API, but the inspected page body did not expose its own publication timestamp.
- The security-advisory grouping is not reliable evidence of the desktop browser&#39;s exact built Gecko version.

**R03-S-W5 — [Waterfox official latest-release API: desktop 6.7.8](<https://api.github.com/repos/BrowserWorks/Waterfox/releases/latest>)**

Kind: release-note. Retrieved: 2026-11-21T14:28:24Z. Published: 2026-11-07T13:03:57Z.

Source limitations:

- The non-prerelease record provides a release timestamp and change body, not a tested desktop engine version.
- The latest-release endpoint is mutable.

**R03-S-W6 — [Waterfox Android official latest-release API: 1.2.11-2026445488](<https://api.github.com/repos/BrowserWorks/Waterfox-Android/releases/latest>)**

Kind: release-note. Retrieved: 2026-11-21T14:30:18Z. Published: 2026-11-06T11:35:13Z.

Source limitations:

- Android has a separate app and engine release line; desktop features and requirements cannot be inferred from this record.
- The latest-release endpoint is mutable; behavior was not exercised on a device.

### R04 — Productivity, workspaces, and AI-native browsers

**R04-A1 — [A farewell to Arc](<https://arc.net/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:13:58Z. Published: not established.

- **date Evidence:** Undated live notice; December 22, 2026 is the announced sunset, not the publication date.

Source limitations:

- Confirms the maker&#39;s sunset announcement, not an observed shutdown or account-deactivation test.

**R04-A2 — [Download Arc](<https://arc.net/download>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:34:00Z. Published: not established.

- **date Evidence:** Undated current download page; generic extraction date rejected.

Source limitations:

- Full public page was also read on the retrieval date; the recovery time was not captured.
- Installer links and platform labels were inspected; no download, installation or sign-in was performed.

**R04-A3 — [Command Bar (⌘ T) Actions](<https://start.arc.net/command-bar-actions>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:40Z. Published: not established.

- **date Evidence:** Undated legacy reference; extractor date 2021-02-19 was not accepted as feature currency.

Source limitations:

- Historical action reference does not establish present Mac/Windows parity.
- Obsolete Notes and Easels references were not converted into current features.

**R04-A4 — [Arc Security](<https://arc.net/security>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:33:57Z. Published: not established.

- **date Evidence:** Page metadata reported 2024-09-27; no publication dateline was established for the living security page.

Source limitations:

- Chromium lineage is documented; security effectiveness and the legacy 48-hour update promise were not independently verified.
- Present lifecycle is qualified by the newer farewell and Chromium-only download notice.

**R04-C1 — [What Is Comet&#39;s Browser Engine?](<https://www.perplexity.ai/help-center/comet/en/articles/11583798-what-is-comet-s-browser-engine.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:29:03Z. Published: not established.

- **date Evidence:** Undated public Markdown manual.

Source limitations:

- Chromium foundation is confirmed for the documented browser/desktop context, not independently for iOS or Android.
- Most extensions excludes those altering the new-tab page; compatibility was not tested.

**R04-C10 — [Comet iOS Launch and Computer Updates](<https://www.perplexity.ai/changelog/what-we-shipped--march-27-2026>)**

Kind: release-note. Retrieved: 2026-11-21T14:34:59Z. Published: not established.

- **date Evidence:** Metadata reports 2026-03-26 while the URL labels March 27, 2026. Exact publication day is unresolved.

Source limitations:

- Explicitly confirms iOS, Android, Mac and Windows availability. Other sections concern Perplexity Computer and are not counted as Comet features.

**R04-C11 — [Comet Mobile App: Older No-Mobile FAQ](<https://www.perplexity.ai/help-center/comet/en/articles/11734737-comet-mobile-app.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:29:18Z. Published: not established.

- **date Evidence:** Undated FAQ with no reliable update date.

Source limitations:

- Its claim that there is no public iOS/Android app conflicts with explicit launch and platform guides; retained as source-inconsistency evidence, not current availability.

**R04-C12 — [Comet Split-view Mode](<https://www.perplexity.ai/help-center/comet/en/articles/12324462-split-view-mode.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:38:35Z. Published: not established.

- **date Evidence:** Undated manual.

Source limitations:

- Documents two-tab splits and controls; Mac-style Option-click notation does not prove an identical Windows shortcut.

**R04-C13 — [Comet Browser: A Personal AI Assistant](<https://www.perplexity.ai/comet>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:31:22Z. Published: not established.

- **date Evidence:** Living marketing page metadata reports 2026-03-05; publication of the current contents is not established.

Source limitations:

- Marketing demonstrations are not measured completion rates. More specific manuals and launch pages establish platform and control details.

**R04-C2 — [Comet Operating System Requirements](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:29:06Z. Published: not established.

- **date Evidence:** Undated manual.

Source limitations:

- Desktop requirements are retained with attribution. Its iOS/Android exclusions conflict with explicit later mobile launch documentation.
- No Linux or ChromeOS support was established.

**R04-C3 — [Comet Assistant Panel](<https://www.perplexity.ai/help-center/comet/en/articles/11734688-assistant-panel.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:29:09Z. Published: not established.

- **date Evidence:** Undated manual.

Source limitations:

- Context extraction and multitasking are vendor-documented. The broad parallel-errand wording does not establish free-plan concurrency or quotas.

**R04-C4 — [Control What Comet Assistant Can Use](<https://www.perplexity.ai/help-center/comet/en/articles/12658082-control-what-comet-assistant-can-use.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:29:12Z. Published: not established.

- **date Evidence:** Undated manual.

Source limitations:

- Access toggles and site blocks are documented, not tested enforcement.
- Local storage, minimal context transfer and password/payment exclusions are attributed privacy claims.

**R04-C5 — [Comet Query Shortcuts](<https://www.perplexity.ai/help-center/comet/en/articles/11906981-comet-query-shortcuts.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:29:15Z. Published: not established.

- **date Evidence:** Undated manual; screenshot filenames were not treated as publication dates.

Source limitations:

- Shortcut library is described as coming soon; custom/default shortcut documentation does not establish library shipment.
- Example prompts are untrusted source text, not permission to execute actions.

**R04-C6 — [Managing Comet Assistant Permissions](<https://www.perplexity.ai/help-center/en/articles/13531023-managing-comet-assistant-permissions.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:24Z. Published: not established.

- **date Evidence:** Undated enterprise manual; screenshots named January 14, 2026 do not establish publication.

Source limitations:

- Enterprise-only admin controls and rule precedence are documented; no policy enforcement or bypass was locally reproduced.
- Security certifications and data-handling assurances are vendor assertions in this source.

**R04-C7 — [Comet Available for Everyone and Background Assistants](<https://www.perplexity.ai/changelog/what-we-shipped-october-3rd>)**

Kind: release-note. Retrieved: 2026-11-21T14:29:22Z. Published: not established.

- **date Evidence:** October 2025 entry: metadata reports 2025-10-02 while the URL labels October 3. Exact publication day is left unresolved.

Source limitations:

- Free-browser release and Max background-assistant entitlement are established at the entry&#39;s date, not as a fresh billing/quotas audit.
- Other Perplexity product announcements on the page are not automatically Comet features.

**R04-C8 — [Comet for Android: Quick Start and Key Features](<https://www.perplexity.ai/help-center/comet/en/articles/12875447-comet-for-android-quick-start-and-key-features.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:31:18Z. Published: not established.

- **date Evidence:** Undated Android manual.

Source limitations:

- Specifies Android 12+ and foreground-only task execution; desktop background capability must not be generalized to mobile.
- No task was executed; reliability and local-data claims remain vendor assertions.

**R04-C9 — [Comet Is Now Available on iOS](<https://www.perplexity.ai/hub/blog/meet-comet-for-ios>)**

Kind: release-note. Retrieved: 2026-11-21T14:34:59Z. Published: 2026-03-18.

- **date Evidence:** Specific iOS launch-article metadata reports 2026-03-18; its body announces shipment and links to the App Store. The subsequent weekly changelog has different date labels.

Source limitations:

- Documents iPhone availability and described features, not iOS engine lineage or complete desktop parity.
- Fastest-growing, most-powerful and task-performance wording is vendor marketing.

**R04-D1 — [Dia: More than a browser. A better workday.](<https://www.diabrowser.com/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:14:01Z. Published: not established.

- **date Evidence:** Undated current offering; template metadata 2025-06-09 is not a feature-release date.

Source limitations:

- Full page was also read on the same date; platform labels and feature descriptions are documentary, not runtime tests.
- Performance and privacy language is vendor marketing.

**R04-D2 — [Dia Browser Product Updates](<https://www.diabrowser.com/changelog>)**

Kind: release-note. Retrieved: 2026-11-21T14:16:13Z. Published: not established.

- **date Evidence:** Living changelog. Visible release entries used in this lane range from 2026-10-01 to 2026-11-19; generic page metadata 2025-08-21 was not applied to entries.

Source limitations:

- Initial extraction omitted many headings; a full public-page read on the same date recovered the dated entries.
- Release notes establish documented shipment, not successful execution or complete cross-platform parity.

**R04-D3 — [Dia Browser Security](<https://www.diabrowser.com/security>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:30Z. Published: not established.

- **date Evidence:** Undated living policy page; metadata 2025-06-09 was not accepted as a current publication date.

Source limitations:

- Chromium lineage is explicit; security practices and update cadence are vendor statements, not audit results.

**R04-D4 — [Dia Browser Privacy Policy](<https://www.diabrowser.com/privacy>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:38:36Z. Published: not established.

- **effective At:** 2026-04-09
- **date Evidence:** The body states an April 9, 2026 effective date, which is not assumed to be publication. Older template metadata was rejected.

Source limitations:

- Describes policy, paid-feature recognition and data controls; it does not independently establish actual processing, encryption implementation or current AI prices.

**R04-F1 — [Floorp Browser: Customization in everyone&#39;s hands](<https://floorp.app/en>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:14:07Z. Published: not established.

- **date Evidence:** Homepage metadata reported 2026-07-29; no publication date was established for the current offering.

Source limitations:

- Vendor comparison with Chrome was not adopted as Chrome baseline evidence.
- Free, open-source and platform descriptions were read; the product was not installed.

**R04-F2 — [Floorp v12.21.2 Release Notes: Firefox 160](<https://blog.floorp.app/en/release/12.21.2/>)**

Kind: release-note. Retrieved: 2026-11-21T14:31:39Z. Published: 2026-11-13.

- **date Evidence:** Specific release-article metadata supplies 2026-11-13; the body explicitly announces v12.21.2 and the stabilization policy.

Source limitations:

- The temporary feature pause has no exact end date.
- Firefox base and displayed runtime versions are the maker&#39;s build description, not local version measurements.

**R04-F3 — [Floorp Workspaces](<https://docs.floorp.app/docs/features/workspaces/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:16:31Z. Published: not established.

- **date Evidence:** Manual metadata reported 2026-10-10, without a reliable publication-versus-update distinction; the body qualifies behavior to 12.14.2.

Source limitations:

- Shared workspace structures are not shared individual tabs.
- The claim that background tabs preserve entered data was not tested.

**R04-F4 — [Floorp Split View](<https://docs.floorp.app/docs/features/split-view/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:16:33Z. Published: not established.

- **date Evidence:** Manual metadata reported 2026-10-10; publication is unresolved. The four-pane limit is explicitly qualified to 12.14.2.

Source limitations:

- Floorp&#39;s enhancement is distinguished from upstream Firefox split view; no hands-on pane or accessibility test was run.

**R04-F5 — [Floorp Panel Sidebar](<https://docs.floorp.app/docs/features/panel-sidebar/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:16:36Z. Published: not established.

- **date Evidence:** Manual metadata reported 2026-10-10; publication is unresolved and the body contains version-specific qualifications.

Source limitations:

- Some extensions do not support sidebar display, and a mobile user agent does not guarantee a mobile layout.
- Notes sync, panel persistence and unloading are documented, not locally tested.

**R04-H1 — [Shift Browser: Build Your Custom Browser](<https://shift.com/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:16:28Z. Published: not established.

- **date Evidence:** Undated living offering; metadata 2025-06-04 was not treated as a current publication date.

Source limitations:

- Current Shift Browser branding must not be conflated with all older Shift v9 descriptions.

**R04-H2 — [Create Spaces for Work and Personal: Shift Browser](<https://shift.com/spaces/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:25:19Z. Published: not established.

- **date Evidence:** Living feature page metadata reported 2025-06-27; an actual publication dateline was not established.

Source limitations:

- Space contents and account switching are vendor descriptions, not a tested session-isolation model.

**R04-H3 — [Create a Custom Browser Layout: Shift Builder](<https://shift.com/builder/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:25:22Z. Published: not established.

- **date Evidence:** Living feature page metadata reported 2025-06-26; publication remains unestablished.

Source limitations:

- Layout flexibility is advertised; no interaction, accessibility or recoverability test was run.

**R04-H4 — [Shift AI: Context-Aware and Optional](<https://shift.com/ai/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:25:24Z. Published: not established.

- **date Evidence:** Living feature page metadata reported 2026-03-25; publication remains unestablished.

Source limitations:

- Broad context and privacy marketing is qualified by the more specific launch article&#39;s opt-in context controls.

**R04-H5 — [Shift AI: Intelligence That Meets You Where You Work](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:35:43Z. Published: 2026-04-28.

- **date Evidence:** Specific maker product-manager article metadata supplies April 28, 2026.

Source limitations:

- Documents intentional AI routing, context chips and separate toggles; future proactive capabilities remain roadmap statements.
- An on-device intent router does not establish on-device processing for all AI requests.

**R04-H6 — [Shift Pricing](<https://shift.com/pricing/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21. Published: not established.

- **date Evidence:** Undated current table read through public webfetch; time was not captured.

Source limitations:

- Displayed annual USD price and plan limits are a retrieval-time observation of the offering, not a purchase or guaranteed future quote.

**R04-H7 — [Shift Browser Security](<https://shift.com/security/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:31:27Z. Published: not established.

- **date Evidence:** Living security page metadata reported 2025-08-14; publication remains unestablished.

Source limitations:

- Supports Chromium lineage and stated security features, not an exact current engine version or independently verified protection.

**R04-H8 — [Download Shift Browser for Free](<https://shift.com/download/?platform=mac>)**

Kind: vendor-documentation. Retrieved: 2026-11-21. Published: not established.

- **date Evidence:** Undated download page. Full HTML metadata, rather than a search snippet, explicitly names Mac and Windows.

Source limitations:

- Reader-mode body omitted platform details; page HTML supplied the evidence. No installer was downloaded or tested.

**R04-H9 — [All Your Web Apps in One: Shift Browser](<https://shift.com/app-integrated/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:31:31Z. Published: not established.

- **date Evidence:** Living app-catalog page metadata reported 2025-06-24; publication remains unestablished.

Source limitations:

- The 4,500+ app and any-Chrome-extension statements are vendor catalog/compatibility claims, not verified counts or universal support.

**R04-K1 — [Former Sidekick Official URL, Now Serving Comet](<https://www.meetsidekick.com/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:16:25Z. Published: not established.

- **date Evidence:** Current response serves Comet content; no Sidekick publication or sunset date is present.

Source limitations:

- Destination content does not prove acquisition terms, the precise shutdown date or preservation of Sidekick features.

**R04-K2 — [AppSumo Sidekick Browser Listing and Sunset Notice](<https://appsumo.com/products/sidekick/>)**

Kind: third-party. Retrieved: 2026-11-21T14:25:28Z. Published: not established.

- **date Evidence:** Distributor notice names August 3, 2025 as the sunset. An old Posted Dec 04, 2024 header and 2024 listing metadata do not date the amended notice.

Source limitations:

- Direct distributor notice, not the unrecovered original maker announcement.
- Feature and lifetime-plan copy is historical sales material retained below the retirement notice, not a current offer.

**R04-K3 — [Sidekick Browser: Microsoft Store Windows Listing](<https://apps.microsoft.com/detail/xp89dmjvg2wpz1?hl=en-GB&gl=MX>)**

Kind: third-party. Retrieved: 2026-11-21T14:34:59Z. Published: not established.

- **date Evidence:** Title-only retrieval; metadata 2026-11-02 was not accepted as a publication, update or release date.

Source limitations:

- No descriptive body was recovered. A historical Windows listing title is not proof of current downloadability, maintenance or engine lineage.

**R04-N1 — [Opera Neon: This Browser Is Built to Act](<https://www.operaneon.com/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:16:19Z. Published: not established.

- **date Evidence:** Current product page carries metadata 2025-09-30, which is not taken as publication of every current feature.

Source limitations:

- Concerns the agentic Neon product launched in 2025; high-level claims do not establish stable-channel maturity or performance.

**R04-N2 — [Opera Neon Frequently Asked Questions](<https://www.operaneon.com/faq>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:33:49Z. Published: not established.

- **date Evidence:** Undated FAQ; invalid 1995 metadata rejected.

Source limitations:

- Universal paid/account-required language conflicts with newer free-access and plan pages.
- Model lists are volatile. Local execution, cloud inference, retention and permission descriptions are not independently verified enforcement.

**R04-N3 — [Opera Neon Subscription: Free and Standard](<https://www.operaneon.com/subscription>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:33:52Z. Published: not established.

- **date Evidence:** Undated current plan table; invalid 1995 metadata rejected.

Source limitations:

- Observed Free/Standard terms and displayed $19.90 monthly rate are not a purchase or guarantee beyond retrieval.
- Access breadth does not itself prove that every agentic feature has graduated from experimental maturity.

**R04-N4 — [Opera Neon Ships: AI Agentic Browser](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>)**

Kind: release-note. Retrieved: 2026-11-21T14:33:55Z. Published: 2025-09-30.

- **date Evidence:** Dated September 30, 2025 shipping announcement.

Source limitations:

- Initial launch was invitation-based and paid. Newer access evidence supersedes those blanket restrictions.
- Task boundaries, live actions and offline cloud creation are vendor descriptions, not tested guarantees.

**R04-N5 — [Your AI Agents Can Use Opera Neon Free of Charge](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>)**

Kind: release-note. Retrieved: 2026-11-21T14:16:22Z. Published: 2026-08-14.

- **date Evidence:** Dated August 14, 2026 maker announcement.

Source limitations:

- Distinguishes free browsing/CLI from account-required MCP and paid built-in AI capabilities; current plan page further specifies basic Chat.
- No external agent was connected.

**R04-N6 — [Protected with Opera Neon: Understanding Agentic Browser Security](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:34:59Z. Published: 2025-10-21.

- **date Evidence:** Specific security-article metadata supplies October 21, 2025.

Source limitations:

- Describes an Early Access period. Later access expansion does not establish a specific date of stable-channel graduation.
- Separates existing safeguards, residual prompt-injection risk and defenses still being explored; none were penetration-tested in this lane.

**R04-S1 — [SigmaOS: The new home for your internet](<https://sigmaos.com/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:14:10Z. Published: not established.

- **date Evidence:** Undated homepage; shared metadata 2025-02-04 does not establish a release or current maintenance.

Source limitations:

- Full public page was subsequently read on the same date; the initial extraction omitted many features and the pricing table.
- A live download/paid-plan page does not establish working account services or a maintained security cadence.
- Homepage pricing conflicts with the legacy FAQ.

**R04-S2 — [SigmaOS Common Questions](<https://docs.sigmaos.com/common-questions>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:43Z. Published: not established.

- **date Evidence:** Undated legacy FAQ; a 2023 footer is not a publication date.

Source limitations:

- Old Pro pricing and workspace limits conflict with the current homepage and are not represented as current terms.
- Procedures and extension support were not tested.

**R04-S3 — [SigmaOS Workspaces Tutorial](<https://docs.sigmaos.com/tutorial/workspaces>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:46Z. Published: not established.

- **date Evidence:** Undated legacy tutorial; 2023 footer/metadata rejected as publication evidence.

Source limitations:

- Optional separate cookies and private/shared workspace descriptions do not establish current backend availability.

**R04-S4 — [SigmaOS Split Screen Tutorial](<https://docs.sigmaos.com/tutorial/split-screen>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:49Z. Published: not established.

- **date Evidence:** Undated legacy tutorial; no reliable publication dateline.

Source limitations:

- Two-page and Shift-modifier behavior is historical documentation, not a current installation test.

**R04-S5 — [SigmaOS Release Notes Index](<https://docs.sigmaos.com/release-notes>)**

Kind: release-note. Retrieved: 2026-11-21T14:22:07Z. Published: not established.

- **date Evidence:** Undated index; no usable current release dates were extracted.

Source limitations:

- Retrieved body was primarily navigation; it cannot establish the last release, a maintained cadence or discontinuation.

**R04-S6 — [Everything New in SigmaOS 1.17.0](<https://sigmaos.com/updates/1-17-0>)**

Kind: release-note. Retrieved: 2026-11-21T14:34:59Z. Published: not established.

- **date Evidence:** Extractor reported 2025-02-04, also used by other SigmaOS pages; no reliable publication dateline was established.

Source limitations:

- Demonstrates a documented release, not that 1.17.0 is the latest or final version.
- Future design/sync plans and AI performance claims are not shipment or benchmark evidence.

**R04-S7 — [SigmaOS Blog: Picking up the Tab](<https://sigmaos.com/blog>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:25:16Z. Published: not established.

- **date Evidence:** Undated index; a 2022 retrospective is among visible links, not proof of the index&#39;s update date.

Source limitations:

- Full page was also read on the same date; lack of a fresh announcement is not proof of abandonment.

**R04-T1 — [ChatGPT Atlas Retirement](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>)**

Kind: vendor-documentation. Retrieved: 2026-11-21. Published: not established.

- **date Evidence:** Successful public-page read says Updated: 30 days ago. Relative update was not converted into an exact publication or retirement day.

Source limitations:

- Retirement and lack of updates are maker-confirmed; the precise shutdown day is not present in the readable article.
- Search-MCP retrieval failed with 403 before a direct public-page read succeeded. Data recovery was not attempted.

**R04-T2 — [Introducing ChatGPT Atlas, Now Marked Deprecated](<https://openai.com/index/introducing-chatgpt-atlas/>)**

Kind: release-note. Retrieved: 2026-11-21. Published: 2025-10-21.

- **date Evidence:** Visible October 21, 2025 launch dateline. The current deprecation banner is undated.

Source limitations:

- Original platform, preview and plan descriptions are historical, not a currently supported offer.
- Direct public-page read recovered the body after search-MCP 403 responses.

**R04-T3 — [How OpenAI Built OWL for ChatGPT Atlas](<https://openai.com/index/building-chatgpt-atlas>)**

Kind: vendor-documentation. Retrieved: 2026-11-21. Published: 2025-10-30.

- **date Evidence:** Visible October 30, 2025 engineering-article dateline.

Source limitations:

- Historical maker architecture account; process isolation, input routing and performance were not locally inspected or benchmarked.
- Atlas has since been retired.

**R04-W1 — [Rethink the Web: Wavebox Productivity Browser](<https://wavebox.io/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:14:13Z. Published: not established.

- **date Evidence:** Undated current marketing page; generic 2026-01-01 metadata rejected.

Source limitations:

- Features and AI-disable option are vendor-documented; testimonials are not independent performance or price evidence.

**R04-W2 — [Wavebox Platform: Built for Work](<https://wavebox.io/platform>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:22:10Z. Published: not established.

- **date Evidence:** Undated living product explanation; generic 2026 metadata rejected.

Source limitations:

- Separates Spaces, Groups, Apps and full Profiles; these terms must not be treated as interchangeable isolation boundaries.
- Always-up-to-date, zero-slowdown and certification-in-progress statements were not independently verified.

**R04-W3 — [New in Wavebox: Smart Note Checklists, Navigator, Chat with Settings and More](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>)**

Kind: release-note. Retrieved: 2026-11-21T14:27:28Z. Published: 2026-10-08.

- **date Evidence:** Specific article metadata supplies October 8, 2026; the body identifies release 155.3.12.

Source limitations:

- Proves recent documented activity, not the latest available build on the research cutoff or measured resource accuracy.

**R04-W4 — [Wavebox Pricing](<https://wavebox.io/pricing>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:31:34Z. Published: not established.

- **date Evidence:** Undated current plan terms; generic 2026 metadata rejected.

Source limitations:

- Trial and Basic limits were readable, but an exact current paid price was not recovered from a price table.
- Testimonials and productivity claims are not billing or measurement evidence.

**R04-W5 — [Download Wavebox for macOS, Windows and Linux](<https://wavebox.io/download>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:31:37Z. Published: not established.

- **date Evidence:** Undated current platform offering.

Source limitations:

- Onboarding instructions were read but not followed. No accounts, installers or personal profiles were accessed.

**R04-W6 — [Wavebox Releases Index](<https://hub.wavebox.io/tag/releases/>)**

Kind: release-note. Retrieved: 2026-11-21T14:23:52Z. Published: not established.

- **date Evidence:** Undated index; entry links were used to locate the dated release article.

Source limitations:

- Initial extraction was sparse; full page was also read on the same date. Index order is not a precise latest-build date.

**R04-Z1 — [Zen Browser](<https://zen-browser.app/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:14:04Z. Published: not established.

- **date Evidence:** Undated homepage; metadata 2024-11-01 was not treated as a current feature date.

Source limitations:

- Marketing overview is less specific than the Glance and workspace manuals; detailed manual behavior takes precedence.

**R04-Z2 — [Download Zen](<https://zen-browser.app/download>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:35:43Z. Published: not established.

- **date Evidence:** Undated platform offering.

Source limitations:

- Establishes advertised Mac, Windows and Linux availability, not installation or platform parity.

**R04-Z3 — [Zen Release Notes](<https://zen-browser.app/release-notes>)**

Kind: release-note. Retrieved: 2026-11-21T14:19:25Z. Published: not established.

- **date Evidence:** Current header reports 1.24.3b. Individual entry dates were not reliably extracted; invalid 2010 metadata was rejected.

Source limitations:

- Living log mixes current and historical release blocks; no precise first-ship date is inferred for features without a reliable block date.
- Twilight is explicitly pre-release; early window-sync limitations do not establish their current resolution.

**R04-Z4 — [Zen Workspaces](<https://docs.zen-browser.app/user-manual/workspaces>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:16:40Z. Published: not established.

- **date Evidence:** Undated user manual.

Source limitations:

- Container isolation covers cookies and sessions, not browsing history and extensions; no runtime isolation test was run.

**R04-Z5 — [Zen Glance](<https://docs.zen-browser.app/user-manual/glance>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:16:42Z. Published: not established.

- **date Evidence:** Undated user manual.

Source limitations:

- Preview triggers, dismissal and promotion are documented procedures, not observed behavior.

### R05 — Mobile and regional browsers: documented capabilities and Chrome investigation candidates

**R05-A01 — [US publisher API records for Aloha, Via, Quetta and Firefox Focus](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:51:10Z. Published: not established.

Source limitations:

- Four independent publisher records in one response, not a single publication. Current-version dates known to day precision in the handoff: Aloha 2026-11-16, Via 2025-09-12, Quetta 2026-11-09, Focus 2026-08-30. US storefront descriptions, minimum OS and advertised capabilities are not runtime measurements or worldwide availability guarantees.

**R05-C01 — [Cromite README: platforms, lineage and limitations](<https://raw.githubusercontent.com/uazo/cromite/master/README.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:10Z. Published: not established.

Source limitations:

- Undated mutable document. Anti-fingerprinting is expressly incomplete; supported-platform and license statements do not establish tested binary behavior.

**R05-C02 — [Cromite documented features and defaults](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FEATURES.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:48Z. Published: not established.

Source limitations:

- Undated mutable feature list. Android-specific tools and disabled integrations require edition/default qualification; no installed build was tested.

**R05-C03 — [Cromite FAQ and Android-extension documentation conflict](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FAQ.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:51Z. Published: not established.

Source limitations:

- Undated mutable FAQ. Its categorical Android-extension answer conflicts with the pinned experimental source patch; do not use the FAQ alone to infer absence or compatibility.

**R05-C04 — [Cromite repository metadata snapshot](<https://api.github.com/repos/uazo/cromite>)**

Kind: source-code. Retrieved: 2026-11-21T14:33:45Z. Published: not established.

Source limitations:

- API returned archived:false and pushed\_at 2026-11-21T10:36:42Z. A source push is not a binary release or evidence of current security-patch completeness.

**R05-C05 — [Cromite latest-release API snapshot](<https://api.github.com/repos/uazo/cromite/releases/latest>)**

Kind: release-note. Retrieved: 2026-11-21T14:31:10Z. Published: 2026-09-15T11:51:14Z.

- **source Revision:** 11507ac1061b5ea227806f5e84db5a57df6ccf6a

Source limitations:

- Publication timestamp belongs to the returned release v153.0.8010.37-11507ac1061b5ea227806f5e84db5a57df6ccf6a. The latest endpoint is mutable; artifacts and extension compatibility were not tested.

**R05-C05a — [Cromite observed release permalink](<https://github.com/uazo/cromite/releases/tag/v153.0.8010.37-11507ac1061b5ea227806f5e84db5a57df6ccf6a>)**

Kind: release-note. Retrieved: 2026-11-21T14:31:10Z. Published: 2026-09-15T11:51:14Z.

Source limitations:

- Permalink and date were returned by the release API, not independently re-fetched as a second evidence source.

**R05-C06 — [Pinned experimental Android-extension patch in Cromite](<https://raw.githubusercontent.com/uazo/cromite/11507ac1061b5ea227806f5e84db5a57df6ccf6a/build/patches/Experimental-support-for-extensions-on-Android.patch>)**

Kind: source-code. Retrieved: 2026-11-21T14:34:31Z. Published: not established.

- **source Revision:** 11507ac1061b5ea227806f5e84db5a57df6ccf6a

Source limitations:

- The known 2025-11-06 date is the patch-header date; public publication, feature rollout and app release dates are not established by that header. The release-pinned source describes an experimental, disabled-by-default feature; patch presence does not prove artifact coverage or extension compatibility.

**R05-C07 — [Cromite release-linked maintainer changelog comment](<https://api.github.com/repos/uazo/cromite/issues/comments/5679359966>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:32:59Z. Published: 2026-09-15T11:23:17Z.

- **updated At:** 2026-09-15T11:55:36Z

Source limitations:

- Maintainer change description includes extension fixes; it is not a local reproduction, a compatibility matrix, or a report submitted by this project.

**R05-C07a — [Cromite maintainer changelog comment permalink](<https://github.com/uazo/cromite/issues/3040#issuecomment-5679359966>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:32:59Z. Published: 2026-09-15T11:23:17Z.

Source limitations:

- Permalink was returned by the comment API; not a separate independent retrieval or project submission receipt.

**R05-F01 — [Mozilla Firefox Focus product page](<https://www.firefox.com/en-US/mobile/focus/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:20:24Z. Published: not established.

Source limitations:

- Undated page; an inferred 1998 date was rejected. Erase, tracking-protection and shortcut claims were not runtime-tested.

**R05-F02 — [Focus with GeckoView: historical Android engine migration](<https://hacks.mozilla.org/2018/09/focus-with-geckoview/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:25:01Z. Published: 2018-09-13.

Source limitations:

- Historical Android migration article, not a current engine-version inventory, iOS implementation claim or current performance measurement.

**R05-F03 — [Focus Android repository migration notice](<https://github.com/mozilla-mobile/focus-android>)**

Kind: source-code. Retrieved: 2026-11-21T14:28:28Z. Published: not established.

Source limitations:

- Exact notice date not established. Archived repository directs development to firefox-android; archiving is not product discontinuation.

**R05-F04 — [Firefox Android repository migration to Mozilla Central](<https://github.com/mozilla-mobile/firefox-android>)**

Kind: source-code. Retrieved: 2026-11-21T14:32:22Z. Published: not established.

Source limitations:

- Notice says releases from Firefox 128 are managed in Mozilla Central. It establishes repository migration, not the installed Focus Android version.

**R05-F05 — [Focus iOS repository migration notice](<https://github.com/mozilla-mobile/focus-ios>)**

Kind: source-code. Retrieved: 2026-11-21T14:28:31Z. Published: not established.

Source limitations:

- Notice publication date unknown. Repository archive directs development to the combined firefox-ios repository, not a product EOL announcement.

**R05-F06 — [Firefox and Focus iOS monorepo README](<https://github.com/mozilla-mobile/firefox-ios>)**

Kind: source-code. Retrieved: 2026-11-21T14:30:31Z. Published: not established.

Source limitations:

- Undated mutable README establishes the combined project location. Repository presence alone does not map every store binary to a commit.

**R05-F07 — [Pinned Focus iOS browsing controller using WebKit](<https://raw.githubusercontent.com/mozilla-mobile/firefox-ios/9e923b05c99b2b0e19c6cadf198b222acf1ddb5b/focus-ios/Blockzilla/Modules/WebView/LegacyWebViewController.swift>)**

Kind: source-code. Retrieved: 2026-11-21T14:33:44Z. Published: not established.

- **source Revision:** 9e923b05c99b2b0e19c6cadf198b222acf1ddb5b

Source limitations:

- Commit date was not retrieved. Observed lines 6, 65, 151, 171 and 202 include WebKit, WKWebView and WKContentRuleList. This is source inspection, not proof of the commit shipped in every App Store edition.

**R05-F08 — [Firefox Focus US iOS publisher listing](<https://apps.apple.com/us/app/firefox-focus-privacy-browser/id1055677337>)**

Kind: release-note. Retrieved: 2026-11-21T14:51:10Z. Published: 2026-08-30.

Source limitations:

- Record and current-version release date were obtained through the publisher lookup API. Date is for version 155.0, not initial app publication; not an installed-version measurement.

**R05-F09 — [Firefox Focus iOS support page: unusable retrieval](<https://support.mozilla.org/en-US/kb/firefox-focus-ios>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:58Z. Published: not established.

Source limitations:

- Returned a challenge page. No feature claim, including current Safari integration, was accepted from this retrieval or its search snippet.

**R05-G01 — [GrapheneOS technical documentation: Vanadium](<https://grapheneos.org/features#vanadium>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:10Z. Published: not established.

Source limitations:

- Undated rolling technical documentation includes both implemented and future work. Browser versus WebView defaults and OS/hardware prerequisites differ; no runtime security measurements were made.

**R05-G02 — [Vanadium latest-release API and official distribution boundary](<https://api.github.com/repos/GrapheneOS/Vanadium/releases/latest>)**

Kind: release-note. Retrieved: 2026-11-21T14:31:10Z. Published: 2026-11-19T15:52:47Z.

Source limitations:

- Snapshot returned 158.0.8127.42.0 and Chromium 158.0.8127.42. Official availability is GrapheneOS-only; a future outside-GrapheneOS edition is not an observed shipped product.

**R05-G02a — [Vanadium 158.0.8127.42.0 release permalink](<https://github.com/GrapheneOS/Vanadium/releases/tag/158.0.8127.42.0>)**

Kind: release-note. Retrieved: 2026-11-21T14:31:10Z. Published: 2026-11-19T15:52:47Z.

Source limitations:

- Permalink was returned by the release API, not independently fetched; no release binary was executed.

**R05-K01 — [Kiwi successor repository: maintenance ending and Edge code integration](<https://github.com/kiwibrowser/src.next>)**

Kind: source-code. Retrieved: 2026-11-21T14:17:46Z. Published: not established.

Source limitations:

- Notice says maintenance ends after January 2025; exact notice publication and end day are not established. Partnership and extension-code integration into a development Edge version are not evidence of acquisition or current stable Edge capabilities.

**R05-K02 — [Historical Kiwi Android source repository and feature README](<https://github.com/kiwibrowser/src>)**

Kind: source-code. Retrieved: 2026-11-21T14:30:28Z. Published: not established.

Source limitations:

- Historical README includes 2018-2020 milestones and 2021 plans. Its up-to-date wording is superseded by the later maintenance-ending notice; extension support, night mode and bottom address bar are historical evidence.

**R05-L01 — [Aloha product features and Premium boundaries](<https://alohabrowser.com/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:17:49Z. Published: not established.

Source limitations:

- Extractor date 2026-06-09 was not established as page revision. Free versus paid VPN scope differs; anonymity, no-log, audit and speed claims were not independently verified.

**R05-L02 — [AlohaCore engineering history for Android](<https://alohabrowser.com/posts-aloha-core-i-love-and-hate-you>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:26:34Z. Published: 2025-01-08.

Source limitations:

- Article is expressly Android-only. Chromium 130 is historical to the article, not the November 2026 engine version; an open-source core does not establish whole-app or iOS source availability.

**R05-L03 — [Aloha US iOS publisher listing](<https://apps.apple.com/us/app/aloha-browser-private-vpn/id1105317682>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:20:40Z. Published: 2026-11-16.

Source limitations:

- Later US lookup at 14:51:10 UTC supplied the fuller version 8.13.2 release record, iOS 16 minimum and plan distinctions. Date denotes current-version release; no application or VPN test was performed.

**R05-L04 — [Aloha mobile and desktop download offerings](<https://alohabrowser.com/download.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:56:55Z. Published: not established.

Source limitations:

- Initial read at 14:32:59 UTC; full relevant HTML read at the recorded time. Extractor date 2026-06-09 was not established as publication. Windows 64-bit, Intel/Apple-silicon macOS, Linux deb/rpm and mobile links are advertised offerings, not tested packages.

**R05-P01 — [Apple EU alternative browser-engine entitlement policy](<https://developer.apple.com/support/alternative-browser-engines/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:37Z. Published: not established.

Source limitations:

- Undated policy; inferred 2026-01-01 date rejected. Describes specific EU entitlements with minimum iOS 17.4/iPadOS 18, not proof that a named browser has shipped an alternative-engine edition.

**R05-Q01 — [Quetta Android publisher listing and data disclosure](<https://play.google.com/store/apps/details?id=net.quetta.browser&hl=en>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:56:55Z. Published: 2026-11-20.

Source limitations:

- Date is the visible Updated on Nov 20, 2026 label, not initial publication. Android-specific capabilities and Chromium 154.0.8037.127 text cannot identify the iOS engine. Publisher data disclosure is not a network audit.

**R05-Q02 — [Quetta Android extension installation and compatibility guide](<https://www.quetta.net/features/extensions>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:10Z. Published: not established.

Source limitations:

- Initial read at 14:17:43 UTC; full relevant HTML read at the recorded time. Site metadata reported 2026-11-16 without establishing publication or revision. Guide explicitly scopes extension hosting to Android and warns of compatibility limits.

**R05-Q03 — [Quetta iOS product page](<https://www.quetta.net/products/ios>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:24Z. Published: not established.

Source limitations:

- Initial read at 14:25:04 UTC; full relevant HTML read at the recorded time. Site metadata date 2026-11-16 was not established as publication. Broad privacy claims and iOS advertising do not resolve runtime data practices or engine identity.

**R05-Q04 — [Quetta iOS publisher listing](<https://apps.apple.com/app/quetta-private-browser/id6504077999>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:34:33Z. Published: 2026-11-09.

Source limitations:

- Later US publisher lookup at 14:51:10 UTC supplied fuller version 1.5.1, release-date and iOS 17 minimum information. No iOS binary or desktop package was inspected.

**R05-Q05 — [Quetta advertised downloads and platform routes](<https://www.quetta.net/downloads>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:10Z. Published: not established.

Source limitations:

- Initial read at 14:20:28 UTC; full relevant HTML read at the recorded time. Metadata date 2026-11-16 is not an established release date. Windows/macOS routes advertise products; package, channel and feature parity were not verified.

**R05-Q06 — [Quetta video download guide](<https://www.quetta.net/features/video-downloader>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:52:14Z. Published: not established.

Source limitations:

- Site metadata date 2026-11-16 was not independently established as publication. Availability depends on media site, account, format and region; supported downloads were not tested.

**R05-Q07 — [Quetta playlists and qualified offline access](<https://www.quetta.net/features/playlist>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:52:14Z. Published: not established.

Source limitations:

- Site metadata date 2026-11-16 was not established as publication. Playlist membership is distinct from a compatible, permitted offline media file; per-build playback behavior was not tested.

**R05-Q08 — [Quetta FAQ with over-broad cross-platform wording](<https://www.quetta.net/faq>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:40Z. Published: not established.

Source limitations:

- Site metadata date 2026-11-16 was not established as publication. Broad Android/iOS Chromium and Chrome-extension language conflicts in scope with the Android-specific guide and is insufficient to establish an iOS engine or extension host.

**R05-S01 — [Samsung Browser Android publisher listing](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:22:46Z. Published: not established.

Source limitations:

- Listing revision date was not reliably extracted. Feature descriptions and tablet/watch restrictions are publisher documentation, not application tests.

**R05-S02 — [Samsung Browser Android release history](<https://developer.samsung.com/browser/release-note/android-release-note.html>)**

Kind: release-note. Retrieved: 2026-11-21T14:27:25Z. Published: not established.

Source limitations:

- Initial retrieval was at 14:26:25 UTC; the later direct HTML read recovered the relevant content. Latest visible entry was version 25.0.0.41 dated 2024-05-11, not a verified current Android release. Entry dates and historical Android 8+ wording do not establish the page revision or current minimum OS.

**R05-S03 — [Samsung Browser Windows release history and rename](<https://developer.samsung.com/browser/release-note/windows-release-note.html>)**

Kind: release-note. Retrieved: 2026-11-21T14:26:28Z. Published: not established.

Source limitations:

- Extractor date 2026-11-19 was not mapped reliably to an entry. Windows offering, rename and geography qualifications must not be generalized to Android or iOS.

**R05-S04 — [Samsung Android extension-app development overview](<https://developer.samsung.com/browser/android/extensions-dev-overview.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:56:55Z. Published: not established.

Source limitations:

- Initial retrieval was at 14:54:07 UTC; the later HTML read recovered the guide. No reliable publication date. Describes Samsung-validated extension apps, not an unrestricted desktop Chrome extension host.

**R05-U01 — [UC Browser international Android publisher listing](<https://play.google.com/store/apps/details?id=com.UCMobile.intl&hl=en>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:28:37Z. Published: not established.

Source limitations:

- Unrelated or unconfirmed reader date 2026-04-29 was rejected. International Android features, cloud allowance, VPN and AI claims cannot be applied to Chinese iOS. Performance, privacy and accuracy claims were not measured.

**R05-U02 — [UC U4 mobile engine architecture offering](<https://open-uc.uc.cn/solution/u4>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:54:09Z. Published: not established.

Source limitations:

- Extractor date 2022-09-16 was not established as publication. Vendor describes a U4 engine/app split and WebView-style layers, but mapping to every current international or iOS package, Chromium ancestry and build version remain unresolved.

**R05-U03 — [Alibaba announcement of full UCWeb acquisition](<https://www.alibabagroup.com/en-US/document-1489318545857708032>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:28:43Z. Published: 2014-06-11.

Source limitations:

- Explicit historical acquisition announcement, not a current browser-feature, platform or engine-version inventory.

**R05-U04 — [Chinese storefront publisher API: UC Browser iOS](<https://itunes.apple.com/search?term=UC%E6%B5%8F%E8%A7%88%E5%99%A8&country=cn&entity=software&limit=10>)**

Kind: release-note. Retrieved: 2026-11-21T14:54:07Z. Published: 2026-11-20T02:36:07Z.

Source limitations:

- Date is the UC Browser record&#39;s current-version release for 19.3.0.3121, not publication of the search response or initial app release. A separately named speed edition also appeared; only the identified UCWeb product supports the cited iOS claims.

**R05-U04a — [UC Browser Chinese iOS listing permalink](<https://apps.apple.com/cn/app/uc%E6%B5%8F%E8%A7%88%E5%99%A8-%E9%9A%8F%E5%BF%83%E6%90%9C-%E7%95%85%E5%BF%AB%E7%9C%8B/id586871187>)**

Kind: release-note. Retrieved: 2026-11-21T14:54:07Z. Published: 2026-11-20T02:36:07Z.

Source limitations:

- Listing URL and current-version date were returned in the Chinese publisher API response, not independently fetched. This regional edition does not establish international Android feature parity.

**R05-U05 — [UC Browser PC marketing landing page](<https://www.ucweb.com/download/pc>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:26Z. Published: not established.

Source limitations:

- Initial read at 14:26:43 UTC; fuller HTML at the recorded time. Extractor date 2025-08-26 was not a verified package release date. Landing-page presence proves neither a maintained distributable desktop build nor global discontinuation.

**R05-V01 — [Via localization repository README and FAQ](<https://github.com/tuyafeng/Via>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:59Z. Published: not established.

Source limitations:

- Undated mutable documentation describes Android system WebView, site settings and Android autofill. A localization repository does not establish that the whole app is open source or identify the iOS engine.

**R05-V02 — [Via Android publisher listing](<https://play.google.com/store/apps/details?id=mark.via.gp&hl=en>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:34:32Z. Published: not established.

Source limitations:

- Initial read at 14:28:34 UTC; structured publisher identity retrieved at the recorded later time. Current release date was not established; reviews were not feature evidence.

**R05-V03 — [Via US iOS publisher listing](<https://apps.apple.com/us/app/via-browser/id1639085829>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:26:31Z. Published: 2025-09-12.

Source limitations:

- The later 14:51:10 UTC lookup supplied the fuller record and current-version release date for 1.9.0. Apple-silicon Mac compatibility is marked Not verified for macOS, not proof of a separate desktop edition.

**R05-Y01 — [Yandex Browser Android publisher listing](<https://play.google.com/store/apps/details?id=com.yandex.browser&hl=en>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:32:25Z. Published: not established.

Source limitations:

- Current release date/version not established. Reader Mode and optional account synchronization are documented rather than tested.

**R05-Y02 — [Yandex Android-phone extension management guide](<https://yandex.com/support/browser-mobile-android-phone/en/personal-settings/extensions>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:35Z. Published: not established.

Source limitations:

- Undated current help; generic extractor year 2012 rejected. Android catalog, options, developer-loading and deletion rules do not establish iOS support or compatibility with every desktop extension.

**R05-Y02a — [Yandex Android-tablet extension management guide](<https://yandex.com/support/browser-mobile-android-tablet/en/personal-settings/extensions>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:26:38Z. Published: not established.

Source limitations:

- Undated tablet-specific help. Documentation is not a measured tablet extension compatibility matrix and is not iOS evidence.

**R05-Y03 — [Yandex Android translation, image OCR and subtitles](<https://yandex.com/support/browser-mobile-android-phone/en/navigation/translation>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:20:39Z. Published: not established.

Source limitations:

- Undated help. Image clarity, size, handwriting, supported-video and language limits apply. Subtitle setup requires leaving fullscreen/PiP before configuring, although playback may subsequently return to those modes.

**R05-Y04 — [Yandex iPhone translation and subtitle workflows](<https://yandex.com/support/browser-mobile-iphone/en/navigation/translation>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:33:00Z. Published: not established.

Source limitations:

- Undated help; inferred 1999 date rejected. Image upload in the iPhone workflow is distinct from Android in-page image translation. Supported-video/language and fullscreen/PiP setup restrictions apply.

**R05-Y05 — [Yandex iPhone installation and OS minimum](<https://yandex.com/support/browser-mobile-iphone/en/install/install>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:32:28Z. Published: not established.

Source limitations:

- Undated help documents iOS 15+. Inferred 2023 date was not treated as revision; no current mobile binary-version audit was completed.

**R05-Y06 — [Yandex browser security-program architecture description](<https://yandex.com/bugbounty/i/browser>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:33:00Z. Published: not established.

Source limitations:

- Undated program page provides Chromium-family architecture evidence, not an exact Android build or iOS engine identification. No security testing or submission was performed.

### R06 — Independent, keyboard-first, lightweight, experimental, and text browsers

**R06-D1 — [Dillo canonical project homepage](<https://dillo-browser.org/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:34:08Z. Published: not established.

Source limitations:

- Size, speed and low-memory descriptions are unbenchmarked project claims.
- Documented platform names were not validated on current OS versions.
- The project warns that dillo.org is no longer controlled by its developers.

**R06-D2 — [Dillo release 3.3.0](<https://dillo-browser.org/release/3.3.0/>)**

Kind: release-note. Retrieved: 2026-11-21T14:34:10Z. Published: 2026-04-26.

Source limitations:

- Local control, page actions and keyboard functions were not executed.
- FLTK 1.4 is experimental with documented HiDPI/Wayland visual issues.
- Examples involving external programs are documentation, not recommended or performed actions in this research.

**R06-D3 — [Dillo user manual](<https://dillo-browser.org/user_help.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:04Z. Published: not established.

- **source Revision:** Generated for v3.2.0-90-g29a46a2d

Source limitations:

- Manual identifies an earlier development version; 3.3.0 changes are sourced separately.
- The extracted 2024-01-30 date occurs in a library-version example and is not a publication date.
- Privacy defaults and rendering limitations were read, not behaviorally tested.

**R06-D4 — [Dillo release 3.2.0](<https://dillo-browser.org/release/3.2.0/>)**

Kind: release-note. Retrieved: 2026-11-21T14:24:01Z. Published: 2025-01-18.

Source limitations:

- Historical introduction of capabilities, not the latest Dillo release.
- SVG support is explicitly primitive/simple; image support depends on build options and libraries.

**R06-D5 — [Dillo canonical repository history](<https://git.dillo-browser.org/dillo/>)**

Kind: source-code. Retrieved: 2026-11-21T14:33:30Z. Published: not established.

Source limitations:

- Per-commit dates in the inspected history establish bounded activity, not the publication date of the repository index.
- No patch was executed or interpreted as a locally reproduced bug.

**R06-D6 — [Dillo former GitHub-hosted website](<https://dillo-browser.github.io/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:22:33Z. Published: not established.

Source limitations:

- Stale version listing; the page points to the new canonical domain, which lists 3.3.0.
- Not a reliable sole source for current lifecycle or release version.

**R06-F1 — [About Falkon](<https://www.falkon.org/about/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:14:32Z. Published: not established.

Source limitations:

- Broad platform and lightweight descriptions are project aims, not verified support or benchmarks.
- Extracted page metadata dated 2024-07-20 was not used as a verified publication date.

**R06-F2 — [Falkon official release feed](<https://apps.kde.org/falkon/index.xml>)**

Kind: release-note. Retrieved: 2026-11-21T14:33:23.525Z. Published: not established.

Source limitations:

- Raw RSS inspection confirmed empty publication-date fields; 26.08.3&#39;s exact release date is not established.
- Feed entries establish listed versions, not their complete changes or binary behavior.

**R06-F3 — [Falkon CHANGELOG](<https://raw.githubusercontent.com/KDE/falkon/master/CHANGELOG>)**

Kind: release-note. Retrieved: 2026-11-21T14:20:09Z. Published: not established.

- **source Revision:** master at retrieval; top entry Version 25.08.0

Source limitations:

- Recent entries are versioned but not dated; the top entry is older than the current official release feed.
- Historical plugin features were documented, not exercised on a 26.08.3 build.

**R06-F4 — [Falkon: KDE Applications](<https://apps.kde.org/falkon/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:17:31Z. Published: not established.

Source limitations:

- Linux Flatpak and Windows nightly links are not proof of equal stable-channel support on every platform.
- Legacy RSS, Flash and Click2Flash marketing copy was not certified as current functionality.
- Extracted 2026-11-05 metadata is not a verified release date.

**R06-F5 — [Falkon announcements](<https://www.falkon.org/posts/>)**

Kind: release-note. Retrieved: 2026-11-21T14:14:32Z. Published: not established.

Source limitations:

- The newest visible announcement is dated 2023-09-02; an index has no single established publication date.
- An old announcements index does not establish project inactivity; the official feed lists newer releases.

**R06-G1 — [GNOME Web README](<https://raw.githubusercontent.com/GNOME/epiphany/main/README.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:20:03Z. Published: not established.

- **source Revision:** main at retrieval; immutable commit not recorded

Source limitations:

- Moving-branch project documentation, not runtime verification.
- The GNOME-owned GitHub mirror was used after GitLab raw-document requests returned HTTP 406.
- General statements about other browsers or distribution security were not independently established.

**R06-G2 — [GNOME Web NEWS: 51.2 and earlier release entries](<https://raw.githubusercontent.com/GNOME/epiphany/main/NEWS>)**

Kind: release-note. Retrieved: 2026-11-21T14:20:03Z. Published: 2026-10-29.

- **date Scope:** 51.2 release header; capabilities from earlier entries retain their version scope.

Source limitations:

- Rolling source history was truncated beyond inspected recent entries.
- Release-note fixes do not constitute locally reproduced defects or an assessment of current security posture.

**R06-G3 — [Web: Apps for GNOME](<https://apps.gnome.org/Epiphany/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:14:25Z. Published: not established.

Source limitations:

- App-page positioning, not a measured usability result.
- Extracted metadata dated 2026-09-24 was not accepted as a content-specific publication or release date.

**R06-L1 — [Ladybird project homepage](<https://ladybird.org/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:22:22Z. Published: not established.

Source limitations:

- Roadmap statements are not completed release evidence.
- JavaScript-engine Windows CI is not a native Windows browser release.
- Homepage metadata dated 2026-10-31 was not accepted as a verified publication date.

**R06-L2 — [Ladybird README](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/README.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:32:15Z. Published: not established.

- **source Revision:** master at retrieval; immutable commit not recorded

Source limitations:

- Architecture and readiness descriptions were read, not security-tested or executed.
- Other Unix-like systems and Windows via WSL2 are documented runtime paths, not equivalent native release channels.

**R06-L3 — [Ladybird project FAQ](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/Documentation/FAQ.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:22:24Z. Published: not established.

- **source Revision:** master at retrieval; immutable commit not recorded

Source limitations:

- Future 2026/2027/2028 milestones do not establish shipped alpha, beta or stable releases.
- The FAQ explicitly leaves real-site compatibility uncertain.
- Discussion of future uBlock extension support is not implemented extension compatibility.

**R06-N1 — [Nyxt README](<https://raw.githubusercontent.com/atlas-engineer/nyxt/master/README.org>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:22:42Z. Published: not established.

- **source Revision:** master at retrieval; immutable commit not recorded

Source limitations:

- Moving-branch documentation, not tested behavior.
- Its macOS-in-development label is incomplete for 5.0.0, whose actual release includes a macOS ARM64 asset.

**R06-N2 — [Nyxt 5.0.0 developer manual](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:25:45Z. Published: not established.

- **source Revision:** 5.0.0

Source limitations:

- Version-tagged documentation, not a build or backend-parity test.
- A file-specific publication date was not supplied; the release date is recorded separately.

**R06-N3 — [Nyxt 5.0.0 release announcement](<https://nyxt-browser.com/article/release-5.0.0.org>)**

Kind: release-note. Retrieved: 2026-11-21T14:27:49Z. Published: 2026-11-15.

Source limitations:

- Source-backed release claims, not feature or extension compatibility tests.
- Full text was reused from a same-day cache approximately 334 seconds old.
- Removal of README advertising is not itself proof that every underlying history-tree implementation was removed.

**R06-N4 — [Nyxt 5.0.0 GitHub release metadata](<https://api.github.com/repos/atlas-engineer/nyxt/releases/tags/5.0.0>)**

Kind: release-note. Retrieved: 2026-11-21T14:25:48Z. Published: 2026-11-15T18:20:30Z.

Source limitations:

- Asset presence and prerelease:false are release metadata, not evidence of successful installation or broad production readiness.
- The observed assets establish Linux x86-64 and macOS ARM64 distribution only.

**R06-N5 — [Nyxt frequently asked questions](<https://nyxt.atlas.engineer/faq>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:20:16Z. Published: not established.

Source limitations:

- Undated FAQ differs from release-specific backend and platform evidence.
- Broad claims of full customizability and workflow suitability were not independently assessed.

**R06-O1 — [Orion 1.0: Browse Beyond](<https://blog.kagi.com/orion>)**

Kind: release-note. Retrieved: 2026-11-21T14:14:19Z. Published: 2025-11-25.

Source limitations:

- Kagi announcement, not an independent readiness, privacy or performance audit.
- Feature descriptions are scoped to the 1.0 announcement; its Linux/Windows roadmap is superseded by the October 2026 announcement.

**R06-O2 — [An Update on Orion for Linux and Windows](<https://blog.kagi.com/update-orion-linux-windows>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:14:15Z. Published: 2026-10-02.

Source limitations:

- Establishes Kagi&#39;s support decision, not completion of the promised source release or the existence of a successor maintainer.
- The continued operation of the Linux beta was a publisher statement, not a runtime observation.

**R06-O3 — [Orion macOS release notes: 1.1.4 (153)](<https://orionbrowser.com/updates/orion-release-notes>)**

Kind: release-note. Retrieved: 2026-11-21T14:17:19Z. Published: 2026-11-16.

- **date Scope:** The dated 1.1.4 entry, not the publication date of the entire rolling page.

Source limitations:

- The long release history was truncated after relevant recent entries.
- A list of extension and website fixes does not establish universal extension or website compatibility.
- Automatic page metadata pointing to 2025-11-25 was not used for this entry&#39;s date.

**R06-O4 — [Installing Orion](<https://help.kagi.com/orion/getting-started/installing-orion.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:14:21Z. Published: not established.

Source limitations:

- Undated installation text continues to offer Linux beta; it does not supersede the dated cessation announcement.
- Download links were read, not installed or tested.

**R06-Q1 — [qutebrowser change log](<https://qutebrowser.org/doc/changelog.html>)**

Kind: release-note. Retrieved: 2026-11-21T14:17:36Z. Published: 2026-04-03.

- **date Scope:** Latest dated released entry inspected: v3.7.0. v3.8.0 is explicitly unreleased.

Source limitations:

- The long history was truncated after relevant recent entries.
- Bundled Qt/Chromium versions apply to the described Windows/macOS releases, not every distribution package.
- The WebExtensions qualification occurs in 3.6.0 notes; no subsequent support announcement was established.

**R06-Q2 — [qutebrowser quickstart](<https://qutebrowser.org/doc/quickstart.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:17:37Z. Published: not established.

Source limitations:

- Documented interaction instructions, not measured task efficiency or assistive-technology conformance.
- Generated-page metadata dated 2026-11-21 was not treated as publication.

**R06-Q3 — [Installing qutebrowser](<https://qutebrowser.org/doc/install.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:46Z. Published: not established.

Source limitations:

- Package and backend caveats are project documentation; no package was installed.
- Old distribution examples are not a November 2026 audit of every distribution.
- Generated-page metadata was not treated as a publication date.

**R06-S1 — [Servo project homepage](<https://servo.org/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:22:27Z. Published: not established.

Source limitations:

- Performance, efficiency and memory-safety benefit claims are publisher claims, not reproduced comparisons.
- Graphics support and platform names do not imply complete or default-enabled support on every build.
- Extracted homepage metadata dated 2026-08-31 was not used as publication.

**R06-S2 — [Servo README](<https://raw.githubusercontent.com/servo/servo/main/README.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:22:30Z. Published: not established.

- **source Revision:** main at retrieval; immutable commit not recorded

Source limitations:

- Build and development documentation is not a successful local build or end-user readiness result.

**R06-S3 — [Servo latest GitHub release metadata at cutoff](<https://api.github.com/repos/servo/servo/releases/latest>)**

Kind: release-note. Retrieved: 2026-11-21T14:32:18Z. Published: 2026-11-09T12:29:13Z.

Source limitations:

- Only visible version/channel/date metadata is relied upon; the response body was truncated.
- A failed parse of the truncated response was not treated as valid derived data.
- A non-prerelease GitHub flag does not make a prototype engine a consumer-ready browser.

**R06-S4 — [Servo v0.8.0 release](<https://github.com/servo/servo/releases/tag/v0.8.0>)**

Kind: release-note. Retrieved: 2026-11-21T14:38:54Z. Published: 2026-11-09.

Source limitations:

- Generated notes were long and truncated; findings use visible entries only.
- Individual input/accessibility changes do not establish comprehensive assistive-technology conformance.
- The OpenHarmony artifact is explicitly not signed for HarmonyOS.

**R06-S5 — [March in Servo: keyboard navigation, better debugging, FreeBSD support](<https://servo.org/blog/2026/04/30/march-in-servo/>)**

Kind: release-note. Retrieved: 2026-11-21T14:25:58Z. Published: 2026-04-30.

- **date Scope:** Publication in April describes March work and Servo 0.1.0.

Source limitations:

- Version-scoped progress report, not a current all-platform feature test.
- The FreeBSD build milestone includes acknowledged issues and does not establish equal binary support.

**R06-S6 — [July in Servo: more platforms, faster canvas, web fonts in SVG](<https://servo.org/blog/2026/08/31/july-in-servo/>)**

Kind: release-note. Retrieved: 2026-11-21T14:25:58Z. Published: 2026-08-31.

- **date Scope:** Publication in August describes July work and Servo 0.5.0.

Source limitations:

- Flags and incomplete features describe 0.5.0; 0.8.0 contains subsequent selection/input work.
- Do not convert the historical interactive-selection statement into a current absence claim.
- No benchmarks, DevTools session or graphics tests were run.

**R06-W1 — [Debian-maintained w3m fork README](<https://raw.githubusercontent.com/tats/w3m/master/README>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:19Z. Published: not established.

Source limitations:

- Identifies a downstream fork, not a verified current original-upstream maintenance state.
- Documentary product description, not runtime evidence.

**R06-W2 — [w3m documentation README](<https://raw.githubusercontent.com/tats/w3m/master/doc/README>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:29:45Z. Published: 2011-01-15.

- **date Scope:** Version 0.5.3 README header, not the date of latest maintenance.

Source limitations:

- Historical platform/version list; current native macOS/Windows support was not established.
- The old README date must not be treated as proof of abandonment.

**R06-W3 — [w3m manual source](<https://raw.githubusercontent.com/tats/w3m/master/doc/w3m.1>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:32:06Z. Published: 2016-08-06.

- **date Scope:** Manpage header date, not a current software release date.

Source limitations:

- Capabilities describe the inspected maintained-fork manual; no executable was tested.
- Terminal configuration and build features affect graphics and interaction support.

**R06-W4 — [w3m tab browsing documentation](<https://raw.githubusercontent.com/tats/w3m/master/doc/README.tab>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:29:52Z. Published: not established.

Source limitations:

- Default key mappings are documentary; user overrides and terminal key handling were not tested.

**R06-W5 — [w3m sixel support documentation](<https://raw.githubusercontent.com/tats/w3m/master/doc/README.sixel>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:29:54Z. Published: 2014-11-05.

- **date Scope:** Date in the sixel extension document.

Source limitations:

- Optional extension and external dependency; neither installed nor tested.
- Documented graphics support requires a compatible build and terminal, not text-only output alone.

**R06-W6 — [tats/w3m sampled default-branch commit metadata](<https://api.github.com/repos/tats/w3m/commits?per_page=3>)**

Kind: source-code. Retrieved: 2026-11-21T14:27:36Z. Published: not established.

- **source Revision:** ee66aabc3987000c2851bce6ade4dcbb0b037d81

Source limitations:

- A three-commit sample of one fork&#39;s default branch is not exhaustive project activity evidence.
- The timestamp is a commit date, not a verified package release/publication date.
- No abandonment conclusion is drawn.

**R06-W7 — [Debian package tracker: w3m](<https://tracker.debian.org/pkg/w3m>)**

Kind: third-party. Retrieved: 2026-11-21T14:32:10Z. Published: not established.

Source limitations:

- Package presence and patch metadata do not prove active original-upstream development in November 2026.
- Extracted metadata dated 2025-12-28 was not accepted as a verified package-upload date.

**R06-W8 — [tats/w3m GitHub Releases page](<https://github.com/tats/w3m/releases>)**

Kind: release-note. Retrieved: 2026-11-21T14:25:55Z. Published: not established.

Source limitations:

- Absence of GitHub Releases entries is not absence of tags, distribution updates or overall maintenance.
- No original-upstream lifecycle conclusion follows from this page alone.

**R06-Y1 — [Lynx distribution homepage](<https://lynx.invisible-island.net/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:22:37Z. Published: not established.

Source limitations:

- Copyright years and extracted page metadata were not used as release dates.
- Text-browser identity is not modern graphical application parity.

**R06-Y2 — [Lynx 2.9.3 release page](<https://lynx.invisible-island.net/lynx2.9.3/index.html>)**

Kind: release-note. Retrieved: 2026-11-21T14:24:19Z. Published: 2026-05-27.

- **date Scope:** Release date stated in the body; the stale footer is not used.

Source limitations:

- Body and footer dates conflict; the explicit version-specific release statement supplies the date.
- Historical port links do not establish current tested support on every platform.

**R06-Y3 — [Lynx current development](<https://lynx.invisible-island.net/current/index.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:06Z. Published: not established.

Source limitations:

- Development toward 2.9.4 does not establish a released 2.9.4 build.
- Package pointers include historical resources and do not certify current OS-version compatibility.

**R06-Y4 — [Lynx users guide v2.9.3](<https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:40Z. Published: not established.

Source limitations:

- Long guide was inspected through bounded topic excerpts.
- Historical 1996 metadata is not the guide&#39;s current publication date.
- Keyboard coverage does not establish screen-reader usability or WCAG conformance.

**R06-Y5 — [Lynx manual page](<https://lynx.invisible-island.net/manpage/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:43Z. Published: not established.

Source limitations:

- Long manual returned bounded excerpts; no commands were executed.
- Extracted document metadata dated 2026-05-30 was not accepted as a verified publication date.
- Compiled protocol and option support may vary by build.

**R06-Y6 — [Lynx maintainer&#39;s Windows distribution notes](<https://invisible-island.net/lynx/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:33:30Z. Published: not established.

Source limitations:

- Build and OS-support statements belong to the maintainer, not local testing.
- Different Windows variants have different HTTPS dependencies; installer availability alone does not establish HTTPS capability.

### R07 — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings

**R07-source-365519965 — [Chome tab group has duplicate entries](<https://issues.chromium.org/issues/365519965>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:17:39Z. Published: 2024-09-09T13:37:54Z.

- **updated At:** 2026-05-30T03:01:13Z

Source limitations:

- The original report lacks a reproducible sequence and browser version; its attachment was not inspected.
- Later activity does not establish reopening; the observed current status was Fixed.

**R07-source-387203448 — [Context menu does not appear for empty tabstrip in immersive full screen when “Always Show Toolbar in Full Screen” is disabled on MacOS](<https://issues.chromium.org/issues/387203448>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:17:39Z. Published: 2025-01-02T11:38:34Z.

- **updated At:** 2026-01-05T09:48:56Z

Source limitations:

- A Stable-channel field says the issue does not reproduce, while the report&#39;s concluding note says it reproduces on Stable.
- Current status is Not reproducible; the full closing rationale was not recovered.

**R07-source-40742612 — [Ability to lock tab groups?](<https://issues.chromium.org/issues/40742612>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:44:46Z. Published: 2021-01-15T19:01:35Z.

- **updated At:** 2022-02-01T19:23:29Z

Source limitations:

- Related historical request cited by 504663589; no formal duplicate mapping from the current request was observed.
- Its Chrome 87.0.4280.141 report and Obsolete closure do not determine the current request&#39;s lifecycle.

**R07-source-443106403 — [No context menu when right-clicking on tabstring on macOS 26 immersive](<https://issues.chromium.org/issues/443106403>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:44:46Z. Published: 2025-09-05T03:20:47Z.

- **updated At:** 2026-01-09T14:33:38Z

Source limitations:

- The reproduction explicitly names Edge. The observed duplicate relationship is not an independent Chrome reproduction.
- Folded into canonical record 387203448.

**R07-source-457156374 — [Extensions installed through the registry are unable to be default\_pinned](<https://issues.chromium.org/issues/457156374>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:18:34Z. Published: 2025-11-02T16:49:31Z.

- **updated At:** 2026-10-03T03:00:44Z

Source limitations:

- The source&#39;s Chrome version value is Any, not an established affected-version range.
- The original registry recipe mixes extension identifiers and paths; it is not retained as an executable configuration.

**R07-source-469174762 — [Android: Bottom toolbar gets incorrect top inset with edge-to-edge on Omnibox result page](<https://issues.chromium.org/issues/469174762>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:18:34Z. Published: 2025-12-16T08:42:41Z.

- **updated At:** 2026-02-12T01:44:13Z

Source limitations:

- No exact browser build is supplied; the described behavior depends on edge-to-edge and bottom-toolbar configuration.
- Current flag availability, defaults, and first shipping fix version were not established.

**R07-source-475853506 — [Tab strip not scrolling after mandatory chrome update](<https://issues.chromium.org/issues/475853506>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:17:39Z. Published: 2026-01-14T18:21:44Z.

- **updated At:** 2026-11-04T20:32:14Z

Source limitations:

- Original description and current snapshot read from public HTML; complete comment history and attachments were not read.
- Initial reader-mode content was empty; direct public-data extraction recovered this record.

**R07-source-478527840 — [Chrome UI Regression: Removal of Tab Scrolling and Buttons Severely Impacts Multi-Tab Workflows](<https://issues.chromium.org/issues/478527840>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:44:46Z. Published: 2026-01-25T15:35:34Z.

- **updated At:** 2026-07-28T20:14:40Z

Source limitations:

- Folded into canonical record 475853506 rather than counted as another main issue.
- Sweeping affected-user-count and productivity claims were not independently substantiated.

**R07-source-483899631 — [Please add a feature to remove the &quot;Open Link in Split View&quot; from the right click context menu.](<https://issues.chromium.org/issues/483899631>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:18:24Z. Published: 2026-02-12T18:46:38Z.

- **updated At:** 2026-09-26T00:40:45Z

Source limitations:

- This is product/UX feedback classified upstream as a Feature Request and closed as Intended behavior.
- Current menu ordering and configuration were not inspected in a running browser; complete closure discussion was not retrieved.

**R07-source-492117351 — [Split view cannot be disabled. I keep clicking on it accidentally. I never want to use split view.](<https://issues.chromium.org/issues/492117351>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:44:46Z. Published: 2026-03-12T13:54:38Z.

- **updated At:** 2026-03-12T16:38:38Z

Source limitations:

- Folded into canonical feature request 483899631 despite this duplicate&#39;s Bug type.
- Windows and version 145.0.0.0 are reported; present-day menu behavior was not tested.

**R07-source-496291031 — [Double-clicking empty area of vertical tab strip does not zoom/maximize window on macOS](<https://issues.chromium.org/issues/496291031>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:18:24Z. Published: 2026-03-26T06:20:04Z.

- **updated At:** 2026-04-23T04:59:42Z

Source limitations:

- Fixed (Verified) is the upstream tracker status, not a local verification by this project.
- Exact first Stable build containing the fix was not established.

**R07-source-504663589 — [Feature Request: Option to lock tab groups so new tabs open outside the group](<https://issues.chromium.org/issues/504663589>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:18:33Z. Published: 2026-04-21T08:20:36Z.

- **updated At:** 2026-04-21T15:34:56Z

Source limitations:

- The current request supplies no exact browser version or operating system.
- Cross-browser prevalence and the lack of workarounds are reporter assertions, not independently verified findings.

**R07-source-540469616 — [Duplicate Google Chrome entries in macOS Local Network privacy settings](<https://issues.chromium.org/issues/540469616>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:18:34Z. Published: 2026-07-30T08:51:33Z.

- **updated At:** 2026-09-03T07:55:24Z

Source limitations:

- Exact macOS release, channel, and Chrome patch build are unspecified.
- The report does not establish whether Chrome, macOS permission bookkeeping, or multiple installations cause the duplicated entries.

**R07-source-552741956 — [Chrome 152 window rendering/input breaks after moving to another monitor and maximizing](<https://issues.chromium.org/issues/552741956>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:18:33Z. Published: 2026-08-26T16:26:44Z.

- **updated At:** 2026-11-14T23:21:06Z

Source limitations:

- Reproduction and workaround claims refer to the reporter&#39;s Linux/X11, KDE, three-monitor configuration.
- Current upstream status is Fixed (Verified); exact first public Stable binary containing all relevant fixes was not established.

**R07-source-564673918 — [UI bug: Chrome tab hover cards get stuck when cursor moves to a secondary monitor.](<https://issues.chromium.org/issues/564673918>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:18:24Z. Published: 2026-09-22T04:55:58Z.

- **updated At:** 2026-10-21T23:46:23Z

Source limitations:

- The reporter is unsure of the channel, and 153.0.0.0 does not establish an exact patch build.
- A missed mouse-exit event is a reporter hypothesis; the related record 524087116 was unresolved.

**R07-source-587381526 — [Clicking a toolbar button moves keyboard focus onto it (native toolbar buttons don&#39;t take focus on click)](<https://issues.chromium.org/issues/587381526>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:17:39Z. Published: 2026-11-18T16:53:44Z.

- **updated At:** 2026-11-20T17:51:02Z

Source limitations:

- The reproduction requires an experimental WebUI toolbar configuration; no released build number was supplied.
- Original description and current snapshot read; complete comment history was not retrieved.

**R07-source-cl-5961164 — [\[TabGroupsSync\] Cache id mapping to preserve saved state of tab groups](<https://chromium-review.googlesource.com/changes/5961164/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>)**

Kind: source-code. Retrieved: 2026-11-21T14:41:35Z. Published: 2024-10-24T21:36:25Z.

- **updated At:** 2024-10-29T01:20:25Z
- **source Revision:** 76fecc7ff6bfd49486fa617aa05d77a46ab94e93

Source limitations:

- Gerrit metadata and commit message were read; the full diff and runtime behavior were not evaluated.
- The stated trigger is an engineering explanation, not a sequence supplied in the original complaint.

**R07-source-cl-5983233 — [\[M131\]\[TabGroupsSync\] Cache id mapping to preserve saved state of tab groups](<https://chromium-review.googlesource.com/changes/5983233/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>)**

Kind: source-code. Retrieved: 2026-11-21T14:41:35Z. Published: 2024-10-31T16:50:22Z.

- **updated At:** 2024-10-31T19:00:15Z
- **source Revision:** 7706f535cc6b9c74b6e48f4bc25437d73a393e05

Source limitations:

- Establishes a merged M131 branch backport, not independent testing of a released binary.

**R07-source-cl-7903002 — [Extensions: Only re-evaluate default\_pinned for newly installed actions](<https://chromium-review.googlesource.com/changes/7903002/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>)**

Kind: source-code. Retrieved: 2026-11-21T14:44:47Z. Published: 2026-06-05T12:06:36Z.

- **updated At:** 2026-06-18T19:50:19Z
- **source Revision:** b2f3a4c8d08ea8c884b27c24eebfc0072b113610

Source limitations:

- The proposal remained NEW; neither its shipping status nor its reported regression was locally verified.
- This evidence does not reopen the original Fixed issue or create a separately confirmed issue record.

**R07-source-cl-8427141 — [\[M154\] Ozone: X11: Fix window resizing after NotifyStartupComplete()](<https://chromium-review.googlesource.com/changes/8427141/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>)**

Kind: source-code. Retrieved: 2026-11-21T14:44:47Z. Published: 2026-09-17T17:24:13Z.

- **updated At:** 2026-09-17T18:55:59Z
- **source Revision:** 8396458aadddbf810170406e3b27fa0b392c6928

Source limitations:

- This proves an M154 branch merge, not the exact first public Stable binary containing the fix.
- Other bug references in this change are not independently counted or asserted to be duplicates.

**R07-source-cl-8830787 — [WebUIToolbar: no click focus for buttons + chips](<https://chromium-review.googlesource.com/changes/8830787/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>)**

Kind: source-code. Retrieved: 2026-11-21T14:41:35Z. Published: 2026-11-17T13:32:03Z.

- **updated At:** 2026-11-20T17:50:48Z
- **source Revision:** bf051b29af88f40a8d4a3cad2851b0e8c5ad1d87

Source limitations:

- NEW means the observed proposal was unmerged; its fix language is not proof of a shipped correction.
- Other referenced issue IDs do not establish duplicate relationships and are not additional main issues.

**R07-source-fix-457156374 — [\[Extensions\] Fix default\_pinned for registry installations](<https://chromium.googlesource.com/chromium/src/+/5c9ced36765132da8c3bd8de398862a47cd082e6>)**

Kind: source-code. Retrieved: 2026-11-21T14:38:37Z. Published: 2025-12-09.

- **source Revision:** 5c9ced36765132da8c3bd8de398862a47cd082e6

Source limitations:

- Author-described race correction and test coverage were not locally executed.
- A later unmerged proposal describes an over-correction affecting persistence of a user unpin.

**R07-source-fix-469174762 — [\[E2E\] Fix top inset consumption when omnibox is active on bottom toolbar](<https://chromium.googlesource.com/chromium/src/+/dd8ba744e49b4f97caa2d3eb1ff9cb5335dc04be>)**

Kind: source-code. Retrieved: 2026-11-21T14:38:37Z. Published: 2026-01-09.

- **source Revision:** dd8ba744e49b4f97caa2d3eb1ff9cb5335dc04be

Source limitations:

- The change description was read, but its linked demonstration videos were not opened.
- Availability in a specific released Android build remains unverified.

**R07-source-fix-496291031 — [mac: Handle double-click-to-zoom on custom draggable regions](<https://chromium.googlesource.com/chromium/src/+/2be0ae48ad7c700ec9dca07e83e73407947cbad4>)**

Kind: source-code. Retrieved: 2026-11-21T14:38:37Z. Published: 2026-04-21.

- **source Revision:** 2be0ae48ad7c700ec9dca07e83e73407947cbad4

Source limitations:

- Landed source and author-described test coverage were inspected; the test was not run by this project.
- First Stable release containing the change was not established.

**R07-source-fix-552741956-initial — [Ozone: X11: Set \_NET\_STARTUP\_ID as UTF8\_STRING](<https://chromium.googlesource.com/chromium/src/+/46f7721abc728d993b52cc180bf0fe00f3401260>)**

Kind: source-code. Retrieved: 2026-11-21T14:38:37Z. Published: 2026-09-01.

- **source Revision:** 46f7721abc728d993b52cc180bf0fe00f3401260

Source limitations:

- This initial issue-linked correction is not the full fix lineage; a later geometry-cache change was also merged.

**R07-source-release-fetch-gap — [Chrome Releases: Stable Channel Update for Desktop — October 2026](<https://chromereleases.googleblog.com/2026/10/stable-channel-update-for-desktop.html>)**

Kind: release-note. Retrieved: 2026-11-21. Published: not established.

- **access Outcome:** HTTP 429; primary body not retrieved

Source limitations:

- This entry records a failed fetch, not verified release content.
- The search snippet&#39;s date and version text were not promoted to primary-source evidence; exact first Stable fix availability remains unknown.

**R07-source-split-view-help — [Use split view for multitasking in Chrome](<https://support.google.com/chrome/answer/16971124?hl=en-en&ref_topic=7439636>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:40:01Z. Published: not established.

Source limitations:

- No reliable publication or update date was exposed; the extractor&#39;s generic date was rejected.
- The documented setting disables drag-and-drop initiation; the page does not say that it removes the link context-menu command.

**R07-source-status-definitions — [Issues — Google Issue Tracker](<https://developers.google.com/issue-tracker/concepts/issues>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:20:43Z. Published: 2025-02-04.

Source limitations:

- Publication date is the page metadata date; this general documentation does not verify any particular Chrome behavior.
- Teams can use statuses differently; current issue state and source qualifications remain important.

**R07-source-tracker-status-mapping — [Public Issue Tracker client numeric status mappings](<https://www.gstatic.com/_/buganizer/_/js/k=buganizer.b.en_US.Hx_8ilZ1QCE.2018.O/am=AkAAYA/d=1/rs=AI3Ihhq_V2E_ndcb2iZwoKqX7T2bznB_BQ/m=c>)**

Kind: source-code. Retrieved: 2026-11-21T14:19:23Z. Published: not established.

Source limitations:

- Publication date is unknown and the deployed bundle URL may change.
- The client was read as text, not executed; it supplies decoding evidence rather than browser-defect evidence.

### R08 — Chrome/Chromium accessibility, performance and reliability regressions

**R08-S001 — [481634944: Regression: Ctrl+Plus/Ctrl+Minus zoom no longer announces percentage to screen readers](<https://issues.chromium.org/issues/481634944>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:31:58Z. Published: 2026-02-04T17:07:19Z.

- **modified At:** 2026-05-26T21:59:56Z

Source limitations:

- Anonymous public metadata and complete returned discussion were read; private or deleted material is outside coverage.
- Runtime results and change descriptions are upstream evidence. Attachments were not executed or independently validated.

**R08-S002 — [573260296: Regression M153: Browser hangs on focus change with web accessibility enabled, many form controls slotted into display:none containers in shadow DOM](<https://issues.chromium.org/issues/573260296>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:25:50Z. Published: 2026-10-14T11:42:34Z.

- **modified At:** 2026-11-06T09:19:23Z

Source limitations:

- Public report, follow-up verification and status were read; the ZIP fixture and recordings were not executed or independently validated.
- Related issue records were not fully read. Reported version strings are retained without inferring channel or release equivalence.

**R08-S003 — [568838775: Serious accessibility issues for screen reader users](<https://issues.chromium.org/issues/568838775>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:30:29Z. Published: 2026-10-03T17:49:09Z.

- **modified At:** 2026-10-26T19:57:21Z

Source limitations:

- Later comments narrow the initial claim to first-run behavior. Upstream testers did not reproduce the claimed failure.
- The submitted video was discussed in the record but not independently reviewed here. The identity of the initial banner remains uncertain.

**R08-S004 — [475536280: Large memory regression on Windows BETA/Stable](<https://issues.chromium.org/issues/475536280>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:27:42Z. Published: 2026-01-13T17:32:43Z.

- **modified At:** 2026-02-11T21:49:55Z

Source limitations:

- Closure depends on upstream nonpublic UMA telemetry, which was not accessed. No independently checkable population memory-growth amount was established.
- The COM-reference fix description was read in public history; this was not a code review or local memory-soak test.

**R08-S005 — [499717573: macOS PDF viewer scrolling performance regression in Chrome 146 (not present in 145)](<https://issues.chromium.org/issues/499717573>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:30:29Z. Published: 2026-04-05T22:28:23Z.

- **modified At:** 2026-09-14T16:02:34Z

Source limitations:

- The closing rationale is tentative and lacks an exact verified build. Reported frame-rate impressions are not local measurements.
- PDF corruption and later high-resolution Windows scrolling reports were distinguished in the discussion; their related records were not fully investigated.

**R08-S006 — [554057759: All Chromium windows freeze during fullscreen/multi-monitor transitions](<https://issues.chromium.org/issues/554057759>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:30:29Z. Published: 2026-08-29T11:23:21Z.

- **modified At:** 2026-11-19T19:55:51Z

Source limitations:

- The original intermittent freeze was not reproduced by upstream testers, although a related mixed-refresh-rate throttling defect was acknowledged.
- Hardware and mitigation results belong to public reporters; no local GPU, display, browser flag or registry experiment was performed.

**R08-S007 — [339313336: Browser Print API crops the content during PDF print](<https://issues.chromium.org/issues/339313336>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:31:10Z. Published: 2024-05-08T10:22:58Z.

- **modified At:** 2025-12-15T23:13:53Z

Source limitations:

- Public reproduction evidence is historical, from 2024. Current-version persistence is unknown despite the open tracker status.
- The fixture was not executed. The thread mixes discussion of missing end content with a related background/overflow painting problem.

**R08-S008 — [382394786: Printing only an iframe as PDF shows incorrect title as file name](<https://issues.chromium.org/issues/382394786>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:31:10Z. Published: 2024-12-05T13:38:40Z.

- **modified At:** 2026-11-19T18:16:55Z

Source limitations:

- The most recent update request is not a current-build reproduction. No merged or shipped fix was established.
- Sample code and linked change descriptions were read as documentary evidence only.

**R08-S009 — [500975618: Extension iframe causes Promises to stall in all extension pages after navigation](<https://issues.chromium.org/issues/500975618>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:27:42Z. Published: 2026-04-09T14:18:35Z.

- **modified At:** 2026-06-16T22:37:53Z

Source limitations:

- The first remote kill-switch announcement was corrected later in the discussion; it must not be treated as proof of a successful rollout.
- The minimal extension was not installed or executed here. Test and release results are upstream claims.

**R08-S010 — [521708068: DevTools is blocked by policy unexpectedly - main bug](<https://issues.chromium.org/issues/521708068>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:31:57Z. Published: 2026-06-09T09:48:06Z.

- **modified At:** 2026-10-19T08:48:40Z

Source limitations:

- The description was not present in the retrieved metadata; the available public discussion supplies the reproduction and fix history.
- Some status changes were administrative. PDF-only verification does not establish that every managed-extension inspection scenario is fixed.
- No actual enterprise policy export, account, authentication data or local browser configuration was inspected for this lane.

**R08-S011 — [519243472: Can&#39;t open downloaded file when Downloads folder is a UNC path (malformed \\?\\ path on open)](<https://issues.chromium.org/issues/519243472>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:31:57Z. Published: 2026-06-03T08:19:31Z.

- **modified At:** 2026-11-02T20:12:37Z

Source limitations:

- The record was reopened and fixed again; a November follow-up is not upstream-confirmed recurrence of the identical malformed-path defect.
- Some upstream test attempts lacked a working writable share, limiting their value as negative tests. No share or download workflow was tested locally.
- The metadata&#39;s Verified In field includes the original reported bad build, so dated comments are used to qualify verification.

**R08-S012 — [522564418: current window freeze and no mouse/keyboard action allowed](<https://issues.chromium.org/issues/522564418>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:33:06Z. Published: 2026-06-11T17:39:51Z.

- **modified At:** 2026-11-13T14:25:30Z

Source limitations:

- The canonical record contains two separately described drag defects and fixes. Later general freezing reports are not automatically recurrence of either one.
- The broad OS field was expanded automatically for a Blink release blocker; it is not evidence of testing every platform.
- Public minimal-reproduction descriptions were read, but fixtures, diagnostic dumps and recordings were not executed or independently validated.

**R08-S013 — [559795247: The web app freezes when repeatedly dragging and dropping items.](<https://issues.chromium.org/issues/559795247>)**

Kind: issue-tracker. Retrieved: 2026-11-21T14:31:10Z. Published: 2026-09-11T09:45:07Z.

- **modified At:** 2026-09-21T08:33:36Z

Source limitations:

- This is a formal duplicate of 522564418, not a separately counted defect family.
- Upstream reports differ on symptoms and mitigations; the canonical discussion is needed to separate the two drag fixes from residual freezes.

**R08-S014 — [Chrome Releases: Stable Channel Update for Desktop, November 9, 2026](<https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_018223192.html>)**

Kind: release-note. Retrieved: 2026-11-21T14:33:56Z. Published: 2026-11-09.

Source limitations:

- The article establishes that dated release announcement, not the newest available release on the investigation date or deployment on any particular device.
- Reader-mode extraction returned only a date/footer at 14:33:06Z; direct anonymous HTTP reading recovered the substantive article body at the recorded retrieval time.
- Security items in the release note were outside this reliability lane and were not investigated.

**R08-S015 — [Known issues when migrating to Manifest V3](<https://developer.chrome.com/docs/extensions/develop/migrate/known-issues>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:17:55Z. Published: not established.

- **page Date Metadata:** 2026-09-09

Source limitations:

- The fetcher&#39;s date metadata does not distinguish original publication from an update, so publishedAt remains null.
- The page documents resolved platform gaps and intentional lifecycle design; it is not an inventory of current open regressions.
- Memory-efficiency rationale is a vendor design claim, not a benchmark performed here.

**R08-S016 — [Chrome Enterprise and Education release notes: Chrome browser notes moved](<https://support.google.com/chrome/a/answer/7679408?hl=en&co=CHROME_ENTERPRISE._Product%3DChromeBrowser>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:26:22Z. Published: not established.

- **page Date Metadata:** 2026-11-11

Source limitations:

- Original publication versus update date was not established; the fetcher-supplied page date is retained separately.
- The relocation notice was read, but the destination&#39;s full release/fix list was not read in this lane.

**R08-S017 — [Google Issue Tracker: Issues, issue types and status definitions](<https://developers.google.com/issue-tracker/concepts/issues>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:21:58Z. Published: not established.

- **page Date Metadata:** 2025-02-04

Source limitations:

- The original publication date was not independently established from the page-date metadata.
- General tracker definitions explain status semantics; they do not prove a particular browser defect is fixed on a particular installation.

### R09 — Chromium desktop toolbar menus and customization: source-only audit

**R09-S00 — [Chromium source snapshot metadata](<https://github.com/chromium/chromium/commit/04d6a2d2bd0626ad343da0ef33e812e1360b44bd>)**

Kind: source-code. Retrieved: 2026-11-21T14:13:08.318Z. Published: not established.

- **committed At:** 2026-11-21T14:04:56Z
- **source Revision:** 04d6a2d2bd0626ad343da0ef33e812e1360b44bd

Source limitations:

- Public HTTP HEAD metadata supplied the revision and commit timestamp. Commit time is not a release date; an independent publication date was not established.

**R09-S01 — [Pinned toolbar button context-menu model](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_action_toolbar_button_menu_model.cc>)**

Kind: source-code. Retrieved: 2026-11-21. Published: not established.

- **coverage:** Full body: pin state, visibility, enablement and dispatch.

Source limitations:

- Only date-level retrieval precision was retained. Source inspection only; original file publication date was not established.

**R09-S02 — [Pinned toolbar context-menu model browser tests](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_action_toolbar_button_menu_model_browsertest.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:15:26.382Z. Published: not established.

- **coverage:** Full body: defaults and child actions.

Source limitations:

- Tests were read, not run. An earlier HTTP 503 was followed by this successful pinned read. Original publication date was not established.

**R09-S03 — [Responsive toolbar overflow-menu implementation](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc>)**

Kind: source-code. Retrieved: 2026-11-21. Published: not established.

- **coverage:** Full body: ordering, model creation, dispatch and live status-indicator changes.

Source limitations:

- Only date-level retrieval precision was retained. Menu survival and platform behavior were not tested. Original publication date was not established.

**R09-S04 — [Responsive overflow-menu delegate and observer declarations](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.h>)**

Kind: source-code. Retrieved: 2026-11-21T14:15:56.366Z. Published: not established.

- **coverage:** Full body: delegate/observer API and stored state.

Source limitations:

- Declarations were inspected without executing a menu. Original publication date was not established.

**R09-S05 — [Responsive overflow-menu unit tests](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu_unittest.cc>)**

Kind: source-code. Retrieved: 2026-11-21. Published: not established.

- **coverage:** Full body across initial response and retained output: order, separators, enabled state, invocation and indicators.

Source limitations:

- Only date-level retrieval precision was retained. Tests were read, not run; coverage statements are limited to this file. Original publication date was not established.

**R09-S06 — [Toolbar controller overflow delegation](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/toolbar_controller.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:15:56.356Z. Published: not established.

- **coverage:** Focused constructor, overflow detection, dispatch and enabled delegation; especially lines 112-191 and 433-634.

Source limitations:

- Focused excerpts, not a complete controller or cancellation-path audit. Original publication date was not established.

**R09-S07 — [Pinned toolbar actions container](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_toolbar_actions_container.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:18:02.982Z. Published: not established.

- **coverage:** Focused observers, model changes, pinning, overflow and ordering; portions through line 789.

Source limitations:

- The entire drag, layout and lifetime behavior was not traced. Original publication date was not established.

**R09-S08 — [Native Home button implementation](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/home_button.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:15:56.378Z. Published: not established.

- **coverage:** Full body: context-model wiring and Home/undo handling.

Source limitations:

- Native source behavior was inspected without runtime or platform validation. Original publication date was not established.

**R09-S09 — [Home button browser tests](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/home_button_browsertest.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:23:14.761Z. Published: not established.

- **coverage:** Full body: UI invocation and ordinary context-menu pin/unpin behavior.

Source limitations:

- Tests were read, not run; absence of a managed test here is not repository-wide absence. Original publication date was not established.

**R09-S10 — [Customize Toolbar browser-side handler](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:16:41.724Z. Published: not established.

- **coverage:** Full body: mappings, enumeration, subscriptions, mutation and reset.

Source limitations:

- No live policy, eligibility or WebUI behavior was tested. Original publication date was not established.

**R09-S11 — [Customize Toolbar handler observation ownership](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.h>)**

Kind: source-code. Retrieved: 2026-11-21T14:28:28.212Z. Published: not established.

- **coverage:** Full body: handler interface and subscriptions.

Source limitations:

- Declaration inspection does not establish all external notification paths. Original publication date was not established.

**R09-S12 — [Customize Toolbar Mojo data and callback contract](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar.mojom>)**

Kind: source-code. Retrieved: 2026-11-21T14:20:00.741Z. Published: not established.

- **coverage:** Full body: action metadata, pinning methods and notifications.

Source limitations:

- Interface contract, not observed UI behavior. Original publication date was not established.

**R09-S13 — [Customize Toolbar handler unit tests](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler_unittest.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:16:42.089Z. Published: not established.

- **coverage:** Focused pinning, notification, reset and detached-browser test bodies in lines 164-403.

Source limitations:

- Tests were read, not run; some setup and surrounding lines were omitted from the displayed excerpts. Original publication date was not established.

**R09-S14 — [Customize Toolbar handler browser tests](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler_browsertest.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:17:25.271Z. Published: not established.

- **coverage:** Full body: listing, visibility, icon size and initial feature-dependent listing tests.

Source limitations:

- Tests were read, not run. No production hidden-to-visible transition was established. Original publication date was not established.

**R09-S15 — [Pinned toolbar actions preference model](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/toolbar/pinned_toolbar/pinned_toolbar_actions_model.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:16:42.104Z. Published: not established.

- **coverage:** Focused initialization, update guards, movement, preference notification, reset/default and migration paths.

Source limitations:

- No live synchronization or policy reset was exercised. Original publication date was not established.

**R09-S16 — [Customize Toolbar WebUI state and callbacks](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side_panel/customize_chrome/customize_toolbar/toolbar.ts>)**

Kind: source-code. Retrieved: 2026-11-21T14:20:00.740Z. Published: not established.

- **coverage:** Full body: rendering state, callbacks, icon invariant and reset announcement.

Source limitations:

- Source assertions were not executed; generated or optimized resource behavior was not inspected. Original publication date was not established.

**R09-S17 — [Customize Toolbar interactive and managed row template](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side_panel/customize_chrome/customize_toolbar/toolbar.html.ts>)**

Kind: source-code. Retrieved: 2026-11-21T14:20:00.671Z. Published: not established.

- **coverage:** Full body: editable/managed branches and labels.

Source limitations:

- Rendered output and accessibility tree were not measured. Original publication date was not established.

**R09-S18 — [Customize Toolbar WebUI test fixtures and tests](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/test/data/webui/side_panel/customize_chrome/toolbar_test.ts>)**

Kind: source-code. Retrieved: 2026-11-21T14:23:14.615Z. Published: not established.

- **coverage:** Full body: data fixtures, structure, icons, toggle invocation and callbacks.

Source limitations:

- Tests were not run. An earlier filtered response was empty and was not counted as inspection. Original publication date was not established.

**R09-S19 — [Customize Chrome WebUI Toolbar test registration](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/test/data/webui/side_panel/customize_chrome/customize_chrome_browsertest.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:27:53.842Z. Published: not established.

- **coverage:** Focused lines 75-92, including Toolbar test registration.

Source limitations:

- Test wiring was read; no test binary was built or run. Original publication date was not established.

**R09-S20 — [ShowHomeButton policy-to-preference mapping](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/policy/configuration_policy_handler_list_factory.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:20:00.712Z. Published: not established.

- **coverage:** Focused lines 784-799; Home policy mapping only.

Source limitations:

- This is not a general enterprise-policy audit. Original publication date was not established.

**R09-S21 — [Checked-in ShowHomeButton policy definition](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/policy/resources/templates/policy_definitions/Startup/ShowHomeButton.yaml>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:28:28.215Z. Published: not established.

- **coverage:** Full body: upstream policy description and schema.

Source limitations:

- Describes intended policy semantics, not measured UI behavior. A guessed alternative path returned 404 before directory discovery located this file. Original publication date was not established.

**R09-S22 — [Preference service effective reads and user-store writes](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_service.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:21:39.909Z. Published: not established.

- **coverage:** Focused getters, modifiability, setters and user-store writes; supplemental lines 568-640.

Source limitations:

- Only supporting preference paths were reviewed. No real profile or managed configuration was accessed. Original publication date was not established.

**R09-S23 — [Preference value-store resolution and notifications](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_value_store.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:22:44.350Z. Published: not established.

- **coverage:** Full body: priority resolution and preference notifications.

Source limitations:

- Source inspection, not a live policy test. Original publication date was not established.

**R09-S24 — [Preference store priority contract](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_value_store.h>)**

Kind: source-code. Retrieved: 2026-11-21T14:23:14.907Z. Published: not established.

- **coverage:** Focused lines 35-135: precedence enum and lookup contract.

Source limitations:

- Only the priority contract was inspected. Original publication date was not established.

**R09-S25 — [Simple menu model stored identity and activation](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/menus/simple_menu_model.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:21:41.422Z. Published: not established.

- **coverage:** Focused stored command/label, dynamic state and activation paths.

Source limitations:

- This does not establish platform-specific menu cancellation behavior. Original publication date was not established.

**R09-S26 — [Menu model adapter view copying and delegation](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/views/controls/menu/menu_model_adapter.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:18:02.745Z. Published: not established.

- **coverage:** Focused type/label/view copying, dispatch, enablement and checked queries; supplemental lines 112-186.

Source limitations:

- Not all menu-controller or accessibility code was inspected. Original publication date was not established.

**R09-S27 — [Views menu delegate default enablement](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/views/controls/menu/menu_delegate.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:28:28.215Z. Published: not established.

- **coverage:** Focused lines 52-88: default enablement and dispatch.

Source limitations:

- Defaults alone do not prove a runtime menu-state defect. Original publication date was not established.

**R09-S28 — [cr-toggle state, ARIA and event handling](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/webui/resources/cr_elements/cr_toggle/cr_toggle.ts>)**

Kind: source-code. Retrieved: 2026-11-21T14:21:39.204Z. Published: not established.

- **coverage:** Focused state/ARIA updates, click propagation, pointer and keyboard activation.

Source limitations:

- No actual keyboard or screen-reader session was run. Original publication date was not established.

**R09-S29 — [WebUI assertion implementation](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/webui/resources/js/assert.ts>)**

Kind: source-code. Retrieved: 2026-11-21T14:26:06.757Z. Published: not established.

- **coverage:** Full body, including the false-assertion throw.

Source limitations:

- Build transformations and test-harness rejection handling were not investigated. Original publication date was not established.

**R09-S30 — [ActionItem notifications and invocation guard](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/actions/actions.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:29:23.445Z. Published: not established.

- **coverage:** Focused base/list notifications and ActionItem state/dispatch, portions of lines 1-471.

Source limitations:

- Not all action producers or coupled eligibility transitions were traced. Original publication date was not established.

**R09-S31 — [Chromium issue 359863838: inaccessible overflow overlap lead](<https://issues.chromium.org/359863838>)**

Kind: issue-tracker. Retrieved: 2026-11-21. Published: not established.

- **body Verified:** false
- **retrieval Outcome:** Normal fetch returned only a Chromium sign-in shell after discovery through free search.

Source limitations:

- The issue body, comments, status, resolution and exact relationship to R09-H1 were not verified. This is an overlap lead, not a confirmed duplicate or a submission by this project. Only date-level precision was retained for the body-fetch attempt.

**R09-S32 — [Bounded Customize Toolbar handler history at the audited revision](<https://api.github.com/repos/chromium/chromium/commits?sha=04d6a2d2bd0626ad343da0ef33e812e1360b44bd&path=chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc&per_page=6>)**

Kind: source-code. Retrieved: 2026-11-21T14:24:01.464Z. Published: not established.

- **coverage:** Six recent handler history entries, primarily feature, icon and panel changes.

Source limitations:

- A bounded history response is not a complete duplicate or regression search. Original publication dates for the aggregate response were not established.

### R10 — Installed Chrome executable: bounded static evidence

**R10-S01 — [WINTRUST\_DATA structure](<https://learn.microsoft.com/en-us/windows/win32/api/wintrust/ns-wintrust-wintrust_data>)**

Kind: vendor-documentation. Retrieved: 2026-11-21. Published: not established.

- **updated At:** 2024-11-20T01:20:00Z
- **content Date:** 2018-12-05

Source limitations:

- Publisher content date and update timestamp are metadata; original publication date was not independently established.

**R10-S02 — [WinVerifyTrust function](<https://learn.microsoft.com/en-us/windows/win32/api/wintrust/nf-wintrust-winverifytrust>)**

Kind: vendor-documentation. Retrieved: 2026-11-21. Published: not established.

- **updated At:** 2025-08-15T19:07:00Z
- **content Date:** 2018-12-05

Source limitations:

- Explains the Windows API contract; not a vendor attestation about this Chrome artifact.

**R10-S03 — [Verifying the signature of a PE file](<https://learn.microsoft.com/en-us/windows/win32/seccrypto/example-c-program--verifying-the-signature-of-a-pe-file>)**

Kind: vendor-documentation. Retrieved: 2026-11-21. Published: not established.

- **updated At:** 2025-08-15T20:20:00Z
- **content Date:** 2018-05-31

Source limitations:

- Embedded-signature coverage differs from full-file SHA-256 coverage.

**R10-S04 — [WINTRUST\_FILE\_INFO structure](<https://learn.microsoft.com/en-us/windows/win32/api/wintrust/ns-wintrust-wintrust_file_info>)**

Kind: vendor-documentation. Retrieved: 2026-11-21. Published: not established.

- **updated At:** 2024-02-22T19:54:00Z
- **content Date:** 2018-12-05

Source limitations:

- Describes the file-handle verification interface, not the acquisition provenance of the inspected artifact.

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
