# Chrome improvement proposals

[CATALOG](<CATALOG.md>) · [FEATURES](<FEATURES.md>) · [ISSUES](<ISSUES.md>) · [AGENTS-LEDGER](<AGENTS-LEDGER.md>) · [RECOMMENDATIONS](<RECOMMENDATIONS.md>)

Generated from the saved JSON research shards. Rendering performs no research, source refresh, browser tests, builds, or submissions.

**Recovery notice:** Loaded lanes labelled as non-byte-exact reconstructions: [R01](<data/lanes/R01.json>), [R03](<data/lanes/R03.json>), [R04](<data/lanes/R04.json>), [R07](<data/lanes/R07.json>), [R08](<data/lanes/R08.json>), [R09](<data/lanes/R09.json>). See the `recovery` metadata in each linked JSON shard for provenance and limitations. Reconstruction does not establish fresh research or testing; original source dates and saved lane status retain their meanings.

Loaded snapshot: **10 lane shards**, **47 browser records**, **286 feature records**, **38 issue records**, **403 source records**. Counts describe records, not unique products or independently verified claims.

Saved lane status: **10 complete**, **0 partial**, out of **10 loaded shards**. These are the shards’ own scope/status labels; “complete” does not mean a complete project, exhaustive catalog, finished validation, or completed publication. Missing shards are outside this snapshot.

Recorded source-retrieval days: **2026-11-21**. Exact retrieval and original publication dates appear with the cited sources; no generation timestamp is substituted.

Documentary descriptions and upstream observations do not establish local behavior or universal availability. A missing browser, feature, or issue is not evidence of absence. Chrome parity and new-defect claims require their own evidence.

Priorities are editorial judgments. The saved Chrome baseline is credited before each proposed refinement; comparator documentation is not a benchmark or proof that Chrome lacks a capability. Acceptance criteria describe work to perform, not tests completed by this project.

Saved synthesis: [data/recommendations.json](<data/recommendations.json>). **24 proposal records**. As of: **2026-11-21**.

Editorial synthesis of the saved browser research into testable Chrome improvement proposals.

## Synthesis qualifications

- **coverage:** This synthesis draws on a bounded catalogue. It is not an exhaustive list of browsers, features, issues, or implementation requirements.
- **evidence:** Source and feature IDs resolve across data/lanes. Vendor documentation establishes a documented capability, not a measured outcome.
- **parity:** documented-gap requires an explicit Chrome limitation. partial-baseline credits related Chrome functionality but does not prove the proposed refinement is absent. unassessed makes no Chrome absence claim.
- **priority:** P1 means investigate first because the user outcome is concrete; P2 means a broader design or measurement effort. Priorities are editorial judgments, not measured impact scores.
- **submission:** These are proposals for evaluation, not reports submitted to Google or commitments by Chrome. Receipt records live separately in data/submissions.json.

## Comparison matrix

Feature links lead to the saved platform, availability, and lifecycle evidence. Direct primary-source links and their original dates appear in the detailed sections and source ledger.

