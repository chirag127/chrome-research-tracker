# Browser features

[CATALOG](<CATALOG.md>) · [FEATURES](<FEATURES.md>) · [ISSUES](<ISSUES.md>) · [AGENTS-LEDGER](<AGENTS-LEDGER.md>) · [RECOMMENDATIONS](<RECOMMENDATIONS.md>)

Generated from the saved JSON research shards. Rendering performs no research, source refresh, browser tests, builds, or submissions.

**Recovery notice:** Loaded lanes labelled as non-byte-exact reconstructions: [R01](<data/lanes/R01.json>), [R03](<data/lanes/R03.json>), [R04](<data/lanes/R04.json>), [R07](<data/lanes/R07.json>), [R08](<data/lanes/R08.json>), [R09](<data/lanes/R09.json>). See the `recovery` metadata in each linked JSON shard for provenance and limitations. Reconstruction does not establish fresh research or testing; original source dates and saved lane status retain their meanings.

Loaded snapshot: **10 lane shards**, **47 browser records**, **286 feature records**, **38 issue records**, **403 source records**. Counts describe records, not unique products or independently verified claims.

Saved lane status: **10 complete**, **0 partial**, out of **10 loaded shards**. These are the shards’ own scope/status labels; “complete” does not mean a complete project, exhaustive catalog, finished validation, or completed publication. Missing shards are outside this snapshot.

Recorded source-retrieval days: **2026-11-21**. Exact retrieval and original publication dates appear with the cited sources; no generation timestamp is substituted.

Documentary descriptions and upstream observations do not establish local behavior or universal availability. A missing browser, feature, or issue is not evidence of absence. Chrome parity and new-defect claims require their own evidence.

Availability labels are saved documentary classifications. “Documented” is not a successful local test; “not-established” is not “unsupported”. Historical, staged, limited, and explicitly unsupported entries retain their qualifications.

## R01 — Chrome–Chromium source, reporting channels, release, and feature baseline

Saved scope: Primary-source research on Chrome versus Chromium source availability and licensing, the official source mirror, contribution and reporting routes, Stable release evidence, and Chrome features relevant to competitor-derived improvement requests.. Shard: [R01](<data/lanes/R01.json>). Status: complete.

<a id="R01-BROWSER-CHROME"></a>

### Google Chrome — R01-BROWSER-CHROME

