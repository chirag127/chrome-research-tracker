# Issue and proposal evidence

[CATALOG](<CATALOG.md>) · [FEATURES](<FEATURES.md>) · [ISSUES](<ISSUES.md>) · [AGENTS-LEDGER](<AGENTS-LEDGER.md>) · [RECOMMENDATIONS](<RECOMMENDATIONS.md>)

Generated from the saved JSON research shards. Rendering performs no research, source refresh, browser tests, builds, or submissions.

**Recovery notice:** Loaded lanes labelled as non-byte-exact reconstructions: [R01](<data/lanes/R01.json>), [R03](<data/lanes/R03.json>), [R04](<data/lanes/R04.json>), [R07](<data/lanes/R07.json>), [R08](<data/lanes/R08.json>), [R09](<data/lanes/R09.json>). See the `recovery` metadata in each linked JSON shard for provenance and limitations. Reconstruction does not establish fresh research or testing; original source dates and saved lane status retain their meanings.

Loaded snapshot: **10 lane shards**, **47 browser records**, **286 feature records**, **38 issue records**, **403 source records**. Counts describe records, not unique products or independently verified claims.

Saved lane status: **10 complete**, **0 partial**, out of **10 loaded shards**. These are the shards’ own scope/status labels; “complete” does not mean a complete project, exhaustive catalog, finished validation, or completed publication. Missing shards are outside this snapshot.

Recorded source-retrieval days: **2026-11-21**. Exact retrieval and original publication dates appear with the cited sources; no generation timestamp is substituted.

Documentary descriptions and upstream observations do not establish local behavior or universal availability. A missing browser, feature, or issue is not evidence of absence. Chrome parity and new-defect claims require their own evidence.

| Recorded reproduction | Count |
| --- | --- |
| not-run | 27 |
| source-only | 11 |
| local-reproduced | 0 |

| Recorded submission status | Count |
| --- | --- |
| existing-upstream | 24 |
| not-submitted | 14 |
| blocked | 0 |
| submitted | 0 |

Counts reflect saved issue records. An existing upstream URL is not a submission by this project. A recorded submission URL is shown as a saved receipt reference; the renderer does not verify receipts.

## Existing upstream reports (22)

Existing reports retain the upstream status observed in the saved evidence. Open and closed reports are distinguished below; neither status establishes present-day local behavior.

<a id="R07-issue-365519965"></a>

### R07-issue-365519965 — Chome tab group has duplicate entries

Lane: [R07](<data/lanes/R07.json>) — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Fixed | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/365519965>).