| Proposal / target | Editorial priority / Chrome parity | Recorded Chrome baseline | Comparator feature records | Proposed outcome / sources |
| --- | --- | --- | --- | --- |
| [REC-01 — A supported Android extension experience](<#REC-01>)<br>Chrome for Android | P1<br>documented-gap | Chrome Web Store help explicitly excludes installation on mobile, even in desktop mode; syncing an extension is not executing it on a phone.<br>[Google Chrome: Chrome Web Store extensions on mobile — R01-FEATURE-MOBILE-EXTENSIONS](<FEATURES.md#R01-FEATURE-MOBILE-EXTENSIONS>)<br>[Google Chrome: Google Account sync and optional passphrase — R01-FEATURE-SYNC](<FEATURES.md#R01-FEATURE-SYNC>) | [Cromite: Experimental default-off Android-extension implementation — R05-F-cromite-experimental-extensions](<FEATURES.md#R05-F-cromite-experimental-extensions>)<br>[Quetta: Android Chrome and Edge extension installation and management — R05-F-quetta-android-extensions](<FEATURES.md#R05-F-quetta-android-extensions>)<br>[Yandex Browser: Android extension catalogs and lifecycle controls — R05-F-yandex-android-extensions](<FEATURES.md#R05-F-yandex-android-extensions>) | Evaluate a supported Android extension runtime with a declared API subset, compatibility reporting, mobile permission controls and reliable updates.<br>Sources: [R01-S36](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S41](<https://support.google.com/chrome_webstore/answer/1698338?hl=en>), [R05-C06](<https://raw.githubusercontent.com/uazo/cromite/11507ac1061b5ea227806f5e84db5a57df6ccf6a/build/patches/Experimental-support-for-extensions-on-Android.patch>), [R05-Q02](<https://www.quetta.net/features/extensions>), [R05-Y02](<https://yandex.com/support/browser-mobile-android-phone/en/personal-settings/extensions>) |
| [REC-02 — Identity-aware workspaces and predictable link routing](<#REC-02>)<br>Chrome desktop | P1<br>partial-baseline | Chrome documents separate profiles, named windows and saved groups. Visual grouping, per-site cookie containers and full-profile isolation are different boundaries.<br>[Google Chrome: Persistent project workspaces and collaborative contexts — R01-FEATURE-PROJECT-WORKSPACES](<FEATURES.md#R01-FEATURE-PROJECT-WORKSPACES>)<br>[Google Chrome: Saved and synced tab groups — R01-FEATURE-TAB-GROUPS](<FEATURES.md#R01-FEATURE-TAB-GROUPS>) | [Firefox: Multi-Account Containers — R02-FF-02](<FEATURES.md#R02-FF-02>)<br>[Dia: Profiles and hierarchy — R04-feature-dia-01](<FEATURES.md#R04-feature-dia-01>)<br>[Floorp: Container-linked workspaces with archives — R04-feature-floorp-01](<FEATURES.md#R04-feature-floorp-01>)<br>[Zen Browser: Workspace-default containers — R04-feature-zen-01](<FEATURES.md#R04-feature-zen-01>) | Evaluate named workspaces that visibly identify account context and explain which context receives an external or cross-workspace link.<br>Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S26](<https://support.google.com/chrome/answer/2364824?hl=en&co=GENIE.Platform%3DDesktop>), [R02-F6](<https://blog.mozilla.org/security/2020/02/06/multi-account-containers-sync/>), [R04-D2](<https://www.diabrowser.com/changelog>), [R04-F3](<https://docs.floorp.app/docs/features/workspaces/>), [R04-Z4](<https://docs.zen-browser.app/user-manual/workspaces>) |
| [REC-03 — Portable project and session structures](<#REC-03>)<br>Chrome desktop and mobile | P1<br>partial-baseline | Saved/synced groups and account-based synchronization already preserve some organization; lossless export of richer project structure was not established.<br>[Google Chrome: Persistent project workspaces and collaborative contexts — R01-FEATURE-PROJECT-WORKSPACES](<FEATURES.md#R01-FEATURE-PROJECT-WORKSPACES>)<br>[Google Chrome: Google Account sync and optional passphrase — R01-FEATURE-SYNC](<FEATURES.md#R01-FEATURE-SYNC>)<br>[Google Chrome: Saved and synced tab groups — R01-FEATURE-TAB-GROUPS](<FEATURES.md#R01-FEATURE-TAB-GROUPS>) | [Vivaldi: Rule-routed Workspaces — R02-VI-01](<FEATURES.md#R02-VI-01>)<br>[Dia: Organization portability and control — R04-feature-dia-06](<FEATURES.md#R04-feature-dia-06>)<br>[Zen Browser: Structure-aware continuity — R04-feature-zen-06](<FEATURES.md#R04-feature-zen-06>) | Evaluate inspectable, versioned exports for names, URLs, groups, pin destinations and layouts that remain useful when an account or browser service is retired.<br>Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S36](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>), [R02-V4](<https://help.vivaldi.com/desktop/tabs/workspaces/>), [R04-A1](<https://arc.net/>), [R04-D2](<https://www.diabrowser.com/changelog>), [R04-T1](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>), [R04-Z3](<https://zen-browser.app/release-notes>) |
| [REC-04 — Saved multi-pane layouts and preview promotion](<#REC-04>)<br>Chrome desktop and tablets | P1<br>partial-baseline | Chrome already documents two-page split view, stacked orientation, swap/separate controls and a toolbar button.<br>[Google Chrome: Persistent project workspaces and collaborative contexts — R01-FEATURE-PROJECT-WORKSPACES](<FEATURES.md#R01-FEATURE-PROJECT-WORKSPACES>)<br>[Google Chrome: Two-page split view — R01-FEATURE-SPLIT-VIEW](<FEATURES.md#R01-FEATURE-SPLIT-VIEW>) | [Vivaldi: Multi-way tab tiling — R02-VI-03](<FEATURES.md#R02-VI-03>)<br>[Dia: Remembered split layouts — R04-feature-dia-02](<FEATURES.md#R04-feature-dia-02>)<br>[Floorp: Up to four simultaneous panes — R04-feature-floorp-02](<FEATURES.md#R04-feature-floorp-02>)<br>[Zen Browser: Glance previews — R04-feature-zen-02](<FEATURES.md#R04-feature-zen-02>) | Evaluate two-to-four-pane research layouts, explicit persistence and transitions from a temporary preview into a normal tab or split.<br>Sources: [R01-S20](<https://support.google.com/chrome/answer/16971124?hl=en&co=GENIE.Platform%3DDesktop>), [R02-V6](<https://help.vivaldi.com/desktop/tabs/tab-tiling/>), [R04-D1](<https://www.diabrowser.com/>), [R04-F4](<https://docs.floorp.app/docs/features/split-view/>), [R04-Z5](<https://docs.zen-browser.app/user-manual/glance>) |
| [REC-05 — Discoverable deterministic browser commands](<#REC-05>)<br>Chrome desktop | P1<br>unassessed | Chrome exposes toolbar controls and optional Gemini surfaces. Existing omnibox actions and command-search coverage need a task-specific baseline.<br>[Google Chrome: Desktop toolbar customization — R01-FEATURE-DESKTOP-TOOLBAR](<FEATURES.md#R01-FEATURE-DESKTOP-TOOLBAR>)<br>[Google Chrome: Gemini availability and granular controls — R01-FEATURE-GEMINI-CONTROLS](<FEATURES.md#R01-FEATURE-GEMINI-CONTROLS>) | [SigmaOS: Lazy Search and command filtering — R04-feature-sigmaos-03](<FEATURES.md#R04-feature-sigmaos-03>)<br>[Zen Browser: Command surface — R04-feature-zen-04](<FEATURES.md#R04-feature-zen-04>)<br>[Nyxt: Fuzzy buffer switching and multi-object commands — R06-F-NYXT-FUZZY-MULTISELECT](<FEATURES.md#R06-F-NYXT-FUZZY-MULTISELECT>)<br>[qutebrowser: Command line and contextual help — R06-F-QUTEBROWSER-COMMAND-HELP](<FEATURES.md#R06-F-QUTEBROWSER-COMMAND-HELP>) | Evaluate searchable named browser actions with contextual help, visible shortcuts and an explicit choice between ordinary commands, search and AI.<br>Sources: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>), [R04-S2](<https://docs.sigmaos.com/common-questions>), [R04-Z3](<https://zen-browser.app/release-notes>), [R06-N1](<https://raw.githubusercontent.com/atlas-engineer/nyxt/master/README.org>), [R06-N2](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>), [R06-Q2](<https://qutebrowser.org/doc/quickstart.html>) |
| [REC-06 — Consistent, accessible menu and toolbar customization](<#REC-06>)<br>Chrome desktop and mobile | P1<br>partial-baseline | Chrome already supports offered toolbar buttons and desktop reordering. Comprehensive menu editing is unresolved. R09 separately records managed-state and command-identity concerns in pinned source.<br>[Google Chrome: Android toolbar shortcut selection — R01-FEATURE-ANDROID-TOOLBAR-SHORTCUT](<FEATURES.md#R01-FEATURE-ANDROID-TOOLBAR-SHORTCUT>)<br>[Google Chrome: Desktop toolbar customization — R01-FEATURE-DESKTOP-TOOLBAR](<FEATURES.md#R01-FEATURE-DESKTOP-TOOLBAR>)<br>[Google Chrome: Comprehensive menu and context-menu customization — R01-FEATURE-MENU-CUSTOMIZATION](<FEATURES.md#R01-FEATURE-MENU-CUSTOMIZATION>) | [Samsung Internet / Samsung Browser: Customizable menus, dark mode and control placement — R05-F-samsung-ergonomics](<FEATURES.md#R05-F-samsung-ergonomics>)<br>[Orion by Kagi: Mini Toolbar, Overflow Menu and Page Tweak — R06-F-ORION-COMPACT-PAGE-UI](<FEATURES.md#R06-F-ORION-COMPACT-PAGE-UI>) | Evaluate targeted hide/reorder/reset controls while ensuring labels, stable action identity, effective policy state and accessible enablement agree.<br>Sources: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S28](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DAndroid>), [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>), [R05-S02](<https://developer.samsung.com/browser/release-note/android-release-note.html>), [R06-O1](<https://blog.kagi.com/orion>) |
| [REC-07 — Hierarchical tabs with recoverable bulk actions](<#REC-07>)<br>Chrome desktop | P2<br>partial-baseline | Vertical tabs and named/color saved groups are documented Chrome features. A hierarchy-specific workflow needs comparison with those controls.<br>[Google Chrome: Saved and synced tab groups — R01-FEATURE-TAB-GROUPS](<FEATURES.md#R01-FEATURE-TAB-GROUPS>)<br>[Google Chrome: Vertical tabs — R01-FEATURE-VERTICAL-TABS](<FEATURES.md#R01-FEATURE-VERTICAL-TABS>) | [Vivaldi: Tab Stacks and stack-wide actions — R02-VI-02](<FEATURES.md#R02-VI-02>)<br>[Waterfox: Tree-structured tabs and subtree actions — R03-F-W03](<FEATURES.md#R03-F-W03>)<br>[SigmaOS: Tabs as tasks — R04-feature-sigmaos-01](<FEATURES.md#R04-feature-sigmaos-01>) | Evaluate parent/child organization, subtree selection and explicit temporary, saved and completed states with reliable undo.<br>Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R02-V5](<https://help.vivaldi.com/desktop/tabs/tab-stacks/>), [R03-S-W1](<https://www.waterfox.com/>), [R04-S1](<https://sigmaos.com/>) |
| [REC-08 — User-selected web panels and account-labeled app presence](<#REC-08>)<br>Chrome desktop | P2<br>partial-baseline | Built-in panels and the extension Side Panel API already exist. Arbitrary-site pinning, simultaneous panels and account-scoped notifications were not established.<br>[Google Chrome: Persistent project workspaces and collaborative contexts — R01-FEATURE-PROJECT-WORKSPACES](<FEATURES.md#R01-FEATURE-PROJECT-WORKSPACES>)<br>[Google Chrome: Built-in and extension side panels — R01-FEATURE-SIDE-PANELS](<FEATURES.md#R01-FEATURE-SIDE-PANELS>) | [Vivaldi: User-selected Web Panels — R02-VI-05](<FEATURES.md#R02-VI-05>)<br>[Floorp: Any-site web panels — R04-feature-floorp-03](<FEATURES.md#R04-feature-floorp-03>)<br>[Wavebox: Multi-account app presence — R04-feature-wavebox-02](<FEATURES.md#R04-feature-wavebox-02>) | Evaluate a bounded panel/app model with visible account labels, notification scope and predictable links back to full tabs.<br>Sources: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S37](<https://developer.chrome.com/docs/extensions/reference/api/sidePanel>), [R02-V8](<https://help.vivaldi.com/desktop/panels/web-panels/>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>), [R04-W1](<https://wavebox.io/>), [R04-W2](<https://wavebox.io/platform>) |
| [REC-09 — Citation-preserving notes and research capture](<#REC-09>)<br>Chrome desktop and mobile | P1<br>unassessed | Chrome offers reading and capture building blocks. An integrated source-linked notes/export workflow was not assessed.<br>[Google Chrome: DevTools screenshot capture — R01-FEATURE-DEVTOOLS-SCREENSHOTS](<FEATURES.md#R01-FEATURE-DEVTOOLS-SCREENSHOTS>)<br>[Google Chrome: Reading mode, including immersive full-page reading — R01-FEATURE-READING-MODE](<FEATURES.md#R01-FEATURE-READING-MODE>) | [Vivaldi: Provenance-preserving Notes and open-format export — R02-VI-06](<FEATURES.md#R02-VI-06>)<br>[Dia: Organization portability and control — R04-feature-dia-06](<FEATURES.md#R04-feature-dia-06>)<br>[Floorp: Integrated notes and desktop customization — R04-feature-floorp-05](<FEATURES.md#R04-feature-floorp-05>) | Evaluate notes that retain source URL, capture date, selected text and optional images, with open-format export and clear stale-source handling.<br>Sources: [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R01-S29](<https://developer.chrome.com/blog/devtools-tips-33>), [R02-V9](<https://help.vivaldi.com/desktop/panels/notes/>), [R04-D2](<https://www.diabrowser.com/changelog>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>) |
| [REC-10 — Discoverable capture, annotation and redaction](<#REC-10>)<br>Chrome desktop and mobile | P1<br>partial-baseline | DevTools already captures full pages, regions and nodes; Android also has OS capture. A non-DevTools editing workflow remains unresolved.<br>[Google Chrome: Consumer screenshot, scrolling capture, and annotation workflow — R01-FEATURE-CONSUMER-SCREENSHOT-WORKFLOW](<FEATURES.md#R01-FEATURE-CONSUMER-SCREENSHOT-WORKFLOW>)<br>[Google Chrome: DevTools screenshot capture — R01-FEATURE-DEVTOOLS-SCREENSHOTS](<FEATURES.md#R01-FEATURE-DEVTOOLS-SCREENSHOTS>) | [Firefox: Built-in PDF forms and annotations — R02-FF-06](<FEATURES.md#R02-FF-06>)<br>[Quetta: iOS reader layout and webpage image/PDF capture — R05-F-quetta-ios-reading-capture](<FEATURES.md#R05-F-quetta-ios-reading-capture>) | Evaluate a simple user-facing capture path with preview, annotation and genuinely destructive pixel redaction before export.<br>Sources: [R01-S29](<https://developer.chrome.com/blog/devtools-tips-33>), [R01-S30](<https://support.google.com/android/answer/9075928?hl=en>), [R02-F11](<https://www.firefox.com/en-US/features/pdf-editor/>), [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-Q03](<https://www.quetta.net/products/ios>) |
| [REC-11 — Explicit local-processing choices for translation](<#REC-11>)<br>Chrome desktop and mobile | P2<br>unassessed | Chrome&#39;s local generative-model control is documented. Translation-specific local/remote processing and offline behavior were not researched in the baseline.<br>[Google Chrome: On-device generative-model removal and download control — R01-FEATURE-ON-DEVICE-AI-CONTROL](<FEATURES.md#R01-FEATURE-ON-DEVICE-AI-CONTROL>)<br>[Google Chrome: Reading mode, including immersive full-page reading — R01-FEATURE-READING-MODE](<FEATURES.md#R01-FEATURE-READING-MODE>) | [Firefox: On-device webpage translation — R02-FF-03](<FEATURES.md#R02-FF-03>)<br>[Yandex Browser: Android page, text and in-page image translation — R05-F-yandex-android-translation](<FEATURES.md#R05-F-yandex-android-translation>)<br>[Yandex Browser: iPhone translation with image upload — R05-F-yandex-iphone-translation](<FEATURES.md#R05-F-yandex-iphone-translation>) | Evaluate clear local-versus-remote processing indicators, downloadable language resources and explicit upload choices for image translation.<br>Sources: [R01-S39](<https://support.google.com/chrome/answer/16961953?hl=en>), [R02-F7](<https://www.firefox.com/en-US/features/translate/>), [R02-F8](<https://blog.mozilla.org/en/firefox/cjk-translation-on-android/>), [R05-Y03](<https://yandex.com/support/browser-mobile-android-phone/en/navigation/translation>), [R05-Y04](<https://yandex.com/support/browser-mobile-iphone/en/navigation/translation>) |
| [REC-12 — Offline, contextual help and keyboard discovery](<#REC-12>)<br>Chrome desktop | P2<br>unassessed | Chrome provides help and user-facing reading controls; offline troubleshooting and contextual shortcut coverage need direct examination.<br>[Google Chrome: Desktop toolbar customization — R01-FEATURE-DESKTOP-TOOLBAR](<FEATURES.md#R01-FEATURE-DESKTOP-TOOLBAR>)<br>[Google Chrome: Reading mode, including immersive full-page reading — R01-FEATURE-READING-MODE](<FEATURES.md#R01-FEATURE-READING-MODE>) | [Tor Browser: Bundled offline desktop manual — R03-F-T06](<FEATURES.md#R03-F-T06>)<br>[Dillo: Offline help and keyboard command discovery — R06-F-DILLO-LOCAL-KEY-HELP](<FEATURES.md#R06-F-DILLO-LOCAL-KEY-HELP>)<br>[Lynx: In-context help and keymap — R06-F-LYNX-KEYMAP-HELP](<FEATURES.md#R06-F-LYNX-KEYMAP-HELP>)<br>[qutebrowser: Link and element hints — R06-F-QUTEBROWSER-ELEMENT-HINTS](<FEATURES.md#R06-F-QUTEBROWSER-ELEMENT-HINTS>) | Evaluate compact offline troubleshooting, in-context key help and optional link hints that remain compatible with assistive technology.<br>Sources: [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R03-S-T1](<https://blog.torproject.org/new-release-tor-browser-160>), [R06-D2](<https://dillo-browser.org/release/3.3.0/>), [R06-D3](<https://dillo-browser.org/user_help.html>), [R06-Q2](<https://qutebrowser.org/doc/quickstart.html>), [R06-Y4](<https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html>) |
| [REC-13 — One understandable view of optional AI controls](<#REC-13>)<br>Chrome desktop and managed deployments | P1<br>partial-baseline | Chrome can already remove local generative models and prevent re-download. Gemini visibility, tab sharing, feature eligibility and enterprise disabling are separate controls.<br>[Google Chrome: Gemini availability and granular controls — R01-FEATURE-GEMINI-CONTROLS](<FEATURES.md#R01-FEATURE-GEMINI-CONTROLS>)<br>[Google Chrome: On-device generative-model removal and download control — R01-FEATURE-ON-DEVICE-AI-CONTROL](<FEATURES.md#R01-FEATURE-ON-DEVICE-AI-CONTROL>) | [Brave: Origin minimalist edition and feature-control upgrade — R02-BR-06](<FEATURES.md#R02-BR-06>)<br>[DuckDuckGo Browser: Consolidated optional-AI opt-out — R03-F-D05](<FEATURES.md#R03-F-D05>)<br>[Shift: Independent AI controls — R04-feature-shift-06](<FEATURES.md#R04-feature-shift-06>) | Evaluate a consolidated dashboard explaining local assets, remote processing, UI prompts and policy scope, including an optional broad off setting with precisely enumerated effects.<br>Sources: [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S39](<https://support.google.com/chrome/answer/16961953?hl=en>), [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>), [R02-B6](<https://brave.com/blog/brave-origin>), [R03-S-D2](<https://duckduckgo.com/updates>), [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>) |
| [REC-14 — Visible AI context, action scope and cancellation](<#REC-14>)<br>Chrome AI-assisted workflows | P1<br>partial-baseline | Gemini help already documents opt-in and feature-specific sharing/permissions. Current auto-browse and task-stop semantics need their own assessment.<br>[Google Chrome: Gemini availability and granular controls — R01-FEATURE-GEMINI-CONTROLS](<FEATURES.md#R01-FEATURE-GEMINI-CONTROLS>) | [Perplexity Comet: Parallel Background Assistants — R04-feature-comet-03](<FEATURES.md#R04-feature-comet-03>)<br>[Perplexity Comet: Consumer and enterprise action controls — R04-feature-comet-04](<FEATURES.md#R04-feature-comet-04>)<br>[Dia: Queue and steer ongoing chat — R04-feature-dia-05](<FEATURES.md#R04-feature-dia-05>)<br>[Opera Neon: Neon Do control surface — R04-feature-neon-02](<FEATURES.md#R04-feature-neon-02>)<br>[Shift: Visible, opt-in AI context — R04-feature-shift-05](<FEATURES.md#R04-feature-shift-05>) | Evaluate explicit context selection, read-versus-act scope and a task view showing pause, stop, takeover, queued steering and already-completed actions.<br>Sources: [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>), [R04-C4](<https://www.perplexity.ai/help-center/comet/en/articles/12658082-control-what-comet-assistant-can-use.md>), [R04-C6](<https://www.perplexity.ai/help-center/en/articles/13531023-managing-comet-assistant-permissions.md>), [R04-C7](<https://www.perplexity.ai/changelog/what-we-shipped-october-3rd>), [R04-D2](<https://www.diabrowser.com/changelog>), [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>) |
| [REC-15 — Scope-aware private sessions and incoming links](<#REC-15>)<br>Chrome desktop and mobile | P1<br>partial-baseline | Incognito limits retained local session data and has distinct cookie defaults. It does not make a user invisible to sites or networks.<br>[Google Chrome: Incognito local-session privacy — R01-FEATURE-INCOGNITO](<FEATURES.md#R01-FEATURE-INCOGNITO>)<br>[Google Chrome: Third-party-cookie controls — R01-FEATURE-THIRD-PARTY-COOKIES](<FEATURES.md#R01-FEATURE-THIRD-PARTY-COOKIES>) | [DuckDuckGo Browser: Fire Button, Fireproof exceptions and isolated Fire sessions — R03-F-D03](<FEATURES.md#R03-F-D03>)<br>[Mullvad Browser: Private browsing by default and Clear Private Session — R03-F-M02](<FEATURES.md#R03-F-M02>)<br>[Tor Browser: Separate New Identity and New Tor Circuit controls — R03-F-T03](<FEATURES.md#R03-F-T03>)<br>[Waterfox: Private tabs alongside regular tabs — R03-F-W01](<FEATURES.md#R03-F-W01>)<br>[Firefox Focus: One-action local session disposal — R05-F-focus-erase](<FEATURES.md#R05-F-focus-erase>)<br>[Samsung Internet / Samsung Browser: Secret Mode, incoming private links and tracking controls — R05-F-samsung-private-links](<FEATURES.md#R05-F-samsung-private-links>) | Evaluate clear temporary-session entry/reset controls and incoming-link choices with explicit explanations of shared state, retained exceptions and deletion triggers.<br>Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>), [R03-S-D4](<https://duckduckgo.com/duckduckgo-help-pages/privacy/fire-tabs>), [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>), [R03-S-T3](<https://support.torproject.org/tor-browser/features/managing-identities>), [R03-S-W1](<https://www.waterfox.com/>), [R05-F01](<https://www.firefox.com/en-US/mobile/focus/>), [R05-S02](<https://developer.samsung.com/browser/release-note/android-release-note.html>) |
| [REC-16 — Account-independent encrypted synchronization](<#REC-16>)<br>Chrome desktop and mobile | P2<br>partial-baseline | Chrome documents Google Account sync and an optional passphrase with data-type limitations. Accountless pairing and self-hosted sync were not established.<br>[Google Chrome: Google Account sync and optional passphrase — R01-FEATURE-SYNC](<FEATURES.md#R01-FEATURE-SYNC>) | [Brave: User-held-key encrypted Sync — R02-BR-02](<FEATURES.md#R02-BR-02>)<br>[DuckDuckGo Browser: Accountless end-to-end encrypted Sync &amp; Backup — R03-F-D04](<FEATURES.md#R03-F-D04>) | Evaluate user-held-key device pairing with understandable recovery, device revocation, data-type selection and local-copy behavior.<br>Sources: [R01-S36](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>), [R02-B2](<https://brave.com/privacy/browser/>), [R03-S-D5](<https://duckduckgo.com/sync_and_backup/privacy>) |
| [REC-17 — Truthful consent automation and privacy-signal status](<#REC-17>)<br>Chrome desktop and mobile | P2<br>partial-baseline | DNT, cookie settings and the staged California opt-out/GPC-style setting are distinct. A signal does not prove that a site honored it.<br>[Google Chrome: Do Not Track request — R01-FEATURE-DO-NOT-TRACK](<FEATURES.md#R01-FEATURE-DO-NOT-TRACK>)<br>[Google Chrome: Regional opt-out request / GPC-style privacy signal — R01-FEATURE-REGIONAL-OPT-OUT](<FEATURES.md#R01-FEATURE-REGIONAL-OPT-OUT>)<br>[Google Chrome: Third-party-cookie controls — R01-FEATURE-THIRD-PARTY-COOKIES](<FEATURES.md#R01-FEATURE-THIRD-PARTY-COOKIES>) | [DuckDuckGo Browser: Automatic cookie-consent handling with limited coverage — R03-F-D02](<FEATURES.md#R03-F-D02>)<br>[DuckDuckGo Browser: Layered tracking controls with platform-specific coverage — R03-F-D06](<FEATURES.md#R03-F-D06>) | Evaluate opt-in consent automation that reports rejection, partial configuration, cosmetic hiding and unsupported cases separately; show emitted privacy signals without claiming universal enforcement.<br>Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S32](<https://support.google.com/chrome/answer/2790761?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S33](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>), [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>) |
| [REC-18 — Measured, coherent fingerprint-resistance options](<#REC-18>)<br>Chrome privacy evaluation | P2<br>unassessed | Incognito and cookie controls do not by themselves establish comprehensive fingerprint resistance. Chrome&#39;s complete protection profile is outside this baseline.<br>[Google Chrome: Incognito local-session privacy — R01-FEATURE-INCOGNITO](<FEATURES.md#R01-FEATURE-INCOGNITO>)<br>[Google Chrome: Third-party-cookie controls — R01-FEATURE-THIRD-PARTY-COOKIES](<FEATURES.md#R01-FEATURE-THIRD-PARTY-COOKIES>) | [LibreWolf: RFP, normalized language and disabled WebGL — R03-F-L02](<FEATURES.md#R03-F-L02>)<br>[Mullvad Browser: Coherent fingerprint-resistance defaults — R03-F-M01](<FEATURES.md#R03-F-M01>)<br>[Tor Browser: Fingerprint normalization and desktop letterboxing — R03-F-T04](<FEATURES.md#R03-F-T04>) | Evaluate an internally consistent privacy preset against a defined threat model and representative population, rather than independently changing cosmetic attributes.<br>Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>), [R03-S-L2](<https://librewolf.net/docs/features/>), [R03-S-M2](<https://mullvad.net/en/browser/hard-facts>), [R03-S-T4](<https://support.torproject.org/tor-browser/features/fingerprinting-protections>) |
| [REC-19 — Transparent destinations and reversible clean-link copying](<#REC-19>)<br>Chrome desktop and mobile | P1<br>unassessed | Chrome destination display, copy-link variants and query-cleaning coverage require a separate navigation baseline.<br>[Google Chrome: Desktop toolbar customization — R01-FEATURE-DESKTOP-TOOLBAR](<FEATURES.md#R01-FEATURE-DESKTOP-TOOLBAR>)<br>[Google Chrome: Third-party-cookie controls — R01-FEATURE-THIRD-PARTY-COOKIES](<FEATURES.md#R01-FEATURE-THIRD-PARTY-COOKIES>) | [LibreWolf: Tracking-parameter removal and reduced speculative networking — R03-F-L04](<FEATURES.md#R03-F-L04>)<br>[ungoogled-chromium: Explicit address-bar search and suggestion controls — R03-F-U04](<FEATURES.md#R03-F-U04>)<br>[ungoogled-chromium: Additional configuration flags and transparent URL display — R03-F-U05](<FEATURES.md#R03-F-U05>)<br>[Waterfox: Persistent status-bar URL display — R03-F-W04](<FEATURES.md#R03-F-W04>) | Evaluate inspectable full destinations, explicit search interpretation and a clean-link copy preview that preserves access to the original URL.<br>Sources: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>), [R03-S-L2](<https://librewolf.net/docs/features/>), [R03-S-U1](<https://github.com/ungoogled-software/ungoogled-chromium>), [R03-S-W1](<https://www.waterfox.com/>) |
| [REC-20 — Explainable project-level resource controls](<#REC-20>)<br>Chrome desktop | P2<br>unassessed | Chrome&#39;s existing task manager, memory and energy features must be measured before proposing a gap; this baseline concentrated on organization and UI controls.<br>[Google Chrome: Persistent project workspaces and collaborative contexts — R01-FEATURE-PROJECT-WORKSPACES](<FEATURES.md#R01-FEATURE-PROJECT-WORKSPACES>)<br>[Google Chrome: Saved and synced tab groups — R01-FEATURE-TAB-GROUPS](<FEATURES.md#R01-FEATURE-TAB-GROUPS>) | [Microsoft Edge: Sleeping tabs and Energy saver — R02-ED-04](<FEATURES.md#R02-ED-04>)<br>[Floorp: Overlay/floating and unload controls — R04-feature-floorp-04](<FEATURES.md#R04-feature-floorp-04>)<br>[Wavebox: Navigator resource overview — R04-feature-wavebox-05](<FEATURES.md#R04-feature-wavebox-05>) | Evaluate resource explanations and suspend/resume controls organized around a user&#39;s projects or apps, with clear attribution and state-loss boundaries.<br>Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R02-E7](<https://support.microsoft.com/en-us/edge/learn-about-performance-features-in-microsoft-edge>), [R02-G2](<https://www.opera.com/gx/linux>), [R02-G3](<https://www.opera.com/gx/features/gx-control>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>), [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>) |
| [REC-21 — Reversible abuse protection with visible explanations](<#REC-21>)<br>Chrome desktop and mobile | P2<br>unassessed | Safe Browsing is documented. Existing Chrome notification revocation and clipboard/ClickFix interventions need targeted comparison.<br>[Google Chrome: Safe Browsing protection levels — R01-FEATURE-SAFE-BROWSING](<FEATURES.md#R01-FEATURE-SAFE-BROWSING>) | [Microsoft Edge: Reversible automatic notification revocation — R02-ED-07](<FEATURES.md#R02-ED-07>) | Evaluate explanations and recovery paths for abusive-notification revocation and suspicious clipboard instructions, preserving legitimate user actions.<br>Sources: [R01-S35](<https://support.google.com/chrome/answer/9890866?hl=en&co=GENIE.Platform%3DDesktop>), [R02-E1](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel>), [R02-O5](<https://blogs.opera.com/security/2026/07/how-opera-paste-protect-guards-against-clipboard-attacks/>) |
| [REC-22 — Versioned feature, protection and lifecycle information](<#REC-22>)<br>Chrome help and release information | P1<br>partial-baseline | Chrome help, release announcements and VersionHistory already exist. Feature eligibility and rollout are not the same as the highest available version number.<br>[Google Chrome: Gemini availability and granular controls — R01-FEATURE-GEMINI-CONTROLS](<FEATURES.md#R01-FEATURE-GEMINI-CONTROLS>)<br>[Google Chrome: Privacy Sandbox retirement-plan qualification — R01-FEATURE-PRIVACY-SANDBOX-TRANSITION](<FEATURES.md#R01-FEATURE-PRIVACY-SANDBOX-TRANSITION>)<br>[Google Chrome: Regional opt-out request / GPC-style privacy signal — R01-FEATURE-REGIONAL-OPT-OUT](<FEATURES.md#R01-FEATURE-REGIONAL-OPT-OUT>) | [DuckDuckGo Browser: Layered tracking controls with platform-specific coverage — R03-F-D06](<FEATURES.md#R03-F-D06>)<br>[Mullvad Browser: Explicit encrypted-DNS settings and Quad9 migration — R03-F-M05](<FEATURES.md#R03-F-M05>)<br>[Nyxt: 5.0 CEF extension and request-blocking integration — R06-F-NYXT-CEF-EXTENSIONS-BLOCKING](<FEATURES.md#R06-F-NYXT-CEF-EXTENSIONS-BLOCKING>) | Evaluate a user-visible matrix linking platform, channel, region, edition, engine version and feature rollout, with clear retirement and documentation-review dates.<br>Sources: [R01-S10](<https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html>), [R01-S11](<https://developer.chrome.com/docs/web-platform/versionhistory/reference>), [R01-S12](<https://versionhistory.googleapis.com/v1/chrome/platforms/win64/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S33](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S42](<https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies>), [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>), [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>), [R06-N3](<https://nyxt-browser.com/article/release-5.0.0.org>), [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>) |
| [REC-23 — Honest offline-media and reading states](<#REC-23>)<br>Chrome mobile and desktop | P2<br>unassessed | Chrome reading mode and read-aloud are documented. Saved-media, offline queue and multi-picture-in-picture parity were not assessed.<br>[Google Chrome: Reading mode, including immersive full-page reading — R01-FEATURE-READING-MODE](<FEATURES.md#R01-FEATURE-READING-MODE>) | [Brave: Playlist offline and background playback — R02-BR-04](<FEATURES.md#R02-BR-04>)<br>[Firefox: Multiple Picture-in-Picture video windows — R02-FF-05](<FEATURES.md#R02-FF-05>)<br>[Quetta: Media queues with qualified downloads and offline access — R05-F-quetta-media](<FEATURES.md#R05-F-quetta-media>)<br>[Samsung Internet / Samsung Browser: Video Assistant — R05-F-samsung-video](<FEATURES.md#R05-F-samsung-video>) | Evaluate explicit saved-link, downloaded, expired and unavailable states for supported media/reading queues, with accessible playback controls.<br>Sources: [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R02-B4](<https://brave.com/playlist/>), [R02-F10](<https://www.firefox.com/en-US/features/picture-in-picture/>), [R05-Q06](<https://www.quetta.net/features/video-downloader>), [R05-Q07](<https://www.quetta.net/features/playlist>), [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>) |
| [REC-24 — Optional generic operating-system window titles](<#REC-24>)<br>Chrome desktop | P2<br>unassessed | Incognito&#39;s local-history scope does not by itself describe what operating-system window titles expose. Existing Chrome title controls were not assessed.<br>[Google Chrome: Incognito local-session privacy — R01-FEATURE-INCOGNITO](<FEATURES.md#R01-FEATURE-INCOGNITO>) | [Mullvad Browser: Opt-in generic OS window titles — R03-F-M06](<FEATURES.md#R03-F-M06>)<br>[Tor Browser: Opt-in generic OS window titles — R03-F-T05](<FEATURES.md#R03-F-T05>) | Evaluate an opt-in generic window-title mode for users who want to reduce page-title disclosure to local window listings.<br>Sources: [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>), [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>), [R03-S-T1](<https://blog.torproject.org/new-release-tor-browser-160>) |

<a id="REC-01"></a>

## REC-01 — A supported Android extension experience

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome for Android | mobile-extensions | P1 | needs-validation | documented-gap |

### Recorded Chrome baseline

Chrome Web Store help explicitly excludes installation on mobile, even in desktop mode; syncing an extension is not executing it on a phone.

#### [Google Chrome: Chrome Web Store extensions on mobile — R01-FEATURE-MOBILE-EXTENSIONS](<FEATURES.md#R01-FEATURE-MOBILE-EXTENSIONS>)

**Availability:** explicitly-unsupported. **Platforms / editions:** Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Official Chrome Web Store help explicitly says extensions and themes can only be used on computers and cannot be installed from a mobile device, even in desktop mode. This is an evidence-backed unsupported capability, rather than a conclusion from missing documentation.

Feature limitations:

- The finding is scoped to the documented Chrome Web Store/mobile Chrome experience, not all Chromium-based mobile browsers.
- Syncing extension-related information does not imply mobile extension execution.
- No mobile installation or implementation feasibility test was performed.

Sources: [R01-S36](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S41](<https://support.google.com/chrome_webstore/answer/1698338?hl=en>).

#### [Google Chrome: Google Account sync and optional passphrase — R01-FEATURE-SYNC](<FEATURES.md#R01-FEATURE-SYNC>)

**Availability:** documented. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Chrome documents saving bookmarks, reading list, passwords, settings, and other information in a Google Account, with data-type controls and a separately controllable History and tabs option. Tab-group changes can sync between signed-in desktop, Android, and iOS devices. An optional passphrase has documented exclusions and trade-offs: Google Wallet payment methods and addresses are not covered, full history is not synced, and only web addresses entered in the address bar are synced under that history limitation.

Feature limitations:

- Extension-related information in sync is not evidence that mobile Chrome can execute those extensions.
- With a passphrase, the documentation also limits password access through passwords.google.com; this is not an all-data, all-service equivalence claim.
- Self-hosted or account-free browser sync was not established. No account data, encryption, or cross-device synchronization was tested.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>), [R01-S36](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S41](<https://support.google.com/chrome_webstore/answer/1698338?hl=en>).

### Proposed refinement

Evaluate a supported Android extension runtime with a declared API subset, compatibility reporting, mobile permission controls and reliable updates.

### Comparator evidence

#### [Cromite: Experimental default-off Android-extension implementation — R05-F-cromite-experimental-extensions](<FEATURES.md#R05-F-cromite-experimental-extensions>)

**Availability:** limited. **Platforms / editions:** Android; release-pinned source implementation. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R05-B-cromite>).

**Evidence / confidence:** source-inspected / high.

The source pinned to the observed September 2026 release contains an experimental Android-extension patch whose description says the feature is disabled by default. The release-linked maintainer changelog also discusses extension fixes. The mutable FAQ still says Android extensions are unsupported, so the defensible result is qualified source-evidenced experimentation.

Feature limitations:

- Patch presence is not proof that every release artifact exposes a working host or supports every extension. No binary, popup, permissions, private-mode isolation or background-resume test was run.
- The patch-header date is 2025-11-06; it is not a verified rollout date. The FAQ conflict remains unresolved, and individual patch licenses require review before reuse.

Sources: [R05-C03](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FAQ.md>), [R05-C05](<https://api.github.com/repos/uazo/cromite/releases/latest>), [R05-C06](<https://raw.githubusercontent.com/uazo/cromite/11507ac1061b5ea227806f5e84db5a57df6ccf6a/build/patches/Experimental-support-for-extensions-on-Android.patch>), [R05-C07](<https://api.github.com/repos/uazo/cromite/issues/comments/5679359966>).

#### [Quetta: Android Chrome and Edge extension installation and management — R05-F-quetta-android-extensions](<FEATURES.md#R05-F-quetta-android-extensions>)

**Availability:** limited. **Platforms / editions:** Android. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R05-B-quetta>).

**Evidence / confidence:** vendor-documented / high.

Quetta&#39;s Android-specific guide documents Chrome Web Store and Edge Add-ons installation and management, including extension popups. It expressly warns that desktop layouts, unavailable browser APIs, companion apps and background behavior can limit compatibility.

Feature limitations:

- No extension was installed or exercised. Broad FAQ wording is insufficient to establish iOS Chrome Web Store support, universal compatibility or the shipped iOS engine.

Sources: [R05-Q01](<https://play.google.com/store/apps/details?id=net.quetta.browser&hl=en>), [R05-Q02](<https://www.quetta.net/features/extensions>).

#### [Yandex Browser: Android extension catalogs and lifecycle controls — R05-F-yandex-android-extensions](<FEATURES.md#R05-F-yandex-android-extensions>)

**Availability:** limited. **Platforms / editions:** Android phones<br>Android tablets. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R05-B-yandex>).

**Evidence / confidence:** vendor-documented / high.

Yandex documents Android-phone and tablet extensions from vendor and third-party catalogs including Chrome and Opera. Help covers enable/disable, options, updates and developer-mode unpacked loading. It says only extensions in the From other sources section can be deleted.

Feature limitations:

- No extension was installed, updated or tested. Catalog availability and management documentation do not guarantee compatibility with every desktop extension or establish an iOS host.

Sources: [R05-Y02](<https://yandex.com/support/browser-mobile-android-phone/en/personal-settings/extensions>), [R05-Y02a](<https://yandex.com/support/browser-mobile-android-tablet/en/personal-settings/extensions>).

### Acceptance criteria — proposed, not executed

- Publish supported APIs and unsupported cases for a representative extension corpus.
- Test install, update, disable and uninstall, including permission revocation and background-resource limits.
- Measure battery, memory, touch-target and accessibility effects on representative Android devices.

### Tradeoffs

- Desktop extension assumptions conflict with mobile interaction and resource budgets.
- Experimental default-off Cromite source is not proof of a production-compatible implementation.

### Proposal limitations

- Implementation feasibility and Chrome&#39;s Android roadmap are unassessed.
- This proposal does not imply equivalent iOS support or permission to reuse another browser&#39;s code without its license.

Sources cited by this proposal: [R01-S36](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S41](<https://support.google.com/chrome_webstore/answer/1698338?hl=en>), [R05-C06](<https://raw.githubusercontent.com/uazo/cromite/11507ac1061b5ea227806f5e84db5a57df6ccf6a/build/patches/Experimental-support-for-extensions-on-Android.patch>), [R05-Q02](<https://www.quetta.net/features/extensions>), [R05-Y02](<https://yandex.com/support/browser-mobile-android-phone/en/personal-settings/extensions>).

<a id="REC-02"></a>

## REC-02 — Identity-aware workspaces and predictable link routing

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop | workspaces | P1 | needs-validation | partial-baseline |

### Recorded Chrome baseline

Chrome documents separate profiles, named windows and saved groups. Visual grouping, per-site cookie containers and full-profile isolation are different boundaries.

#### [Google Chrome: Persistent project workspaces and collaborative contexts — R01-FEATURE-PROJECT-WORKSPACES](<FEATURES.md#R01-FEATURE-PROJECT-WORKSPACES>)

**Availability:** not-established. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** hypothesis / low.

Documented building blocks include saved/synced groups, named windows, and separate profiles for bookmarks, history, passwords, and settings. This research did not establish a distinct persistent multiwindow project model, layout-preserving workspace restore, or universal cross-account live collaborative groups beyond those building blocks.

Feature limitations:

- This is an unresolved comparison dimension, not a confirmed Chrome omission.
- The tab-group-sharing policy page returned only a promotional banner; its title and snippet were not treated as proof of rollout or supported collaboration behavior.
- Profile separation does not imply a security boundary against someone with access to the same device.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>), [R01-S26](<https://support.google.com/chrome/answer/2364824?hl=en&co=GENIE.Platform%3DDesktop>).

#### [Google Chrome: Saved and synced tab groups — R01-FEATURE-TAB-GROUPS](<FEATURES.md#R01-FEATURE-TAB-GROUPS>)

**Availability:** documented. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Desktop, Android, and iOS help describe named/color tab groups, saving, closing, and reopening groups, and syncing changes across devices using the same Google Account. Desktop supports collapse/expand. Deleting or ungrouping a synced group can remove the group on other devices; closing a saved group is a different operation. Mobile interfaces have their own commands and settings.

Feature limitations:

- Same-account sync is not the same capability as cross-account live collaboration.
- iOS action-table extraction was partial, although the surrounding body explicitly documents group creation and syncing.
- Delete propagation, save/reopen behavior, and cross-device consistency were not locally tested.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>).

### Proposed refinement

Evaluate named workspaces that visibly identify account context and explain which context receives an external or cross-workspace link.

### Comparator evidence

#### [Firefox: Multi-Account Containers — R02-FF-02](<FEATURES.md#R02-FF-02>)

**Availability:** historical. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-firefox>).

**Evidence / confidence:** vendor-documented / medium.

Mozilla&#39;s official add-on documentation describes separate cookie and storage identities in tabs, with sites assignable to a container.

- **platform Qualifications:** **description:** Firefox 160 desktop requires Windows 10+, macOS 10.15+, or the listed GNU/Linux libraries.<br>**sourceIds:** [R02-F2](<https://www.firefox.com/en-US/firefox/160.0/system-requirements/>)<br>**description:** The iOS implementation does not use Gecko; desktop/Android engine-dependent features cannot be assumed on iOS.<br>**sourceIds:** [R02-F3](<https://firefox-source-docs.mozilla.org/overview/gecko.html>), [R02-F4](<https://firefox-source-docs.mozilla.org/overview/ios.html>)

- **chrome Parity:** unassessed

Feature limitations:

- Historical documentary design evidence, not a current add-on-version or runtime check.
- Current extension availability, individual desktop OS behavior, mobile parity and cross-container isolation were not tested.

Sources: [R02-F6](<https://blog.mozilla.org/security/2020/02/06/multi-account-containers-sync/>).

#### [Dia: Profiles and hierarchy — R04-feature-dia-01](<FEATURES.md#R04-feature-dia-01>)

**Availability:** documented. **Platforms / editions:** macOS<br>Windows. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-dia>).

**Evidence / confidence:** vendor-documented / high.

Profiles separate tabs, logins and AI context, with link-routing rules for incoming URLs. November 12 Mac and Windows entries describe tab groups nested up to eight levels and controls for opening links inside groups.

- **lifecycle Details:** **observedReleaseEntries:** **date:** 2026-11-19<br>**platform:** Windows<br>**version:** 1.7.0<br>**date:** 2026-11-19<br>**platform:** macOS<br>**version:** 1.58.0<br>**sourceIds:** [R04-D2](<https://www.diabrowser.com/changelog>)<br>**windowsLaunchAt:** 2026-10-06
- **platform Qualifications:** **description:** An original Mac-only beta description is obsolete, but individual features and connectors retain their own platform and rollout qualifications.<br>**sourceIds:** [R04-D1](<https://www.diabrowser.com/>), [R04-D2](<https://www.diabrowser.com/changelog>)

- **chrome Parity:** unassessed

Feature limitations:

- Profile isolation and rule enforcement were not tested; visual grouping is not automatically an identity boundary.
- Routing is first explicitly described in the November 5 Mac entry; complete release-by-release Windows parity is not asserted.

Sources: [R04-D1](<https://www.diabrowser.com/>), [R04-D2](<https://www.diabrowser.com/changelog>).

#### [Floorp: Container-linked workspaces with archives — R04-feature-floorp-01](<FEATURES.md#R04-feature-floorp-01>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** maintenance. [Browser qualifications](<CATALOG.md#R04-browser-floorp>).

**Evidence / confidence:** vendor-documented / high.

Assign a Firefox container to a workspace, archive its tab set and recover it from an archive view. Only one workspace is displayed per window; the documentation distinguishes shared workspace structures from individual tabs.

- **lifecycle Details:** **documentedVersion:** 12.21.2<br>**maintenanceType:** Temporary stabilization, not discontinuation<br>**pauseEndAt:** Not recorded<br>**releaseArticleDate:** 2026-11-13<br>**sourceIds:** [R04-F2](<https://blog.floorp.app/en/release/12.21.2/>)

- **chrome Parity:** unassessed

Feature limitations:

- Behavior is documented as of 12.14.2; no archive or cross-window restoration test.
- The browser is in a temporary stabilization period, and background-tab data preservation is not independently guaranteed.

Sources: [R04-F1](<https://floorp.app/en>), [R04-F2](<https://blog.floorp.app/en/release/12.21.2/>), [R04-F3](<https://docs.floorp.app/docs/features/workspaces/>).

#### [Zen Browser: Workspace-default containers — R04-feature-zen-01](<FEATURES.md#R04-feature-zen-01>)

**Availability:** documented. **Platforms / editions:** macOS<br>Windows<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-zen>).

**Evidence / confidence:** vendor-documented / high.

Assign cookie/session containers to a workspace, customize its identity, and optionally route new container tabs to the workspace using that default container.

- **lifecycle Details:** **documentedVersion:** 1.24.3b<br>**releaseDate:** Not recorded<br>**sourceIds:** [R04-Z3](<https://zen-browser.app/release-notes>)
- **channel Qualifications:** **description:** Twilight is explicitly pre-release and may contain unfinished features. The b suffix alone was not used to infer identical maturity for every channel.<br>**sourceIds:** [R04-Z3](<https://zen-browser.app/release-notes>)

- **chrome Parity:** unassessed

Feature limitations:

- Container separation is narrower than a full profile boundary.
- No account-isolation or automatic-routing test was run.

Sources: [R04-Z2](<https://zen-browser.app/download>), [R04-Z4](<https://docs.zen-browser.app/user-manual/workspaces>).

### Acceptance criteria — proposed, not executed

- Compare the same two-account workflow against existing Chrome profiles and groups.
- Verify cookie and storage boundaries with controlled test origins.
- Make routing precedence inspectable, reversible and keyboard-accessible.

### Tradeoffs

- Convenient identity switching can obscure isolation boundaries.
- Container or profile rules need explicit conflict and fallback behavior.

### Proposal limitations

- No current Chrome routing defect was reproduced.
- Firefox&#39;s cited container announcement is historical add-on evidence; current version/default availability needs checking.

Sources cited by this proposal: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S26](<https://support.google.com/chrome/answer/2364824?hl=en&co=GENIE.Platform%3DDesktop>), [R02-F6](<https://blog.mozilla.org/security/2020/02/06/multi-account-containers-sync/>), [R04-D2](<https://www.diabrowser.com/changelog>), [R04-F3](<https://docs.floorp.app/docs/features/workspaces/>), [R04-Z4](<https://docs.zen-browser.app/user-manual/workspaces>).

<a id="REC-03"></a>

## REC-03 — Portable project and session structures

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop and mobile | portability | P1 | needs-validation | partial-baseline |

### Recorded Chrome baseline

Saved/synced groups and account-based synchronization already preserve some organization; lossless export of richer project structure was not established.

#### [Google Chrome: Persistent project workspaces and collaborative contexts — R01-FEATURE-PROJECT-WORKSPACES](<FEATURES.md#R01-FEATURE-PROJECT-WORKSPACES>)

**Availability:** not-established. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** hypothesis / low.

Documented building blocks include saved/synced groups, named windows, and separate profiles for bookmarks, history, passwords, and settings. This research did not establish a distinct persistent multiwindow project model, layout-preserving workspace restore, or universal cross-account live collaborative groups beyond those building blocks.

Feature limitations:

- This is an unresolved comparison dimension, not a confirmed Chrome omission.
- The tab-group-sharing policy page returned only a promotional banner; its title and snippet were not treated as proof of rollout or supported collaboration behavior.
- Profile separation does not imply a security boundary against someone with access to the same device.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>), [R01-S26](<https://support.google.com/chrome/answer/2364824?hl=en&co=GENIE.Platform%3DDesktop>).

#### [Google Chrome: Google Account sync and optional passphrase — R01-FEATURE-SYNC](<FEATURES.md#R01-FEATURE-SYNC>)

**Availability:** documented. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Chrome documents saving bookmarks, reading list, passwords, settings, and other information in a Google Account, with data-type controls and a separately controllable History and tabs option. Tab-group changes can sync between signed-in desktop, Android, and iOS devices. An optional passphrase has documented exclusions and trade-offs: Google Wallet payment methods and addresses are not covered, full history is not synced, and only web addresses entered in the address bar are synced under that history limitation.

Feature limitations:

- Extension-related information in sync is not evidence that mobile Chrome can execute those extensions.
- With a passphrase, the documentation also limits password access through passwords.google.com; this is not an all-data, all-service equivalence claim.
- Self-hosted or account-free browser sync was not established. No account data, encryption, or cross-device synchronization was tested.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>), [R01-S36](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S41](<https://support.google.com/chrome_webstore/answer/1698338?hl=en>).

#### [Google Chrome: Saved and synced tab groups — R01-FEATURE-TAB-GROUPS](<FEATURES.md#R01-FEATURE-TAB-GROUPS>)

**Availability:** documented. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Desktop, Android, and iOS help describe named/color tab groups, saving, closing, and reopening groups, and syncing changes across devices using the same Google Account. Desktop supports collapse/expand. Deleting or ungrouping a synced group can remove the group on other devices; closing a saved group is a different operation. Mobile interfaces have their own commands and settings.

Feature limitations:

- Same-account sync is not the same capability as cross-account live collaboration.
- iOS action-table extraction was partial, although the surrounding body explicitly documents group creation and syncing.
- Delete propagation, save/reopen behavior, and cross-device consistency were not locally tested.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>).

### Proposed refinement

Evaluate inspectable, versioned exports for names, URLs, groups, pin destinations and layouts that remain useful when an account or browser service is retired.

### Comparator evidence

#### [Vivaldi: Rule-routed Workspaces — R02-VI-01](<FEATURES.md#R02-VI-01>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-vivaldi>).

**Evidence / confidence:** vendor-documented / high.

Vivaldi&#39;s desktop help documents switching project tab sets within a window, routing tabs by URL rules, and bulk hibernation and copy-links operations.

- **platform Qualifications:** **description:** Current download text lists desktop OS families; the 2023 cross-platform release also lists mobile, Raspberry Pi, and Android Automotive. Car support is vehicle-specific.<br>**sourceIds:** [R02-V1](<https://vivaldi.com/download>), [R02-V2](<https://vivaldi.com/blog/vivaldi-on-desktop-6-4/>)

- **chrome Parity:** unassessed

Feature limitations:

- Documentation only; URL routing, restoration, window ownership and hibernation were not exercised.
- The desktop workflow is not evidence of mobile or automotive parity, identity isolation, or reduced resource use from grouping alone.

Sources: [R02-V4](<https://help.vivaldi.com/desktop/tabs/workspaces/>).

#### [Dia: Organization portability and control — R04-feature-dia-06](<FEATURES.md#R04-feature-dia-06>)

**Availability:** documented. **Platforms / editions:** macOS<br>Windows. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-dia>).

**Evidence / confidence:** vendor-documented / high.

November 19 Mac and Windows entries document exporting tabs, profiles and groups to Markdown. Windows notes also describe inactive-tab archiving and customizable shortcuts; both platforms document natural-language tab-group operations.

- **lifecycle Details:** **observedReleaseEntries:** **date:** 2026-11-19<br>**platform:** Windows<br>**version:** 1.7.0<br>**date:** 2026-11-19<br>**platform:** macOS<br>**version:** 1.58.0<br>**sourceIds:** [R04-D2](<https://www.diabrowser.com/changelog>)<br>**windowsLaunchAt:** 2026-10-06
- **platform Qualifications:** **description:** An original Mac-only beta description is obsolete, but individual features and connectors retain their own platform and rollout qualifications.<br>**sourceIds:** [R04-D1](<https://www.diabrowser.com/>), [R04-D2](<https://www.diabrowser.com/changelog>)

- **chrome Parity:** unassessed

Feature limitations:

- Markdown export does not establish a complete round-trip importer, credential transfer or layout preservation.
- Archiving thresholds and shortcut parity differ by documented entry; AI-driven organization has separate entitlement limits.

Sources: [R04-D2](<https://www.diabrowser.com/changelog>).

#### [Zen Browser: Structure-aware continuity — R04-feature-zen-06](<FEATURES.md#R04-feature-zen-06>)

**Availability:** limited. **Platforms / editions:** macOS<br>Windows<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-zen>).

**Evidence / confidence:** vendor-documented / medium.

Sync Spaces, folders and tabs through a Mozilla account, optionally including normal tabs; share structured collections and split views by link; use documented cross-platform local profile backups.

- **lifecycle Details:** **documentedVersion:** 1.24.3b<br>**releaseDate:** Not recorded<br>**sourceIds:** [R04-Z3](<https://zen-browser.app/release-notes>)
- **channel Qualifications:** **description:** Twilight is explicitly pre-release and may contain unfinished features. The b suffix alone was not used to infer identical maturity for every channel.<br>**sourceIds:** [R04-Z3](<https://zen-browser.app/release-notes>)

- **chrome Parity:** unassessed

Feature limitations:

- A Mozilla account and opt-in are required for the described sync; initial enablement merges local and cloud Spaces.
- Earlier window sync was marked experimental. This conversion does not imply all sync features or old limitations are stable/resolved.
- No backup, restore, sharing or conflict-resolution test was run.

Sources: [R04-Z2](<https://zen-browser.app/download>), [R04-Z3](<https://zen-browser.app/release-notes>).

### Acceptance criteria — proposed, not executed

- Round-trip representative projects while preserving declared structure.
- Show unsupported fields and recovery choices rather than silently discarding them.
- Exclude live credentials and authenticated session material from the project interchange format.

### Tradeoffs

- Rich layout semantics are harder to exchange between browsers.
- Publicly shareable structure and private browsing state need different handling.

### Proposal limitations

- The Arc and Atlas lifecycle records are historical case studies, not recommendations to install those products.
- No exporter/importer interoperability was tested.

Sources cited by this proposal: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S36](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>), [R02-V4](<https://help.vivaldi.com/desktop/tabs/workspaces/>), [R04-A1](<https://arc.net/>), [R04-D2](<https://www.diabrowser.com/changelog>), [R04-T1](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>), [R04-Z3](<https://zen-browser.app/release-notes>).

<a id="REC-04"></a>

## REC-04 — Saved multi-pane layouts and preview promotion

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop and tablets | multitasking | P1 | needs-validation | partial-baseline |

### Recorded Chrome baseline

Chrome already documents two-page split view, stacked orientation, swap/separate controls and a toolbar button.

#### [Google Chrome: Persistent project workspaces and collaborative contexts — R01-FEATURE-PROJECT-WORKSPACES](<FEATURES.md#R01-FEATURE-PROJECT-WORKSPACES>)

**Availability:** not-established. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** hypothesis / low.

Documented building blocks include saved/synced groups, named windows, and separate profiles for bookmarks, history, passwords, and settings. This research did not establish a distinct persistent multiwindow project model, layout-preserving workspace restore, or universal cross-account live collaborative groups beyond those building blocks.

Feature limitations:

- This is an unresolved comparison dimension, not a confirmed Chrome omission.
- The tab-group-sharing policy page returned only a promotional banner; its title and snippet were not treated as proof of rollout or supported collaboration behavior.
- Profile separation does not imply a security boundary against someone with access to the same device.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>), [R01-S26](<https://support.google.com/chrome/answer/2364824?hl=en&co=GENIE.Platform%3DDesktop>).

#### [Google Chrome: Two-page split view — R01-FEATURE-SPLIT-VIEW](<FEATURES.md#R01-FEATURE-SPLIT-VIEW>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux<br>ChromeOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Computer help documents two websites within one Chrome window, in side-by-side or stacked orientation. Users can switch the active view, swap positions, separate or close views, pin the split-view control, and disable edge drag-to-split. Toolbar and tab-specific commands apply to the active view; general side panels can remain open, while tab-specific reading panels collapse on a view switch.

- **platform Qualifications:** **description:** Computer help provides shortcuts for Windows/Linux, Mac, and Chromebook.<br>**sourceIds:** [R01-S20](<https://support.google.com/chrome/answer/16971124?hl=en&co=GENIE.Platform%3DDesktop>)<br>**description:** Android tablet split-screen and iPad multiwindow are separately documented window/OS workflows. They are not proof of identical in-window split view on phones.<br>**sourceIds:** [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>)

Feature limitations:

- No runtime validation or rollout-cohort check was performed.
- The documented two-view design is not evidence that every richer multi-pane configuration is absent.

Sources: [R01-S19](<https://blog.google/products-and-platforms/products/chrome/chrome-productivity-improvements>), [R01-S20](<https://support.google.com/chrome/answer/16971124?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>).

### Proposed refinement

Evaluate two-to-four-pane research layouts, explicit persistence and transitions from a temporary preview into a normal tab or split.

### Comparator evidence

#### [Vivaldi: Multi-way tab tiling — R02-VI-03](<FEATURES.md#R02-VI-03>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-vivaldi>).

**Evidence / confidence:** vendor-documented / high.

Vivaldi&#39;s desktop documentation describes vertical, horizontal, grid and custom tiled-tab arrangements. The 7.8 release adds drag-to-tile and opening a link directly as a tile.

- **platform Qualifications:** **description:** Current download text lists desktop OS families; the 2023 cross-platform release also lists mobile, Raspberry Pi, and Android Automotive. Car support is vehicle-specific.<br>**sourceIds:** [R02-V1](<https://vivaldi.com/download>), [R02-V2](<https://vivaldi.com/blog/vivaldi-on-desktop-6-4/>)

- **chrome Parity:** unassessed

Feature limitations:

- No tiling, keyboard-focus, responsiveness or small-screen test was performed.
- An undocumented count limit is not evidence of practical usability at arbitrary counts. Desktop 7.8 is an inspected shipping milestone, not the asserted latest release; phone and car parity are unknown.

Sources: [R02-V3](<https://vivaldi.com/blog/vivaldi-on-desktop-7-8/>), [R02-V6](<https://help.vivaldi.com/desktop/tabs/tab-tiling/>).

#### [Dia: Remembered split layouts — R04-feature-dia-02](<FEATURES.md#R04-feature-dia-02>)

**Availability:** documented. **Platforms / editions:** macOS<br>Windows; exact layout parity untested. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-dia>).

**Evidence / confidence:** vendor-documented / medium.

Dia advertises simultaneous meeting/document views and remembered split layouts that can be reused for recurring meetings or focused work.

- **lifecycle Details:** **observedReleaseEntries:** **date:** 2026-11-19<br>**platform:** Windows<br>**version:** 1.7.0<br>**date:** 2026-11-19<br>**platform:** macOS<br>**version:** 1.58.0<br>**sourceIds:** [R04-D2](<https://www.diabrowser.com/changelog>)<br>**windowsLaunchAt:** 2026-10-06
- **platform Qualifications:** **description:** An original Mac-only beta description is obsolete, but individual features and connectors retain their own platform and rollout qualifications.<br>**sourceIds:** [R04-D1](<https://www.diabrowser.com/>), [R04-D2](<https://www.diabrowser.com/changelog>)

- **chrome Parity:** unassessed

Feature limitations:

- Homepage description does not establish the first ship date, maximum pane count or restoration fidelity.
- No saved-layout interaction was exercised.

Sources: [R04-D1](<https://www.diabrowser.com/>).

#### [Floorp: Up to four simultaneous panes — R04-feature-floorp-02](<FEATURES.md#R04-feature-floorp-02>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** maintenance. [Browser qualifications](<CATALOG.md#R04-browser-floorp>).

**Evidence / confidence:** vendor-documented / high.

Extend upstream Firefox split view with further subdivisions, arrangement controls and directional drag targets. The documented limit is four tabs at once as of Floorp 12.14.2.

- **lifecycle Details:** **documentedVersion:** 12.21.2<br>**maintenanceType:** Temporary stabilization, not discontinuation<br>**pauseEndAt:** Not recorded<br>**releaseArticleDate:** 2026-11-13<br>**sourceIds:** [R04-F2](<https://blog.floorp.app/en/release/12.21.2/>)

- **chrome Parity:** unassessed

Feature limitations:

- The four-pane limit is version-qualified, not a claim about every future release.
- No usability, focus-order, minimum-size or performance test.

Sources: [R04-F1](<https://floorp.app/en>), [R04-F4](<https://docs.floorp.app/docs/features/split-view/>).

#### [Zen Browser: Glance previews — R04-feature-zen-02](<FEATURES.md#R04-feature-zen-02>)

**Availability:** documented. **Platforms / editions:** macOS<br>Windows<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-zen>).

**Evidence / confidence:** vendor-documented / high.

Preview a linked website above the current tab, then dismiss it, promote it to a new tab or turn it into a split. Trigger modifiers are configurable, with special behavior for external links in Essentials and pinned tabs.

- **lifecycle Details:** **documentedVersion:** 1.24.3b<br>**releaseDate:** Not recorded<br>**sourceIds:** [R04-Z3](<https://zen-browser.app/release-notes>)
- **channel Qualifications:** **description:** Twilight is explicitly pre-release and may contain unfinished features. The b suffix alone was not used to infer identical maturity for every channel.<br>**sourceIds:** [R04-Z3](<https://zen-browser.app/release-notes>)

- **chrome Parity:** unassessed

Feature limitations:

- No preview focus, form-state or keyboard-navigation test was performed.
- Manual descriptions, rather than the less precise homepage summary, define the behavior here.

Sources: [R04-Z2](<https://zen-browser.app/download>), [R04-Z5](<https://docs.zen-browser.app/user-manual/glance>).

### Acceptance criteria — proposed, not executed

- Demonstrate a concrete task that benefits beyond Chrome&#39;s existing two-view workflow.
- Restore a saved layout after restart and report unavailable pages.
- Verify keyboard focus order, minimum pane sizes, narrow-window fallback and screen-reader context.

### Tradeoffs

- Extra panes increase memory use and interaction complexity.
- Tablet OS multiwindow support is not equivalent to browser in-window tiling.

### Proposal limitations

- Layout persistence and current Chrome preview parity remain unverified.
- Vendor descriptions are not measured productivity improvements.

Sources cited by this proposal: [R01-S20](<https://support.google.com/chrome/answer/16971124?hl=en&co=GENIE.Platform%3DDesktop>), [R02-V6](<https://help.vivaldi.com/desktop/tabs/tab-tiling/>), [R04-D1](<https://www.diabrowser.com/>), [R04-F4](<https://docs.floorp.app/docs/features/split-view/>), [R04-Z5](<https://docs.zen-browser.app/user-manual/glance>).

<a id="REC-05"></a>

## REC-05 — Discoverable deterministic browser commands

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop | commands | P1 | needs-validation | unassessed |

### Recorded Chrome baseline

Chrome exposes toolbar controls and optional Gemini surfaces. Existing omnibox actions and command-search coverage need a task-specific baseline.

#### [Google Chrome: Desktop toolbar customization — R01-FEATURE-DESKTOP-TOOLBAR](<FEATURES.md#R01-FEATURE-DESKTOP-TOOLBAR>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

The Customize Chrome toolbar panel lets users turn offered toolbar buttons on or off. Pinned buttons can be dragged to change order and unpinned through their context menu. Some buttons open a side panel, some a new tab, and some an address-bar bubble. This is an existing customization capability.

Feature limitations:

- The source says a disabled button cannot be reordered.
- This does not establish arbitrary relocation of every control or full menu/context-menu editing.
- No platform-specific toolbar operation was tested locally.

Sources: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>).

#### [Google Chrome: Gemini availability and granular controls — R01-FEATURE-GEMINI-CONTROLS](<FEATURES.md#R01-FEATURE-GEMINI-CONTROLS>)

**Availability:** staged. **Platforms / editions:** Windows<br>macOS<br>Chromebook Plus<br>iOS (administrator documentation)<br>Android (administrator documentation, U.S.). **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Consumer computer help says Gemini in Chrome is gradually released and requires first-use opt-in. It documents hiding or showing the browser icon and desktop integration, stopping or selecting tab sharing, changing Share current tab by default, and managing location, microphone, and auto-browse permissions. Current-tab content is shared by default when opening a chat unless that default is changed; up to ten open tabs can be shared. Enterprise settings can disallow Gemini integration, but hiding an icon, limiting permissions, and disabling integration have different effects.

- **eligibility:** **description:** Age 13 or the applicable local age, a supported region and language, a Windows or Mac computer or Chromebook Plus, current Chrome, and sign-in are required. Incognito and signed-out profiles are excluded. Work/school access and supervised-user controls have additional conditions; Live and auto browse have under-18 restrictions.<br>**scope:** Consumer computer help<br>**sourceIds:** [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>)<br>**description:** This page specifies age 18 or older, an Android device in the U.S. or a supported-region computer/iOS device, supported language, current Chrome, and sign-in. Both the Gemini app setting and GeminiSettings must allow access. The documented GeminiSettings value 1 disallows integrations; GenAiDefaultSettings value 2 defaults GeminiSettings to that disallowed state.<br>**scope:** Administrator help<br>**sourceIds:** [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>)

Feature limitations:

- Consumer and managed eligibility are separately scoped and must not be merged into a single age/platform rule.
- Supported-region and language tables were incompletely extracted; missing entries were not reconstructed.
- A universal consumer disable-all-AI switch was not established. These controls are distinct from on-device generative-model removal.
- No Gemini session, data sharing, policy application, or AI task was run by this lane.

Sources: [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>).

### Proposed refinement

Evaluate searchable named browser actions with contextual help, visible shortcuts and an explicit choice between ordinary commands, search and AI.

### Comparator evidence

#### [SigmaOS: Lazy Search and command filtering — R04-feature-sigmaos-03](<FEATURES.md#R04-feature-sigmaos-03>)

**Availability:** documented. **Platforms / editions:** macOS. **Browser lifecycle:** unknown. [Browser qualifications](<CATALOG.md#R04-browser-sigmaos>).

**Evidence / confidence:** vendor-documented / medium.

Space opens Lazy Search across pages, workspaces, tags and actions, while Cmd+K applies a commands-only filter. The same surface can jump to existing pages or create documents in supported tools.

- **lifecycle Details:** **currentMaintenanceStatus:** Unresolved<br>**documentedHistoricalVersion:** 1.17.0<br>**lastReleaseAt:** Not recorded<br>**sourceIds:** [R04-S5](<https://docs.sigmaos.com/release-notes>), [R04-S6](<https://sigmaos.com/updates/1-17-0>), [R04-S7](<https://sigmaos.com/blog>)
- **platform Qualifications:** **description:** The homepage says macOS only. Windows and iOS are coming-soon statements, not verified shipments.<br>**sourceIds:** [R04-S1](<https://sigmaos.com/>)

- **chrome Parity:** unassessed

Feature limitations:

- Legacy documentation does not establish present integration availability or performance.
- Current browser maintenance remains unresolved.

Sources: [R04-S1](<https://sigmaos.com/>), [R04-S2](<https://docs.sigmaos.com/common-questions>).

#### [Zen Browser: Command surface — R04-feature-zen-04](<FEATURES.md#R04-feature-zen-04>)

**Availability:** documented. **Platforms / editions:** macOS<br>Windows<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-zen>).

**Evidence / confidence:** vendor-documented / medium.

Search tabs and folders, scope search to a Space, and invoke actions such as new Space, reset pinned tab, duplicate tab or reopen closed tab from the command surface.

- **lifecycle Details:** **documentedVersion:** 1.24.3b<br>**releaseDate:** Not recorded<br>**sourceIds:** [R04-Z3](<https://zen-browser.app/release-notes>)
- **channel Qualifications:** **description:** Twilight is explicitly pre-release and may contain unfinished features. The b suffix alone was not used to infer identical maturity for every channel.<br>**sourceIds:** [R04-Z3](<https://zen-browser.app/release-notes>)

- **chrome Parity:** unassessed

Feature limitations:

- Documented command additions are not a measured discoverability or performance improvement.
- No keybinding-conflict test or exact per-command release date was established.

Sources: [R04-Z2](<https://zen-browser.app/download>), [R04-Z3](<https://zen-browser.app/release-notes>).

#### [Nyxt: Fuzzy buffer switching and multi-object commands — R06-F-NYXT-FUZZY-MULTISELECT](<FEATURES.md#R06-F-NYXT-FUZZY-MULTISELECT>)

**Availability:** documented. **Platforms / editions:** Linux x86-64 (5.0.0 release asset; feature parity unverified)<br>macOS ARM64 (5.0.0 release asset; feature parity unverified). **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R06-B-NYXT>).

**Evidence / confidence:** vendor-documented / high.

The README documents fuzzy buffer selection and commands accepting multiple inputs, such as several bookmarks or other objects for one operation.

Feature limitations:

- README behavior was not executed on the 5.0.0 CEF default or alternate WebKitGTK backend.
- Release assets do not establish OS/backend parity, action-scope predictability or error recovery.

Sources: [R06-N1](<https://raw.githubusercontent.com/atlas-engineer/nyxt/master/README.org>), [R06-N2](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>), [R06-N4](<https://api.github.com/repos/atlas-engineer/nyxt/releases/tags/5.0.0>).

#### [qutebrowser: Command line and contextual help — R06-F-QUTEBROWSER-COMMAND-HELP](<FEATURES.md#R06-F-QUTEBROWSER-COMMAND-HELP>)

**Availability:** documented. **Platforms / editions:** Linux<br>Windows<br>macOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R06-B-QUTEBROWSER>).

**Evidence / confidence:** vendor-documented / high.

The quickstart documents : to open the command line, :help for in-product documentation and per-command --help.

Feature limitations:

- No command was executed and no discovery-time or learning-curve comparison was performed.
- Command availability can depend on release and package; per-platform equivalence was not established.

Sources: [R06-Q2](<https://qutebrowser.org/doc/quickstart.html>), [R06-Q3](<https://qutebrowser.org/doc/install.html>).

### Acceptance criteria — proposed, not executed

- Discover and execute a defined set of navigation, organization and settings tasks by keyboard.
- Keep deterministic commands usable offline and without an AI subscription.
- Explain shortcut conflicts and confirm destructive actions with appropriate undo semantics.

### Tradeoffs

- A unified entry point can create ambiguous intent or modal-key conflicts.
- A power-user surface still needs clear localization and assistive-technology support.

### Proposal limitations

- No claim that Chrome lacks command or omnibox actions.
- SigmaOS maintenance is unknown; its workflow is a documentary precedent only.

Sources cited by this proposal: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>), [R04-S2](<https://docs.sigmaos.com/common-questions>), [R04-Z3](<https://zen-browser.app/release-notes>), [R06-N1](<https://raw.githubusercontent.com/atlas-engineer/nyxt/master/README.org>), [R06-N2](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>), [R06-Q2](<https://qutebrowser.org/doc/quickstart.html>).

<a id="REC-06"></a>

## REC-06 — Consistent, accessible menu and toolbar customization

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop and mobile | menus | P1 | needs-validation | partial-baseline |

### Recorded Chrome baseline

Chrome already supports offered toolbar buttons and desktop reordering. Comprehensive menu editing is unresolved. R09 separately records managed-state and command-identity concerns in pinned source.

#### [Google Chrome: Android toolbar shortcut selection — R01-FEATURE-ANDROID-TOOLBAR-SHORTCUT](<FEATURES.md#R01-FEATURE-ANDROID-TOOLBAR-SHORTCUT>)

**Availability:** documented. **Platforms / editions:** Android. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Android help documents enabling or disabling the toolbar shortcut and choosing an adaptive action or a preferred New tab, Share, Voice search, Bookmark, Translate, or Delete browsing data shortcut. A relevant contextual action can replace the selected shortcut on some pages.

Feature limitations:

- This is narrower than the documented desktop pin/reorder model.
- The attempted iOS variant of the page returned Android instructions and cannot establish iOS support.
- No actual device or contextual override was tested.

Sources: [R01-S28](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DAndroid>).

#### [Google Chrome: Desktop toolbar customization — R01-FEATURE-DESKTOP-TOOLBAR](<FEATURES.md#R01-FEATURE-DESKTOP-TOOLBAR>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

The Customize Chrome toolbar panel lets users turn offered toolbar buttons on or off. Pinned buttons can be dragged to change order and unpinned through their context menu. Some buttons open a side panel, some a new tab, and some an address-bar bubble. This is an existing customization capability.

Feature limitations:

- The source says a disabled button cannot be reordered.
- This does not establish arbitrary relocation of every control or full menu/context-menu editing.
- No platform-specific toolbar operation was tested locally.

Sources: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>).

#### [Google Chrome: Comprehensive menu and context-menu customization — R01-FEATURE-MENU-CUSTOMIZATION](<FEATURES.md#R01-FEATURE-MENU-CUSTOMIZATION>)

**Availability:** not-established. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** hypothesis / low.

The captured primary documentation establishes desktop toolbar customization and an Android toolbar shortcut. It does not settle a comprehensive browser menu/context-menu editor or iOS menu customization. Secondary reports were not promoted to primary-source verification.

Feature limitations:

- This is not a claim that menu customization is absent.
- The iOS-targeted toolbar help URL returned Android content. A specific control and platform need direct verification before a proposal is framed as a gap.

Sources: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S28](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DAndroid>).

### Proposed refinement

Evaluate targeted hide/reorder/reset controls while ensuring labels, stable action identity, effective policy state and accessible enablement agree.

### Comparator evidence

#### [Samsung Internet / Samsung Browser: Customizable menus, dark mode and control placement — R05-F-samsung-ergonomics](<FEATURES.md#R05-F-samsung-ergonomics>)

**Availability:** documented. **Platforms / editions:** Android phones<br>Android tablets; historical tablet URL-bar placement. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R05-B-samsung>).

**Evidence / confidence:** vendor-documented / high.

The current listing documents customizable menus and dark mode. Historical Android release notes additionally describe moving tab/bookmark bars and the tablet URL bar to the bottom. Those release notes establish historical introduction rather than an audited current minimum-version matrix.

Feature limitations:

- The retrieved Android changelog ends with a 2024-05-11 entry. Current placement combinations, accessibility and one-handed usability were not tested; historical controls are not automatically claims about every current device.

Sources: [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>), [R05-S02](<https://developer.samsung.com/browser/release-note/android-release-note.html>).

#### [Orion by Kagi: Mini Toolbar, Overflow Menu and Page Tweak — R06-F-ORION-COMPACT-PAGE-UI](<FEATURES.md#R06-F-ORION-COMPACT-PAGE-UI>)

**Availability:** documented. **Platforms / editions:** macOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R06-B-ORION>).

**Evidence / confidence:** vendor-documented / high.

The 1.0 announcement documents user-selectable compact interface controls and per-page presentation controls through Mini Toolbar, Overflow Menu and Page Tweak.

- **lifecycle Scope:** Apple products only; Linux/Windows require the per-platform discontinuation qualifiers.
- **platform Lifecycle:** **lifecycle:** active<br>**platform:** macOS<br>**sourceIds:** [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>), [R06-O3](<https://orionbrowser.com/updates/orion-release-notes>)<br>**lifecycle:** active<br>**platform:** iOS / iPadOS<br>**qualification:** Continued focus documented; latest mobile version was not established.<br>**sourceIds:** [R06-O1](<https://blog.kagi.com/orion>), [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>)<br>**effectiveDate:** 2026-10-02<br>**lifecycle:** discontinued<br>**platform:** Linux<br>**qualification:** Kagi updates ended; community continuation remains unknown.<br>**sourceIds:** [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>)<br>**effectiveDate:** 2026-10-02<br>**lifecycle:** discontinued<br>**platform:** Windows<br>**qualification:** Kagi canceled its planned release; no completed successor handoff was verified.<br>**sourceIds:** [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>)

Feature limitations:

- The announcement does not establish identical controls on every mobile or desktop edition.
- No usability, focus-visibility or resource-use comparison was run; compact UI is not a measured engine-performance advantage.

Sources: [R06-O1](<https://blog.kagi.com/orion>).

### Acceptance criteria — proposed, not executed

- Credit existing toolbar customization and identify the exact menu outcome still unmet.
- Test mandatory-on, mandatory-off, recommended and unmanaged settings separately.
- Verify displayed labels invoke the same action across asynchronous state changes and keyboard navigation.

### Tradeoffs

- Personalization can reduce supportability and command discoverability.
- Reset must not imply that mandatory policy can be overridden.

### Proposal limitations

- Source inconsistencies and runtime menu defects remain different claims.
- No machine policy or user profile was changed to test this proposal.

Related issue evidence: [R09-C1 — Managed Home-button state is exposed through editable customization controls](<ISSUES.md#R09-C1>) (source-inconsistency; needs-validation); [R09-H1 — A running overflow menu may dispatch a different action after pin-order changes](<ISSUES.md#R09-H1>) (hypothesis; needs-validation); [R09-H3 — Open overflow menu enablement may remain stale while action enablement changes](<ISSUES.md#R09-H3>) (hypothesis; needs-validation).

Sources cited by this proposal: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S28](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DAndroid>), [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>), [R05-S02](<https://developer.samsung.com/browser/release-note/android-release-note.html>), [R06-O1](<https://blog.kagi.com/orion>).

<a id="REC-07"></a>

## REC-07 — Hierarchical tabs with recoverable bulk actions

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop | tab-organization | P2 | needs-validation | partial-baseline |

### Recorded Chrome baseline

Vertical tabs and named/color saved groups are documented Chrome features. A hierarchy-specific workflow needs comparison with those controls.

#### [Google Chrome: Saved and synced tab groups — R01-FEATURE-TAB-GROUPS](<FEATURES.md#R01-FEATURE-TAB-GROUPS>)

**Availability:** documented. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Desktop, Android, and iOS help describe named/color tab groups, saving, closing, and reopening groups, and syncing changes across devices using the same Google Account. Desktop supports collapse/expand. Deleting or ungrouping a synced group can remove the group on other devices; closing a saved group is a different operation. Mobile interfaces have their own commands and settings.

Feature limitations:

- Same-account sync is not the same capability as cross-account live collaboration.
- iOS action-table extraction was partial, although the surrounding body explicitly documents group creation and syncing.
- Delete propagation, save/reopen behavior, and cross-device consistency were not locally tested.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>).

#### [Google Chrome: Vertical tabs — R01-FEATURE-VERTICAL-TABS](<FEATURES.md#R01-FEATURE-VERTICAL-TABS>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Current computer help documents Show Tabs Vertically and Settings → Appearance → Tab position → Vertical or Horizontal. It also describes resizing the tab strip, viewing full titles, collapsed hover expansion, and tab-group controls. The launch announcement described a staged rollout; its captured metadata date is 2026-04-07, with publication not independently established.

Feature limitations:

- Ordinary usage documentation is not proof of enablement on every desktop build or cohort.
- Mobile vertical-tab-strip equivalence was not established.
- This was not tested locally; a request simply to add vertical tabs would fail to credit the documented baseline.

Sources: [R01-S17](<https://blog.google/products-and-platforms/products/chrome/new-chrome-productivity-features>), [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>).

### Proposed refinement

Evaluate parent/child organization, subtree selection and explicit temporary, saved and completed states with reliable undo.

### Comparator evidence

#### [Vivaldi: Tab Stacks and stack-wide actions — R02-VI-02](<FEATURES.md#R02-VI-02>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-vivaldi>).

**Evidence / confidence:** vendor-documented / high.

Vivaldi documents compact, two-level and accordion Tab Stacks, host-based grouping, and stack-wide save-session, tile, hibernate, pin and copy-links operations.

- **platform Qualifications:** **description:** Current download text lists desktop OS families; the 2023 cross-platform release also lists mobile, Raspberry Pi, and Android Automotive. Car support is vehicle-specific.<br>**sourceIds:** [R02-V1](<https://vivaldi.com/download>), [R02-V2](<https://vivaldi.com/blog/vivaldi-on-desktop-6-4/>)

- **chrome Parity:** unassessed

Feature limitations:

- No stack, session-restoration or keyboard interaction was tested.
- The mutable help page&#39;s older metadata is not an introduction date for every option; mobile parity and large-session usability remain unverified.

Sources: [R02-V5](<https://help.vivaldi.com/desktop/tabs/tab-stacks/>).

#### [Waterfox: Tree-structured tabs and subtree actions — R03-F-W03](<FEATURES.md#R03-F-W03>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-WATERFOX>).

**Evidence / confidence:** vendor-documented / high.

The product page describes nesting pages under their opener, collapsing branches and moving entire subtrees to organize related browsing tasks.

- **platform Boundaries:** Desktop download requirements include SSE4.2 for Windows/Linux and glibc 2.17 for Linux.<br>Firefox WebExtensions are documented as supported; Chrome-only extensions do not automatically transfer.<br>Current Waterfox must not be conflated with Waterfox Classic; Classic&#39;s lifecycle was not investigated.

Feature limitations:

- Keyboard access, assistive-technology behavior and large-tree scaling were not evaluated.
- Android parity and productivity gains were not established.

Sources: [R03-S-W1](<https://www.waterfox.com/>).

#### [SigmaOS: Tabs as tasks — R04-feature-sigmaos-01](<FEATURES.md#R04-feature-sigmaos-01>)

**Availability:** documented. **Platforms / editions:** macOS. **Browser lifecycle:** unknown. [Browser qualifications](<CATALOG.md#R04-browser-sigmaos>).

**Evidence / confidence:** vendor-documented / medium.

Treat vertical pages as tasks: mark them Done when complete, lock pages that should remain available, and undo accidental closures.

- **lifecycle Details:** **currentMaintenanceStatus:** Unresolved<br>**documentedHistoricalVersion:** 1.17.0<br>**lastReleaseAt:** Not recorded<br>**sourceIds:** [R04-S5](<https://docs.sigmaos.com/release-notes>), [R04-S6](<https://sigmaos.com/updates/1-17-0>), [R04-S7](<https://sigmaos.com/blog>)
- **platform Qualifications:** **description:** The homepage says macOS only. Windows and iOS are coming-soon statements, not verified shipments.<br>**sourceIds:** [R04-S1](<https://sigmaos.com/>)

- **chrome Parity:** unassessed

Feature limitations:

- Advertised/documented behavior does not establish current maintenance or successful onboarding.
- Not an actively maintained-product recommendation; closure/undo was not tested.

Sources: [R04-S1](<https://sigmaos.com/>), [R04-S2](<https://docs.sigmaos.com/common-questions>).

### Acceptance criteria — proposed, not executed

- Compare search and reorganization tasks across flat groups and nested projects.
- Test bulk move/close/restore without silent data loss.
- Expose hierarchy and selection through keyboard and screen-reader semantics.

### Tradeoffs

- Nesting can make small sessions unnecessarily complex.
- Automatic completion or archiving can surprise users.

### Proposal limitations

- No demonstrated Chrome deficiency or measured task-time benefit.
- SigmaOS&#39;s lifecycle remains qualified in the source catalogue.

Sources cited by this proposal: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R02-V5](<https://help.vivaldi.com/desktop/tabs/tab-stacks/>), [R03-S-W1](<https://www.waterfox.com/>), [R04-S1](<https://sigmaos.com/>).

<a id="REC-08"></a>

## REC-08 — User-selected web panels and account-labeled app presence

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop | side-panels | P2 | needs-validation | partial-baseline |

### Recorded Chrome baseline

Built-in panels and the extension Side Panel API already exist. Arbitrary-site pinning, simultaneous panels and account-scoped notifications were not established.

#### [Google Chrome: Persistent project workspaces and collaborative contexts — R01-FEATURE-PROJECT-WORKSPACES](<FEATURES.md#R01-FEATURE-PROJECT-WORKSPACES>)

**Availability:** not-established. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** hypothesis / low.

Documented building blocks include saved/synced groups, named windows, and separate profiles for bookmarks, history, passwords, and settings. This research did not establish a distinct persistent multiwindow project model, layout-preserving workspace restore, or universal cross-account live collaborative groups beyond those building blocks.

Feature limitations:

- This is an unresolved comparison dimension, not a confirmed Chrome omission.
- The tab-group-sharing policy page returned only a promotional banner; its title and snippet were not treated as proof of rollout or supported collaboration behavior.
- Profile separation does not imply a security boundary against someone with access to the same device.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>), [R01-S26](<https://support.google.com/chrome/answer/2364824?hl=en&co=GENIE.Platform%3DDesktop>).

#### [Google Chrome: Built-in and extension side panels — R01-FEATURE-SIDE-PANELS](<FEATURES.md#R01-FEATURE-SIDE-PANELS>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Chrome documents built-in side panels for content such as bookmarks, history, reading list, and reading mode. The Side Panel API lets extensions host their own UI alongside webpage content, keep it open across tabs when configured, scope it to sites, and respect left/right placement settings.

Feature limitations:

- Arbitrary-website pinning and multiple simultaneous independent sidebars were not established.
- Extension-hosted panel content and a built-in website sidebar are distinct capabilities.
- API and user-interface behavior were not locally exercised.

Sources: [R01-S20](<https://support.google.com/chrome/answer/16971124?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S37](<https://developer.chrome.com/docs/extensions/reference/api/sidePanel>).

### Proposed refinement

Evaluate a bounded panel/app model with visible account labels, notification scope and predictable links back to full tabs.

### Comparator evidence

#### [Vivaldi: User-selected Web Panels — R02-VI-05](<FEATURES.md#R02-VI-05>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-vivaldi>).

**Evidence / confidence:** vendor-documented / high.

Vivaldi&#39;s desktop help documents keeping arbitrary user-chosen websites beside the main tab, with per-panel width, zoom, mute and periodic reload controls.

- **platform Qualifications:** **description:** Current download text lists desktop OS families; the 2023 cross-platform release also lists mobile, Raspberry Pi, and Android Automotive. Car support is vehicle-specific.<br>**sourceIds:** [R02-V1](<https://vivaldi.com/download>), [R02-V2](<https://vivaldi.com/blog/vivaldi-on-desktop-6-4/>)

- **chrome Parity:** unassessed

Feature limitations:

- No panel, authentication, periodic-reload or accessibility workflow was exercised.
- Site layout compatibility, resource costs, account boundaries and mobile-browser parity remain unverified.

Sources: [R02-V8](<https://help.vivaldi.com/desktop/panels/web-panels/>).

#### [Floorp: Any-site web panels — R04-feature-floorp-03](<FEATURES.md#R04-feature-floorp-03>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** maintenance. [Browser qualifications](<CATALOG.md#R04-browser-floorp>).

**Evidence / confidence:** vendor-documented / high.

Register websites in a persistent sidebar for one-click compact split views. Individual web panels can use a chosen container, width, zoom level and mobile/desktop user-agent setting.

- **lifecycle Details:** **documentedVersion:** 12.21.2<br>**maintenanceType:** Temporary stabilization, not discontinuation<br>**pauseEndAt:** Not recorded<br>**releaseArticleDate:** 2026-11-13<br>**sourceIds:** [R04-F2](<https://blog.floorp.app/en/release/12.21.2/>)

- **chrome Parity:** unassessed

Feature limitations:

- A mobile user agent does not guarantee that a site changes layout.
- Container enforcement, arbitrary-site compatibility and panel persistence were not tested.

Sources: [R04-F1](<https://floorp.app/en>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>).

#### [Wavebox: Multi-account app presence — R04-feature-wavebox-02](<FEATURES.md#R04-feature-wavebox-02>)

**Availability:** documented. **Platforms / editions:** macOS<br>Windows<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-wavebox>).

**Evidence / confidence:** vendor-documented / high.

Persistent app tabs expose unread badges, tooltips and custom notification sounds across multiple accounts. The Mini menu consolidates incoming work from webmail, messaging and collaboration tools.

- **lifecycle Details:** **documentedVersion:** 155.3.12<br>**isLatestVersionEstablished:** false<br>**releaseArticleDate:** 2026-10-08<br>**sourceIds:** [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>)

- **chrome Parity:** unassessed

Feature limitations:

- App integrations are enhanced web tabs, not necessarily native applications or complete service integrations.
- Notification accuracy, isolation and delivery were not tested; Basic plan limits apply.

Sources: [R04-W1](<https://wavebox.io/>), [R04-W2](<https://wavebox.io/platform>), [R04-W4](<https://wavebox.io/pricing>), [R04-W5](<https://wavebox.io/download>).

### Acceptance criteria — proposed, not executed

- Test selected sites in narrow panels and provide a full-tab fallback.
- Distinguish duplicate service accounts and their notifications.
- Explain suspension, background activity and panel permissions.

### Tradeoffs

- Panels can consume resources and multiply notifications.
- Site compatibility and identity rules add maintenance burden.

### Proposal limitations

- Existing extension and installed-web-app equivalents must be assessed first.
- No cross-account or notification behavior was exercised.

Sources cited by this proposal: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S37](<https://developer.chrome.com/docs/extensions/reference/api/sidePanel>), [R02-V8](<https://help.vivaldi.com/desktop/panels/web-panels/>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>), [R04-W1](<https://wavebox.io/>), [R04-W2](<https://wavebox.io/platform>).

<a id="REC-09"></a>

## REC-09 — Citation-preserving notes and research capture

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop and mobile | research-workflows | P1 | needs-validation | unassessed |

### Recorded Chrome baseline

Chrome offers reading and capture building blocks. An integrated source-linked notes/export workflow was not assessed.

#### [Google Chrome: DevTools screenshot capture — R01-FEATURE-DEVTOOLS-SCREENSHOTS](<FEATURES.md#R01-FEATURE-DEVTOOLS-SCREENSHOTS>)

**Availability:** documented. **Platforms / editions:** Desktop DevTools. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Official DevTools guidance documents node screenshots, nodes larger than the screen, full-page capture, selected-area capture, and device-emulated screenshots. Chrome therefore has documented screenshot capabilities through its developer tools.

Feature limitations:

- Developer-tool availability does not establish a discoverable consumer capture command, annotation editor, or redaction workflow.
- No screenshots were captured or quality-tested by this lane.

Sources: [R01-S29](<https://developer.chrome.com/blog/devtools-tips-33>).

#### [Google Chrome: Reading mode, including immersive full-page reading — R01-FEATURE-READING-MODE](<FEATURES.md#R01-FEATURE-READING-MODE>)

**Availability:** documented. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Desktop help documents an immersive full-page reading view and an optional side-panel view, adjustable fonts/themes/spacing, read aloud, voice and speed selection, and line focus. Android and iOS help document their own reading-mode commands and typography/background controls. Chrome should not be described as having only a side-panel reader.

- **platform Qualifications:** **description:** The computer body explicitly says reading mode is not yet available on Googlebook. It also describes Windows/Linux/ChromeOS and macOS shortcuts; the Googlebook exclusion must not be generalized to all ChromeOS.<br>**sourceIds:** [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>)<br>**description:** Mobile pages have distinct commands and controls. Computer-specific read-aloud and spacing features are not automatically established on mobile.<br>**sourceIds:** [R01-S22](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S23](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DiOS>)

Feature limitations:

- Reading mode is site/content dependent; some pages produce unavailable or failure messages.
- The original immersive-reader announcement described rollout beginning. Current help is not a per-user enablement test.
- No readability, accessibility, voice quality, or extraction accuracy was measured.

Sources: [R01-S17](<https://blog.google/products-and-platforms/products/chrome/new-chrome-productivity-features>), [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R01-S22](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S23](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DiOS>).

### Proposed refinement

Evaluate notes that retain source URL, capture date, selected text and optional images, with open-format export and clear stale-source handling.

### Comparator evidence

#### [Vivaldi: Provenance-preserving Notes and open-format export — R02-VI-06](<FEATURES.md#R02-VI-06>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-vivaldi>).

**Evidence / confidence:** vendor-documented / high.

Vivaldi documents capturing selected text with its webpage link, creation date and screenshot, plus append, search, Markdown and ordinary .txt/.md file export.

- **platform Qualifications:** **description:** Current download text lists desktop OS families; the 2023 cross-platform release also lists mobile, Raspberry Pi, and Android Automotive. Car support is vehicle-specific.<br>**sourceIds:** [R02-V1](<https://vivaldi.com/download>), [R02-V2](<https://vivaldi.com/blog/vivaldi-on-desktop-6-4/>)

- **chrome Parity:** unassessed

Feature limitations:

- No note, export or sync operation was performed.
- Attachment fidelity, sync behavior, account prerequisites and per-platform export parity were not tested; this is not an inferred cloud-only format.

Sources: [R02-V1](<https://vivaldi.com/download>), [R02-V9](<https://help.vivaldi.com/desktop/panels/notes/>).

#### [Dia: Organization portability and control — R04-feature-dia-06](<FEATURES.md#R04-feature-dia-06>)

**Availability:** documented. **Platforms / editions:** macOS<br>Windows. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-dia>).

**Evidence / confidence:** vendor-documented / high.

November 19 Mac and Windows entries document exporting tabs, profiles and groups to Markdown. Windows notes also describe inactive-tab archiving and customizable shortcuts; both platforms document natural-language tab-group operations.

- **lifecycle Details:** **observedReleaseEntries:** **date:** 2026-11-19<br>**platform:** Windows<br>**version:** 1.7.0<br>**date:** 2026-11-19<br>**platform:** macOS<br>**version:** 1.58.0<br>**sourceIds:** [R04-D2](<https://www.diabrowser.com/changelog>)<br>**windowsLaunchAt:** 2026-10-06
- **platform Qualifications:** **description:** An original Mac-only beta description is obsolete, but individual features and connectors retain their own platform and rollout qualifications.<br>**sourceIds:** [R04-D1](<https://www.diabrowser.com/>), [R04-D2](<https://www.diabrowser.com/changelog>)

- **chrome Parity:** unassessed

Feature limitations:

- Markdown export does not establish a complete round-trip importer, credential transfer or layout preservation.
- Archiving thresholds and shortcut parity differ by documented entry; AI-driven organization has separate entitlement limits.

Sources: [R04-D2](<https://www.diabrowser.com/changelog>).

#### [Floorp: Integrated notes and desktop customization — R04-feature-floorp-05](<FEATURES.md#R04-feature-floorp-05>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** maintenance. [Browser qualifications](<CATALOG.md#R04-browser-floorp>).

**Evidence / confidence:** vendor-documented / medium.

Formatted notes and image attachments live in the Panel Sidebar and are documented to sync through Firefox Sync. The homepage also advertises web-app windows, UI customization and mouse gestures as desktop customization options.

- **lifecycle Details:** **documentedVersion:** 12.21.2<br>**maintenanceType:** Temporary stabilization, not discontinuation<br>**pauseEndAt:** Not recorded<br>**releaseArticleDate:** 2026-11-13<br>**sourceIds:** [R04-F2](<https://blog.floorp.app/en/release/12.21.2/>)

- **chrome Parity:** unassessed

Feature limitations:

- Sync requires the relevant account setup; no cross-device synchronization or formatting test was run.
- Homepage customization claims do not establish detailed per-platform web-app or gesture parity.

Sources: [R04-F1](<https://floorp.app/en>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>).

### Acceptance criteria — proposed, not executed

- Export notes with working source references and explicit capture timestamps.
- Preserve user edits through sync/export/import and report unsupported content.
- Make selective capture and deletion understandable on authenticated pages.

### Tradeoffs

- Automatic capture can retain sensitive page content.
- Offline copies and later source revisions need distinct dates and provenance.

### Proposal limitations

- No current Chrome notes capability is claimed absent.
- Export fidelity and productivity benefits remain untested.

Sources cited by this proposal: [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R01-S29](<https://developer.chrome.com/blog/devtools-tips-33>), [R02-V9](<https://help.vivaldi.com/desktop/panels/notes/>), [R04-D2](<https://www.diabrowser.com/changelog>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>).

<a id="REC-10"></a>

## REC-10 — Discoverable capture, annotation and redaction

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop and mobile | screenshots | P1 | needs-validation | partial-baseline |

### Recorded Chrome baseline

DevTools already captures full pages, regions and nodes; Android also has OS capture. A non-DevTools editing workflow remains unresolved.

#### [Google Chrome: Consumer screenshot, scrolling capture, and annotation workflow — R01-FEATURE-CONSUMER-SCREENSHOT-WORKFLOW](<FEATURES.md#R01-FEATURE-CONSUMER-SCREENSHOT-WORKFLOW>)

**Availability:** not-established. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** hypothesis / low.

The established baseline is desktop DevTools capture plus Android OS screenshot and supported scrolling-capture workflows. A native Chrome consumer path combining discoverable capture, annotation, and redaction was not established, and neither was its absence.

- **platform Qualifications:** **description:** Android&#39;s OS documentation supports scrolling capture on Android 12 and later on most scrollable screens; it is not a Chrome-specific command or a guarantee for every page.<br>**sourceIds:** [R01-S30](<https://support.google.com/android/answer/9075928?hl=en>)

Feature limitations:

- No primary source in this snapshot settles consumer screenshot UI on iOS or all desktop/Android Chrome builds.
- Any proposal must identify a specific unmet workflow rather than claim Chrome cannot take screenshots.

Sources: [R01-S29](<https://developer.chrome.com/blog/devtools-tips-33>), [R01-S30](<https://support.google.com/android/answer/9075928?hl=en>).

#### [Google Chrome: DevTools screenshot capture — R01-FEATURE-DEVTOOLS-SCREENSHOTS](<FEATURES.md#R01-FEATURE-DEVTOOLS-SCREENSHOTS>)

**Availability:** documented. **Platforms / editions:** Desktop DevTools. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Official DevTools guidance documents node screenshots, nodes larger than the screen, full-page capture, selected-area capture, and device-emulated screenshots. Chrome therefore has documented screenshot capabilities through its developer tools.

Feature limitations:

- Developer-tool availability does not establish a discoverable consumer capture command, annotation editor, or redaction workflow.
- No screenshots were captured or quality-tested by this lane.

Sources: [R01-S29](<https://developer.chrome.com/blog/devtools-tips-33>).

### Proposed refinement

Evaluate a simple user-facing capture path with preview, annotation and genuinely destructive pixel redaction before export.

### Comparator evidence

#### [Firefox: Built-in PDF forms and annotations — R02-FF-06](<FEATURES.md#R02-FF-06>)

**Availability:** documented. **Platforms / editions:** Per-platform scope not established by the cited PDF page. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-firefox>).

**Evidence / confidence:** vendor-documented / high.

Firefox&#39;s PDF editor page documents forms, text and drawing annotations, images with alt text, highlights and comments, and stored reusable signatures.

- **platform Qualifications:** **description:** Firefox 160 desktop requires Windows 10+, macOS 10.15+, or the listed GNU/Linux libraries.<br>**sourceIds:** [R02-F2](<https://www.firefox.com/en-US/firefox/160.0/system-requirements/>)<br>**description:** The iOS implementation does not use Gecko; desktop/Android engine-dependent features cannot be assumed on iOS.<br>**sourceIds:** [R02-F3](<https://firefox-source-docs.mozilla.org/overview/gecko.html>), [R02-F4](<https://firefox-source-docs.mozilla.org/overview/ios.html>)

- **chrome Parity:** unassessed

Feature limitations:

- Documentary feature inventory only; no PDF was edited, signed or accessibility-tested.
- All-form compatibility, signature security properties, platform parity and exact minimum versions remain unverified.

Sources: [R02-F11](<https://www.firefox.com/en-US/features/pdf-editor/>).

#### [Quetta: iOS reader layout and webpage image/PDF capture — R05-F-quetta-ios-reading-capture](<FEATURES.md#R05-F-quetta-ios-reading-capture>)

**Availability:** documented. **Platforms / editions:** iPhone and iPad. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R05-B-quetta>).

**Evidence / confidence:** vendor-documented / high.

The iOS product and publisher descriptions advertise a reader-oriented layout and capturing webpages as images or PDFs. These edition-specific reading and export tools are distinct from Android&#39;s advertised DevTools and tab controls.

Feature limitations:

- Reader extraction, pagination, image/PDF fidelity, accessibility and offline viewing were not tested. Advertising does not establish identical Android or desktop functionality.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-Q03](<https://www.quetta.net/products/ios>).

### Acceptance criteria — proposed, not executed

- Measure steps for full-page, region and accessible document capture against existing Chrome paths.
- Verify redacted pixels and text cannot be recovered from the exported artifact.
- Test long pages, sticky elements, zoom and screen-reader labels.

### Tradeoffs

- Visual redaction overlays are not necessarily irreversible removal.
- Complex pages and lazy loading can make a full-page image incomplete.

### Proposal limitations

- Firefox PDF annotation is a related editing precedent, not evidence of screenshot redaction.
- No capture/editing defect was reproduced.

Sources cited by this proposal: [R01-S29](<https://developer.chrome.com/blog/devtools-tips-33>), [R01-S30](<https://support.google.com/android/answer/9075928?hl=en>), [R02-F11](<https://www.firefox.com/en-US/features/pdf-editor/>), [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-Q03](<https://www.quetta.net/products/ios>).

<a id="REC-11"></a>

## REC-11 — Explicit local-processing choices for translation

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop and mobile | translation | P2 | needs-validation | unassessed |

### Recorded Chrome baseline

Chrome&#39;s local generative-model control is documented. Translation-specific local/remote processing and offline behavior were not researched in the baseline.

#### [Google Chrome: On-device generative-model removal and download control — R01-FEATURE-ON-DEVICE-AI-CONTROL](<FEATURES.md#R01-FEATURE-ON-DEVICE-AI-CONTROL>)

**Availability:** limited. **Platforms / editions:** Eligible computers. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Official help documents Settings → AI Innovations → On-device AI on eligible computers. Turning it off deletes on-device generative-model files, disables dependent features, and prevents those models from downloading again while the setting remains off. The setting is per user and per device. Eligible devices may receive background model downloads; the documented download conditions include an unmetered connection, approximately 20 GB of free disk space, and sufficient device performance.

Feature limitations:

- Eligibility requirements can change, and the setting/features are not available on every device.
- The free-disk requirement is not a model download-size claim.
- Some other AI features may still run after local generative models are removed or disabled. This is not an all-AI-off control.
- The documented setting&#39;s deletion and re-download prevention were not locally tested.

Sources: [R01-S39](<https://support.google.com/chrome/answer/16961953?hl=en>).

#### [Google Chrome: Reading mode, including immersive full-page reading — R01-FEATURE-READING-MODE](<FEATURES.md#R01-FEATURE-READING-MODE>)

**Availability:** documented. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Desktop help documents an immersive full-page reading view and an optional side-panel view, adjustable fonts/themes/spacing, read aloud, voice and speed selection, and line focus. Android and iOS help document their own reading-mode commands and typography/background controls. Chrome should not be described as having only a side-panel reader.

- **platform Qualifications:** **description:** The computer body explicitly says reading mode is not yet available on Googlebook. It also describes Windows/Linux/ChromeOS and macOS shortcuts; the Googlebook exclusion must not be generalized to all ChromeOS.<br>**sourceIds:** [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>)<br>**description:** Mobile pages have distinct commands and controls. Computer-specific read-aloud and spacing features are not automatically established on mobile.<br>**sourceIds:** [R01-S22](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S23](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DiOS>)

Feature limitations:

- Reading mode is site/content dependent; some pages produce unavailable or failure messages.
- The original immersive-reader announcement described rollout beginning. Current help is not a per-user enablement test.
- No readability, accessibility, voice quality, or extraction accuracy was measured.

Sources: [R01-S17](<https://blog.google/products-and-platforms/products/chrome/new-chrome-productivity-features>), [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R01-S22](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S23](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DiOS>).

### Proposed refinement

Evaluate clear local-versus-remote processing indicators, downloadable language resources and explicit upload choices for image translation.

### Comparator evidence

#### [Firefox: On-device webpage translation — R02-FF-03](<FEATURES.md#R02-FF-03>)

**Availability:** documented. **Platforms / editions:** Desktop<br>Android. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-firefox>).

**Evidence / confidence:** vendor-documented / high.

Mozilla documents locally processed webpage translation, including Chinese, Japanese and Korean on desktop and Android, with offline operation after the needed language model is downloaded.

- **platform Qualifications:** **description:** Firefox 160 desktop requires Windows 10+, macOS 10.15+, or the listed GNU/Linux libraries.<br>**sourceIds:** [R02-F2](<https://www.firefox.com/en-US/firefox/160.0/system-requirements/>)<br>**description:** The iOS implementation does not use Gecko; desktop/Android engine-dependent features cannot be assumed on iOS.<br>**sourceIds:** [R02-F3](<https://firefox-source-docs.mozilla.org/overview/gecko.html>), [R02-F4](<https://firefox-source-docs.mozilla.org/overview/ios.html>)

- **chrome Parity:** unassessed

Feature limitations:

- No network-disabled translation or traffic-capture test was performed.
- Translation quality, model storage, local compute cost, exact language coverage by version and per-OS equivalence were not measured.
- The article&#39;s conflicting publication metadata is not used as a shipping date.

Sources: [R02-F7](<https://www.firefox.com/en-US/features/translate/>), [R02-F8](<https://blog.mozilla.org/en/firefox/cjk-translation-on-android/>).

#### [Yandex Browser: Android page, text and in-page image translation — R05-F-yandex-android-translation](<FEATURES.md#R05-F-yandex-android-translation>)

**Availability:** limited. **Platforms / editions:** Android phones; cited navigation guide. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R05-B-yandex>).

**Evidence / confidence:** vendor-documented / high.

Android help documents page/text translation and translated image text displayed over the original image, including automatic image translation alongside a page. This in-page image workflow is separate from the iPhone upload flow.

Feature limitations:

- Image clarity, size and handwriting restrict OCR. Translation quality, offline operation, service requests and supported content were not measured; the phone guide is not a universal device/build compatibility matrix.

Sources: [R05-Y03](<https://yandex.com/support/browser-mobile-android-phone/en/navigation/translation>).

#### [Yandex Browser: iPhone translation with image upload — R05-F-yandex-iphone-translation](<FEATURES.md#R05-F-yandex-iphone-translation>)

**Availability:** limited. **Platforms / editions:** iPhone. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R05-B-yandex>).

**Evidence / confidence:** vendor-documented / high.

The iPhone translation guide documents page/text language tools and uploading an image through the translation interface. This must not be flattened into a claim that iPhone supports Android&#39;s in-page image-text overlay in the same way.

Feature limitations:

- No image was uploaded or translated. Accuracy, remote processing, data retention and offline operation were not verified; Android and iOS engine/API equivalence is not established.

Sources: [R05-Y04](<https://yandex.com/support/browser-mobile-iphone/en/navigation/translation>).

### Acceptance criteria — proposed, not executed

- Document supported languages, storage requirements and offline limitations.
- Use controlled network tests to verify the advertised local processing mode.
- Evaluate translation quality and accessibility independently from privacy claims.

### Tradeoffs

- Local models trade storage and compute for reduced network dependence.
- OCR or image-upload workflows have different disclosure boundaries from page translation.

### Proposal limitations

- No statement that Chrome lacks local translation or translation APIs.
- No language-quality, privacy or performance benchmark was performed.

Sources cited by this proposal: [R01-S39](<https://support.google.com/chrome/answer/16961953?hl=en>), [R02-F7](<https://www.firefox.com/en-US/features/translate/>), [R02-F8](<https://blog.mozilla.org/en/firefox/cjk-translation-on-android/>), [R05-Y03](<https://yandex.com/support/browser-mobile-android-phone/en/navigation/translation>), [R05-Y04](<https://yandex.com/support/browser-mobile-iphone/en/navigation/translation>).

<a id="REC-12"></a>

## REC-12 — Offline, contextual help and keyboard discovery

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop | accessibility | P2 | needs-validation | unassessed |

### Recorded Chrome baseline

Chrome provides help and user-facing reading controls; offline troubleshooting and contextual shortcut coverage need direct examination.

#### [Google Chrome: Desktop toolbar customization — R01-FEATURE-DESKTOP-TOOLBAR](<FEATURES.md#R01-FEATURE-DESKTOP-TOOLBAR>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

The Customize Chrome toolbar panel lets users turn offered toolbar buttons on or off. Pinned buttons can be dragged to change order and unpinned through their context menu. Some buttons open a side panel, some a new tab, and some an address-bar bubble. This is an existing customization capability.

Feature limitations:

- The source says a disabled button cannot be reordered.
- This does not establish arbitrary relocation of every control or full menu/context-menu editing.
- No platform-specific toolbar operation was tested locally.

Sources: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>).

#### [Google Chrome: Reading mode, including immersive full-page reading — R01-FEATURE-READING-MODE](<FEATURES.md#R01-FEATURE-READING-MODE>)

**Availability:** documented. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Desktop help documents an immersive full-page reading view and an optional side-panel view, adjustable fonts/themes/spacing, read aloud, voice and speed selection, and line focus. Android and iOS help document their own reading-mode commands and typography/background controls. Chrome should not be described as having only a side-panel reader.

- **platform Qualifications:** **description:** The computer body explicitly says reading mode is not yet available on Googlebook. It also describes Windows/Linux/ChromeOS and macOS shortcuts; the Googlebook exclusion must not be generalized to all ChromeOS.<br>**sourceIds:** [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>)<br>**description:** Mobile pages have distinct commands and controls. Computer-specific read-aloud and spacing features are not automatically established on mobile.<br>**sourceIds:** [R01-S22](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S23](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DiOS>)

Feature limitations:

- Reading mode is site/content dependent; some pages produce unavailable or failure messages.
- The original immersive-reader announcement described rollout beginning. Current help is not a per-user enablement test.
- No readability, accessibility, voice quality, or extraction accuracy was measured.

Sources: [R01-S17](<https://blog.google/products-and-platforms/products/chrome/new-chrome-productivity-features>), [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R01-S22](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S23](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DiOS>).

### Proposed refinement

Evaluate compact offline troubleshooting, in-context key help and optional link hints that remain compatible with assistive technology.

### Comparator evidence

#### [Tor Browser: Bundled offline desktop manual — R03-F-T06](<FEATURES.md#R03-F-T06>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-TOR>).

**Evidence / confidence:** vendor-documented / high.

The 16.0 desktop release bundles revised support content in its manual so connection troubleshooting remains available without network access.

- **platform Boundaries:** 16.0 adds stable Linux AArch64 support and ends Linux x86 32-bit support.<br>The desktop offline manual and OS window-title option are not automatically Android features.<br>Only Tor Browser traffic is automatically routed through Tor; other applications are outside that scope.

Feature limitations:

- The release says Android package-size limits prevented bundling the manual there.
- Offline help content and accessibility were not exercised.

Sources: [R03-S-T1](<https://blog.torproject.org/new-release-tor-browser-160>).

#### [Dillo: Offline help and keyboard command discovery — R06-F-DILLO-LOCAL-KEY-HELP](<FEATURES.md#R06-F-DILLO-LOCAL-KEY-HELP>)

**Availability:** documented. **Platforms / editions:** Linux<br>BSD<br>macOS<br>Windows via Cygwin<br>Atari (project-documented; feature parity unverified). **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R06-B-DILLO>).

**Evidence / confidence:** vendor-documented / high.

Dillo documents offline help, the 3.3.0 about:keys page, numbered tab shortcuts and copy, zoom and navigation controls.

Feature limitations:

- The about:keys addition is sourced to 3.3.0; other controls come from the earlier generated manual.
- No key handling, offline operation or assistive-technology behavior was exercised on any listed platform.

Sources: [R06-D1](<https://dillo-browser.org/>), [R06-D2](<https://dillo-browser.org/release/3.3.0/>), [R06-D3](<https://dillo-browser.org/user_help.html>).

#### [Lynx: In-context help and keymap — R06-F-LYNX-KEYMAP-HELP](<FEATURES.md#R06-F-LYNX-KEYMAP-HELP>)

**Availability:** documented. **Platforms / editions:** Unix/POSIX (OS/build parity unverified)<br>Windows (maintainer build variants). **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R06-B-LYNX>).

**Evidence / confidence:** vendor-documented / high.

Lynx documents ? or H for help and K for current commands and key bindings while viewing a document.

Feature limitations:

- No help, keymap or discovery-time behavior was tested.
- Terminal key handling, configuration and build differences remain unverified across platforms.

Sources: [R06-Y4](<https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html>), [R06-Y6](<https://invisible-island.net/lynx/>).

#### [qutebrowser: Link and element hints — R06-F-QUTEBROWSER-ELEMENT-HINTS](<FEATURES.md#R06-F-QUTEBROWSER-ELEMENT-HINTS>)

**Availability:** documented. **Platforms / editions:** Linux<br>Windows<br>macOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R06-B-QUTEBROWSER>).

**Evidence / confidence:** vendor-documented / high.

The quickstart documents pressing f to show letter hints for mouse-free activation; 3.6.0 release notes add hints in open shadow DOMs.

Feature limitations:

- The shadow-DOM addition is version-scoped documentary evidence, not a test of all pages, elements or Qt builds.
- Input conflicts, focus restoration, keyboard layouts and assistive-technology behavior were not tested; keyboard operation alone does not establish accessibility conformance.

Sources: [R06-Q1](<https://qutebrowser.org/doc/changelog.html>), [R06-Q2](<https://qutebrowser.org/doc/quickstart.html>), [R06-Q3](<https://qutebrowser.org/doc/install.html>).

### Acceptance criteria — proposed, not executed

- Complete basic recovery/help tasks with networking disabled.
- Test key collisions, localization, zoom and screen-reader interaction.
- Measure task success rather than counting keyboard commands.

### Tradeoffs

- Bundled content increases package size and must stay current.
- Keyboard hints can conflict with page shortcuts and screen-reader modes.

### Proposal limitations

- Terminal and experimental browser patterns are inspiration, not feature-parity claims.
- Offline support across Chrome platforms was not tested.

Sources cited by this proposal: [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R03-S-T1](<https://blog.torproject.org/new-release-tor-browser-160>), [R06-D2](<https://dillo-browser.org/release/3.3.0/>), [R06-D3](<https://dillo-browser.org/user_help.html>), [R06-Q2](<https://qutebrowser.org/doc/quickstart.html>), [R06-Y4](<https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html>).

<a id="REC-13"></a>

## REC-13 — One understandable view of optional AI controls

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop and managed deployments | ai-controls | P1 | needs-validation | partial-baseline |

### Recorded Chrome baseline

Chrome can already remove local generative models and prevent re-download. Gemini visibility, tab sharing, feature eligibility and enterprise disabling are separate controls.

#### [Google Chrome: Gemini availability and granular controls — R01-FEATURE-GEMINI-CONTROLS](<FEATURES.md#R01-FEATURE-GEMINI-CONTROLS>)

**Availability:** staged. **Platforms / editions:** Windows<br>macOS<br>Chromebook Plus<br>iOS (administrator documentation)<br>Android (administrator documentation, U.S.). **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Consumer computer help says Gemini in Chrome is gradually released and requires first-use opt-in. It documents hiding or showing the browser icon and desktop integration, stopping or selecting tab sharing, changing Share current tab by default, and managing location, microphone, and auto-browse permissions. Current-tab content is shared by default when opening a chat unless that default is changed; up to ten open tabs can be shared. Enterprise settings can disallow Gemini integration, but hiding an icon, limiting permissions, and disabling integration have different effects.

- **eligibility:** **description:** Age 13 or the applicable local age, a supported region and language, a Windows or Mac computer or Chromebook Plus, current Chrome, and sign-in are required. Incognito and signed-out profiles are excluded. Work/school access and supervised-user controls have additional conditions; Live and auto browse have under-18 restrictions.<br>**scope:** Consumer computer help<br>**sourceIds:** [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>)<br>**description:** This page specifies age 18 or older, an Android device in the U.S. or a supported-region computer/iOS device, supported language, current Chrome, and sign-in. Both the Gemini app setting and GeminiSettings must allow access. The documented GeminiSettings value 1 disallows integrations; GenAiDefaultSettings value 2 defaults GeminiSettings to that disallowed state.<br>**scope:** Administrator help<br>**sourceIds:** [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>)

Feature limitations:

- Consumer and managed eligibility are separately scoped and must not be merged into a single age/platform rule.
- Supported-region and language tables were incompletely extracted; missing entries were not reconstructed.
- A universal consumer disable-all-AI switch was not established. These controls are distinct from on-device generative-model removal.
- No Gemini session, data sharing, policy application, or AI task was run by this lane.

Sources: [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>).

#### [Google Chrome: On-device generative-model removal and download control — R01-FEATURE-ON-DEVICE-AI-CONTROL](<FEATURES.md#R01-FEATURE-ON-DEVICE-AI-CONTROL>)

**Availability:** limited. **Platforms / editions:** Eligible computers. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Official help documents Settings → AI Innovations → On-device AI on eligible computers. Turning it off deletes on-device generative-model files, disables dependent features, and prevents those models from downloading again while the setting remains off. The setting is per user and per device. Eligible devices may receive background model downloads; the documented download conditions include an unmetered connection, approximately 20 GB of free disk space, and sufficient device performance.

Feature limitations:

- Eligibility requirements can change, and the setting/features are not available on every device.
- The free-disk requirement is not a model download-size claim.
- Some other AI features may still run after local generative models are removed or disabled. This is not an all-AI-off control.
- The documented setting&#39;s deletion and re-download prevention were not locally tested.

Sources: [R01-S39](<https://support.google.com/chrome/answer/16961953?hl=en>).

### Proposed refinement

Evaluate a consolidated dashboard explaining local assets, remote processing, UI prompts and policy scope, including an optional broad off setting with precisely enumerated effects.

### Comparator evidence

#### [Brave: Origin minimalist edition and feature-control upgrade — R02-BR-06](<FEATURES.md#R02-BR-06>)

**Availability:** limited. **Platforms / editions:** Windows<br>macOS<br>Linux<br>Android<br>iOS/iPadOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-brave>).

**Evidence / confidence:** vendor-documented / high.

Brave Origin offers a standalone desktop edition that compiles listed extras out, and an in-place desktop/mobile upgrade that disables listed extras by default while permitting toggling.

- **chrome Parity:** unassessed

Feature limitations:

- No purchase, installation, upgrade or code-removal verification was performed.
- A standalone compilation differs from toggling features in an existing installation; features described for standard Brave cannot all be assigned to Origin standalone.
- US terms are not a global checkout guarantee; exact latest build, regional pricing and per-platform upgrade behavior were not established.

Sources: [R02-B6](<https://brave.com/blog/brave-origin>).

#### [DuckDuckGo Browser: Consolidated optional-AI opt-out — R03-F-D05](<FEATURES.md#R03-F-D05>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>iOS/iPadOS<br>Android. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-DUCKDUCKGO>).

**Evidence / confidence:** vendor-documented / high.

Q3 2026 updates document a Use DuckDuckGo Without AI control that disables Duck.ai, hides AI-assisted search answers and applies a filter for known AI spam sites in image search results.

- **platform Boundaries:** The Windows help page says x86 updates end after version 0.170.0; it supplies no calendar cutoff.<br>The Mac App Store edition lacks the documented Bitwarden integration and local-file access of direct distribution.<br>The protection tables include platform-specific limitations and roadmap entries; uniform feature parity is not established.

Feature limitations:

- The scope is the vendor&#39;s enumerated browser/service surfaces, not removal of arbitrary AI-generated web content.
- The exact first app version and all network effects were not established.
- No Chrome absence or comparable-control default is asserted.

Sources: [R03-S-D2](<https://duckduckgo.com/updates>).

#### [Shift: Independent AI controls — R04-feature-shift-06](<FEATURES.md#R04-feature-shift-06>)

**Availability:** documented. **Platforms / editions:** macOS<br>Windows. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-shift>).

**Evidence / confidence:** vendor-documented / high.

Disable AI Chat and Intelligent Omnibox independently from settings. The launch article distinguishes these shipped choices from future proactive suggestions and broader context improvements.

- **platform Qualifications:** **description:** Mac and Windows are explicitly named in the downloaded page HTML metadata. No Linux or mobile shipment is established here.<br>**sourceIds:** [R04-H8](<https://shift.com/download/?platform=mac>)

- **chrome Parity:** unassessed

Feature limitations:

- No persistence, re-enablement or enforcement test for either toggle.
- Future proactive features mentioned by the author are not counted as shipped behavior.

Sources: [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>), [R04-H8](<https://shift.com/download/?platform=mac>).

### Acceptance criteria — proposed, not executed

- Verify controls against every declared AI entry point and download trigger.
- Show managed restrictions and account/device differences.
- Test whether users understand that hiding an icon is different from revoking sharing or deleting models.

### Tradeoffs

- A global switch can mislead if some features are outside its scope.
- Consumer, enterprise and website-provided AI have different control boundaries.

### Proposal limitations

- A comprehensive Chrome all-AI-off setting is not established as present or absent.
- The recommendation does not remove arbitrary AI content from websites.

Sources cited by this proposal: [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S39](<https://support.google.com/chrome/answer/16961953?hl=en>), [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>), [R02-B6](<https://brave.com/blog/brave-origin>), [R03-S-D2](<https://duckduckgo.com/updates>), [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>).

<a id="REC-14"></a>

## REC-14 — Visible AI context, action scope and cancellation

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome AI-assisted workflows | ai-controls | P1 | needs-validation | partial-baseline |

### Recorded Chrome baseline

Gemini help already documents opt-in and feature-specific sharing/permissions. Current auto-browse and task-stop semantics need their own assessment.

#### [Google Chrome: Gemini availability and granular controls — R01-FEATURE-GEMINI-CONTROLS](<FEATURES.md#R01-FEATURE-GEMINI-CONTROLS>)

**Availability:** staged. **Platforms / editions:** Windows<br>macOS<br>Chromebook Plus<br>iOS (administrator documentation)<br>Android (administrator documentation, U.S.). **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Consumer computer help says Gemini in Chrome is gradually released and requires first-use opt-in. It documents hiding or showing the browser icon and desktop integration, stopping or selecting tab sharing, changing Share current tab by default, and managing location, microphone, and auto-browse permissions. Current-tab content is shared by default when opening a chat unless that default is changed; up to ten open tabs can be shared. Enterprise settings can disallow Gemini integration, but hiding an icon, limiting permissions, and disabling integration have different effects.

- **eligibility:** **description:** Age 13 or the applicable local age, a supported region and language, a Windows or Mac computer or Chromebook Plus, current Chrome, and sign-in are required. Incognito and signed-out profiles are excluded. Work/school access and supervised-user controls have additional conditions; Live and auto browse have under-18 restrictions.<br>**scope:** Consumer computer help<br>**sourceIds:** [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>)<br>**description:** This page specifies age 18 or older, an Android device in the U.S. or a supported-region computer/iOS device, supported language, current Chrome, and sign-in. Both the Gemini app setting and GeminiSettings must allow access. The documented GeminiSettings value 1 disallows integrations; GenAiDefaultSettings value 2 defaults GeminiSettings to that disallowed state.<br>**scope:** Administrator help<br>**sourceIds:** [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>)

Feature limitations:

- Consumer and managed eligibility are separately scoped and must not be merged into a single age/platform rule.
- Supported-region and language tables were incompletely extracted; missing entries were not reconstructed.
- A universal consumer disable-all-AI switch was not established. These controls are distinct from on-device generative-model removal.
- No Gemini session, data sharing, policy application, or AI task was run by this lane.

Sources: [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>).

### Proposed refinement

Evaluate explicit context selection, read-versus-act scope and a task view showing pause, stop, takeover, queued steering and already-completed actions.

### Comparator evidence

#### [Perplexity Comet: Parallel Background Assistants — R04-feature-comet-03](<FEATURES.md#R04-feature-comet-03>)

**Availability:** limited. **Platforms / editions:** Windows desktop<br>macOS desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-comet>).

**Evidence / confidence:** vendor-documented / high.

The October 2025 launch changelog assigns multiple simultaneous agentic tasks and one page for confirmations and follow-ups to Max subscribers.

- **lifecycle Details:** **freeDesktopReleasePeriod:** October 2025<br>**iosLaunchEvidencePeriod:** March 2026<br>**sourceIds:** [R04-C10](<https://www.perplexity.ai/changelog/what-we-shipped--march-27-2026>), [R04-C7](<https://www.perplexity.ai/changelog/what-we-shipped-october-3rd>), [R04-C9](<https://www.perplexity.ai/hub/blog/meet-comet-for-ios>)
- **platform Qualifications:** **description:** Desktop docs exclude Linux and ChromeOS. Android automation requires the app to remain open. Mobile engines, detailed parity and iOS minimum version remain unestablished.<br>**sourceIds:** [R04-C2](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>), [R04-C8](<https://www.perplexity.ai/help-center/comet/en/articles/12875447-comet-for-android-quick-start-and-key-features.md>), [R04-C9](<https://www.perplexity.ai/hub/blog/meet-comet-for-ios>)

- **chrome Parity:** unassessed

Feature limitations:

- Max entitlement is supported at the dated announcement, not by a current quota or billing inspection.
- Android&#39;s guide explicitly limits automation to foreground use; desktop background behavior is not generalized to mobile.
- No concurrency, cancellation or completion test.

Sources: [R04-C2](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>), [R04-C7](<https://www.perplexity.ai/changelog/what-we-shipped-october-3rd>), [R04-C8](<https://www.perplexity.ai/help-center/comet/en/articles/12875447-comet-for-android-quick-start-and-key-features.md>).

#### [Perplexity Comet: Consumer and enterprise action controls — R04-feature-comet-04](<FEATURES.md#R04-feature-comet-04>)

**Availability:** limited. **Platforms / editions:** Documented Comet desktop and enterprise deployments; mobile policy parity unverified. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-comet>).

**Evidence / confidence:** vendor-documented / high.

Consumer settings govern history/action access and site blocking. Enterprise admins can set Browser Control, Read Only or No Access by domain and control whether users may enable unconfirmed actions. Domain-specific rules are documented to override global assistant settings.

- **lifecycle Details:** **freeDesktopReleasePeriod:** October 2025<br>**iosLaunchEvidencePeriod:** March 2026<br>**sourceIds:** [R04-C10](<https://www.perplexity.ai/changelog/what-we-shipped--march-27-2026>), [R04-C7](<https://www.perplexity.ai/changelog/what-we-shipped-october-3rd>), [R04-C9](<https://www.perplexity.ai/hub/blog/meet-comet-for-ios>)
- **platform Qualifications:** **description:** Desktop docs exclude Linux and ChromeOS. Android automation requires the app to remain open. Mobile engines, detailed parity and iOS minimum version remain unestablished.<br>**sourceIds:** [R04-C2](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>), [R04-C8](<https://www.perplexity.ai/help-center/comet/en/articles/12875447-comet-for-android-quick-start-and-key-features.md>), [R04-C9](<https://www.perplexity.ai/hub/blog/meet-comet-for-ios>)

- **chrome Parity:** unassessed

Feature limitations:

- Granular admin controls require Perplexity Enterprise and are not a consumer-wide entitlement claim.
- An allow/read domain exception can remain effective despite global disablement according to documentation; this is not a locally reproduced bypass.
- An unambiguous global stop and clear precedence are recommendation hypotheses, not established Chrome defects.

Sources: [R04-C4](<https://www.perplexity.ai/help-center/comet/en/articles/12658082-control-what-comet-assistant-can-use.md>), [R04-C6](<https://www.perplexity.ai/help-center/en/articles/13531023-managing-comet-assistant-permissions.md>).

#### [Dia: Queue and steer ongoing chat — R04-feature-dia-05](<FEATURES.md#R04-feature-dia-05>)

**Availability:** limited. **Platforms / editions:** macOS; documented in October 2026 entries<br>Windows; documented in 1.4.0 on 2026-10-29. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-dia>).

**Evidence / confidence:** vendor-documented / high.

Queue, edit, reorder or redirect messages during ongoing work. Mac notes distinguish steering without cancelling in-flight tools from Send now interruption; Windows October 29 notes document queued and steerable messages while preserving generated work.

- **lifecycle Details:** **observedReleaseEntries:** **date:** 2026-11-19<br>**platform:** Windows<br>**version:** 1.7.0<br>**date:** 2026-11-19<br>**platform:** macOS<br>**version:** 1.58.0<br>**sourceIds:** [R04-D2](<https://www.diabrowser.com/changelog>)<br>**windowsLaunchAt:** 2026-10-06
- **platform Qualifications:** **description:** An original Mac-only beta description is obsolete, but individual features and connectors retain their own platform and rollout qualifications.<br>**sourceIds:** [R04-D1](<https://www.diabrowser.com/>), [R04-D2](<https://www.diabrowser.com/changelog>)

- **chrome Parity:** unassessed

Feature limitations:

- Chat access is subject to AI availability and unverified quotas.
- Cancellation, pause and committed-action semantics were not tested; wording in release notes is not proof that every side effect can be stopped or undone.

Sources: [R04-D2](<https://www.diabrowser.com/changelog>), [R04-D4](<https://www.diabrowser.com/privacy>).

#### [Opera Neon: Neon Do control surface — R04-feature-neon-02](<FEATURES.md#R04-feature-neon-02>)

**Availability:** limited. **Platforms / editions:** Windows<br>macOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-neon>).

**Evidence / confidence:** vendor-documented / high.

Display planned steps and live page actions, with pause, stop, takeover and redirection controls. Neon Do interacts in the local browser session while relying on cloud models for plans and instructions.

- **lifecycle Details:** **currentOffering:** Free browser/basic Chat and paid built-in agentic capabilities<br>**initialAccess:** Paid invitations / Early Access<br>**launchedAt:** 2025-09-30<br>**sourceIds:** [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>)<br>**stableGraduationAt:** Not recorded
- **platform Qualifications:** **description:** Windows and Mac are verified in offering documentation; a mobile edition is future-facing in the FAQ, not established as shipped.<br>**sourceIds:** [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>)
- **channel Qualifications:** **description:** Retained 2025 sources describe invitations and Early Access. Broader 2026 access does not itself establish a stable-channel graduation date or production reliability.<br>**sourceIds:** [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>)

- **chrome Parity:** unassessed

Feature limitations:

- Neon Do is a paid capability in the retained plan table; usage limits were not quantified.
- Stop/takeover and sensitive-action confirmations were not tested; already committed external actions may require separate treatment.
- Early Access history and residual prompt-injection risk prevent treating documentation as a stable safety guarantee.

Sources: [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>).

#### [Shift: Visible, opt-in AI context — R04-feature-shift-05](<FEATURES.md#R04-feature-shift-05>)

**Availability:** limited. **Platforms / editions:** macOS<br>Windows. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-shift>).

**Evidence / confidence:** vendor-documented / high.

Selected text or page content appears as removable context chips in the AI input. The side panel can sit left or right, or expand into a dedicated conversation view while context remains user-controlled.

- **platform Qualifications:** **description:** Mac and Windows are explicitly named in the downloaded page HTML metadata. No Linux or mobile shipment is established here.<br>**sourceIds:** [R04-H8](<https://shift.com/download/?platform=mac>)

- **chrome Parity:** unassessed

Feature limitations:

- General AI usage is limited in Free and expanded in Advanced, without numeric quotas established here.
- The specific opt-in explanation qualifies broad marketing about history-wide context; no data-flow or context-completeness test.

Sources: [R04-H4](<https://shift.com/ai/>), [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>), [R04-H6](<https://shift.com/pricing/>), [R04-H8](<https://shift.com/download/?platform=mac>).

### Acceptance criteria — proposed, not executed

- Inspect the pages, accounts and data sources in scope before an action.
- Test cancellation during reads, navigation and committed external actions with honest outcome reporting.
- Keep concurrent tasks from silently sharing or overwriting incompatible state.

### Tradeoffs

- Powerful automation creates state conflicts and partial cancellation.
- Foreground/background behavior and subscription entitlements differ by platform.

### Proposal limitations

- No vendor permission enforcement or stop behavior was tested.
- No security bypass is alleged in Chrome or its comparators.

Sources cited by this proposal: [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>), [R04-C4](<https://www.perplexity.ai/help-center/comet/en/articles/12658082-control-what-comet-assistant-can-use.md>), [R04-C6](<https://www.perplexity.ai/help-center/en/articles/13531023-managing-comet-assistant-permissions.md>), [R04-C7](<https://www.perplexity.ai/changelog/what-we-shipped-october-3rd>), [R04-D2](<https://www.diabrowser.com/changelog>), [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>).

<a id="REC-15"></a>

## REC-15 — Scope-aware private sessions and incoming links

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop and mobile | privacy-workflows | P1 | needs-validation | partial-baseline |

### Recorded Chrome baseline

Incognito limits retained local session data and has distinct cookie defaults. It does not make a user invisible to sites or networks.

#### [Google Chrome: Incognito local-session privacy — R01-FEATURE-INCOGNITO](<FEATURES.md#R01-FEATURE-INCOGNITO>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Incognito starts a separate browsing session and removes the session&#39;s retained site data and browsing record when all Incognito windows close. Downloaded files, saved bookmarks, and reading-list items can remain. Third-party cookies are blocked by default. The documentation expressly says Incognito does not make activity invisible to sites or network operators.

Feature limitations:

- The source establishes documented session behavior, not an anonymity guarantee or independent privacy measurement.
- No local data-retention or network tests were performed.

Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>).

#### [Google Chrome: Third-party-cookie controls — R01-FEATURE-THIRD-PARTY-COOKIES](<FEATURES.md#R01-FEATURE-THIRD-PARTY-COOKIES>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Computer help documents allowing or blocking third-party cookies, website exceptions, and temporary site overrides. Third-party cookies are blocked by default in Incognito. These controls are an existing baseline for privacy comparisons.

Feature limitations:

- Incognito&#39;s documented default is not proof of universal default blocking in ordinary browsing.
- Cookie settings are not equivalent to comprehensive tracker blocking, ad blocking, or anti-fingerprinting.
- Older ad-privacy/related-site cross-links do not establish current shipped Privacy Sandbox controls. No network behavior was tested.

Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>).

### Proposed refinement

Evaluate clear temporary-session entry/reset controls and incoming-link choices with explicit explanations of shared state, retained exceptions and deletion triggers.

### Comparator evidence

#### [DuckDuckGo Browser: Fire Button, Fireproof exceptions and isolated Fire sessions — R03-F-D03](<FEATURES.md#R03-F-D03>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>iOS/iPadOS<br>Android. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-DUCKDUCKGO>).

**Evidence / confidence:** vendor-documented / high.

The Fire Button exposes scoped deletion of browsing data. Fireproof sites retain selected state, while Fire Windows on desktop and Fire Tabs on mobile isolate activity from regular sessions and delete their session data on closing.

- **platform Boundaries:** The Windows help page says x86 updates end after version 0.170.0; it supplies no calendar cutoff.<br>The Mac App Store edition lacks the documented Bitwarden integration and local-file access of direct distribution.<br>The protection tables include platform-specific limitations and roadmap entries; uniform feature parity is not established.

Feature limitations:

- The Fire Button does not delete Fireproof first-party state, bookmarks, downloaded files or some app/search settings.
- The isolated-session and erasure statements are documented semantics, not forensic guarantees verified here.
- These local/session controls do not change the network-identity model or establish anonymity.

Sources: [R03-S-D2](<https://duckduckgo.com/updates>), [R03-S-D4](<https://duckduckgo.com/duckduckgo-help-pages/privacy/fire-tabs>).

#### [Mullvad Browser: Private browsing by default and Clear Private Session — R03-F-M02](<FEATURES.md#R03-F-M02>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-MULLVAD>).

**Evidence / confidence:** vendor-documented / high.

The browser documents private browsing as the default. In 16.0, the older New Identity broom becomes a Clear Private Session flame control for clearing the current session.

Feature limitations:

- Bookmarks and extension settings persist according to the documentation.
- The older reset-button name is superseded; session clearing is not network-identity rotation.
- Erasure behavior was not inspected at runtime.

Sources: [R03-S-M1](<https://mullvad.net/en/browser>), [R03-S-M2](<https://mullvad.net/en/browser/hard-facts>), [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>).

#### [Tor Browser: Separate New Identity and New Tor Circuit controls — R03-F-T03](<FEATURES.md#R03-F-T03>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-TOR>).

**Evidence / confidence:** vendor-documented / high.

New Identity closes tabs/windows, clears private state and uses new circuits. New Tor Circuit for this Site instead reloads the site through another circuit without clearing its private state or unlinking activity.

- **platform Boundaries:** 16.0 adds stable Linux AArch64 support and ends Linux x86 32-bit support.<br>The desktop offline manual and OS window-title option are not automatically Android features.<br>Only Tor Browser traffic is automatically routed through Tor; other applications are outside that scope.

Feature limitations:

- New Identity stops current activity and downloads.
- Changing circuits is a connection-recovery operation, not a substitute for identity reset.
- Equivalent Android UI and actual clearing behavior were not established by a local test.

Sources: [R03-S-T3](<https://support.torproject.org/tor-browser/features/managing-identities>).

#### [Waterfox: Private tabs alongside regular tabs — R03-F-W01](<FEATURES.md#R03-F-W01>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-WATERFOX>).

**Evidence / confidence:** vendor-documented / high.

Desktop private tabs sit alongside regular tabs, share a separate private container, and clear that container&#39;s site data when the last private tab closes while the normal session continues.

- **platform Boundaries:** Desktop download requirements include SSE4.2 for Windows/Linux and glibc 2.17 for Linux.<br>Firefox WebExtensions are documented as supported; Chrome-only extensions do not automatically transfer.<br>Current Waterfox must not be conflated with Waterfox Classic; Classic&#39;s lifecycle was not investigated.

Feature limitations:

- Private tabs share that container with one another; this is not per-tab identity isolation.
- Private-tab storage is not network anonymity.
- Erasure, UI clarity and Android parity were not tested.

Sources: [R03-S-W1](<https://www.waterfox.com/>).

#### [Firefox Focus: One-action local session disposal — R05-F-focus-erase](<FEATURES.md#R05-F-focus-erase>)

**Availability:** documented. **Platforms / editions:** Android<br>iPhone and iPad. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R05-B-focus>).

**Evidence / confidence:** vendor-documented / high.

Mozilla describes a conspicuous erase control for browsing history, cookies and related local session data. The iOS publisher record reinforces this disposable-session workflow.

Feature limitations:

- No test checked cookies, storage, restoration, previews or relaunch after erase. Local deletion does not delete server records or hide the device&#39;s network address; Android and iOS engine/session implementations differ.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-F01](<https://www.firefox.com/en-US/mobile/focus/>).

#### [Samsung Internet / Samsung Browser: Secret Mode, incoming private links and tracking controls — R05-F-samsung-private-links](<FEATURES.md#R05-F-samsung-private-links>)

**Availability:** documented. **Platforms / editions:** Android phones<br>Android tablets. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R05-B-samsung>).

**Evidence / confidence:** vendor-documented / high.

Publisher and release documentation describe Secret Mode and an option to open links from other applications in Secret Mode. Smart Anti-Tracking describes restricting cookie and storage access for domains capable of tracking. Incoming-link policy and tracking protection are documented mechanisms, not measured anonymity guarantees.

Feature limitations:

- Historical release notes do not establish a current per-version availability matrix. External-link dispatch, storage isolation, erase/relaunch behavior and tracking coverage were not tested; local private state does not itself establish network anonymity.

Sources: [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>), [R05-S02](<https://developer.samsung.com/browser/release-note/android-release-note.html>).

### Acceptance criteria — proposed, not executed

- Use controlled origins to test cookies, storage, permissions and the last-private-tab boundary.
- Make retained downloads/bookmarks/exceptions visible before clearing.
- Do not imply that local clearing changes the user&#39;s IP address or provides Tor anonymity.

### Tradeoffs

- Mixed regular/private tabs can obscure session boundaries.
- Reset actions can discard ongoing work and need clear scope.

### Proposal limitations

- Current Chrome private-link and per-platform reset parity remains unassessed.
- Tor circuit changes and Mullvad session clearing are intentionally distinguished.

Sources cited by this proposal: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>), [R03-S-D4](<https://duckduckgo.com/duckduckgo-help-pages/privacy/fire-tabs>), [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>), [R03-S-T3](<https://support.torproject.org/tor-browser/features/managing-identities>), [R03-S-W1](<https://www.waterfox.com/>), [R05-F01](<https://www.firefox.com/en-US/mobile/focus/>), [R05-S02](<https://developer.samsung.com/browser/release-note/android-release-note.html>).

<a id="REC-16"></a>

## REC-16 — Account-independent encrypted synchronization

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop and mobile | synchronization | P2 | needs-validation | partial-baseline |

### Recorded Chrome baseline

Chrome documents Google Account sync and an optional passphrase with data-type limitations. Accountless pairing and self-hosted sync were not established.

#### [Google Chrome: Google Account sync and optional passphrase — R01-FEATURE-SYNC](<FEATURES.md#R01-FEATURE-SYNC>)

**Availability:** documented. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Chrome documents saving bookmarks, reading list, passwords, settings, and other information in a Google Account, with data-type controls and a separately controllable History and tabs option. Tab-group changes can sync between signed-in desktop, Android, and iOS devices. An optional passphrase has documented exclusions and trade-offs: Google Wallet payment methods and addresses are not covered, full history is not synced, and only web addresses entered in the address bar are synced under that history limitation.

Feature limitations:

- Extension-related information in sync is not evidence that mobile Chrome can execute those extensions.
- With a passphrase, the documentation also limits password access through passwords.google.com; this is not an all-data, all-service equivalence claim.
- Self-hosted or account-free browser sync was not established. No account data, encryption, or cross-device synchronization was tested.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>), [R01-S36](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S41](<https://support.google.com/chrome_webstore/answer/1698338?hl=en>).

### Proposed refinement

Evaluate user-held-key device pairing with understandable recovery, device revocation, data-type selection and local-copy behavior.

### Comparator evidence

#### [Brave: User-held-key encrypted Sync — R02-BR-02](<FEATURES.md#R02-BR-02>)

**Availability:** documented. **Platforms / editions:** Per-platform Sync support not established by the cited policy. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-brave>).

**Evidence / confidence:** vendor-documented / high.

Brave&#39;s privacy policy describes opt-in Sync that keeps browser data encrypted on the hosting provider, with the decryption key held by the user.

- **chrome Parity:** unassessed

Feature limitations:

- Policy commitments, not a cryptographic audit, recovery test or traffic capture.
- Onboarding, current platform matrix, version requirements and inactive-chain handling were not exercised; inaccessible support-page snippets are not treated as evidence.

Sources: [R02-B2](<https://brave.com/privacy/browser/>).

#### [DuckDuckGo Browser: Accountless end-to-end encrypted Sync &amp; Backup — R03-F-D04](<FEATURES.md#R03-F-D04>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>iOS/iPadOS<br>Android. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-DUCKDUCKGO>).

**Evidence / confidence:** vendor-documented / high.

The policy describes syncing supported data with encryption on devices and decryption keys held on connected devices. Pairing uses recovery/QR codes without requiring a personal identity account.

- **platform Boundaries:** The Windows help page says x86 updates end after version 0.170.0; it supplies no calendar cutoff.<br>The Mac App Store edition lacks the documented Bitwarden integration and local-file access of direct distribution.<br>The protection tables include platform-specific limitations and roadmap entries; uniform feature parity is not established.

Feature limitations:

- The architecture and access promises were not independently cryptographically audited.
- Recovery-code custody and device access matter; supported data types and optional restore behavior need platform-specific verification.
- The policy says data not accessed for 18 months is deleted from servers; deleting server data does not remove already-local copies.
- Accountless synchronization is not Tor anonymity.

Sources: [R03-S-D5](<https://duckduckgo.com/sync_and_backup/privacy>).

### Acceptance criteria — proposed, not executed

- Test device enrollment, lost-device revocation and key-loss recovery for each supported data type.
- Explain what revocation cannot delete from an already compromised device.
- Independently review cryptographic and metadata properties before making privacy claims.

### Tradeoffs

- Account independence can make recovery harder.
- Provider metadata and device compromise remain relevant even with encrypted payloads.

### Proposal limitations

- No cryptographic implementation was audited.
- Comparator privacy policies do not prove equivalent end-to-end protection for every data type.

Sources cited by this proposal: [R01-S36](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>), [R02-B2](<https://brave.com/privacy/browser/>), [R03-S-D5](<https://duckduckgo.com/sync_and_backup/privacy>).

<a id="REC-17"></a>

## REC-17 — Truthful consent automation and privacy-signal status

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop and mobile | privacy-controls | P2 | needs-validation | partial-baseline |

### Recorded Chrome baseline

DNT, cookie settings and the staged California opt-out/GPC-style setting are distinct. A signal does not prove that a site honored it.

#### [Google Chrome: Do Not Track request — R01-FEATURE-DO-NOT-TRACK](<FEATURES.md#R01-FEATURE-DO-NOT-TRACK>)

**Availability:** documented. **Platforms / editions:** Desktop<br>Android. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Chrome documents a Do Not Track request setting for computers and Android devices, turned off by default. The help page says many sites, including Google&#39;s services, do not change their behavior in response. The setting is distinct from Chrome&#39;s regional opt-out request.

Feature limitations:

- DNT is a request, not enforced blocking or proof of website compliance.
- The exact request headers and site responses were not observed locally.

Sources: [R01-S32](<https://support.google.com/chrome/answer/2790761?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S33](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>).

#### [Google Chrome: Regional opt-out request / GPC-style privacy signal — R01-FEATURE-REGIONAL-OPT-OUT](<FEATURES.md#R01-FEATURE-REGIONAL-OPT-OUT>)

**Availability:** staged. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Official computer help documents a separate opt-out setting, describing this type of request as global privacy control or an opt-out preference signal. At retrieval, California is the listed eligible region, residency is assessed per Chrome profile, and the feature is explicitly still rolling out. Sites decide how to respond subject to regional law.

- **eligibility:** **assessment:** Per-profile residency; location masking, use in another region, or a recently changed account region can affect eligibility.<br>**regions:** California<br>**sourceIds:** [R01-S33](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>)

Feature limitations:

- This is neither a documented global rollout nor a confirmed absence of opt-out signaling.
- Mobile availability, actual wire behavior, and website/legal compliance were not established.
- Availability was read from the source, not from a user&#39;s profile or account.

Sources: [R01-S32](<https://support.google.com/chrome/answer/2790761?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S33](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>).

#### [Google Chrome: Third-party-cookie controls — R01-FEATURE-THIRD-PARTY-COOKIES](<FEATURES.md#R01-FEATURE-THIRD-PARTY-COOKIES>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Computer help documents allowing or blocking third-party cookies, website exceptions, and temporary site overrides. Third-party cookies are blocked by default in Incognito. These controls are an existing baseline for privacy comparisons.

Feature limitations:

- Incognito&#39;s documented default is not proof of universal default blocking in ordinary browsing.
- Cookie settings are not equivalent to comprehensive tracker blocking, ad blocking, or anti-fingerprinting.
- Older ad-privacy/related-site cross-links do not establish current shipped Privacy Sandbox controls. No network behavior was tested.

Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>).

### Proposed refinement

Evaluate opt-in consent automation that reports rejection, partial configuration, cosmetic hiding and unsupported cases separately; show emitted privacy signals without claiming universal enforcement.

### Comparator evidence

#### [DuckDuckGo Browser: Automatic cookie-consent handling with limited coverage — R03-F-D02](<FEATURES.md#R03-F-D02>)

**Availability:** limited. **Platforms / editions:** Windows<br>macOS<br>iOS/iPadOS<br>Android. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-DUCKDUCKGO>).

**Evidence / confidence:** vendor-documented / high.

The documentation describes attempting to minimize consented cookies and close a detected pop-up. Where preference management is unavailable it may only hide the pop-up using filter or cosmetic rules.

- **platform Boundaries:** The Windows help page says x86 updates end after version 0.170.0; it supplies no calendar cutoff.<br>The Mac App Store edition lacks the documented Bitwarden integration and local-file access of direct distribution.<br>The protection tables include platform-specific limitations and roadmap entries; uniform feature parity is not established.

- **default State:** Documented as enabled by default on supported app platforms.

Feature limitations:

- Cosmetic hiding is not proof that consent was rejected or cookies were prevented.
- Android iframe script-injection limits prevent handling some sites; coverage is incomplete and changes over time.
- Support for the DuckDuckGo extension is distinct from the host Chrome browser&#39;s native capabilities.
- No consent-manager corpus or consent-state test was performed.

Sources: [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>).

#### [DuckDuckGo Browser: Layered tracking controls with platform-specific coverage — R03-F-D06](<FEATURES.md#R03-F-D06>)

**Availability:** limited. **Platforms / editions:** Windows<br>macOS<br>iOS/iPadOS<br>Android. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-DUCKDUCKGO>).

**Evidence / confidence:** vendor-documented / high.

The protection matrix separately documents CNAME handling, fingerprint API changes, link/referrer controls, cookie restrictions, HTTPS upgrading and Global Privacy Control. These are different mechanisms with different platform coverage, not a single uniform guarantee.

- **platform Boundaries:** The Windows help page says x86 updates end after version 0.170.0; it supplies no calendar cutoff.<br>The Mac App Store edition lacks the documented Bitwarden integration and local-file access of direct distribution.<br>The protection tables include platform-specific limitations and roadmap entries; uniform feature parity is not established.

- **platform Coverage:** **capability:** CNAME handling<br>**documentedScope:** Windows/Android list-based handling; macOS/iOS coverage is a subset with a stated roadmap for usability limitations.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** Fingerprint API overrides<br>**documentedScope:** The Android table excludes iframe overrides because of WebView script-injection limitations.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** Automatic link tracking removal<br>**documentedScope:** The inspected table lists Windows as unsupported/on the roadmap; macOS/iOS cover the first navigation rather than later automatic redirects. Android lists removal of tracked parameters.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** Referrer controls<br>**documentedScope:** The table describes macOS/iOS WebKit-based and Windows handling, with Android unsupported because of WebView limitations.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** First-party cookie expiry<br>**documentedScope:** Platform tables distinguish implemented expiry from Windows and Android roadmap items; the generic introduction is not proof of uniform coverage.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** Global Privacy Control<br>**documentedScope:** Header and/or JavaScript opt-out signaling has platform qualifications. Legal effect depends on jurisdiction and site obligations, not merely sending the signal.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)

Feature limitations:

- The matrix is mutable and may contain stale entries; exact present binary behavior was not verified.
- A manual Copy Clean Link control is distinct from automatic link protection and does not establish parity with the automatic-navigation table.
- Chrome extension limitations and historical Topics comparisons do not establish native Chrome gaps or current lifecycle facts.
- No tracking effectiveness, GPC compliance, HTTPS coverage or cookie-expiry test was run.

Sources: [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>).

### Acceptance criteria — proposed, not executed

- Verify consent-state changes on controlled consent-manager fixtures and regional variants.
- Expose per-site exceptions and failure outcomes.
- Keep banner hiding, storage blocking and legally recognized preference signals distinguishable.

### Tradeoffs

- Consent interfaces and jurisdictional rules change.
- Automation that only hides a banner can misrepresent a user&#39;s choice.

### Proposal limitations

- Chrome&#39;s current consent automation is unassessed.
- The regional Chrome opt-out feature must not be presented as globally absent or universally available.

Sources cited by this proposal: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S32](<https://support.google.com/chrome/answer/2790761?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S33](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>), [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>).

<a id="REC-18"></a>

## REC-18 — Measured, coherent fingerprint-resistance options

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome privacy evaluation | privacy-controls | P2 | needs-validation | unassessed |

### Recorded Chrome baseline

Incognito and cookie controls do not by themselves establish comprehensive fingerprint resistance. Chrome&#39;s complete protection profile is outside this baseline.

#### [Google Chrome: Incognito local-session privacy — R01-FEATURE-INCOGNITO](<FEATURES.md#R01-FEATURE-INCOGNITO>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Incognito starts a separate browsing session and removes the session&#39;s retained site data and browsing record when all Incognito windows close. Downloaded files, saved bookmarks, and reading-list items can remain. Third-party cookies are blocked by default. The documentation expressly says Incognito does not make activity invisible to sites or network operators.

Feature limitations:

- The source establishes documented session behavior, not an anonymity guarantee or independent privacy measurement.
- No local data-retention or network tests were performed.

Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>).

#### [Google Chrome: Third-party-cookie controls — R01-FEATURE-THIRD-PARTY-COOKIES](<FEATURES.md#R01-FEATURE-THIRD-PARTY-COOKIES>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Computer help documents allowing or blocking third-party cookies, website exceptions, and temporary site overrides. Third-party cookies are blocked by default in Incognito. These controls are an existing baseline for privacy comparisons.

Feature limitations:

- Incognito&#39;s documented default is not proof of universal default blocking in ordinary browsing.
- Cookie settings are not equivalent to comprehensive tracker blocking, ad blocking, or anti-fingerprinting.
- Older ad-privacy/related-site cross-links do not establish current shipped Privacy Sandbox controls. No network behavior was tested.

Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>).

### Proposed refinement

Evaluate an internally consistent privacy preset against a defined threat model and representative population, rather than independently changing cosmetic attributes.

### Comparator evidence

#### [LibreWolf: RFP, normalized language and disabled WebGL — R03-F-L02](<FEATURES.md#R03-F-L02>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** unknown. [Browser qualifications](<CATALOG.md#R03-B-LIBREWOLF>).

**Evidence / confidence:** vendor-documented / high.

The project documents RFP, reporting en-US to websites, and disabling WebGL as parts of its fingerprint-resistance configuration.

Feature limitations:

- Language and graphics restrictions can affect localization and web applications.
- The project&#39;s best-in-class wording is not adopted as a comparative finding.
- No fingerprint or compatibility test was performed.

Sources: [R03-S-L2](<https://librewolf.net/docs/features/>).

#### [Mullvad Browser: Coherent fingerprint-resistance defaults — R03-F-M01](<FEATURES.md#R03-F-M01>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-MULLVAD>).

**Evidence / confidence:** vendor-documented / high.

The hard-facts page documents RFP, letterboxing, normalized fonts/timezone and other attribute/API restrictions intended to make users less distinguishable.

Feature limitations:

- Nearly identical fingerprints are a stated objective, not an independently established result.
- API restrictions and suppressed site-specific preferences can affect compatibility.
- No fingerprint-population or per-build settings test was performed.

Sources: [R03-S-M2](<https://mullvad.net/en/browser/hard-facts>).

#### [Tor Browser: Fingerprint normalization and desktop letterboxing — R03-F-T04](<FEATURES.md#R03-F-T04>)

**Availability:** limited. **Platforms / editions:** Windows<br>macOS<br>Linux<br>Android (fingerprinting defenses; letterboxing not established). **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-TOR>).

**Evidence / confidence:** vendor-documented / high.

The documentation describes reducing distinguishable fingerprint buckets through normalized attributes, font restrictions, user-agent normalization and window-size letterboxing on desktop.

- **platform Boundaries:** 16.0 adds stable Linux AArch64 support and ends Linux x86 32-bit support.<br>The desktop offline manual and OS window-title option are not automatically Android features.<br>Only Tor Browser traffic is automatically routed through Tor; other applications are outside that scope.

Feature limitations:

- The goal is reduced distinguishability, not perfect hiding of OS or device attributes.
- Cross-platform behavior and fingerprint population effects were not measured.
- Independent customization can alter the coherence of a fingerprint-resistance configuration.

Sources: [R03-S-T4](<https://support.torproject.org/tor-browser/features/fingerprinting-protections>).

### Acceptance criteria — proposed, not executed

- Measure distinguishability, signal consistency and web compatibility across a representative population.
- Evaluate locale, graphics, media and accessibility effects.
- Publish limitations and avoid equating a settings list with anonymity.

### Tradeoffs

- Unusual configurations can make a smaller user group more distinctive.
- API restrictions can break legitimate sites and assistive workflows.

### Proposal limitations

- No comparative privacy or anonymity benchmark was conducted.
- LibreWolf lifecycle and package-level update evidence remain qualified.

Sources cited by this proposal: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>), [R03-S-L2](<https://librewolf.net/docs/features/>), [R03-S-M2](<https://mullvad.net/en/browser/hard-facts>), [R03-S-T4](<https://support.torproject.org/tor-browser/features/fingerprinting-protections>).

<a id="REC-19"></a>

## REC-19 — Transparent destinations and reversible clean-link copying

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop and mobile | navigation | P1 | needs-validation | unassessed |

### Recorded Chrome baseline

Chrome destination display, copy-link variants and query-cleaning coverage require a separate navigation baseline.

#### [Google Chrome: Desktop toolbar customization — R01-FEATURE-DESKTOP-TOOLBAR](<FEATURES.md#R01-FEATURE-DESKTOP-TOOLBAR>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

The Customize Chrome toolbar panel lets users turn offered toolbar buttons on or off. Pinned buttons can be dragged to change order and unpinned through their context menu. Some buttons open a side panel, some a new tab, and some an address-bar bubble. This is an existing customization capability.

Feature limitations:

- The source says a disabled button cannot be reordered.
- This does not establish arbitrary relocation of every control or full menu/context-menu editing.
- No platform-specific toolbar operation was tested locally.

Sources: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>).

#### [Google Chrome: Third-party-cookie controls — R01-FEATURE-THIRD-PARTY-COOKIES](<FEATURES.md#R01-FEATURE-THIRD-PARTY-COOKIES>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Computer help documents allowing or blocking third-party cookies, website exceptions, and temporary site overrides. Third-party cookies are blocked by default in Incognito. These controls are an existing baseline for privacy comparisons.

Feature limitations:

- Incognito&#39;s documented default is not proof of universal default blocking in ordinary browsing.
- Cookie settings are not equivalent to comprehensive tracker blocking, ad blocking, or anti-fingerprinting.
- Older ad-privacy/related-site cross-links do not establish current shipped Privacy Sandbox controls. No network behavior was tested.

Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>).

### Proposed refinement

Evaluate inspectable full destinations, explicit search interpretation and a clean-link copy preview that preserves access to the original URL.

### Comparator evidence

#### [LibreWolf: Tracking-parameter removal and reduced speculative networking — R03-F-L04](<FEATURES.md#R03-F-L04>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** unknown. [Browser qualifications](<CATALOG.md#R03-B-LIBREWOLF>).

**Evidence / confidence:** vendor-documented / high.

The feature list describes stripping tracking elements from URLs, trimming cross-origin referrers, and disabling link prefetching and speculative connections.

Feature limitations:

- Parameter removal can interact with functional URLs; disabling speculation can affect loading behavior.
- Neither effects nor compatibility were measured, and no Chrome default comparison is implied.

Sources: [R03-S-L2](<https://librewolf.net/docs/features/>).

#### [ungoogled-chromium: Explicit address-bar search and suggestion controls — R03-F-U04](<FEATURES.md#R03-F-U04>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-UNGOOGLED>).

**Evidence / confidence:** vendor-documented / high.

The README documents a No Search omnibox provider to disable searching and a Suggestions URL field in the search-engine editor for custom suggestion endpoints.

Feature limitations:

- Availability and defaults can vary by build and version.
- No address-versus-search behavior, suggestion network request, or BSD package was tested.

Sources: [R03-S-U1](<https://github.com/ungoogled-software/ungoogled-chromium>).

#### [ungoogled-chromium: Additional configuration flags and transparent URL display — R03-F-U05](<FEATURES.md#R03-F-U05>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-UNGOOGLED>).

**Evidence / confidence:** vendor-documented / high.

The project documents new command-line switches and flags, along with disabling automatic omnibox URL formatting such as protocol stripping and hidden parameters.

Feature limitations:

- The README says many added features require manual activation; this record does not assert every option is enabled by default.
- Flags are not necessarily stable, supported user-facing contracts.
- Specific builds and URL-rendering behavior were not exercised.

Sources: [R03-S-U1](<https://github.com/ungoogled-software/ungoogled-chromium>).

#### [Waterfox: Persistent status-bar URL display — R03-F-W04](<FEATURES.md#R03-F-W04>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-WATERFOX>).

**Evidence / confidence:** vendor-documented / high.

A desktop status bar exposes the full destination when hovering over links, alongside loading progress and keyboard-shortcut information, rather than using a transient overlay.

- **platform Boundaries:** Desktop download requirements include SSE4.2 for Windows/Linux and glibc 2.17 for Linux.<br>Firefox WebExtensions are documented as supported; Chrome-only extensions do not automatically transfer.<br>Current Waterfox must not be conflated with Waterfox Classic; Classic&#39;s lifecycle was not investigated.

Feature limitations:

- Screen-space, accessibility and destination-disclosure usability were not evaluated.
- This is a desktop description, not established mobile behavior or a Chrome gap.

Sources: [R03-S-W1](<https://www.waterfox.com/>).

### Acceptance criteria — proposed, not executed

- Test signed links, authentication URLs, intranet names and functional query parameters.
- Show exactly which parameters are removed and allow copying the original.
- Distinguish navigation-time filtering from a user-initiated copy action.

### Tradeoffs

- Removing a parameter can break a working link.
- Permanent URL visibility competes with available interface space.

### Proposal limitations

- No missing Chrome action or default is asserted.
- No URL-cleaning correctness corpus was executed.

Sources cited by this proposal: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>), [R03-S-L2](<https://librewolf.net/docs/features/>), [R03-S-U1](<https://github.com/ungoogled-software/ungoogled-chromium>), [R03-S-W1](<https://www.waterfox.com/>).

<a id="REC-20"></a>

## REC-20 — Explainable project-level resource controls

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop | performance | P2 | needs-validation | unassessed |

### Recorded Chrome baseline

Chrome&#39;s existing task manager, memory and energy features must be measured before proposing a gap; this baseline concentrated on organization and UI controls.

#### [Google Chrome: Persistent project workspaces and collaborative contexts — R01-FEATURE-PROJECT-WORKSPACES](<FEATURES.md#R01-FEATURE-PROJECT-WORKSPACES>)

**Availability:** not-established. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** hypothesis / low.

Documented building blocks include saved/synced groups, named windows, and separate profiles for bookmarks, history, passwords, and settings. This research did not establish a distinct persistent multiwindow project model, layout-preserving workspace restore, or universal cross-account live collaborative groups beyond those building blocks.

Feature limitations:

- This is an unresolved comparison dimension, not a confirmed Chrome omission.
- The tab-group-sharing policy page returned only a promotional banner; its title and snippet were not treated as proof of rollout or supported collaboration behavior.
- Profile separation does not imply a security boundary against someone with access to the same device.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>), [R01-S26](<https://support.google.com/chrome/answer/2364824?hl=en&co=GENIE.Platform%3DDesktop>).

#### [Google Chrome: Saved and synced tab groups — R01-FEATURE-TAB-GROUPS](<FEATURES.md#R01-FEATURE-TAB-GROUPS>)

**Availability:** documented. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Desktop, Android, and iOS help describe named/color tab groups, saving, closing, and reopening groups, and syncing changes across devices using the same Google Account. Desktop supports collapse/expand. Deleting or ungrouping a synced group can remove the group on other devices; closing a saved group is a different operation. Mobile interfaces have their own commands and settings.

Feature limitations:

- Same-account sync is not the same capability as cross-account live collaboration.
- iOS action-table extraction was partial, although the surrounding body explicitly documents group creation and syncing.
- Delete propagation, save/reopen behavior, and cross-device consistency were not locally tested.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>).

### Proposed refinement

Evaluate resource explanations and suspend/resume controls organized around a user&#39;s projects or apps, with clear attribution and state-loss boundaries.

### Comparator evidence

#### [Microsoft Edge: Sleeping tabs and Energy saver — R02-ED-04](<FEATURES.md#R02-ED-04>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-edge>).

**Evidence / confidence:** vendor-documented / high.

Edge documents inactivity timing, sleep exclusions, policy controls, and balanced or maximum Energy saver modes. Sleeping freezes script timers; discarding requires a full reload.

- **platform Qualifications:** **description:** Edge 151+ requires macOS 13+. Android support requires Android 10+ on ARM. iOS support covers the two latest major releases. Supported Linux distributions are enumerated; Chromebooks are explicitly unsupported.<br>**sourceIds:** [R02-E2](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-supported-operating-systems>)<br>**description:** Microsoft promises Edge/WebView2 updates on Windows 10 22H2 through at least October 2028 without Windows ESU enrollment; this is not Windows OS support.<br>**sourceIds:** [R02-E2](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-supported-operating-systems>)<br>**description:** Workspaces V2 requires a signed-in Microsoft/AAD account and is documented for Windows/macOS desktop, despite the browser&#39;s broader platform support.<br>**sourceIds:** [R02-E3](<https://support.microsoft.com/en-us/edge/getting-started-with-microsoft-edge-workspaces>)

- **chrome Parity:** unassessed

Feature limitations:

- No battery, CPU, reload, call-preservation or responsiveness benchmark was run.
- The source warns of visible slowdowns or less-smooth video. Defaults are not identical across platforms and modes.
- Sleeping tabs and Energy saver must not be conflated with the separate Performance detector&#39;s planned retirement.

Sources: [R02-E7](<https://support.microsoft.com/en-us/edge/learn-about-performance-features-in-microsoft-edge>).

#### [Floorp: Overlay/floating and unload controls — R04-feature-floorp-04](<FEATURES.md#R04-feature-floorp-04>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** maintenance. [Browser qualifications](<CATALOG.md#R04-browser-floorp>).

**Evidence / confidence:** vendor-documented / high.

Use sidebar panels as overlays or movable/resizable floating views, open them on hover, keep them resident or unload them when hidden. Internal tools and supported extension pages can also be exposed as panels.

- **lifecycle Details:** **documentedVersion:** 12.21.2<br>**maintenanceType:** Temporary stabilization, not discontinuation<br>**pauseEndAt:** Not recorded<br>**releaseArticleDate:** 2026-11-13<br>**sourceIds:** [R04-F2](<https://blog.floorp.app/en/release/12.21.2/>)

- **chrome Parity:** unassessed

Feature limitations:

- Some extensions cannot be displayed in the sidebar.
- Unloading requires a later reload; form-state preservation and resource savings were not measured.

Sources: [R04-F1](<https://floorp.app/en>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>).

#### [Wavebox: Navigator resource overview — R04-feature-wavebox-05](<FEATURES.md#R04-feature-wavebox-05>)

**Availability:** documented. **Platforms / editions:** macOS<br>Windows<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R04-browser-wavebox>).

**Evidence / confidence:** vendor-documented / high.

Navigator provides Spaces, List and Map views, with memory-sized Space tiles, CPU/memory sorting, extension resource usage and time/resource insights by work context and date range.

- **lifecycle Details:** **documentedVersion:** 155.3.12<br>**isLatestVersionEstablished:** false<br>**releaseArticleDate:** 2026-10-08<br>**sourceIds:** [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>)

- **chrome Parity:** unassessed

Feature limitations:

- Documented in release 155.3.12; metric correctness, overhead and current plan entitlement were not measured.
- No conclusion about superiority to Chrome&#39;s existing performance tools.

Sources: [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>), [R04-W5](<https://wavebox.io/download>).

### Acceptance criteria — proposed, not executed

- Compare task completion and resource use against current Chrome controls.
- Preserve declared project layout when suspending a context.
- Explain exclusions such as active media, unsaved work or background tasks.

### Tradeoffs

- Per-project attribution can be ambiguous across shared processes.
- Hard limits can harm responsiveness or lose state; metrics also have overhead.

### Proposal limitations

- No speed, memory or battery superiority ranking is supported.
- Opera GX Linux CPU-limiter parity was not established by Linux-specific evidence.

Sources cited by this proposal: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R02-E7](<https://support.microsoft.com/en-us/edge/learn-about-performance-features-in-microsoft-edge>), [R02-G2](<https://www.opera.com/gx/linux>), [R02-G3](<https://www.opera.com/gx/features/gx-control>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>), [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>).

<a id="REC-21"></a>

## REC-21 — Reversible abuse protection with visible explanations

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop and mobile | abuse-protection | P2 | needs-validation | unassessed |

### Recorded Chrome baseline

Safe Browsing is documented. Existing Chrome notification revocation and clipboard/ClickFix interventions need targeted comparison.

#### [Google Chrome: Safe Browsing protection levels — R01-FEATURE-SAFE-BROWSING](<FEATURES.md#R01-FEATURE-SAFE-BROWSING>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Chrome documents Standard protection as the default, Enhanced protection as an option, and a no-protection setting. Enhanced protection sends URLs and samples of page content, extension activity, and system information for security checks. Standard protection uses obfuscated URL portions through privacy servers and can send additional information for suspicious behavior.

Feature limitations:

- Security effectiveness, data-use assurances, and performance claims are vendor statements, not measurements from this lane.
- Safe Browsing is not evidence of comprehensive anti-tracking, ad blocking, or a general browsing VPN/relay.

Sources: [R01-S35](<https://support.google.com/chrome/answer/9890866?hl=en&co=GENIE.Platform%3DDesktop>).

### Proposed refinement

Evaluate explanations and recovery paths for abusive-notification revocation and suspicious clipboard instructions, preserving legitimate user actions.

### Comparator evidence

#### [Microsoft Edge: Reversible automatic notification revocation — R02-ED-07](<FEATURES.md#R02-ED-07>)

**Availability:** limited. **Platforms / editions:** Edge 158; per-platform rollout not established. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-edge>).

**Evidence / confidence:** vendor-documented / high.

Edge 158 notes describe automatically stopping notifications from a source whose notifications lead to SmartScreen-blocked scam, phishing or malware pages, with review and restoration controls.

- **platform Qualifications:** **description:** Edge 151+ requires macOS 13+. Android support requires Android 10+ on ARM. iOS support covers the two latest major releases. Supported Linux distributions are enumerated; Chromebooks are explicitly unsupported.<br>**sourceIds:** [R02-E2](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-supported-operating-systems>)<br>**description:** Microsoft promises Edge/WebView2 updates on Windows 10 22H2 through at least October 2028 without Windows ESU enrollment; this is not Windows OS support.<br>**sourceIds:** [R02-E2](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-supported-operating-systems>)<br>**description:** Workspaces V2 requires a signed-in Microsoft/AAD account and is documented for Windows/macOS desktop, despite the browser&#39;s broader platform support.<br>**sourceIds:** [R02-E3](<https://support.microsoft.com/en-us/edge/getting-started-with-microsoft-edge-workspaces>)

- **chrome Parity:** unassessed

Feature limitations:

- Release-note observation, not a locally reproduced security behavior.
- Detection efficacy, false positives, platform equivalence and restoration accessibility were not measured.

Sources: [R02-E1](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel>).

### Acceptance criteria — proposed, not executed

- Use benign controlled fixtures to measure correct detections and false positives.
- Explain the intervention and allow appropriate per-site recovery.
- Verify local-versus-remote processing claims and accessibility of notices.

### Tradeoffs

- Excessive prompts can undermine attention to genuine warnings.
- Protection effectiveness and user control can pull in different directions.

### Proposal limitations

- Opera&#39;s Paste Protect behavior is vendor-documented, not independently measured.
- No vulnerability or missing Chrome defense is claimed.

Sources cited by this proposal: [R01-S35](<https://support.google.com/chrome/answer/9890866?hl=en&co=GENIE.Platform%3DDesktop>), [R02-E1](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel>), [R02-O5](<https://blogs.opera.com/security/2026/07/how-opera-paste-protect-guards-against-clipboard-attacks/>).

<a id="REC-22"></a>

## REC-22 — Versioned feature, protection and lifecycle information

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome help and release information | documentation | P1 | needs-validation | partial-baseline |

### Recorded Chrome baseline

Chrome help, release announcements and VersionHistory already exist. Feature eligibility and rollout are not the same as the highest available version number.

#### [Google Chrome: Gemini availability and granular controls — R01-FEATURE-GEMINI-CONTROLS](<FEATURES.md#R01-FEATURE-GEMINI-CONTROLS>)

**Availability:** staged. **Platforms / editions:** Windows<br>macOS<br>Chromebook Plus<br>iOS (administrator documentation)<br>Android (administrator documentation, U.S.). **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Consumer computer help says Gemini in Chrome is gradually released and requires first-use opt-in. It documents hiding or showing the browser icon and desktop integration, stopping or selecting tab sharing, changing Share current tab by default, and managing location, microphone, and auto-browse permissions. Current-tab content is shared by default when opening a chat unless that default is changed; up to ten open tabs can be shared. Enterprise settings can disallow Gemini integration, but hiding an icon, limiting permissions, and disabling integration have different effects.

- **eligibility:** **description:** Age 13 or the applicable local age, a supported region and language, a Windows or Mac computer or Chromebook Plus, current Chrome, and sign-in are required. Incognito and signed-out profiles are excluded. Work/school access and supervised-user controls have additional conditions; Live and auto browse have under-18 restrictions.<br>**scope:** Consumer computer help<br>**sourceIds:** [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>)<br>**description:** This page specifies age 18 or older, an Android device in the U.S. or a supported-region computer/iOS device, supported language, current Chrome, and sign-in. Both the Gemini app setting and GeminiSettings must allow access. The documented GeminiSettings value 1 disallows integrations; GenAiDefaultSettings value 2 defaults GeminiSettings to that disallowed state.<br>**scope:** Administrator help<br>**sourceIds:** [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>)

Feature limitations:

- Consumer and managed eligibility are separately scoped and must not be merged into a single age/platform rule.
- Supported-region and language tables were incompletely extracted; missing entries were not reconstructed.
- A universal consumer disable-all-AI switch was not established. These controls are distinct from on-device generative-model removal.
- No Gemini session, data sharing, policy application, or AI task was run by this lane.

Sources: [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>).

#### [Google Chrome: Privacy Sandbox retirement-plan qualification — R01-FEATURE-PRIVACY-SANDBOX-TRANSITION](<FEATURES.md#R01-FEATURE-PRIVACY-SANDBOX-TRANSITION>)

**Availability:** historical. **Platforms / editions:** Chrome platforms covered by the announcement<br>Android technologies explicitly named by the announcement. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

The official October 17, 2025 update announces retirement plans for technologies including Topics, Protected Audience, Attribution Reporting, IP Protection, and Related Website Sets, with Chrome/Android phase-out processes to follow. It says CHIPS and FedCM continue to be supported. Older cookie-help cross-links and historical launch material must not be used as a current feature inventory.

Feature limitations:

- Historical marks the sourced transition announcement, not a finding that every listed capability is currently absent.
- Exact removal milestones, the Chrome 158 enabled state, and post-retirement private-relay behavior were not independently established.
- Two ad-privacy help URLs returned generic getting-started content; those retrievals cannot establish current controls.
- Android system technologies and Chrome browser functionality must remain separately scoped.

Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S42](<https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies>).

#### [Google Chrome: Regional opt-out request / GPC-style privacy signal — R01-FEATURE-REGIONAL-OPT-OUT](<FEATURES.md#R01-FEATURE-REGIONAL-OPT-OUT>)

**Availability:** staged. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Official computer help documents a separate opt-out setting, describing this type of request as global privacy control or an opt-out preference signal. At retrieval, California is the listed eligible region, residency is assessed per Chrome profile, and the feature is explicitly still rolling out. Sites decide how to respond subject to regional law.

- **eligibility:** **assessment:** Per-profile residency; location masking, use in another region, or a recently changed account region can affect eligibility.<br>**regions:** California<br>**sourceIds:** [R01-S33](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>)

Feature limitations:

- This is neither a documented global rollout nor a confirmed absence of opt-out signaling.
- Mobile availability, actual wire behavior, and website/legal compliance were not established.
- Availability was read from the source, not from a user&#39;s profile or account.

Sources: [R01-S32](<https://support.google.com/chrome/answer/2790761?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S33](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>).

### Proposed refinement

Evaluate a user-visible matrix linking platform, channel, region, edition, engine version and feature rollout, with clear retirement and documentation-review dates.

### Comparator evidence

#### [DuckDuckGo Browser: Layered tracking controls with platform-specific coverage — R03-F-D06](<FEATURES.md#R03-F-D06>)

**Availability:** limited. **Platforms / editions:** Windows<br>macOS<br>iOS/iPadOS<br>Android. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-DUCKDUCKGO>).

**Evidence / confidence:** vendor-documented / high.

The protection matrix separately documents CNAME handling, fingerprint API changes, link/referrer controls, cookie restrictions, HTTPS upgrading and Global Privacy Control. These are different mechanisms with different platform coverage, not a single uniform guarantee.

- **platform Boundaries:** The Windows help page says x86 updates end after version 0.170.0; it supplies no calendar cutoff.<br>The Mac App Store edition lacks the documented Bitwarden integration and local-file access of direct distribution.<br>The protection tables include platform-specific limitations and roadmap entries; uniform feature parity is not established.

- **platform Coverage:** **capability:** CNAME handling<br>**documentedScope:** Windows/Android list-based handling; macOS/iOS coverage is a subset with a stated roadmap for usability limitations.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** Fingerprint API overrides<br>**documentedScope:** The Android table excludes iframe overrides because of WebView script-injection limitations.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** Automatic link tracking removal<br>**documentedScope:** The inspected table lists Windows as unsupported/on the roadmap; macOS/iOS cover the first navigation rather than later automatic redirects. Android lists removal of tracked parameters.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** Referrer controls<br>**documentedScope:** The table describes macOS/iOS WebKit-based and Windows handling, with Android unsupported because of WebView limitations.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** First-party cookie expiry<br>**documentedScope:** Platform tables distinguish implemented expiry from Windows and Android roadmap items; the generic introduction is not proof of uniform coverage.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** Global Privacy Control<br>**documentedScope:** Header and/or JavaScript opt-out signaling has platform qualifications. Legal effect depends on jurisdiction and site obligations, not merely sending the signal.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)

Feature limitations:

- The matrix is mutable and may contain stale entries; exact present binary behavior was not verified.
- A manual Copy Clean Link control is distinct from automatic link protection and does not establish parity with the automatic-navigation table.
- Chrome extension limitations and historical Topics comparisons do not establish native Chrome gaps or current lifecycle facts.
- No tracking effectiveness, GPC compliance, HTTPS coverage or cookie-expiry test was run.

Sources: [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>).

#### [Mullvad Browser: Explicit encrypted-DNS settings and Quad9 migration — R03-F-M05](<FEATURES.md#R03-F-M05>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-MULLVAD>).

**Evidence / confidence:** vendor-documented / high.

The 16.0 announcement migrates users of discontinued Mullvad encrypted DNS to Quad9, preserves customized DoH settings, and describes settings for always using DoH or using the operating system resolver.

Feature limitations:

- The release recommends OS DNS when using a VPN; this is context-specific guidance, not proof of any tested routing setup.
- 16.0.2 adds Cloudflare as an available provider and fixes Quad9 error handling; availability is different from the default.
- Encrypted DNS is not Tor anonymity, and fallback or leak behavior was not measured.

Sources: [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>), [R03-S-M5](<https://api.github.com/repos/mullvad/mullvad-browser/releases/latest>).

#### [Nyxt: 5.0 CEF extension and request-blocking integration — R06-F-NYXT-CEF-EXTENSIONS-BLOCKING](<FEATURES.md#R06-F-NYXT-CEF-EXTENSIONS-BLOCKING>)

**Availability:** limited. **Platforms / editions:** Linux x86-64 (5.0.0 CEF release; per-platform behavior unverified)<br>macOS ARM64 (5.0.0 CEF release; per-platform behavior unverified). **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R06-B-NYXT>).

**Evidence / confidence:** vendor-documented / high.

The 5.0.0 release makes CEF the default and documents loading unpacked Chromium Manifest V2/V3 extensions, extension-management commands and request blocking using uBlock Origin default filter lists.

Feature limitations:

- Version- and renderer-scoped documentation; alternate WebKitGTK behavior is not assumed equivalent, and Electron was removed in 5.0.0.
- No extension was loaded or blocker tested. Manifest support and use of filter lists do not prove every Chromium extension or uBlock feature works.

Sources: [R06-N2](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>), [R06-N3](<https://nyxt-browser.com/article/release-5.0.0.org>), [R06-N4](<https://api.github.com/repos/atlas-engineer/nyxt/releases/tags/5.0.0>).

### Acceptance criteria — proposed, not executed

- Distinguish documented, staged, experimental, unsupported and retired states.
- Tie a displayed capability to an actual release/eligibility source and review date.
- Explain why a feature may differ between two installations with the same version.

### Tradeoffs

- A matrix can drift unless maintained from authoritative release data.
- Not every field-trial detail may be publicly available.

### Proposal limitations

- Comparator documentation conflicts illustrate a maintenance problem, not Chrome defects.
- Population fractions from different VersionHistory groups must not be summed as market share.

Sources cited by this proposal: [R01-S10](<https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html>), [R01-S11](<https://developer.chrome.com/docs/web-platform/versionhistory/reference>), [R01-S12](<https://versionhistory.googleapis.com/v1/chrome/platforms/win64/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S33](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S42](<https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies>), [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>), [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>), [R06-N3](<https://nyxt-browser.com/article/release-5.0.0.org>), [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>).

<a id="REC-23"></a>

## REC-23 — Honest offline-media and reading states

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome mobile and desktop | media | P2 | needs-validation | unassessed |

### Recorded Chrome baseline

Chrome reading mode and read-aloud are documented. Saved-media, offline queue and multi-picture-in-picture parity were not assessed.

#### [Google Chrome: Reading mode, including immersive full-page reading — R01-FEATURE-READING-MODE](<FEATURES.md#R01-FEATURE-READING-MODE>)

**Availability:** documented. **Platforms / editions:** Desktop<br>Android<br>iOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Desktop help documents an immersive full-page reading view and an optional side-panel view, adjustable fonts/themes/spacing, read aloud, voice and speed selection, and line focus. Android and iOS help document their own reading-mode commands and typography/background controls. Chrome should not be described as having only a side-panel reader.

- **platform Qualifications:** **description:** The computer body explicitly says reading mode is not yet available on Googlebook. It also describes Windows/Linux/ChromeOS and macOS shortcuts; the Googlebook exclusion must not be generalized to all ChromeOS.<br>**sourceIds:** [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>)<br>**description:** Mobile pages have distinct commands and controls. Computer-specific read-aloud and spacing features are not automatically established on mobile.<br>**sourceIds:** [R01-S22](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S23](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DiOS>)

Feature limitations:

- Reading mode is site/content dependent; some pages produce unavailable or failure messages.
- The original immersive-reader announcement described rollout beginning. Current help is not a per-user enablement test.
- No readability, accessibility, voice quality, or extraction accuracy was measured.

Sources: [R01-S17](<https://blog.google/products-and-platforms/products/chrome/new-chrome-productivity-features>), [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R01-S22](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S23](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DiOS>).

### Proposed refinement

Evaluate explicit saved-link, downloaded, expired and unavailable states for supported media/reading queues, with accessible playback controls.

### Comparator evidence

#### [Brave: Playlist offline and background playback — R02-BR-04](<FEATURES.md#R02-BR-04>)

**Availability:** limited. **Platforms / editions:** iOS/iPadOS. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-brave>).

**Evidence / confidence:** vendor-documented / high.

Brave Playlist documentation describes saving supported audio/video for offline and background playback with lock-screen controls.

- **chrome Parity:** unassessed

Feature limitations:

- No media was saved or played; actual player compatibility and offline behavior were not tested.
- No shipped desktop/Android support or future delivery date is established. The workflow is not a portable media export format.

Sources: [R02-B4](<https://brave.com/playlist/>).

#### [Firefox: Multiple Picture-in-Picture video windows — R02-FF-05](<FEATURES.md#R02-FF-05>)

**Availability:** documented. **Platforms / editions:** Desktop-style workflow; individual OS coverage unverified. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R02-browser-firefox>).

**Evidence / confidence:** vendor-documented / high.

Mozilla documents multiple simultaneous always-on-top Picture-in-Picture video windows.

- **platform Qualifications:** **description:** Firefox 160 desktop requires Windows 10+, macOS 10.15+, or the listed GNU/Linux libraries.<br>**sourceIds:** [R02-F2](<https://www.firefox.com/en-US/firefox/160.0/system-requirements/>)<br>**description:** The iOS implementation does not use Gecko; desktop/Android engine-dependent features cannot be assumed on iOS.<br>**sourceIds:** [R02-F3](<https://firefox-source-docs.mozilla.org/overview/gecko.html>), [R02-F4](<https://firefox-source-docs.mozilla.org/overview/ios.html>)

- **chrome Parity:** unassessed

Feature limitations:

- No runtime media test was performed.
- Player and DRM compatibility, practical resource limits, accessibility and mobile equivalence were not established.

Sources: [R02-F10](<https://www.firefox.com/en-US/features/picture-in-picture/>).

#### [Quetta: Media queues with qualified downloads and offline access — R05-F-quetta-media](<FEATURES.md#R05-F-quetta-media>)

**Availability:** limited. **Platforms / editions:** Android mobile offering<br>iOS mobile offering; edition-specific availability. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R05-B-quetta>).

**Evidence / confidence:** vendor-documented / high.

Official guides describe playlist organization, supported downloads, picture-in-picture and background playback where available. Offline access requires compatible, permitted media; saving a playlist entry does not itself make the referenced media playable offline.

Feature limitations:

- Site, account, format, region and media permissions constrain availability. No download, interruption recovery, PiP, background or offline playback test was run; general guides are not a per-build cross-platform compatibility matrix.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-Q01](<https://play.google.com/store/apps/details?id=net.quetta.browser&hl=en>), [R05-Q06](<https://www.quetta.net/features/video-downloader>), [R05-Q07](<https://www.quetta.net/features/playlist>).

#### [Samsung Internet / Samsung Browser: Video Assistant — R05-F-samsung-video](<FEATURES.md#R05-F-samsung-video>)

**Availability:** documented. **Platforms / editions:** Android phones<br>Android tablets. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R05-B-samsung>).

**Evidence / confidence:** vendor-documented / high.

The Android publisher listing describes Video Assistant as a dedicated in-browser video-control workflow. This is a concrete media interaction feature rather than evidence of faster playback or broader codec support.

Feature limitations:

- Documentary evidence only; supported sites, formats and behavior were not tested. No corresponding Windows, Wear OS or iOS capability is inferred.

Sources: [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>).

### Acceptance criteria — proposed, not executed

- Test offline access separately from merely saving a playlist link.
- Explain provider restrictions and unsupported media without promising universal downloading.
- Verify captions, keyboard controls, queue recovery and background-playback limits by platform.

### Tradeoffs

- Storage, battery and provider availability vary.
- Streaming links can expire or require authentication.

### Proposal limitations

- No media provider restrictions were bypassed or download functionality tested.
- Brave Playlist evidence is platform-qualified, not universal across Brave editions.

Sources cited by this proposal: [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R02-B4](<https://brave.com/playlist/>), [R02-F10](<https://www.firefox.com/en-US/features/picture-in-picture/>), [R05-Q06](<https://www.quetta.net/features/video-downloader>), [R05-Q07](<https://www.quetta.net/features/playlist>), [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>).

<a id="REC-24"></a>

## REC-24 — Optional generic operating-system window titles

| Target | Category | Editorial priority | Saved status | Chrome parity |
| --- | --- | --- | --- | --- |
| Chrome desktop | local-disclosure-control | P2 | needs-validation | unassessed |

### Recorded Chrome baseline

Incognito&#39;s local-history scope does not by itself describe what operating-system window titles expose. Existing Chrome title controls were not assessed.

#### [Google Chrome: Incognito local-session privacy — R01-FEATURE-INCOGNITO](<FEATURES.md#R01-FEATURE-INCOGNITO>)

**Availability:** documented. **Platforms / editions:** Desktop. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R01-BROWSER-CHROME>).

**Evidence / confidence:** vendor-documented / high.

Incognito starts a separate browsing session and removes the session&#39;s retained site data and browsing record when all Incognito windows close. Downloaded files, saved bookmarks, and reading-list items can remain. Third-party cookies are blocked by default. The documentation expressly says Incognito does not make activity invisible to sites or network operators.

Feature limitations:

- The source establishes documented session behavior, not an anonymity guarantee or independent privacy measurement.
- No local data-retention or network tests were performed.

Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>).

### Proposed refinement

Evaluate an opt-in generic window-title mode for users who want to reduce page-title disclosure to local window listings.

### Comparator evidence

#### [Mullvad Browser: Opt-in generic OS window titles — R03-F-M06](<FEATURES.md#R03-F-M06>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-MULLVAD>).

**Evidence / confidence:** vendor-documented / high.

The 16.0 settings can replace page-derived window names with Mullvad Browser to limit disclosure through operating-system window titles.

- **default State:** Opt-in in the 16.0 announcement.

Feature limitations:

- The announcement warns about screen readers and customized window-management tools.
- No OS integration or accessibility test was performed; protection is limited to this disclosure channel.

Sources: [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>).

#### [Tor Browser: Opt-in generic OS window titles — R03-F-T05](<FEATURES.md#R03-F-T05>)

**Availability:** documented. **Platforms / editions:** Windows<br>macOS<br>Linux. **Browser lifecycle:** active. [Browser qualifications](<CATALOG.md#R03-B-TOR>).

**Evidence / confidence:** vendor-documented / high.

Tor Browser 16.0 adds a setting replacing page-derived operating-system window titles with the browser name, limiting that particular disclosure channel to other local applications.

- **platform Boundaries:** 16.0 adds stable Linux AArch64 support and ends Linux x86 32-bit support.<br>The desktop offline manual and OS window-title option are not automatically Android features.<br>Only Tor Browser traffic is automatically routed through Tor; other applications are outside that scope.

- **default State:** Opt-in in the 16.0 announcement.

Feature limitations:

- The release warns about screen-reader, window-manager and application-switcher usability.
- This addresses window titles, not every form of local observation or device compromise.
- No accessibility or OS-level behavior was tested.

Sources: [R03-S-T1](<https://blog.torproject.org/new-release-tor-browser-160>).

### Acceptance criteria — proposed, not executed

- Measure title visibility through the supported operating-system interfaces.
- Preserve usable multiwindow identification and screen-reader navigation.
- Explain the exact disclosure channel covered and its limitations.

### Tradeoffs

- Generic names can impair task switching and accessibility.
- This does not prevent screenshots, device compromise or other local observation.

### Proposal limitations

- No current Chrome absence or local disclosure vulnerability is established.
- Comparator releases explicitly qualify this as opt-in.

Sources cited by this proposal: [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>), [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>), [R03-S-T1](<https://blog.torproject.org/new-release-tor-browser-160>).

## Source ledger

Direct links and dates below are the saved evidence, not fresh retrievals. Publication dates remain unknown when the source record does not establish them. Other dates retain their original field labels.

### R01 — Chrome–Chromium source, reporting channels, release, and feature baseline

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

**R02-B2 — [Browser Privacy Policy](<https://brave.com/privacy/browser/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:33:38Z. Published: not established.

- **reported Publication Or Update Date:** 2026-09-23

Source limitations:

- Current policy text and extracted date metadata were read. Statements describe vendor commitments, not a traffic capture or compliance audit.
- Service-specific exceptions, feedback retention, caching, and experimental AI browsing must remain distinct from general privacy headlines.

**R02-B4 — [Brave Playlist](<https://brave.com/playlist/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:21:09Z. Published: not established.

- **reported Publication Or Update Date:** 2025-01-23

Source limitations:

- Date is extracted publication/update metadata. iPhone/iPad support is documented; desktop/Android are described as future availability.
- DRM-protected media is unsupported; saved media is not exportable and was not tested.

**R02-B6 — [New Brave Origin premium experience offers users a minimalist version of the Brave browser](<https://brave.com/blog/brave-origin>)**

Kind: release-note. Retrieved: 2026-11-21T14:16:10Z. Published: 2026-06-04.

Source limitations:

- Updated launch post distinguishes standalone compilation from in-place disabling and confirms later iOS and desktop-alias availability.
- US price and Linux-free status are vendor-listed terms, not a global checkout verification. Exact latest Brave build was not determined.

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

**R02-E7 — [Learn about performance features in Microsoft Edge](<https://support.microsoft.com/en-us/edge/learn-about-performance-features-in-microsoft-edge>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:01Z. Published: not established.

- **reported Publication Or Update Date:** 2026-11-09

Source limitations:

- Date is extracted publication/update metadata. Defaults and exemptions differ by platform and mode.
- The document still describes Performance detector; R02-E1 separately announces its future retirement. Savings and responsiveness were not benchmarked.

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

**R02-O5 — [Here&#39;s how Opera&#39;s Paste Protect brings you native ClickFix protection](<https://blogs.opera.com/security/2026/07/how-opera-paste-protect-guards-against-clipboard-attacks/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:40:22Z. Published: 2026-07-02.

Source limitations:

- Dated security-feature announcement documents defaults, platform-specific checks, and overrides.
- Detection efficacy, false-positive rates, comparative first/unique claims, and cited malware statistics were not measured or adopted.

**R02-V1 — [Download Vivaldi](<https://vivaldi.com/download>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:13Z. Published: not established.

Source limitations:

- Undated download-page text only; no installer was downloaded. User counts and comparative marketing claims were not validated.
- Does not establish feature parity or current minimum OS versions.

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

**R03-S-L2 — [LibreWolf features and default settings](<https://librewolf.net/docs/features/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:13:35Z. Published: not established.

Source limitations:

- A date associated with linked material was not accepted as this page&#39;s publication date.
- Settings were not verified in a binary or clean profile.
- Certificate-revocation bullets are insufficiently clear for a present-day TLS assessment.
- Claims such as best-in-class resistance and no data collection are not measured comparative findings.

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

**R03-S-M5 — [Mullvad Browser official latest-release API: 16.0.2](<https://api.github.com/repos/mullvad/mullvad-browser/releases/latest>)**

Kind: release-note. Retrieved: 2026-11-21T14:32:33Z. Published: 2026-11-17T13:03:22Z.

Source limitations:

- Latest-release endpoint is mutable; version and publication time describe the retrieved record.
- The record is not a verification of the binary engine patch level or all platform delivery channels.

**R03-S-T1 — [New Release: Tor Browser 16.0](<https://blog.torproject.org/new-release-tor-browser-160>)**

Kind: release-note. Retrieved: 2026-11-21T14:13:35Z. Published: not established.

Source limitations:

- The cleaned body did not establish an exact announcement day; extraction metadata was not accepted as a publication date.
- The long changelog was truncated, but the sections used here were present.
- Future circuit-display work is a roadmap statement, not a shipped capability.

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

**R03-S-U1 — [Official ungoogled-chromium repository README](<https://github.com/ungoogled-software/ungoogled-chromium>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:13:35Z. Published: not established.

Source limitations:

- README inspection is not a patch audit, build verification, or network measurement.
- The common repository is distinct from platform build repositories and contributor binaries.
- The README says almost all additional privacy/control tweaks need manual activation.

**R03-S-W1 — [Waterfox homepage and product FAQ](<https://www.waterfox.com/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:15:25Z. Published: not established.

Source limitations:

- The inspected page describes desktop workflows; Android parity is not established for them.
- No-telemetry, no-collection, privacy, and compatibility statements are first-party claims, not measurements.

### R04 — Productivity, workspaces, and AI-native browsers

**R04-A1 — [A farewell to Arc](<https://arc.net/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:13:58Z. Published: not established.

- **date Evidence:** Undated live notice; December 22, 2026 is the announced sunset, not the publication date.

Source limitations:

- Confirms the maker&#39;s sunset announcement, not an observed shutdown or account-deactivation test.

**R04-C10 — [Comet iOS Launch and Computer Updates](<https://www.perplexity.ai/changelog/what-we-shipped--march-27-2026>)**

Kind: release-note. Retrieved: 2026-11-21T14:34:59Z. Published: not established.

- **date Evidence:** Metadata reports 2026-03-26 while the URL labels March 27, 2026. Exact publication day is unresolved.

Source limitations:

- Explicitly confirms iOS, Android, Mac and Windows availability. Other sections concern Perplexity Computer and are not counted as Comet features.

**R04-C2 — [Comet Operating System Requirements](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:29:06Z. Published: not established.

- **date Evidence:** Undated manual.

Source limitations:

- Desktop requirements are retained with attribution. Its iOS/Android exclusions conflict with explicit later mobile launch documentation.
- No Linux or ChromeOS support was established.

**R04-C4 — [Control What Comet Assistant Can Use](<https://www.perplexity.ai/help-center/comet/en/articles/12658082-control-what-comet-assistant-can-use.md>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:29:12Z. Published: not established.

- **date Evidence:** Undated manual.

Source limitations:

- Access toggles and site blocks are documented, not tested enforcement.
- Local storage, minimal context transfer and password/payment exclusions are attributed privacy claims.

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

**R04-H8 — [Download Shift Browser for Free](<https://shift.com/download/?platform=mac>)**

Kind: vendor-documentation. Retrieved: 2026-11-21. Published: not established.

- **date Evidence:** Undated download page. Full HTML metadata, rather than a search snippet, explicitly names Mac and Windows.

Source limitations:

- Reader-mode body omitted platform details; page HTML supplied the evidence. No installer was downloaded or tested.

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

**R05-F01 — [Mozilla Firefox Focus product page](<https://www.firefox.com/en-US/mobile/focus/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:20:24Z. Published: not established.

Source limitations:

- Undated page; an inferred 1998 date was rejected. Erase, tracking-protection and shortcut claims were not runtime-tested.

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

**R05-Q06 — [Quetta video download guide](<https://www.quetta.net/features/video-downloader>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:52:14Z. Published: not established.

Source limitations:

- Site metadata date 2026-11-16 was not independently established as publication. Availability depends on media site, account, format and region; supported downloads were not tested.

**R05-Q07 — [Quetta playlists and qualified offline access](<https://www.quetta.net/features/playlist>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:52:14Z. Published: not established.

Source limitations:

- Site metadata date 2026-11-16 was not established as publication. Playlist membership is distinct from a compatible, permitted offline media file; per-build playback behavior was not tested.

**R05-S01 — [Samsung Browser Android publisher listing](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:22:46Z. Published: not established.

Source limitations:

- Listing revision date was not reliably extracted. Feature descriptions and tablet/watch restrictions are publisher documentation, not application tests.

**R05-S02 — [Samsung Browser Android release history](<https://developer.samsung.com/browser/release-note/android-release-note.html>)**

Kind: release-note. Retrieved: 2026-11-21T14:27:25Z. Published: not established.

Source limitations:

- Initial retrieval was at 14:26:25 UTC; the later direct HTML read recovered the relevant content. Latest visible entry was version 25.0.0.41 dated 2024-05-11, not a verified current Android release. Entry dates and historical Android 8+ wording do not establish the page revision or current minimum OS.

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

**R06-Y4 — [Lynx users guide v2.9.3](<https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:27:40Z. Published: not established.

Source limitations:

- Long guide was inspected through bounded topic excerpts.
- Historical 1996 metadata is not the guide&#39;s current publication date.
- Keyboard coverage does not establish screen-reader usability or WCAG conformance.

**R06-Y6 — [Lynx maintainer&#39;s Windows distribution notes](<https://invisible-island.net/lynx/>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:33:30Z. Published: not established.

Source limitations:

- Build and OS-support statements belong to the maintainer, not local testing.
- Different Windows variants have different HTTPS dependencies; installer availability alone does not establish HTTPS capability.

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