Browser lifecycle: **active**. Browser platforms: Windows<br>macOS<br>Linux<br>Android<br>iOS<br>ChromeOS. [Catalog qualifications](<CATALOG.md#R01-BROWSER-CHROME>). Sources: [R01-S01](<https://developer.chrome.com/docs/web-platform/chrome-chromium>), [R01-S02](<https://www.google.com/chrome/terms/>), [R01-S03](<https://github.com/chromium/chromium>), [R01-S10](<https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html>), [R01-S12](<https://versionhistory.googleapis.com/v1/chrome/platforms/win64/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S13](<https://versionhistory.googleapis.com/v1/chrome/platforms/mac_arm64/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S14](<https://versionhistory.googleapis.com/v1/chrome/platforms/linux/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S15](<https://versionhistory.googleapis.com/v1/chrome/platforms/android/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S16](<https://versionhistory.googleapis.com/v1/chrome/platforms/ios/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S20](<https://support.google.com/chrome/answer/16971124?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>).

<a id="R01-FEATURE-ANDROID-TOOLBAR-SHORTCUT"></a>

#### Android toolbar shortcut selection — R01-FEATURE-ANDROID-TOOLBAR-SHORTCUT

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| customization | Android | documented | vendor-documented / high |

Android help documents enabling or disabling the toolbar shortcut and choosing an adaptive action or a preferred New tab, Share, Voice search, Bookmark, Translate, or Delete browsing data shortcut. A relevant contextual action can replace the selected shortcut on some pages.

Sources: [R01-S28](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DAndroid>).

Feature limitations:

- This is narrower than the documented desktop pin/reorder model.
- The attempted iOS variant of the page returned Android instructions and cannot establish iOS support.
- No actual device or contextual override was tested.

<a id="R01-FEATURE-CONSUMER-SCREENSHOT-WORKFLOW"></a>

#### Consumer screenshot, scrolling capture, and annotation workflow — R01-FEATURE-CONSUMER-SCREENSHOT-WORKFLOW

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| capture | Desktop<br>Android<br>iOS | not-established | hypothesis / low |

The established baseline is desktop DevTools capture plus Android OS screenshot and supported scrolling-capture workflows. A native Chrome consumer path combining discoverable capture, annotation, and redaction was not established, and neither was its absence.

- **platform Qualifications:** **description:** Android&#39;s OS documentation supports scrolling capture on Android 12 and later on most scrollable screens; it is not a Chrome-specific command or a guarantee for every page.<br>**sourceIds:** [R01-S30](<https://support.google.com/android/answer/9075928?hl=en>)

Sources: [R01-S29](<https://developer.chrome.com/blog/devtools-tips-33>), [R01-S30](<https://support.google.com/android/answer/9075928?hl=en>).

Feature limitations:

- No primary source in this snapshot settles consumer screenshot UI on iOS or all desktop/Android Chrome builds.
- Any proposal must identify a specific unmet workflow rather than claim Chrome cannot take screenshots.

<a id="R01-FEATURE-DESKTOP-TOOLBAR"></a>

#### Desktop toolbar customization — R01-FEATURE-DESKTOP-TOOLBAR

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| customization | Desktop | documented | vendor-documented / high |

The Customize Chrome toolbar panel lets users turn offered toolbar buttons on or off. Pinned buttons can be dragged to change order and unpinned through their context menu. Some buttons open a side panel, some a new tab, and some an address-bar bubble. This is an existing customization capability.

Sources: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>).

Feature limitations:

- The source says a disabled button cannot be reordered.
- This does not establish arbitrary relocation of every control or full menu/context-menu editing.
- No platform-specific toolbar operation was tested locally.

<a id="R01-FEATURE-DEVTOOLS-SCREENSHOTS"></a>

#### DevTools screenshot capture — R01-FEATURE-DEVTOOLS-SCREENSHOTS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| capture | Desktop DevTools | documented | vendor-documented / high |

Official DevTools guidance documents node screenshots, nodes larger than the screen, full-page capture, selected-area capture, and device-emulated screenshots. Chrome therefore has documented screenshot capabilities through its developer tools.

Sources: [R01-S29](<https://developer.chrome.com/blog/devtools-tips-33>).

Feature limitations:

- Developer-tool availability does not establish a discoverable consumer capture command, annotation editor, or redaction workflow.
- No screenshots were captured or quality-tested by this lane.

<a id="R01-FEATURE-DO-NOT-TRACK"></a>

#### Do Not Track request — R01-FEATURE-DO-NOT-TRACK

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy | Desktop<br>Android | documented | vendor-documented / high |

Chrome documents a Do Not Track request setting for computers and Android devices, turned off by default. The help page says many sites, including Google&#39;s services, do not change their behavior in response. The setting is distinct from Chrome&#39;s regional opt-out request.

Sources: [R01-S32](<https://support.google.com/chrome/answer/2790761?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S33](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>).

Feature limitations:

- DNT is a request, not enforced blocking or proof of website compliance.
- The exact request headers and site responses were not observed locally.

<a id="R01-FEATURE-GEMINI-CONTROLS"></a>

#### Gemini availability and granular controls — R01-FEATURE-GEMINI-CONTROLS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-controls | Windows<br>macOS<br>Chromebook Plus<br>iOS (administrator documentation)<br>Android (administrator documentation, U.S.) | staged | vendor-documented / high |

Consumer computer help says Gemini in Chrome is gradually released and requires first-use opt-in. It documents hiding or showing the browser icon and desktop integration, stopping or selecting tab sharing, changing Share current tab by default, and managing location, microphone, and auto-browse permissions. Current-tab content is shared by default when opening a chat unless that default is changed; up to ten open tabs can be shared. Enterprise settings can disallow Gemini integration, but hiding an icon, limiting permissions, and disabling integration have different effects.

- **eligibility:** **description:** Age 13 or the applicable local age, a supported region and language, a Windows or Mac computer or Chromebook Plus, current Chrome, and sign-in are required. Incognito and signed-out profiles are excluded. Work/school access and supervised-user controls have additional conditions; Live and auto browse have under-18 restrictions.<br>**scope:** Consumer computer help<br>**sourceIds:** [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>)<br>**description:** This page specifies age 18 or older, an Android device in the U.S. or a supported-region computer/iOS device, supported language, current Chrome, and sign-in. Both the Gemini app setting and GeminiSettings must allow access. The documented GeminiSettings value 1 disallows integrations; GenAiDefaultSettings value 2 defaults GeminiSettings to that disallowed state.<br>**scope:** Administrator help<br>**sourceIds:** [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>)

Sources: [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S40](<https://support.google.com/chrome/a/answer/16291696?hl=en>).

Feature limitations:

- Consumer and managed eligibility are separately scoped and must not be merged into a single age/platform rule.
- Supported-region and language tables were incompletely extracted; missing entries were not reconstructed.
- A universal consumer disable-all-AI switch was not established. These controls are distinct from on-device generative-model removal.
- No Gemini session, data sharing, policy application, or AI task was run by this lane.

<a id="R01-FEATURE-INCOGNITO"></a>

#### Incognito local-session privacy — R01-FEATURE-INCOGNITO

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy | Desktop | documented | vendor-documented / high |

Incognito starts a separate browsing session and removes the session&#39;s retained site data and browsing record when all Incognito windows close. Downloaded files, saved bookmarks, and reading-list items can remain. Third-party cookies are blocked by default. The documentation expressly says Incognito does not make activity invisible to sites or network operators.

Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>).

Feature limitations:

- The source establishes documented session behavior, not an anonymity guarantee or independent privacy measurement.
- No local data-retention or network tests were performed.

<a id="R01-FEATURE-MENU-CUSTOMIZATION"></a>

#### Comprehensive menu and context-menu customization — R01-FEATURE-MENU-CUSTOMIZATION

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| customization | Desktop<br>Android<br>iOS | not-established | hypothesis / low |

The captured primary documentation establishes desktop toolbar customization and an Android toolbar shortcut. It does not settle a comprehensive browser menu/context-menu editor or iOS menu customization. Secondary reports were not promoted to primary-source verification.

Sources: [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S28](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DAndroid>).

Feature limitations:

- This is not a claim that menu customization is absent.
- The iOS-targeted toolbar help URL returned Android content. A specific control and platform need direct verification before a proposal is framed as a gap.

<a id="R01-FEATURE-MOBILE-EXTENSIONS"></a>

#### Chrome Web Store extensions on mobile — R01-FEATURE-MOBILE-EXTENSIONS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| extensions | Android<br>iOS | explicitly-unsupported | vendor-documented / high |

Official Chrome Web Store help explicitly says extensions and themes can only be used on computers and cannot be installed from a mobile device, even in desktop mode. This is an evidence-backed unsupported capability, rather than a conclusion from missing documentation.

Sources: [R01-S36](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S41](<https://support.google.com/chrome_webstore/answer/1698338?hl=en>).

Feature limitations:

- The finding is scoped to the documented Chrome Web Store/mobile Chrome experience, not all Chromium-based mobile browsers.
- Syncing extension-related information does not imply mobile extension execution.
- No mobile installation or implementation feasibility test was performed.

<a id="R01-FEATURE-ON-DEVICE-AI-CONTROL"></a>

#### On-device generative-model removal and download control — R01-FEATURE-ON-DEVICE-AI-CONTROL

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-controls | Eligible computers | limited | vendor-documented / high |

Official help documents Settings → AI Innovations → On-device AI on eligible computers. Turning it off deletes on-device generative-model files, disables dependent features, and prevents those models from downloading again while the setting remains off. The setting is per user and per device. Eligible devices may receive background model downloads; the documented download conditions include an unmetered connection, approximately 20 GB of free disk space, and sufficient device performance.

Sources: [R01-S39](<https://support.google.com/chrome/answer/16961953?hl=en>).

Feature limitations:

- Eligibility requirements can change, and the setting/features are not available on every device.
- The free-disk requirement is not a model download-size claim.
- Some other AI features may still run after local generative models are removed or disabled. This is not an all-AI-off control.
- The documented setting&#39;s deletion and re-download prevention were not locally tested.

<a id="R01-FEATURE-PRIVACY-SANDBOX-TRANSITION"></a>

#### Privacy Sandbox retirement-plan qualification — R01-FEATURE-PRIVACY-SANDBOX-TRANSITION

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy | Chrome platforms covered by the announcement<br>Android technologies explicitly named by the announcement | historical | vendor-documented / high |

The official October 17, 2025 update announces retirement plans for technologies including Topics, Protected Audience, Attribution Reporting, IP Protection, and Related Website Sets, with Chrome/Android phase-out processes to follow. It says CHIPS and FedCM continue to be supported. Older cookie-help cross-links and historical launch material must not be used as a current feature inventory.

Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S42](<https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies>).

Feature limitations:

- Historical marks the sourced transition announcement, not a finding that every listed capability is currently absent.
- Exact removal milestones, the Chrome 158 enabled state, and post-retirement private-relay behavior were not independently established.
- Two ad-privacy help URLs returned generic getting-started content; those retrievals cannot establish current controls.
- Android system technologies and Chrome browser functionality must remain separately scoped.

<a id="R01-FEATURE-PROJECT-WORKSPACES"></a>

#### Persistent project workspaces and collaborative contexts — R01-FEATURE-PROJECT-WORKSPACES

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| workspaces | Desktop<br>Android<br>iOS | not-established | hypothesis / low |

Documented building blocks include saved/synced groups, named windows, and separate profiles for bookmarks, history, passwords, and settings. This research did not establish a distinct persistent multiwindow project model, layout-preserving workspace restore, or universal cross-account live collaborative groups beyond those building blocks.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>), [R01-S26](<https://support.google.com/chrome/answer/2364824?hl=en&co=GENIE.Platform%3DDesktop>).

Feature limitations:

- This is an unresolved comparison dimension, not a confirmed Chrome omission.
- The tab-group-sharing policy page returned only a promotional banner; its title and snippet were not treated as proof of rollout or supported collaboration behavior.
- Profile separation does not imply a security boundary against someone with access to the same device.

<a id="R01-FEATURE-READING-MODE"></a>

#### Reading mode, including immersive full-page reading — R01-FEATURE-READING-MODE

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| reading | Desktop<br>Android<br>iOS | documented | vendor-documented / high |

Desktop help documents an immersive full-page reading view and an optional side-panel view, adjustable fonts/themes/spacing, read aloud, voice and speed selection, and line focus. Android and iOS help document their own reading-mode commands and typography/background controls. Chrome should not be described as having only a side-panel reader.

- **platform Qualifications:** **description:** The computer body explicitly says reading mode is not yet available on Googlebook. It also describes Windows/Linux/ChromeOS and macOS shortcuts; the Googlebook exclusion must not be generalized to all ChromeOS.<br>**sourceIds:** [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>)<br>**description:** Mobile pages have distinct commands and controls. Computer-specific read-aloud and spacing features are not automatically established on mobile.<br>**sourceIds:** [R01-S22](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S23](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DiOS>)

Sources: [R01-S17](<https://blog.google/products-and-platforms/products/chrome/new-chrome-productivity-features>), [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R01-S22](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S23](<https://support.google.com/chrome/answer/14218344?hl=en&co=GENIE.Platform%3DiOS>).

Feature limitations:

- Reading mode is site/content dependent; some pages produce unavailable or failure messages.
- The original immersive-reader announcement described rollout beginning. Current help is not a per-user enablement test.
- No readability, accessibility, voice quality, or extraction accuracy was measured.

<a id="R01-FEATURE-REGIONAL-OPT-OUT"></a>

#### Regional opt-out request / GPC-style privacy signal — R01-FEATURE-REGIONAL-OPT-OUT

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy | Desktop | staged | vendor-documented / high |

Official computer help documents a separate opt-out setting, describing this type of request as global privacy control or an opt-out preference signal. At retrieval, California is the listed eligible region, residency is assessed per Chrome profile, and the feature is explicitly still rolling out. Sites decide how to respond subject to regional law.

- **eligibility:** **assessment:** Per-profile residency; location masking, use in another region, or a recently changed account region can affect eligibility.<br>**regions:** California<br>**sourceIds:** [R01-S33](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>)

Sources: [R01-S32](<https://support.google.com/chrome/answer/2790761?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S33](<https://support.google.com/chrome/answer/18797212?hl=en&co=GENIE.Platform%3DDesktop>).

Feature limitations:

- This is neither a documented global rollout nor a confirmed absence of opt-out signaling.
- Mobile availability, actual wire behavior, and website/legal compliance were not established.
- Availability was read from the source, not from a user&#39;s profile or account.

<a id="R01-FEATURE-SAFE-BROWSING"></a>

#### Safe Browsing protection levels — R01-FEATURE-SAFE-BROWSING

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| security | Desktop | documented | vendor-documented / high |

Chrome documents Standard protection as the default, Enhanced protection as an option, and a no-protection setting. Enhanced protection sends URLs and samples of page content, extension activity, and system information for security checks. Standard protection uses obfuscated URL portions through privacy servers and can send additional information for suspicious behavior.

Sources: [R01-S35](<https://support.google.com/chrome/answer/9890866?hl=en&co=GENIE.Platform%3DDesktop>).

Feature limitations:

- Security effectiveness, data-use assurances, and performance claims are vendor statements, not measurements from this lane.
- Safe Browsing is not evidence of comprehensive anti-tracking, ad blocking, or a general browsing VPN/relay.

<a id="R01-FEATURE-SIDE-PANELS"></a>

#### Built-in and extension side panels — R01-FEATURE-SIDE-PANELS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| sidebar | Desktop | documented | vendor-documented / high |

Chrome documents built-in side panels for content such as bookmarks, history, reading list, and reading mode. The Side Panel API lets extensions host their own UI alongside webpage content, keep it open across tabs when configured, scope it to sites, and respect left/right placement settings.

Sources: [R01-S20](<https://support.google.com/chrome/answer/16971124?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S21](<https://support.google.com/chrome/answer/14218344?hl=en>), [R01-S27](<https://support.google.com/chrome/answer/14835450?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S37](<https://developer.chrome.com/docs/extensions/reference/api/sidePanel>).

Feature limitations:

- Arbitrary-website pinning and multiple simultaneous independent sidebars were not established.
- Extension-hosted panel content and a built-in website sidebar are distinct capabilities.
- API and user-interface behavior were not locally exercised.

<a id="R01-FEATURE-SPLIT-VIEW"></a>

#### Two-page split view — R01-FEATURE-SPLIT-VIEW

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| multitasking | Windows<br>macOS<br>Linux<br>ChromeOS | documented | vendor-documented / high |

Computer help documents two websites within one Chrome window, in side-by-side or stacked orientation. Users can switch the active view, swap positions, separate or close views, pin the split-view control, and disable edge drag-to-split. Toolbar and tab-specific commands apply to the active view; general side panels can remain open, while tab-specific reading panels collapse on a view switch.

- **platform Qualifications:** **description:** Computer help provides shortcuts for Windows/Linux, Mac, and Chromebook.<br>**sourceIds:** [R01-S20](<https://support.google.com/chrome/answer/16971124?hl=en&co=GENIE.Platform%3DDesktop>)<br>**description:** Android tablet split-screen and iPad multiwindow are separately documented window/OS workflows. They are not proof of identical in-window split view on phones.<br>**sourceIds:** [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>)

Sources: [R01-S19](<https://blog.google/products-and-platforms/products/chrome/chrome-productivity-improvements>), [R01-S20](<https://support.google.com/chrome/answer/16971124?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>).

Feature limitations:

- No runtime validation or rollout-cohort check was performed.
- The documented two-view design is not evidence that every richer multi-pane configuration is absent.

<a id="R01-FEATURE-SYNC"></a>

#### Google Account sync and optional passphrase — R01-FEATURE-SYNC

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| sync | Desktop<br>Android<br>iOS | documented | vendor-documented / high |

Chrome documents saving bookmarks, reading list, passwords, settings, and other information in a Google Account, with data-type controls and a separately controllable History and tabs option. Tab-group changes can sync between signed-in desktop, Android, and iOS devices. An optional passphrase has documented exclusions and trade-offs: Google Wallet payment methods and addresses are not covered, full history is not synced, and only web addresses entered in the address bar are synced under that history limitation.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>), [R01-S36](<https://support.google.com/chrome/answer/165139?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S41](<https://support.google.com/chrome_webstore/answer/1698338?hl=en>).

Feature limitations:

- Extension-related information in sync is not evidence that mobile Chrome can execute those extensions.
- With a passphrase, the documentation also limits password access through passwords.google.com; this is not an all-data, all-service equivalence claim.
- Self-hosted or account-free browser sync was not established. No account data, encryption, or cross-device synchronization was tested.

<a id="R01-FEATURE-TAB-GROUPS"></a>

#### Saved and synced tab groups — R01-FEATURE-TAB-GROUPS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-management | Desktop<br>Android<br>iOS | documented | vendor-documented / high |

Desktop, Android, and iOS help describe named/color tab groups, saving, closing, and reopening groups, and syncing changes across devices using the same Google Account. Desktop supports collapse/expand. Deleting or ungrouping a synced group can remove the group on other devices; closing a saved group is a different operation. Mobile interfaces have their own commands and settings.

Sources: [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S24](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DAndroid>), [R01-S25](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DiOS>).

Feature limitations:

- Same-account sync is not the same capability as cross-account live collaboration.
- iOS action-table extraction was partial, although the surrounding body explicitly documents group creation and syncing.
- Delete propagation, save/reopen behavior, and cross-device consistency were not locally tested.

<a id="R01-FEATURE-THIRD-PARTY-COOKIES"></a>

#### Third-party-cookie controls — R01-FEATURE-THIRD-PARTY-COOKIES

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy | Desktop | documented | vendor-documented / high |

Computer help documents allowing or blocking third-party cookies, website exceptions, and temporary site overrides. Third-party cookies are blocked by default in Incognito. These controls are an existing baseline for privacy comparisons.

Sources: [R01-S31](<https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S34](<https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop>).

Feature limitations:

- Incognito&#39;s documented default is not proof of universal default blocking in ordinary browsing.
- Cookie settings are not equivalent to comprehensive tracker blocking, ad blocking, or anti-fingerprinting.
- Older ad-privacy/related-site cross-links do not establish current shipped Privacy Sandbox controls. No network behavior was tested.

<a id="R01-FEATURE-VERTICAL-TABS"></a>

#### Vertical tabs — R01-FEATURE-VERTICAL-TABS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-management | Desktop | documented | vendor-documented / high |

Current computer help documents Show Tabs Vertically and Settings → Appearance → Tab position → Vertical or Horizontal. It also describes resizing the tab strip, viewing full titles, collapsed hover expansion, and tab-group controls. The launch announcement described a staged rollout; its captured metadata date is 2026-04-07, with publication not independently established.

Sources: [R01-S17](<https://blog.google/products-and-platforms/products/chrome/new-chrome-productivity-features>), [R01-S18](<https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop>).

Feature limitations:

- Ordinary usage documentation is not proof of enablement on every desktop build or cohort.
- Mobile vertical-tab-strip equivalence was not established.
- This was not tested locally; a request simply to add vertical tabs would fail to credit the documented baseline.

Browser limitations:

- The listed platforms describe the browser family, not availability of every feature on each platform or edition.
- No browser installation, local source build, profile, or runtime feature was inspected by this lane.
- Version rollout and feature enablement are separate. Account, region, language, hardware, policy, and website conditions can affect functionality.
- The rendering-engine field deliberately avoids an uncited blanket Blink or iOS-engine claim.

Lane limitations:

- All feature claims are documentary. No feature, defect, browser installation, local build, account, policy, or website behavior was hands-on validated by this lane.
- Vendor documentation may describe staged features without pinning every instruction to a version. Documented availability is not universal enablement and must not be relabeled locally tested.
- Main/HEAD source documents were read at moving references without commit hashes. Later source implementation work should establish its own revision.
- Publication and update dates were not recoverable for many Help pages. Generic extractor dates, repository creation dates, and search snippets were not used as publication evidence.
- Several free-search engines timed out, were rate-limited, or were benched. Working results led to the official bodies cited here, but exhaustive discovery is not claimed.
- Reader extraction omitted content on release and policy sites and stripped parts of some region/language/action tables. Successful alternatives and unresolved gaps are recorded explicitly.
- Comprehensive anti-fingerprinting or ad blocking, post-retirement private-relay behavior, consumer screenshot/editor UI, advanced workspaces, universal collaborative groups, arbitrary-site sidebars, comprehensive menu editing, universal consumer all-AI-off, and self-hosted/account-free sync remain not established.
- No actual upstream issue was established or submitted. Recommendation candidates are conditional proposals, not accepted reports, reproduced defects, implementation commitments, or predictions of upstream acceptance.
- This baseline contains no competitor ranking or benchmark. It supplies source-qualified Chrome findings for later comparison and report preparation.

## R02 — Mainstream browser features and lessons for Chrome

Saved scope: Firefox, Microsoft Edge, Apple Safari, Brave, Vivaldi, Opera One, and Opera GX: documented features, engine and platform differences, lifecycle qualifications, and candidate lessons for Chrome.. Shard: [R02](<data/lanes/R02.json>). Status: complete.

<a id="R02-browser-brave"></a>

### Brave — R02-browser-brave

Browser lifecycle: **active**. Browser platforms: Windows<br>macOS<br>Linux<br>Android<br>iOS/iPadOS. [Catalog qualifications](<CATALOG.md#R02-browser-brave>). Sources: [R02-A1](<https://developer.chrome.com/docs/web-platform/blink>), [R02-A2](<https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/>), [R02-B1](<https://brave.com/features/>), [R02-B2](<https://brave.com/privacy/browser/>), [R02-B3](<https://brave.com/leo/>), [R02-B4](<https://brave.com/playlist/>), [R02-B5](<https://brave.com/privacy-updates/39-email-aliases/>), [R02-B6](<https://brave.com/blog/brave-origin>), [R02-B7](<https://brave.com/firewall-vpn/>).

<a id="R02-BR-01"></a>

#### Built-in Shields — R02-BR-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy | Per-platform scope not established by the cited Shields page | documented | vendor-documented / high |

Brave documents built-in default Shields protection with ad/tracker blocking, fingerprinting defenses, cookie controls and customization.

- **chrome Parity:** unassessed

Sources: [R02-B1](<https://brave.com/features/>).

Feature limitations:

- No blocking-efficacy, site-compatibility or privacy audit was performed.
- Vendor superiority language is not adopted. Exact per-platform settings, coverage and minimum versions remain unverified.

<a id="R02-BR-02"></a>

#### User-held-key encrypted Sync — R02-BR-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| synchronization | Per-platform Sync support not established by the cited policy | documented | vendor-documented / high |

Brave&#39;s privacy policy describes opt-in Sync that keeps browser data encrypted on the hosting provider, with the decryption key held by the user.

- **chrome Parity:** unassessed

Sources: [R02-B2](<https://brave.com/privacy/browser/>).

Feature limitations:

- Policy commitments, not a cryptographic audit, recovery test or traffic capture.
- Onboarding, current platform matrix, version requirements and inactive-chain handling were not exercised; inaccessible support-page snippets are not treated as evidence.

<a id="R02-BR-03"></a>

#### Leo with local or remote model choice — R02-BR-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-assistance | Desktop<br>Android<br>iOS | limited | vendor-documented / high |

Brave documents Leo page/PDF questions, locally retained chat history and Bring Your Own Model options for local or remote models. Standard hosted use sends prompts/context and sometimes page or tab text to a backend.

- **chrome Parity:** unassessed

Sources: [R02-B2](<https://brave.com/privacy/browser/>), [R02-B3](<https://brave.com/leo/>).

Feature limitations:

- No model, PDF, network or local-only processing test was performed.
- The privacy policy permits large-prompt caching for minutes and retains submitted feedback, including conversation text, for one year; marketing retention headlines are not an unconditional no-retention guarantee.
- Platform/region eligibility, actual model quality and current quotas were not fully established.

<a id="R02-BR-04"></a>

#### Playlist offline and background playback — R02-BR-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| media | iOS/iPadOS | limited | vendor-documented / high |

Brave Playlist documentation describes saving supported audio/video for offline and background playback with lock-screen controls.

- **chrome Parity:** unassessed

Sources: [R02-B4](<https://brave.com/playlist/>).

Feature limitations:

- No media was saved or played; actual player compatibility and offline behavior were not tested.
- No shipped desktop/Android support or future delivery date is established. The workflow is not a portable media export format.

<a id="R02-BR-05"></a>

#### Email Aliases from email fields — R02-BR-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| identity | Desktop | limited | vendor-documented / high |

Brave&#39;s desktop Email Aliases launch describes creating per-service forwarding addresses from email fields, deactivating them and keeping local notes.

- **chrome Parity:** unassessed

Sources: [R02-B2](<https://brave.com/privacy/browser/>), [R02-B5](<https://brave.com/privacy-updates/39-email-aliases/>), [R02-B6](<https://brave.com/blog/brave-origin>).

Feature limitations:

- No account creation, forwarding, deactivation or delivery test was performed; the launch acknowledges that mail may initially reach spam folders.
- The policy retains real-address/alias mappings, permits failed-delivery retries for up to 24 hours and limited debugging events for 14 days. These are documented service boundaries, not a finding of improper collection.
- Exact regional availability and future mobile/Premium dates remain unknown.

<a id="R02-BR-06"></a>

#### Origin minimalist edition and feature-control upgrade — R02-BR-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| product-optionality | Windows<br>macOS<br>Linux<br>Android<br>iOS/iPadOS | limited | vendor-documented / high |

Brave Origin offers a standalone desktop edition that compiles listed extras out, and an in-place desktop/mobile upgrade that disables listed extras by default while permitting toggling.

- **chrome Parity:** unassessed

Sources: [R02-B6](<https://brave.com/blog/brave-origin>).

Feature limitations:

- No purchase, installation, upgrade or code-removal verification was performed.
- A standalone compilation differs from toggling features in an existing installation; features described for standard Brave cannot all be assigned to Origin standalone.
- US terms are not a global checkout guarantee; exact latest build, regional pricing and per-platform upgrade behavior were not established.

<a id="R02-BR-07"></a>

#### Subscription Firewall + VPN — R02-BR-07

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| network-privacy | Windows<br>macOS<br>Android<br>iOS | limited | vendor-documented / high |

Brave documents Firewall + VPN as protecting traffic from apps beyond the browser.

- **chrome Parity:** unassessed

Sources: [R02-B7](<https://brave.com/firewall-vpn/>).

Feature limitations:

- No VPN installation, traffic-scope, throughput or no-log audit was performed.
- Prices, device limits and supported platforms are vendor-listed terms rather than a global checkout test. Linux delivery date and exact regional restrictions remain unknown.

Browser limitations:

- No runtime checks, blocking benchmarks, or independent privacy audit.
- Latest stable build, exact region/pricing restrictions, Sync onboarding, BYOM platform matrix, and future mobile-alias/desktop-Playlist/Linux-VPN dates remain unknown.
- Chrome parity is unassessed.

<a id="R02-browser-edge"></a>

### Microsoft Edge — R02-browser-edge

Browser lifecycle: **active**. Browser platforms: Windows<br>macOS<br>Linux<br>Android<br>iOS/iPadOS. [Catalog qualifications](<CATALOG.md#R02-browser-edge>). Sources: [R02-A1](<https://developer.chrome.com/docs/web-platform/blink>), [R02-A2](<https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/>), [R02-E1](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel>), [R02-E2](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-supported-operating-systems>), [R02-E3](<https://support.microsoft.com/en-us/edge/getting-started-with-microsoft-edge-workspaces>), [R02-E4](<https://support.microsoft.com/en-us/edge/organize-your-ideas-with-collections-in-microsoft-edge>), [R02-E5](<https://explore.microsoft.com/en-us/edge/features/split-screen>), [R02-E6](<https://explore.microsoft.com/en-us/edge/features/vertical-tabs>), [R02-E7](<https://support.microsoft.com/en-us/edge/learn-about-performance-features-in-microsoft-edge>), [R02-E8](<https://support.microsoft.com/en-us/accessibility/edge/accessibility-features-in-microsoft-edge>).

- **platform Qualifications:** **description:** Edge 151+ requires macOS 13+. Android support requires Android 10+ on ARM. iOS support covers the two latest major releases. Supported Linux distributions are enumerated; Chromebooks are explicitly unsupported.<br>**sourceIds:** [R02-E2](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-supported-operating-systems>)<br>**description:** Microsoft promises Edge/WebView2 updates on Windows 10 22H2 through at least October 2028 without Windows ESU enrollment; this is not Windows OS support.<br>**sourceIds:** [R02-E2](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-supported-operating-systems>)<br>**description:** Workspaces V2 requires a signed-in Microsoft/AAD account and is documented for Windows/macOS desktop, despite the browser&#39;s broader platform support.<br>**sourceIds:** [R02-E3](<https://support.microsoft.com/en-us/edge/getting-started-with-microsoft-edge-workspaces>)

<a id="R02-ED-01"></a>

#### Individual-use Workspaces V2 — R02-ED-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-management | Windows<br>macOS | limited | vendor-documented / high |

Edge Workspaces V2 organizes and restores project tabs. Edge 158 notes add same-window workspace switching, workspace pins and emoji labels.

- **chrome Parity:** unassessed

Sources: [R02-E1](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel>), [R02-E2](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-supported-operating-systems>), [R02-E3](<https://support.microsoft.com/en-us/edge/getting-started-with-microsoft-edge-workspaces>).

Feature limitations:

- No account, restore or switching workflow was exercised.
- Edge&#39;s broader Linux/mobile availability does not establish Workspaces support there; Edge 151+ also requires macOS 13+.
- V1 was disabled by default in 158; planned 159 removal is distinct from the documented V2 feature and was still future at the cutoff.

<a id="R02-ED-02"></a>

#### Split screen within one tab — R02-ED-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| window-management | Device-dependent; complete platform matrix not established | limited | vendor-documented / high |

Edge&#39;s product documentation describes two interactive pages displayed side by side in a single browser tab.

- **chrome Parity:** unassessed

Sources: [R02-E5](<https://explore.microsoft.com/en-us/edge/features/split-screen>).

Feature limitations:

- Product documentation only; no split-screen interaction or accessibility test.
- Precise platform/version eligibility, rollout and small-screen behavior were not verified.

<a id="R02-ED-03"></a>

#### Reversible vertical-tab layout — R02-ED-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-management | Device-dependent; complete platform matrix not established | limited | vendor-documented / high |

Edge documents moving tabs to a side pane and switching between vertical and horizontal layouts.

- **chrome Parity:** unassessed

Sources: [R02-E6](<https://explore.microsoft.com/en-us/edge/features/vertical-tabs>).

Feature limitations:

- Documented controls were not exercised.
- No universal desktop/mobile parity, minimum version or comparative navigation benefit is established.

<a id="R02-ED-04"></a>

#### Sleeping tabs and Energy saver — R02-ED-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| resource-management | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

Edge documents inactivity timing, sleep exclusions, policy controls, and balanced or maximum Energy saver modes. Sleeping freezes script timers; discarding requires a full reload.

- **chrome Parity:** unassessed

Sources: [R02-E7](<https://support.microsoft.com/en-us/edge/learn-about-performance-features-in-microsoft-edge>).

Feature limitations:

- No battery, CPU, reload, call-preservation or responsiveness benchmark was run.
- The source warns of visible slowdowns or less-smooth video. Defaults are not identical across platforms and modes.
- Sleeping tabs and Energy saver must not be conflated with the separate Performance detector&#39;s planned retirement.

<a id="R02-ED-05"></a>

#### Immersive Reader and Read aloud — R02-ED-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| reading-accessibility | Per-platform equivalence not established by the accessibility page | limited | vendor-documented / high |

Microsoft documents simplified article layout, theme and text controls, and spoken reading through Immersive Reader and Read aloud.

- **chrome Parity:** unassessed

Sources: [R02-E8](<https://support.microsoft.com/en-us/accessibility/edge/accessibility-features-in-microsoft-edge>).

Feature limitations:

- No reading, speech, screen-reader or page-eligibility tests were performed.
- Processing location, voice availability, offline operation and assistive-technology quality remain unverified.

<a id="R02-ED-06"></a>

#### Opt-in generated image descriptions — R02-ED-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| accessibility | Per-platform availability not established by the accessibility page | limited | vendor-documented / high |

Edge&#39;s accessibility documentation describes generating text for unlabeled images for use by screen readers.

- **chrome Parity:** unassessed

Sources: [R02-E8](<https://support.microsoft.com/en-us/accessibility/edge/accessibility-features-in-microsoft-edge>).

Feature limitations:

- No generated-description correctness or screen-reader evaluation was performed.
- Processing/retention, region and exact platform coverage remain unknown; a documented assistance feature is not comprehensive accessibility conformance.

<a id="R02-ED-07"></a>

#### Reversible automatic notification revocation — R02-ED-07

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| security-controls | Edge 158; per-platform rollout not established | limited | vendor-documented / high |

Edge 158 notes describe automatically stopping notifications from a source whose notifications lead to SmartScreen-blocked scam, phishing or malware pages, with review and restoration controls.

- **chrome Parity:** unassessed

Sources: [R02-E1](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel>).

Feature limitations:

- Release-note observation, not a locally reproduced security behavior.
- Detection efficacy, false positives, platform equivalence and restoration accessibility were not measured.

<a id="R02-ED-08"></a>

#### Remix personal webpage changes — R02-ED-08

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| page-customization | Edge 158; per-platform rollout not established | limited | vendor-documented / high |

Edge 158 notes describe personalizing supported webpages with appearance controls or natural-language requests and pausing or removing those changes within the user&#39;s browser profile.

- **chrome Parity:** unassessed

Sources: [R02-E1](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel>).

Feature limitations:

- No customization, pause, removal or policy-control test was performed.
- All-site support, fully local execution, backend processing, regional eligibility and account requirements were not established.

Browser limitations:

- No browser runtime or accessibility tests.
- Consumer/enterprise rollout, detailed Linux feature parity, image-description processing/retention, and Remix backend/region limits were not established.
- Chrome parity is unassessed.

<a id="R02-browser-firefox"></a>

### Firefox — R02-browser-firefox

Browser lifecycle: **active**. Browser platforms: Windows<br>macOS<br>GNU/Linux<br>Android<br>iOS/iPadOS. [Catalog qualifications](<CATALOG.md#R02-browser-firefox>). Sources: [R02-F1](<https://www.firefox.com/en-US/firefox/160.0/releasenotes/>), [R02-F10](<https://www.firefox.com/en-US/features/picture-in-picture/>), [R02-F11](<https://www.firefox.com/en-US/features/pdf-editor/>), [R02-F2](<https://www.firefox.com/en-US/firefox/160.0/system-requirements/>), [R02-F3](<https://firefox-source-docs.mozilla.org/overview/gecko.html>), [R02-F4](<https://firefox-source-docs.mozilla.org/overview/ios.html>), [R02-F5](<https://www.firefox.com/en-US/features/total-cookie-protection/>), [R02-F6](<https://blog.mozilla.org/security/2020/02/06/multi-account-containers-sync/>), [R02-F7](<https://www.firefox.com/en-US/features/translate/>), [R02-F8](<https://blog.mozilla.org/en/firefox/cjk-translation-on-android/>), [R02-F9](<https://www.firefox.com/en-US/features/vertical-tabs/>).

- **platform Qualifications:** **description:** Firefox 160 desktop requires Windows 10+, macOS 10.15+, or the listed GNU/Linux libraries.<br>**sourceIds:** [R02-F2](<https://www.firefox.com/en-US/firefox/160.0/system-requirements/>)<br>**description:** The iOS implementation does not use Gecko; desktop/Android engine-dependent features cannot be assumed on iOS.<br>**sourceIds:** [R02-F3](<https://firefox-source-docs.mozilla.org/overview/gecko.html>), [R02-F4](<https://firefox-source-docs.mozilla.org/overview/ios.html>)

<a id="R02-FF-01"></a>

#### Total Cookie Protection — R02-FF-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy | Per-platform scope not established by the cited feature page | documented | vendor-documented / high |

Mozilla documents site-partitioned cookie jars alongside tracker blocking, built in and enabled by default in Standard Enhanced Tracking Protection.

- **chrome Parity:** unassessed

Sources: [R02-F5](<https://www.firefox.com/en-US/features/total-cookie-protection/>).

Feature limitations:

- Documentation only; partitioning, compatibility exceptions and tracking resistance were not tested.
- No comparative privacy score, anonymity guarantee or mobile feature parity is established.

<a id="R02-FF-02"></a>

#### Multi-Account Containers — R02-FF-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| identity | Desktop | historical | vendor-documented / medium |

Mozilla&#39;s official add-on documentation describes separate cookie and storage identities in tabs, with sites assignable to a container.

- **chrome Parity:** unassessed

Sources: [R02-F6](<https://blog.mozilla.org/security/2020/02/06/multi-account-containers-sync/>).

Feature limitations:

- Historical documentary design evidence, not a current add-on-version or runtime check.
- Current extension availability, individual desktop OS behavior, mobile parity and cross-container isolation were not tested.

<a id="R02-FF-03"></a>

#### On-device webpage translation — R02-FF-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| translation | Desktop<br>Android | documented | vendor-documented / high |

Mozilla documents locally processed webpage translation, including Chinese, Japanese and Korean on desktop and Android, with offline operation after the needed language model is downloaded.

- **chrome Parity:** unassessed

Sources: [R02-F7](<https://www.firefox.com/en-US/features/translate/>), [R02-F8](<https://blog.mozilla.org/en/firefox/cjk-translation-on-android/>).

Feature limitations:

- No network-disabled translation or traffic-capture test was performed.
- Translation quality, model storage, local compute cost, exact language coverage by version and per-OS equivalence were not measured.
- The article&#39;s conflicting publication metadata is not used as a shipping date.

<a id="R02-FF-04"></a>

#### Native vertical tabs — R02-FF-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-management | Desktop | documented | vendor-documented / high |

Firefox documentation describes a resizable, collapsible vertical-tab sidebar and ordinary collapsible tab groups alongside it.

- **chrome Parity:** unassessed

Sources: [R02-F9](<https://www.firefox.com/en-US/features/vertical-tabs/>).

Feature limitations:

- Documentation only; no layout, keyboard or large-session usability test.
- Exact minimum version, individual desktop OS behavior and mobile equivalents were not established.

<a id="R02-FF-05"></a>

#### Multiple Picture-in-Picture video windows — R02-FF-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| media | Desktop-style workflow; individual OS coverage unverified | documented | vendor-documented / high |

Mozilla documents multiple simultaneous always-on-top Picture-in-Picture video windows.

- **chrome Parity:** unassessed

Sources: [R02-F10](<https://www.firefox.com/en-US/features/picture-in-picture/>).

Feature limitations:

- No runtime media test was performed.
- Player and DRM compatibility, practical resource limits, accessibility and mobile equivalence were not established.

<a id="R02-FF-06"></a>

#### Built-in PDF forms and annotations — R02-FF-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| documents | Per-platform scope not established by the cited PDF page | documented | vendor-documented / high |

Firefox&#39;s PDF editor page documents forms, text and drawing annotations, images with alt text, highlights and comments, and stored reusable signatures.

- **chrome Parity:** unassessed

Sources: [R02-F11](<https://www.firefox.com/en-US/features/pdf-editor/>).

Feature limitations:

- Documentary feature inventory only; no PDF was edited, signed or accessibility-tested.
- All-form compatibility, signature security properties, platform parity and exact minimum versions remain unverified.

<a id="R02-FF-07"></a>

#### Early Mini Window for a tab or page region — R02-FF-07

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| window-management | Desktop release; per-OS rollout unquantified | limited | vendor-documented / high |

Firefox 160 release notes describe an early Mini Window that floats a whole tab or a selected page region above other windows.

- **chrome Parity:** unassessed

Sources: [R02-F1](<https://www.firefox.com/en-US/firefox/160.0/releasenotes/>).

Feature limitations:

- Release-note observation only; no page-region capture or floating-window behavior was tested.
- Rollout fraction, platform equivalence, compatibility and maturity are not established.

Browser limitations:

- No browser runtime checks or comparative measurements.
- Current add-on version, latest patch, mobile minimum OS versions, ESR support horizon, and Mini Window rollout fraction are unknown.
- Chrome parity is unassessed.

<a id="R02-browser-opera"></a>

### Opera / Opera One — R02-browser-opera

Browser lifecycle: **active**. Browser platforms: Windows<br>macOS<br>Linux<br>Android<br>iOS/iPadOS. [Catalog qualifications](<CATALOG.md#R02-browser-opera>). Sources: [R02-A1](<https://developer.chrome.com/docs/web-platform/blink>), [R02-A2](<https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/>), [R02-O1](<https://www.opera.com/download>), [R02-O2](<https://blogs.opera.com/desktop/2026/11/opera-140-0-6074-36-stable-update/>), [R02-O3](<https://help.opera.com/en/latest/features/>), [R02-O4](<https://www.opera.com/features/tab-islands>), [R02-O5](<https://blogs.opera.com/security/2026/07/how-opera-paste-protect-guards-against-clipboard-attacks/>), [R02-O6](<https://www.opera.com/features/free-vpn>), [R02-O7](<https://help.opera.com/latest/security-and-privacy/#VPN>), [R02-O8](<https://www.opera.com/download/requirements>).

- **platform Qualifications:** **description:** Mobile catalogue explicitly lists Android/iOS. Desktop families appear in the official requirements-page title, but minimum-version extraction was insufficient.<br>**sourceIds:** [R02-O1](<https://www.opera.com/download>), [R02-O8](<https://www.opera.com/download/requirements>)

<a id="R02-OP-01"></a>

#### Automatic Tab Islands — R02-OP-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-management | Desktop-oriented documentation; exact platform rollout unknown | documented | vendor-documented / high |

Opera documents automatically grouping related browsing into Tab Islands, with names, colors, collapse/expand controls and drag movement. Following links opens tabs in the same island.

- **chrome Parity:** unassessed

Sources: [R02-O4](<https://www.opera.com/features/tab-islands>).

Feature limitations:

- Product documentation only; grouping, movement, restoration and keyboard behavior were not tested.
- Exact platform rollout, mobile equivalents and minimum versions are unknown; optional AI analysis must not be assigned to basic grouping.

<a id="R02-OP-02"></a>

#### Split Screen with Tab Islands — R02-OP-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| window-management | Desktop | documented | vendor-documented / high |

Opera&#39;s desktop help documents joining two tabs side by side, switching horizontal or vertical layouts and composing split views with Tab Islands.

- **chrome Parity:** unassessed

Sources: [R02-O3](<https://help.opera.com/en/latest/features/>).

Feature limitations:

- No split, layout, focus or island-movement workflow was exercised.
- Per-OS differences, minimum version, mobile equivalents and practical small-screen behavior remain unknown.

<a id="R02-OP-03"></a>

#### My Flow encrypted cross-device handoff — R02-OP-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| cross-device-handoff | Desktop<br>Mobile (current iOS setup wording unresolved) | limited | vendor-documented / medium |

Opera documents QR pairing between desktop and mobile browsers for encrypted transfer of links, notes, media and files through My Flow.

- **chrome Parity:** unassessed

Sources: [R02-O3](<https://help.opera.com/en/latest/features/>).

Feature limitations:

- No device was paired and no transfer, encryption or expiry behavior was tested.
- The documented file buffer is not durable storage; exact current mobile support and setup steps remain unknown.

<a id="R02-OP-04"></a>

#### Local Paste Protect clipboard checks — R02-OP-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| security-controls | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

Opera documents local clipboard-hijack warnings and blocking of copied potentially harmful commands, with a visible alert, deliberate override and trusted-site exceptions.

- **chrome Parity:** unassessed

Sources: [R02-O3](<https://help.opera.com/en/latest/features/>), [R02-O5](<https://blogs.opera.com/security/2026/07/how-opera-paste-protect-guards-against-clipboard-attacks/>).

Feature limitations:

- Documentary security behavior only; no clipboard, malicious-command or override test was performed.
- Detection effectiveness, false positives, missed attacks, platform equivalence and comparison with Chrome or OS protections were not measured.

<a id="R02-OP-05"></a>

#### Text-selection currency, unit and time-zone conversion — R02-OP-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| contextual-utilities | Desktop help; per-OS equivalence unknown | documented | vendor-documented / high |

Opera&#39;s help documents a text-selection popup for converting currencies, measurement units and time zones.

- **chrome Parity:** unassessed

Sources: [R02-O3](<https://help.opera.com/en/latest/features/>).

Feature limitations:

- No conversions were run; rate freshness, ambiguous-input handling and time-zone correctness were not measured.
- Supported locales, currencies and current mobile equivalents were not fully established.

<a id="R02-OP-06"></a>

#### Free browser-scoped VPN — R02-OP-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| network-privacy | Desktop; exact region/platform matrix unknown | limited | vendor-documented / high |

Opera documents built-in browser-traffic tunneling and optional automatic connection on public networks on desktop.

- **chrome Parity:** unassessed

Sources: [R02-O6](<https://www.opera.com/features/free-vpn>), [R02-O7](<https://help.opera.com/latest/security-and-privacy/#VPN>).

Feature limitations:

- No VPN connection, traffic-scope, geography, throughput or no-log audit was performed.
- Vendor-listed terms are not a global availability guarantee. Tunneling does not remove cookie/account identity or establish full-device protection.

<a id="R02-OP-07"></a>

#### Built-in ad and tracker blockers — R02-OP-07

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-blocking | Desktop documentation; platform-specific defaults unknown | documented | vendor-documented / high |

Opera&#39;s help documents built-in ad/tracker blockers with per-site exceptions and filter-list controls. The 2026 Opera/GX update describes native-engine support for uBlock lists and filters.

- **chrome Parity:** unassessed

Sources: [R02-G6](<https://blogs.opera.com/news/2026/06/step-into-summer-with-a-massive-update-from-gx/>), [R02-O3](<https://help.opera.com/en/latest/features/>).

Feature limitations:

- No blocking, exception, filter-compatibility or website-breakage test was performed.
- Exact platform defaults, complete supported filter syntax and measured efficacy remain unknown.

<a id="R02-OP-08"></a>

#### Snapshot capture and annotation — R02-OP-08

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| capture-and-annotation | Desktop | documented | vendor-documented / high |

Opera&#39;s desktop help documents region or viewport image capture with annotation, blur, arrows, highlights and text tools. It separately describes saving a full page as PDF.

- **chrome Parity:** unassessed

Sources: [R02-O3](<https://help.opera.com/en/latest/features/>).

Feature limitations:

- No capture, PDF export, annotation or blur/redaction test was performed.
- Per-OS support, export fidelity, accessibility and secure redaction semantics are unknown.

Browser limitations:

- No runtime checks, detection benchmarks, VPN audit, or security-patch-lag measurement.
- Minimum OS versions, current mobile feature matrix, Flow&#39;s contemporary iOS steps, blocker defaults by platform, and VPN geography/throughput remain incomplete.
- Chrome parity is unassessed.

<a id="R02-browser-opera-gx"></a>

### Opera GX — R02-browser-opera-gx

Browser lifecycle: **active**. Browser platforms: Windows<br>macOS<br>Linux<br>Android<br>iOS/iPadOS. [Catalog qualifications](<CATALOG.md#R02-browser-opera-gx>). Sources: [R02-A1](<https://developer.chrome.com/docs/web-platform/blink>), [R02-A2](<https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/>), [R02-G1](<https://blogs.opera.com/news/2026/03/opera-gx-lands-on-linux/>), [R02-G2](<https://www.opera.com/gx/linux>), [R02-G3](<https://www.opera.com/gx/features/gx-control>), [R02-G4](<https://www.opera.com/gx/features/mods>), [R02-G5](<https://www.opera.com/gx/features/workspaces>), [R02-G6](<https://blogs.opera.com/news/2026/06/step-into-summer-with-a-massive-update-from-gx/>), [R02-G7](<https://www.opera.com/gx/features/rgx>), [R02-G8](<https://www.opera.com/gx/features/gx-cleaner>), [R02-O1](<https://www.opera.com/download>).

- **platform Qualifications:** **description:** Linux launch lists Debian/Ubuntu/Fedora/openSUSE-based distributions; the current product page advertises weekly builds. CPU limiter support on Linux is not established by its RAM/network wording.<br>**sourceIds:** [R02-G1](<https://blogs.opera.com/news/2026/03/opera-gx-lands-on-linux/>), [R02-G2](<https://www.opera.com/gx/linux>), [R02-G3](<https://www.opera.com/gx/features/gx-control>)<br>**description:** The catalogue lists mobile versions, but does not establish desktop limiter or mod parity on phones.<br>**sourceIds:** [R02-G6](<https://blogs.opera.com/news/2026/06/step-into-summer-with-a-massive-update-from-gx/>), [R02-O1](<https://www.opera.com/download>)

<a id="R02-GX-01"></a>

#### GX Control resource usage and limits — R02-GX-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| resource-management | Desktop (complete limiter matrix unknown)<br>Linux (RAM and network documented; CPU unknown) | limited | vendor-documented / high |

GX desktop documentation describes real-time resource usage and CPU, RAM and network limiting controls. Linux-specific documentation establishes RAM and network limits only.

- **chrome Parity:** unassessed

Sources: [R02-G1](<https://blogs.opera.com/news/2026/03/opera-gx-lands-on-linux/>), [R02-G2](<https://www.opera.com/gx/linux>), [R02-G3](<https://www.opera.com/gx/features/gx-control>).

Feature limitations:

- No resource cap, hard-limit accuracy, gaming frame-rate or responsiveness test was run.
- Linux CPU availability, current GX/Chromium version and precise mobile or per-build limiter support remain unknown.

<a id="R02-GX-02"></a>

#### Hot Tabs Killer — R02-GX-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| resource-management | Desktop<br>Linux (launch-documented) | documented | vendor-documented / high |

The Linux launch and June 2026 GX recap document identifying and closing resource-heavy tabs with Hot Tabs Killer.

- **chrome Parity:** unassessed

Sources: [R02-G1](<https://blogs.opera.com/news/2026/03/opera-gx-lands-on-linux/>), [R02-G6](<https://blogs.opera.com/news/2026/06/step-into-summer-with-a-massive-update-from-gx/>).

Feature limitations:

- No tab was killed and no resource-attribution or unsaved-state test was performed.
- Resource savings, recovery behavior, minimum build and mobile support are unknown.

<a id="R02-GX-03"></a>

#### Composable GX Mods — R02-GX-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| interface-customization | Desktop; per-OS and mobile equivalence unknown | documented | vendor-documented / high |

GX documents combining community mods for themes, sounds, music, shaders, fonts and interface elements, with authoring tools.

- **chrome Parity:** unassessed

Sources: [R02-G4](<https://www.opera.com/gx/features/mods>).

Feature limitations:

- No mod was installed, authored or evaluated for permissions, accessibility or resource overhead.
- Community review policy, per-platform support and performance costs remain unknown.

<a id="R02-GX-04"></a>

#### Named GX Workspaces and scoped tab cycling — R02-GX-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-management | Desktop-oriented help; exact platform matrix unknown | documented | vendor-documented / high |

GX help describes named, icon-coded tab sets and a visual tab cycler restricted to the active workspace.

- **chrome Parity:** unassessed

Sources: [R02-G5](<https://www.opera.com/gx/features/workspaces>).

Feature limitations:

- No workspace creation, tab cycling or persistence behavior was tested.
- Identity isolation, mobile equivalence and exact minimum build are not established.

<a id="R02-GX-05"></a>

#### Toolbar and floating Mini Player — R02-GX-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| media | Desktop recap; per-platform rollout unknown | documented | vendor-documented / high |

The June GX recap documents a Mini Player in the toolbar or a floating window, with music pausing for other tab audio and resuming later.

- **chrome Parity:** unassessed

Sources: [R02-G6](<https://blogs.opera.com/news/2026/06/step-into-summer-with-a-massive-update-from-gx/>).

Feature limitations:

- No media-service, audio-conflict or automatic-resume test was performed.
- Service eligibility, exact introducing build, platform parity and accessibility remain unknown.

<a id="R02-GX-06"></a>

#### User-toggleable RGX image and video processing — R02-GX-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| media | Desktop product documentation; per-platform matrix unknown | documented | vendor-documented / high |

GX documents user controls for processing online images and video through RGX. The June recap states that hiding RGX buttons by default did not remove the feature.

- **chrome Parity:** unassessed

Sources: [R02-G6](<https://blogs.opera.com/news/2026/06/step-into-summer-with-a-massive-update-from-gx/>), [R02-G7](<https://www.opera.com/gx/features/rgx>).

Feature limitations:

- No image/video quality, processing-cost or resource-efficiency test was run.
- Per-platform support, content compatibility and practical benefit remain unknown; marketing enhancement claims are not measurements.

<a id="R02-GX-07"></a>

#### Graded and time-scoped GX Cleaner — R02-GX-07

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| data-management | Desktop-oriented product help; per-platform equivalence unknown | documented | vendor-documented / high |

GX Cleaner help documents graded cleanup choices and a selectable time period for deleting browser data.

- **chrome Parity:** unassessed

Sources: [R02-G8](<https://www.opera.com/gx/features/gx-cleaner>).

Feature limitations:

- No browser data was deleted and no cleanup or speed benchmark was run.
- Exact deletion/recovery semantics, download-history versus file deletion, platform parity and unsaved-state handling remain unknown.

<a id="R02-GX-08"></a>

#### Easy Files upload selection — R02-GX-08

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| file-workflows | Desktop recap; per-platform rollout unknown | documented | vendor-documented / high |

The June GX recap documents Easy Files as a quick file-selection surface for uploads and attachments, including multi-file selection improvements.

- **chrome Parity:** unassessed

Sources: [R02-G6](<https://blogs.opera.com/news/2026/06/step-into-summer-with-a-massive-update-from-gx/>).

Feature limitations:

- No file was selected or uploaded; supported origins, privacy boundaries and system-picker integration were not tested.
- Exact introducing build, mobile support and task-efficiency benefits remain unknown.

Browser limitations:

- No limiter, game-frame, media-processing, startup-speed, or cleanup runtime tests.
- Current GX build, Linux CPU-limiter availability, full mobile matrix, and mod permissions/review remain unknown.
- Chrome parity is unassessed.

<a id="R02-browser-safari"></a>

### Apple Safari — R02-browser-safari

Browser lifecycle: **active**. Browser platforms: macOS<br>iOS<br>iPadOS<br>visionOS. [Catalog qualifications](<CATALOG.md#R02-browser-safari>). Sources: [R02-A1](<https://developer.chrome.com/docs/web-platform/blink>), [R02-S1](<https://support.apple.com/en-us/102665>), [R02-S10](<https://support.apple.com/guide/apple-vision-pro/browse-the-web-privately-tan4d3bd79f8/visionos>), [R02-S2](<https://webkit.org/blog/18486/webkit-features-for-safari-27-1/>), [R02-S3](<https://support.apple.com/en-us/105100>), [R02-S4](<https://support.apple.com/guide/safari/share-tab-groups-collaborate-safari-mac-ibrw7f189b02/mac>), [R02-S5](<https://support.apple.com/en-us/105028>), [R02-S6](<https://support.apple.com/en-us/120682>), [R02-S7](<https://support.apple.com/en-us/104996>), [R02-S8](<https://support.apple.com/guide/safari/hide-ads-when-reading-sfri32632/mac>), [R02-S9](<https://support.apple.com/guide/safari/prevent-cross-site-tracking-sfri40732/mac>).

- **platform Qualifications:** **description:** Updates arrive through operating-system updates/upgrades. Apple no longer provides Safari updates for Windows or other non-Apple operating systems.<br>**sourceIds:** [R02-S1](<https://support.apple.com/en-us/102665>)<br>**description:** The Safari 27.1 article does not establish that version as current on every Apple OS; posture/viewport-segment APIs remain flag-gated previews in that article.<br>**sourceIds:** [R02-S2](<https://webkit.org/blog/18486/webkit-features-for-safari-27-1/>)

<a id="R02-SA-01"></a>

#### Profiles with qualified external-link routing — R02-SA-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| identity | macOS | limited | vendor-documented / high |

Safari&#39;s Mac guide documents separate profile history, cookies, website data and Tab Groups, plus routing externally opened website links to a chosen profile under specified conditions.

- **chrome Parity:** unassessed

Sources: [R02-S3](<https://support.apple.com/en-us/105100>).

Feature limitations:

- Documentary evidence only; isolation, sync and link routing were not exercised.
- The external-link rule is conditional, not a general router for all navigation. The inspected Mac guide does not establish identical mobile behavior or complete isolation of secrets and settings.

<a id="R02-SA-02"></a>

#### Collaborative Shared Tab Groups — R02-SA-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| collaboration | macOS | limited | vendor-documented / high |

Safari&#39;s Mac guide describes live shared-tab updates and participant access management in Shared Tab Groups.

- **chrome Parity:** unassessed

Sources: [R02-S4](<https://support.apple.com/guide/safari/share-tab-groups-collaborate-safari-mac-ibrw7f189b02/mac>).

Feature limitations:

- No collaboration, access-revocation or participant-limit test was run.
- The documented live collaboration workflow is distinct from ordinary personal sync; cross-platform equivalence and account eligibility beyond the cited prerequisites were not established.

<a id="R02-SA-03"></a>

#### Locked Private Browsing — R02-SA-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy | macOS<br>iOS<br>iPadOS | limited | vendor-documented / high |

Safari documents locking still-open private windows with device authentication when they are not in use.

- **chrome Parity:** unassessed

Sources: [R02-S5](<https://support.apple.com/en-us/105028>).

Feature limitations:

- No lock/unlock, media, screen-sharing or assistive-technology test was performed.
- This is a documented local privacy control with exceptions, not a guarantee against every local observation threat or equivalent behavior on every supported OS version.

<a id="R02-SA-04"></a>

#### Reversible Distraction Control — R02-SA-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| page-customization | macOS<br>iOS<br>iPadOS | limited | vendor-documented / high |

Safari documents hiding user-selected page elements and restoring them, with possible reuse across same-site pages and profiles on the same device.

- **chrome Parity:** unassessed

Sources: [R02-S6](<https://support.apple.com/en-us/120682>).

Feature limitations:

- No element-hiding, restoration or persistence workflow was tested.
- The documented mechanism is not a promise of ad blocking or reliable suppression of changing content; exact per-version and cross-device behavior remains unverified.

<a id="R02-SA-05"></a>

#### Independent Dock web apps — R02-SA-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| web-apps | macOS | limited | vendor-documented / high |

Safari documents saving a webpage as a separately launched Dock web app with independent ongoing history, cookies, website data and settings, web-app extension settings, and notification badge support.

- **chrome Parity:** unassessed

Sources: [R02-S7](<https://support.apple.com/en-us/104996>).

Feature limitations:

- No app installation, launch, notification or data-deletion test was performed.
- Independent ongoing browsing data does not establish isolation of every credential type or identical behavior on other Apple platforms.

<a id="R02-SA-06"></a>

#### Reader with conditional article summaries — R02-SA-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| reading-accessibility | macOS | limited | vendor-documented / high |

Safari&#39;s Mac guide describes distraction-reduced article reading, visual preferences and navigation for long articles, with Apple Intelligence summaries for supported pages.

- **chrome Parity:** unassessed

Sources: [R02-S8](<https://support.apple.com/guide/safari/hide-ads-when-reading-sfri32632/mac>).

Feature limitations:

- No Reader eligibility, summary-accuracy or accessibility test was run.
- The complete Apple Intelligence hardware/language/region matrix and per-platform equivalence remain unknown. Insufficiently extracted Highlights material is not evidence for this record.

<a id="R02-SA-07"></a>

#### Cross-site tracking and fingerprinting controls — R02-SA-07

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy | macOS | documented | vendor-documented / high |

Safari&#39;s Mac guide documents cross-site tracking controls, a reduced fingerprinting surface through a simplified system configuration, and a report of blocked known trackers.

- **chrome Parity:** unassessed

Sources: [R02-S9](<https://support.apple.com/guide/safari/prevent-cross-site-tracking-sfri40732/mac>).

Feature limitations:

- Documented mechanisms only; no tracking-resistance, fingerprinting or compatibility test.
- No anonymity guarantee, comparative privacy score or measured superiority is established.

<a id="R02-SA-08"></a>

#### iCloud Private Relay browsing controls — R02-SA-08

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| network-privacy | visionOS | limited | vendor-documented / high |

Apple&#39;s Vision Pro guide documents encrypted browsing through two separate relays and temporary per-site IP exposure controls.

- **chrome Parity:** unassessed

Sources: [R02-S10](<https://support.apple.com/guide/apple-vision-pro/browse-the-web-privately-tan4d3bd79f8/visionos>).

Feature limitations:

- No relay, traffic-scope, IP-exposure or regional-eligibility test was performed.
- This is not evidence of a universal full-device VPN; pricing details and all-platform feature parity were not established.

Browser limitations:

- No runtime, privacy, or performance measurements.
- Latest patch per OS, complete Apple Intelligence eligibility, Highlights details, and cross-device persistence of hidden elements were not established.
- Chrome parity is unassessed.

<a id="R02-browser-vivaldi"></a>

### Vivaldi — R02-browser-vivaldi

Browser lifecycle: **active**. Browser platforms: Windows<br>macOS<br>Linux<br>Android<br>iOS/iPadOS<br>Raspberry Pi<br>Android Automotive (vehicle-specific). [Catalog qualifications](<CATALOG.md#R02-browser-vivaldi>). Sources: [R02-A1](<https://developer.chrome.com/docs/web-platform/blink>), [R02-A2](<https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/>), [R02-V1](<https://vivaldi.com/download>), [R02-V10](<https://help.vivaldi.com/desktop/panels/panels/>), [R02-V2](<https://vivaldi.com/blog/vivaldi-on-desktop-6-4/>), [R02-V3](<https://vivaldi.com/blog/vivaldi-on-desktop-7-8/>), [R02-V4](<https://help.vivaldi.com/desktop/tabs/workspaces/>), [R02-V5](<https://help.vivaldi.com/desktop/tabs/tab-stacks/>), [R02-V6](<https://help.vivaldi.com/desktop/tabs/tab-tiling/>), [R02-V7](<https://help.vivaldi.com/desktop/shortcuts/command-chains/>), [R02-V8](<https://help.vivaldi.com/desktop/panels/web-panels/>), [R02-V9](<https://help.vivaldi.com/desktop/panels/notes/>).

- **platform Qualifications:** **description:** Current download text lists desktop OS families; the 2023 cross-platform release also lists mobile, Raspberry Pi, and Android Automotive. Car support is vehicle-specific.<br>**sourceIds:** [R02-V1](<https://vivaldi.com/download>), [R02-V2](<https://vivaldi.com/blog/vivaldi-on-desktop-6-4/>)

<a id="R02-VI-01"></a>

#### Rule-routed Workspaces — R02-VI-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-management | Desktop | documented | vendor-documented / high |

Vivaldi&#39;s desktop help documents switching project tab sets within a window, routing tabs by URL rules, and bulk hibernation and copy-links operations.

- **chrome Parity:** unassessed

Sources: [R02-V4](<https://help.vivaldi.com/desktop/tabs/workspaces/>).

Feature limitations:

- Documentation only; URL routing, restoration, window ownership and hibernation were not exercised.
- The desktop workflow is not evidence of mobile or automotive parity, identity isolation, or reduced resource use from grouping alone.

<a id="R02-VI-02"></a>

#### Tab Stacks and stack-wide actions — R02-VI-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-management | Desktop | documented | vendor-documented / high |

Vivaldi documents compact, two-level and accordion Tab Stacks, host-based grouping, and stack-wide save-session, tile, hibernate, pin and copy-links operations.

- **chrome Parity:** unassessed

Sources: [R02-V5](<https://help.vivaldi.com/desktop/tabs/tab-stacks/>).

Feature limitations:

- No stack, session-restoration or keyboard interaction was tested.
- The mutable help page&#39;s older metadata is not an introduction date for every option; mobile parity and large-session usability remain unverified.

<a id="R02-VI-03"></a>

#### Multi-way tab tiling — R02-VI-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| window-management | Desktop | documented | vendor-documented / high |

Vivaldi&#39;s desktop documentation describes vertical, horizontal, grid and custom tiled-tab arrangements. The 7.8 release adds drag-to-tile and opening a link directly as a tile.

- **chrome Parity:** unassessed

Sources: [R02-V3](<https://vivaldi.com/blog/vivaldi-on-desktop-7-8/>), [R02-V6](<https://help.vivaldi.com/desktop/tabs/tab-tiling/>).

Feature limitations:

- No tiling, keyboard-focus, responsiveness or small-screen test was performed.
- An undocumented count limit is not evidence of practical usability at arbitrary counts. Desktop 7.8 is an inspected shipping milestone, not the asserted latest release; phone and car parity are unknown.

<a id="R02-VI-04"></a>

#### Reusable Command Chains — R02-VI-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| automation | Desktop | documented | vendor-documented / high |

Vivaldi documents sequences of native browser commands that can be invoked from command search, keyboard shortcuts, gestures or toolbar buttons.

- **chrome Parity:** unassessed

Sources: [R02-V7](<https://help.vivaldi.com/desktop/shortcuts/command-chains/>).

Feature limitations:

- No command chain was configured or executed.
- Timing-sensitive chains are not proven robust automation. Shortcut conflicts, recovery, per-platform behavior and mobile support were not assessed.

<a id="R02-VI-05"></a>

#### User-selected Web Panels — R02-VI-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| panels | Desktop | documented | vendor-documented / high |

Vivaldi&#39;s desktop help documents keeping arbitrary user-chosen websites beside the main tab, with per-panel width, zoom, mute and periodic reload controls.

- **chrome Parity:** unassessed

Sources: [R02-V8](<https://help.vivaldi.com/desktop/panels/web-panels/>).

Feature limitations:

- No panel, authentication, periodic-reload or accessibility workflow was exercised.
- Site layout compatibility, resource costs, account boundaries and mobile-browser parity remain unverified.

<a id="R02-VI-06"></a>

#### Provenance-preserving Notes and open-format export — R02-VI-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| research-capture | Desktop | documented | vendor-documented / high |

Vivaldi documents capturing selected text with its webpage link, creation date and screenshot, plus append, search, Markdown and ordinary .txt/.md file export.

- **chrome Parity:** unassessed

Sources: [R02-V1](<https://vivaldi.com/download>), [R02-V9](<https://help.vivaldi.com/desktop/panels/notes/>).

Feature limitations:

- No note, export or sync operation was performed.
- Attachment fidelity, sync behavior, account prerequisites and per-platform export parity were not tested; this is not an inferred cloud-only format.

<a id="R02-VI-07"></a>

#### Optional productivity panels — R02-VI-07

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| productivity | Desktop | limited | vendor-documented / high |

Vivaldi&#39;s desktop help describes integrated Mail, Calendar, Tasks, Feeds and Contacts panels.

- **chrome Parity:** unassessed

Sources: [R02-V10](<https://help.vivaldi.com/desktop/panels/panels/>).

Feature limitations:

- No account setup, synchronization or productivity-panel workflow was exercised.
- Third-party compatibility, current service eligibility and phone/car feature parity remain unknown.

<a id="R02-VI-08"></a>

#### Domain-restricted pinned tabs — R02-VI-08

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-management | Desktop | documented | vendor-documented / high |

Vivaldi&#39;s desktop 7.8 release documents domain restriction for pinned tabs, keeping a persistent app tab associated with its domain, and pinned Mail persistence across workspaces.

- **chrome Parity:** unassessed

Sources: [R02-V3](<https://vivaldi.com/blog/vivaldi-on-desktop-7-8/>).

Feature limitations:

- Release-note evidence only; cross-domain redirects, authentication navigation and pin persistence were not tested.
- The exact latest Vivaldi version and mobile/automotive equivalents were not established.

Browser limitations:

- No configured-session benchmarks or runtime checks.
- Latest build, current minimum OS versions, phone/car feature parity, and domain-pin edge cases remain unknown.
- Chrome parity is unassessed.

Lane limitations:

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

## R03 — Privacy, anonymity, and independent-browser workflows

Saved scope: Tor Browser<br>Mullvad Browser<br>LibreWolf<br>ungoogled-chromium<br>Waterfox<br>Pale Moon<br>Basilisk<br>DuckDuckGo Browser. Shard: [R03](<data/lanes/R03.json>). Status: complete.

<a id="R03-B-BASILISK"></a>

### Basilisk — R03-B-BASILISK

Browser lifecycle: **active**. Browser platforms: Windows 7+<br>macOS (Intel, Apple Silicon and PowerPC builds listed)<br>Linux (multiple architectures)<br>FreeBSD. [Catalog qualifications](<CATALOG.md#R03-B-BASILISK>). Sources: [R03-S-B1](<https://www.basilisk-browser.org/>), [R03-S-B2](<https://www.basilisk-browser.org/features.html>), [R03-S-B3](<https://www.basilisk-browser.org/releasenotes.html>), [R03-S-B4](<https://www.basilisk-browser.org/download.html>).

- **platform Boundaries:** Windows automatic updates are documented as supported; macOS downloads explicitly require manual updates; the FreeBSD archive also has no automatic updates.<br>The release introduces Intel 32-bit macOS builds and enables MIPS64EL Linux automatic updates.<br>Supporting an old OS means the app is offered there, not that the OS receives vendor security fixes.

<a id="R03-F-B01"></a>

#### Traditional customizable desktop interface — R03-F-B01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| interface-customization | Windows<br>macOS<br>Linux<br>FreeBSD | documented | vendor-documented / high |

Basilisk documents a traditional desktop interface with extensive customization and an emphasis on stable, long-lived workflows rather than following current Firefox interface changes.

Sources: [R03-S-B1](<https://www.basilisk-browser.org/>), [R03-S-B2](<https://www.basilisk-browser.org/features.html>).

Feature limitations:

- Predictability and long-term usability are design goals, not measured user outcomes.
- No UI or accessibility testing was performed.

<a id="R03-F-B02"></a>

#### Classic XUL and overlay-based extensions — R03-F-B02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| extensibility | Windows<br>macOS<br>Linux<br>FreeBSD | documented | vendor-documented / high |

The project explicitly preserves classic XUL and overlay-based extension capabilities on its independently maintained UXP platform.

Sources: [R03-S-B1](<https://www.basilisk-browser.org/>), [R03-S-B2](<https://www.basilisk-browser.org/features.html>).

Feature limitations:

- Chrome Web Store or current Firefox extension compatibility is not implied.
- The power or longevity of an extension system does not establish its security properties.
- No extension was installed or audited.

<a id="R03-F-B03"></a>

#### NPAPI plugin support — R03-F-B03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| legacy-compatibility | Windows<br>macOS<br>Linux<br>FreeBSD | documented | vendor-documented / high |

Basilisk documents retained native plugin support through NPAPI as part of its classic desktop compatibility surface.

Sources: [R03-S-B1](<https://www.basilisk-browser.org/>).

Feature limitations:

- An individual plugin must match its platform and architecture; compatible plugins were not inventoried.
- Legacy support is distinct from plugin maintenance or safety and is not a blanket Chrome recommendation.

<a id="R03-F-B04"></a>

#### Integrated compatibility polyfills and explicit switches — R03-F-B04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| web-compatibility | Windows<br>macOS<br>Linux<br>FreeBSD | limited | vendor-documented / high |

The 2026.11.01 notes list Intl, Streams and other polyfills, a Microsoft-specific WebAuthn shim, and preferences for CSS :has() and strict form-element parsing.

Sources: [R03-S-B3](<https://www.basilisk-browser.org/releasenotes.html>).

Feature limitations:

- The listed Intl.ListFormat polyfill is en-US-only and :has() is off by default because of documented performance problems.
- A shim or compatibility preference does not establish complete API conformance.
- No compatibility or performance experiment was run.

Browser limitations:

- No telemetry policy or Tor-like anonymity was established; neither is inferred from engine independence.
- Compatibility is selective: :has() is disabled by default and the listed Intl.ListFormat polyfill is en-US-only.
- Platform downloads and release notes were read, but execution, plugin behavior and update mechanisms were not tested.

<a id="R03-B-DUCKDUCKGO"></a>

### DuckDuckGo Browser — R03-B-DUCKDUCKGO

Browser lifecycle: **active**. Browser platforms: Windows 10 May 2020+<br>macOS<br>iOS/iPadOS<br>Android. [Catalog qualifications](<CATALOG.md#R03-B-DUCKDUCKGO>). Sources: [R03-S-D1](<https://duckduckgo.com/duckduckgo-help-pages/get-duckduckgo/does-duckduckgo-make-a-browser>), [R03-S-D10](<https://duckduckgo.com/duckduckgo-help-pages/get-duckduckgo/get-duckduckgo-browser-on-windows>), [R03-S-D11](<https://duckduckgo.com/duckduckgo-help-pages/get-duckduckgo/get-duckduckgo-browser-on-mac>), [R03-S-D12](<https://chromium.googlesource.com/chromium/src/+/HEAD/android_webview/README.md>), [R03-S-D2](<https://duckduckgo.com/updates>), [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>), [R03-S-D4](<https://duckduckgo.com/duckduckgo-help-pages/privacy/fire-tabs>), [R03-S-D5](<https://duckduckgo.com/sync_and_backup/privacy>), [R03-S-D6](<https://spreadprivacy.com/windows-browser-open-beta/>), [R03-S-D7](<https://spreadprivacy.com/duckduckgo-for-mac-open-beta/>), [R03-S-D8](<https://github.com/duckduckgo/apple-browsers>), [R03-S-D9](<https://github.com/duckduckgo/Android>).

- **platform Boundaries:** The Windows help page says x86 updates end after version 0.170.0; it supplies no calendar cutoff.<br>The Mac App Store edition lacks the documented Bitwarden integration and local-file access of direct distribution.<br>The protection tables include platform-specific limitations and roadmap entries; uniform feature parity is not established.

<a id="R03-F-D01"></a>

#### Tracker-request blocking with public lists and local surrogates — R03-F-D01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-and-script-control | Windows<br>macOS<br>iOS/iPadOS<br>Android | documented | vendor-documented / high |

DuckDuckGo describes identifying tracker requests with public lists and preventing their loading. Local surrogate scripts can replicate expected APIs without the tracking calls to reduce tracker-dependent breakage.

Sources: [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>).

Feature limitations:

- Most is a vendor coverage claim, not a measured result here.
- The documentation includes temporary compatibility exceptions and separate treatment of infrastructure domains.
- The bat.bing.com conversion exception applies after DuckDuckGo ad clicks; it is not a blanket Microsoft-tracker exemption.
- The described protection does not establish Tor anonymity or native Chrome absence.

<a id="R03-F-D02"></a>

#### Automatic cookie-consent handling with limited coverage — R03-F-D02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| consent-control | Windows<br>macOS<br>iOS/iPadOS<br>Android | limited | vendor-documented / high |

The documentation describes attempting to minimize consented cookies and close a detected pop-up. Where preference management is unavailable it may only hide the pop-up using filter or cosmetic rules.

- **default State:** Documented as enabled by default on supported app platforms.

Sources: [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>).

Feature limitations:

- Cosmetic hiding is not proof that consent was rejected or cookies were prevented.
- Android iframe script-injection limits prevent handling some sites; coverage is incomplete and changes over time.
- Support for the DuckDuckGo extension is distinct from the host Chrome browser&#39;s native capabilities.
- No consent-manager corpus or consent-state test was performed.

<a id="R03-F-D03"></a>

#### Fire Button, Fireproof exceptions and isolated Fire sessions — R03-F-D03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| session-control | Windows<br>macOS<br>iOS/iPadOS<br>Android | documented | vendor-documented / high |

The Fire Button exposes scoped deletion of browsing data. Fireproof sites retain selected state, while Fire Windows on desktop and Fire Tabs on mobile isolate activity from regular sessions and delete their session data on closing.

Sources: [R03-S-D2](<https://duckduckgo.com/updates>), [R03-S-D4](<https://duckduckgo.com/duckduckgo-help-pages/privacy/fire-tabs>).

Feature limitations:

- The Fire Button does not delete Fireproof first-party state, bookmarks, downloaded files or some app/search settings.
- The isolated-session and erasure statements are documented semantics, not forensic guarantees verified here.
- These local/session controls do not change the network-identity model or establish anonymity.

<a id="R03-F-D04"></a>

#### Accountless end-to-end encrypted Sync &amp; Backup — R03-F-D04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| sync-and-portability | Windows<br>macOS<br>iOS/iPadOS<br>Android | documented | vendor-documented / high |

The policy describes syncing supported data with encryption on devices and decryption keys held on connected devices. Pairing uses recovery/QR codes without requiring a personal identity account.

Sources: [R03-S-D5](<https://duckduckgo.com/sync_and_backup/privacy>).

Feature limitations:

- The architecture and access promises were not independently cryptographically audited.
- Recovery-code custody and device access matter; supported data types and optional restore behavior need platform-specific verification.
- The policy says data not accessed for 18 months is deleted from servers; deleting server data does not remove already-local copies.
- Accountless synchronization is not Tor anonymity.

<a id="R03-F-D05"></a>

#### Consolidated optional-AI opt-out — R03-F-D05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| optional-ai-control | Windows<br>macOS<br>iOS/iPadOS<br>Android | documented | vendor-documented / high |

Q3 2026 updates document a Use DuckDuckGo Without AI control that disables Duck.ai, hides AI-assisted search answers and applies a filter for known AI spam sites in image search results.

Sources: [R03-S-D2](<https://duckduckgo.com/updates>).

Feature limitations:

- The scope is the vendor&#39;s enumerated browser/service surfaces, not removal of arbitrary AI-generated web content.
- The exact first app version and all network effects were not established.
- No Chrome absence or comparable-control default is asserted.

<a id="R03-F-D06"></a>

#### Layered tracking controls with platform-specific coverage — R03-F-D06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tracking-protection | Windows<br>macOS<br>iOS/iPadOS<br>Android | limited | vendor-documented / high |

The protection matrix separately documents CNAME handling, fingerprint API changes, link/referrer controls, cookie restrictions, HTTPS upgrading and Global Privacy Control. These are different mechanisms with different platform coverage, not a single uniform guarantee.

- **platform Coverage:** **capability:** CNAME handling<br>**documentedScope:** Windows/Android list-based handling; macOS/iOS coverage is a subset with a stated roadmap for usability limitations.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** Fingerprint API overrides<br>**documentedScope:** The Android table excludes iframe overrides because of WebView script-injection limitations.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** Automatic link tracking removal<br>**documentedScope:** The inspected table lists Windows as unsupported/on the roadmap; macOS/iOS cover the first navigation rather than later automatic redirects. Android lists removal of tracked parameters.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** Referrer controls<br>**documentedScope:** The table describes macOS/iOS WebKit-based and Windows handling, with Android unsupported because of WebView limitations.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** First-party cookie expiry<br>**documentedScope:** Platform tables distinguish implemented expiry from Windows and Android roadmap items; the generic introduction is not proof of uniform coverage.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)<br>**capability:** Global Privacy Control<br>**documentedScope:** Header and/or JavaScript opt-out signaling has platform qualifications. Legal effect depends on jurisdiction and site obligations, not merely sending the signal.<br>**sourceIds:** [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>)

Sources: [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>).

Feature limitations:

- The matrix is mutable and may contain stale entries; exact present binary behavior was not verified.
- A manual Copy Clean Link control is distinct from automatic link protection and does not establish parity with the automatic-navigation table.
- Chrome extension limitations and historical Topics comparisons do not establish native Chrome gaps or current lifecycle facts.
- No tracking effectiveness, GPC compliance, HTTPS coverage or cookie-expiry test was run.

Browser limitations:

- Exact latest app builds and engine versions remain unknown. Historical launch articles do not establish continued beta status or current extension availability.
- A guessed Windows repository URL returned 404; this does not establish Windows source availability or licensing.
- The Apple README identifies a proprietary font dependency, so not every distributed asset can be called open source.
- The policy documents a bat.bing.com conversion exception after DuckDuckGo ad clicks, not a blanket Microsoft-tracker exemption.
- Tracker blocking, private sessions and encryption do not establish Tor-equivalent anonymity; no runtime effectiveness or comparative data-use result was measured.

<a id="R03-B-LIBREWOLF"></a>

### LibreWolf — R03-B-LIBREWOLF

Browser lifecycle: **unknown**. Browser platforms: Windows x86\_64 and ARM64<br>macOS x86\_64 and ARM64<br>Linux (distribution packages and x86\_64 AppImage documented). [Catalog qualifications](<CATALOG.md#R03-B-LIBREWOLF>). Sources: [R03-S-L1](<https://librewolf.net/>), [R03-S-L2](<https://librewolf.net/docs/features/>), [R03-S-L3](<https://librewolf.net/installation/windows/>), [R03-S-L4](<https://librewolf.net/installation/macos/>), [R03-S-L5](<https://librewolf.net/installation/linux/>).

<a id="R03-F-L01"></a>

#### Bundled uBlock Origin and strict tracking protection — R03-F-L01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-and-script-control | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The feature list documents uBlock Origin with custom default filter lists and strict tracking protection, including dynamic first-party isolation / Total Cookie Protection.

Sources: [R03-S-L2](<https://librewolf.net/docs/features/>).

Feature limitations:

- Feature-list defaults were not checked in each platform binary.
- Tracker-blocking coverage and site breakage were not measured.

<a id="R03-F-L02"></a>

#### RFP, normalized language and disabled WebGL — R03-F-L02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| fingerprinting-resistance | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The project documents RFP, reporting en-US to websites, and disabling WebGL as parts of its fingerprint-resistance configuration.

Sources: [R03-S-L2](<https://librewolf.net/docs/features/>).

Feature limitations:

- Language and graphics restrictions can affect localization and web applications.
- The project&#39;s best-in-class wording is not adopted as a comparative finding.
- No fingerprint or compatibility test was performed.

<a id="R03-F-L03"></a>

#### Ephemeral site data and reduced persistent caching — R03-F-L03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| session-control | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

Documented defaults delete cookies and website data on close, disable disk cache and clear temporary files, reducing persistent local browsing state.

Sources: [R03-S-L2](<https://librewolf.net/docs/features/>).

Feature limitations:

- Closing a session can end website logins.
- Local deletion does not establish network anonymity or deletion of information already held by a site.
- No storage-level erasure verification was performed.

<a id="R03-F-L04"></a>

#### Tracking-parameter removal and reduced speculative networking — R03-F-L04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| link-and-network-control | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The feature list describes stripping tracking elements from URLs, trimming cross-origin referrers, and disabling link prefetching and speculative connections.

Sources: [R03-S-L2](<https://librewolf.net/docs/features/>).

Feature limitations:

- Parameter removal can interact with functional URLs; disabling speculation can affect loading behavior.
- Neither effects nor compatibility were measured, and no Chrome default comparison is implied.

<a id="R03-F-L05"></a>

#### Quiet telemetry, suggestion and sponsored-content defaults — R03-F-L05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| background-services | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

LibreWolf documents disabling telemetry, crash reporting, studies, search suggestions, recommendations, and distracting or sponsored home-page content.

Sources: [R03-S-L1](<https://librewolf.net/>), [R03-S-L2](<https://librewolf.net/docs/features/>).

Feature limitations:

- No data collection is a project policy claim, not an independently verified zero-egress result.
- No current binary defaults or service traffic were inspected.

<a id="R03-F-L06"></a>

#### Dedicated UI for privacy and security choices — R03-F-L06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| settings-and-control | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

A LibreWolf-specific UI exposes important privacy/security settings. The feature list separately describes an optional extension firewall and user-enabled Firefox Sync.

Sources: [R03-S-L2](<https://librewolf.net/docs/features/>).

Feature limitations:

- The extension firewall is documented as manually enabled and Sync disabled unless explicitly enabled; they are not unqualified default protections.
- UI discoverability and effectiveness were not evaluated.

Browser limitations:

- The homepage update statement is a vendor policy, not measured timely delivery to every package channel.
- The source/releases and bsys6/releases endpoints returned HTTP 403; a newer version appearing only in search results was not accepted.
- Windows scheduled updating has optional setup paths; Linux packaging has documented sandbox/process-isolation differences.
- Safe Browsing, DRM and the built-in password manager are documented as disabled; no net-security conclusion follows.
- No Tor-network anonymity or runtime privacy effectiveness was established.

<a id="R03-B-MULLVAD"></a>

### Mullvad Browser — R03-B-MULLVAD

Browser lifecycle: **active**. Browser platforms: Windows 10+ (64-bit)<br>macOS Sonoma 14+<br>Linux (64-bit, including AArch64 in 16.0). [Catalog qualifications](<CATALOG.md#R03-B-MULLVAD>). Sources: [R03-S-M1](<https://mullvad.net/en/browser>), [R03-S-M2](<https://mullvad.net/en/browser/hard-facts>), [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>), [R03-S-M4](<https://github.com/mullvad/mullvad-browser>), [R03-S-M5](<https://api.github.com/repos/mullvad/mullvad-browser/releases/latest>).

<a id="R03-F-M01"></a>

#### Coherent fingerprint-resistance defaults — R03-F-M01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| fingerprinting-resistance | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The hard-facts page documents RFP, letterboxing, normalized fonts/timezone and other attribute/API restrictions intended to make users less distinguishable.

Sources: [R03-S-M2](<https://mullvad.net/en/browser/hard-facts>).

Feature limitations:

- Nearly identical fingerprints are a stated objective, not an independently established result.
- API restrictions and suppressed site-specific preferences can affect compatibility.
- No fingerprint-population or per-build settings test was performed.

<a id="R03-F-M02"></a>

#### Private browsing by default and Clear Private Session — R03-F-M02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| session-control | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The browser documents private browsing as the default. In 16.0, the older New Identity broom becomes a Clear Private Session flame control for clearing the current session.

Sources: [R03-S-M1](<https://mullvad.net/en/browser>), [R03-S-M2](<https://mullvad.net/en/browser/hard-facts>), [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>).

Feature limitations:

- Bookmarks and extension settings persist according to the documentation.
- The older reset-button name is superseded; session clearing is not network-identity rotation.
- Erasure behavior was not inspected at runtime.

<a id="R03-F-M03"></a>

#### Bundled uBlock Origin and NoScript-backed security levels — R03-F-M03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-and-script-control | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The documented bundle includes uBlock Origin and uses NoScript for Standard, Safer and Safest levels. Higher levels disable or constrain scripts, fonts and media features.

Sources: [R03-S-M2](<https://mullvad.net/en/browser/hard-facts>), [R03-S-M5](<https://api.github.com/repos/mullvad/mullvad-browser/releases/latest>).

Feature limitations:

- Safer/Safest can break or reduce website functionality.
- Presence of blockers or stricter levels is not a measured net-security or privacy ranking.
- No filter coverage or compatibility test was run.

<a id="R03-F-M04"></a>

#### Documented compile-time telemetry and crash-report removal — R03-F-M04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| background-services | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The hard-facts page describes compile-time telemetry/crash-report disabling and removal of the telemetry sender, while listing remaining browser-initiated service connections.

Sources: [R03-S-M2](<https://mullvad.net/en/browser/hard-facts>), [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>).

Feature limitations:

- This is not a zero-network-requests claim: updates, filter lists, certificates and DNS remain relevant.
- The older connection list&#39;s Mullvad DNS entry is superseded by the 16.0 resolver change.
- No build or network-egress audit was performed.

<a id="R03-F-M05"></a>

#### Explicit encrypted-DNS settings and Quad9 migration — R03-F-M05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| dns-privacy | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The 16.0 announcement migrates users of discontinued Mullvad encrypted DNS to Quad9, preserves customized DoH settings, and describes settings for always using DoH or using the operating system resolver.

Sources: [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>), [R03-S-M5](<https://api.github.com/repos/mullvad/mullvad-browser/releases/latest>).

Feature limitations:

- The release recommends OS DNS when using a VPN; this is context-specific guidance, not proof of any tested routing setup.
- 16.0.2 adds Cloudflare as an available provider and fixes Quad9 error handling; availability is different from the default.
- Encrypted DNS is not Tor anonymity, and fallback or leak behavior was not measured.

<a id="R03-F-M06"></a>

#### Opt-in generic OS window titles — R03-F-M06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| local-disclosure-control | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The 16.0 settings can replace page-derived window names with Mullvad Browser to limit disclosure through operating-system window titles.

- **default State:** Opt-in in the 16.0 announcement.

Sources: [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>).

Feature limitations:

- The announcement warns about screen readers and customized window-management tools.
- No OS integration or accessibility test was performed; protection is limited to this disclosure channel.

Browser limitations:

- No mobile release was established.
- The older hard-facts page is superseded on default DNS and reset-button terminology by the 16.0 announcement.
- Documented build options disable EME/DRM and phishing/malware-protection functionality; restrictive fingerprint settings can affect sites.
- These choices do not establish a net security ranking or Tor-equivalent anonymity.

<a id="R03-B-PALEMOON"></a>

### Pale Moon — R03-B-PALEMOON

Browser lifecycle: **active**. Browser platforms: Windows<br>macOS<br>Linux<br>Other community-supported systems (FreeBSD build options are discussed). [Catalog qualifications](<CATALOG.md#R03-B-PALEMOON>). Sources: [R03-S-P1](<https://www.palemoon.org/>), [R03-S-P2](<https://www.palemoon.org/releasenotes.shtml>).

<a id="R03-F-P01"></a>

#### Deep XUL extension customization — R03-F-P01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| extensibility | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

Pale Moon documents XUL extensions capable of changing browser functions and interface behavior beyond web-content-only customization.

Sources: [R03-S-P1](<https://www.palemoon.org/>).

Feature limitations:

- This is a different extension ecosystem from current Chrome/Firefox WebExtensions.
- Extension power is not itself evidence of a desirable security boundary or a verified Chrome API gap.
- No extension was installed or audited.

<a id="R03-F-P02"></a>

#### Legacy NPAPI plugin support — R03-F-P02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| legacy-compatibility | Windows<br>macOS<br>Linux<br>FreeBSD (build-dependent) | limited | vendor-documented / high |

The homepage documents support for legacy native plugins through NPAPI; release notes discuss packaging choices for plugin dependencies.

Sources: [R03-S-P1](<https://www.palemoon.org/>), [R03-S-P2](<https://www.palemoon.org/releasenotes.shtml>).

Feature limitations:

- Plugin availability depends on OS, architecture, build and plugin dependencies.
- Browser support does not mean an old plugin is maintained or safe.
- No plugin runtime testing or proposal to restore NPAPI in Chrome is implied.

<a id="R03-F-P03"></a>

#### Native RSS and Atom feed support — R03-F-P03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| feeds-and-reading | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The product page lists native RSS/Atom feed support as part of retained browser content handling.

Sources: [R03-S-P1](<https://www.palemoon.org/>).

Feature limitations:

- Feed parsing, subscriptions and reader usability were not exercised.
- No feed feature comparison with Chrome was performed.

<a id="R03-F-P04"></a>

#### Retained FTP and XSLT functionality — R03-F-P04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| legacy-compatibility | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The homepage lists native FTP and XML transformations through XSLT among supported browser capabilities.

Sources: [R03-S-P1](<https://www.palemoon.org/>), [R03-S-P2](<https://www.palemoon.org/releasenotes.shtml>).

Feature limitations:

- Retention may serve long-lived workflows but is not a blanket recommendation to restore legacy implementations in Chrome.
- The publisher&#39;s claims about Chrome removal schedules were not used as Chrome baseline evidence.
- No protocol, parser or compatibility test was performed.

<a id="R03-F-P05"></a>

#### Deliberately minimal telemetry and product integrations — R03-F-P05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| background-services | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The project states that the browser contains no ads, telemetry, data gathering, DRM or AI integration, describing a deliberate product and service policy.

Sources: [R03-S-P1](<https://www.palemoon.org/>).

Feature limitations:

- This is a vendor policy/design statement, not a verified zero-egress claim.
- No runtime audit, privacy-effectiveness measure or net-security comparison was performed.

<a id="R03-F-P06"></a>

#### Built-in compatibility shims and overrides — R03-F-P06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| web-compatibility | Windows<br>macOS<br>Linux | limited | vendor-documented / high |

35.0.0 adds default compatibility shims/polyfills for selected APIs and documents adjustable compatibility behavior, including form parsing and user-agent compatibility settings.

Sources: [R03-S-P2](<https://www.palemoon.org/releasenotes.shtml>).

Feature limitations:

- The notes warn that strict content security policies can interfere and shims do not work universally.
- 35.0.2 disables :has() by default for performance, illustrating a compatibility trade-off.
- No modern-site corpus or performance benchmark was run.

Browser limitations:

- The homepage acknowledges sites requiring special consideration or another browser.
- 35.0.2 disabled CSS :has() by default for performance; inspected later notes did not establish re-enablement.
- Single-process safety/resource-efficiency claims were not independently measured.
- Old plugin/protocol support does not establish maintenance or safety of a particular plugin or implementation.
- No complete platform/update-channel inventory, patch-latency comparison, or modern-site test corpus was performed.

<a id="R03-B-TOR"></a>

### Tor Browser — R03-B-TOR

Browser lifecycle: **active**. Browser platforms: Windows<br>macOS<br>Linux<br>Android. [Catalog qualifications](<CATALOG.md#R03-B-TOR>). Sources: [R03-S-T1](<https://blog.torproject.org/new-release-tor-browser-160>), [R03-S-T2](<https://support.torproject.org/tor-browser/getting-started/about-tor-browser>), [R03-S-T3](<https://support.torproject.org/tor-browser/features/managing-identities>), [R03-S-T4](<https://support.torproject.org/tor-browser/features/fingerprinting-protections>), [R03-S-T5](<https://blog.torproject.org/new-release-tor-browser-1601>), [R03-S-T6](<https://blog.torproject.org/new-release-tor-browser-1602>), [R03-S-T7](<https://blog.torproject.org/>).

- **platform Boundaries:** 16.0 adds stable Linux AArch64 support and ends Linux x86 32-bit support.<br>The desktop offline manual and OS window-title option are not automatically Android features.<br>Only Tor Browser traffic is automatically routed through Tor; other applications are outside that scope.

<a id="R03-F-T01"></a>

#### Integrated Tor-network routing — R03-F-T01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| network-anonymity | Windows<br>macOS<br>Linux<br>Android | documented | vendor-documented / high |

Tor Browser is modified for use with Tor and routes its browser traffic through the Tor network. This network-identity property is distinct from merely deleting local history or blocking trackers.

Sources: [R03-S-T2](<https://support.torproject.org/tor-browser/getting-started/about-tor-browser>), [R03-S-T3](<https://support.torproject.org/tor-browser/features/managing-identities>).

Feature limitations:

- Other applications are not automatically routed through Tor.
- Identifying accounts or supplied personal information can identify the user to a site.
- No anonymity effectiveness or traffic behavior was measured.

<a id="R03-F-T02"></a>

#### Site-keyed circuit isolation and circuit visualization — R03-F-T02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| network-anonymity | Windows<br>macOS<br>Linux<br>Android (routing; visualization not established) | limited | vendor-documented / high |

Different first-party sites use different Tor circuits even when they embed the same tracker. A desktop site-information control visualizes the current circuit; same-site tabs can share a circuit.

Sources: [R03-S-T1](<https://blog.torproject.org/new-release-tor-browser-160>), [R03-S-T3](<https://support.torproject.org/tor-browser/features/managing-identities>).

Feature limitations:

- This is site-keyed isolation, not an independent identity for every tab.
- The 16.0 announcement describes Android circuit display and a redesigned multi-path display as forthcoming; they are not counted as shipped here.
- No routing or visualization test was performed.

<a id="R03-F-T03"></a>

#### Separate New Identity and New Tor Circuit controls — R03-F-T03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| session-control | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

New Identity closes tabs/windows, clears private state and uses new circuits. New Tor Circuit for this Site instead reloads the site through another circuit without clearing its private state or unlinking activity.

Sources: [R03-S-T3](<https://support.torproject.org/tor-browser/features/managing-identities>).

Feature limitations:

- New Identity stops current activity and downloads.
- Changing circuits is a connection-recovery operation, not a substitute for identity reset.
- Equivalent Android UI and actual clearing behavior were not established by a local test.

<a id="R03-F-T04"></a>

#### Fingerprint normalization and desktop letterboxing — R03-F-T04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| fingerprinting-resistance | Windows<br>macOS<br>Linux<br>Android (fingerprinting defenses; letterboxing not established) | limited | vendor-documented / high |

The documentation describes reducing distinguishable fingerprint buckets through normalized attributes, font restrictions, user-agent normalization and window-size letterboxing on desktop.

Sources: [R03-S-T4](<https://support.torproject.org/tor-browser/features/fingerprinting-protections>).

Feature limitations:

- The goal is reduced distinguishability, not perfect hiding of OS or device attributes.
- Cross-platform behavior and fingerprint population effects were not measured.
- Independent customization can alter the coherence of a fingerprint-resistance configuration.

<a id="R03-F-T05"></a>

#### Opt-in generic OS window titles — R03-F-T05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| local-disclosure-control | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

Tor Browser 16.0 adds a setting replacing page-derived operating-system window titles with the browser name, limiting that particular disclosure channel to other local applications.

- **default State:** Opt-in in the 16.0 announcement.

Sources: [R03-S-T1](<https://blog.torproject.org/new-release-tor-browser-160>).

Feature limitations:

- The release warns about screen-reader, window-manager and application-switcher usability.
- This addresses window titles, not every form of local observation or device compromise.
- No accessibility or OS-level behavior was tested.

<a id="R03-F-T06"></a>

#### Bundled offline desktop manual — R03-F-T06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| offline-support | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The 16.0 desktop release bundles revised support content in its manual so connection troubleshooting remains available without network access.

Sources: [R03-S-T1](<https://blog.torproject.org/new-release-tor-browser-160>).

Feature limitations:

- The release says Android package-size limits prevented bundling the manual there.
- Offline help content and accessibility were not exercised.

Browser limitations:

- Announcement dates remain unknown because cleaned bodies did not establish them.
- Minimum OS versions and every distribution channel were not checked.
- Logging into an identifying account still identifies that account; Tor does not erase information deliberately supplied to a site.
- No anonymity-set size, privacy effectiveness, runtime behavior, or relative security result was measured.

<a id="R03-B-UNGOOGLED"></a>

### ungoogled-chromium — R03-B-UNGOOGLED

Browser lifecycle: **active**. Browser platforms: Windows<br>macOS<br>Linux<br>FreeBSD (package route)<br>OpenBSD (ports route). [Catalog qualifications](<CATALOG.md#R03-B-UNGOOGLED>). Sources: [R03-S-U1](<https://github.com/ungoogled-software/ungoogled-chromium>), [R03-S-U2](<https://api.github.com/repos/ungoogled-software/ungoogled-chromium/releases/latest>).

<a id="R03-F-U01"></a>

#### Removal of Google-service-specific functionality — R03-F-U01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| background-services | Windows<br>macOS<br>Linux<br>FreeBSD/OpenBSD (packaging-dependent) | documented | vendor-documented / high |

The common project&#39;s primary objective is removal of dependency on Google web services, including disabling service-specific functionality, while remaining close to Chromium&#39;s user experience.

Sources: [R03-S-U1](<https://github.com/ungoogled-software/ungoogled-chromium>).

Feature limitations:

- This describes an objective and patch design, not a verified absence of every browser network request.
- Safe Browsing is among removed functions, so service removal cannot be treated as a blanket security improvement.
- Binary behavior and package-specific differences were not tested.

<a id="R03-F-U02"></a>

#### Fail-safe blocking of substituted internal domains — R03-F-U02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| background-services | Windows<br>macOS<br>Linux<br>FreeBSD/OpenBSD (packaging-dependent) | documented | vendor-documented / high |

The README describes replacing certain internal Google domains with non-existent qjz9zk alternatives and blocking the browser&#39;s own requests to those alternatives at runtime.

Sources: [R03-S-U1](<https://github.com/ungoogled-software/ungoogled-chromium>).

Feature limitations:

- The mechanism targets substituted internal requests, not arbitrary third-party web content.
- The patch implementation and runtime network behavior were not audited.

<a id="R03-F-U03"></a>

#### Source binary pruning — R03-F-U03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| build-provenance | Shared source/build workflow; platform packaging varies | documented | vendor-documented / high |

The common build approach removes pre-made binaries from source and uses user-provided alternatives where possible, as described in the repository&#39;s objectives and feature list.

Sources: [R03-S-U1](<https://github.com/ungoogled-software/ungoogled-chromium>).

Feature limitations:

- Source pruning is not proof that a contributor binary is reproducible or authentic.
- No build was performed; the common release itself contained no binary assets.

<a id="R03-F-U04"></a>

#### Explicit address-bar search and suggestion controls — R03-F-U04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| address-bar-control | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The README documents a No Search omnibox provider to disable searching and a Suggestions URL field in the search-engine editor for custom suggestion endpoints.

Sources: [R03-S-U1](<https://github.com/ungoogled-software/ungoogled-chromium>).

Feature limitations:

- Availability and defaults can vary by build and version.
- No address-versus-search behavior, suggestion network request, or BSD package was tested.

<a id="R03-F-U05"></a>

#### Additional configuration flags and transparent URL display — R03-F-U05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| address-bar-control | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The project documents new command-line switches and flags, along with disabling automatic omnibox URL formatting such as protocol stripping and hidden parameters.

Sources: [R03-S-U1](<https://github.com/ungoogled-software/ungoogled-chromium>).

Feature limitations:

- The README says many added features require manual activation; this record does not assert every option is enabled by default.
- Flags are not necessarily stable, supported user-facing contracts.
- Specific builds and URL-rendering behavior were not exercised.

<a id="R03-F-U06"></a>

#### Popup-to-tab behavior — R03-F-U06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-workflows | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The common feature overview documents forcing pop-up windows into tabs as a browser-control choice.

Sources: [R03-S-U1](<https://github.com/ungoogled-software/ungoogled-chromium>).

Feature limitations:

- Default activation and exact behavior in particular packages were not established.
- Compatibility with authentication pop-ups and application-style windows needs testing.

Browser limitations:

- Latest source release is not proof of available, current, signed, or reproducible binaries for every platform.
- Per-platform updater behavior and current Android support were not established.
- The README documents Safe Browsing removal, impaired captive-portal detection, and a Windows change that does not set downloaded files&#39; Zone Identifier.
- Contributor binaries are not necessarily reproducible; the project qualifies their authenticity rather than guaranteeing it.
- Service removal is not Tor anonymity or a measured security/privacy superiority claim.

<a id="R03-B-WATERFOX"></a>

### Waterfox — R03-B-WATERFOX

Browser lifecycle: **active**. Browser platforms: Windows 10+<br>macOS 10.15+<br>Linux<br>Android (separate app). [Catalog qualifications](<CATALOG.md#R03-B-WATERFOX>). Sources: [R03-S-W1](<https://www.waterfox.com/>), [R03-S-W2](<https://www.waterfox.com/releases>), [R03-S-W3](<https://www.waterfox.com/download/>), [R03-S-W4](<https://www.waterfox.com/releases/6.7.8>), [R03-S-W5](<https://api.github.com/repos/BrowserWorks/Waterfox/releases/latest>), [R03-S-W6](<https://api.github.com/repos/BrowserWorks/Waterfox-Android/releases/latest>).

- **platform Boundaries:** Desktop download requirements include SSE4.2 for Windows/Linux and glibc 2.17 for Linux.<br>Firefox WebExtensions are documented as supported; Chrome-only extensions do not automatically transfer.<br>Current Waterfox must not be conflated with Waterfox Classic; Classic&#39;s lifecycle was not investigated.

<a id="R03-F-W01"></a>

#### Private tabs alongside regular tabs — R03-F-W01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| session-control | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

Desktop private tabs sit alongside regular tabs, share a separate private container, and clear that container&#39;s site data when the last private tab closes while the normal session continues.

Sources: [R03-S-W1](<https://www.waterfox.com/>).

Feature limitations:

- Private tabs share that container with one another; this is not per-tab identity isolation.
- Private-tab storage is not network anonymity.
- Erasure, UI clarity and Android parity were not tested.

<a id="R03-F-W02"></a>

#### DNS over Oblivious HTTP — R03-F-W02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| dns-privacy | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The product page describes encrypting DNS queries and sending them through an OHTTP relay, separating the relay&#39;s view of the connecting client from the resolver&#39;s view of the query.

Sources: [R03-S-W1](<https://www.waterfox.com/>).

Feature limitations:

- Relay/resolver separation is a documented mechanism, not a verified non-collusion or retention guarantee.
- DNS privacy is not anonymous browsing; site traffic and identifying accounts remain separate concerns.
- Fallback behavior, traffic flow and Android support were not tested.

<a id="R03-F-W03"></a>

#### Tree-structured tabs and subtree actions — R03-F-W03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-workflows | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The product page describes nesting pages under their opener, collapsing branches and moving entire subtrees to organize related browsing tasks.

Sources: [R03-S-W1](<https://www.waterfox.com/>).

Feature limitations:

- Keyboard access, assistive-technology behavior and large-tree scaling were not evaluated.
- Android parity and productivity gains were not established.

<a id="R03-F-W04"></a>

#### Persistent status-bar URL display — R03-F-W04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| address-bar-control | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

A desktop status bar exposes the full destination when hovering over links, alongside loading progress and keyboard-shortcut information, rather than using a transient overlay.

Sources: [R03-S-W1](<https://www.waterfox.com/>).

Feature limitations:

- Screen-space, accessibility and destination-disclosure usability were not evaluated.
- This is a desktop description, not established mobile behavior or a Chrome gap.

<a id="R03-F-W05"></a>

#### Feeds sidebar with search, unread counts and recovery — R03-F-W05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| feeds-and-reading | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

Desktop 6.7.8 adds a feed sidebar with search and unread counts, a refresh-all action, and feed-subscription backup/recovery and import/export fixes.

Sources: [R03-S-W4](<https://www.waterfox.com/releases/6.7.8>), [R03-S-W5](<https://api.github.com/repos/BrowserWorks/Waterfox/releases/latest>).

Feature limitations:

- Active bug fixing and recovery features do not establish complete feed-format compatibility.
- No subscription, recovery or usability workflow was tested.

<a id="R03-F-W06"></a>

#### Built-in ad blocking and documented telemetry removal — R03-F-W06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| background-services | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

The product page describes built-in ad blocking, removal of browser telemetry and a no-data-collection policy as parts of its default product design.

Sources: [R03-S-W1](<https://www.waterfox.com/>), [R03-S-W4](<https://www.waterfox.com/releases/6.7.8>).

Feature limitations:

- Collection and efficacy statements are vendor claims, not a network audit.
- 6.7.8 fixes external links failing with the content blocker, demonstrating a documented compatibility interaction.
- Android parity and net privacy or performance effects were not established.

<a id="R03-F-W07"></a>

#### Optional Android sensitive-screen overlay protection — R03-F-W07

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| local-disclosure-control | Android 12+ | limited | vendor-documented / high |

The separate Android release adds Protect sensitive screens on Android 12+, hiding other apps&#39; floating windows while password, payment-card or saved-address editing screens are displayed.

- **default State:** Off by default according to the Android release body.

Sources: [R03-S-W6](<https://api.github.com/repos/BrowserWorks/Waterfox-Android/releases/latest>).

Feature limitations:

- This is an Android-only documented control for named sensitive screens, not a general guarantee against local observation or compromise.
- No overlay or device test was performed.

<a id="R03-F-W08"></a>

#### Experimental iCloud Passwords integration — R03-F-W08

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| password-integration | Windows<br>macOS Sonoma 14+ | limited | vendor-documented / high |

Desktop 6.7.8 documents experimental integration with Apple&#39;s password software for filling passwords and verification codes; enabling it also selects iCloud for new password saves.

Sources: [R03-S-W4](<https://www.waterfox.com/releases/6.7.8>), [R03-S-W5](<https://api.github.com/repos/BrowserWorks/Waterfox/releases/latest>).

Feature limitations:

- Requires Apple&#39;s password software and explicit enablement.
- Experimental support is not guaranteed parity with every password-manager integration.
- No credential data was accessed and no integration was exercised.

Browser limitations:

- The release page&#39;s Gecko 115.45 ESR advisory grouping is not reliable evidence of the desktop binary&#39;s engine version.
- Desktop feature parity on Android is not established unless specifically cited.
- OHTTP DNS separates documented relay/resolver knowledge; it does not establish anonymous browsing or a non-collusion guarantee.
- No telemetry, memory, speed, privacy, or update-integrity measurement was performed.

Lane limitations:

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

## R04 — Productivity, workspaces, and AI-native browsers

Saved scope: Arc<br>Dia<br>Zen Browser<br>Floorp<br>SigmaOS<br>Sidekick<br>Wavebox<br>Shift<br>Perplexity Comet<br>ChatGPT Atlas<br>Opera Neon. Shard: [R04](<data/lanes/R04.json>). Status: complete.

<a id="R04-browser-arc"></a>

### Arc — R04-browser-arc

Browser lifecycle: **sunset-announced**. Browser platforms: Windows 10 19H1 or later<br>macOS 13 or later. [Catalog qualifications](<CATALOG.md#R04-browser-arc>). Sources: [R04-A1](<https://arc.net/>), [R04-A2](<https://arc.net/download>), [R04-A3](<https://start.arc.net/command-bar-actions>), [R04-A4](<https://arc.net/security>).

- **lifecycle Details:** **sourceIds:** [R04-A1](<https://arc.net/>), [R04-A2](<https://arc.net/download>)<br>**sunsetAt:** 2026-12-22<br>**supportAtCutoff:** Chromium updates only, according to the download page.
- **platform Qualifications:** **description:** The download page separately links iOS Arc Search; this does not establish desktop-feature parity or the same engine.<br>**sourceIds:** [R04-A2](<https://arc.net/download>)

<a id="R04-feature-arc-01"></a>

#### Spaces, folders, and named pinned tabs — R04-feature-arc-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-organization | Desktop Arc; legacy command reference, OS parity unverified | historical | vendor-documented / medium |

Arc&#39;s legacy action reference organizes the sidebar around named Spaces and folders, with actions to focus a Space, pin a tab to a named folder, and rename a tab.

- **chrome Parity:** unassessed

Sources: [R04-A1](<https://arc.net/>), [R04-A3](<https://start.arc.net/command-bar-actions>).

Feature limitations:

- Historical design evidence from an undated command list; Arc is sunset-announced, not an active replacement recommendation.
- Mac/Windows feature parity and present behavior were not tested.

<a id="R04-feature-arc-02"></a>

#### Persistent pin destinations — R04-feature-arc-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-organization | Desktop Arc; legacy command reference, OS parity unverified | historical | vendor-documented / medium |

Reset an individual pinned tab or an entire Space to originally pinned URLs, or deliberately replace a pin with the current page. Saved destinations are distinct from temporary navigation state.

- **chrome Parity:** unassessed

Sources: [R04-A1](<https://arc.net/>), [R04-A3](<https://start.arc.net/command-bar-actions>).

Feature limitations:

- Legacy documented behavior, not a tested persistence or recovery guarantee.
- Arc&#39;s announced sunset limits this to design inspiration.

<a id="R04-feature-arc-03"></a>

#### Unified command bar — R04-feature-arc-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| command-menu | Desktop Arc; legacy command reference, OS parity unverified | historical | vendor-documented / medium |

Navigation, tab and Space organization, settings, extension access and browser operations are collected in one action surface. The reference includes named extension lookup and organization commands.

- **chrome Parity:** unassessed

Sources: [R04-A1](<https://arc.net/>), [R04-A3](<https://start.arc.net/command-bar-actions>).

Feature limitations:

- Reference includes obsolete actions; Notes/Easels were not counted as current functionality.
- Historical command design is not evidence that Chrome lacks named actions or equivalent shortcuts.

<a id="R04-feature-arc-04"></a>

#### Split views and Little Arc — R04-feature-arc-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| multitasking | Desktop Arc; legacy command reference, OS parity unverified | historical | vendor-documented / medium |

The command list documents adding, removing and expanding split views, with split removal distinct from closing the underlying tab. Little Arc provides a separate small-window entry for transient browsing.

- **chrome Parity:** unassessed

Sources: [R04-A1](<https://arc.net/>), [R04-A3](<https://start.arc.net/command-bar-actions>).

Feature limitations:

- Little Arc and split controls were not validated across operating systems.
- Both are retained as historical interaction precedents for a sunset-announced product.

<a id="R04-feature-arc-05"></a>

#### Today/Archive and sidebar recovery — R04-feature-arc-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| sessions-and-portability | Desktop Arc; legacy command reference, OS parity unverified | historical | vendor-documented / medium |

The Today section distinguishes disposable tabs from persistent organization. The archive revisits manually and automatically closed tabs, while Restore Data brings back older sidebar states.

- **chrome Parity:** unassessed

Sources: [R04-A1](<https://arc.net/>), [R04-A3](<https://start.arc.net/command-bar-actions>).

Feature limitations:

- No archive retention, restore accuracy or post-retirement recovery test was performed.
- Legacy documentation must not be treated as a current service-continuity guarantee.

Browser limitations:

- No current Mac/Windows feature-parity or onboarding test.
- The five feature entries use a legacy action reference and are historical evidence.
- Detailed account-deactivation behavior was not verified because the Help Center was blocked.

<a id="R04-browser-atlas"></a>

### ChatGPT Atlas — R04-browser-atlas

Browser lifecycle: **discontinued**. Browser platforms: macOS (historical shipping platform). [Catalog qualifications](<CATALOG.md#R04-browser-atlas>). Sources: [R04-T1](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>), [R04-T2](<https://openai.com/index/introducing-chatgpt-atlas/>), [R04-T3](<https://openai.com/index/building-chatgpt-atlas>).

- **lifecycle Details:** **currentStatus:** Retirement confirmed; exact shutdown day not established from the readable maker article<br>**launchedAt:** 2025-10-21<br>**retiredAt:** Not recorded<br>**sourceIds:** [R04-T1](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>), [R04-T2](<https://openai.com/index/introducing-chatgpt-atlas/>)
- **platform Qualifications:** **description:** Windows, iOS and Android were announced as future work at launch. Their shipment was not established by this research.<br>**sourceIds:** [R04-T2](<https://openai.com/index/introducing-chatgpt-atlas/>)

<a id="R04-feature-atlas-01"></a>

#### In-page Ask ChatGPT — R04-feature-atlas-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-context | macOS (historical) | historical | vendor-documented / high |

Historically, Ask ChatGPT supplied contextual assistance beside the current website, reducing the need to copy page material into a separate chat tab.

- **chrome Parity:** unassessed

Sources: [R04-T1](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>), [R04-T2](<https://openai.com/index/introducing-chatgpt-atlas/>).

Feature limitations:

- Atlas is retired; this is not currently supported functionality or a product recommendation.
- No historical or current runtime behavior was tested.

<a id="R04-feature-atlas-02"></a>

#### Optional browser memories — R04-feature-atlas-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-memory-controls | macOS (historical) | historical | vendor-documented / high |

The launch described optional browser memories that could be viewed or archived, with associated memories deleted through browsing-history deletion. The retirement article clarifies that Atlas browser memories are separate from ChatGPT memories and chat deletion does not remove Atlas-specific data.

- **chrome Parity:** unassessed

Sources: [R04-T1](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>), [R04-T2](<https://openai.com/index/introducing-chatgpt-atlas/>).

Feature limitations:

- Historical settings are not guaranteed accessible after retirement.
- Deletion linkage and storage behavior are vendor statements, not a tested erasure guarantee.

<a id="R04-feature-atlas-03"></a>

#### Per-site page visibility — R04-feature-atlas-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-controls | macOS (historical) | historical | vendor-documented / high |

An address-bar control historically excluded selected sites from ChatGPT page visibility and browser-memory creation, independently of globally enabling memories.

- **chrome Parity:** unassessed

Sources: [R04-T1](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>), [R04-T2](<https://openai.com/index/introducing-chatgpt-atlas/>).

Feature limitations:

- Retired-browser control is historical design evidence only.
- No per-site isolation, persistence or enforcement test was performed.

<a id="R04-feature-atlas-04"></a>

#### Agent mode in the browser — R04-feature-atlas-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-orchestration | macOS (historical preview) | historical | vendor-documented / high |

Agent mode launched in preview for Plus, Pro and Business with visible actions and pauses for certain sensitive sites. Business browser access was beta; Enterprise/Edu access required administrator enablement. Historical agent restrictions excluded browser code execution, downloads, extension installation and local filesystem or other-app access.

- **chrome Parity:** unassessed

Sources: [R04-T1](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>), [R04-T2](<https://openai.com/index/introducing-chatgpt-atlas/>).

Feature limitations:

- Both preview maturity and retirement apply; this is not a stable/current agent recommendation.
- Launch-time plan entitlements and safeguards were not tested and do not guarantee error-free actions.
- Windows, iOS and Android shipment was not established.

<a id="R04-feature-atlas-05"></a>

#### Ephemeral logged-out agent contexts — R04-feature-atlas-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-identity-controls | macOS (historical Atlas architecture) | historical | vendor-documented / high |

OWL&#39;s historical engineering account describes separate in-memory Chromium StoragePartitions for each logged-out agent session, discarded at completion instead of reusing the user&#39;s Incognito profile. It also describes routing agent input to web content rather than privileged browser shortcuts.

- **chrome Parity:** unassessed

Sources: [R04-T1](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>), [R04-T3](<https://openai.com/index/building-chatgpt-atlas>).

Feature limitations:

- Maker architecture prose, not source-code inspection or an isolation/erasure test.
- Atlas is retired and formerly preview-only behavior is not promoted to an active recommendation.

Browser limitations:

- The precise August 2026 shutdown day appeared only in discovery material and is not asserted as verified.
- All five feature entries are historical, including formerly preview-only agent mode.
- Retired browser tabs/history do not transfer automatically and recovery is not guaranteed; no data recovery was attempted.

<a id="R04-browser-comet"></a>

### Perplexity Comet — R04-browser-comet

Browser lifecycle: **active**. Browser platforms: Windows 10 or 11 (x64 and ARM64)<br>macOS 13 or later (Intel and Apple Silicon)<br>Android 12 or later<br>iOS. [Catalog qualifications](<CATALOG.md#R04-browser-comet>). Sources: [R04-C1](<https://www.perplexity.ai/help-center/comet/en/articles/11583798-what-is-comet-s-browser-engine.md>), [R04-C10](<https://www.perplexity.ai/changelog/what-we-shipped--march-27-2026>), [R04-C11](<https://www.perplexity.ai/help-center/comet/en/articles/11734737-comet-mobile-app.md>), [R04-C13](<https://www.perplexity.ai/comet>), [R04-C2](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>), [R04-C4](<https://www.perplexity.ai/help-center/comet/en/articles/12658082-control-what-comet-assistant-can-use.md>), [R04-C6](<https://www.perplexity.ai/help-center/en/articles/13531023-managing-comet-assistant-permissions.md>), [R04-C7](<https://www.perplexity.ai/changelog/what-we-shipped-october-3rd>), [R04-C8](<https://www.perplexity.ai/help-center/comet/en/articles/12875447-comet-for-android-quick-start-and-key-features.md>), [R04-C9](<https://www.perplexity.ai/hub/blog/meet-comet-for-ios>).

- **lifecycle Details:** **freeDesktopReleasePeriod:** October 2025<br>**iosLaunchEvidencePeriod:** March 2026<br>**sourceIds:** [R04-C10](<https://www.perplexity.ai/changelog/what-we-shipped--march-27-2026>), [R04-C7](<https://www.perplexity.ai/changelog/what-we-shipped-october-3rd>), [R04-C9](<https://www.perplexity.ai/hub/blog/meet-comet-for-ios>)
- **platform Qualifications:** **description:** Desktop docs exclude Linux and ChromeOS. Android automation requires the app to remain open. Mobile engines, detailed parity and iOS minimum version remain unestablished.<br>**sourceIds:** [R04-C2](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>), [R04-C8](<https://www.perplexity.ai/help-center/comet/en/articles/12875447-comet-for-android-quick-start-and-key-features.md>), [R04-C9](<https://www.perplexity.ai/hub/blog/meet-comet-for-ios>)

<a id="R04-feature-comet-01"></a>

#### Sidecar context with explicit tab mentions — R04-feature-comet-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-context | Windows desktop<br>macOS desktop | documented | vendor-documented / high |

Use the assistant alongside a page and add the current tab or tabs selected with @ mentions. The manual describes visible-text, headline and metadata extraction on each submitted request.

- **chrome Parity:** unassessed

Sources: [R04-C2](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>), [R04-C3](<https://www.perplexity.ai/help-center/comet/en/articles/11734688-assistant-panel.md>), [R04-C4](<https://www.perplexity.ai/help-center/comet/en/articles/12658082-control-what-comet-assistant-can-use.md>).

Feature limitations:

- Extraction completeness, permission enforcement and request-level data flow were not tested.
- Desktop panel documentation does not establish identical mobile UI or unlimited free concurrent work.

<a id="R04-feature-comet-02"></a>

#### Reusable query Shortcuts — R04-feature-comet-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-recipes | Windows desktop<br>macOS desktop; mobile parity unestablished | documented | vendor-documented / high |

Create reusable prompts with sources, models and search modes, combine or share shortcuts, and invoke them through slash selection in search or the sidecar. Shortcut composition is separate from explicit submission.

- **chrome Parity:** unassessed

Sources: [R04-C2](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>), [R04-C5](<https://www.perplexity.ai/help-center/comet/en/articles/11906981-comet-query-shortcuts.md>).

Feature limitations:

- The manual still labels an expanded shortcut library coming soon; library shipment is not assumed.
- Sharing or selecting a prompt is not authority to perform its actions. No shortcut was executed.
- Model/source availability and plan quotas were not audited.

<a id="R04-feature-comet-03"></a>

#### Parallel Background Assistants — R04-feature-comet-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-orchestration | Windows desktop<br>macOS desktop | limited | vendor-documented / high |

The October 2025 launch changelog assigns multiple simultaneous agentic tasks and one page for confirmations and follow-ups to Max subscribers.

- **chrome Parity:** unassessed

Sources: [R04-C2](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>), [R04-C7](<https://www.perplexity.ai/changelog/what-we-shipped-october-3rd>), [R04-C8](<https://www.perplexity.ai/help-center/comet/en/articles/12875447-comet-for-android-quick-start-and-key-features.md>).

Feature limitations:

- Max entitlement is supported at the dated announcement, not by a current quota or billing inspection.
- Android&#39;s guide explicitly limits automation to foreground use; desktop background behavior is not generalized to mobile.
- No concurrency, cancellation or completion test.

<a id="R04-feature-comet-04"></a>

#### Consumer and enterprise action controls — R04-feature-comet-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-controls | Documented Comet desktop and enterprise deployments; mobile policy parity unverified | limited | vendor-documented / high |

Consumer settings govern history/action access and site blocking. Enterprise admins can set Browser Control, Read Only or No Access by domain and control whether users may enable unconfirmed actions. Domain-specific rules are documented to override global assistant settings.

- **chrome Parity:** unassessed

Sources: [R04-C4](<https://www.perplexity.ai/help-center/comet/en/articles/12658082-control-what-comet-assistant-can-use.md>), [R04-C6](<https://www.perplexity.ai/help-center/en/articles/13531023-managing-comet-assistant-permissions.md>).

Feature limitations:

- Granular admin controls require Perplexity Enterprise and are not a consumer-wide entitlement claim.
- An allow/read domain exception can remain effective despite global disablement according to documentation; this is not a locally reproduced bypass.
- An unambiguous global stop and clear precedence are recommendation hypotheses, not established Chrome defects.

<a id="R04-feature-comet-05"></a>

#### Two-tab split view — R04-feature-comet-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| multitasking | Documented desktop UI; Windows/macOS shortcut parity unverified | documented | vendor-documented / high |

Open two tabs side by side through a tab/menu action, swap pane positions and separate them back into normal tabs. The manual also describes an Option-click shortcut.

- **chrome Parity:** unassessed

Sources: [R04-C12](<https://www.perplexity.ai/help-center/comet/en/articles/12324462-split-view-mode.md>), [R04-C2](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>).

Feature limitations:

- No evidence for more than two panes or mobile split-view parity.
- No focus, state-preservation or shortcut test was run.

<a id="R04-feature-comet-06"></a>

#### Mobile continuity and action visibility — R04-feature-comet-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-controls-and-continuity | iOS<br>Android 12 or later | limited | vendor-documented / high |

The iOS launch describes voice across open tabs and a conversation tied to page context across devices. Android documentation describes a visible AI-control border, step-by-step action review and automation only while the app remains open.

- **chrome Parity:** unassessed

Sources: [R04-C10](<https://www.perplexity.ai/changelog/what-we-shipped--march-27-2026>), [R04-C11](<https://www.perplexity.ai/help-center/comet/en/articles/11734737-comet-mobile-app.md>), [R04-C8](<https://www.perplexity.ai/help-center/comet/en/articles/12875447-comet-for-android-quick-start-and-key-features.md>), [R04-C9](<https://www.perplexity.ai/hub/blog/meet-comet-for-ios>).

Feature limitations:

- Features are platform-specific; the two mobile editions are not asserted to be identical.
- Older no-mobile help text is superseded by explicit launches. iOS engine/minimum version remain unestablished.
- No voice, synchronization, backgrounding or task-completion test.

Browser limitations:

- No AI actions, accounts or browser sessions were tested.
- Official mobile help pages are inconsistent and undated; explicit mobile launch and platform-specific documentation takes precedence.
- New-tab-page replacement extensions are excluded from the documented extension support.
- Background-assistant entitlement is dated evidence, not a fresh quota check.

<a id="R04-browser-dia"></a>

### Dia — R04-browser-dia

Browser lifecycle: **active**. Browser platforms: macOS<br>Windows. [Catalog qualifications](<CATALOG.md#R04-browser-dia>). Sources: [R04-A1](<https://arc.net/>), [R04-D1](<https://www.diabrowser.com/>), [R04-D2](<https://www.diabrowser.com/changelog>), [R04-D3](<https://www.diabrowser.com/security>), [R04-D4](<https://www.diabrowser.com/privacy>).

- **lifecycle Details:** **observedReleaseEntries:** **date:** 2026-11-19<br>**platform:** Windows<br>**version:** 1.7.0<br>**date:** 2026-11-19<br>**platform:** macOS<br>**version:** 1.58.0<br>**sourceIds:** [R04-D2](<https://www.diabrowser.com/changelog>)<br>**windowsLaunchAt:** 2026-10-06
- **platform Qualifications:** **description:** An original Mac-only beta description is obsolete, but individual features and connectors retain their own platform and rollout qualifications.<br>**sourceIds:** [R04-D1](<https://www.diabrowser.com/>), [R04-D2](<https://www.diabrowser.com/changelog>)

<a id="R04-feature-dia-01"></a>

#### Profiles and hierarchy — R04-feature-dia-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| workspaces-and-identity | macOS<br>Windows | documented | vendor-documented / high |

Profiles separate tabs, logins and AI context, with link-routing rules for incoming URLs. November 12 Mac and Windows entries describe tab groups nested up to eight levels and controls for opening links inside groups.

- **chrome Parity:** unassessed

Sources: [R04-D1](<https://www.diabrowser.com/>), [R04-D2](<https://www.diabrowser.com/changelog>).

Feature limitations:

- Profile isolation and rule enforcement were not tested; visual grouping is not automatically an identity boundary.
- Routing is first explicitly described in the November 5 Mac entry; complete release-by-release Windows parity is not asserted.

<a id="R04-feature-dia-02"></a>

#### Remembered split layouts — R04-feature-dia-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| multitasking | macOS<br>Windows; exact layout parity untested | documented | vendor-documented / medium |

Dia advertises simultaneous meeting/document views and remembered split layouts that can be reused for recurring meetings or focused work.

- **chrome Parity:** unassessed

Sources: [R04-D1](<https://www.diabrowser.com/>).

Feature limitations:

- Homepage description does not establish the first ship date, maximum pane count or restoration fidelity.
- No saved-layout interaction was exercised.

<a id="R04-feature-dia-03"></a>

#### Live Work and meeting context — R04-feature-dia-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| apps-and-context | macOS<br>Windows | limited | vendor-documented / high |

Live Work brings GitHub/Notion work surfaces and PR previews into tab organization; Better Meetings assembles meeting pages and related context. Morning Brief gathers work context, with November 19 entries adding estimated items read and contributing tools.

- **chrome Parity:** unassessed

Sources: [R04-D1](<https://www.diabrowser.com/>), [R04-D2](<https://www.diabrowser.com/changelog>).

Feature limitations:

- Requires relevant connected services and permissions; connector rollout and AI entitlements differ.
- The quality, completeness and accuracy of briefs or live previews were not measured.

<a id="R04-feature-dia-04"></a>

#### Contextual AI and reusable Skills — R04-feature-dia-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-context-and-recipes | macOS<br>Windows; Skills documented from 1.2.0 on 2026-10-15 | limited | vendor-documented / high |

Ask about the current page or explicitly mention tabs, and reuse custom Skills. The October 15 Windows release adds Skills matching the Mac experience. Connected applications have independent rollout stages.

- **chrome Parity:** unassessed

Sources: [R04-D2](<https://www.diabrowser.com/changelog>), [R04-D4](<https://www.diabrowser.com/privacy>).

Feature limitations:

- Figma is marked GA on November 12; Ashby/Dropbox are marked beta on October 29. This is not a blanket GA claim for every integration.
- Current paid AI quotas/prices were not established, and shared Skills may be hosted publicly if the user chooses to share them.
- No prompt, connector or AI task was executed.

<a id="R04-feature-dia-05"></a>

#### Queue and steer ongoing chat — R04-feature-dia-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-controls | macOS; documented in October 2026 entries<br>Windows; documented in 1.4.0 on 2026-10-29 | limited | vendor-documented / high |

Queue, edit, reorder or redirect messages during ongoing work. Mac notes distinguish steering without cancelling in-flight tools from Send now interruption; Windows October 29 notes document queued and steerable messages while preserving generated work.

- **chrome Parity:** unassessed

Sources: [R04-D2](<https://www.diabrowser.com/changelog>), [R04-D4](<https://www.diabrowser.com/privacy>).

Feature limitations:

- Chat access is subject to AI availability and unverified quotas.
- Cancellation, pause and committed-action semantics were not tested; wording in release notes is not proof that every side effect can be stopped or undone.

<a id="R04-feature-dia-06"></a>

#### Organization portability and control — R04-feature-dia-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| sessions-and-portability | macOS<br>Windows | documented | vendor-documented / high |

November 19 Mac and Windows entries document exporting tabs, profiles and groups to Markdown. Windows notes also describe inactive-tab archiving and customizable shortcuts; both platforms document natural-language tab-group operations.

- **chrome Parity:** unassessed

Sources: [R04-D2](<https://www.diabrowser.com/changelog>).

Feature limitations:

- Markdown export does not establish a complete round-trip importer, credential transfer or layout preservation.
- Archiving thresholds and shortcut parity differ by documented entry; AI-driven organization has separate entitlement limits.

Browser limitations:

- No hands-on tests or current entitlement audit.
- Figma is marked GA on November 12; Ashby and Dropbox are marked beta on October 29, not universally GA.
- Availability of Linux or mobile editions was not established.

<a id="R04-browser-floorp"></a>

### Floorp — R04-browser-floorp

Browser lifecycle: **maintenance**. Browser platforms: Windows<br>macOS<br>Linux. [Catalog qualifications](<CATALOG.md#R04-browser-floorp>). Sources: [R04-F1](<https://floorp.app/en>), [R04-F2](<https://blog.floorp.app/en/release/12.21.2/>), [R04-F3](<https://docs.floorp.app/docs/features/workspaces/>), [R04-F4](<https://docs.floorp.app/docs/features/split-view/>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>).

- **lifecycle Details:** **documentedVersion:** 12.21.2<br>**maintenanceType:** Temporary stabilization, not discontinuation<br>**pauseEndAt:** Not recorded<br>**releaseArticleDate:** 2026-11-13<br>**sourceIds:** [R04-F2](<https://blog.floorp.app/en/release/12.21.2/>)

<a id="R04-feature-floorp-01"></a>

#### Container-linked workspaces with archives — R04-feature-floorp-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| workspaces-and-identity | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

Assign a Firefox container to a workspace, archive its tab set and recover it from an archive view. Only one workspace is displayed per window; the documentation distinguishes shared workspace structures from individual tabs.

- **chrome Parity:** unassessed

Sources: [R04-F1](<https://floorp.app/en>), [R04-F2](<https://blog.floorp.app/en/release/12.21.2/>), [R04-F3](<https://docs.floorp.app/docs/features/workspaces/>).

Feature limitations:

- Behavior is documented as of 12.14.2; no archive or cross-window restoration test.
- The browser is in a temporary stabilization period, and background-tab data preservation is not independently guaranteed.

<a id="R04-feature-floorp-02"></a>

#### Up to four simultaneous panes — R04-feature-floorp-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| multitasking | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

Extend upstream Firefox split view with further subdivisions, arrangement controls and directional drag targets. The documented limit is four tabs at once as of Floorp 12.14.2.

- **chrome Parity:** unassessed

Sources: [R04-F1](<https://floorp.app/en>), [R04-F4](<https://docs.floorp.app/docs/features/split-view/>).

Feature limitations:

- The four-pane limit is version-qualified, not a claim about every future release.
- No usability, focus-order, minimum-size or performance test.

<a id="R04-feature-floorp-03"></a>

#### Any-site web panels — R04-feature-floorp-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| apps-and-panels | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

Register websites in a persistent sidebar for one-click compact split views. Individual web panels can use a chosen container, width, zoom level and mobile/desktop user-agent setting.

- **chrome Parity:** unassessed

Sources: [R04-F1](<https://floorp.app/en>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>).

Feature limitations:

- A mobile user agent does not guarantee that a site changes layout.
- Container enforcement, arbitrary-site compatibility and panel persistence were not tested.

<a id="R04-feature-floorp-04"></a>

#### Overlay/floating and unload controls — R04-feature-floorp-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| multitasking-and-resources | Windows<br>macOS<br>Linux | documented | vendor-documented / high |

Use sidebar panels as overlays or movable/resizable floating views, open them on hover, keep them resident or unload them when hidden. Internal tools and supported extension pages can also be exposed as panels.

- **chrome Parity:** unassessed

Sources: [R04-F1](<https://floorp.app/en>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>).

Feature limitations:

- Some extensions cannot be displayed in the sidebar.
- Unloading requires a later reload; form-state preservation and resource savings were not measured.

<a id="R04-feature-floorp-05"></a>

#### Integrated notes and desktop customization — R04-feature-floorp-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| apps-and-panels | Windows<br>macOS<br>Linux | documented | vendor-documented / medium |

Formatted notes and image attachments live in the Panel Sidebar and are documented to sync through Firefox Sync. The homepage also advertises web-app windows, UI customization and mouse gestures as desktop customization options.

- **chrome Parity:** unassessed

Sources: [R04-F1](<https://floorp.app/en>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>).

Feature limitations:

- Sync requires the relevant account setup; no cross-device synchronization or formatting test was run.
- Homepage customization claims do not establish detailed per-platform web-app or gesture parity.

Browser limitations:

- No local version measurement or stability test.
- Several manuals qualify behavior to 12.14.2 rather than the later release.
- Vendor-authored comparisons were not used to decide Chrome parity.

<a id="R04-browser-neon"></a>

### Opera Neon — R04-browser-neon

Browser lifecycle: **active**. Browser platforms: Windows<br>macOS. [Catalog qualifications](<CATALOG.md#R04-browser-neon>). Sources: [R04-N1](<https://www.operaneon.com/>), [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>).

- **lifecycle Details:** **currentOffering:** Free browser/basic Chat and paid built-in agentic capabilities<br>**initialAccess:** Paid invitations / Early Access<br>**launchedAt:** 2025-09-30<br>**sourceIds:** [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>)<br>**stableGraduationAt:** Not recorded
- **platform Qualifications:** **description:** Windows and Mac are verified in offering documentation; a mobile edition is future-facing in the FAQ, not established as shipped.<br>**sourceIds:** [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>)
- **channel Qualifications:** **description:** Retained 2025 sources describe invitations and Early Access. Broader 2026 access does not itself establish a stable-channel graduation date or production reliability.<br>**sourceIds:** [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>)

<a id="R04-feature-neon-01"></a>

#### Tasks as context boundaries — R04-feature-neon-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-context-and-workspaces | Windows<br>macOS | limited | vendor-documented / high |

Group related tabs, chats and requests into a self-contained Task. The shipping announcement describes an agent operating in that Task&#39;s context rather than accessing everything else in the browser.

- **chrome Parity:** unassessed

Sources: [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>).

Feature limitations:

- Context isolation is a vendor claim, not tested enforcement.
- Built-in agentic capabilities are subscription-limited; exact free Task-management scope was not established.
- Initial sources describe Early Access; no stable graduation date was established, and this is not a deployment recommendation.

<a id="R04-feature-neon-02"></a>

#### Neon Do control surface — R04-feature-neon-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-controls | Windows<br>macOS | limited | vendor-documented / high |

Display planned steps and live page actions, with pause, stop, takeover and redirection controls. Neon Do interacts in the local browser session while relying on cloud models for plans and instructions.

- **chrome Parity:** unassessed

Sources: [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>).

Feature limitations:

- Neon Do is a paid capability in the retained plan table; usage limits were not quantified.
- Stop/takeover and sensitive-action confirmations were not tested; already committed external actions may require separate treatment.
- Early Access history and residual prompt-injection risk prevent treating documentation as a stable safety guarantee.

<a id="R04-feature-neon-03"></a>

#### Composable Cards/decks — R04-feature-neon-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-recipes | Windows<br>macOS | limited | vendor-documented / high |

Create, combine and save reusable instruction Cards, organized into decks, to specify output formats or recurring workflows across Chat, Do and Research Agents.

- **chrome Parity:** unassessed

Sources: [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>).

Feature limitations:

- Skill Cards are listed in Standard; free-tier parity and library-wide quality were not established.
- Imported/shared instructions do not authorize actions. No Card was executed or published.
- Broader access is not proof of stable maturity for all agentic workflows.

<a id="R04-feature-neon-04"></a>

#### Different research execution modes — R04-feature-neon-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-research | Windows<br>macOS | limited | vendor-documented / high |

The FAQ distinguishes Deep Research, One-Minute Research and Local Research. Local Research uses logged-in browser context and location/preferences-informed search results rather than solely a remote research environment.

- **chrome Parity:** unassessed

Sources: [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>).

Feature limitations:

- Research is listed in Standard; specific quotas and model choices are volatile.
- Local browser context does not establish local-only inference or zero server retention.
- Research accuracy, task duration and stable maturity were not tested.

<a id="R04-feature-neon-05"></a>

#### Background creation — R04-feature-neon-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-orchestration | Windows<br>macOS<br>Vendor-hosted cloud execution for Make | limited | vendor-documented / high |

The Make launch description uses a cloud virtual machine to continue creating while the user is offline and return editable source files and shareable output links. Current Standard also lists generation and scheduled-task capabilities.

- **chrome Parity:** unassessed

Sources: [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>).

Feature limitations:

- Paid cloud capability, not offline local inference; no source/output export or scheduled-task test.
- Task success, ownership of generated material and current quota limits were not independently verified.
- Initial invitation/Early Access maturity is not silently upgraded to stable production readiness.

<a id="R04-feature-neon-06"></a>

#### External-agent interface — R04-feature-neon-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-controls-and-integration | Windows<br>macOS | documented | vendor-documented / high |

Expose the live Neon browser through an MCP server or Browser CLI. The FAQ describes read-only default MCP access with explicit permission for clicks/form filling. Current Free lists the browser, MCP/CLI setup and basic Chat; the August announcement distinguishes account-required MCP from accountless browsing/CLI.

- **chrome Parity:** unassessed

Sources: [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>).

Feature limitations:

- No external agent or personal browser session was connected; advertised defaults are not verified enforcement.
- Older universal paid/account-required FAQ text conflicts with newer access evidence.
- Free browser access does not make external models/services free or establish safe stable deployment of agentic actions.

Browser limitations:

- No connection, agent task, subscription or security test was run.
- Residual prompt-injection risk and defenses still being explored must remain separate from implemented safeguards.
- Model lineups and exact usage limits are volatile and were not verified as a compatibility promise.
- Current free/paid access is better supported than universal paid-only FAQ wording, but complete feature maturity remains unassessed.

<a id="R04-browser-shift"></a>

### Shift — R04-browser-shift

Browser lifecycle: **active**. Browser platforms: macOS<br>Windows. [Catalog qualifications](<CATALOG.md#R04-browser-shift>). Sources: [R04-H1](<https://shift.com/>), [R04-H2](<https://shift.com/spaces/>), [R04-H3](<https://shift.com/builder/>), [R04-H4](<https://shift.com/ai/>), [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>), [R04-H6](<https://shift.com/pricing/>), [R04-H7](<https://shift.com/security/>), [R04-H8](<https://shift.com/download/?platform=mac>), [R04-H9](<https://shift.com/app-integrated/>).

- **platform Qualifications:** **description:** Mac and Windows are explicitly named in the downloaded page HTML metadata. No Linux or mobile shipment is established here.<br>**sourceIds:** [R04-H8](<https://shift.com/download/?platform=mac>)

<a id="R04-feature-shift-01"></a>

#### Builder and templates — R04-feature-shift-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| browser-customization | macOS<br>Windows | documented | vendor-documented / high |

Rearrange the browser shell or start from a template, remove unused controls and hide apps or bars during focused work.

- **chrome Parity:** unassessed

Sources: [R04-H3](<https://shift.com/builder/>), [R04-H6](<https://shift.com/pricing/>), [R04-H8](<https://shift.com/download/?platform=mac>).

Feature limitations:

- Builder/templates are listed in Free, but no layout, accessibility or recovery test was performed.
- This concerns the current Shift Browser offering, not every legacy v9 workflow.

<a id="R04-feature-shift-02"></a>

#### Per-Space app/tool stacks — R04-feature-shift-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| workspaces-and-identity | macOS<br>Windows | limited | vendor-documented / high |

Build separate app, tab and extension sets for projects or profiles, with account context switching that avoids repeatedly signing out.

- **chrome Parity:** unassessed

Sources: [R04-H2](<https://shift.com/spaces/>), [R04-H6](<https://shift.com/pricing/>), [R04-H8](<https://shift.com/download/?platform=mac>).

Feature limitations:

- Free lists five Spaces and ten apps per Space; Advanced lists unlimited Spaces/apps.
- Documentation does not independently prove a complete isolation boundary or the behavior of external links.

<a id="R04-feature-shift-03"></a>

#### App-integrated work — R04-feature-shift-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| apps-and-notifications | macOS<br>Windows | limited | vendor-documented / medium |

Keep app stacks and simultaneous inboxes available in a persistent sidebar, switching between accounts of the same service. The maker advertises a catalog exceeding 4,500 apps.

- **chrome Parity:** unassessed

Sources: [R04-H2](<https://shift.com/spaces/>), [R04-H3](<https://shift.com/builder/>), [R04-H6](<https://shift.com/pricing/>), [R04-H8](<https://shift.com/download/?platform=mac>), [R04-H9](<https://shift.com/app-integrated/>).

Feature limitations:

- Catalog size and any-extension compatibility are vendor claims, not tested counts or universal support.
- Free app-count limits apply; simultaneous inboxes do not establish every service&#39;s notification or identity behavior.

<a id="R04-feature-shift-04"></a>

#### Explicit omnibox AI choice — R04-feature-shift-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| command-menu-and-ai-routing | macOS<br>Windows; exact shortcut parity untested | documented | vendor-documented / high |

An on-device intent router may suggest Ask AI, but the user selects the route: Tab starts AI while Enter continues to search or a URL. The launch article explains that automatic selection was rejected in favor of a hint.

- **chrome Parity:** unassessed

Sources: [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>), [R04-H8](<https://shift.com/download/?platform=mac>).

Feature limitations:

- The on-device component is described as an intent router, not proof of local-only AI inference.
- No intent-classification, accidental-routing or keybinding test was run.

<a id="R04-feature-shift-05"></a>

#### Visible, opt-in AI context — R04-feature-shift-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-context | macOS<br>Windows | limited | vendor-documented / high |

Selected text or page content appears as removable context chips in the AI input. The side panel can sit left or right, or expand into a dedicated conversation view while context remains user-controlled.

- **chrome Parity:** unassessed

Sources: [R04-H4](<https://shift.com/ai/>), [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>), [R04-H6](<https://shift.com/pricing/>), [R04-H8](<https://shift.com/download/?platform=mac>).

Feature limitations:

- General AI usage is limited in Free and expanded in Advanced, without numeric quotas established here.
- The specific opt-in explanation qualifies broad marketing about history-wide context; no data-flow or context-completeness test.

<a id="R04-feature-shift-06"></a>

#### Independent AI controls — R04-feature-shift-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-controls | macOS<br>Windows | documented | vendor-documented / high |

Disable AI Chat and Intelligent Omnibox independently from settings. The launch article distinguishes these shipped choices from future proactive suggestions and broader context improvements.

- **chrome Parity:** unassessed

Sources: [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>), [R04-H8](<https://shift.com/download/?platform=mac>).

Feature limitations:

- No persistence, re-enablement or enforcement test for either toggle.
- Future proactive features mentioned by the author are not counted as shipped behavior.

Browser limitations:

- Blocked release-note host prevented establishing the latest browser/engine version and security cadence.
- Current Shift Browser was not conflated with every older v9 feature description.
- No runtime, account-isolation or AI privacy test.

<a id="R04-browser-sidekick"></a>

### Sidekick — R04-browser-sidekick

Browser lifecycle: **discontinued**. Browser platforms: Windows (historical distributor listing; title-only evidence). [Catalog qualifications](<CATALOG.md#R04-browser-sidekick>). Sources: [R04-K1](<https://www.meetsidekick.com/>), [R04-K2](<https://appsumo.com/products/sidekick/>), [R04-K3](<https://apps.microsoft.com/detail/xp89dmjvg2wpz1?hl=en-GB&gl=MX>).

- **lifecycle Details:** **authority:** Distributor notice; original maker announcement not recovered<br>**reportedSunsetAt:** 2025-08-03<br>**sourceIds:** [R04-K1](<https://www.meetsidekick.com/>), [R04-K2](<https://appsumo.com/products/sidekick/>)
- **platform Qualifications:** **description:** A Windows listing title was retrieved; complete historical maker confirmation for Windows, Mac and Linux was not recovered.<br>**sourceIds:** [R04-K1](<https://www.meetsidekick.com/>), [R04-K3](<https://apps.microsoft.com/detail/xp89dmjvg2wpz1?hl=en-GB&gl=MX>)

<a id="R04-feature-sidekick-01"></a>

#### Persistent app sidebar and multiple app accounts — R04-feature-sidekick-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| apps-and-notifications | Historical desktop product; feature-specific OS matrix not recovered | historical | secondary-reported / medium |

Historical distributor copy describes a persistent sidebar for web apps and extensions, multiple app accounts and custom web apps.

- **chrome Parity:** unassessed

Sources: [R04-K1](<https://www.meetsidekick.com/>), [R04-K2](<https://appsumo.com/products/sidekick/>).

Feature limitations:

- Discontinued product; distributor marketing, not recovered maker documentation or a runtime test.
- Does not establish continuity of app-account isolation in Comet.

<a id="R04-feature-sidekick-02"></a>

#### Named sessions/workspaces — R04-feature-sidekick-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| sessions-and-portability | Historical desktop product; feature-specific OS matrix not recovered | historical | secondary-reported / medium |

Historical Sessions/workspace copy describes grouping, saving, reopening and switching tab sets for personal, professional or project contexts.

- **chrome Parity:** unassessed

Sources: [R04-K1](<https://www.meetsidekick.com/>), [R04-K2](<https://appsumo.com/products/sidekick/>).

Feature limitations:

- Unlimited sessions was a historical plan claim, not a current offer.
- No saved-session fidelity, export or Comet migration test.

<a id="R04-feature-sidekick-03"></a>

#### Unified search — R04-feature-sidekick-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| command-menu-and-search | Historical desktop product; feature-specific OS matrix not recovered | historical | secondary-reported / medium |

Distributor-hosted product copy describes searching contacts, documents, mail and chats across work surfaces from one address bar.

- **chrome Parity:** unassessed

Sources: [R04-K2](<https://appsumo.com/products/sidekick/>).

Feature limitations:

- Search scope, indexing model, permissions and supported services were not independently verified.
- Discontinued-product sales copy is design inspiration only.

<a id="R04-feature-sidekick-04"></a>

#### Split view — R04-feature-sidekick-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| multitasking | Historical desktop product; feature-specific OS matrix not recovered | historical | secondary-reported / medium |

Historical copy describes side-by-side documents, email and task lists in the browser&#39;s main screen.

- **chrome Parity:** unassessed

Sources: [R04-K2](<https://appsumo.com/products/sidekick/>).

Feature limitations:

- No pane count, layout persistence or platform parity established.
- Retained as historical distributor evidence, not supported current functionality.

<a id="R04-feature-sidekick-05"></a>

#### Focus tools — R04-feature-sidekick-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| focus-and-attention | Historical desktop product; feature-specific OS matrix not recovered | historical | secondary-reported / medium |

Historical productivity tools include muting notifications, redirecting distracting sites during work hours and keeping pinned tasks available across work surfaces.

- **chrome Parity:** unassessed

Sources: [R04-K2](<https://appsumo.com/products/sidekick/>).

Feature limitations:

- Scheduling, notification suppression and task persistence were not tested.
- The discontinued product is not recommended as an active focus solution.

Browser limitations:

- All five feature entries rely on historical distributor-hosted copy, not a recovered maker manual.
- No proof that Comet preserves Sidekick Sessions or account isolation.
- The unrelated sidekick.io extension is not this product.
- No current download or support test.

<a id="R04-browser-sigmaos"></a>

### SigmaOS — R04-browser-sigmaos

Browser lifecycle: **unknown**. Browser platforms: macOS. [Catalog qualifications](<CATALOG.md#R04-browser-sigmaos>). Sources: [R04-S1](<https://sigmaos.com/>), [R04-S2](<https://docs.sigmaos.com/common-questions>), [R04-S3](<https://docs.sigmaos.com/tutorial/workspaces>), [R04-S4](<https://docs.sigmaos.com/tutorial/split-screen>), [R04-S5](<https://docs.sigmaos.com/release-notes>), [R04-S6](<https://sigmaos.com/updates/1-17-0>), [R04-S7](<https://sigmaos.com/blog>).

- **lifecycle Details:** **currentMaintenanceStatus:** Unresolved<br>**documentedHistoricalVersion:** 1.17.0<br>**lastReleaseAt:** Not recorded<br>**sourceIds:** [R04-S5](<https://docs.sigmaos.com/release-notes>), [R04-S6](<https://sigmaos.com/updates/1-17-0>), [R04-S7](<https://sigmaos.com/blog>)
- **platform Qualifications:** **description:** The homepage says macOS only. Windows and iOS are coming-soon statements, not verified shipments.<br>**sourceIds:** [R04-S1](<https://sigmaos.com/>)

<a id="R04-feature-sigmaos-01"></a>

#### Tabs as tasks — R04-feature-sigmaos-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-organization | macOS | documented | vendor-documented / medium |

Treat vertical pages as tasks: mark them Done when complete, lock pages that should remain available, and undo accidental closures.

- **chrome Parity:** unassessed

Sources: [R04-S1](<https://sigmaos.com/>), [R04-S2](<https://docs.sigmaos.com/common-questions>).

Feature limitations:

- Advertised/documented behavior does not establish current maintenance or successful onboarding.
- Not an actively maintained-product recommendation; closure/undo was not tested.

<a id="R04-feature-sigmaos-02"></a>

#### Workspaces with optional separate cookies — R04-feature-sigmaos-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| workspaces-and-identity | macOS | documented | vendor-documented / medium |

Organize pages and web apps by project, optionally separate cookies to maintain multiple logins, create private workspaces and start from prefilled templates.

- **chrome Parity:** unassessed

Sources: [R04-S1](<https://sigmaos.com/>), [R04-S2](<https://docs.sigmaos.com/common-questions>), [R04-S3](<https://docs.sigmaos.com/tutorial/workspaces>).

Feature limitations:

- Current lifecycle is unresolved; no cookie-isolation or private-workspace test.
- Homepage now advertises unlimited Basic workspaces, conflicting with the older FAQ&#39;s paid limit; no legacy limit is treated as current.

<a id="R04-feature-sigmaos-03"></a>

#### Lazy Search and command filtering — R04-feature-sigmaos-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| command-menu | macOS | documented | vendor-documented / medium |

Space opens Lazy Search across pages, workspaces, tags and actions, while Cmd+K applies a commands-only filter. The same surface can jump to existing pages or create documents in supported tools.

- **chrome Parity:** unassessed

Sources: [R04-S1](<https://sigmaos.com/>), [R04-S2](<https://docs.sigmaos.com/common-questions>).

Feature limitations:

- Legacy documentation does not establish present integration availability or performance.
- Current browser maintenance remains unresolved.

<a id="R04-feature-sigmaos-04"></a>

#### Single-key and split semantics — R04-feature-sigmaos-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| command-menu-and-multitasking | macOS | documented | vendor-documented / medium |

Use single keys for Done and Focus, and a consistent Shift modifier to open links/searches or complete a page in the second pane. Shortcut priority can be changed when browser commands conflict with web apps.

- **chrome Parity:** unassessed

Sources: [R04-S2](<https://docs.sigmaos.com/common-questions>), [R04-S4](<https://docs.sigmaos.com/tutorial/split-screen>).

Feature limitations:

- The tutorial specifies two pages, not arbitrary multi-pane tiling.
- No keyboard-layout, accessibility or shortcut-conflict test; maintenance status is unresolved.

<a id="R04-feature-sigmaos-05"></a>

#### Quick Search and previews — R04-feature-sigmaos-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| multitasking | macOS | documented | vendor-documented / medium |

A temporary Quick Search workspace returns to the prior work context after the page is completed. Command-hover previews the destination behind a link without fully opening it.

- **chrome Parity:** unassessed

Sources: [R04-S1](<https://sigmaos.com/>), [R04-S3](<https://docs.sigmaos.com/tutorial/workspaces>).

Feature limitations:

- No preview-state or return-navigation test was run.
- Still-advertised features are not proof of current maintenance.

<a id="R04-feature-sigmaos-06"></a>

#### Airis context interaction — R04-feature-sigmaos-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-context | macOS | limited | vendor-documented / medium |

Airis advertises Ask Anything, natural-language page finding, contextual explanations, multi-page Look it up research and interactive Simplify summaries.

- **chrome Parity:** unassessed

Sources: [R04-S1](<https://sigmaos.com/>), [R04-S6](<https://sigmaos.com/updates/1-17-0>).

Feature limitations:

- Basic advertises limited Airis; homepage Pro/Max advertise greater usage at $20/$30 monthly, with currency and actual fulfillment unverified.
- AI service operation, model availability, task quality and current maintenance remain unresolved.
- Historical model mentions do not establish a current model catalog.

Browser limitations:

- A live sales page is not proof of active maintenance; stale documentation is not proof of shutdown.
- No account creation, backend call or binary test was performed.
- Current support and subscription fulfillment remain unknown.

<a id="R04-browser-wavebox"></a>

### Wavebox — R04-browser-wavebox

Browser lifecycle: **active**. Browser platforms: macOS<br>Windows<br>Linux. [Catalog qualifications](<CATALOG.md#R04-browser-wavebox>). Sources: [R04-W1](<https://wavebox.io/>), [R04-W2](<https://wavebox.io/platform>), [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>), [R04-W4](<https://wavebox.io/pricing>), [R04-W5](<https://wavebox.io/download>), [R04-W6](<https://hub.wavebox.io/tag/releases/>).

- **lifecycle Details:** **documentedVersion:** 155.3.12<br>**isLatestVersionEstablished:** false<br>**releaseArticleDate:** 2026-10-08<br>**sourceIds:** [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>)

<a id="R04-feature-wavebox-01"></a>

#### Explicit organization layers — R04-feature-wavebox-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| workspaces-and-identity | macOS<br>Windows<br>Linux | documented | vendor-documented / high |

Cookie-isolated Spaces contain Groups with individual tab strips and persistent Apps. Separate full Profiles have their own webdock and settings, making the hierarchy distinguish grouping from stronger isolation.

- **chrome Parity:** unassessed

Sources: [R04-W2](<https://wavebox.io/platform>), [R04-W4](<https://wavebox.io/pricing>), [R04-W5](<https://wavebox.io/download>).

Feature limitations:

- Basic is limited to two groups and two spaces; broader use has paid-plan boundaries.
- Actual isolation was not tested. Additional conceptual overhead is a hypothesis, not a measured usability result.

<a id="R04-feature-wavebox-02"></a>

#### Multi-account app presence — R04-feature-wavebox-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| apps-and-notifications | macOS<br>Windows<br>Linux | documented | vendor-documented / high |

Persistent app tabs expose unread badges, tooltips and custom notification sounds across multiple accounts. The Mini menu consolidates incoming work from webmail, messaging and collaboration tools.

- **chrome Parity:** unassessed

Sources: [R04-W1](<https://wavebox.io/>), [R04-W2](<https://wavebox.io/platform>), [R04-W4](<https://wavebox.io/pricing>), [R04-W5](<https://wavebox.io/download>).

Feature limitations:

- App integrations are enhanced web tabs, not necessarily native applications or complete service integrations.
- Notification accuracy, isolation and delivery were not tested; Basic plan limits apply.

<a id="R04-feature-wavebox-03"></a>

#### Resizable splits and multiple windows — R04-feature-wavebox-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| multitasking | macOS<br>Windows<br>Linux | documented | vendor-documented / medium |

Split apps or tabs into resizable pages and use multiple windows, including simultaneous work in two accounts of the same service, such as separate calendars.

- **chrome Parity:** unassessed

Sources: [R04-W1](<https://wavebox.io/>), [R04-W5](<https://wavebox.io/download>).

Feature limitations:

- Maximum pane count, saved-layout restoration and edition entitlements were not established.
- Vendor productivity language is not a measured time saving.

<a id="R04-feature-wavebox-04"></a>

#### Brainbox and Chat with Settings — R04-feature-wavebox-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-controls | macOS<br>Windows<br>Linux | limited | vendor-documented / high |

Brainbox offers contextual skills and selectable AI. Chat with Settings is a persistent setup conversation that can change browser settings and is available within Settings as well as chat history; it is described as free and outside Brainbox token allowances. The homepage says AI can be disabled.

- **chrome Parity:** unassessed

Sources: [R04-W1](<https://wavebox.io/>), [R04-W2](<https://wavebox.io/platform>), [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>), [R04-W5](<https://wavebox.io/download>).

Feature limitations:

- The free settings-chat exception does not establish unlimited general Brainbox use or a current model catalog.
- Settings mutation authority, confirmations, rollback and AI-disable enforcement were not tested.

<a id="R04-feature-wavebox-05"></a>

#### Navigator resource overview — R04-feature-wavebox-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| resource-management | macOS<br>Windows<br>Linux | documented | vendor-documented / high |

Navigator provides Spaces, List and Map views, with memory-sized Space tiles, CPU/memory sorting, extension resource usage and time/resource insights by work context and date range.

- **chrome Parity:** unassessed

Sources: [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>), [R04-W5](<https://wavebox.io/download>).

Feature limitations:

- Documented in release 155.3.12; metric correctness, overhead and current plan entitlement were not measured.
- No conclusion about superiority to Chrome&#39;s existing performance tools.

<a id="R04-feature-wavebox-06"></a>

#### Work continuity and team templates — R04-feature-wavebox-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| sessions-and-portability | macOS<br>Windows<br>Linux | limited | vendor-documented / high |

Synced Profiles and Wavebox Live distribute prepared app/group setups and updates to teams. Dashboards and persistent Smart Note checklists supplement the browser&#39;s work context.

- **chrome Parity:** unassessed

Sources: [R04-W2](<https://wavebox.io/platform>), [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>), [R04-W4](<https://wavebox.io/pricing>), [R04-W5](<https://wavebox.io/download>).

Feature limitations:

- Sync, Pro and team deployment have separate account/data/entitlement boundaries; exact paid rates were not recovered.
- No template deployment, synchronization, permission or checklist-restart test.

Browser limitations:

- No runtime testing; enhanced web tabs are not necessarily native applications.
- The organization hierarchy can add conceptual overhead; this is a design hypothesis, not measured usability.
- AI, Sync and team deployment have distinct data and entitlement boundaries; AI-disable behavior is vendor-documented only.

<a id="R04-browser-zen"></a>

### Zen Browser — R04-browser-zen

Browser lifecycle: **active**. Browser platforms: macOS<br>Windows<br>Linux. [Catalog qualifications](<CATALOG.md#R04-browser-zen>). Sources: [R04-Z1](<https://zen-browser.app/>), [R04-Z2](<https://zen-browser.app/download>), [R04-Z3](<https://zen-browser.app/release-notes>), [R04-Z4](<https://docs.zen-browser.app/user-manual/workspaces>), [R04-Z5](<https://docs.zen-browser.app/user-manual/glance>).

- **lifecycle Details:** **documentedVersion:** 1.24.3b<br>**releaseDate:** Not recorded<br>**sourceIds:** [R04-Z3](<https://zen-browser.app/release-notes>)
- **channel Qualifications:** **description:** Twilight is explicitly pre-release and may contain unfinished features. The b suffix alone was not used to infer identical maturity for every channel.<br>**sourceIds:** [R04-Z3](<https://zen-browser.app/release-notes>)

<a id="R04-feature-zen-01"></a>

#### Workspace-default containers — R04-feature-zen-01

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| workspaces-and-identity | macOS<br>Windows<br>Linux | documented | vendor-documented / high |

Assign cookie/session containers to a workspace, customize its identity, and optionally route new container tabs to the workspace using that default container.

- **chrome Parity:** unassessed

Sources: [R04-Z2](<https://zen-browser.app/download>), [R04-Z4](<https://docs.zen-browser.app/user-manual/workspaces>).

Feature limitations:

- Container separation is narrower than a full profile boundary.
- No account-isolation or automatic-routing test was run.

<a id="R04-feature-zen-02"></a>

#### Glance previews — R04-feature-zen-02

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| multitasking | macOS<br>Windows<br>Linux | documented | vendor-documented / high |

Preview a linked website above the current tab, then dismiss it, promote it to a new tab or turn it into a split. Trigger modifiers are configurable, with special behavior for external links in Essentials and pinned tabs.

- **chrome Parity:** unassessed

Sources: [R04-Z2](<https://zen-browser.app/download>), [R04-Z5](<https://docs.zen-browser.app/user-manual/glance>).

Feature limitations:

- No preview focus, form-state or keyboard-navigation test was performed.
- Manual descriptions, rather than the less precise homepage summary, define the behavior here.

<a id="R04-feature-zen-03"></a>

#### Split interaction shortcuts — R04-feature-zen-03

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| multitasking | macOS<br>Windows<br>Linux | documented | vendor-documented / medium |

Join tabs using modifier-click or drag interactions and separate them through explicit split/un-split commands, making the layout transition part of tab management.

- **chrome Parity:** unassessed

Sources: [R04-Z1](<https://zen-browser.app/>), [R04-Z2](<https://zen-browser.app/download>), [R04-Z3](<https://zen-browser.app/release-notes>).

Feature limitations:

- Living release log includes several iterations of shortcuts and layout behavior; a precise first-ship date was not established.
- No current-platform interaction test or pane-limit claim.

<a id="R04-feature-zen-04"></a>

#### Command surface — R04-feature-zen-04

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| command-menu | macOS<br>Windows<br>Linux | documented | vendor-documented / medium |

Search tabs and folders, scope search to a Space, and invoke actions such as new Space, reset pinned tab, duplicate tab or reopen closed tab from the command surface.

- **chrome Parity:** unassessed

Sources: [R04-Z2](<https://zen-browser.app/download>), [R04-Z3](<https://zen-browser.app/release-notes>).

Feature limitations:

- Documented command additions are not a measured discoverability or performance improvement.
- No keybinding-conflict test or exact per-command release date was established.

<a id="R04-feature-zen-05"></a>

#### Live folders and link routing — R04-feature-zen-05

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| apps-and-context | macOS<br>Windows<br>Linux | documented | vendor-documented / medium |

Populate folders from GitHub issues, pull requests or RSS feeds, and use Space Routing to send incoming links into a selected work context.

- **chrome Parity:** unassessed

Sources: [R04-Z2](<https://zen-browser.app/download>), [R04-Z3](<https://zen-browser.app/release-notes>).

Feature limitations:

- Release notes record fixes for changing GitHub interfaces; integration reliability was not tested.
- Source account access and routing precedence require separate runtime assessment.

<a id="R04-feature-zen-06"></a>

#### Structure-aware continuity — R04-feature-zen-06

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| sessions-and-portability | macOS<br>Windows<br>Linux | limited | vendor-documented / medium |

Sync Spaces, folders and tabs through a Mozilla account, optionally including normal tabs; share structured collections and split views by link; use documented cross-platform local profile backups.

- **chrome Parity:** unassessed

Sources: [R04-Z2](<https://zen-browser.app/download>), [R04-Z3](<https://zen-browser.app/release-notes>).

Feature limitations:

- A Mozilla account and opt-in are required for the described sync; initial enablement merges local and cloud Spaces.
- Earlier window sync was marked experimental. This conversion does not imply all sync features or old limitations are stable/resolved.
- No backup, restore, sharing or conflict-resolution test was run.

Browser limitations:

- Documentary coverage only; exact per-feature release dates were not reliably extracted.
- Cookie containers do not separate history or extensions.
- Initial Spaces sync merges state; earlier window sync was experimental. The research did not prove that every old limitation was resolved.
- Little Zen is not one of the six counted features because its standalone ship date was unresolved.

Lane limitations:

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

## R05 — Mobile and regional browsers: documented capabilities and Chrome investigation candidates

Saved scope: Samsung Browser, Cromite, GrapheneOS Vanadium, Firefox Focus, Via, Quetta, Kiwi Browser, Aloha, Yandex Browser, and UC Browser. Documentary snapshot of mobile capabilities, regional editions, engine evidence, distribution and lifecycle. Chrome Android and iOS baseline comparison belongs to R01 and has not been performed in this lane.. Shard: [R05](<data/lanes/R05.json>). Status: complete.

<a id="R05-B-aloha"></a>

### Aloha — R05-B-aloha

Browser lifecycle: **active**. Browser platforms: Android<br>iPhone and iPad; US publisher record requires iOS 16+<br>Windows 64-bit advertised download<br>macOS Intel and Apple silicon advertised downloads<br>Linux deb/rpm advertised downloads. [Catalog qualifications](<CATALOG.md#R05-B-aloha>). Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-L01](<https://alohabrowser.com/>), [R05-L02](<https://alohabrowser.com/posts-aloha-core-i-love-and-hate-you>), [R05-L03](<https://apps.apple.com/us/app/aloha-browser-private-vpn/id1105317682>), [R05-L04](<https://alohabrowser.com/download.html>).

<a id="R05-F-aloha-access-locks"></a>

#### Passcode and biometric access controls — R05-F-aloha-access-locks

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| local-storage-and-access | Android mobile offering<br>iOS mobile offering; publisher-described biometric/passcode workflows | documented | vendor-documented / high |

Product and iOS publisher descriptions document locking tabs or the application and access to sensitive stored files using passcode/biometric workflows. The exact protected surface and edition are relevant to the scope of each lock.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-L01](<https://alohabrowser.com/>).

Feature limitations:

- Authentication fallback, storage encryption, backup behavior and app-switcher previews were not tested. Documentation does not establish identical lock surfaces on every desktop and mobile edition.

<a id="R05-F-aloha-media"></a>

#### Download and media workspace with iPad controls — R05-F-aloha-media

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| media-and-downloads | Android mobile offering<br>iPhone and iPad; movable toolbar specifically iPad | limited | vendor-documented / high |

Aloha documents downloads, background playback and file organization. The iOS publisher record also describes a movable iPad video toolbar. Wi-Fi sharing and archive-related facilities appear in its paid-plan description rather than being assumed part of every free edition.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-L01](<https://alohabrowser.com/>).

Feature limitations:

- Downloads, offline playback, sharing, archive support and plan entitlements were not tested. Media-site restrictions and exact desktop/mobile boundaries remain unresolved; a saved link is not proof of an offline media file.

<a id="R05-F-aloha-navigation-controls"></a>

#### Ad blocking, HTTPS lock and redirect controls — R05-F-aloha-navigation-controls

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-filtering-and-navigation | Android mobile offering<br>iOS mobile offering | documented | vendor-documented / high |

Aloha&#39;s mobile product offering advertises ad blocking, tracking-related controls, HTTPS lock and redirect blocking. These are specific navigation and filtering controls, without independently measured effectiveness.

Sources: [R05-L01](<https://alohabrowser.com/>).

Feature limitations:

- Per-edition defaults, exception handling and protection coverage were not tested. General product copy is not a complete version/platform compatibility matrix or proof of anonymity.

<a id="R05-F-aloha-sync"></a>

#### Account-linked bookmark and tab synchronization — R05-F-aloha-sync

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| synchronization | iOS; synchronization with Aloha-account-linked devices | limited | vendor-documented / high |

The iOS publisher description advertises bookmark and tab synchronization between devices linked to an Aloha account. This documents an account/service dependency rather than local-file portability or account-free data transfer.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>).

Feature limitations:

- No account or sync test was performed. Exact supported device pairings, fields, conflicts, retention and cryptographic guarantees were not established; complete Android/iOS/desktop data parity is not inferred.

<a id="R05-F-aloha-vpn"></a>

#### Browser-integrated VPN with a separate Premium scope — R05-F-aloha-vpn

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| network-services | Android mobile offering<br>iOS mobile offering; US publisher plan description | limited | vendor-documented / high |

Aloha advertises a free browser-integrated VPN tier. Its paid-plan description adds device-wide protection, richer location selection and automatic start. These plan boundaries matter independently of the shared VPN label.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-L01](<https://alohabrowser.com/>).

Feature limitations:

- Routing scope, connection failures, regions, free-tier server choice and every platform/plan boundary were not tested. No-log, anonymity, audit and speed claims remain unverified vendor assertions; Incognito is not a VPN.

Browser limitations:

- No application, network routing, cryptography, no-log or claimed audit verification. Desktop/mobile feature boundaries, region availability and free-tier server selection are not fully resolved.
- Paid device-wide VPN scope differs from free browser-integrated access. Incognito and network routing are different mechanisms.
- An open-source Android core does not establish that the entire browser or its iOS implementation is open source.

<a id="R05-B-cromite"></a>

### Cromite — R05-B-cromite

Browser lifecycle: **active**. Browser platforms: Android 10+ ARM32<br>Android 10+ ARM64<br>Android 10+ x86-64<br>Windows 64-bit<br>Linux 64-bit. [Catalog qualifications](<CATALOG.md#R05-B-cromite>). Sources: [R05-C01](<https://raw.githubusercontent.com/uazo/cromite/master/README.md>), [R05-C02](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FEATURES.md>), [R05-C03](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FAQ.md>), [R05-C04](<https://api.github.com/repos/uazo/cromite>), [R05-C05](<https://api.github.com/repos/uazo/cromite/releases/latest>), [R05-C06](<https://raw.githubusercontent.com/uazo/cromite/11507ac1061b5ea227806f5e84db5a57df6ccf6a/build/patches/Experimental-support-for-extensions-on-Android.patch>), [R05-C07](<https://api.github.com/repos/uazo/cromite/issues/comments/5679359966>).

<a id="R05-F-cromite-experimental-extensions"></a>

#### Experimental default-off Android-extension implementation — R05-F-cromite-experimental-extensions

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| extensions | Android; release-pinned source implementation | limited | source-inspected / high |

The source pinned to the observed September 2026 release contains an experimental Android-extension patch whose description says the feature is disabled by default. The release-linked maintainer changelog also discusses extension fixes. The mutable FAQ still says Android extensions are unsupported, so the defensible result is qualified source-evidenced experimentation.

Sources: [R05-C03](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FAQ.md>), [R05-C05](<https://api.github.com/repos/uazo/cromite/releases/latest>), [R05-C06](<https://raw.githubusercontent.com/uazo/cromite/11507ac1061b5ea227806f5e84db5a57df6ccf6a/build/patches/Experimental-support-for-extensions-on-Android.patch>), [R05-C07](<https://api.github.com/repos/uazo/cromite/issues/comments/5679359966>).

Feature limitations:

- Patch presence is not proof that every release artifact exposes a working host or supports every extension. No binary, popup, permissions, private-mode isolation or background-resume test was run.
- The patch-header date is 2025-11-06; it is not a verified rollout date. The FAQ conflict remains unresolved, and individual patch licenses require review before reuse.

<a id="R05-F-cromite-filtering"></a>

#### Integrated filtering with CNAME and worker coverage — R05-F-cromite-filtering

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-filtering | Android; mobile scope of this record | documented | vendor-documented / high |

Cromite documents built-in ad blocking. Its FAQ describes CNAME-related filtering and worker coverage, and says Acceptable Ads was removed. These are filtering-design statements; they do not establish that every advertisement or tracker is blocked.

Sources: [R05-C01](<https://raw.githubusercontent.com/uazo/cromite/master/README.md>), [R05-C03](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FAQ.md>).

Feature limitations:

- No filter coverage, breakage or release-binary behavior was measured. Current desktop parity and list-update behavior are not established by this mobile record.

<a id="R05-F-cromite-local-data"></a>

#### Local bookmark portability and Android integration — R05-F-cromite-local-data

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| data-portability-and-interface | Android | documented | vendor-documented / high |

Android features include bookmark import/export, bookmarking all open tabs, native Android autofill and configurable navigation placement. Local bookmark movement is distinct from a mandatory account-backed synchronization service.

Sources: [R05-C02](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FEATURES.md>).

Feature limitations:

- No import/export round-trip, format-fidelity, autofill-provider or layout test was run. The cited list is mutable and is not a verified version-by-version compatibility matrix.

<a id="R05-F-cromite-scripts"></a>

#### Android user scripts — R05-F-cromite-scripts

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| programmability | Android | documented | vendor-documented / high |

The Cromite feature list separately documents Android user-script support. User scripts and a general browser-extension host are different capabilities; the script listing alone does not establish browser-wide extension APIs or native messaging.

Sources: [R05-C02](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FEATURES.md>).

Feature limitations:

- Execution timing, permissions, update behavior and script compatibility were not tested. No iOS implementation or automatic Chrome installation route is established.

<a id="R05-F-cromite-sessions"></a>

#### Always-incognito and session-retention controls — R05-F-cromite-sessions

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy-and-sessions | Android | documented | vendor-documented / high |

The feature list documents Android always-incognito behavior together with data-clearing and session-retention controls. These settings make session lifetime an explicit product choice rather than merely an individual private-tab action.

Sources: [R05-C02](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FEATURES.md>).

Feature limitations:

- No erase, restart, crash recovery, cookie isolation or thumbnail/previews test was performed. Documentation does not establish server-side deletion or network-address concealment.

<a id="R05-F-cromite-site-controls"></a>

#### Per-site execution and privacy controls — R05-F-cromite-site-controls

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| site-controls-and-execution | Android; mobile scope of this record | documented | vendor-documented / high |

Documented controls include JIT disabled by default with exceptions, plus scripting, autoplay, cookie and blocking settings. The project explicitly describes its anti-fingerprinting mitigations as incomplete. Execution policy and ordinary site preferences have different compatibility and implementation costs.

Sources: [R05-C01](<https://raw.githubusercontent.com/uazo/cromite/master/README.md>), [R05-C02](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FEATURES.md>), [R05-C03](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FAQ.md>).

Feature limitations:

- JIT-off performance, WebAssembly behavior, exception persistence and site compatibility were not tested. Disabled Safe Browsing, Google Sync/Translate, DRM and other integrations are documented tradeoffs, not uniformly beneficial privacy or security changes.

Browser limitations:

- Active source development does not establish binary patch timeliness or extension compatibility; no installed version tested. No iOS/macOS build established.
- Docs disable Google Sync/Translate, DRM, Safe Browsing and other cloud-backed capabilities; those tradeoffs are not universal improvements. Fingerprinting mitigations are incomplete; JIT-off may affect compatibility/performance.
- Patch licenses vary. The Bromite lineage is documented, but this lane did not establish an original Bromite EOL date.

<a id="R05-B-focus"></a>

### Firefox Focus — R05-B-focus

Browser lifecycle: **active**. Browser platforms: Android<br>iPhone and iPad; US publisher record requires iOS 15+. [Catalog qualifications](<CATALOG.md#R05-B-focus>). Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-F01](<https://www.firefox.com/en-US/mobile/focus/>), [R05-F02](<https://hacks.mozilla.org/2018/09/focus-with-geckoview/>), [R05-F03](<https://github.com/mozilla-mobile/focus-android>), [R05-F04](<https://github.com/mozilla-mobile/firefox-android>), [R05-F05](<https://github.com/mozilla-mobile/focus-ios>), [R05-F06](<https://github.com/mozilla-mobile/firefox-ios>), [R05-F07](<https://raw.githubusercontent.com/mozilla-mobile/firefox-ios/9e923b05c99b2b0e19c6cadf198b222acf1ddb5b/focus-ios/Blockzilla/Modules/WebView/LegacyWebViewController.swift>), [R05-F08](<https://apps.apple.com/us/app/firefox-focus-privacy-browser/id1055677337>).

<a id="R05-F-focus-erase"></a>

#### One-action local session disposal — R05-F-focus-erase

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy-and-sessions | Android<br>iPhone and iPad | documented | vendor-documented / high |

Mozilla describes a conspicuous erase control for browsing history, cookies and related local session data. The iOS publisher record reinforces this disposable-session workflow.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-F01](<https://www.firefox.com/en-US/mobile/focus/>).

Feature limitations:

- No test checked cookies, storage, restoration, previews or relaunch after erase. Local deletion does not delete server records or hide the device&#39;s network address; Android and iOS engine/session implementations differ.

<a id="R05-F-focus-search-first"></a>

#### Search-first minimal iOS interface — R05-F-focus-search-first

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| interface | iPhone and iPad; US publisher record | documented | vendor-documented / high |

The US iOS publisher description emphasizes opening directly to the address/search field and keyboard without a normal persistent-tab workspace. This is an iOS product description rather than a statement about Android tab behavior or full Firefox.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-F08](<https://apps.apple.com/us/app/firefox-focus-privacy-browser/id1055677337>).

Feature limitations:

- No launch, keyboard or restoration behavior was tested. Full Firefox synchronization, extensions and desktop-style tabs must not be attributed to Focus from shared branding or a shared repository.

<a id="R05-F-focus-shortcuts"></a>

#### Up to four pinned shortcuts — R05-F-focus-shortcuts

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| navigation | Android<br>iPhone and iPad | documented | vendor-documented / high |

Mozilla&#39;s product page and the iOS publisher description document up to four pinned shortcuts for quick access within Focus&#39;s limited browsing workspace. This is a bounded shortcut feature rather than a full bookmark/session-management claim.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-F01](<https://www.firefox.com/en-US/mobile/focus/>).

Feature limitations:

- Shortcut persistence, deletion semantics and exact per-build behavior were not tested. Source documents do not establish parity with full Firefox bookmarks or account synchronization.

<a id="R05-F-focus-tracking"></a>

#### Tracking protection enabled by default — R05-F-focus-tracking

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-filtering | Android<br>iPhone and iPad | documented | vendor-documented / high |

The product page documents default blocking of common tracking categories and associated advertising resources. The documented capability is tracking protection, not a guarantee to block all advertisements or identifiers.

Sources: [R05-F01](<https://www.firefox.com/en-US/mobile/focus/>).

Feature limitations:

- Blocking coverage, website compatibility and network behavior were not measured. The challenged iOS support-page retrieval establishes no current Safari-integration feature.

Browser limitations:

- Source and publisher observations only; neither installed release nor erase completeness was tested. The inspected iOS commit was not mapped to each store binary.
- Full Firefox extensions, synchronization and desktop tabs must not be attributed to Focus. The challenged iOS support page supplied no verified Safari-integration feature evidence.
- Deleting local session data does not delete server records or hide a network address. iOS minimal-UI wording must not be substituted for Android tab behavior.

<a id="R05-B-kiwi"></a>

### Kiwi Browser — R05-B-kiwi

Browser lifecycle: **discontinued**. Browser platforms: Android; historical discontinued product. [Catalog qualifications](<CATALOG.md#R05-B-kiwi>). Sources: [R05-K01](<https://github.com/kiwibrowser/src.next>), [R05-K02](<https://github.com/kiwibrowser/src>).

<a id="R05-F-kiwi-bottom-bar"></a>

#### Historical bottom address bar — R05-F-kiwi-bottom-bar

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| interface | Android; historical Kiwi releases | historical | vendor-documented / high |

Kiwi&#39;s historical Android feature list documents a bottom address bar, a touch-oriented control-placement choice. The discontinued product can inform design investigation without being treated as an active distribution recommendation.

Sources: [R05-K01](<https://github.com/kiwibrowser/src.next>), [R05-K02](<https://github.com/kiwibrowser/src>).

Feature limitations:

- No usability, accessibility, keyboard-inset or current Chrome parity test was run. Old build instructions and up-to-date language are superseded by the maintenance-ending notice.

<a id="R05-F-kiwi-extensions"></a>

#### Historical Android Chrome-extension host — R05-F-kiwi-extensions

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| extensions | Android; historical Kiwi releases | historical | vendor-documented / high |

Kiwi&#39;s historical repository documents Chrome-extension support in an Android Chromium browser. The later maintainer notice says maintenance ended after January 2025, so this is an implementation reference rather than a recommendation to install a maintained current binary.

Sources: [R05-K01](<https://github.com/kiwibrowser/src.next>), [R05-K02](<https://github.com/kiwibrowser/src>).

Feature limitations:

- No historical or current extension compatibility was tested. Code integration into an Edge development version is not evidence of current stable Edge capabilities, acquisition or iOS support; licensing and maintenance burden require separate assessment.

<a id="R05-F-kiwi-night-mode"></a>

#### Historical browser night mode — R05-F-kiwi-night-mode

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| interface | Android; historical Kiwi releases | historical | vendor-documented / high |

The historical Kiwi README describes a night-mode implementation distinct from the contemporary Chromium implementation. Its significance is a documented historical interface choice, not a current comparative quality result.

Sources: [R05-K01](<https://github.com/kiwibrowser/src.next>), [R05-K02](<https://github.com/kiwibrowser/src>).

Feature limitations:

- Maintenance ended after January 2025. Contrast, rendering fidelity and compatibility were not tested; the comparison is historical and says nothing about current Chrome behavior.

Browser limitations:

- No installed Kiwi binary or current Edge edition tested. Historical up-to-date language and build instructions do not establish a maintained current product.
- Exact notice-publication date and final maintenance day were not established. No iOS product or portability evidence was found in the cited sources; licensing and maintenance costs require separate review before source reuse.

<a id="R05-B-quetta"></a>

### Quetta — R05-B-quetta

Browser lifecycle: **active**. Browser platforms: Android<br>iPhone and iPad; US publisher record requires iOS 17+<br>Windows advertised product route<br>macOS advertised product route. [Catalog qualifications](<CATALOG.md#R05-B-quetta>). Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-Q01](<https://play.google.com/store/apps/details?id=net.quetta.browser&hl=en>), [R05-Q02](<https://www.quetta.net/features/extensions>), [R05-Q03](<https://www.quetta.net/products/ios>), [R05-Q04](<https://apps.apple.com/app/quetta-private-browser/id6504077999>), [R05-Q05](<https://www.quetta.net/downloads>), [R05-Q06](<https://www.quetta.net/features/video-downloader>), [R05-Q07](<https://www.quetta.net/features/playlist>), [R05-Q08](<https://www.quetta.net/faq>).

<a id="R05-F-quetta-android-extensions"></a>

#### Android Chrome and Edge extension installation and management — R05-F-quetta-android-extensions

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| extensions | Android | limited | vendor-documented / high |

Quetta&#39;s Android-specific guide documents Chrome Web Store and Edge Add-ons installation and management, including extension popups. It expressly warns that desktop layouts, unavailable browser APIs, companion apps and background behavior can limit compatibility.

Sources: [R05-Q01](<https://play.google.com/store/apps/details?id=net.quetta.browser&hl=en>), [R05-Q02](<https://www.quetta.net/features/extensions>).

Feature limitations:

- No extension was installed or exercised. Broad FAQ wording is insufficient to establish iOS Chrome Web Store support, universal compatibility or the shipped iOS engine.

<a id="R05-F-quetta-android-power-tools"></a>

#### Android control placement, tab behavior and DevTools — R05-F-quetta-android-power-tools

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| interface-and-developer-tools | Android | documented | vendor-documented / high |

The Android listing advertises toolbar/address-bar customization, tab-behavior controls and DevTools. These are Android-specific power tools rather than evidence that every Quetta edition exposes an identical browser UI or developer surface.

Sources: [R05-Q01](<https://play.google.com/store/apps/details?id=net.quetta.browser&hl=en>).

Feature limitations:

- No developer-tools connection, API coverage or layout behavior was tested. The listing&#39;s Android Chromium version does not identify the iOS engine or establish desktop parity.

<a id="R05-F-quetta-filtering"></a>

#### Edition-specific ad, tracker and interruption controls — R05-F-quetta-filtering

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-filtering | Android: ad/tracker controls<br>iOS: publisher-described overlay and autoplay controls | documented | vendor-documented / high |

Android publisher text describes ad/tracker controls. The iOS publisher description additionally calls out intrusive overlays and autoplay interruptions. These are separately attributed edition claims; AI labels do not establish superior coverage.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-Q01](<https://play.google.com/store/apps/details?id=net.quetta.browser&hl=en>), [R05-Q03](<https://www.quetta.net/products/ios>).

Feature limitations:

- No rule coverage, network capture or site-breakage test was performed. The two editions&#39; mechanisms and defaults were not shown to be identical, and publisher privacy statements were not independently audited.

<a id="R05-F-quetta-ios-reading-capture"></a>

#### iOS reader layout and webpage image/PDF capture — R05-F-quetta-ios-reading-capture

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| reading-and-capture | iPhone and iPad | documented | vendor-documented / high |

The iOS product and publisher descriptions advertise a reader-oriented layout and capturing webpages as images or PDFs. These edition-specific reading and export tools are distinct from Android&#39;s advertised DevTools and tab controls.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-Q03](<https://www.quetta.net/products/ios>).

Feature limitations:

- Reader extraction, pagination, image/PDF fidelity, accessibility and offline viewing were not tested. Advertising does not establish identical Android or desktop functionality.

<a id="R05-F-quetta-media"></a>

#### Media queues with qualified downloads and offline access — R05-F-quetta-media

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| media-and-downloads | Android mobile offering<br>iOS mobile offering; edition-specific availability | limited | vendor-documented / high |

Official guides describe playlist organization, supported downloads, picture-in-picture and background playback where available. Offline access requires compatible, permitted media; saving a playlist entry does not itself make the referenced media playable offline.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-Q01](<https://play.google.com/store/apps/details?id=net.quetta.browser&hl=en>), [R05-Q06](<https://www.quetta.net/features/video-downloader>), [R05-Q07](<https://www.quetta.net/features/playlist>).

Feature limitations:

- Site, account, format, region and media permissions constrain availability. No download, interruption recovery, PiP, background or offline playback test was run; general guides are not a per-build cross-platform compatibility matrix.

<a id="R05-F-quetta-vault"></a>

#### iOS Data Vault with biometric access — R05-F-quetta-vault

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| local-storage-and-access | iPhone and iPad; US publisher record | documented | vendor-documented / high |

The iOS publisher describes a Data Vault with biometric access and encryption for private local storage. The observable evidence is the publisher&#39;s specified workflow, not an audit of cryptographic implementation or storage isolation.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>).

Feature limitations:

- No vault, key-management, biometric-fallback, backup or data-remanence test was performed. Android and desktop equivalents are not established by this iOS claim.

Browser limitations:

- No runtime tests; desktop links are advertising, not inspected packages or parity evidence. iOS Chrome Web Store hosting is not established.
- Android extension compatibility depends on layout, browser APIs, companion apps and background behavior. Saved media links and playable offline files are distinct states.
- Broad no-personal-data copy and Android Play disclosures differ; runtime collection was not adjudicated. AI filtering superiority and vault cryptography were not audited.

<a id="R05-B-samsung"></a>

### Samsung Internet / Samsung Browser — R05-B-samsung

Browser lifecycle: **active**. Browser platforms: Android phones<br>Android tablets<br>Selected Galaxy Watch Wear OS devices<br>Windows offering. [Catalog qualifications](<CATALOG.md#R05-B-samsung>). Sources: [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>), [R05-S02](<https://developer.samsung.com/browser/release-note/android-release-note.html>), [R05-S03](<https://developer.samsung.com/browser/release-note/windows-release-note.html>), [R05-S04](<https://developer.samsung.com/browser/android/extensions-dev-overview.html>).

<a id="R05-F-samsung-blockers"></a>

#### Approved extension apps and content-filter providers — R05-F-samsung-blockers

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-filtering-and-extensions | Android | limited | vendor-documented / high |

Third-party applications can supply content-blocking filters to Samsung Browser. The developer guide describes a Samsung-validated and approved extension-app mechanism. This integration model is distinct from arbitrary desktop Chrome Web Store extension installation.

Sources: [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>), [R05-S04](<https://developer.samsung.com/browser/android/extensions-dev-overview.html>).

Feature limitations:

- No provider was installed or tested, and filtering completeness was not measured. Approval, app integration and platform boundaries remain part of the documented capability; no equivalent iOS plug-in mechanism is established.

<a id="R05-F-samsung-ergonomics"></a>

#### Customizable menus, dark mode and control placement — R05-F-samsung-ergonomics

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| interface | Android phones<br>Android tablets; historical tablet URL-bar placement | documented | vendor-documented / high |

The current listing documents customizable menus and dark mode. Historical Android release notes additionally describe moving tab/bookmark bars and the tablet URL bar to the bottom. Those release notes establish historical introduction rather than an audited current minimum-version matrix.

Sources: [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>), [R05-S02](<https://developer.samsung.com/browser/release-note/android-release-note.html>).

Feature limitations:

- The retrieved Android changelog ends with a 2024-05-11 entry. Current placement combinations, accessibility and one-handed usability were not tested; historical controls are not automatically claims about every current device.

<a id="R05-F-samsung-private-links"></a>

#### Secret Mode, incoming private links and tracking controls — R05-F-samsung-private-links

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy-and-sessions | Android phones<br>Android tablets | documented | vendor-documented / high |

Publisher and release documentation describe Secret Mode and an option to open links from other applications in Secret Mode. Smart Anti-Tracking describes restricting cookie and storage access for domains capable of tracking. Incoming-link policy and tracking protection are documented mechanisms, not measured anonymity guarantees.

Sources: [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>), [R05-S02](<https://developer.samsung.com/browser/release-note/android-release-note.html>).

Feature limitations:

- Historical release notes do not establish a current per-version availability matrix. External-link dispatch, storage isolation, erase/relaunch behavior and tracking coverage were not tested; local private state does not itself establish network anonymity.

<a id="R05-F-samsung-tabs"></a>

#### Tablet split browsing and open-tab search — R05-F-samsung-tabs

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tabs-and-windows | Android tablets: Split view and open-tab search<br>Android phones: open-tab search only in this record | limited | vendor-documented / high |

The current Android listing describes side-by-side Split view specifically for tablets. It also describes using address-bar search to switch directly to a page that is already open. These workflows must retain their different device scopes.

Sources: [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>).

Feature limitations:

- Split view is explicitly tablet-only in the cited listing; rotation, keyboard interaction and narrow-layout behavior were not tested. Current Chrome large-screen behavior has not been compared.

<a id="R05-F-samsung-video"></a>

#### Video Assistant — R05-F-samsung-video

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| media | Android phones<br>Android tablets | documented | vendor-documented / high |

The Android publisher listing describes Video Assistant as a dedicated in-browser video-control workflow. This is a concrete media interaction feature rather than evidence of faster playback or broader codec support.

Sources: [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>).

Feature limitations:

- Documentary evidence only; supported sites, formats and behavior were not tested. No corresponding Windows, Wear OS or iOS capability is inferred.

Browser limitations:

- No installed release tested. Android developer changelog&#39;s latest visible 2024-05-11 entry is stale relative to the current listing; historical Android 8+ wording is not a current minimum-version assertion.
- Watch claims are limited to supported Galaxy Watch 4-series or later Wear OS devices. Windows AI/geography notes and extension-app behavior are edition-specific; no iOS offering was established.

<a id="R05-B-uc"></a>

### UC Browser — R05-B-uc

Browser lifecycle: **active**. Browser platforms: International Android edition: com.UCMobile.intl<br>Chinese iOS edition: App Store 586871187; iOS 13+<br>PC landing page only; current distributable desktop build not established. [Catalog qualifications](<CATALOG.md#R05-B-uc>). Sources: [R05-U01](<https://play.google.com/store/apps/details?id=com.UCMobile.intl&hl=en>), [R05-U02](<https://open-uc.uc.cn/solution/u4>), [R05-U03](<https://www.alibabagroup.com/en-US/document-1489318545857708032>), [R05-U04](<https://itunes.apple.com/search?term=UC%E6%B5%8F%E8%A7%88%E5%99%A8&country=cn&entity=software&limit=10>), [R05-U04a](<https://apps.apple.com/cn/app/uc%E6%B5%8F%E8%A7%88%E5%99%A8-%E9%9A%8F%E5%BF%83%E6%90%9C-%E7%95%85%E5%BF%AB%E7%9C%8B/id586871187>), [R05-U05](<https://www.ucweb.com/download/pc>).

<a id="R05-F-uc-china-discovery"></a>

#### Chinese iOS news, search-trend and entertainment surfaces — R05-F-uc-china-discovery

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-discovery | iOS; Chinese App Store UC Browser 586871187 | limited | vendor-documented / high |

The actual UCWeb publisher record in the Chinese App Store emphasizes news, search trends, video and novels. This supports a current regional iOS product with its own feature positioning rather than a global Android-only lifecycle conclusion.

Sources: [R05-U04](<https://itunes.apple.com/search?term=UC%E6%B5%8F%E8%A7%88%E5%99%A8&country=cn&entity=software&limit=10>), [R05-U04a](<https://apps.apple.com/cn/app/uc%E6%B5%8F%E8%A7%88%E5%99%A8-%E9%9A%8F%E5%BF%83%E6%90%9C-%E7%95%85%E5%BF%AB%E7%9C%8B/id586871187>).

Feature limitations:

- The observed record requires iOS 13+ and reports version 19.3.0.3121 released 2026-11-20T02:36:07Z; no app was installed. Catalog availability and other storefronts were not tested, and the separately named speed edition is not merged here.

<a id="R05-F-uc-china-playback"></a>

#### Chinese iOS short-drama playback recovery and progress sync — R05-F-uc-china-playback

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| media | iOS; Chinese App Store UC Browser 586871187 | limited | vendor-documented / high |

The Chinese UC Browser iOS current-version notes describe short-drama playback recovery, progress synchronization and player refinements. These are scoped release-note claims for that regional edition, not evidence of the international Android VPN, cloud or AI feature set.

Sources: [R05-U04](<https://itunes.apple.com/search?term=UC%E6%B5%8F%E8%A7%88%E5%99%A8&country=cn&entity=software&limit=10>), [R05-U04a](<https://apps.apple.com/cn/app/uc%E6%B5%8F%E8%A7%88%E5%99%A8-%E9%9A%8F%E5%BF%83%E6%90%9C-%E7%95%85%E5%BF%AB%E7%9C%8B/id586871187>).

Feature limitations:

- No playback recovery or synchronization was tested. The account, content-catalog and cross-device requirements are unresolved; release notes do not prove general offline support or current engine identity.

<a id="R05-F-uc-international-ai"></a>

#### International Android AI search, translation and meeting notes — R05-F-uc-international-ai

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| ai-and-language-services | Android; international com.UCMobile.intl edition | documented | vendor-documented / high |

The international Android listing advertises AI-assisted search and translation plus meeting-note transcription and summarization. These are service-oriented product claims; accuracy and encryption superlatives are not evaluated outcomes.

Sources: [R05-U01](<https://play.google.com/store/apps/details?id=com.UCMobile.intl&hl=en>).

Feature limitations:

- No content was uploaded, transcribed or summarized. Language coverage, processing location, retention, eligibility and Chinese iOS parity were not established.

<a id="R05-F-uc-international-blocking"></a>

#### International Android ad and pop-up blocking — R05-F-uc-international-blocking

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-filtering | Android; international com.UCMobile.intl edition | documented | vendor-documented / high |

The international Android publisher description advertises built-in ad and pop-up blocking. The documentary claim concerns available controls, without measured blocking rates or a demonstrated browsing-speed advantage.

Sources: [R05-U01](<https://play.google.com/store/apps/details?id=com.UCMobile.intl&hl=en>).

Feature limitations:

- No rule coverage, website breakage or performance test was run. The Chinese iOS edition, U4 engine offering and older all-platform claims are not interchangeable evidence for this feature.

<a id="R05-F-uc-international-drive"></a>

#### International Android UC Drive cloud allocation — R05-F-uc-international-drive

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| cloud-storage | Android; international com.UCMobile.intl edition | limited | vendor-documented / high |

The international Android listing advertises UC Drive cloud storage with a 20 GB allocation. This is a publisher-stated service entitlement, not a browser-engine capability or a measured durable free allowance.

Sources: [R05-U01](<https://play.google.com/store/apps/details?id=com.UCMobile.intl&hl=en>).

Feature limitations:

- Eligibility, account requirements, regional terms and sustained free availability were not independently checked. No files were uploaded; matching Chinese iOS entitlement is not established.

<a id="R05-F-uc-international-media"></a>

#### International Android video downloads and offline organization — R05-F-uc-international-media

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| media-and-downloads | Android; international com.UCMobile.intl edition | documented | vendor-documented / high |

The international Android publisher description advertises integrated video downloads, offline playback and download organization. These claims belong to package com.UCMobile.intl and are not imported into the distinct Chinese iOS feature set.

Sources: [R05-U01](<https://play.google.com/store/apps/details?id=com.UCMobile.intl&hl=en>).

Feature limitations:

- No download, interruption recovery, site compatibility or offline playback test was performed. Availability for particular media sources and regional editions remains unverified.

<a id="R05-F-uc-international-vpn"></a>

#### International Android built-in VPN offering — R05-F-uc-international-vpn

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| network-services | Android; international com.UCMobile.intl edition | limited | vendor-documented / high |

The international Android publisher listing advertises a built-in VPN. The consulted evidence does not resolve browser-only versus device-wide routing, quotas or actual endpoint behavior.

Sources: [R05-U01](<https://play.google.com/store/apps/details?id=com.UCMobile.intl&hl=en>).

Feature limitations:

- No network traffic, connection failure or IP-routing test was performed. Regional/plan scope and Chinese iOS parity are unknown; private/incognito mode by itself must not be described as hiding an IP address.

Browser limitations:

- No runtime, cloud entitlement, VPN, AI or engine measurement. International Android features are not transferred to Chinese iOS; a separately named speed edition returned by the API is not merged with this record.
- Current Chinese iOS distribution disproves a blanket Android-only conclusion for the observed date, but does not establish global storefront availability.
- The PC landing page is insufficient to establish a current binary or global desktop EOL. Older U4 performance/patch-speed claims are not current package measurements.
- Incognito local-state isolation does not itself hide an IP address; vendor wording must not be repeated as an observed network property.

<a id="R05-B-vanadium"></a>

### GrapheneOS Vanadium — R05-B-vanadium

Browser lifecycle: **active**. Browser platforms: GrapheneOS Android devices; official distribution only. [Catalog qualifications](<CATALOG.md#R05-B-vanadium>). Sources: [R05-G01](<https://grapheneos.org/features#vanadium>), [R05-G02](<https://api.github.com/repos/GrapheneOS/Vanadium/releases/latest>).

<a id="R05-F-vanadium-credentials"></a>

#### Native autofill and passkey integration — R05-F-vanadium-credentials

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| credentials | GrapheneOS Android browser | limited | vendor-documented / high |

Vanadium documents Android autofill and credential-manager/passkey integration designed to avoid requiring sandboxed Google Play for those paths. This is a specific credential integration claim, not a statement that every unrelated service is independent of Google Play.

Sources: [R05-G01](<https://grapheneos.org/features#vanadium>), [R05-G02](<https://api.github.com/repos/GrapheneOS/Vanadium/releases/latest>).

Feature limitations:

- No credential provider, passkey enrollment or sign-in was tested. Provider, OS and build prerequisites remain relevant; browser settings and WebView integration cannot be assumed identical.

<a id="R05-F-vanadium-filtering"></a>

#### Integrated filter lists and per-site recovery toggle — R05-F-vanadium-filtering

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-filtering | GrapheneOS Android browser | limited | vendor-documented / high |

Technical documentation describes standard filter lists, language-dependent regional lists and a per-site filtering toggle. The toggle is a documented compatibility escape hatch; planned cosmetic-filtering work must remain separate from currently described mechanisms.

Sources: [R05-G01](<https://grapheneos.org/features#vanadium>), [R05-G02](<https://api.github.com/repos/GrapheneOS/Vanadium/releases/latest>).

Feature limitations:

- No network/cosmetic coverage, regional-list selection or site-breakage recovery was tested. Rolling documentation includes future work, and incomplete cookie partitioning is not a claim of comprehensive tracking prevention.

<a id="R05-F-vanadium-hardening"></a>

#### OS-integrated browser hardening — R05-F-vanadium-hardening

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| platform-hardening | GrapheneOS Android; build and hardware dependent | limited | vendor-documented / high |

Documented mechanisms include strict site isolation, sandboxed frames, compiler and memory protections, and restrictions on dynamic code execution. Their applicability depends on the actual browser build, GrapheneOS configuration and supported hardware rather than a transferable UI label.

Sources: [R05-G01](<https://grapheneos.org/features#vanadium>), [R05-G02](<https://api.github.com/repos/GrapheneOS/Vanadium/releases/latest>).

Feature limitations:

- No security reproduction, exploit-resistance measurement or cross-browser ranking was performed. A prospective outside-GrapheneOS version would lack some hardening/features and would not supply the system WebView; it is not an observed current edition.

<a id="R05-F-vanadium-jit"></a>

#### Default-off browser JIT with per-site exceptions — R05-F-vanadium-jit

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| site-controls-and-execution | GrapheneOS Android browser | limited | vendor-documented / high |

Vanadium documents JavaScript JIT disabled by default in the browser, per-site exceptions and a WebAssembly interpreter for execution without JIT. These are browser policies within the supported GrapheneOS environment.

Sources: [R05-G01](<https://grapheneos.org/features#vanadium>), [R05-G02](<https://api.github.com/repos/GrapheneOS/Vanadium/releases/latest>).

Feature limitations:

- User-installed apps&#39; WebViews have JIT enabled by default with OS controls; the browser default must not be generalized to them. No performance, WebAssembly, compatibility or exception-recovery test was performed; official distribution remains GrapheneOS-only.

<a id="R05-F-vanadium-navigation-privacy"></a>

#### Incoming Incognito links and reduced referrer information — R05-F-vanadium-navigation-privacy

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy-and-sessions | GrapheneOS Android browser | limited | vendor-documented / high |

The documentation describes options to open incoming links in Incognito and reduce cross-origin referrer information. Both expose concrete navigation privacy choices within the browser&#39;s supported platform.

Sources: [R05-G01](<https://grapheneos.org/features#vanadium>), [R05-G02](<https://api.github.com/repos/GrapheneOS/Vanadium/releases/latest>).

Feature limitations:

- Link dispatch, actual request headers and session cleanup were not observed at runtime. Neither setting establishes comprehensive anonymity or equivalent behavior in application WebViews or on iOS.

Browser limitations:

- No binary or security behavior tested. A prospective outside-GrapheneOS release would lack system WebView and some hardening/features; it is not a current distribution claim.
- User-installed apps&#39; WebViews have different JIT defaults and OS controls; not all browser settings apply there. Documentation describes incomplete cookie partitioning and future cosmetic-filtering work; extensions are not planned.
- Hardening depends on the actual OS, build and hardware; no anonymity or cross-browser security ranking is established.

<a id="R05-B-via"></a>

### Via — R05-B-via

Browser lifecycle: **unknown**. Browser platforms: Android<br>iPhone and iPad; US publisher record requires iOS 11+<br>Apple-silicon Mac compatibility listing; not verified for macOS. [Catalog qualifications](<CATALOG.md#R05-B-via>). Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-V01](<https://github.com/tuyafeng/Via>), [R05-V02](<https://play.google.com/store/apps/details?id=mark.via.gp&hl=en>), [R05-V03](<https://apps.apple.com/us/app/via-browser/id1639085829>).

<a id="R05-F-via-icloud"></a>

#### iOS iCloud synchronization — R05-F-via-icloud

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| synchronization | iPhone and iPad; iCloud-dependent | limited | vendor-documented / high |

Via&#39;s iOS publisher description explicitly lists iCloud sync. This is a platform-specific synchronization path with an iCloud service dependency, distinct from local import/export or Chrome-account synchronization.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-V03](<https://apps.apple.com/us/app/via-browser/id1639085829>).

Feature limitations:

- No account was accessed and no data synchronized. Exact field coverage, conflict handling, encryption and Android-to-iOS parity were not established.

<a id="R05-F-via-ios-reading"></a>

#### Saved pages and lightweight iOS reading utilities — R05-F-via-ios-reading

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| reading-and-offline | iPhone and iPad; US publisher record | documented | vendor-documented / high |

The iOS publisher description and release notes cover saved webpages, reader-mode work, desktop-site requests, translation and find-in-page. Together they describe a lightweight reading workflow without proving offline fidelity for every page type.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-V03](<https://apps.apple.com/us/app/via-browser/id1639085829>).

Feature limitations:

- Saved-page assets, interactive content, reader extraction and translation accuracy were not tested. Release-note mentions are not a current minimum-version matrix, and Android parity is not inferred.

<a id="R05-F-via-ios-scripts"></a>

#### iOS user-script support — R05-F-via-ios-scripts

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| programmability | iPhone and iPad; US publisher record | documented | vendor-documented / high |

The Via iOS publisher description explicitly lists user-script support, and release notes mention improvements to scripting. This establishes a documented app-level scripting capability, not a general Chrome/Firefox WebExtensions host.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-V03](<https://apps.apple.com/us/app/via-browser/id1639085829>).

Feature limitations:

- No script was executed. Permissions, browser-wide tab APIs, native messaging and extension compatibility are not established; Via&#39;s iOS engine remains unresolved in this lane.

<a id="R05-F-via-quiet-interface"></a>

#### Configurable iOS interface without pushed news — R05-F-via-quiet-interface

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| interface | iPhone and iPad; US publisher description | documented | vendor-documented / high |

The iOS publisher promises a quiet interface without pushed news feeds and offers personalization. Memory and speed superlatives remain vendor assertions; this record preserves the concrete interface promise rather than turning marketing into a benchmark.

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>).

Feature limitations:

- No interface, notification behavior or resource use was observed. The publisher&#39;s promise is not independently validated and is not generalized to every Android release or region.

<a id="R05-F-via-site-controls"></a>

#### Android per-site browser configuration — R05-F-via-site-controls

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| site-controls | Android | documented | vendor-documented / high |

Via&#39;s Android documentation describes setting user agent, JavaScript and ad-blocking choices for an individual site. Its rendering depends on the device&#39;s built-in WebView provider, a separate engine dependency from the browser shell.

Sources: [R05-V01](<https://github.com/tuyafeng/Via>).

Feature limitations:

- Site/origin scope, persistence, provider-version differences and recovery from a broken page were not tested. This Android record does not establish matching iOS controls or an independent bundled engine.

Browser limitations:

- No installed app or memory/speed benchmark. Android footprint depends on an external system WebView; comparisons must account for that dependency.
- The repository is for localization and is not evidence that the whole app is open source. Android autofill apps are documented on Android 8+; that is not the current app&#39;s minimum OS or a WebView saved-password guarantee.
- Apple compatibility metadata is not evidence of a separately engineered desktop version. Android/iOS script, sync and feature parity remain untested.

<a id="R05-B-yandex"></a>

### Yandex Browser — R05-B-yandex

Browser lifecycle: **active**. Browser platforms: Android phones<br>Android tablets<br>iPhone; help specifies iOS 15+<br>Desktop browser referenced; exact current OS matrix not established. [Catalog qualifications](<CATALOG.md#R05-B-yandex>). Sources: [R05-Y01](<https://play.google.com/store/apps/details?id=com.yandex.browser&hl=en>), [R05-Y02](<https://yandex.com/support/browser-mobile-android-phone/en/personal-settings/extensions>), [R05-Y02a](<https://yandex.com/support/browser-mobile-android-tablet/en/personal-settings/extensions>), [R05-Y03](<https://yandex.com/support/browser-mobile-android-phone/en/navigation/translation>), [R05-Y04](<https://yandex.com/support/browser-mobile-iphone/en/navigation/translation>), [R05-Y05](<https://yandex.com/support/browser-mobile-iphone/en/install/install>), [R05-Y06](<https://yandex.com/bugbounty/i/browser>).

<a id="R05-F-yandex-android-extensions"></a>

#### Android extension catalogs and lifecycle controls — R05-F-yandex-android-extensions

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| extensions | Android phones<br>Android tablets | limited | vendor-documented / high |

Yandex documents Android-phone and tablet extensions from vendor and third-party catalogs including Chrome and Opera. Help covers enable/disable, options, updates and developer-mode unpacked loading. It says only extensions in the From other sources section can be deleted.

Sources: [R05-Y02](<https://yandex.com/support/browser-mobile-android-phone/en/personal-settings/extensions>), [R05-Y02a](<https://yandex.com/support/browser-mobile-android-tablet/en/personal-settings/extensions>).

Feature limitations:

- No extension was installed, updated or tested. Catalog availability and management documentation do not guarantee compatibility with every desktop extension or establish an iOS host.

<a id="R05-F-yandex-android-translation"></a>

#### Android page, text and in-page image translation — R05-F-yandex-android-translation

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| translation-and-reading | Android phones; cited navigation guide | limited | vendor-documented / high |

Android help documents page/text translation and translated image text displayed over the original image, including automatic image translation alongside a page. This in-page image workflow is separate from the iPhone upload flow.

Sources: [R05-Y03](<https://yandex.com/support/browser-mobile-android-phone/en/navigation/translation>).

Feature limitations:

- Image clarity, size and handwriting restrict OCR. Translation quality, offline operation, service requests and supported content were not measured; the phone guide is not a universal device/build compatibility matrix.

<a id="R05-F-yandex-iphone-translation"></a>

#### iPhone translation with image upload — R05-F-yandex-iphone-translation

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| translation-and-reading | iPhone | limited | vendor-documented / high |

The iPhone translation guide documents page/text language tools and uploading an image through the translation interface. This must not be flattened into a claim that iPhone supports Android&#39;s in-page image-text overlay in the same way.

Sources: [R05-Y04](<https://yandex.com/support/browser-mobile-iphone/en/navigation/translation>).

Feature limitations:

- No image was uploaded or translated. Accuracy, remote processing, data retention and offline operation were not verified; Android and iOS engine/API equivalence is not established.

<a id="R05-F-yandex-reader"></a>

#### Android Reader Mode — R05-F-yandex-reader

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| reading | Android | documented | vendor-documented / high |

The Android publisher listing describes Reader Mode removing peripheral interface elements while preserving article text and associated images. This is a documented reading view rather than proof of correct extraction on every page.

Sources: [R05-Y01](<https://play.google.com/store/apps/details?id=com.yandex.browser&hl=en>).

Feature limitations:

- No extraction, accessibility, image retention or offline test was run. Equivalent iPhone behavior is not established by the Android listing alone.

<a id="R05-F-yandex-subtitles"></a>

#### Subtitle generation, translation and word-level interaction — R05-F-yandex-subtitles

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| media-and-translation | Android phones<br>iPhone | limited | vendor-documented / high |

Both mobile help pages describe automatic subtitle generation/translation for eight languages, translation of existing subtitles from more than 90 languages and tapping a word for its meaning. The documented flow leaves fullscreen or PiP for setup and then permits reopening that playback mode.

Sources: [R05-Y03](<https://yandex.com/support/browser-mobile-android-phone/en/navigation/translation>), [R05-Y04](<https://yandex.com/support/browser-mobile-iphone/en/navigation/translation>).

Feature limitations:

- Supported-video and language restrictions apply; the stated counts are publisher documentation rather than verified accuracy or universal language-pair coverage. No subtitle, fullscreen/PiP, accessibility or playback test was run.

<a id="R05-F-yandex-sync"></a>

#### Optional Yandex-account synchronization — R05-F-yandex-sync

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| synchronization | Android; synchronization with supported account-linked devices | limited | vendor-documented / high |

The Android listing documents access to bookmarks/sites across devices when synchronization is enabled in a Yandex account. Optional account-backed sync is a different workflow and dependency from local import/export.

Sources: [R05-Y01](<https://play.google.com/store/apps/details?id=com.yandex.browser&hl=en>).

Feature limitations:

- No account was accessed or data synchronized. Exact device pairings, data fields, retention, encryption and conflict behavior were not established.

Browser limitations:

- Documentation only; no installed builds, extension compatibility or language accuracy tested. Android extension help is not iOS evidence.
- Android in-page image OCR differs from iPhone image upload. Image quality and supported-video/language restrictions apply; fullscreen/PiP setup restrictions are not a categorical playback prohibition.
- Account sync and translation have service/data-flow dependencies; offline operation and privacy guarantees were not established.

Lane limitations:

- Complete means the assigned documentary handoff has been converted into sources, ten browser records, substantive features, source inconsistencies and ten proposal candidates. It does not mean unresolved engine, distribution, runtime, Chrome parity or feasibility questions have been answered.
- Research is documentary and source-inspected, not hands-on: no installations, browser launches, reproductions, compatibility tests, benchmarks, VPN captures or cryptographic audits were performed.
- All Chrome improvement candidates are hypotheses with parity unknown until R01 compares current Android and iOS versions separately, including device, region and channel. This lane establishes no missing Chrome feature.
- Retrieval dates refer to the saved research session on 2026-11-21. Page metadata, repository creation dates, corporate founding dates and unrelated extractor dates were not promoted to publication dates. Known version-release dates are labeled as such.
- Storefront/API records are snapshots. Recent source activity does not prove prompt binary security delivery, and an old release does not prove formal discontinuation. Kiwi has an explicit maintenance-ending notice; Focus has repository migrations.
- Platform, package, region, device, account, plan and media-site boundaries remain attached to claims. No privacy/security/performance superiority ranking is supported.

## R06 — Independent, keyboard-first, lightweight, experimental, and text browsers

Saved scope: Orion by Kagi<br>GNOME Web / Epiphany<br>Falkon<br>qutebrowser<br>Nyxt<br>Ladybird<br>Servo<br>Dillo<br>Lynx<br>w3m. Shard: [R06](<data/lanes/R06.json>). Status: complete.

<a id="R06-B-DILLO"></a>

### Dillo — R06-B-DILLO

Browser lifecycle: **active**. Browser platforms: Linux<br>BSD<br>macOS<br>Windows via Cygwin<br>Atari: project-documented. [Catalog qualifications](<CATALOG.md#R06-B-DILLO>). Sources: [R06-D1](<https://dillo-browser.org/>), [R06-D2](<https://dillo-browser.org/release/3.3.0/>), [R06-D3](<https://dillo-browser.org/user_help.html>), [R06-D4](<https://dillo-browser.org/release/3.2.0/>), [R06-D5](<https://git.dillo-browser.org/dillo/>), [R06-D6](<https://dillo-browser.github.io/>).

<a id="R06-F-DILLO-LOCAL-CONTROL"></a>

#### 3.3.0 dilloc control and page actions — R06-F-DILLO-LOCAL-CONTROL

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| local-automation | Linux (per-build availability unverified)<br>BSD (per-build availability unverified)<br>macOS (per-build availability unverified) | limited | vendor-documented / high |

The 3.3.0 notes document dilloc commands over a local UNIX socket for open, reload, readiness and dump operations, plus configurable page-menu actions integrating external tools.

Sources: [R06-D1](<https://dillo-browser.org/>), [R06-D2](<https://dillo-browser.org/release/3.3.0/>).

Feature limitations:

- No local-control command, socket or external-tool action was executed; the interface is not evidence of safe agent integration.
- Windows/Cygwin and Atari support for this specific interface was not established.
- The same release qualifies FLTK 1.4 as experimental with HiDPI/Wayland problems; no build configuration was validated.

<a id="R06-F-DILLO-LOCAL-KEY-HELP"></a>

#### Offline help and keyboard command discovery — R06-F-DILLO-LOCAL-KEY-HELP

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| command-discovery | Linux<br>BSD<br>macOS<br>Windows via Cygwin<br>Atari (project-documented; feature parity unverified) | documented | vendor-documented / high |

Dillo documents offline help, the 3.3.0 about:keys page, numbered tab shortcuts and copy, zoom and navigation controls.

Sources: [R06-D1](<https://dillo-browser.org/>), [R06-D2](<https://dillo-browser.org/release/3.3.0/>), [R06-D3](<https://dillo-browser.org/user_help.html>).

Feature limitations:

- The about:keys addition is sourced to 3.3.0; other controls come from the earlier generated manual.
- No key handling, offline operation or assistive-technology behavior was exercised on any listed platform.

<a id="R06-F-DILLO-PROTOCOL-PLUGINS"></a>

#### Standard-input/output protocol plugins — R06-F-DILLO-PROTOCOL-PLUGINS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| protocol-extensibility | Linux<br>BSD<br>macOS<br>Windows via Cygwin<br>Atari (project-documented; plugin parity unverified) | limited | vendor-documented / high |

The canonical site documents protocol plugins written in different languages and communicating through standard input/output, with examples including Gemini, Gopher, IPFS and man-page browsing.

Sources: [R06-D1](<https://dillo-browser.org/>).

Feature limitations:

- Examples do not establish that every plugin is installed, maintained or supported in each platform package.
- No plugin was installed or executed; protocol coverage, security and external dependencies were not tested.

<a id="R06-F-DILLO-READING-SCROLL"></a>

#### Reading-oriented scrolling — R06-F-DILLO-READING-SCROLL

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| reading | Linux<br>BSD<br>macOS<br>Windows via Cygwin<br>Atari (project-documented; feature parity unverified) | documented | vendor-documented / high |

Dillo documents page-at-a-time scrollbar navigation, configurable page overlap and an optional left-side scrollbar; the 3.2.0 notes describe book-like scrolling.

Sources: [R06-D1](<https://dillo-browser.org/>), [R06-D3](<https://dillo-browser.org/user_help.html>), [R06-D4](<https://dillo-browser.org/release/3.2.0/>).

Feature limitations:

- Historical release and manual documentation, not a current all-platform behavior test.
- No readability, focus or scrolling-efficiency comparison was run; constrained web-platform coverage changes comparison workloads.

<a id="R06-F-DILLO-SELECTIVE-IMAGES"></a>

#### Selective image loading and optional panel hiding — R06-F-DILLO-SELECTIVE-IMAGES

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| reading-and-resource-controls | Linux<br>BSD<br>macOS<br>Windows via Cygwin<br>Atari (project-documented; feature parity unverified) | documented | vendor-documented / high |

The manual documents images-off mode using alt text or placeholders, loading individual images on demand and hiding browser panels.

Sources: [R06-D1](<https://dillo-browser.org/>), [R06-D3](<https://dillo-browser.org/user_help.html>).

Feature limitations:

- Manual evidence is from v3.2.0-90-g29a46a2d; platform names describe project scope, not per-platform feature tests.
- No image-loading, resource-saving or usability measurement was performed. The documented renderer has limited HTML/CSS and no JavaScript.

Browser limitations:

- Not a text browser, but not a blanket replacement for JavaScript-dependent applications.
- Manual was generated for v3.2.0-90-g29a46a2d; newer controls are sourced to 3.3.0 notes.
- FLTK 1.4 support is experimental with HiDPI/Wayland problems.
- Windows means Cygwin, not a verified native Windows app release.
- No local-control commands, plugins or page actions were executed.
- Canonical domain is dillo-browser.org; the old GitHub surface and dillo.org must not be treated as current authoritative equivalents.

<a id="R06-B-FALKON"></a>

### Falkon — R06-B-FALKON

Browser lifecycle: **active**. Browser platforms: Linux<br>Windows: official nightly distribution documented; stable support not independently checked. [Catalog qualifications](<CATALOG.md#R06-B-FALKON>). Sources: [R06-F1](<https://www.falkon.org/about/>), [R06-F2](<https://apps.kde.org/falkon/index.xml>), [R06-F3](<https://raw.githubusercontent.com/KDE/falkon/master/CHANGELOG>), [R06-F4](<https://apps.kde.org/falkon/>), [R06-F5](<https://www.falkon.org/posts/>), [R06-Q1](<https://qutebrowser.org/doc/changelog.html>).

<a id="R06-F-FALKON-ADBLOCK"></a>

#### Built-in AdBlock plugin — R06-F-FALKON-ADBLOCK

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-blocking | Linux<br>Windows (nightly distribution documented; feature parity unverified) | documented | vendor-documented / high |

Falkon&#39;s About page documents a built-in AdBlock plugin enabled by default.

Sources: [R06-F1](<https://www.falkon.org/about/>), [R06-F4](<https://apps.kde.org/falkon/>).

Feature limitations:

- Project-level documentation was not verified against a binary or measured blocking workload.
- Windows nightly distribution is not proof of equal stable-channel support or per-platform defaults.

<a id="R06-F-FALKON-KDE-INTEGRATION"></a>

#### KWallet and Plasma integration — R06-F-FALKON-KDE-INTEGRATION

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| desktop-integration | Linux (KDE / Plasma integration documented) | documented | vendor-documented / medium |

Falkon&#39;s CHANGELOG documents KWallet password storage and Plasma download integration.

Sources: [R06-F3](<https://raw.githubusercontent.com/KDE/falkon/master/CHANGELOG>), [R06-F4](<https://apps.kde.org/falkon/>).

Feature limitations:

- Desktop-specific release-history evidence does not establish availability on Windows, macOS or every Linux desktop.
- No password-store, download workflow or current-package integration was exercised.

<a id="R06-F-FALKON-PLUGIN-EXTENSIBILITY"></a>

#### Userscripts, Python plugins and QML plugins — R06-F-FALKON-PLUGIN-EXTENSIBILITY

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| extensibility | Linux<br>Windows (nightly distribution documented; plugin availability unverified) | documented | vendor-documented / medium |

The CHANGELOG documents GreaseMonkey userscript support and Python and QML plugin mechanisms.

Sources: [R06-F3](<https://raw.githubusercontent.com/KDE/falkon/master/CHANGELOG>), [R06-F4](<https://apps.kde.org/falkon/>).

Feature limitations:

- These documented mechanisms do not establish complete Chrome Web Store or WebExtensions compatibility.
- Historical release entries were not exercised on current builds; dependency, package and OS-specific availability remain unverified.

<a id="R06-F-FALKON-SITE-PERMISSIONS"></a>

#### Per-site settings and permissions — R06-F-FALKON-SITE-PERMISSIONS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| site-controls | Linux<br>Windows (nightly distribution documented; feature parity unverified) | documented | vendor-documented / medium |

Falkon&#39;s release history documents per-site user-agent and cookie controls and later permission management for unknown protocols.

Sources: [R06-F3](<https://raw.githubusercontent.com/KDE/falkon/master/CHANGELOG>), [R06-F4](<https://apps.kde.org/falkon/>).

Feature limitations:

- The inspected CHANGELOG ends at a top entry of 25.08.0, rather than providing complete 26.08.3 coverage.
- No permission enforcement, persistence, protocol handling or per-platform behavior was tested.

<a id="R06-F-FALKON-VERTICAL-TABS"></a>

#### VerticalTabs plugin — R06-F-FALKON-VERTICAL-TABS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-management | Linux<br>Windows (nightly distribution documented; plugin availability unverified) | documented | vendor-documented / medium |

Falkon&#39;s release history documents a VerticalTabs plugin with tree and collapse behavior, plus keyboard and tab-switching improvements.

Sources: [R06-F3](<https://raw.githubusercontent.com/KDE/falkon/master/CHANGELOG>), [R06-F4](<https://apps.kde.org/falkon/>).

Feature limitations:

- Capability evidence comes from a CHANGELOG whose top entry is 25.08.0; it is not a 26.08.3 feature test.
- Plugin availability, defaults and behavior across platforms or packages were not established by runtime testing.

Browser limitations:

- No binary was installed or tested.
- Capability detail comes from a CHANGELOG whose top entry is 25.08.0, not a complete 26.08.3 feature test.
- Nightly installers are explicitly unstable.
- Legacy RSS/Flash/Click2Flash copy is not certified as current functionality.
- Current macOS support and the exact 26.08.3 release date remain unverified.

<a id="R06-B-GNOME-WEB"></a>

### GNOME Web / Epiphany — R06-B-GNOME-WEB

Browser lifecycle: **active**. Browser platforms: Linux, primarily GNOME and similar desktops<br>Stable Flatpak<br>Technology Preview and Canary: explicitly unstable. [Catalog qualifications](<CATALOG.md#R06-B-GNOME-WEB>). Sources: [R06-G1](<https://raw.githubusercontent.com/GNOME/epiphany/main/README.md>), [R06-G2](<https://raw.githubusercontent.com/GNOME/epiphany/main/NEWS>), [R06-G3](<https://apps.gnome.org/Epiphany/>).

<a id="R06-F-GNOME-WEB-APP-LIFECYCLE"></a>

#### Installed web-app background and quit controls — R06-F-GNOME-WEB-APP-LIFECYCLE

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| web-app-lifecycle | Linux | documented | vendor-documented / high |

The 50.0 NEWS entry documents a configurable background-running toggle and quit action for installed web apps, including operation outside Flatpak.

Sources: [R06-G1](<https://raw.githubusercontent.com/GNOME/epiphany/main/README.md>), [R06-G2](<https://raw.githubusercontent.com/GNOME/epiphany/main/NEWS>).

Feature limitations:

- Version-scoped release documentation, not a lifecycle or web-app compatibility test.
- The non-Flatpak statement does not establish equivalent behavior in every distribution package or channel.

<a id="R06-F-GNOME-WEB-FIREFOX-SYNC"></a>

#### Optional Firefox Sync integration — R06-F-GNOME-WEB-FIREFOX-SYNC

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| synchronization | Linux | documented | vendor-documented / high |

The README documents optional encrypted synchronization through Mozilla&#39;s Firefox Sync service and explicitly distinguishes GNOME Web from Firefox or Mozilla endorsement.

Sources: [R06-G1](<https://raw.githubusercontent.com/GNOME/epiphany/main/README.md>).

Feature limitations:

- Service integration and encryption are documented claims, not a synchronization or cryptographic audit.
- Coverage across distribution packages, channels and engine versions was not tested.

<a id="R06-F-GNOME-WEB-NATIVE-UI"></a>

#### GNOME-native interface — R06-F-GNOME-WEB-NATIVE-UI

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| desktop-integration | Linux, primarily GNOME and similar desktops | documented | vendor-documented / high |

GNOME Web documents an interface following the GNOME Human Interface Guidelines, with desktop integration and limited exposed technical detail for nontechnical users.

Sources: [R06-G1](<https://raw.githubusercontent.com/GNOME/epiphany/main/README.md>), [R06-G3](<https://apps.gnome.org/Epiphany/>).

Feature limitations:

- Design intent and project documentation are not a measured usability result.
- Native portability to other operating systems and identical behavior across stable, Technology Preview and Canary channels were not established.

<a id="R06-F-GNOME-WEB-READER"></a>

#### Reader mode — R06-F-GNOME-WEB-READER

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| reading | Linux | documented | vendor-documented / high |

NEWS documents reader-mode presentation and correctness work, including line-spacing improvements.

Sources: [R06-G1](<https://raw.githubusercontent.com/GNOME/epiphany/main/README.md>), [R06-G2](<https://raw.githubusercontent.com/GNOME/epiphany/main/NEWS>).

Feature limitations:

- The rolling release history supplies capability evidence, not a claim that reader mode was first introduced in 51.2.
- No page extraction, readability, accessibility or package-specific behavior was tested.

<a id="R06-F-GNOME-WEB-TRACKING-PREVENTION"></a>

#### Tracking prevention and filter-list ad blocking — R06-F-GNOME-WEB-TRACKING-PREVENTION

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy-and-content-blocking | Linux | documented | vendor-documented / high |

GNOME Web documents Intelligent Tracking Prevention enabled by default and filter-list-based advertisement blocking.

Sources: [R06-G1](<https://raw.githubusercontent.com/GNOME/epiphany/main/README.md>).

Feature limitations:

- Documented defaults do not establish measured tracking prevention or blocking effectiveness.
- Distribution, channel and WebKitGTK differences were not tested; no cross-platform parity is claimed.

Browser limitations:

- No runtime tests were run.
- GNOME integration is intentional; broad native Windows/macOS portability was not established.
- Technology Preview and Canary must not inherit stable-channel readiness.
- WebExtension fixes in NEWS do not establish store or API parity with Chrome.
- Package and WebKitGTK freshness must be evaluated separately from the browser version.

<a id="R06-B-LADYBIRD"></a>

### Ladybird — R06-B-LADYBIRD

Browser lifecycle: **experimental**. Browser platforms: Linux: development focus<br>macOS: development focus<br>Other Unix-like systems: documented builds<br>Windows via WSL2; native full browser planned<br>Mobile: not a current focus. [Catalog qualifications](<CATALOG.md#R06-B-LADYBIRD>). Sources: [R06-L1](<https://ladybird.org/>), [R06-L2](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/README.md>), [R06-L3](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/Documentation/FAQ.md>).

<a id="R06-F-LADYBIRD-CONTENT-LISTS"></a>

#### User-configured content-blocker lists — R06-F-LADYBIRD-CONTENT-LISTS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-blocking | Linux (pre-alpha development focus)<br>macOS (pre-alpha development focus) | limited | vendor-documented / high |

Ladybird&#39;s FAQ documents user-configured content-blocker lists.

Sources: [R06-L1](<https://ladybird.org/>), [R06-L2](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/README.md>), [R06-L3](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/Documentation/FAQ.md>).

Feature limitations:

- A pre-alpha documented capability, not an effectiveness or per-platform test.
- Discussion of future uBlock extension support is not implemented extension compatibility or a released consumer-browser milestone.

<a id="R06-F-LADYBIRD-HELPER-PROCESSES"></a>

#### Out-of-process helper work — R06-F-LADYBIRD-HELPER-PROCESSES

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| process-architecture | Linux (pre-alpha development focus)<br>macOS (pre-alpha development focus) | limited | vendor-documented / high |

The README documents out-of-process work for networking, image decoding, compositing and media.

Sources: [R06-L1](<https://ladybird.org/>), [R06-L2](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/README.md>).

Feature limitations:

- The project remains pre-alpha and developer-targeted; architecture descriptions do not establish complete media or website support.
- No process, performance or per-platform implementation behavior was inspected at runtime.

<a id="R06-F-LADYBIRD-INDEPENDENT-STACK"></a>

#### Independent web-platform stack — R06-F-LADYBIRD-INDEPENDENT-STACK

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| engine-architecture | Linux (pre-alpha development focus)<br>macOS (pre-alpha development focus) | limited | vendor-documented / high |

Ladybird documents its own LibWeb rendering, LibJS JavaScript and LibWasm WebAssembly implementation rather than a Blink, Gecko or WebKit fork.

Sources: [R06-L1](<https://ladybird.org/>), [R06-L2](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/README.md>), [R06-L3](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/Documentation/FAQ.md>).

Feature limitations:

- Pre-alpha architecture for developers, not complete standards conformance or consumer readiness; third-party libraries are still used.
- No build or site-compatibility test was run. Other Unix-like and WSL2 paths do not establish feature parity or a native Windows browser release.

<a id="R06-F-LADYBIRD-SITE-RENDERERS"></a>

#### Site-separated sandboxed renderer processes — R06-F-LADYBIRD-SITE-RENDERERS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| security-architecture | Linux (pre-alpha development focus)<br>macOS (pre-alpha development focus) | limited | vendor-documented / high |

Ladybird&#39;s README describes a multi-process design in which documents from different sites run in separate renderer processes sandboxed from the rest of the system.

Sources: [R06-L1](<https://ladybird.org/>), [R06-L2](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/README.md>).

Feature limitations:

- A documented pre-alpha architecture, not an independently validated sandbox or security comparison.
- Per-platform isolation behavior, other documented build paths and native Windows browser support were not tested or established as equivalent.

Browser limitations:

- No runtime, site-compatibility, performance or sandbox tests.
- The FAQ explicitly says particular sites may or may not be usable.
- Windows JavaScript-engine CI does not establish a native Windows browser.
- Engine independence does not mean absence of third-party libraries.
- Future alpha/beta/stable milestones must not be displayed as completed releases.

<a id="R06-B-LYNX"></a>

### Lynx — R06-B-LYNX

Browser lifecycle: **active**. Browser platforms: Unix/POSIX including Linux<br>BSD and macOS package/port pointers<br>Windows: maintainer-distributed variants<br>Historical VMS, DOS and OS/2 ports: current version support unverified. [Catalog qualifications](<CATALOG.md#R06-B-LYNX>). Sources: [R06-Y1](<https://lynx.invisible-island.net/>), [R06-Y2](<https://lynx.invisible-island.net/lynx2.9.3/index.html>), [R06-Y3](<https://lynx.invisible-island.net/current/index.html>), [R06-Y4](<https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html>), [R06-Y5](<https://lynx.invisible-island.net/manpage/>), [R06-Y6](<https://invisible-island.net/lynx/>).

<a id="R06-F-LYNX-FILES-PROTOCOLS-ENCODING"></a>

#### Local files, network protocols and character controls — R06-F-LYNX-FILES-PROTOCOLS-ENCODING

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| content-access | Unix/POSIX (OS/build parity unverified)<br>Windows (maintainer build variants) | limited | vendor-documented / high |

Lynx documentation covers local files and multiple network protocols alongside character-set and language controls.

Sources: [R06-Y4](<https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html>), [R06-Y5](<https://lynx.invisible-island.net/manpage/>), [R06-Y6](<https://invisible-island.net/lynx/>).

Feature limitations:

- Historical protocol and platform lists do not establish support in every current build.
- The maintainer explicitly distinguishes Windows variants without OpenSSL that cannot connect to HTTPS URLs.
- No file, protocol, encoding or language behavior was tested.

<a id="R06-F-LYNX-FORMS-EDITING"></a>

#### Forms and configurable text entry — R06-F-LYNX-FORMS-EDITING

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| forms-and-editing | Unix/POSIX (OS/build parity unverified)<br>Windows (maintainer build variants) | documented | vendor-documented / high |

The users guide documents forms and text entry, including external textarea editing and configurable line-editing or key styles.

Sources: [R06-Y4](<https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html>), [R06-Y6](<https://invisible-island.net/lynx/>).

Feature limitations:

- No form, external editor or OS-specific integration was exercised.
- Documented terminal forms do not establish compatibility with JavaScript-dependent or rich graphical application workflows.

<a id="R06-F-LYNX-KEYMAP-HELP"></a>

#### In-context help and keymap — R06-F-LYNX-KEYMAP-HELP

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| command-discovery | Unix/POSIX (OS/build parity unverified)<br>Windows (maintainer build variants) | documented | vendor-documented / high |

Lynx documents ? or H for help and K for current commands and key bindings while viewing a document.

Sources: [R06-Y4](<https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html>), [R06-Y6](<https://invisible-island.net/lynx/>).

Feature limitations:

- No help, keymap or discovery-time behavior was tested.
- Terminal key handling, configuration and build differences remain unverified across platforms.

<a id="R06-F-LYNX-NUMBERED-NAVIGATION"></a>

#### Arrow and numbered-target navigation — R06-F-LYNX-NUMBERED-NAVIGATION

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| keyboard-navigation | Unix/POSIX (OS/build parity unverified)<br>Windows (maintainer build variants) | documented | vendor-documented / high |

The users guide documents arrow/numeric navigation and numbering links and form fields for direct selection.

Sources: [R06-Y4](<https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html>), [R06-Y6](<https://invisible-island.net/lynx/>).

Feature limitations:

- Guide instructions were read through bounded excerpts, not executed in any terminal or OS variant.
- Keyboard coverage does not establish screen-reader accessibility or graphical modern-web parity; historical port lists are not a current support matrix.

<a id="R06-F-LYNX-TEXT-LINK-OUTPUT"></a>

#### Formatted text, source and link-list output — R06-F-LYNX-TEXT-LINK-OUTPUT

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| text-export | Unix/POSIX (OS/build parity unverified)<br>Windows (maintainer build variants) | documented | vendor-documented / high |

The manual documents -dump formatted text output, source output, link-only output and configurable output width.

Sources: [R06-Y5](<https://lynx.invisible-island.net/manpage/>), [R06-Y6](<https://invisible-island.net/lynx/>).

Feature limitations:

- CLI documentation was inspected in bounded excerpts; no command or pipeline was run.
- Output, encoding and option availability were not verified for every build; text output is not pixel-equivalent rendering of a modern web application.

Browser limitations:

- No runtime or screen-reader testing.
- The documentation&#39;s fully-featured description is scoped to a terminal client, not graphical modern-web parity.
- Rich graphical and JavaScript-dependent workflows were not qualified.
- Windows builds without OpenSSL are explicitly unable to connect to HTTPS URLs.
- Historical platform and protocol lists are not current tested OS/build matrices.

<a id="R06-B-NYXT"></a>

### Nyxt — R06-B-NYXT

Browser lifecycle: **active**. Browser platforms: Linux x86-64: 5.0.0 AppImage and Flatpak assets<br>macOS ARM64: 5.0.0 app asset<br>BSD: unofficial documentation<br>Windows via WSL: unofficial; native release not established. [Catalog qualifications](<CATALOG.md#R06-B-NYXT>). Sources: [R06-N1](<https://raw.githubusercontent.com/atlas-engineer/nyxt/master/README.org>), [R06-N2](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>), [R06-N3](<https://nyxt-browser.com/article/release-5.0.0.org>), [R06-N4](<https://api.github.com/repos/atlas-engineer/nyxt/releases/tags/5.0.0>), [R06-N5](<https://nyxt.atlas.engineer/faq>).

<a id="R06-F-NYXT-CEF-EXTENSIONS-BLOCKING"></a>

#### 5.0 CEF extension and request-blocking integration — R06-F-NYXT-CEF-EXTENSIONS-BLOCKING

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| renderer-extensibility | Linux x86-64 (5.0.0 CEF release; per-platform behavior unverified)<br>macOS ARM64 (5.0.0 CEF release; per-platform behavior unverified) | limited | vendor-documented / high |

The 5.0.0 release makes CEF the default and documents loading unpacked Chromium Manifest V2/V3 extensions, extension-management commands and request blocking using uBlock Origin default filter lists.

Sources: [R06-N2](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>), [R06-N3](<https://nyxt-browser.com/article/release-5.0.0.org>), [R06-N4](<https://api.github.com/repos/atlas-engineer/nyxt/releases/tags/5.0.0>).

Feature limitations:

- Version- and renderer-scoped documentation; alternate WebKitGTK behavior is not assumed equivalent, and Electron was removed in 5.0.0.
- No extension was loaded or blocker tested. Manifest support and use of filter lists do not prove every Chromium extension or uBlock feature works.

<a id="R06-F-NYXT-COMMAND-ENVIRONMENT"></a>

#### Reconfigurable Lisp command environment — R06-F-NYXT-COMMAND-ENVIRONMENT

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| command-customization | Linux x86-64 (5.0.0 release asset; feature parity unverified)<br>macOS ARM64 (5.0.0 release asset; feature parity unverified) | documented | vendor-documented / high |

Nyxt documents Emacs, vi and CUA bindings together with runtime Lisp introspection and customization.

Sources: [R06-N1](<https://raw.githubusercontent.com/atlas-engineer/nyxt/master/README.org>), [R06-N2](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>), [R06-N4](<https://api.github.com/repos/atlas-engineer/nyxt/releases/tags/5.0.0>), [R06-N5](<https://nyxt.atlas.engineer/faq>).

Feature limitations:

- Command-layer descriptions come from README/FAQ documentation; CEF is the default in 5.0.0 and WebKitGTK remains an alternative, without tested backend parity.
- Assets establish distribution, not successful execution or identical features. Native Windows availability and learning-curve or efficiency benefits were not established.

<a id="R06-F-NYXT-FUZZY-MULTISELECT"></a>

#### Fuzzy buffer switching and multi-object commands — R06-F-NYXT-FUZZY-MULTISELECT

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| selection-and-command-scope | Linux x86-64 (5.0.0 release asset; feature parity unverified)<br>macOS ARM64 (5.0.0 release asset; feature parity unverified) | documented | vendor-documented / high |

The README documents fuzzy buffer selection and commands accepting multiple inputs, such as several bookmarks or other objects for one operation.

Sources: [R06-N1](<https://raw.githubusercontent.com/atlas-engineer/nyxt/master/README.org>), [R06-N2](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>), [R06-N4](<https://api.github.com/repos/atlas-engineer/nyxt/releases/tags/5.0.0>).

Feature limitations:

- README behavior was not executed on the 5.0.0 CEF default or alternate WebKitGTK backend.
- Release assets do not establish OS/backend parity, action-scope predictability or error recovery.

<a id="R06-F-NYXT-MULTITAB-SEARCH"></a>

#### Multi-tab search with a unified results view — R06-F-NYXT-MULTITAB-SEARCH

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| cross-tab-retrieval | Linux x86-64 (5.0.0 release asset; feature parity unverified)<br>macOS ARM64 (5.0.0 release asset; feature parity unverified) | documented | vendor-documented / high |

The README describes searching multiple open tabs at the same time and displaying all results in a single window.

Sources: [R06-N1](<https://raw.githubusercontent.com/atlas-engineer/nyxt/master/README.org>), [R06-N2](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>), [R06-N4](<https://api.github.com/repos/atlas-engineer/nyxt/releases/tags/5.0.0>).

Feature limitations:

- Search coverage and retrieval behavior were not exercised on the 5.0.0 CEF default or alternate WebKitGTK backend.
- Platform parity and the relationship to current Chrome tab-title/URL or content-search behavior were not established.

<a id="R06-F-NYXT-TAGGED-BOOKMARKS"></a>

#### Tagged bookmarks and compound queries — R06-F-NYXT-TAGGED-BOOKMARKS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| bookmark-workflows | Linux x86-64 (5.0.0 release asset; feature parity unverified)<br>macOS ARM64 (5.0.0 release asset; feature parity unverified) | documented | vendor-documented / high |

Nyxt&#39;s README documents bookmark tags and compound queries for user-organized collections beyond a folder-only workflow.

Sources: [R06-N1](<https://raw.githubusercontent.com/atlas-engineer/nyxt/master/README.org>), [R06-N2](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>), [R06-N4](<https://api.github.com/repos/atlas-engineer/nyxt/releases/tags/5.0.0>).

Feature limitations:

- Bookmark and query behavior was not tested on either documented 5.0.0 platform or across CEF and WebKitGTK backends.
- No retrieval-efficiency comparison or claim about Chrome feature absence is established.

Browser limitations:

- Documentary and release-asset observations only; no Nyxt execution.
- README and FAQ platform/backend text differs from dated 5.0.0 sources; prefer version-specific evidence.
- Do not advertise WebKit-only or Electron-default behavior for 5.0.0.
- Command prediction was removed, and the README no longer advertises history as a tree.
- Extension loading does not prove complete WebExtensions compatibility.
- Lisp customization targets specialists; native Windows support remains unestablished.

<a id="R06-B-ORION"></a>

### Orion by Kagi — R06-B-ORION

Browser lifecycle: **active**. Browser platforms: macOS<br>iOS / iPadOS<br>Linux beta: Kagi maintenance ended<br>Windows: Kagi development and planned release ended. [Catalog qualifications](<CATALOG.md#R06-B-ORION>). Sources: [R06-O1](<https://blog.kagi.com/orion>), [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>), [R06-O3](<https://orionbrowser.com/updates/orion-release-notes>), [R06-O4](<https://help.kagi.com/orion/getting-started/installing-orion.html>).

- **lifecycle Scope:** Apple products only; Linux/Windows require the per-platform discontinuation qualifiers.
- **platform Lifecycle:** **lifecycle:** active<br>**platform:** macOS<br>**sourceIds:** [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>), [R06-O3](<https://orionbrowser.com/updates/orion-release-notes>)<br>**lifecycle:** active<br>**platform:** iOS / iPadOS<br>**qualification:** Continued focus documented; latest mobile version was not established.<br>**sourceIds:** [R06-O1](<https://blog.kagi.com/orion>), [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>)<br>**effectiveDate:** 2026-10-02<br>**lifecycle:** discontinued<br>**platform:** Linux<br>**qualification:** Kagi updates ended; community continuation remains unknown.<br>**sourceIds:** [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>)<br>**effectiveDate:** 2026-10-02<br>**lifecycle:** discontinued<br>**platform:** Windows<br>**qualification:** Kagi canceled its planned release; no completed successor handoff was verified.<br>**sourceIds:** [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>)

<a id="R06-F-ORION-COMPACT-PAGE-UI"></a>

#### Mini Toolbar, Overflow Menu and Page Tweak — R06-F-ORION-COMPACT-PAGE-UI

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| interface-customization | macOS | documented | vendor-documented / high |

The 1.0 announcement documents user-selectable compact interface controls and per-page presentation controls through Mini Toolbar, Overflow Menu and Page Tweak.

Sources: [R06-O1](<https://blog.kagi.com/orion>).

Feature limitations:

- The announcement does not establish identical controls on every mobile or desktop edition.
- No usability, focus-visibility or resource-use comparison was run; compact UI is not a measured engine-performance advantage.

<a id="R06-F-ORION-CONTENT-BLOCKING"></a>

#### Built-in content blocking and privacy defaults — R06-F-ORION-CONTENT-BLOCKING

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| privacy-and-content-blocking | macOS | documented | vendor-documented / high |

Orion&#39;s 1.0 announcement documents built-in content-blocking controls and privacy-oriented defaults.

Sources: [R06-O1](<https://blog.kagi.com/orion>).

Feature limitations:

- Control presence is documentary; blocking effectiveness and the publisher&#39;s zero-telemetry assertion were not independently audited.
- Defaults and feature parity across mobile, desktop and later releases were not tested.

<a id="R06-F-ORION-FOCUS"></a>

#### Focus Mode — R06-F-ORION-FOCUS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| focus-ui | macOS | documented | vendor-documented / high |

The Orion 1.0 announcement documents turning a website into a distraction-reduced, web-app-like window with Focus Mode.

Sources: [R06-O1](<https://blog.kagi.com/orion>).

Feature limitations:

- Scoped to the macOS 1.0 announcement; iOS/iPadOS and other platform feature parity were not established.
- No runtime, task-efficiency or distraction-reduction measurement was performed.

<a id="R06-F-ORION-LINK-PREVIEW"></a>

#### Link Preview — R06-F-ORION-LINK-PREVIEW

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| link-navigation | macOS | documented | vendor-documented / high |

The 1.0 announcement describes previewing linked content, including links originating in other applications, before opening a full tab.

Sources: [R06-O1](<https://blog.kagi.com/orion>).

Feature limitations:

- Announcement-level documentation, not a test of every application, link type or browser release.
- Mobile and other platform parity, preview behavior and any reduction in tab creation were not verified.

<a id="R06-F-ORION-PROFILES-AS-APPS"></a>

#### Profiles as Apps — R06-F-ORION-PROFILES-AS-APPS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| profiles-and-identity | macOS | documented | vendor-documented / high |

Orion documents separate browsing profiles with their own extensions, cookies and settings, presented through its Profiles as Apps workflow.

Sources: [R06-O1](<https://blog.kagi.com/orion>).

Feature limitations:

- Scoped to the 1.0 announcement; equivalent behavior on iOS/iPadOS or other platforms was not established.
- Profile boundaries and extension behavior were not runtime- or security-tested.

Browser limitations:

- Documentary evidence only, not a runtime evaluation.
- Promise to open-source Linux/Windows is not proof that code release or successor stewardship occurred.
- Undated installation guidance still offers the Linux beta.
- macOS release-note fixes do not prove universal website or Chrome/Firefox extension compatibility.
- 1.0 feature descriptions should not be assumed identical on every mobile release.

<a id="R06-B-QUTEBROWSER"></a>

### qutebrowser — R06-B-QUTEBROWSER

Browser lifecycle: **active**. Browser platforms: Linux: distribution or source packaging varies<br>Windows: official prebuilt binaries<br>macOS: official prebuilt binaries<br>FreeBSD: documentation includes backend/package caveats. [Catalog qualifications](<CATALOG.md#R06-B-QUTEBROWSER>). Sources: [R06-Q1](<https://qutebrowser.org/doc/changelog.html>), [R06-Q2](<https://qutebrowser.org/doc/quickstart.html>), [R06-Q3](<https://qutebrowser.org/doc/install.html>).

<a id="R06-F-QUTEBROWSER-BOOKMARK-RELOAD"></a>

#### File-oriented bookmark and quickmark reload — R06-F-QUTEBROWSER-BOOKMARK-RELOAD

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| bookmark-workflows | Linux<br>Windows<br>macOS | documented | vendor-documented / high |

The 3.7.0 changelog adds :quickmark-reload and :bookmark-reload so externally changed collections can be reloaded.

Sources: [R06-Q1](<https://qutebrowser.org/doc/changelog.html>), [R06-Q3](<https://qutebrowser.org/doc/install.html>).

Feature limitations:

- These commands are attributed to the released 3.7.0 entry, not the explicitly unreleased 3.8.0 entry.
- No collection files were changed or commands run; packaging and platform-specific behavior remain untested.

<a id="R06-F-QUTEBROWSER-COMMAND-HELP"></a>

#### Command line and contextual help — R06-F-QUTEBROWSER-COMMAND-HELP

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| command-discovery | Linux<br>Windows<br>macOS | documented | vendor-documented / high |

The quickstart documents : to open the command line, :help for in-product documentation and per-command --help.

Sources: [R06-Q2](<https://qutebrowser.org/doc/quickstart.html>), [R06-Q3](<https://qutebrowser.org/doc/install.html>).

Feature limitations:

- No command was executed and no discovery-time or learning-curve comparison was performed.
- Command availability can depend on release and package; per-platform equivalence was not established.

<a id="R06-F-QUTEBROWSER-ELEMENT-HINTS"></a>

#### Link and element hints — R06-F-QUTEBROWSER-ELEMENT-HINTS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| keyboard-navigation | Linux<br>Windows<br>macOS | documented | vendor-documented / high |

The quickstart documents pressing f to show letter hints for mouse-free activation; 3.6.0 release notes add hints in open shadow DOMs.

Sources: [R06-Q1](<https://qutebrowser.org/doc/changelog.html>), [R06-Q2](<https://qutebrowser.org/doc/quickstart.html>), [R06-Q3](<https://qutebrowser.org/doc/install.html>).

Feature limitations:

- The shadow-DOM addition is version-scoped documentary evidence, not a test of all pages, elements or Qt builds.
- Input conflicts, focus restoration, keyboard layouts and assistive-technology behavior were not tested; keyboard operation alone does not establish accessibility conformance.

<a id="R06-F-QUTEBROWSER-SESSION-CONTROL"></a>

#### Keyboard tab and session control — R06-F-QUTEBROWSER-SESSION-CONTROL

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| session-management | Linux<br>Windows<br>macOS | documented | vendor-documented / high |

The quickstart documents closing and undo-closing tabs, saving open tabs on quit and configurable session saving through keyboard-oriented workflows.

Sources: [R06-Q2](<https://qutebrowser.org/doc/quickstart.html>), [R06-Q3](<https://qutebrowser.org/doc/install.html>).

Feature limitations:

- No close, restore, quit or session-persistence behavior was exercised.
- Documentation does not establish identical session behavior across every platform, backend or package.

<a id="R06-F-QUTEBROWSER-VIM-NAVIGATION"></a>

#### Vim-style keyboard navigation — R06-F-QUTEBROWSER-VIM-NAVIGATION

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| keyboard-navigation | Linux<br>Windows<br>macOS | documented | vendor-documented / high |

The quickstart documents hjkl navigation, history traversal, tab switching and keyboard URL or search entry.

Sources: [R06-Q2](<https://qutebrowser.org/doc/quickstart.html>), [R06-Q3](<https://qutebrowser.org/doc/install.html>).

Feature limitations:

- Instructions were read, not timed or tested with international keyboard layouts or assistive technology.
- Documented distribution platforms do not establish identical bindings or behavior in every package; other community ports retain package/backend caveats.

Browser limitations:

- No task-efficiency or assistive-technology test was run.
- Official Windows/macOS binaries require manual updates and are documented without proprietary codecs.
- Community packages may have different engine versions and update policies.
- Partial QtWebEngine WebExtensions work does not establish official qutebrowser extension support.
- An accessibility-disabling workaround on affected Qt versions means keyboard-first must not be equated with comprehensive accessibility.

<a id="R06-B-SERVO"></a>

### Servo — R06-B-SERVO

Browser lifecycle: **experimental**. Browser platforms: Windows<br>macOS<br>Linux<br>Android<br>OpenHarmony<br>FreeBSD: build milestone with qualifications. [Catalog qualifications](<CATALOG.md#R06-B-SERVO>). Sources: [R06-S1](<https://servo.org/>), [R06-S2](<https://raw.githubusercontent.com/servo/servo/main/README.md>), [R06-S3](<https://api.github.com/repos/servo/servo/releases/latest>), [R06-S4](<https://github.com/servo/servo/releases/tag/v0.8.0>), [R06-S5](<https://servo.org/blog/2026/04/30/march-in-servo/>), [R06-S6](<https://servo.org/blog/2026/08/31/july-in-servo/>).

<a id="R06-F-SERVO-DEVTOOLS-CONSOLE"></a>

#### Firefox DevTools Console autocomplete — R06-F-SERVO-DEVTOOLS-CONSOLE

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| developer-tools | Windows (project target; tooling parity unverified)<br>macOS (project target; tooling parity unverified)<br>Linux (project target; tooling parity unverified) | limited | vendor-documented / high |

The July update, describing 0.5.0 work, documents basic Console autocomplete when Firefox DevTools is connected to Servo.

Sources: [R06-S2](<https://raw.githubusercontent.com/servo/servo/main/README.md>), [R06-S6](<https://servo.org/blog/2026/08/31/july-in-servo/>).

Feature limitations:

- Basic autocomplete is one documented prototype capability, not complete DevTools compatibility.
- No debugger connection or Console session was run; availability across current builds and operating systems remains unverified.

<a id="R06-F-SERVO-INPUT-ACCESSIBILITY"></a>

#### 0.8.0 input and accessibility implementation milestones — R06-F-SERVO-INPUT-ACCESSIBILITY

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| input-and-accessibility | Windows<br>macOS<br>Linux<br>Android<br>OpenHarmony | limited | vendor-documented / high |

Visible 0.8.0 release entries include beforeinput, double/triple-click selection extension, ARIA-to-AccessKit role mapping, focused-node work and WebDriver computed-role support.

Sources: [R06-S2](<https://raw.githubusercontent.com/servo/servo/main/README.md>), [R06-S4](<https://github.com/servo/servo/releases/tag/v0.8.0>).

Feature limitations:

- These are specific implementation milestones in a prototype/tech demo, not comprehensive input, screen-reader or accessibility conformance.
- Release notes were truncated to visible entries; no current-platform parity or runtime behavior was tested.
- OpenHarmony artifacts are not automatically signed for HarmonyOS, and later selection work supersedes earlier future-facing selection statements.

<a id="R06-F-SERVO-KEYBOARD-NAVIGATION"></a>

#### Keyboard navigation milestones — R06-F-SERVO-KEYBOARD-NAVIGATION

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| keyboard-navigation | Windows (project target; keyboard parity unverified)<br>macOS (project target; keyboard parity unverified)<br>Linux (project target; keyboard parity unverified) | limited | vendor-documented / high |

The March progress update documents Tab navigation, accesskey activation with Alt+Shift and scrolling with Space or Shift+Space.

Sources: [R06-S2](<https://raw.githubusercontent.com/servo/servo/main/README.md>), [R06-S5](<https://servo.org/blog/2026/04/30/march-in-servo/>).

Feature limitations:

- Version-scoped prototype-engine progress, not complete browser keyboard support or assistive-technology conformance.
- No keyboard interaction was run; desktop equivalence, mobile behavior and the separate FreeBSD build milestone were not validated.

<a id="R06-F-SERVO-WEB-GRAPHICS"></a>

#### WebGL and version-qualified WebGPU work — R06-F-SERVO-WEB-GRAPHICS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| web-graphics | Windows<br>macOS<br>Linux<br>Android<br>OpenHarmony | limited | vendor-documented / high |

Servo&#39;s homepage describes WebGL and WebGPU support. Its July progress report, covering 0.5.0, specifically documents WebGPU work behind dom\_webgpu\_enabled.

Sources: [R06-S1](<https://servo.org/>), [R06-S2](<https://raw.githubusercontent.com/servo/servo/main/README.md>), [R06-S6](<https://servo.org/blog/2026/08/31/july-in-servo/>).

Feature limitations:

- Graphics completeness and current defaults were not established for each project platform; the historical flag statement is not an all-version default claim.
- Experimental engine documentation only; no graphics, GPU, compatibility or performance tests were run.

<a id="R06-F-SERVO-WEBVIEW"></a>

#### WebView embedding API — R06-F-SERVO-WEBVIEW

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| embedding | Windows<br>macOS<br>Linux<br>Android<br>OpenHarmony | limited | vendor-documented / high |

Servo documents a WebView API for embedding web content in applications through its modular Rust-based engine.

Sources: [R06-S1](<https://servo.org/>), [R06-S2](<https://raw.githubusercontent.com/servo/servo/main/README.md>).

Feature limitations:

- Servo is a prototype engine; the listed project targets do not establish equal embedding API coverage or release-binary support.
- No embedding integration, build or performance comparison was run; embeddability is distinct from a complete end-user browser.

Browser limitations:

- No runtime build, benchmark or application-compatibility assessment.
- Graphics, accessibility and other APIs are evolving; defaults and completeness differ by version/platform.
- Earlier selection limitations must be qualified against subsequent 0.8.0 work.
- OpenHarmony artifacts are not automatically signed for HarmonyOS.
- A FreeBSD build milestone does not establish equivalent release binaries.
- Treat as engine-diversity/interoperability research, not an unqualified migration option.

<a id="R06-B-W3M"></a>

### w3m — R06-B-W3M

Browser lifecycle: **unknown**. Browser platforms: Unix-like systems<br>Linux and BSD: historical documented platforms<br>macOS: historical documentation; current packaging unverified<br>Windows via Cygwin: historical documentation; current packaging unverified. [Catalog qualifications](<CATALOG.md#R06-B-W3M>). Sources: [R06-W1](<https://raw.githubusercontent.com/tats/w3m/master/README>), [R06-W2](<https://raw.githubusercontent.com/tats/w3m/master/doc/README>), [R06-W3](<https://raw.githubusercontent.com/tats/w3m/master/doc/w3m.1>), [R06-W4](<https://raw.githubusercontent.com/tats/w3m/master/doc/README.tab>), [R06-W5](<https://raw.githubusercontent.com/tats/w3m/master/doc/README.sixel>), [R06-W6](<https://api.github.com/repos/tats/w3m/commits?per_page=3>), [R06-W7](<https://tracker.debian.org/pkg/w3m>), [R06-W8](<https://github.com/tats/w3m/releases>).

<a id="R06-F-W3M-BROWSER-PAGER"></a>

#### Combined browser and pager workflow — R06-F-W3M-BROWSER-PAGER

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| text-and-pipeline-workflows | Unix-like systems (historical maintained-fork documentation; current OS coverage unverified) | documented | source-inspected / medium |

The inspected maintained-fork documentation describes displaying files or standard input and rendering HTML to standard output with -dump.

Sources: [R06-W2](<https://raw.githubusercontent.com/tats/w3m/master/doc/README>), [R06-W3](<https://raw.githubusercontent.com/tats/w3m/master/doc/w3m.1>).

Feature limitations:

- Documentary capability only; no terminal command or pipeline was executed.
- The README and manpage have historical dates. Overall upstream lifecycle and current distribution/platform support remain unknown.

<a id="R06-F-W3M-BUFFERS-TABS"></a>

#### Keyboard buffers and tabs — R06-F-W3M-BUFFERS-TABS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| tab-management | Unix-like systems (historical maintained-fork documentation; current OS coverage unverified) | documented | source-inspected / medium |

The maintained-fork manual and tab documentation describe buffers, tabs, tab-selection menus and user-overridable key bindings.

Sources: [R06-W3](<https://raw.githubusercontent.com/tats/w3m/master/doc/w3m.1>), [R06-W4](<https://raw.githubusercontent.com/tats/w3m/master/doc/README.tab>).

Feature limitations:

- No key binding, terminal interaction or tab workflow was tested; some documented functions have no default binding.
- Historical documentation does not settle current per-platform support or the project&#39;s unknown overall upstream lifecycle.

<a id="R06-F-W3M-GRAPHICAL-HANDOFF"></a>

#### Explicit graphical-browser URL handoff — R06-F-W3M-GRAPHICAL-HANDOFF

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| browser-handoff | Unix-like systems (historical maintained-fork documentation; current OS coverage unverified) | documented | source-inspected / medium |

The maintained-fork manual documents sending the current target URL to a graphical browser with a command when text rendering is inadequate.

Sources: [R06-W3](<https://raw.githubusercontent.com/tats/w3m/master/doc/w3m.1>).

Feature limitations:

- No handoff or external browser was launched; configuration, destination-browser and per-platform behavior were not tested.
- A URL handoff is a complementary workflow, not proof of shared session state or modern-web equivalence. Overall upstream lifecycle remains unknown.

<a id="R06-F-W3M-OPTIONAL-GRAPHICS"></a>

#### Optional inline graphics and external image viewing — R06-F-W3M-OPTIONAL-GRAPHICS

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| terminal-graphics | Unix-like systems (compatible terminal, build and external tools required; current OS coverage unverified) | limited | source-inspected / medium |

The inspected documentation describes optional inline graphics using w3m-img or a sixel-enabled setup, with external image viewers as another documented route.

Sources: [R06-W2](<https://raw.githubusercontent.com/tats/w3m/master/doc/README>), [R06-W3](<https://raw.githubusercontent.com/tats/w3m/master/doc/w3m.1>), [R06-W5](<https://raw.githubusercontent.com/tats/w3m/master/doc/README.sixel>).

Feature limitations:

- Graphics depend on terminal support, build configuration and optional external dependencies; no dependency was installed or graphics path tested.
- Historical documentation establishes neither current native macOS/Windows packaging nor active overall upstream maintenance; lifecycle remains unknown.

<a id="R06-F-W3M-TABLES-FRAMES"></a>

#### Text layout for HTML tables and frames — R06-F-W3M-TABLES-FRAMES

| Category | Platform / edition | Availability | Evidence / confidence |
| --- | --- | --- | --- |
| text-rendering | Unix-like systems (historical maintained-fork documentation; current OS coverage unverified) | documented | source-inspected / medium |

The inspected manual documents text layout for HTML tables and frames rather than simply stripping all markup.

Sources: [R06-W3](<https://raw.githubusercontent.com/tats/w3m/master/doc/w3m.1>).

Feature limitations:

- The same manual says JavaScript and CSS are ignored; this is not equivalent rendering of interactive graphical applications.
- No layout tests were run. Build/platform behavior and overall upstream lifecycle remain unverified or unknown.

Browser limitations:

- Unknown is not active or abandoned; one fork&#39;s tip and empty release page cannot establish overall project lifecycle.
- Original SourceForge homepage returned HTTP 403.
- 2011 README and 2016 manpage dates are historical document dates, not a complete maintenance timeline.
- Documentary evidence only; no build, browser or terminal tests.
- Optional graphics depend on build, external tools and terminal support.
- Current distribution-specific support and native platform packaging remain unverified.

Lane limitations:

- All research is documentary. Sources and release metadata are not runtime, security, performance or accessibility evidence.
- The ten projects include released graphical browsers, specialist interfaces, a constrained graphical browser, experimental browser/engine work and terminal text tools; they are not interchangeable Chrome replacements.
- No current Chrome baseline was inspected, so no Chrome feature absence, locally reproduced defect or measured inferiority is claimed.
- Original discovery had benched/refused search engines and duplicate returned batches; duplicates were not counted as independent corroboration. Conversion reused completed research without new queries.
- Long source histories and some reader-mode responses were truncated. Claims are limited to inspected passages; generic extraction metadata was not silently promoted to publication dates.
- Unresolved: Orion Linux/Windows source-handoff completion and successor stewardship; Nyxt native Windows readiness; exact Falkon 26.08.3 release date; w3m original-upstream activity and distribution-specific support.
- Ladybird&#39;s first alpha remained future-facing in inspected sources. Servo&#39;s 0.8.0 release remains a tech demo/prototype despite its GitHub channel flag.
- Failed reads included the Orion extension-document URL (404), GNOME GitLab raw documents (406), w3m SourceForge homepage (403), an incorrect w3m README.md path (404), Lynx CHANGES URL (404), and Qt overview (403). Failure is not feature or project absence.
- Source-linked recommendations are proposals requiring a current Chrome baseline and appropriate measurement. No upstream reports were submitted and no local reproductions were performed.

## R07 — Chrome/Chromium UI, menus, toolbar, tab strip, context menus, and settings

Saved scope: Publicly documented browser-chrome defects and usability complaints, including toolbar pinning and the operating-system settings surface for Chrome permissions. Excludes general web rendering, DevTools, security vulnerability hunting, and local build work.. Shard: [R07](<data/lanes/R07.json>). Status: complete.

No browser/feature entries in this shard.

Lane limitations:

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

## R08 — Chrome/Chromium accessibility, performance and reliability regressions

Saved scope: Publicly documented accessibility, performance/memory, platform reliability, printing/PDF/download and extension-regression issues, investigated on 2026-11-21. Reuses completed documentary research; includes proposed verification but no local browser reproductions.. Shard: [R08](<data/lanes/R08.json>). Status: complete.

No browser/feature entries in this shard.

Lane limitations:

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

## R09 — Chromium desktop toolbar menus and customization: source-only audit

Saved scope: Bounded inspection of toolbar button context-menu construction and enablement, responsive overflow-menu identity and state, and Customize Toolbar pinning/settings, with selected menu, preference, action and test dependencies.. Shard: [R09](<data/lanes/R09.json>). Status: complete.

No browser/feature entries in this shard.

Lane limitations:

- This shard converts completed source research; it adds no new Chromium research or runtime evidence.
- Thirty files were inspected, some only in focused excerpts; this is not a general audit of all desktop menus.
- App three-dot menu internals, tab-strip/renderer context menus, macOS native integration, complete feature gates, full policy-test inventory and platform-wide accessibility remain unaudited.
- Chromium main at the pinned revision is the only source baseline. Installed/released Chrome versions and field-trial states were not inspected, so released-version impact is unknown.
- No Chromium build, source execution, browser reproduction or Chromium test run was performed in this lane. Proposed reproduction steps are not test results.
- Per-file publication dates were not established; copyright years are not publication dates. Some retrievals retain only date-level precision.
- No candidate has a repository-wide test search or exhaustive body-verified duplicate search. Issue 359863838 remains an inaccessible overlap lead.
- Null-active-tab, checkbox-role-transition and drag-edge leads were not traced far enough to promote. TODOs, nonfatal CHECK migration markers and intentional feature gates were not counted as defects.
- No child agents or upstream submissions were made. All five issue records remain needs-validation with empty testedVersions.

## R10 — Installed Chrome executable: bounded static evidence

Saved scope: One installed Windows chrome.exe: identity, five target-free REA inspections, and cache-only Windows Authenticode verification.. Shard: [R10](<data/lanes/R10.json>). Status: complete.

No browser/feature entries in this shard.

Lane limitations:

- This is not a full reverse engineering of Chrome or a completed Chromium source build.
- Feature, menu and runtime behavior cannot be inferred from these static declarations.
- Discovery examined three standard executable locations, not the entire computer.

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

**R01-S10 — [Stable Channel Update for Desktop — November 17, 2026](<https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html>)**

Kind: release-note. Retrieved: 2026-11-21T14:19:19.839Z. Published: 2026-11-17.

- **date Evidence:** The page date heading states Tuesday, November 17, 2026.

Source limitations:

- Reader extraction at 2026-11-21T14:17:58Z returned only the date and footer. A read-only HTTP retrieval recovered the actual post body at the recorded retrievedAt time.
- The announcement establishes promotion and staged rollout, not installation on every Stable client.
- The November archive returned HTTP 429; the month was not exhaustively enumerated.

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

**R05-G01 — [GrapheneOS technical documentation: Vanadium](<https://grapheneos.org/features#vanadium>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:23:10Z. Published: not established.

Source limitations:

- Undated rolling technical documentation includes both implemented and future work. Browser versus WebView defaults and OS/hardware prerequisites differ; no runtime security measurements were made.

**R05-G02 — [Vanadium latest-release API and official distribution boundary](<https://api.github.com/repos/GrapheneOS/Vanadium/releases/latest>)**

Kind: release-note. Retrieved: 2026-11-21T14:31:10Z. Published: 2026-11-19T15:52:47Z.

Source limitations:

- Snapshot returned 158.0.8127.42.0 and Chromium 158.0.8127.42. Official availability is GrapheneOS-only; a future outside-GrapheneOS edition is not an observed shipped product.

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