Reported versions (source claims): None recorded.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Mac
- **component:** **id:** 1457512<br>**name:** UI &gt; Browser &gt; TopChrome &gt; TabStrip &gt; TabGroups<br>**sourceIds:** [R07-source-365519965](<https://issues.chromium.org/issues/365519965>)
- **status Observed At:** 2026-11-21T14:17:39Z
- **fix Evidence:** **attribution:** Fix author<br>**branch:** main<br>**changeStatus:** MERGED<br>**claim:** Caching the restored group&#39;s saved identity prevents duplicate groups on restart or a crash during startup before the sync service connects it.<br>**mergedAt:** 2024-10-29T01:20:25Z<br>**sourceIds:** [R07-source-cl-5961164](<https://chromium-review.googlesource.com/changes/5961164/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>)<br>**url:** [https://chromium-review.googlesource.com/c/chromium/src/+/5961164](<https://chromium-review.googlesource.com/c/chromium/src/+/5961164>)<br>**branch:** refs/branch-heads/6778<br>**changeStatus:** MERGED<br>**disposition:** M131 backport of the same change; issue metadata also lists Merged-131 and Merged-6778.<br>**mergedAt:** 2024-10-31T19:00:15Z<br>**sourceIds:** [R07-source-365519965](<https://issues.chromium.org/issues/365519965>), [R07-source-cl-5983233](<https://chromium-review.googlesource.com/changes/5983233/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>)<br>**url:** [https://chromium-review.googlesource.com/c/chromium/src/+/5983233](<https://chromium-review.googlesource.com/c/chromium/src/+/5983233>)

**Reported workflow (not executed by this renderer)**

No steps recorded.

**Expected / proposed outcome:** The original reporter wants one tab-group entry per topic rather than duplicate entries.

**Observation as recorded (upstream-reported):** The original complaint reports duplicate tab-group entries without a reproduction sequence. A linked fix describes a startup interval between restoring a group and connecting it to its saved identity.

**Submission:** existing-upstream. Existing Fixed upstream record with a documented backport; this project has not submitted a report.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/365519965](<https://issues.chromium.org/issues/365519965>).

Sources: [R07-source-365519965](<https://issues.chromium.org/issues/365519965>), [R07-source-cl-5961164](<https://chromium-review.googlesource.com/changes/5961164/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>), [R07-source-cl-5983233](<https://chromium-review.googlesource.com/changes/5983233/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>).

Issue limitations:

- The original report contains no steps or browser version; engineering trigger information is attributed to the fixing change.
- The attachment and full comment history were not inspected.
- Activity in 2026 does not override the current Fixed status. No local reproduction or exact first shipped Stable binary was verified.

<a id="R07-issue-387203448"></a>

### R07-issue-387203448 — Context menu does not appear for empty tabstrip in immersive full screen when “Always Show Toolbar in Full Screen” is disabled on MacOS

Lane: [R07](<data/lanes/R07.json>) — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Won&#39;t fix (Not reproducible) | not-run | upstream-reported / medium |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/387203448>).

Reported versions (source claims): 131.0.6778.205<br>132.0.6834.57<br>133.0.6905.0<br>133.0.6933.0.

Locally tested versions recorded by this project: None recorded.

- **platforms:** macOS, Intel and Arm Macs
- **component:** **id:** 1457200<br>**name:** UI &gt; Browser &gt; FullScreen<br>**sourceIds:** [R07-source-387203448](<https://issues.chromium.org/issues/387203448>)
- **status Observed At:** 2026-11-21T14:17:39Z

**Reported workflow (not executed by this renderer)**

1. Disable Always Show Toolbar in Full Screen from the View menu.
2. Enter fullscreen.
3. Right-click a tab and compare its context menu with right-clicking an empty area of the tab strip.

**Expected / proposed outcome:** The QA report expects an empty-tab-strip context menu to appear in immersive fullscreen as it does outside that mode.

**Observation as recorded (upstream-reported):** The original QA report claims the tab context menu appears but the empty-strip context menu does not, with 5/5 reproduction and no Windows/Linux reproduction. The current tracker state nevertheless closes the issue as Not reproducible.

**Submission:** existing-upstream. Existing closed canonical upstream record; this project has not submitted a report.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/387203448](<https://issues.chromium.org/issues/387203448>).

Sources: [R07-source-387203448](<https://issues.chromium.org/issues/387203448>), [R07-source-443106403](<https://issues.chromium.org/issues/443106403>).

Issue limitations:

- The original Stable field says No while its final note includes Stable among reproducing builds.
- The source lists macOS 11.4, 13.4, 14.6, and 15.2 configurations, but none was tested locally.
- The full closing rationale was not recovered. This is not a confirmed current open defect.

<a id="R07-issue-457156374"></a>

### R07-issue-457156374 — Extensions installed through the registry are unable to be default\_pinned

Lane: [R07](<data/lanes/R07.json>) — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Fixed | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/457156374>).

Reported versions (source claims): None recorded.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Windows 11; procedure also mentions Windows 10
- **component:** **id:** 1456781<br>**name:** Platform &gt; Extensions &gt; API<br>**sourceIds:** [R07-source-457156374](<https://issues.chromium.org/issues/457156374>)
- **status Observed At:** 2026-11-21T14:18:34Z
- **fix Evidence:** **attribution:** Fix author<br>**claim:** Notifies the toolbar model when deferred extension management settings load so the install-before-policy race can apply the default pin.<br>**disposition:** Landed original correction, published 2025-12-09.<br>**reviewUrl:** [https://chromium-review.googlesource.com/c/chromium/src/+/7109981](<https://chromium-review.googlesource.com/c/chromium/src/+/7109981>)<br>**sourceIds:** [R07-source-fix-457156374](<https://chromium.googlesource.com/chromium/src/+/5c9ced36765132da8c3bd8de398862a47cd082e6>)<br>**url:** [https://chromium.googlesource.com/chromium/src/+/5c9ced36765132da8c3bd8de398862a47cd082e6](<https://chromium.googlesource.com/chromium/src/+/5c9ced36765132da8c3bd8de398862a47cd082e6>)<br>**attribution:** Proposed-fix author; regression not locally reproduced<br>**changeStatus:** NEW<br>**claim:** The author says re-evaluating all toolbar actions over-corrected the race and undid user unpins; the proposal limits deferred re-evaluation to pending or newly installed actions.<br>**disposition:** Unmerged follow-up; does not reopen the original Fixed tracker record.<br>**sourceIds:** [R07-source-cl-7903002](<https://chromium-review.googlesource.com/changes/7903002/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>)<br>**url:** [https://chromium-review.googlesource.com/c/chromium/src/+/7903002](<https://chromium-review.googlesource.com/c/chromium/src/+/7903002>)

**Reported workflow (not executed by this renderer)**

1. The reporter deploys an extension through the Windows registry and applies a default\_pinned toolbar policy.
2. Launch Chrome and approve or enable the extension in the extension menu.
3. Inspect whether its icon is pinned beside the omnibox.

**Expected / proposed outcome:** The reporter expects the registry-installed extension to pin by default on approval. The later proposed fix describes this policy as a one-time default that should preserve a user&#39;s subsequent unpin.

**Observation as recorded (upstream-reported):** The original report says default pinning fails while force pinning and a Web Store installation work. A landed change addresses policy arriving after installation. A later unmerged proposal says that correction can re-pin a user-unpinned action on unrelated policy updates.

**Submission:** existing-upstream. Existing Fixed upstream record with an unmerged follow-up proposal; this project has not submitted a report.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/457156374](<https://issues.chromium.org/issues/457156374>).

Sources: [R07-source-457156374](<https://issues.chromium.org/issues/457156374>), [R07-source-cl-7903002](<https://chromium-review.googlesource.com/changes/7903002/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>), [R07-source-fix-457156374](<https://chromium.googlesource.com/chromium/src/+/5c9ced36765132da8c3bd8de398862a47cd082e6>).

Issue limitations:

- No exact reported browser version or local reproduction is available; Any was not converted into a fictitious version range.
- The original configuration example mixes extension identifiers and registry paths, so steps here are an attributed summary rather than an executable recipe.
- The later regression is a proposed-fix author&#39;s claim, not a separately confirmed open issue or a shipped correction.

<a id="R07-issue-469174762"></a>

### R07-issue-469174762 — Android: Bottom toolbar gets incorrect top inset with edge-to-edge on Omnibox result page

Lane: [R07](<data/lanes/R07.json>) — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Fixed | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/469174762>).

Reported versions (source claims): None recorded.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Android Chromium
- **component:** **id:** 1456116<br>**name:** UI &gt; Browser &gt; Mobile &gt; EdgeToEdge<br>**sourceIds:** [R07-source-469174762](<https://issues.chromium.org/issues/469174762>)
- **status Observed At:** 2026-11-21T14:18:34Z
- **configuration:** The description identifies EdgeToEdgeOnTop and a bottom-positioned toolbar; its listed procedure enables Customize the New Tab Page V2 and Bottom Toolbar V2.
- **fix Evidence:** **attribution:** Fix author<br>**claim:** Updates ToolbarPhone and Omnibox to observe edge-to-edge changes and choose padding based on the active scenario instead of forwarding the NTP&#39;s inset consumption unconditionally.<br>**disposition:** Landed source change, published 2026-01-09.<br>**reviewUrl:** [https://chromium-review.googlesource.com/c/chromium/src/+/7267746](<https://chromium-review.googlesource.com/c/chromium/src/+/7267746>)<br>**sourceIds:** [R07-source-fix-469174762](<https://chromium.googlesource.com/chromium/src/+/dd8ba744e49b4f97caa2d3eb1ff9cb5335dc04be>)<br>**url:** [https://chromium.googlesource.com/chromium/src/+/dd8ba744e49b4f97caa2d3eb1ff9cb5335dc04be](<https://chromium.googlesource.com/chromium/src/+/dd8ba744e49b4f97caa2d3eb1ff9cb5335dc04be>)

**Reported workflow (not executed by this renderer)**

1. Enable Customize the New Tab Page V2 and Bottom Toolbar V2 in the source&#39;s Chromium configuration, then restart.
2. Open a new tab page.
3. Use Menu &gt; Customize new tab page &gt; Appearance &gt; Chrome colors and select a color.
4. Tap the new-tab-page search box to enter omnibox results and inspect the toolbar and status-bar insets.

**Expected / proposed outcome:** The source expects correct status-bar inset consumption without extra blank padding above a bottom-positioned toolbar or suggestions overlapping the status-bar area.

**Observation as recorded (upstream-reported):** The source reports a status-bar-height blank space above the bottom toolbar and incorrectly extended omnibox content. The tracker is Fixed and a landed change corrects scenario-dependent padding.

**Submission:** existing-upstream. Existing Fixed upstream report; this project has not submitted a report.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/469174762](<https://issues.chromium.org/issues/469174762>).

Sources: [R07-source-469174762](<https://issues.chromium.org/issues/469174762>), [R07-source-fix-469174762](<https://chromium.googlesource.com/chromium/src/+/dd8ba744e49b4f97caa2d3eb1ff9cb5335dc04be>).

Issue limitations:

- Exact reported build, current flag availability, and first shipping fix build are unknown.
- No local reproduction or viewing of linked demonstration videos was performed.

<a id="R07-issue-475853506"></a>

### R07-issue-475853506 — Tab strip not scrolling after mandatory chrome update

Lane: [R07](<data/lanes/R07.json>) — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-open | In Progress (Accepted) | not-run | upstream-reported / medium |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/475853506>).

Reported versions (source claims): 144.0.7559.59<br>144.0.0.0.

Locally tested versions recorded by this project: None recorded.

- **platforms:** macOS, arm64 in original report<br>Linux and Windows additionally listed in duplicate 478527840
- **component:** **id:** 1456118<br>**name:** UI &gt; Browser &gt; TopChrome &gt; TabStrip<br>**sourceIds:** [R07-source-475853506](<https://issues.chromium.org/issues/475853506>)
- **status Observed At:** 2026-11-21T14:17:39Z

**Reported workflow (not executed by this renderer)**

1. Open enough tabs to require tab-strip scrolling.
2. Attempt to scroll the tab strip and locate tabs that have moved outside the visible strip.

**Expected / proposed outcome:** The reporter expects the tab strip to scroll so the active tab and other overflowed tabs remain directly reachable.

**Observation as recorded (upstream-reported):** The original source reports that scrolling does not work, the current tab may have no visible strip indicator, and hidden tabs require searching.

**Submission:** existing-upstream. Existing canonical upstream record; this project has not submitted a report.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/475853506](<https://issues.chromium.org/issues/475853506>).

Sources: [R07-source-475853506](<https://issues.chromium.org/issues/475853506>), [R07-source-478527840](<https://issues.chromium.org/issues/478527840>).

Issue limitations:

- No local reproduction; version 144.0.7559.59 is the original macOS report, while 144.0.0.0 and broader platforms come from the duplicate.
- Later discussion about unified tab strips does not establish that this current In Progress record is fixed.
- Complete comments, attachments, and the unresolved related ID 475858683 were not verified.

<a id="R07-issue-496291031"></a>

### R07-issue-496291031 — Double-clicking empty area of vertical tab strip does not zoom/maximize window on macOS

Lane: [R07](<data/lanes/R07.json>) — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Fixed (Verified) | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/496291031>).

Reported versions (source claims): 148.0.7754.0.

Locally tested versions recorded by this project: None recorded.

- **platforms:** macOS
- **component:** **id:** 1456118<br>**name:** UI &gt; Browser &gt; TopChrome &gt; TabStrip<br>**sourceIds:** [R07-source-496291031](<https://issues.chromium.org/issues/496291031>)
- **status Observed At:** 2026-11-21T14:18:24Z
- **channel:** Canary
- **fix Evidence:** **attribution:** Fix author<br>**claim:** AppKit treats custom draggable regions differently from the native title bar. The change adds preference-aware double-click handling and a browser test; its description includes Fill, Maximize, and Minimize.<br>**disposition:** Landed source change, published 2026-04-21.<br>**reviewUrl:** [https://chromium-review.googlesource.com/c/chromium/src/+/7749225](<https://chromium-review.googlesource.com/c/chromium/src/+/7749225>)<br>**sourceIds:** [R07-source-fix-496291031](<https://chromium.googlesource.com/chromium/src/+/2be0ae48ad7c700ec9dca07e83e73407947cbad4>)<br>**url:** [https://chromium.googlesource.com/chromium/src/+/2be0ae48ad7c700ec9dca07e83e73407947cbad4](<https://chromium.googlesource.com/chromium/src/+/2be0ae48ad7c700ec9dca07e83e73407947cbad4>)

**Reported workflow (not executed by this renderer)**

1. Enable vertical tabs from the tab-strip context menu.
2. Set the macOS window-title-bar double-click action to Fill or Zoom.
3. Double-click empty space below the last vertical tab.
4. Compare with double-clicking empty space to the right of horizontal tabs and with the Windows behavior.

**Expected / proposed outcome:** The reporter expects the empty vertical strip to honor the system&#39;s title-bar double-click action, matching the horizontal-strip and Windows comparisons.

**Observation as recorded (upstream-reported):** The report says double-clicking empty vertical-strip space does nothing on macOS. The current issue snapshot is Fixed (Verified), and a landed change addresses custom draggable regions.

**Submission:** existing-upstream. Existing Fixed (Verified) upstream record; this project has not submitted a report.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/496291031](<https://issues.chromium.org/issues/496291031>).

Sources: [R07-source-496291031](<https://issues.chromium.org/issues/496291031>), [R07-source-fix-496291031](<https://chromium.googlesource.com/chromium/src/+/2be0ae48ad7c700ec9dca07e83e73407947cbad4>).

Issue limitations:

- Fixed (Verified) is upstream status, not local verification.
- The source&#39;s tests and OS comparisons were not run by this project; exact first Stable availability remains unknown.

<a id="R07-issue-540469616"></a>

### R07-issue-540469616 — Duplicate Google Chrome entries in macOS Local Network privacy settings

Lane: [R07](<data/lanes/R07.json>) — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-open | New | not-run | upstream-reported / medium |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/540469616>).

Reported versions (source claims): 150.0.0.0.

Locally tested versions recorded by this project: None recorded.

- **platforms:** macOS; exact OS release unspecified
- **component:** **id:** 1457469<br>**name:** UI &gt; Browser<br>**sourceIds:** [R07-source-540469616](<https://issues.chromium.org/issues/540469616>)
- **status Observed At:** 2026-11-21T14:18:34Z

**Reported workflow (not executed by this renderer)**

1. Use Chrome and update it across multiple versions.
2. Inspect System Settings &gt; Privacy &amp; Security &gt; Local Network for repeated Google Chrome entries.
3. In the reporter&#39;s procedure, compare access to a local HTTP service from Chrome and a command-line client with Chrome&#39;s permission entries disabled and enabled.

**Expected / proposed outcome:** The reporter expects one stable, identifiable Chrome Local Network permission entry across updates and consistent use of the active entry.

**Observation as recorded (upstream-reported):** The reporter describes multiple indistinguishable Chrome permission entries and ERR\_ADDRESS\_UNREACHABLE in Chrome while a command-line request succeeds. Enabling Chrome permission entries reportedly restores access.

**Submission:** existing-upstream. Existing upstream user report; this project has not submitted a report.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/540469616](<https://issues.chromium.org/issues/540469616>).

Sources: [R07-source-540469616](<https://issues.chromium.org/issues/540469616>).

Issue limitations:

- No local reproduction, patch version, exact macOS release, or independently validated root cause is available.
- New status does not establish that Chrome alone owns the defect or that duplicated entries are the sole cause of failed access.
- Personal network addresses and screenshots are unnecessary to the finding and are not included.

<a id="R07-issue-552741956"></a>

### R07-issue-552741956 — Chrome 152 window rendering/input breaks after moving to another monitor and maximizing

Lane: [R07](<data/lanes/R07.json>) — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Fixed (Verified) | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/552741956>).

Reported versions (source claims): 152.0.7977.64.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Linux/X11, KDE Plasma, three monitors
- **component:** **id:** 1457167<br>**name:** UI &gt; Browser &gt; TopChrome &gt; Frame<br>**sourceIds:** [R07-source-552741956](<https://issues.chromium.org/issues/552741956>)
- **status Observed At:** 2026-11-21T14:18:33Z
- **channel:** Stable
- **fix Evidence:** **attribution:** Fix author<br>**claim:** Corrects the X11 \_NET\_STARTUP\_ID property type to UTF8\_STRING.<br>**disposition:** Initial landed issue-linked fix, published 2026-09-01.<br>**reviewUrl:** [https://chromium-review.googlesource.com/c/chromium/src/+/8301193](<https://chromium-review.googlesource.com/c/chromium/src/+/8301193>)<br>**sourceIds:** [R07-source-fix-552741956-initial](<https://chromium.googlesource.com/chromium/src/+/46f7721abc728d993b52cc180bf0fe00f3401260>)<br>**url:** [https://chromium.googlesource.com/chromium/src/+/46f7721abc728d993b52cc180bf0fe00f3401260](<https://chromium.googlesource.com/chromium/src/+/46f7721abc728d993b52cc180bf0fe00f3401260>)<br>**attribution:** Follow-up fix author<br>**branch:** refs/branch-heads/8037<br>**changeStatus:** MERGED<br>**claim:** A later M154 backport preserves geometry-cache observations so bounds updates continue after startup notification, and corrects cold-start startup-token handling.<br>**mergedAt:** 2026-09-17T18:55:59Z<br>**sourceIds:** [R07-source-cl-8427141](<https://chromium-review.googlesource.com/changes/8427141/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>)<br>**url:** [https://chromium-review.googlesource.com/c/chromium/src/+/8427141](<https://chromium-review.googlesource.com/c/chromium/src/+/8427141>)

**Reported workflow (not executed by this renderer)**

1. Start the reported Chrome 152 build in a KDE Plasma X11 session with three monitors.
2. Open a new window from the taskbar so that it opens on the right monitor.
3. Move the window to the center monitor and maximize it.
4. Compare the rendered controls with their actual mouse-input locations.

**Expected / proposed outcome:** The reporter expects correct rendering and alignment between visible UI controls and their input coordinates after moving and maximizing the window.

**Observation as recorded (upstream-reported):** The original report describes shifted or clipped content and mismatched click coordinates. The observed tracker status is Fixed (Verified), with an initial X11 property-type change and a later merged geometry-cache correction.

**Submission:** existing-upstream. Existing Fixed (Verified) upstream regression record; this project has not submitted a report.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/552741956](<https://issues.chromium.org/issues/552741956>).

Sources: [R07-source-552741956](<https://issues.chromium.org/issues/552741956>), [R07-source-cl-8427141](<https://chromium-review.googlesource.com/changes/8427141/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>), [R07-source-fix-552741956-initial](<https://chromium.googlesource.com/chromium/src/+/46f7721abc728d993b52cc180bf0fe00f3401260>), [R07-source-release-fetch-gap](<https://chromereleases.googleblog.com/2026/10/stable-channel-update-for-desktop.html>).

Issue limitations:

- No local reproduction or comparison run was performed; Fixed (Verified) belongs to the upstream record.
- The later M154 branch merge is verified, but the release-note fetch failed with HTTP 429, leaving exact first public Stable availability unresolved.
- Related issue IDs listed in the main record or changes were not all read and are not asserted to be confirmed duplicates.

<a id="R07-issue-564673918"></a>

### R07-issue-564673918 — UI bug: Chrome tab hover cards get stuck when cursor moves to a secondary monitor.

Lane: [R07](<data/lanes/R07.json>) — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-open | New | not-run | upstream-reported / medium |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/564673918>).

Reported versions (source claims): 153.0.0.0.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Windows, vertically stacked monitors
- **component:** **id:** 1456768<br>**name:** UI &gt; Browser &gt; TopChrome &gt; TabStrip &gt; HoverCards<br>**sourceIds:** [R07-source-564673918](<https://issues.chromium.org/issues/564673918>)
- **status Observed At:** 2026-11-21T14:18:24Z

**Reported workflow (not executed by this renderer)**

1. Arrange the secondary display directly above the primary display in OS display settings.
2. Open Chrome with multiple tabs on the lower, primary display.
3. Hover an inactive tab until its hover card appears.
4. Move the pointer rapidly upward across the display boundary to the secondary display.

**Expected / proposed outcome:** The reporter expects the tab hover card to dismiss after the pointer leaves the tab strip for another display.

**Observation as recorded (upstream-reported):** The reporter says the hover card stays visible over browser content and the address bar. Re-hovering the strip and moving into page content reportedly clears it.

**Submission:** existing-upstream. Existing upstream user report; this project has not submitted a report.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/564673918](<https://issues.chromium.org/issues/564673918>).

Sources: [R07-source-564673918](<https://issues.chromium.org/issues/564673918>).

Issue limitations:

- New is an observed tracker state, not vendor confirmation of the reporter&#39;s diagnosis.
- Channel is reported as Not sure; the patch version, cause, and recovery action were not locally verified.
- Related issue 524087116 could not be parsed and remains outside the main inventory.

<a id="R07-issue-587381526"></a>

### R07-issue-587381526 — Clicking a toolbar button moves keyboard focus onto it (native toolbar buttons don&#39;t take focus on click)

Lane: [R07](<data/lanes/R07.json>) — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-open | Assigned | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/587381526>).

Reported versions (source claims): None recorded.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Windows<br>Linux
- **component:** **id:** 1984361<br>**name:** UI &gt; Browser &gt; WebUI Browser &gt; Productionization<br>**sourceIds:** [R07-source-587381526](<https://issues.chromium.org/issues/587381526>)
- **status Observed At:** 2026-11-21T14:17:39Z
- **configuration:** Source reproduction enables the experimental WebUI toolbar using --enable-features=InitialWebUI,WebUIToolbar.
- **fix Evidence:** **attribution:** Proposed-fix author<br>**changeStatus:** NEW<br>**claim:** The author proposes retaining omnibox focus and avoiding app-menu clicks unselecting omnibox text.<br>**disposition:** Proposed fix; not merged at retrieval.<br>**sourceIds:** [R07-source-cl-8830787](<https://chromium-review.googlesource.com/changes/8830787/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>)<br>**url:** [https://chromium-review.googlesource.com/c/chromium/src/+/8830787](<https://chromium-review.googlesource.com/c/chromium/src/+/8830787>)

**Reported workflow (not executed by this renderer)**

1. In the source&#39;s experimental WebUI toolbar configuration, focus the page or omnibox.
2. Click a toolbar button such as Back, Reload, Home, the app menu, or an extension.
3. Press Tab or an arrow key.

**Expected / proposed outcome:** According to the engineering report, native Views toolbar buttons retain focus in the page or omnibox after a mouse click; subsequent keyboard input continues there.

**Observation as recorded (upstream-reported):** The engineering report says the clicked WebUI button receives focus, Tab and arrows navigate toolbar controls, the omnibox popup closes, and an arrow-key path can assert.

**Submission:** existing-upstream. Existing upstream engineering report; this project has not submitted a report.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/587381526](<https://issues.chromium.org/issues/587381526>).

Sources: [R07-source-587381526](<https://issues.chromium.org/issues/587381526>), [R07-source-cl-8830787](<https://chromium-review.googlesource.com/changes/8830787/detail?o=CURRENT_REVISION&o=CURRENT_COMMIT>).

Issue limitations:

- No exact browser version or local reproduction is available.
- This is not evidence that the default native toolbar has the same defect.
- The source&#39;s claimed manual assertion was not reproduced by this project, and the linked proposal is not a shipped-fix receipt.

<a id="R08-01"></a>

### R08-01 — Regression: Ctrl+Plus/Ctrl+Minus zoom no longer announces percentage to screen readers

Lane: [R08](<data/lanes/R08.json>) — Chrome/Chromium accessibility, performance and reliability regressions.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Fixed (Verified) | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/481634944>).

Reported versions (source claims): 144.0.7559.110<br>144.0.7559.133<br>145.0.7632.45<br>146.0.7655.3<br>146.0.7671.0.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Windows 10 Home/Pro<br>Windows 11 Pro<br>macOS<br>Linux Debian
- **category:** accessibility
- **status Observed At:** 2026-11-21T14:22:32Z
- **regression Assessment:** Upstream testing reported cross-platform reproduction and a bisect boundary of 144.0.7546.0 good versus 144.0.7547.0 bad.
- **upstream Verification:** **outcome:** Upstream comments report the expected percentage announcements; the earlier verification preceded an additional stale-value fix.<br>**platforms:** Windows 11<br>macOS<br>Linux Debian<br>**sourceIds:** [R08-S001](<https://issues.chromium.org/issues/481634944>)<br>**versions:** 146.0.7678.0<br>147.0.7692.0<br>145.0.7632.109<br>146.0.7680.16<br>**outcome:** Comment 35 reports successful verification and explicitly says the Extended Stable build was unavailable for Linux verification.<br>**platforms:** Windows 11<br>macOS 15.7.4<br>**sourceIds:** [R08-S001](<https://issues.chromium.org/issues/481634944>)<br>**url:** [https://issues.chromium.org/issues/481634944\#comment35](<https://issues.chromium.org/issues/481634944#comment35>)<br>**versions:** 144.0.7559.225
- **verification Still Needed:** On a current supported build, compare the exact spoken/Braille value with the new zoom value for both increasing and decreasing zoom.<br>Test the keyboard path itself; the presence of speech or a working settings control is insufficient.

**Reported workflow (not executed by this renderer)**

1. Reported workflow: open Chrome and any webpage, then enable a screen reader; the original Windows report names NVDA, JAWS and Narrator.
2. Press Ctrl+Plus and Ctrl+Minus repeatedly and compare the announced percentage with the actual new zoom value.
3. Distinguish no percentage announcement from the intermediate failure that announces the previous percentage.

**Expected / proposed outcome:** The screen reader announces the new zoom percentage, such as 110% or 120%, after each keyboard zoom change.

**Observation as recorded (upstream-reported):** Upstream reporters and testers heard menu labels such as Normal or Reset instead of the percentage. An intermediate fix could announce the previous zoom value. Later upstream tests reported the correct percentages on specific fixed builds; this project ran no browser test.

**Submission:** existing-upstream. Existing upstream report reviewed as evidence; this project did not submit or modify it.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/481634944](<https://issues.chromium.org/issues/481634944>).

Sources: [R08-S001](<https://issues.chromium.org/issues/481634944>).

Issue limitations:

- Historical upstream-fixed regression; no present-day local failure is established.
- All testedVersions remain empty because verification was performed upstream, not by this project.
- Linked change descriptions were read from issue history, not independently built or reviewed.

<a id="R08-02"></a>

### R08-02 — Regression M153: Browser hangs on focus change with web accessibility enabled, many form controls slotted into display:none containers in shadow DOM

Lane: [R08](<data/lanes/R08.json>) — Chrome/Chromium accessibility, performance and reliability regressions.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Fixed (Verified) | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/573260296>).

Reported versions (source claims): 153.0.8010.47 and later, according to the original report.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Windows Server 2022<br>Windows Server 2025<br>Windows 11 in an upstream negative test
- **category:** accessibility-performance
- **status Observed At:** 2026-11-21T14:22:32Z
- **regression Assessment:** Reporter identified Chrome 152 as good and 153.0.8010.47 as affected. Exact applicability to other platforms or all later builds is not established.
- **upstream Verification:** **outcome:** Reporter could not reproduce in comment 10; the verifier thanked the reporter and closed the issue.<br>**publishedAt:** 2026-11-02<br>**sourceIds:** [R08-S002](<https://issues.chromium.org/issues/573260296>)<br>**url:** [https://issues.chromium.org/issues/573260296\#comment10](<https://issues.chromium.org/issues/573260296#comment10>)<br>**versions:** 159.0.8130.0<br>**outcome:** Reporter also could not reproduce in comment 12.<br>**publishedAt:** 2026-11-06<br>**sourceIds:** [R08-S002](<https://issues.chromium.org/issues/573260296>)<br>**url:** [https://issues.chromium.org/issues/573260296\#comment12](<https://issues.chromium.org/issues/573260296#comment12>)<br>**versions:** 157.0.8101.39
- **verification Still Needed:** Retain cross-site focus changes, hidden nested slots, high control counts and enabled accessibility when validating the target build.<br>Confirm inclusion of the relevant fix rather than assuming all higher-looking version strings or channels are equivalent.<br>Use accessible operation as the acceptance condition rather than turning accessibility off.

**Reported workflow (not executed by this renderer)**

1. Reported fixture: reproducer.zip supplies a server for a parent page on localhost port 8000 and a cross-site iframe on 127.0.0.1.
2. Enable Web accessibility; the report also lists native accessibility API support, text metrics and extended properties.
3. In the fixture, select Tab1, focus an input outside the iframe, then select Tab0.
4. Retain many form controls with closed shadow roots, nested slots and display:none containers; the reporter varies hidden-control count to change failure frequency.

**Expected / proposed outcome:** Focus moves normally between the cross-site iframe and top page without a browser-wide stall.

**Observation as recorded (upstream-reported):** The reporter described all tabs and windows hanging for 15 to 60 seconds and stated that enabling web accessibility alone was sufficient. A tester initially could not reproduce; the reporter later reported successful operation on specific newer builds. No local reproduction was run.

**Submission:** existing-upstream. Existing upstream report and later verification were reviewed; no report was submitted by this project.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/573260296](<https://issues.chromium.org/issues/573260296>).

Sources: [R08-S002](<https://issues.chromium.org/issues/573260296>).

Issue limitations:

- The fixture was not downloaded or executed; the scaling and stall-duration observations belong to the reporter.
- The precise common cause with linked issues and the exact release/channel mapping of reported fixed builds were not established.

<a id="R08-03"></a>

### R08-03 — Serious accessibility issues for screen reader users: narrowed Linux first-run/Orca report

Lane: [R08](<data/lanes/R08.json>) — Chrome/Chromium accessibility, performance and reliability regressions.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-open | Assigned | not-run | upstream-reported / medium |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/568838775>).

Reported versions (source claims): 154.0.0.0 (build field)<br>153 onward (later reporter claim).

Locally tested versions recorded by this project: None recorded.

- **platforms:** Linux with Orca<br>Linux Debian in upstream testing
- **category:** accessibility
- **status Observed At:** 2026-11-21T14:23:55Z
- **regression Assessment:** Reporter labels it a regression from version 153; upstream reproduction and the actual defective component remain unconfirmed.
- **verification Still Needed:** Prioritize an isolated first-run Orca scenario, recording the initial UI&#39;s accessible role/name, focus and keyboard behavior.<br>Determine whether the browser actually launches before attributing silence to accessibility.<br>Do not present this report as a confirmed Chrome 154 browser-wide screen-reader outage.

**Reported workflow (not executed by this renderer)**

1. Reported workflow: start Orca, then launch Chrome/Chromium for the first time.
2. Inspect whether the initial banner is announced and can be operated, and whether a browser window actually launches.
3. The reporter said Space or Enter dismissed the banner; subsequent normal browsing was accessible. This workaround was not verified here.

**Expected / proposed outcome:** First-run UI is announced and operable with Orca, allowing users to enter the browser without discovering an unannounced dismissal by chance.

**Observation as recorded (upstream-reported):** The original reporter described complete screen-reader silence but then narrowed the failure to a first-run banner. Upstream testers could read normal pages and could not reproduce the reported failure. The latest substantive developer comment questioned whether the video instead showed a browser-launch problem.

**Submission:** existing-upstream. Existing public report, not a project submission; further reproduction is still needed.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/568838775](<https://issues.chromium.org/issues/568838775>).

Sources: [R08-S003](<https://issues.chromium.org/issues/568838775>).

Issue limitations:

- Confirmed public report, but an upstream-unconfirmed runtime defect with no fix or duplicate relationship established.
- Normal-page speech is not sufficient to validate the narrowed first-run scenario.
- No local browser or screen-reader actions were performed.

<a id="R08-04"></a>

### R08-04 — Large memory regression on Windows BETA/Stable

Lane: [R08](<data/lanes/R08.json>) — Chrome/Chromium accessibility, performance and reliability regressions.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Fixed (Verified) | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/475536280>).

Reported versions (source claims): 143 (upstream Beta/Stable telemetry assessment).

Locally tested versions recorded by this project: None recorded.

- **platforms:** Windows
- **category:** performance-memory
- **status Observed At:** 2026-11-21T14:23:55Z
- **regression Assessment:** Upstream telemetry assessment points to the M142-to-M143 transition. This is not a claim that all Chrome workloads leak memory.
- **upstream Verification:** **outcome:** Developer identified these as landed backport builds and assessed field improvement using nonpublic telemetry. This is not a locally reproduced pass or a public minimal-fixture result.<br>**sourceIds:** [R08-S004](<https://issues.chromium.org/issues/475536280>)<br>**url:** [https://issues.chromium.org/issues/475536280\#comment21](<https://issues.chromium.org/issues/475536280#comment21>)<br>**versions:** 144.0.7559.114<br>145.0.7632.20
- **verification Still Needed:** Obtain a small relevant public reproduction or derive one from the actual code in a separately scoped engineering task.<br>For an accessibility/caret/focus soak, observe process private memory as well as managed or JavaScript heap; a heap-only check may miss the described allocation category.

**Reported workflow (not executed by this renderer)**

1. No public minimal step-by-step reproduction was supplied by this telemetry-focused record.
2. The upstream investigation compared Windows Beta/Stable private memory footprint around the M142-to-M143 transition and investigated accessibility-related COM references.
3. A relevant public fixture or code-derived scenario is still needed before executing a meaningful local memory-soak test.

**Expected / proposed outcome:** Accessibility-related COM references are eventually released and the relevant workload does not leak memory without bound.

**Observation as recorded (upstream-reported):** Upstream reported a private-memory-footprint regression not visible in UMA heap-profiler metrics. A linked fix description identifies three AccessibleObjectFromWindow callers failing to release returned COM references. The developer closed the regression based on nonpublic UMA graphs after backports; no local memory measurements were taken.

**Submission:** existing-upstream. Existing upstream telemetry investigation reviewed as documentary evidence; no project submission.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/475536280](<https://issues.chromium.org/issues/475536280>).

Sources: [R08-S004](<https://issues.chromium.org/issues/475536280>).

Issue limitations:

- No public, independently checkable memory-growth amount or tested acceptance threshold was established.
- The fix mechanism and population-level improvement are upstream claims of different kinds; linked code was not built or locally tested.
- Nonpublic telemetry and diagnostics were not accessed or included.

<a id="R08-05"></a>

### R08-05 — macOS PDF viewer scrolling performance regression in Chrome 146 (not present in 145)

Lane: [R08](<data/lanes/R08.json>) — Chrome/Chromium accessibility, performance and reliability regressions.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Fixed | not-run | upstream-reported / medium |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/499717573>).

Reported versions (source claims): Google Chrome 146.0.7680.178<br>Ungoogled Chromium 146.0.7680.80<br>Helium 0.10.7.1 / Chromium 146.0.7680.164<br>Helium 0.10.8.1 / Chromium 146.0.7680.177<br>Chrome 152.0.7977.64 (later high-resolution Windows report, not established as the same defect).

Locally tested versions recorded by this project: None recorded.

- **platforms:** macOS 15.7.4 on an M1 Max MacBook Pro<br>Windows in a separately scoped later comment
- **category:** pdf-performance
- **status Observed At:** 2026-11-21T14:23:55Z
- **regression Assessment:** Reporter comparisons described Chromium-based 144/145 builds as good and 146 builds as bad. Bisect builds behaved differently, so build/feature-state dependence remained relevant.
- **verification Still Needed:** Compare identical PDFs, zoom, window size, display refresh rate, power state and browser feature configuration, measuring frame pacing and input latency.<br>Check image corruption as a separate outcome rather than assuming the blending fix resolves every PDF performance complaint.

**Reported workflow (not executed by this renderer)**

1. Reported workflow: open a PDF in the built-in viewer and scroll with the trackpad, comparing otherwise equivalent versions and conditions.
2. Original sample: https://arxiv.org/pdf/2604.02315 .
3. A later image-heavy sample uses pages 7 to 9 of https://pages.cs.wisc.edu/\~bart/542-s2026/exercises/CORS.pdf .
4. Evaluate frame pacing and input responsiveness separately from the distinct rendering-corruption reports.

**Expected / proposed outcome:** PDF scrolling and trackpad response retain their prior smoothness under comparable document, display, zoom and browser conditions.

**Observation as recorded (upstream-reported):** The reporter perceived approximately 120-fps-like scrolling before the change and 30-fps-like scrolling afterward, with more trackpad latency. Upstream testers initially could not reproduce. The record was later closed with a tentative improvement assessment and no exact verified build; these impressions are not local measurements.

**Submission:** existing-upstream. Existing upstream report; closure and uncertainty are retained without claiming project testing or submission.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/499717573](<https://issues.chromium.org/issues/499717573>).

Sources: [R08-S005](<https://issues.chromium.org/issues/499717573>).

Issue limitations:

- Historically closed record with a weakly specified verification basis, not proof all present-day PDF performance issues are resolved.
- No PDFs were opened in a local browser and no frame-rate measurements were made.
- Related records and the linked change were not independently tested.

<a id="R08-06"></a>

### R08-06 — All Chromium windows freeze during fullscreen/multi-monitor transitions

Lane: [R08](<data/lanes/R08.json>) — Chrome/Chromium accessibility, performance and reliability regressions.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-open | New | not-run | upstream-reported / medium |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/554057759>).

Reported versions (source claims): Brave / Chromium 152.0.7977.64<br>Windows build 26200.9278<br>NVIDIA driver 596.49 and other tested driver versions.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Windows with high-refresh-rate/multiple displays<br>NVIDIA RTX 5070 Ti in the original report<br>NVIDIA RTX 5080 in later reports
- **category:** platform-reliability
- **status Observed At:** 2026-11-21T14:23:55Z
- **regression Assessment:** Reporter labels this a regression across multiple Chromium-based browsers and drivers. A specific introductory build or universal GPU/platform scope is not established.
- **verification Still Needed:** Use a high-refresh multi-monitor Windows scenario, including longer video viewing before transitions and enough attempts for an intermittent failure.<br>Track paint, input, audio and cursor separately; preserve the distinction between a frozen browser and an invisible cursor.<br>Validate any candidate fix on the original symptom before treating the related throttling change as a solution.

**Reported workflow (not executed by this renderer)**

1. Reported setup: a 2560x1440 240-Hz primary display and a 1920x1200 60-Hz secondary display.
2. Play a YouTube video on the primary display, enter fullscreen, then exit fullscreen; some reports say watching longer before exiting makes failure more likely.
3. Alternatively, keep the video on the primary display while detaching another tab and moving the new window to the secondary display.
4. Repeat sufficiently to observe the intermittent problem, distinguishing all-window visual updates, input responsiveness, audio and cursor behavior.

**Expected / proposed outcome:** All windows remain responsive and continue rendering through fullscreen and cross-display transitions.

**Observation as recorded (upstream-reported):** The original reporter described all windows in one browser instance stopping visual updates, with video freezing and audio sometimes continuing briefly. Large window resizing sometimes restored rendering. Upstream testers did not reproduce this freeze, but later acknowledged a related mixed-refresh-rate/independent-flip throttling defect.

**Submission:** existing-upstream. Existing public upstream report reviewed; no project submission or local reproduction.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/554057759](<https://issues.chromium.org/issues/554057759>).

Sources: [R08-S006](<https://issues.chromium.org/issues/554057759>).

Issue limitations:

- Original freeze remains upstream-unconfirmed despite a public report and related engineering finding.
- DirectComposition/MPO workarounds are reporter observations, not validated general recommendations.
- No local GPU/display testing, flag changes or registry changes occurred.

<a id="R08-07"></a>

### R08-07 — Browser Print API crops the content during PDF print

Lane: [R08](<data/lanes/R08.json>) — Chrome/Chromium accessibility, performance and reliability regressions.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-open | New | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/339313336>).

Reported versions (source claims): 124.0.0.0 (build field)<br>124.0.6367.207<br>125.0.6422.60<br>126.0.6478.8<br>126.0.6468.2<br>127.0.6490.0.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Windows 10<br>macOS 14.4.1<br>Linux Debian
- **category:** printing-pdf
- **status Observed At:** 2026-11-21T14:23:55Z
- **regression Assessment:** Disputed: the reporter distinguished newly missing note 10 from older background/overflow artifacts, while triage treated the problem as non-regression based on older-version behavior.
- **verification Still Needed:** Recheck the exact fixture on a current supported build before prioritizing a code fix.<br>Verify last-page content markers in the generated PDF; page count and print-media emulation alone cannot prove complete output.<br>Keep clipping separate from background and overflow painting artifacts.

**Reported workflow (not executed by this renderer)**

1. Reported fixture: use the attached ZIP/README and open the root HTML for its multi-page selected canvas layout.
2. Focus the iframe document, enable CSS print-media emulation and invoke window.print().
3. Select landscape orientation; this essential condition was added in comment 7.
4. Compare generated PDF content with the expected page, specifically the final yellow note numbered 10.

**Expected / proposed outcome:** All selected content, including the final numbered note, appears in the generated landscape PDF.

**Observation as recorded (upstream-reported):** Upstream testing in 2024 reproduced missing end content in landscape PDFs even though print-media emulation showed the expected content. The tracker remains open, but no current-build persistence was established by this research.<br><br>Recovered context from retained lane-08.md, R08-07 (upstream documentary evidence):<br>Dates: Filed 2024-05-08; metadata modified 2025-12-15; last substantive displayed comment 2024-09-12. Metadata retrieved 2026-11-21 14:23:55Z; full discussion retrieved 14:31:10Z.<br>Classification / status: Bug; New, open, but current-release persistence is unknown. Regression classification is disputed/ambiguous in the thread: the reporter distinguishes newly missing content from older painting artifacts, while triage labels it non-regression.<br>Platform/version: Build field 124.0.0.0. Upstream reproduced in Windows 10, macOS 14.4.1, and Debian on Stable 125.0.6422.60, Beta 126.0.6478.8, Dev 126.0.6468.2, and Canary 127.0.6490.0.<br>Fix/duplicate: No fix, fixed build, or formal duplicate is established. Related painting issue https://issues.chromium.org/issues/339322841 is referenced but not established as the same defect.

**Submission:** existing-upstream. Existing upstream printing report; no project submission or claim of current local reproduction.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/339313336](<https://issues.chromium.org/issues/339313336>).

Sources: [R08-S007](<https://issues.chromium.org/issues/339313336>).

Issue limitations:

- Open upstream status is current documentary evidence; all runtime reproduction evidence preserved here is historical.
- No fix, fixed release or formal duplicate was established, and no local print test was run.

<a id="R08-08"></a>

### R08-08 — Printing only an iframe as PDF shows incorrect title as file name

Lane: [R08](<data/lanes/R08.json>) — Chrome/Chromium accessibility, performance and reliability regressions.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-open | In Progress (Accepted) | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/382394786>).

Reported versions (source claims): 131.0.6778.85<br>131.0.6778.87<br>132.0.6834.32<br>133.0.6847.2<br>133.0.6878.0<br>121 (upstream older-version comparison)<br>144.0.7559.109.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Windows 11<br>macOS 14.7<br>Linux Debian
- **category:** printing-pdf
- **status Observed At:** 2026-11-21T14:23:55Z
- **regression Assessment:** Upstream triaged as non-regression after reproducing on older M121. The tracker type is Bug despite the requested behavior improvement; it is not counted as a feature request.
- **verification Still Needed:** Test frame title present, absent and changed immediately before printing.<br>Check filename selection separately for Save as PDF and the system print dialog, and separately from preview headers.<br>Establish current-build behavior and actual change status before claiming a fix or workaround.

**Reported workflow (not executed by this renderer)**

1. Reported sample: https://jsfiddle.net/6jt3kzgw/ creates an iframe whose srcdoc document has a title distinct from the parent page.
2. Focus the iframe and invoke iframe.contentWindow.print().
3. Choose Save as PDF and compare the suggested filename with the iframe and parent titles.
4. Inspect the print-preview header separately, because it may already use the correct frame title.

**Expected / proposed outcome:** When printing a titled iframe, the suggested PDF filename uses that iframe&#39;s title; the report proposes falling back to the parent title when no frame title is present.

**Observation as recorded (upstream-reported):** Upstream reproduction found that the parent/tab title becomes the suggested PDF filename even when the print-preview header has the iframe&#39;s correct title. A later reporter still saw the behavior in Chrome 144.0.7559.109. November&#39;s update request is not a new current-build reproduction.<br><br>Recovered context from retained lane-08.md, R08-08 (upstream documentary evidence):<br>Dates: Filed 2024-12-05; modified 2026-11-19. Metadata retrieved 2026-11-21 14:23:55Z; full discussion retrieved 14:31:10Z.<br>Classification / status: Bug, upstream triaged as non-regression; In Progress (Accepted) since 2026-02-12. A desired behavior is stated, but the actual tracker type is Bug, not Feature Request.<br>Platform/version: Original build field 131.0.6778.85; upstream reproduced 131.0.6778.87 on macOS 14.7, Windows 11, and Debian, as well as Beta/Dev/Canary 132–133 and older M121. A reporter still observed it on 144.0.7559.109 in February 2026. November&#39;s update request is not a new current-build reproduction.<br>Fix/history: A proposed change is linked at https://chromium-review.googlesource.com/7567300; its presence is not evidence of merge or shipment. Comment 6 identifies PrintPreviewDialogController::SaveInitiatorTitle() using tab-level WebContents rather than frame-level RenderFrameHost as relevant. Related https://issues.chromium.org/issues/41028611 addressed print-preview title behavior, not necessarily all filename paths.

**Submission:** existing-upstream. Existing upstream bug, not a proposal or submission created by this project.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/382394786](<https://issues.chromium.org/issues/382394786>).

Sources: [R08-S008](<https://issues.chromium.org/issues/382394786>).

Issue limitations:

- No confirmed current workaround or fixed release was established.
- The linked proposal and code explanation are documentary evidence; no code build or printing action occurred here.

<a id="R08-09"></a>

### R08-09 — Extension iframe causes Promises to stall in all extension pages after navigation

Lane: [R08](<data/lanes/R08.json>) — Chrome/Chromium accessibility, performance and reliability regressions.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Fixed | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/500975618>).

Reported versions (source claims): 147.0.7727.56<br>148.0.7778.5<br>149.0.7779.3<br>149.0.7781.0<br>149.0.7783.0.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Windows 11 25H2<br>Windows 10 in upstream testing<br>macOS 15.7.5<br>Linux Debian
- **category:** extension-regression
- **status Observed At:** 2026-11-21T14:22:32Z
- **regression Assessment:** The reporter considered 146.0.7680.178 good. Upstream testing narrowed the branch break to 147.0.7727.45 good versus 147.0.7727.46 bad.
- **upstream Verification:** **outcome:** No broken promises observed by the upstream tester.<br>**platforms:** macOS 15.7.5<br>Windows 11<br>Linux Debian<br>**publishedAt:** 2026-04-13<br>**sourceIds:** [R08-S009](<https://issues.chromium.org/issues/500975618>)<br>**url:** [https://issues.chromium.org/issues/500975618\#comment12](<https://issues.chromium.org/issues/500975618#comment12>)<br>**versions:** 149.0.7789.0<br>**outcome:** No broken promises observed by the upstream tester.<br>**platforms:** macOS 15.7.5<br>Windows 11<br>Linux Debian<br>**publishedAt:** 2026-04-15<br>**sourceIds:** [R08-S009](<https://issues.chromium.org/issues/500975618>)<br>**url:** [https://issues.chromium.org/issues/500975618\#comment23](<https://issues.chromium.org/issues/500975618#comment23>)<br>**versions:** 147.0.7727.101<br>**outcome:** No broken promises observed by the upstream tester.<br>**platforms:** macOS 15.7.5<br>Windows 11<br>Linux Debian<br>**publishedAt:** 2026-04-16<br>**sourceIds:** [R08-S009](<https://issues.chromium.org/issues/500975618>)<br>**url:** [https://issues.chromium.org/issues/500975618\#comment28](<https://issues.chromium.org/issues/500975618#comment28>)<br>**versions:** 148.0.7778.40
- **verification Still Needed:** Retain the entire extension iframe, navigation, BFCache and popup/options lifecycle sequence in regression verification.<br>Prefer version-specific observed behavior over assuming a restart applies a remote mitigation.<br>Distinguish this promise-queue defect from expected Manifest V3 service-worker suspension.

**Reported workflow (not executed by this renderer)**

1. Reported fixture: https://github.com/Coxxs/content-script-iframe-crbug supplies an extension whose content script injects an extension iframe.
2. With that fixture installed in the reported test, open https://example.com and follow Learn more to IANA.
3. Open the extension popup or options page and observe whether promises complete.
4. If they still complete, use Back to restore the original page from BFCache, then retry the popup/options operation.

**Expected / proposed outcome:** Extension popup and options-page promise microtasks continue to execute after host-page navigation and BFCache restoration.

**Observation as recorded (upstream-reported):** Upstream reports and cross-platform tests found extension-page promises stalling after host navigation. Multiple extension vendors reported broken workflows. Later upstream tests passed on specific fixed versions. No extension was installed or executed by this project.<br><br>Recovered context from retained lane-08.md, R08-09 (upstream documentary evidence):<br>Dates: Filed 2026-04-09; modified 2026-06-16. Metadata retrieved 2026-11-21 14:22:32Z; full discussion retrieved 14:27:42Z.<br>Classification / status: Bug, regression; Fixed, closed 2026-04-22. Upstream comments contain fix verification even though the current status is not Fixed (Verified).<br>Platform/version: Original: Windows 11 25H2, Chrome Stable 147.0.7727.56 and Canary 149.0.7781.0; 146.0.7680.178 reported good. Upstream reproduced on Windows, macOS 15.7.5, and Debian and narrowed the branch break to 147.0.7727.45 good / 147.0.7727.46 bad.<br>Fix/history: https://chromium-review.googlesource.com/7747043 disabled BackForwardCachePauseMicrotasks; backports are 7756901 (M147) and 7757083 (M148). Upstream verified 149.0.7789.0, 147.0.7727.101, and 148.0.7778.40. A developer initially announced a remote kill switch, then corrected that claim: rollout had failed and it was not live. https://issues.chromium.org/issues/500975618\#comment22

**Submission:** existing-upstream. Existing upstream report with historical fix and correction evidence; this project submitted nothing.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/500975618](<https://issues.chromium.org/issues/500975618>).

Sources: [R08-S009](<https://issues.chromium.org/issues/500975618>).

Issue limitations:

- Upstream-confirmed historical regression, not a newly reproduced defect in this project.
- No broader claim that all service-worker suspension or extension timeouts are browser bugs is supported.
- Change titles and rollout statements come from public issue history; no fix was locally built or deployed.

<a id="R08-10"></a>

### R08-10 — DevTools is blocked by policy unexpectedly - main bug

Lane: [R08](<data/lanes/R08.json>) — Chrome/Chromium accessibility, performance and reliability regressions.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Fixed | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/521708068>).

Reported versions (source claims): 149 (introduced-in metadata)<br>149.0.7827.103<br>149.0.7827.197<br>151.0.7922.138<br>151.0.7922.139.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Managed Chrome<br>macOS/arm64 in public reports<br>macOS 15.7.7 in upstream verification
- **category:** extension-policy-regression
- **status Observed At:** 2026-11-21T14:23:55Z
- **regression Assessment:** The metadata says introduced in 149. This umbrella report includes multiple policy/embedding scenarios and a rollback-induced recurrence; intentional restrictions must not be counted as this regression.
- **upstream Verification:** **outcome:** Earlier upstream PDF-scenario passes preceded subsequent rollback complications; do not use them alone to claim all later branches were fixed.<br>**sourceIds:** [R08-S010](<https://issues.chromium.org/issues/521708068>)<br>**versions:** 150.0.7871.46<br>152.0.7940.0<br>**outcome:** Later PDF-embedding scenario passed after a reproduced failure on 151.0.7922.139. This does not cover every managed-extension iframe case.<br>**platforms:** macOS 15.7.7<br>**sourceIds:** [R08-S010](<https://issues.chromium.org/issues/521708068>)<br>**url:** [https://issues.chromium.org/issues/521708068\#comment61](<https://issues.chromium.org/issues/521708068#comment61>)<br>**versions:** 152.0.7977.64
- **verification Still Needed:** Use a matrix of host-page versus direct extension inspection, PDFs versus other extension iframes, and default/0 versus explicitly restrictive policies.<br>Confirm each scenario under its intended policy rather than using blanket policy relaxation as acceptance.<br>Distinguish actual runtime failures from administrative tracker status changes.

**Reported workflow (not executed by this renderer)**

1. Reported PDF scenario: use a managed test configuration where DeveloperToolsAvailability is unset/default or 0.
2. Open a simple HTML page containing an iframe pointing to an actual PDF, then attempt to inspect the main page.
3. A separate scenario in the discussion uses an enterprise-installed extension injecting its iframe into a normal webpage; attempt host-page inspection there too.
4. Keep host-page inspection distinct from direct inspection of a policy-restricted extension.

**Expected / proposed outcome:** Host-page DevTools availability follows the intended managed policy without unintended whole-tab blocking solely because the page embeds a component PDF viewer or an affected extension frame.

**Observation as recorded (upstream-reported):** Upstream users and testers saw an organization-blocked DevTools message on otherwise ordinary pages containing PDFs or managed-extension frames. An initial PDF exception, subsequent rollback and incomplete rollback behavior led to further fixes. Later upstream PDF-scenario verification passed on 152.0.7977.64.<br><br>Recovered context from retained lane-08.md, R08-10 (upstream documentary evidence):<br>Dates: Filed 2026-06-09; metadata modified 2026-10-19. Metadata retrieved 2026-11-21 14:23:55Z; full discussion retrieved 14:31:57Z.<br>Classification / status: Bug, regression; Fixed. The final displayed status changed from Verified to Fixed on 2026-08-26 because an automated check found missing “Found In” metadata, not because it demonstrated a new runtime failure.<br>Platform/version: Managed Chrome; metadata says introduced in 149. Public reproductions include macOS/arm64 149.0.7827.103 and later 151.0.7922.138/.139; PDF embedding and managed-extension iframe cases appear in the same umbrella record.<br>Fix/history: The first PDF exception/refactor, https://chromium-review.googlesource.com/7951817, was verified in 150.0.7871.46. The July rollback was followed by a fresh report that removing the exception had not removed all relevant frame checks. The later change https://chromium-review.googlesource.com/8256505 and M152 backport https://chromium-review.googlesource.com/8278595 allowed DevTools on pages embedding component extensions. The later 152.0.7977.64 verification is stronger evidence for that scenario than the earlier rollback announcement alone.

**Submission:** existing-upstream. Existing upstream umbrella report reviewed; this project did not submit it or alter enterprise policy.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/521708068](<https://issues.chromium.org/issues/521708068>).

Sources: [R08-S010](<https://issues.chromium.org/issues/521708068>).

Issue limitations:

- Current tracker status is Fixed, not an assertion that every enterprise-extension scenario was independently verified.
- No managed account, credentials, policy exports or local extension installations were accessed.
- The later PDF-only test is stronger evidence for that scenario than the earlier general rollback announcement.

<a id="R08-11"></a>

### R08-11 — Can&#39;t open downloaded file when Downloads folder is a UNC path (malformed \\?\\ path on open)

Lane: [R08](<data/lanes/R08.json>) — Chrome/Chromium accessibility, performance and reliability regressions.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Fixed | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/519243472>).

Reported versions (source claims): 149.0.7827.54<br>150.0.7871.129 (later no-op opening complaint)<br>Chrome/Edge 156 (unvalidated November HOMESHARE follow-up).

Locally tested versions recorded by this project: None recorded.

- **platforms:** Windows 11<br>Windows deployments with redirected Downloads on a network UNC share
- **category:** downloads-platform-reliability
- **status Observed At:** 2026-11-21T14:24:34Z
- **regression Assessment:** The initial report said regression N/A, but comment 2 corrected that with a same-machine comparison: 148.0.7778.217 good versus 149.0.7827.54 bad.
- **upstream Verification:** **outcome:** Developer reported UNC opening working with the feature enabled and disabled.<br>**sourceIds:** [R08-S011](<https://issues.chromium.org/issues/519243472>)<br>**url:** [https://issues.chromium.org/issues/519243472\#comment19](<https://issues.chromium.org/issues/519243472#comment19>)<br>**versions:** 151.0.7875.0<br>**outcome:** Reporter confirmed operation after updating, before the later M150 complaints.<br>**sourceIds:** [R08-S011](<https://issues.chromium.org/issues/519243472>)<br>**url:** [https://issues.chromium.org/issues/519243472\#comment31](<https://issues.chromium.org/issues/519243472#comment31>)<br>**versions:** 149.0.7827.103
- **verification Still Needed:** Assert transfer completion, file existence, shell opening and folder reveal separately on a working writable test share.<br>Recheck the November HOMESHARE scenario on a current supported build before declaring the family universally resolved.<br>Do not use a test that lacks required share permissions as evidence of a successful fix.

**Reported workflow (not executed by this renderer)**

1. Reported workflow: configure a genuinely writable ordinary test UNC share as the Downloads destination.
2. Download a harmless file and independently confirm that it exists on the share.
3. Open the completed file from Chrome&#39;s downloads UI and compare with opening it directly from File Explorer.
4. Test Show in folder separately: the initial description grouped it with failure, while a developer later described it as a workaround.

**Expected / proposed outcome:** The completed file opens in its associated application from the browser, as it does from File Explorer; reveal-in-folder also resolves the intended location.

**Observation as recorded (upstream-reported):** The original report said transfer succeeded but browser-initiated opening failed with a malformed extended-length UNC path. Later M150 complaints described clicks doing nothing, prompting another disablement and fix. A November Chrome/Edge 156 HOMESHARE comment remains unvalidated and does not change the observed Fixed status.<br><br>Recovered context from retained lane-08.md, R08-11 (upstream documentary evidence):<br>Dates: Filed 2026-06-03; modified 2026-11-02. Metadata retrieved 2026-11-21 14:24:34Z; full discussion retrieved 14:31:57Z.<br>Classification / status: Bug, regression; Fixed, after a July reopen and second fix. A November follow-up remains a public report, not an upstream-confirmed recurrence of the identical path bug.<br>Platform/version: Windows 11, Downloads redirected to a network UNC share. Reporter compared 148.0.7778.217 good with 149.0.7827.54 bad on the same machine. Subsequent no-op opening reports occur in M150; a 2026-11-02 comment mentions Chrome/Edge 156 and HOMESHARE redirection.<br>Fix/history: https://chromium-review.googlesource.com/7900033 corrected UNC handling in InvokeShellExecute. A developer verified 151.0.7875.0 with the feature both enabled and disabled; a reporter confirmed 149.0.7827.103 working. Later M150 complaints led to disabling the feature again, with M150/M151 backports. https://chromium-review.googlesource.com/8340810 removed LaunchShellExecuteViaExplorer on main in September. Duplicates 519243484 and 519440135 were recorded; follow-up implementation is linked as 434854508.<br>Hypotheses / limits: Later clicks that do nothing, and the November HOMESHARE report, may be different failure modes. The metadata&#39;s Verified In value includes the original bad build and is not sufficient evidence by itself; dated developer/test comments are more informative.

**Submission:** existing-upstream. Existing upstream report with reopen/fix history and an unvalidated follow-up; no project submission.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/519243472](<https://issues.chromium.org/issues/519243472>).

Sources: [R08-S011](<https://issues.chromium.org/issues/519243472>).

Issue limitations:

- The metadata&#39;s Verified In value includes the original reported bad build; version-specific dated comments are more informative.
- Later no-op opening and HOMESHARE reports may have different causes; closed status is preserved while follow-ups remain unresolved.
- No local downloads, shares, browser restarts or flag changes were used to reproduce the issue.

<a id="R08-12"></a>

### R08-12 — Drag/input freeze: current window freeze and no mouse/keyboard action allowed

Lane: [R08](<data/lanes/R08.json>) — Chrome/Chromium accessibility, performance and reliability regressions.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| upstream-report | upstream-closed | Fixed (Verified) | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/522564418>).

Reported versions (source claims): 149.0.0.0 (canonical build field)<br>148.0.7778.96 (first defect after a backport, according to upstream bisect discussion)<br>153.0.8010.37<br>154.0.8037.47 (missing-dragend repro)<br>155.0.8059.0 (residual missing-dragend report after first fix)<br>155.0.8059.5<br>155.0.8048.0<br>156.0.8061.0<br>156.0.8078.74 (later Salesforce freeze, identity unresolved).

Locally tested versions recorded by this project: None recorded.

- **platforms:** Windows in public minimal repros and upstream verification<br>Linux in public minimal repros<br>Other OS values in automatically expanded metadata are not proof of testing
- **category:** input-platform-reliability
- **status Observed At:** 2026-11-21T14:33:06Z
- **regression Assessment:** The initial defect was linked through public bisection to a change backported into M148. The later missing-dragend regression was bisected separately: 153.0.7981.3 good versus 153.0.7982.0 bad.
- **upstream Verification:** **outcome:** Initial drag-to-editor fixture passed before the separate missing-dragend failure was resolved.<br>**sourceIds:** [R08-S012](<https://issues.chromium.org/issues/522564418>)<br>**url:** [https://issues.chromium.org/issues/522564418\#comment30](<https://issues.chromium.org/issues/522564418#comment30>)<br>**versions:** 153.0.8010.50<br>**outcome:** Upstream comments explicitly report both minimal repros passing on these builds after the two-stage fix.<br>**platforms:** Windows 11<br>**sourceIds:** [R08-S012](<https://issues.chromium.org/issues/522564418>)<br>**versions:** 153.0.8010.55<br>154.0.8037.60<br>155.0.8059.15<br>156.0.8063.1<br>156.0.8064.0<br>156.0.8072.0<br>**outcome:** Duplicate comment 50 reports successful operation; this is an additional reporter observation, not an independent project test.<br>**publishedAt:** 2026-09-21<br>**sourceIds:** [R08-S013](<https://issues.chromium.org/issues/559795247>)<br>**url:** [https://issues.chromium.org/issues/559795247\#comment50](<https://issues.chromium.org/issues/559795247#comment50>)<br>**versions:** 153.0.8010.53
- **verification Still Needed:** Retain both drag-initialization and missing-dragend fixtures instead of considering the first passing case sufficient.<br>Check real input delivery and paired drag-state cleanup, not merely animation, scrolling or synthetic DOM clicks.<br>Match a present-day freeze to its precise symptom and revision before treating it as recurrence of one of these fixed bugs.

**Reported workflow (not executed by this renderer)**

1. Reported reproduction A: use test-page.html attached at canonical comment 14 and repeatedly drag its red square into a neighboring text editor. The reporter estimated roughly 20 to 80 repetitions, sometimes fewer with faster dragging.
2. After the failure, use the browser toolbar to refresh and attempt another drag; record whether mouse/keyboard delivery stops even while rendering or scrolling continues.
3. Reported reproduction B: rapidly click and drag the draggable buttons/cells in the fixture at canonical comment 38; observe pairing of dragstart and dragend and whether elements become permanently undraggable.
4. The consolidated duplicate also uses https://sortablejs.github.io/Sortable/ with repeated dragging, refreshing and another attempt to interact.

**Expected / proposed outcome:** Aborted or failed drag initialization clears browser drag state and delivers the necessary dragend cleanup, preserving mouse/keyboard input and application interaction.

**Observation as recorded (upstream-reported):** Upstream first found whole-tab input suppression after repeated drag initialization failures. A first fix addressed that repro, but a second regression could omit dragend and strand application state while rendering remained alive. Both repros later passed upstream tests. Later Salesforce/general freeze reports were explicitly discussed as potentially unrelated rather than silently reopening the two fixed drag defects.<br><br>Recovered context from retained lane-08.md, R08-12 (upstream documentary evidence):<br>Dates: Canonical filed 2026-06-11, modified 2026-11-13; metadata and full discussion retrieved 2026-11-21 14:33:06Z. Duplicate filed 2026-09-11, modified 2026-09-21; metadata retrieved 14:23:55Z and full discussion 14:31:10Z.<br>Classification / status: Both type Bug. Canonical Fixed (Verified) since 2026-09-17; duplicate closed as Duplicate of 522564418 on 2026-09-14. One family, two separately described drag defects/fixes.<br>Platform/version: Public minimal repros on Windows and Linux; reports narrow an initial regression to a change cherry-picked into M148. The later missing-dragend regression was bisected to 153.0.7981.3 good / 153.0.7982.0 bad. The broad OS metadata was automatically expanded for a Blink release blocker; it does not mean every OS was tested.<br>Fix/history: First fix https://chromium-review.googlesource.com/8356989 cleared drag/drop state after initialization failure. Second fix https://chromium-review.googlesource.com/8410155 ensured dragend is sent when StartDragging() aborts. Upstream describes Stable 153.0.8010.52/.53 rollout; explicit tests cover 153.0.8010.55, 154.0.8037.60, 155.0.8059.15, and several M156 builds. A linked regression test is https://chromium-review.googlesource.com/8428359. <br>Limits / later reports: In October, the developer states the missing-OnDragEnd issues are believed fixed and remaining Salesforce freezes appear unrelated. November links a possible different issue, https://issues.chromium.org/issues/519633688, which was not fully investigated here. Some residual reports remain anecdotal. Do not use them to silently reopen the two proven/fixed defects in a research summary.

**Submission:** existing-upstream. Existing canonical upstream report; duplicate 559795247 is consolidated. Neither report was submitted by this project.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/522564418](<https://issues.chromium.org/issues/522564418>).

Sources: [R08-S012](<https://issues.chromium.org/issues/522564418>), [R08-S013](<https://issues.chromium.org/issues/559795247>).

Issue limitations:

- One consolidated family contains two described drag defects/fixes and two primary upstream IDs; no independent additional count is assigned to the duplicate.
- The original private application workflow was not accessed; public fixture descriptions provide the actionable reproduction basis.
- Later anecdotes are preserved as unresolved follow-ups rather than evidence that the two verified fixes failed.
- No local reproduction, downgrade, extension installation or runtime experiment occurred.

## Source inconsistencies (11)

Document or source-code inconsistencies do not by themselves establish a released-product defect, runtime reproduction, policy bypass, or novelty.

<a id="R03-I01"></a>

### R03-I01 — Mullvad hard-facts documentation retains superseded DNS and session-reset descriptions

Lane: [R03](<data/lanes/R03.json>) — Privacy, anonymity, and independent-browser workflows.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| source-inconsistency | needs-validation | not-checked | source-only | source-inspected / high |

Upstream: No upstream URL recorded.

Reported versions (source claims): Mullvad Browser 16.0.

Locally tested versions recorded by this project: None recorded.

**Saved inspection or proposed validation steps (not a local reproduction)**

1. Compare the retrieved hard-facts sections about New Identity and Mullvad DoH with the 16.0 release announcement.
2. Keep the release-specific resolver migration and Clear Private Session naming separate from the older generic descriptions.

**Expected / proposed outcome:** Current documentation should identify release-specific DNS defaults and the session-reset control consistently, including that local session clearing does not rotate the user&#39;s IP address.

**Observation as recorded (source-inspected):** At retrieval, the hard-facts page still described Mullvad DoH and a New Identity button. The dated 16.0 announcement instead described migration to Quad9, preservation of customized DoH settings, and replacement of the broom by Clear Private Session.

**Submission:** not-submitted. Research finding only; any publication or upstream submission is owned by the coordinating session.

No submission receipt URL recorded.

Sources: [R03-S-M2](<https://mullvad.net/en/browser/hard-facts>), [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>).

Issue limitations:

- This is a document inconsistency, not a locally reproduced browser defect.
- The hard-facts update date was not established; live documentation may change.
- No existing upstream report was investigated and no issue was submitted.

<a id="R05-I-cromite-extension-docs"></a>

### R05-I-cromite-extension-docs — Cromite Android-extension FAQ conflicts with release-pinned experimental source

Lane: [R05](<data/lanes/R05.json>) — Mobile and regional browsers: documented capabilities and Chrome investigation candidates.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| source-inconsistency | needs-validation | No dedicated upstream report of this documentation inconsistency was verified. The cited maintainer comment is release-linked change evidence only. | source-only | source-inspected / high |

Upstream: No upstream URL recorded.

Reported versions (source claims): Source context: v153.0.8010.37-11507ac1061b5ea227806f5e84db5a57df6ccf6a; not a runtime-confirmed affected version.

Locally tested versions recorded by this project: None recorded.

**Saved inspection or proposed validation steps (not a local reproduction)**

1. The saved research read the mutable FAQ&#39;s categorical answer about Android extensions.
2. It resolved the latest-release API snapshot to source revision 11507ac1061b5ea227806f5e84db5a57df6ccf6a and read its experimental Android-extension patch.
3. It compared the patch&#39;s disabled-by-default description with the release-linked maintainer comment discussing extension fixes. No browser or extension was launched.

**Expected / proposed outcome:** Platform documentation should distinguish unsupported general compatibility from a release-source implementation that is experimental and disabled by default.

**Observation as recorded (source-inspected):** The FAQ says Android extensions are unsupported, while the pinned release source contains an experimental default-off implementation and the associated changelog discusses extension fixes.

**Submission:** not-submitted. Converted documentary inconsistency only; artifact behavior and the maintainer&#39;s intended support definition require validation before any report.

No submission receipt URL recorded.

Sources: [R05-C03](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FAQ.md>), [R05-C05](<https://api.github.com/repos/uazo/cromite/releases/latest>), [R05-C06](<https://raw.githubusercontent.com/uazo/cromite/11507ac1061b5ea227806f5e84db5a57df6ccf6a/build/patches/Experimental-support-for-extensions-on-Android.patch>), [R05-C07](<https://api.github.com/repos/uazo/cromite/issues/comments/5679359966>).

Issue limitations:

- The inconsistency is established at document/source level, not as a reproduced browser defect. Patch presence does not establish every binary artifact&#39;s host availability or any extension&#39;s compatibility.
- The patch header is dated 2025-11-06; the observed release was published 2026-09-15. Neither supplies a tested rollout matrix. The FAQ may lag implementation or use a narrower support definition.
- No current Chrome comparison or new upstream submission was performed.

<a id="R05-I-quetta-data-disclosure"></a>

### R05-I-quetta-data-disclosure — Quetta privacy copy and Android store disclosures require edition-aware reconciliation

Lane: [R05](<data/lanes/R05.json>) — Mobile and regional browsers: documented capabilities and Chrome investigation candidates.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| source-inconsistency | needs-validation | No dedicated upstream report or adjudicated data-practice finding was verified. | source-only | vendor-documented / medium |

Upstream: No upstream URL recorded.

Reported versions (source claims): None recorded.

Locally tested versions recorded by this project: None recorded.

**Saved inspection or proposed validation steps (not a local reproduction)**

1. The saved research read broad no-personal-data collection wording in Quetta website copy.
2. It compared that wording with the Android Google Play disclosure of possible personal, app and performance data collection.
3. It retained both vendor descriptions without collecting traffic, inspecting private data or assuming identical Android and iOS practices.

**Expected / proposed outcome:** Collection statements should identify their platform, edition, feature and service scope so that broad website promises can be interpreted alongside store disclosures.

**Observation as recorded (vendor-documented):** Website copy broadly says no personal data collection, while the observed Android Play disclosure allows some personal/app/performance data collection. The consulted evidence does not establish whether the differing language describes the same edition, settings or service paths.

**Submission:** not-submitted. Edition, feature and collection scope remain unresolved; documentary differences alone do not establish an actionable runtime defect.

No submission receipt URL recorded.

Sources: [R05-Q01](<https://play.google.com/store/apps/details?id=net.quetta.browser&hl=en>), [R05-Q03](<https://www.quetta.net/products/ios>), [R05-Q08](<https://www.quetta.net/faq>).

Issue limitations:

- Both sides are vendor disclosures. This is not proof of undisclosed collection, deceptive intent or a runtime privacy violation.
- Platform/edition differences may explain some wording; no network audit, account activity or data-flow measurement was performed.
- The Android listing&#39;s 2026-11-20 update label does not identify a verified affected software version. No Chrome comparison or new submission was made.

<a id="R05-I-quetta-platform-scope"></a>

### R05-I-quetta-platform-scope — Quetta broad FAQ wording does not resolve iOS engine or extension support

Lane: [R05](<data/lanes/R05.json>) — Mobile and regional browsers: documented capabilities and Chrome investigation candidates.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| source-inconsistency | needs-validation | No dedicated upstream report or vendor clarification was verified. | source-only | vendor-documented / medium |

Upstream: No upstream URL recorded.

Reported versions (source claims): None recorded.

Locally tested versions recorded by this project: None recorded.

**Saved inspection or proposed validation steps (not a local reproduction)**

1. The saved research compared the generalized FAQ&#39;s Android/iOS Chromium and Chrome-extension wording with the detailed extension guide.
2. It retained the detailed guide&#39;s explicit Android scope and kept the separate iOS product claims platform-specific.
3. It consulted Apple&#39;s alternative-engine policy for context without inferring that Quetta had shipped an entitled alternative-engine edition.

**Expected / proposed outcome:** Product documentation should identify the engine and extension-host availability separately for each operating system, edition and applicable region.

**Observation as recorded (vendor-documented):** The FAQ uses broad cross-platform Chromium/extension language, but the detailed installation guide establishes Android support only. The consulted sources do not identify the actual iOS engine or demonstrate iOS Chrome Web Store hosting.

**Submission:** not-submitted. The handoff preserves an unresolved documentation scope conflict; platform-specific implementation and vendor clarification remain unverified.

No submission receipt URL recorded.

Sources: [R05-P01](<https://developer.apple.com/support/alternative-browser-engines/>), [R05-Q01](<https://play.google.com/store/apps/details?id=net.quetta.browser&hl=en>), [R05-Q02](<https://www.quetta.net/features/extensions>), [R05-Q03](<https://www.quetta.net/products/ios>), [R05-Q08](<https://www.quetta.net/faq>).

Issue limitations:

- This is a scope ambiguity across vendor documents, not proof of an iOS implementation defect or categorical lack of extensions. No binary or installation was tested.
- Apple&#39;s documented EU alternative-engine entitlements have minimum iOS 17.4/iPadOS 18 requirements; policy permission is not evidence that any named app uses an alternative engine.
- No affected runtime versions, Chrome gap or new upstream report are established.

<a id="R06-I-DILLO-CANONICAL-SOURCE"></a>

### R06-I-DILLO-CANONICAL-SOURCE — Dillo&#39;s migrated canonical website has a newer release than its former GitHub website

Lane: [R06](<data/lanes/R06.json>) — Independent, keyboard-first, lightweight, experimental, and text browsers.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| source-inconsistency | needs-validation | not-established | source-only | source-inspected / high |

Upstream: No upstream URL recorded.

Reported versions (source claims): 3.3.0 on canonical domain<br>3.2.0 on former GitHub website.

Locally tested versions recorded by this project: None recorded.

**Saved inspection or proposed validation steps (not a local reproduction)**

1. Follow the old website&#39;s explicit migration pointer.
2. Compare current canonical release and repository activity with the old version listing.

**Expected / proposed outcome:** The tracker sources lifecycle and releases from the project&#39;s current canonical domain.

**Observation as recorded (source-inspected):** The old site advertises 3.2.0; the canonical site lists 3.3.0 released 2026-04-26, and repository history includes October 2026 work.

**Submission:** not-submitted. Canonical-source correction recorded locally in the dataset only.

No submission receipt URL recorded.

Sources: [R06-D1](<https://dillo-browser.org/>), [R06-D2](<https://dillo-browser.org/release/3.3.0/>), [R06-D5](<https://git.dillo-browser.org/dillo/>), [R06-D6](<https://dillo-browser.github.io/>).

Issue limitations:

- Documentary freshness finding only; no browser execution or upstream ticket-state verification.
- Do not infer inactivity from the former GitHub surface.

<a id="R06-I-FALKON-RELEASE-SURFACES"></a>

### R06-I-FALKON-RELEASE-SURFACES — Falkon release surfaces differ in freshness and omit the newest release date

Lane: [R06](<data/lanes/R06.json>) — Independent, keyboard-first, lightweight, experimental, and text browsers.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| source-inconsistency | needs-validation | not-established | source-only | source-inspected / high |

Upstream: No upstream URL recorded.

Reported versions (source claims): 26.08.3 in RSS<br>25.08.0 at top of CHANGELOG<br>23.08.0 in latest visible announcement.

Locally tested versions recorded by this project: None recorded.

**Saved inspection or proposed validation steps (not a local reproduction)**

1. Compare the official RSS release list, repository CHANGELOG and standalone announcements page.
2. Inspect RSS publication fields rather than inferring dates from version numbers.

**Expected / proposed outcome:** The tracker uses the newer official release listing while preserving an unknown publication date.

**Observation as recorded (source-inspected):** RSS lists 26.08.3 with empty pubDate; CHANGELOG and announcements present older top entries.

**Submission:** not-submitted. Source-quality finding for the dataset; no upstream issue submitted.

No submission receipt URL recorded.

Sources: [R06-F2](<https://apps.kde.org/falkon/index.xml>), [R06-F3](<https://raw.githubusercontent.com/KDE/falkon/master/CHANGELOG>), [R06-F5](<https://www.falkon.org/posts/>).

Issue limitations:

- No release date is inferred from the version number or app-page metadata.
- No claim of abandonment or runtime defect follows from stale documentation.

<a id="R06-I-LYNX-DATE-CONFLICT"></a>

### R06-I-LYNX-DATE-CONFLICT — Lynx 2.9.3 release body conflicts with a stale page footer

Lane: [R06](<data/lanes/R06.json>) — Independent, keyboard-first, lightweight, experimental, and text browsers.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| source-inconsistency | needs-validation | not-established | source-only | source-inspected / high |

Upstream: No upstream URL recorded.

Reported versions (source claims): 2.9.3.

Locally tested versions recorded by this project: None recorded.

**Saved inspection or proposed validation steps (not a local reproduction)**

1. Read the version-specific release statement and compare it with the footer.

**Expected / proposed outcome:** The tracker preserves the explicit 2026-05-27 release statement and discloses the conflicting footer.

**Observation as recorded (source-inspected):** The body dates Lynx 2.9.3 to May 27, 2026; the footer says Last Updated: 2024-04-15.

**Submission:** not-submitted. No publication or upstream report was performed.

No submission receipt URL recorded.

Sources: [R06-Y1](<https://lynx.invisible-island.net/>), [R06-Y2](<https://lynx.invisible-island.net/lynx2.9.3/index.html>).

Issue limitations:

- An internal document inconsistency, not a locally reproduced product defect.
- No separate official correction or issue status was established.

<a id="R06-I-NYXT-VERSIONED-DOCS"></a>

### R06-I-NYXT-VERSIONED-DOCS — Nyxt 5.0.0 renderer and macOS assets supersede incomplete generic documentation

Lane: [R06](<data/lanes/R06.json>) — Independent, keyboard-first, lightweight, experimental, and text browsers.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| source-inconsistency | needs-validation | not-established | source-only | source-inspected / high |

Upstream: No upstream URL recorded.

Reported versions (source claims): 5.0.0<br>README and FAQ as retrieved on 2026-11-21.

Locally tested versions recorded by this project: None recorded.

**Saved inspection or proposed validation steps (not a local reproduction)**

1. Compare generic README/FAQ platform and backend text with the tagged 5.0.0 manual, dated announcement and release assets.

**Expected / proposed outcome:** Descriptions of 5.0.0 identify CEF as default and acknowledge the actual macOS ARM64 release asset.

**Observation as recorded (source-inspected):** The README labels macOS in development; 5.0.0 has a macOS ARM64 asset. Its manual and announcement name CEF default and remove Electron.

**Submission:** not-submitted. Recorded as a version-scoping finding only.

No submission receipt URL recorded.

Sources: [R06-N1](<https://raw.githubusercontent.com/atlas-engineer/nyxt/master/README.org>), [R06-N2](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>), [R06-N3](<https://nyxt-browser.com/article/release-5.0.0.org>), [R06-N4](<https://api.github.com/repos/atlas-engineer/nyxt/releases/tags/5.0.0>), [R06-N5](<https://nyxt.atlas.engineer/faq>).

Issue limitations:

- Release assets were not executed; platform quality and renderer parity remain untested.
- This is a documentation-scope finding, not an existing upstream ticket or a new submission.

<a id="R06-I-ORION-SUPPORT-DOCS"></a>

### R06-I-ORION-SUPPORT-DOCS — Orion installation guidance must be reconciled with Kagi&#39;s Linux/Windows cessation

Lane: [R06](<data/lanes/R06.json>) — Independent, keyboard-first, lightweight, experimental, and text browsers.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| source-inconsistency | needs-validation | not-established | source-only | source-inspected / high |

Upstream: No upstream URL recorded.

Reported versions (source claims): Linux beta as described on 2026-10-02<br>Planned Windows late-2026 release.

Locally tested versions recorded by this project: None recorded.

**Saved inspection or proposed validation steps (not a local reproduction)**

1. Compare the dated support announcement with the undated Linux installation section.

**Expected / proposed outcome:** A tracker distinguishes available historical beta downloads from maintained releases and unverified community continuation.

**Observation as recorded (source-inspected):** Installation docs still offer the Linux beta, while Kagi&#39;s 2026-10-02 announcement ends Linux updates and cancels its Windows release.

**Submission:** not-submitted. Research-only source reconciliation; no upstream issue was submitted.

No submission receipt URL recorded.

Sources: [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>), [R06-O4](<https://help.kagi.com/orion/getting-started/installing-orion.html>).

Issue limitations:

- Documentary support distinction, not a reproduced application defect or a Chrome issue.
- Completion of the promised source handoff and successor maintenance were not verified.

<a id="R09-C1"></a>

### R09-C1 — Managed Home-button state is exposed through editable customization controls

Lane: [R09](<data/lanes/R09.json>) — Chromium desktop toolbar menus and customization: source-only audit.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| source-inconsistency | needs-validation | unknown | source-only | source-inspected / high |

Upstream: No upstream URL recorded.

Reported versions (source claims): None recorded.

Locally tested versions recorded by this project: None recorded.

- **component:** Desktop toolbar context menu and Customize Toolbar policy metadata
- **source Revision:** 04d6a2d2bd0626ad343da0ef33e812e1360b44bd
- **confirmation Scope:** Source-confirmed metadata/enablement inconsistency only; no policy bypass or local runtime defect is established.
- **inferred Failure Scenario:** Mandatory true can leave an enabled Unpin command and editable Home toggle that write a shadowed user value while effective visibility remains policy-controlled. Mandatory false similarly exposes an editable Customize Toolbar toggle. The exact visible or announced effect was not observed.
- **duplicate Lookup:** **boundary:** Search results and the selected test files do not establish repository-wide test absence or issue novelty.<br>**outcome:** No exact duplicate verified in the completed free-search queries.<br>**queryIds:** R09-Q1

**Saved inspection or proposed validation steps (not a local reproduction)**

1. Proposed, not executed: in an isolated test profile, set mandatory ShowHomeButton=true and call CustomizeToolbarHandler::ListActions(). Inspect Home&#39;s management field and effective pin state.
2. Construct the Home context-menu model in a regular profile and inspect Unpin enablement. Activate it and compare the effective preference and visibility with the requested user value.
3. Repeat mandatory ShowHomeButton=false through Customize Toolbar; use recommended true as the editable control case.
4. After source-level assertions are validated, use an authorized disposable runtime profile to inspect keyboard activation and announcements.

**Expected / proposed outcome:** The management field should describe the effective policy-controlled Home state, and pin/unpin controls should reflect preference modifiability while preserving recommended-policy editability.

**Observation as recorded (source-inspected):** At the pinned revision, ListActions reads Home&#39;s effective preference but supplies false for its enterprise-controlled field. The WebUI chooses an editable row when that field is false. Native pin/unpin enablement checks regular-profile status and pinnability, and preference-backed Home is treated as pinnable without checking policy management. SetBoolean writes the user store, which remains lower priority than mandatory managed values.

**Pinned code evidence**

**endLine:** 793<br>**file:** chrome/browser/policy/configuration\_policy\_handler\_list\_factory.cc<br>**observation:** This entry maps ShowHomeButton to prefs::kShowHomeButton as a boolean.<br>**quote:** \{ key::kShowHomeButton,<br>**sourceIds:** [R09-S20](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/policy/configuration_policy_handler_list_factory.cc>)<br>**startLine:** 791<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/policy/configuration\_policy\_handler\_list\_factory.cc\#L791-L793](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/policy/configuration_policy_handler_list_factory.cc#L791-L793>)<br>**endLine:** 280<br>**file:** chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.cc<br>**observation:** The effective Home preference is followed by an unconditional false management field.<br>**quote:** prefs()-&gt;GetBoolean(prefs::kShowHomeButton), false,<br>**sourceIds:** [R09-S10](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc>)<br>**startLine:** 268<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.cc\#L268-L280](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc#L268-L280>)<br>**endLine:** 62<br>**file:** chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar.mojom<br>**observation:** The interface explicitly defines whether the pinned state is currently enterprise controlled.<br>**quote:** bool has\_enterprise\_controlled\_pinned\_state;<br>**sourceIds:** [R09-S12](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar.mojom>)<br>**startLine:** 49<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar.mojom\#L49-L62](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar.mojom#L49-L62>)<br>**endLine:** 60<br>**file:** chrome/browser/resources/side\_panel/customize\_chrome/customize\_toolbar/toolbar.html.ts<br>**observation:** False selects the clickable row/cr-toggle branch; the other branch displays managed explanatory text.<br>**quote:** $\{\!action.hasEnterpriseControlledPinnedState ? html\`<br>**sourceIds:** [R09-S17](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side_panel/customize_chrome/customize_toolbar/toolbar.html.ts>)<br>**startLine:** 34<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side\_panel/customize\_chrome/customize\_toolbar/toolbar.html.ts\#L34-L60](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side_panel/customize_chrome/customize_toolbar/toolbar.html.ts#L34-L60>)<br>**endLine:** 151<br>**file:** chrome/browser/ui/views/toolbar/home\_button.cc<br>**observation:** Home wires the shared pinned-action context-menu model with kActionHome.<br>**quote:** std::make\_unique&lt;PinnedActionToolbarButtonMenuModel&gt;(<br>**sourceIds:** [R09-S08](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/home_button.cc>)<br>**startLine:** 143<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/home\_button.cc\#L143-L151](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/home_button.cc#L143-L151>)<br>**endLine:** 184<br>**file:** chrome/browser/ui/views/toolbar/pinned\_action\_toolbar\_button\_menu\_model.cc<br>**observation:** The pin/unpin branch omits a preference-management check.<br>**quote:** return browser\_-&gt;GetProfile()-&gt;IsRegularProfile() &amp;&amp; is\_pinnable;<br>**sourceIds:** [R09-S01](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_action_toolbar_button_menu_model.cc>)<br>**startLine:** 163<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned\_action\_toolbar\_button\_menu\_model.cc\#L163-L184](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_action_toolbar_button_menu_model.cc#L163-L184>)<br>**endLine:** 58<br>**file:** chrome/browser/ui/views/toolbar/pinned\_action\_toolbar\_button\_menu\_model.cc<br>**observation:** Home belongs to the preference-backed pin-state group and maps to kShowHomeButton.<br>**quote:** action\_id == kActionHome;<br>**sourceIds:** [R09-S01](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_action_toolbar_button_menu_model.cc>)<br>**startLine:** 43<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned\_action\_toolbar\_button\_menu\_model.cc\#L43-L58](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_action_toolbar_button_menu_model.cc#L43-L58>)<br>**endLine:** 313<br>**file:** chrome/browser/ui/views/toolbar/pinned\_action\_toolbar\_button\_menu\_model.cc<br>**observation:** Preference-backed actions satisfy IsPinnable and write their preference on activation.<br>**quote:** pref\_service-&gt;SetBoolean(GetPrefForActionId(action\_id\_), should\_pin);<br>**sourceIds:** [R09-S01](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_action_toolbar_button_menu_model.cc>)<br>**startLine:** 289<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned\_action\_toolbar\_button\_menu\_model.cc\#L289-L313](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_action_toolbar_button_menu_model.cc#L289-L313>)<br>**endLine:** 390<br>**file:** components/prefs/pref\_service.cc<br>**observation:** SetBoolean delegates to a user-preference write.<br>**quote:** SetUserPrefValue(path, base::Value(value));<br>**sourceIds:** [R09-S22](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_service.cc>)<br>**startLine:** 388<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref\_service.cc\#L388-L390](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_service.cc#L388-L390>)<br>**endLine:** 595<br>**file:** components/prefs/pref\_service.cc<br>**observation:** The write targets the user store rather than mandatory managed values.<br>**quote:** user\_pref\_store\_-&gt;SetValue(path, std::move(new\_value), GetWriteFlags(pref));<br>**sourceIds:** [R09-S22](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_service.cc>)<br>**startLine:** 568<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref\_service.cc\#L568-L595](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_service.cc#L568-L595>)<br>**endLine:** 63<br>**file:** components/prefs/pref\_value\_store.h<br>**observation:** Mandatory managed values precede user values in the highest-to-lowest priority enum.<br>**quote:** MANAGED\_STORE = 0,<br>**sourceIds:** [R09-S24](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_value_store.h>)<br>**startLine:** 38<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref\_value\_store.h\#L38-L63](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_value_store.h#L38-L63>)<br>**endLine:** 137<br>**file:** components/prefs/pref\_value\_store.cc<br>**observation:** Effective-value lookup selects the first matching non-default store in priority order.<br>**quote:** for (size\_t i = 0; i &lt; DEFAULT\_STORE; ++i) \{<br>**sourceIds:** [R09-S23](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_value_store.cc>)<br>**startLine:** 114<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref\_value\_store.cc\#L114-L137](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_value_store.cc#L114-L137>)

**Submission:** not-submitted. Needs isolated validation and a verified duplicate check; no issue was submitted by this project.

No submission receipt URL recorded.

Sources: [R09-S01](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_action_toolbar_button_menu_model.cc>), [R09-S08](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/home_button.cc>), [R09-S09](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/home_button_browsertest.cc>), [R09-S10](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc>), [R09-S12](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar.mojom>), [R09-S13](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler_unittest.cc>), [R09-S15](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/toolbar/pinned_toolbar/pinned_toolbar_actions_model.cc>), [R09-S17](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side_panel/customize_chrome/customize_toolbar/toolbar.html.ts>), [R09-S20](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/policy/configuration_policy_handler_list_factory.cc>), [R09-S21](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/policy/resources/templates/policy_definitions/Startup/ShowHomeButton.yaml>), [R09-S22](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_service.cc>), [R09-S23](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_value_store.cc>), [R09-S24](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/components/prefs/pref_value_store.h>).

Issue limitations:

- Source-only inconsistency; no browser build, live policy matrix, screen-reader result or test execution was observed.
- No policy bypass is claimed: mandatory managed values retain priority over these user-store writes.
- No managed-Home coverage was found in the inspected tests; a full repository test search was not performed.
- Affected released versions, feature rollout state and exact user-visible behavior are unknown.

<a id="R09-C2"></a>

### R09-C2 — Toolbar WebUI test fixtures contradict the production data: icon invariant

Lane: [R09](<data/lanes/R09.json>) — Chromium desktop toolbar menus and customization: source-only audit.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| source-inconsistency | needs-validation | unknown | source-only | source-inspected / high |

Upstream: No upstream URL recorded.

Reported versions (source claims): None recorded.

Locally tested versions recorded by this project: None recorded.

- **component:** Customize Toolbar WebUI test data contract
- **source Revision:** 04d6a2d2bd0626ad343da0ef33e812e1360b44bd
- **confirmation Scope:** Source-confirmed fixture/production contract mismatch, not a demonstrated test-run failure or end-user Chrome defect.
- **inferred Failure Scenario:** The fixture reaches a false assertion in the asynchronous list-actions callback when using the inspected assertion implementation. Whether the test harness fails, reports an unhandled rejection or uses transformed assertions was not established.
- **duplicate Lookup:** **boundary:** Issue bodies and exhaustive test/history coverage were not verified; no novelty or CI-status claim follows.<br>**outcome:** No verified fixture-contract duplicate was found. A broad Customize Toolbar context-menu-option search lead was not treated as this mismatch.<br>**queryIds:** R09-Q4

**Saved inspection or proposed validation steps (not a local reproduction)**

1. Proposed, not executed: verify that the generated resources in an isolated Chromium test build correspond to the pinned revision.
2. Run the existing --gtest\_filter=SidePanelCustomizeChromeTest.Toolbar in its appropriate upstream test binary.
3. Capture assertion and promise-rejection reporting for tests using createToolbarElementWithBasicData; distinguish a fixture assertion from an end-user product failure.

**Expected / proposed outcome:** Normal fixture icons and their expected values should satisfy the production data: URL invariant, so ordinary structure and pinning tests do not introduce an unrelated asynchronous assertion.

**Observation as recorded (source-inspected):** The production list-actions callback asserts that each iconUrl starts with data:. The shared WebUI fixture supplies the same HTTPS example icon twice, and the icon test expects that HTTPS URL. The inspected assert implementation throws on false, while the real browser handler encodes PNG data URIs.

**Pinned code evidence**

**endLine:** 121<br>**file:** chrome/browser/resources/side\_panel/customize\_chrome/customize\_toolbar/toolbar.ts<br>**observation:** The production callback enforces a data: prefix for every icon URL.<br>**quote:** assert(this.actions\_.every(action =&gt; action.iconUrl.startsWith(&#39;data:&#39;)));<br>**sourceIds:** [R09-S16](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side_panel/customize_chrome/customize_toolbar/toolbar.ts>)<br>**startLine:** 117<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side\_panel/customize\_chrome/customize\_toolbar/toolbar.ts\#L117-L121](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side_panel/customize_chrome/customize_toolbar/toolbar.ts#L117-L121>)<br>**endLine:** 51<br>**file:** chrome/test/data/webui/side\_panel/customize\_chrome/toolbar\_test.ts<br>**observation:** Both basic fixture actions use an HTTPS icon rather than a data URI.<br>**quote:** iconUrl: &#39;https://example.com/foo\_1.png&#39;,<br>**sourceIds:** [R09-S18](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/test/data/webui/side_panel/customize_chrome/toolbar_test.ts>)<br>**startLine:** 33<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/test/data/webui/side\_panel/customize\_chrome/toolbar\_test.ts\#L33-L51](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/test/data/webui/side_panel/customize_chrome/toolbar_test.ts#L33-L51>)<br>**endLine:** 144<br>**file:** chrome/test/data/webui/side\_panel/customize\_chrome/toolbar\_test.ts<br>**observation:** The icon test explicitly depends on the contract-invalid fixture URL.<br>**quote:** assertEquals(&#39;https://example.com/foo\_1.png&#39;, iconUrl);<br>**sourceIds:** [R09-S18](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/test/data/webui/side_panel/customize_chrome/toolbar_test.ts>)<br>**startLine:** 135<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/test/data/webui/side\_panel/customize\_chrome/toolbar\_test.ts\#L135-L144](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/test/data/webui/side_panel/customize_chrome/toolbar_test.ts#L135-L144>)<br>**endLine:** 17<br>**file:** ui/webui/resources/js/assert.ts<br>**observation:** The inspected assertion implementation throws on a false value.<br>**quote:** throw new Error(&#39;Assertion failed&#39; + (message ? \`: $\{message\}\` : &#39;&#39;));<br>**sourceIds:** [R09-S29](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/webui/resources/js/assert.ts>)<br>**startLine:** 11<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/webui/resources/js/assert.ts\#L11-L17](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/webui/resources/js/assert.ts#L11-L17>)<br>**endLine:** 372<br>**file:** chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.cc<br>**observation:** Real handler output uses data-URI encoding, consistent with the production invariant.<br>**quote:** GURL(webui::EncodePNGAndMakeDataURI(<br>**sourceIds:** [R09-S10](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc>)<br>**startLine:** 366<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.cc\#L366-L372](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc#L366-L372>)

**Submission:** not-submitted. The existing test suite and generated-resource behavior need validation before a report is considered.

No submission receipt URL recorded.

Sources: [R09-S10](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc>), [R09-S16](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side_panel/customize_chrome/customize_toolbar/toolbar.ts>), [R09-S18](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/test/data/webui/side_panel/customize_chrome/toolbar_test.ts>), [R09-S19](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/test/data/webui/side_panel/customize_chrome/customize_chrome_browsertest.cc>), [R09-S29](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/webui/resources/js/assert.ts>).

Issue limitations:

- No test-run result was observed. Harness failure, unhandled rejection behavior and optimized assertion transformation remain unverified.
- The production handler was not shown to supply an invalid URL; this is a test-fixture inconsistency.
- No released Chrome version is implicated by a local reproduction, and duplicate research remains bounded.

## Unverified hypotheses (3)

These are candidates requiring validation, not confirmed new bugs.

<a id="R09-H1"></a>

### R09-H1 — A running overflow menu may dispatch a different action after pin-order changes

Lane: [R09](<data/lanes/R09.json>) — Chromium desktop toolbar menus and customization: source-only audit.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| hypothesis | needs-validation | unknown | not-run | hypothesis / medium |

Upstream: No upstream URL recorded.

Reported versions (source claims): None recorded.

Locally tested versions recorded by this project: None recorded.

- **component:** Responsive toolbar overflow-menu command identity
- **source Revision:** 04d6a2d2bd0626ad343da0ef33e812e1360b44bd
- **inferred Failure Scenario:** If a menu stays alive while a model update swaps actions A and B, the old command for A can resolve to B while still displaying A&#39;s label. Synchronization is a plausible asynchronous trigger, not a demonstrated production path. Automatic menu closure on every relevant update would prevent the proposed user-facing failure.
- **duplicate Lookup:** **boundary:** The attempted issue fetch returned a sign-in shell. Issue status, resolution and exact overlap are unknown. Overflow history requests also failed, and no exhaustive test or duplicate search was completed.<br>**outcome:** Issue 359863838 is a priority unverified overlap lead, not a confirmed duplicate.<br>**overlapLeads:** **bodyVerified:** false<br>**relationship:** unverified-overlap<br>**sourceIds:** [R09-S31](<https://issues.chromium.org/359863838>)<br>**statusVerified:** false<br>**url:** [https://issues.chromium.org/359863838](<https://issues.chromium.org/359863838>)<br>**queryIds:** R09-Q2<br>R09-Q5<br>**sourceIds:** [R09-S31](<https://issues.chromium.org/359863838>)
- **confidence Basis:** High confidence in the conditional index/label mismatch; only medium confidence in production reachability because whole-UI cancellation behavior was not established.

**Saved inspection or proposed validation steps (not a local reproduction)**

1. Proposed, not executed: extend the existing overflow unit fixture with two distinct action labels and callback counters, and mark both actions overflowed.
2. Create/show the menu and retain action A&#39;s displayed label and numeric command ID.
3. Call MovePinnedAction(B, 0), check whether the old menu survives, then activate the retained command.
4. Assert that either the old menu was invalidated or the invoked action still matches the retained label.
5. Only after fixture validation, test a controlled preference update with a real open overflow menu in an authorized disposable runtime profile.

**Expected / proposed outcome:** A surviving menu command should continue to identify the action named by its displayed label, or the menu should be invalidated when the mapping changes.

**Observation as recorded (hypothesis):** Source inspection shows menu creation using responsive\_elements\_ indices as stored command IDs and snapshotting labels. OnActionsChanged reorders that vector, while execution resolves an existing numeric command against the current vector. The selected tests cover reordering and activation separately.

**Pinned code evidence**

**endLine:** 384<br>**file:** chrome/browser/ui/views/toolbar/overflow\_menu.cc<br>**observation:** Creation stores a responsive-elements index as command ID with the current label; the icon branch also uses i.<br>**quote:** menu\_model-&gt;AddItem(i, GetMenuText(element));<br>**sourceIds:** [R09-S03](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc>)<br>**startLine:** 360<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow\_menu.cc\#L360-L384](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc#L360-L384>)<br>**endLine:** 263<br>**file:** chrome/browser/ui/views/toolbar/overflow\_menu.cc<br>**observation:** This observer reorders the vector without rebuilding the open menu in this method.<br>**quote:** responsive\_elements\_ = GetResponsiveElementsWithOrderedActions();<br>**sourceIds:** [R09-S03](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc>)<br>**startLine:** 261<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow\_menu.cc\#L261-L263](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc#L261-L263>)<br>**endLine:** 395<br>**file:** chrome/browser/ui/views/toolbar/overflow\_menu.cc<br>**observation:** Execution resolves the stored numeric command against the current vector.<br>**quote:** const auto&amp; element\_info = responsive\_elements\_.at(command\_id);<br>**sourceIds:** [R09-S03](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc>)<br>**startLine:** 387<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow\_menu.cc\#L387-L395](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc#L387-L395>)<br>**endLine:** 214<br>**file:** chrome/browser/ui/toolbar/pinned\_toolbar/pinned\_toolbar\_actions\_model.cc<br>**observation:** The model refreshes preference-derived IDs before notifying observers.<br>**quote:** observer.OnActionsChanged();<br>**sourceIds:** [R09-S15](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/toolbar/pinned_toolbar/pinned_toolbar_actions_model.cc>)<br>**startLine:** 182<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/toolbar/pinned\_toolbar/pinned\_toolbar\_actions\_model.cc\#L182-L214](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/toolbar/pinned_toolbar/pinned_toolbar_actions_model.cc#L182-L214>)<br>**endLine:** 482<br>**file:** ui/menus/simple\_menu\_model.cc<br>**observation:** Non-dynamic labels and command IDs are retained in the menu model&#39;s stored items.<br>**quote:** return items\_\[ValidateItemIndex(index)\].label;<br>**sourceIds:** [R09-S25](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/menus/simple_menu_model.cc>)<br>**startLine:** 474<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/menus/simple\_menu\_model.cc\#L474-L482](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/menus/simple_menu_model.cc#L474-L482>)<br>**endLine:** 639<br>**file:** ui/menus/simple\_menu\_model.cc<br>**observation:** Activation dispatches that stored command ID to the delegate.<br>**quote:** delegate\_-&gt;ExecuteCommand(GetCommandIdAt(index), event\_flags);<br>**sourceIds:** [R09-S25](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/menus/simple_menu_model.cc>)<br>**startLine:** 626<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/menus/simple\_menu\_model.cc\#L626-L639](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/menus/simple_menu_model.cc#L626-L639>)

**Submission:** not-submitted. Needs an open-menu reproduction and a body-verified overlap check for issue 359863838 before escalation.

No submission receipt URL recorded.

Sources: [R09-S03](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc>), [R09-S05](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu_unittest.cc>), [R09-S15](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/toolbar/pinned_toolbar/pinned_toolbar_actions_model.cc>), [R09-S25](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/menus/simple_menu_model.cc>), [R09-S31](<https://issues.chromium.org/359863838>).

Issue limitations:

- No running menu or synchronization event was tested; menu cancellation could prevent the user-facing scenario.
- The code observation is conditional evidence for a hypothesis, not a source-confirmed production defect.
- Issue 359863838 could overlap, but its inaccessible body prevents any duplicate or novelty verdict.
- Released-version impact and platform-specific behavior remain unknown.

<a id="R09-H2"></a>

### R09-H2 — Actions hidden at first enumeration may miss their first visibility-change notification

Lane: [R09](<data/lanes/R09.json>) — Chromium desktop toolbar menus and customization: source-only audit.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| hypothesis | needs-validation | unknown | not-run | hypothesis / medium |

Upstream: No upstream URL recorded.

Reported versions (source claims): None recorded.

Locally tested versions recorded by this project: None recorded.

- **component:** Customize Toolbar action-list observation
- **source Revision:** 04d6a2d2bd0626ad343da0ef33e812e1360b44bd
- **inferred Failure Scenario:** An initially hidden action becomes visible with no other subscribed action, model or theme event. Its own missed subscription can leave the WebUI omitting it until another refresh. Coupled eligibility or visibility updates may mask this scenario; no production action making the independent transition was traced.
- **duplicate Lookup:** **boundary:** The limited history and search results are not comprehensive; coupled notification paths and a genuine production transition remain untraced.<br>**outcome:** No exact hidden-first notification duplicate was verified. Six recent handler history entries were inspected.<br>**queryIds:** R09-Q3<br>**sourceIds:** [R09-S32](<https://api.github.com/repos/chromium/chromium/commits?sha=04d6a2d2bd0626ad343da0ef33e812e1360b44bd&path=chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc&per_page=6>)
- **confidence Basis:** High confidence in the hidden-first subscription edge; medium confidence in observable production impact because other notifications can refresh the list.

**Saved inspection or proposed validation steps (not a local reproduction)**

1. Proposed, not executed: in the existing handler browser-test fixture, make DevTools invisible before the first ListActions call.
2. Enumerate once and clear mock expectations, then set DevTools visible without changing another action, the model or the theme.
3. Verify a client update followed by DevTools appearing, without an unrelated refresh.
4. If the fixture shows the missed update, trace a genuine production eligibility transition before escalating a user-facing report.

**Expected / proposed outcome:** For a live-updating customization list, an existing action that becomes visible after initial enumeration should trigger a refresh even if it was initially hidden.

**Observation as recorded (hypothesis):** ListActions returns for invisible actions before installing their change callbacks. The inspected handler stores per-ID subscriptions and model/preference observations. SetVisible triggers the changed action&#39;s callback, and the WebUI repopulates when notified. Existing visibility coverage begins with DevTools visible and already enumerated.

**Pinned code evidence**

**endLine:** 340<br>**file:** chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.cc<br>**observation:** The invisible-action early return precedes subscription installation.<br>**quote:** if (\!action\_item &#124;&#124; \!action\_item-&gt;GetVisible()) \{<br>**sourceIds:** [R09-S10](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc>)<br>**startLine:** 314<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.cc\#L314-L340](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc#L314-L340>)<br>**endLine:** 331<br>**file:** chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.cc<br>**observation:** Only an action that reaches this block receives the per-ID callback subscription.<br>**quote:** action\_item-&gt;AddActionChangedCallback(base::BindRepeating(<br>**sourceIds:** [R09-S10](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc>)<br>**startLine:** 326<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.cc\#L326-L331](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc#L326-L331>)<br>**endLine:** 512<br>**file:** chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.cc<br>**observation:** Action/model callbacks notify the WebUI; preference callbacks update individual pin state.<br>**quote:** client\_-&gt;NotifyActionsUpdated();<br>**sourceIds:** [R09-S10](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc>)<br>**startLine:** 495<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.cc\#L495-L512](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc#L495-L512>)<br>**endLine:** 73<br>**file:** chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.h<br>**observation:** The handler owns per-ID action subscriptions plus model and preference observations.<br>**quote:** std::unordered\_map&lt;actions::ActionId, base::CallbackListSubscription&gt;<br>**sourceIds:** [R09-S11](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.h>)<br>**startLine:** 64<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.h\#L64-L73](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.h#L64-L73>)<br>**endLine:** 248<br>**file:** chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.cc<br>**observation:** Constructor observation covers the model and three pin preferences, not an action-tree-wide visibility observer.<br>**quote:** model\_observation\_.Observe(model\_);<br>**sourceIds:** [R09-S10](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc>)<br>**startLine:** 219<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side\_panel/customize\_chrome/customize\_toolbar/customize\_toolbar\_handler.cc\#L219-L248](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc#L219-L248>)<br>**endLine:** 342<br>**file:** ui/actions/actions.cc<br>**observation:** A changed visible value emits that action&#39;s change callback.<br>**quote:** visible\_ = visible;<br>  ActionItemChanged();<br>**sourceIds:** [R09-S30](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/actions/actions.cc>)<br>**startLine:** 332<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/actions/actions.cc\#L332-L342](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/actions/actions.cc#L332-L342>)<br>**endLine:** 75<br>**file:** chrome/browser/resources/side\_panel/customize\_chrome/customize\_toolbar/toolbar.ts<br>**observation:** The WebUI binds action-update notifications to populateUi\_; theme changes also repopulate.<br>**quote:** this.apiProxy\_.callbackRouter.notifyActionsUpdated.addListener(<br>**sourceIds:** [R09-S16](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side_panel/customize_chrome/customize_toolbar/toolbar.ts>)<br>**startLine:** 67<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side\_panel/customize\_chrome/customize\_toolbar/toolbar.ts\#L67-L75](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side_panel/customize_chrome/customize_toolbar/toolbar.ts#L67-L75>)

**Submission:** not-submitted. Needs a hidden-first regression test and a genuine production transition before a user-facing report is considered.

No submission receipt URL recorded.

Sources: [R09-S10](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc>), [R09-S11](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.h>), [R09-S14](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler_browsertest.cc>), [R09-S16](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/resources/side_panel/customize_chrome/customize_toolbar/toolbar.ts>), [R09-S30](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/actions/actions.cc>), [R09-S32](<https://api.github.com/repos/chromium/chromium/commits?sha=04d6a2d2bd0626ad343da0ef33e812e1360b44bd&path=chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar_handler.cc&per_page=6>).

Issue limitations:

- The proposed test and a production eligibility transition were not run.
- Other subscribed action, model or theme notifications may refresh the list and mask the edge case.
- The selected tests and bounded history do not establish repository-wide absence or issue novelty.
- Released-version impact remains unknown.

<a id="R09-H3"></a>

### R09-H3 — Open overflow menu enablement may remain stale while action enablement changes

Lane: [R09](<data/lanes/R09.json>) — Chromium desktop toolbar menus and customization: source-only audit.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| hypothesis | needs-validation | unknown | not-run | hypothesis / medium |

Upstream: No upstream URL recorded.

Reported versions (source claims): None recorded.

Locally tested versions recorded by this project: None recorded.

- **component:** Responsive overflow-menu live enabled and accessible state
- **source Revision:** 04d6a2d2bd0626ad343da0ef33e812e1360b44bd
- **inferred Failure Scenario:** If the menu stays open, an action that becomes disabled may still appear or announce enabled while activation does nothing; an action that becomes enabled may remain unselectable until reopening. No accessibility tree or runtime event was observed.
- **duplicate Lookup:** **boundary:** Returned extension-menu, fullscreen and historical HiDPI snippets were not verified issue bodies. Issue status, exhaustive coverage and novelty remain unknown.<br>**outcome:** Shared overflow searches and the dedicated disabled-state query did not verify this exact scenario.<br>**queryIds:** R09-Q2<br>R09-Q5<br>R09-Q6
- **confidence Basis:** Concrete partial-update paths support a consistency test, but menu cancellation and the intended live-state contract were not established.

**Saved inspection or proposed validation steps (not a local reproduction)**

1. Proposed, not executed: show a two-action overflow menu in the existing fixture, with one action enabled and the other disabled.
2. Change the underlying enabled action with SetEnabled(false) and the other with SetEnabled(true), and first check whether the menu survives or closes.
3. Compare model enabled state with MenuItemView::GetEnabled() for the surviving menu, then verify keyboard selectability and accessibility state in an authorized runtime test.
4. Establish whether live enabled-state updates or a deliberately frozen snapshot are intended before labeling the behavior a defect.

**Expected / proposed outcome:** If the menu is intended to reflect live action state, its visible, keyboard and accessible enabled state should remain consistent with invocation availability, or it should close when that state becomes invalid. A deliberate snapshot contract must be evaluated separately.

**Observation as recorded (hypothesis):** PopulateMenu copies enabled state onto normal MenuItemViews. Its running ActionItemChanged path updates icon color and status-indicator visibility, not label or enabled state. The model&#39;s IsCommandIdEnabled reads current state, but the class does not override Views&#39; distinct IsCommandEnabled, whose default is true. ActionItem invocation still refuses disabled execution.

**Pinned code evidence**

**endLine:** 520<br>**file:** chrome/browser/ui/views/toolbar/overflow\_menu.cc<br>**observation:** Menu population copies current enabled state onto each normal view.<br>**quote:** menu\_item-&gt;SetEnabled(IsCommandIdEnabled(menu\_item-&gt;GetCommand()));<br>**sourceIds:** [R09-S03](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc>)<br>**startLine:** 498<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow\_menu.cc\#L498-L520](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc#L498-L520>)<br>**endLine:** 496<br>**file:** chrome/browser/ui/views/toolbar/overflow\_menu.cc<br>**observation:** The running-menu callback changes indicator visibility and icon color; its inspected body contains no enabled-state or label refresh.<br>**quote:** status\_indicator-&gt;Hide();<br>**sourceIds:** [R09-S03](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc>)<br>**startLine:** 445<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow\_menu.cc\#L445-L496](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc#L445-L496>)<br>**endLine:** 390<br>**file:** chrome/browser/ui/views/toolbar/overflow\_menu.cc<br>**observation:** The model delegate queries enabled state when asked.<br>**quote:** return delegate\_-&gt;IsEnabled(element.overflow\_id);<br>**sourceIds:** [R09-S03](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc>)<br>**startLine:** 387<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow\_menu.cc\#L387-L390](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc#L387-L390>)<br>**endLine:** 222<br>**file:** chrome/browser/ui/views/toolbar/overflow\_menu.h<br>**observation:** The class overrides the model delegate&#39;s IsCommandIdEnabled, not Views&#39; differently named IsCommandEnabled.<br>**quote:** bool IsCommandIdEnabled(int command\_id) const override;<br>**sourceIds:** [R09-S04](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.h>)<br>**startLine:** 205<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow\_menu.h\#L205-L222](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.h#L205-L222>)<br>**endLine:** 65<br>**file:** ui/views/controls/menu/menu\_delegate.cc<br>**observation:** Views&#39; default command-enabled response is true.<br>**quote:** bool MenuDelegate::IsCommandEnabled(int id) const \{<br>  return true;<br>\}<br>**sourceIds:** [R09-S27](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/views/controls/menu/menu_delegate.cc>)<br>**startLine:** 56<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/views/controls/menu/menu\_delegate.cc\#L56-L65](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/views/controls/menu/menu_delegate.cc#L56-L65>)<br>**endLine:** 277<br>**file:** ui/actions/actions.cc<br>**observation:** Changing ActionItem enablement emits a change notification.<br>**quote:** enabled\_ = enabled;<br>  ActionItemChanged();<br>**sourceIds:** [R09-S30](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/actions/actions.cc>)<br>**startLine:** 267<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/actions/actions.cc\#L267-L277](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/actions/actions.cc#L267-L277>)<br>**endLine:** 384<br>**file:** ui/actions/actions.cc<br>**observation:** InvokeAction retains its enabled guard; this hypothesis does not claim an authorization bypass.<br>**quote:** if (enabled\_) \{<br>**sourceIds:** [R09-S30](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/actions/actions.cc>)<br>**startLine:** 376<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/actions/actions.cc\#L376-L384](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/actions/actions.cc#L376-L384>)<br>**endLine:** 624<br>**file:** chrome/browser/ui/views/toolbar/toolbar\_controller.cc<br>**observation:** The controller delegates action-ID enablement to the current ActionItem.<br>**quote:** return pinned\_actions\_delegate\_-&gt;GetActionItemFor(id)-&gt;GetEnabled();<br>**sourceIds:** [R09-S06](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/toolbar_controller.cc>)<br>**startLine:** 606<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/toolbar\_controller.cc\#L606-L624](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/toolbar_controller.cc#L606-L624>)<br>**endLine:** 558<br>**file:** ui/menus/simple\_menu\_model.cc<br>**observation:** Model IsEnabledAt consults the delegate as well as the stored item&#39;s enabled flag.<br>**quote:** return delegate\_-&gt;IsCommandIdEnabled(command\_id) &amp;&amp;<br>**sourceIds:** [R09-S25](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/menus/simple_menu_model.cc>)<br>**startLine:** 548<br>**url:** [https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/menus/simple\_menu\_model.cc\#L548-L558](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/menus/simple_menu_model.cc#L548-L558>)

**Submission:** not-submitted. Needs a surviving-menu reproduction and confirmation of the intended live-state behavior before escalation.

No submission receipt URL recorded.

Sources: [R09-S03](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.cc>), [R09-S04](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu.h>), [R09-S05](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/overflow_menu_unittest.cc>), [R09-S06](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/toolbar_controller.cc>), [R09-S25](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/menus/simple_menu_model.cc>), [R09-S27](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/views/controls/menu/menu_delegate.cc>), [R09-S30](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/actions/actions.cc>).

Issue limitations:

- A deliberately frozen menu snapshot may be intentional; this has not been labeled a confirmed defect.
- Menu survival, keyboard selectability and accessibility state were not measured.
- The ActionItem execution guard remains, so no authorization bypass is established.
- Only selected tests were inspected; duplicate coverage and released-version impact are incomplete.

## Feature proposals (2)

These are proposals, not implementation or submission claims. A proposal may cite an already existing upstream request.

<a id="R07-issue-483899631"></a>

### R07-issue-483899631 — Please add a feature to remove the &quot;Open Link in Split View&quot; from the right click context menu.

Lane: [R07](<data/lanes/R07.json>) — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| feature-proposal | upstream-closed | Won&#39;t fix (Intended behavior) | not-run | upstream-reported / high |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/483899631>).

Reported versions (source claims): 145.0.7632.45<br>145.0.0.0.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Desktop; original OS unspecified<br>Windows in duplicate 492117351
- **component:** **id:** 1884424<br>**name:** UI &gt; Browser &gt; TopChrome &gt; TabStrip &gt; SplitView<br>**sourceIds:** [R07-source-483899631](<https://issues.chromium.org/issues/483899631>)
- **status Observed At:** 2026-11-21T14:18:24Z
- **channel:** Stable in the original request

**Saved inspection or proposed validation steps (not a local reproduction)**

1. Right-click a link.
2. Compare the Open Link in Split View position with the previously learned Open Link in new Window position.

**Expected / proposed outcome:** The requester wants a preference to remove the Split View menu command or configurable menu entries that preserve efficient access to frequently used commands.

**Observation as recorded (upstream-reported):** The requester reports wrong-action selection from muscle memory after a menu insertion. Upstream classifies the request as Intended behavior; official help documents the link-menu command and a separate drag-and-drop setting.

**Submission:** existing-upstream. Existing closed upstream feature request; this project has not submitted product feedback or a bug report.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/483899631](<https://issues.chromium.org/issues/483899631>).

Sources: [R07-source-483899631](<https://issues.chromium.org/issues/483899631>), [R07-source-492117351](<https://issues.chromium.org/issues/492117351>), [R07-source-split-view-help](<https://support.google.com/chrome/answer/16971124?hl=en-en&ref_topic=7439636>).

Issue limitations:

- The feature&#39;s presence is not a confirmed implementation defect.
- The original version is 145.0.7632.45; 145.0.0.0 and Windows come from the duplicate.
- Present-day menu order, any additional preferences, and the full closure rationale were not verified.

<a id="R07-issue-504663589"></a>

### R07-issue-504663589 — Feature Request: Option to lock tab groups so new tabs open outside the group

Lane: [R07](<data/lanes/R07.json>) — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings.

| Kind | Record status | Upstream status at saved observation | Reproduction | Evidence / confidence |
| --- | --- | --- | --- | --- |
| feature-proposal | upstream-open | New | not-run | upstream-reported / medium |

Upstream: [Existing upstream reference](<https://issues.chromium.org/issues/504663589>).

Reported versions (source claims): None recorded.

Locally tested versions recorded by this project: None recorded.

- **platforms:** Desktop workflow; OS unspecified in the current request
- **component:** **id:** 1457512<br>**name:** UI &gt; Browser &gt; TopChrome &gt; TabStrip &gt; TabGroups<br>**sourceIds:** [R07-source-504663589](<https://issues.chromium.org/issues/504663589>)
- **status Observed At:** 2026-11-21T14:18:33Z

**Saved inspection or proposed validation steps (not a local reproduction)**

1. Open a link in a new tab from a tab already inside a group.
2. Consider whether the group should keep a deliberately fixed membership or include the newly opened tab.

**Expected / proposed outcome:** The requester proposes a per-group lock or containment option that sends newly opened tabs outside the group while keeping its existing membership fixed.

**Observation as recorded (upstream-reported):** The requester says new tabs opened from a grouped tab are added to the group and disrupt curated groups. The current record is an open New feature request; an older similar request is closed as Obsolete.

**Submission:** existing-upstream. Existing open upstream feature request; this project has not submitted a proposal.

Existing report, not this project’s submission: [https://issues.chromium.org/issues/504663589](<https://issues.chromium.org/issues/504663589>).

Sources: [R07-source-40742612](<https://issues.chromium.org/issues/40742612>), [R07-source-504663589](<https://issues.chromium.org/issues/504663589>).

Issue limitations:

- No exact current browser version, OS, or local reproduction is available.
- This is a requested capability, not evidence of a violation of documented behavior.
- The older request&#39;s Obsolete closure does not close the current New request. Prevalence across other browsers and no-workaround assertions were not verified.

## Lane-level limitations

### R03 — Privacy, anonymity, and independent-browser workflows

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

### R05 — Mobile and regional browsers: documented capabilities and Chrome investigation candidates

- Complete means the assigned documentary handoff has been converted into sources, ten browser records, substantive features, source inconsistencies and ten proposal candidates. It does not mean unresolved engine, distribution, runtime, Chrome parity or feasibility questions have been answered.
- Research is documentary and source-inspected, not hands-on: no installations, browser launches, reproductions, compatibility tests, benchmarks, VPN captures or cryptographic audits were performed.
- All Chrome improvement candidates are hypotheses with parity unknown until R01 compares current Android and iOS versions separately, including device, region and channel. This lane establishes no missing Chrome feature.
- Retrieval dates refer to the saved research session on 2026-11-21. Page metadata, repository creation dates, corporate founding dates and unrelated extractor dates were not promoted to publication dates. Known version-release dates are labeled as such.
- Storefront/API records are snapshots. Recent source activity does not prove prompt binary security delivery, and an old release does not prove formal discontinuation. Kiwi has an explicit maintenance-ending notice; Focus has repository migrations.
- Platform, package, region, device, account, plan and media-site boundaries remain attached to claims. No privacy/security/performance superiority ranking is supported.

### R06 — Independent, keyboard-first, lightweight, experimental, and text browsers

- All research is documentary. Sources and release metadata are not runtime, security, performance or accessibility evidence.
- The ten projects include released graphical browsers, specialist interfaces, a constrained graphical browser, experimental browser/engine work and terminal text tools; they are not interchangeable Chrome replacements.
- No current Chrome baseline was inspected, so no Chrome feature absence, locally reproduced defect or measured inferiority is claimed.
- Original discovery had benched/refused search engines and duplicate returned batches; duplicates were not counted as independent corroboration. Conversion reused completed research without new queries.
- Long source histories and some reader-mode responses were truncated. Claims are limited to inspected passages; generic extraction metadata was not silently promoted to publication dates.
- Unresolved: Orion Linux/Windows source-handoff completion and successor stewardship; Nyxt native Windows readiness; exact Falkon 26.08.3 release date; w3m original-upstream activity and distribution-specific support.
- Ladybird&#39;s first alpha remained future-facing in inspected sources. Servo&#39;s 0.8.0 release remains a tech demo/prototype despite its GitHub channel flag.
- Failed reads included the Orion extension-document URL (404), GNOME GitLab raw documents (406), w3m SourceForge homepage (403), an incorrect w3m README.md path (404), Lynx CHANGES URL (404), and Qt overview (403). Failure is not feature or project absence.
- Source-linked recommendations are proposals requiring a current Chrome baseline and appropriate measurement. No upstream reports were submitted and no local reproductions were performed.

### R07 — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings

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

### R08 — Chrome/Chromium accessibility, performance and reliability regressions

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

### R09 — Chromium desktop toolbar menus and customization: source-only audit

- This shard converts completed source research; it adds no new Chromium research or runtime evidence.
- Thirty files were inspected, some only in focused excerpts; this is not a general audit of all desktop menus.
- App three-dot menu internals, tab-strip/renderer context menus, macOS native integration, complete feature gates, full policy-test inventory and platform-wide accessibility remain unaudited.
- Chromium main at the pinned revision is the only source baseline. Installed/released Chrome versions and field-trial states were not inspected, so released-version impact is unknown.
- No Chromium build, source execution, browser reproduction or Chromium test run was performed in this lane. Proposed reproduction steps are not test results.
- Per-file publication dates were not established; copyright years are not publication dates. Some retrievals retain only date-level precision.
- No candidate has a repository-wide test search or exhaustive body-verified duplicate search. Issue 359863838 remains an inaccessible overlap lead.
- Null-active-tab, checkbox-role-transition and drag-edge leads were not traced far enough to promote. TODOs, nonfatal CHECK migration markers and intentional feature gates were not counted as defects.
- No child agents or upstream submissions were made. All five issue records remain needs-validation with empty testedVersions.

## Source ledger

Direct links and dates below are the saved evidence, not fresh retrievals. Publication dates remain unknown when the source record does not establish them. Other dates retain their original field labels.

### R03 — Privacy, anonymity, and independent-browser workflows

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

### R05 — Mobile and regional browsers: documented capabilities and Chrome investigation candidates

**R05-C03 — [Cromite FAQ and Android-extension documentation conflict](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FAQ.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:24:51Z. Published: not established.

Source limitations:

- Undated mutable FAQ. Its categorical Android-extension answer conflicts with the pinned experimental source patch; do not use the FAQ alone to infer absence or compatibility.

**R05-C05 — [Cromite latest-release API snapshot](<https://api.github.com/repos/uazo/cromite/releases/latest>)**

Kind: release-note. Retrieved: 2026-11-21T14:31:10Z. Published: 2026-09-15T11:51:14Z.

- **source Revision:** 11507ac1061b5ea227806f5e84db5a57df6ccf6a

Source limitations:

- Publication timestamp belongs to the returned release v153.0.8010.37-11507ac1061b5ea227806f5e84db5a57df6ccf6a. The latest endpoint is mutable; artifacts and extension compatibility were not tested.

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

**R05-Q08 — [Quetta FAQ with over-broad cross-platform wording](<https://www.quetta.net/faq>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:30:40Z. Published: not established.

Source limitations:

- Site metadata date 2026-11-16 was not established as publication. Broad Android/iOS Chromium and Chrome-extension language conflicts in scope with the Android-specific guide and is insufficient to establish an iOS engine or extension host.

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

**R06-F5 — [Falkon announcements](<https://www.falkon.org/posts/>)**

Kind: release-note. Retrieved: 2026-11-21T14:14:32Z. Published: not established.

Source limitations:

- The newest visible announcement is dated 2023-09-02; an index has no single established publication date.
- An old announcements index does not establish project inactivity; the official feed lists newer releases.

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

**R06-O2 — [An Update on Orion for Linux and Windows](<https://blog.kagi.com/update-orion-linux-windows>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:14:15Z. Published: 2026-10-02.

Source limitations:

- Establishes Kagi&#39;s support decision, not completion of the promised source release or the existence of a successor maintainer.
- The continued operation of the Linux beta was a publisher statement, not a runtime observation.

**R06-O4 — [Installing Orion](<https://help.kagi.com/orion/getting-started/installing-orion.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:14:21Z. Published: not established.

Source limitations:

- Undated installation text continues to offer Linux beta; it does not supersede the dated cessation announcement.
- Download links were read, not installed or tested.

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

### R09 — Chromium desktop toolbar menus and customization: source-only audit

**R09-S01 — [Pinned toolbar button context-menu model](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/chrome/browser/ui/views/toolbar/pinned_action_toolbar_button_menu_model.cc>)**

Kind: source-code. Retrieved: 2026-11-21. Published: not established.

- **coverage:** Full body: pin state, visibility, enablement and dispatch.

Source limitations:

- Only date-level retrieval precision was retained. Source inspection only; original file publication date was not established.

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

**R09-S27 — [Views menu delegate default enablement](<https://github.com/chromium/chromium/blob/04d6a2d2bd0626ad343da0ef33e812e1360b44bd/ui/views/controls/menu/menu_delegate.cc>)**

Kind: source-code. Retrieved: 2026-11-21T14:28:28.215Z. Published: not established.

- **coverage:** Focused lines 52-88: default enablement and dispatch.

Source limitations:

- Defaults alone do not prove a runtime menu-state defect. Original publication date was not established.

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
