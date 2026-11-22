# Browser catalog

[CATALOG](<CATALOG.md>) · [FEATURES](<FEATURES.md>) · [ISSUES](<ISSUES.md>) · [AGENTS-LEDGER](<AGENTS-LEDGER.md>) · [RECOMMENDATIONS](<RECOMMENDATIONS.md>)

Generated from the saved JSON research shards. Rendering performs no research, source refresh, browser tests, builds, or submissions.

**Recovery notice:** Loaded lanes labelled as non-byte-exact reconstructions: [R01](<data/lanes/R01.json>), [R03](<data/lanes/R03.json>), [R04](<data/lanes/R04.json>), [R07](<data/lanes/R07.json>), [R08](<data/lanes/R08.json>), [R09](<data/lanes/R09.json>). See the `recovery` metadata in each linked JSON shard for provenance and limitations. Reconstruction does not establish fresh research or testing; original source dates and saved lane status retain their meanings.

Loaded snapshot: **10 lane shards**, **47 browser records**, **286 feature records**, **38 issue records**, **403 source records**. Counts describe records, not unique products or independently verified claims.

Saved lane status: **10 complete**, **0 partial**, out of **10 loaded shards**. These are the shards’ own scope/status labels; “complete” does not mean a complete project, exhaustive catalog, finished validation, or completed publication. Missing shards are outside this snapshot.

Recorded source-retrieval days: **2026-11-21**. Exact retrieval and original publication dates appear with the cited sources; no generation timestamp is substituted.

Documentary descriptions and upstream observations do not establish local behavior or universal availability. A missing browser, feature, or issue is not evidence of absence. Chrome parity and new-defect claims require their own evidence.

## R01 — Chrome–Chromium source, reporting channels, release, and feature baseline

Saved scope: Primary-source research on Chrome versus Chromium source availability and licensing, the official source mirror, contribution and reporting routes, Stable release evidence, and Chrome features relevant to competitor-derived improvement requests.. Shard: [R01](<data/lanes/R01.json>). Status: complete.

<a id="R01-BROWSER-CHROME"></a>

### Google Chrome — R01-BROWSER-CHROME

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows<br>macOS<br>Linux<br>Android<br>iOS<br>ChromeOS | Chromium-based foundation documented by Google; exact rendering-engine details and the current iOS engine were not independently established in this lane. | vendor-documented / high |

Google&#39;s actively released browser distribution is built on Chromium and adds proprietary and account-backed components under additional executable terms. The research snapshot documents the Chrome 158 desktop Stable promotion and small Chrome 159 records also present in the Stable release API. Feature records describe the vendor-published baseline, not a locally tested browser configuration.

Saved feature records: **21**. [Feature details](<FEATURES.md#R01-BROWSER-CHROME>).

Sources: [R01-S01](<https://developer.chrome.com/docs/web-platform/chrome-chromium>), [R01-S02](<https://www.google.com/chrome/terms/>), [R01-S03](<https://github.com/chromium/chromium>), [R01-S10](<https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html>), [R01-S12](<https://versionhistory.googleapis.com/v1/chrome/platforms/win64/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S13](<https://versionhistory.googleapis.com/v1/chrome/platforms/mac_arm64/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S14](<https://versionhistory.googleapis.com/v1/chrome/platforms/linux/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S15](<https://versionhistory.googleapis.com/v1/chrome/platforms/android/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S16](<https://versionhistory.googleapis.com/v1/chrome/platforms/ios/channels/stable/versions/all/releases?filter=endtime%3Dnone&order_by=version%20desc>), [R01-S20](<https://support.google.com/chrome/answer/16971124?hl=en&co=GENIE.Platform%3DDesktop>), [R01-S38](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>).

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

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows<br>macOS<br>Linux<br>Android<br>iOS/iPadOS | Chromium/Blink on desktop and Android; WebKit on iOS/iPadOS. No alternate regional engine build was verified. | vendor-documented / high |

Brave documents default Shields, user-held-key encrypted Sync, Leo with local/remote model options, and browser-native identity helpers. Standard Brave, paid Origin, Leo Premium, VPN, and Email Aliases have distinct prerequisites and feature sets.

- **variants:** **description:** Remains free and supported according to the Origin announcement.<br>**name:** Standard Brave<br>**sourceIds:** [R02-B6](<https://brave.com/blog/brave-origin>)<br>**description:** Desktop minimalist build compiles listed extras out; paid one-time offer, free on Linux.<br>**name:** Brave Origin standalone<br>**sourceIds:** [R02-B6](<https://brave.com/blog/brave-origin>)<br>**description:** Desktop/mobile feature-control upgrade disables listed extras by default and permits toggling; version 1.91+ is documented.<br>**name:** Brave Origin upgrade<br>**sourceIds:** [R02-B6](<https://brave.com/blog/brave-origin>)
- **tradeoffs:** **description:** Encrypted Sync cannot be recovered by Brave if devices/keys are lost; inactive chains expire. Playlist is iOS-limited, non-DRM, and non-exportable.<br>**sourceIds:** [R02-B2](<https://brave.com/privacy/browser/>), [R02-B4](<https://brave.com/playlist/>)<br>**description:** Hosted Leo transmits prompt/page or tab context; the policy permits short prompt caching and retains submitted feedback for one year. Alias forwarding retains mappings and has delivery-retry/debugging exceptions.<br>**sourceIds:** [R02-B2](<https://brave.com/privacy/browser/>), [R02-B5](<https://brave.com/privacy-updates/39-email-aliases/>)<br>**description:** Origin standalone removes several features otherwise described for standard Brave. Brave Ads can appear without Rewards enabled.<br>**sourceIds:** [R02-B2](<https://brave.com/privacy/browser/>), [R02-B6](<https://brave.com/blog/brave-origin>)

Saved feature records: **7**. [Feature details](<FEATURES.md#R02-browser-brave>).

Sources: [R02-A1](<https://developer.chrome.com/docs/web-platform/blink>), [R02-A2](<https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/>), [R02-B1](<https://brave.com/features/>), [R02-B2](<https://brave.com/privacy/browser/>), [R02-B3](<https://brave.com/leo/>), [R02-B4](<https://brave.com/playlist/>), [R02-B5](<https://brave.com/privacy-updates/39-email-aliases/>), [R02-B6](<https://brave.com/blog/brave-origin>), [R02-B7](<https://brave.com/firewall-vpn/>).

Browser limitations:

- No runtime checks, blocking benchmarks, or independent privacy audit.
- Latest stable build, exact region/pricing restrictions, Sync onboarding, BYOM platform matrix, and future mobile-alias/desktop-Playlist/Linux-VPN dates remain unknown.
- Chrome parity is unassessed.

<a id="R02-browser-edge"></a>

### Microsoft Edge — R02-browser-edge

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows<br>macOS<br>Linux<br>Android<br>iOS/iPadOS | Chromium/Blink on desktop and Android; WebKit on iOS/iPadOS. Regional alternative-engine permission is not evidence of a different shipped engine. | vendor-documented / high |

Edge documents project workspaces, split/vertical tabs, policy-manageable resource controls, accessibility assistance, and reversible abuse controls. The inspected Stable release is 158.0.4370.33 dated November 19, 2026; Collections and Workspaces V1 require lifecycle corrections.

- **platform Qualifications:** **description:** Edge 151+ requires macOS 13+. Android support requires Android 10+ on ARM. iOS support covers the two latest major releases. Supported Linux distributions are enumerated; Chromebooks are explicitly unsupported.<br>**sourceIds:** [R02-E2](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-supported-operating-systems>)<br>**description:** Microsoft promises Edge/WebView2 updates on Windows 10 22H2 through at least October 2028 without Windows ESU enrollment; this is not Windows OS support.<br>**sourceIds:** [R02-E2](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-supported-operating-systems>)<br>**description:** Workspaces V2 requires a signed-in Microsoft/AAD account and is documented for Windows/macOS desktop, despite the browser&#39;s broader platform support.<br>**sourceIds:** [R02-E3](<https://support.microsoft.com/en-us/edge/getting-started-with-microsoft-edge-workspaces>)
- **documented Version:** **channel:** Stable<br>**latestVersionClaim:** false<br>**releasedAt:** 2026-11-19<br>**sourceIds:** [R02-E1](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel>)<br>**version:** 158.0.4370.33
- **tradeoffs:** **description:** New Workspaces removes sharing, collaboration, invitations, and tab locking. Collections-to-Favorites migration preserves URLs but not notes or images.<br>**sourceIds:** [R02-E3](<https://support.microsoft.com/en-us/edge/getting-started-with-microsoft-edge-workspaces>), [R02-E4](<https://support.microsoft.com/en-us/edge/organize-your-ideas-with-collections-in-microsoft-edge>)<br>**description:** Energy saving may cause visible slowdowns or less-smooth video; exceptions and mode-dependent timing matter.<br>**sourceIds:** [R02-E7](<https://support.microsoft.com/en-us/edge/learn-about-performance-features-in-microsoft-edge>)

Saved feature records: **8**. [Feature details](<FEATURES.md#R02-browser-edge>).

Sources: [R02-A1](<https://developer.chrome.com/docs/web-platform/blink>), [R02-A2](<https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/>), [R02-E1](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel>), [R02-E2](<https://learn.microsoft.com/en-us/deployedge/microsoft-edge-supported-operating-systems>), [R02-E3](<https://support.microsoft.com/en-us/edge/getting-started-with-microsoft-edge-workspaces>), [R02-E4](<https://support.microsoft.com/en-us/edge/organize-your-ideas-with-collections-in-microsoft-edge>), [R02-E5](<https://explore.microsoft.com/en-us/edge/features/split-screen>), [R02-E6](<https://explore.microsoft.com/en-us/edge/features/vertical-tabs>), [R02-E7](<https://support.microsoft.com/en-us/edge/learn-about-performance-features-in-microsoft-edge>), [R02-E8](<https://support.microsoft.com/en-us/accessibility/edge/accessibility-features-in-microsoft-edge>).

Browser limitations:

- No browser runtime or accessibility tests.
- Consumer/enterprise rollout, detailed Linux feature parity, image-description processing/retention, and Remix backend/region limits were not established.
- Chrome parity is unassessed.

<a id="R02-browser-firefox"></a>

### Firefox — R02-browser-firefox

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows<br>macOS<br>GNU/Linux<br>Android<br>iOS/iPadOS | Gecko on desktop and Android; WebKit/WKWebView on iOS/iPadOS. | vendor-documented / high |

Official documentation describes per-tab identity containers, local webpage translation, cookie partitioning, vertical tabs, multiple PiP windows, and built-in PDF tools. Firefox 160.0, released November 10, 2026, is the latest dated release inspected.

- **platform Qualifications:** **description:** Firefox 160 desktop requires Windows 10+, macOS 10.15+, or the listed GNU/Linux libraries.<br>**sourceIds:** [R02-F2](<https://www.firefox.com/en-US/firefox/160.0/system-requirements/>)<br>**description:** The iOS implementation does not use Gecko; desktop/Android engine-dependent features cannot be assumed on iOS.<br>**sourceIds:** [R02-F3](<https://firefox-source-docs.mozilla.org/overview/gecko.html>), [R02-F4](<https://firefox-source-docs.mozilla.org/overview/ios.html>)
- **documented Version:** **latestVersionClaim:** false<br>**releasedAt:** 2026-11-10<br>**sourceIds:** [R02-F1](<https://www.firefox.com/en-US/firefox/160.0/releasenotes/>)<br>**version:** 160.0
- **tradeoffs:** **description:** Container configuration sync requires an account; the full documented container workflow is an add-on, not proven to be bundled by default.<br>**sourceIds:** [R02-F6](<https://blog.mozilla.org/security/2020/02/06/multi-account-containers-sync/>)<br>**description:** Local translation requires model downloads and local processing; cookie partitioning has Storage Access API exceptions.<br>**sourceIds:** [R02-F5](<https://www.firefox.com/en-US/features/total-cookie-protection/>), [R02-F7](<https://www.firefox.com/en-US/features/translate/>), [R02-F8](<https://blog.mozilla.org/en/firefox/cjk-translation-on-android/>)<br>**description:** Mini Window remains an early version in Firefox 160.<br>**sourceIds:** [R02-F1](<https://www.firefox.com/en-US/firefox/160.0/releasenotes/>)

Saved feature records: **7**. [Feature details](<FEATURES.md#R02-browser-firefox>).

Sources: [R02-F1](<https://www.firefox.com/en-US/firefox/160.0/releasenotes/>), [R02-F10](<https://www.firefox.com/en-US/features/picture-in-picture/>), [R02-F11](<https://www.firefox.com/en-US/features/pdf-editor/>), [R02-F2](<https://www.firefox.com/en-US/firefox/160.0/system-requirements/>), [R02-F3](<https://firefox-source-docs.mozilla.org/overview/gecko.html>), [R02-F4](<https://firefox-source-docs.mozilla.org/overview/ios.html>), [R02-F5](<https://www.firefox.com/en-US/features/total-cookie-protection/>), [R02-F6](<https://blog.mozilla.org/security/2020/02/06/multi-account-containers-sync/>), [R02-F7](<https://www.firefox.com/en-US/features/translate/>), [R02-F8](<https://blog.mozilla.org/en/firefox/cjk-translation-on-android/>), [R02-F9](<https://www.firefox.com/en-US/features/vertical-tabs/>).

Browser limitations:

- No browser runtime checks or comparative measurements.
- Current add-on version, latest patch, mobile minimum OS versions, ESR support horizon, and Mini Window rollout fraction are unknown.
- Chrome parity is unassessed.

<a id="R02-browser-opera"></a>

### Opera / Opera One — R02-browser-opera

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows<br>macOS<br>Linux<br>Android<br>iOS/iPadOS | Chromium/Blink on desktop and Android; WebKit on iOS/iPadOS. Inspected Opera Stable 140.0.6074.36 identifies Chromium 157.0.8103.79. | vendor-documented / medium |

The flagship Opera One product documents automatic Tab Islands, split-screen composition, encrypted cross-device handoff, clipboard-abuse defenses, selection converters, browser VPN, blockers, and capture tools. Opera GX, Air, Neon, and Mini are distinct variants.

- **platform Qualifications:** **description:** Mobile catalogue explicitly lists Android/iOS. Desktop families appear in the official requirements-page title, but minimum-version extraction was insufficient.<br>**sourceIds:** [R02-O1](<https://www.opera.com/download>), [R02-O8](<https://www.opera.com/download/requirements>)
- **documented Version:** **channel:** Stable<br>**chromiumVersion:** 157.0.8103.79<br>**latestVersionClaim:** false<br>**releasedAt:** 2026-11-18<br>**sourceIds:** [R02-O2](<https://blogs.opera.com/desktop/2026/11/opera-140-0-6074-36-stable-update/>)<br>**version:** 140.0.6074.36
- **tradeoffs:** **description:** Flow file size/expiry limits make it a handoff buffer. Currency/timezone conversion needs unambiguous inputs and fresh reference rates.<br>**sourceIds:** [R02-O3](<https://help.opera.com/en/latest/features/>)<br>**description:** Clipboard checks can interrupt intended command copying; overrides exist. Browser VPN does not remove account/cookie identity or prove device-wide protection.<br>**sourceIds:** [R02-O5](<https://blogs.opera.com/security/2026/07/how-opera-paste-protect-guards-against-clipboard-attacks/>), [R02-O7](<https://help.opera.com/latest/security-and-privacy/#VPN>)<br>**description:** Ad/tracker blocking includes enablement, filter, and site-exception boundaries.<br>**sourceIds:** [R02-O3](<https://help.opera.com/en/latest/features/>)

Saved feature records: **8**. [Feature details](<FEATURES.md#R02-browser-opera>).

Sources: [R02-A1](<https://developer.chrome.com/docs/web-platform/blink>), [R02-A2](<https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/>), [R02-O1](<https://www.opera.com/download>), [R02-O2](<https://blogs.opera.com/desktop/2026/11/opera-140-0-6074-36-stable-update/>), [R02-O3](<https://help.opera.com/en/latest/features/>), [R02-O4](<https://www.opera.com/features/tab-islands>), [R02-O5](<https://blogs.opera.com/security/2026/07/how-opera-paste-protect-guards-against-clipboard-attacks/>), [R02-O6](<https://www.opera.com/features/free-vpn>), [R02-O7](<https://help.opera.com/latest/security-and-privacy/#VPN>), [R02-O8](<https://www.opera.com/download/requirements>).

Browser limitations:

- No runtime checks, detection benchmarks, VPN audit, or security-patch-lag measurement.
- Minimum OS versions, current mobile feature matrix, Flow&#39;s contemporary iOS steps, blocker defaults by platform, and VPN geography/throughput remain incomplete.
- Chrome parity is unassessed.

<a id="R02-browser-opera-gx"></a>

### Opera GX — R02-browser-opera-gx

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows<br>macOS<br>Linux<br>Android<br>iOS/iPadOS | Opera-family Chromium/Blink on desktop/Android and WebKit on iOS/iPadOS; a GX-specific current Chromium revision was not verified and is not copied from Opera One. | vendor-documented / medium |

Opera GX documents visible resource budgets, resource-heavy tab controls, modular customization, workspaces, media controls, cleanup, and upload convenience. Linux shipped March 19, 2026; its specific documentation confirms RAM/network controls rather than a CPU-limiter guarantee.

- **platform Qualifications:** **description:** Linux launch lists Debian/Ubuntu/Fedora/openSUSE-based distributions; the current product page advertises weekly builds. CPU limiter support on Linux is not established by its RAM/network wording.<br>**sourceIds:** [R02-G1](<https://blogs.opera.com/news/2026/03/opera-gx-lands-on-linux/>), [R02-G2](<https://www.opera.com/gx/linux>), [R02-G3](<https://www.opera.com/gx/features/gx-control>)<br>**description:** The catalogue lists mobile versions, but does not establish desktop limiter or mod parity on phones.<br>**sourceIds:** [R02-G6](<https://blogs.opera.com/news/2026/06/step-into-summer-with-a-massive-update-from-gx/>), [R02-O1](<https://www.opera.com/download>)
- **tradeoffs:** **description:** The vendor reports adjustments to prevent configurations that severely affect browsing. Closing heavy tabs and cleaning data can lose useful state.<br>**sourceIds:** [R02-G1](<https://blogs.opera.com/news/2026/03/opera-gx-lands-on-linux/>), [R02-G6](<https://blogs.opera.com/news/2026/06/step-into-summer-with-a-massive-update-from-gx/>), [R02-G8](<https://www.opera.com/gx/features/gx-cleaner>)<br>**description:** Sounds, shaders, and mods may distract or add resource use; the net effect was not measured.<br>**evidenceType:** hypothesis<br>**sourceIds:** [R02-G4](<https://www.opera.com/gx/features/mods>)

Saved feature records: **8**. [Feature details](<FEATURES.md#R02-browser-opera-gx>).

Sources: [R02-A1](<https://developer.chrome.com/docs/web-platform/blink>), [R02-A2](<https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/>), [R02-G1](<https://blogs.opera.com/news/2026/03/opera-gx-lands-on-linux/>), [R02-G2](<https://www.opera.com/gx/linux>), [R02-G3](<https://www.opera.com/gx/features/gx-control>), [R02-G4](<https://www.opera.com/gx/features/mods>), [R02-G5](<https://www.opera.com/gx/features/workspaces>), [R02-G6](<https://blogs.opera.com/news/2026/06/step-into-summer-with-a-massive-update-from-gx/>), [R02-G7](<https://www.opera.com/gx/features/rgx>), [R02-G8](<https://www.opera.com/gx/features/gx-cleaner>), [R02-O1](<https://www.opera.com/download>).

Browser limitations:

- No limiter, game-frame, media-processing, startup-speed, or cleanup runtime tests.
- Current GX build, Linux CPU-limiter availability, full mobile matrix, and mod permissions/review remain unknown.
- Chrome parity is unassessed.

<a id="R02-browser-safari"></a>

### Apple Safari — R02-browser-safari

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | macOS<br>iOS<br>iPadOS<br>visionOS | WebKit. | vendor-documented / high |

Safari documents OS-integrated profiles, collaborative Tab Groups, private-window locking, reversible element hiding, standalone web apps, Reader, and privacy controls. Availability is constrained by Apple OS/hardware eligibility; Private Relay and AI summaries have additional prerequisites.

- **platform Qualifications:** **description:** Updates arrive through operating-system updates/upgrades. Apple no longer provides Safari updates for Windows or other non-Apple operating systems.<br>**sourceIds:** [R02-S1](<https://support.apple.com/en-us/102665>)<br>**description:** The Safari 27.1 article does not establish that version as current on every Apple OS; posture/viewport-segment APIs remain flag-gated previews in that article.<br>**sourceIds:** [R02-S2](<https://webkit.org/blog/18486/webkit-features-for-safari-27-1/>)
- **documented Version:** **latestVersionClaim:** false<br>**releasedAt:** 2026-10-23<br>**scope:** Inspected iPhone Duo release article only<br>**sourceIds:** [R02-S2](<https://webkit.org/blog/18486/webkit-features-for-safari-27-1/>)<br>**version:** 27.1
- **tradeoffs:** **description:** Profile separation does not include passwords, AutoFill, all bookmarks, or all settings; shared groups require Apple&#39;s account ecosystem.<br>**sourceIds:** [R02-S3](<https://support.apple.com/en-us/105100>), [R02-S4](<https://support.apple.com/guide/safari/share-tab-groups-collaborate-safari-mac-ibrw7f189b02/mac>)<br>**description:** Distraction Control is unreliable for frequently changing elements. Private-window locks have media exceptions; AI summaries and Private Relay have distinct eligibility limits.<br>**sourceIds:** [R02-S10](<https://support.apple.com/guide/apple-vision-pro/browse-the-web-privately-tan4d3bd79f8/visionos>), [R02-S5](<https://support.apple.com/en-us/105028>), [R02-S6](<https://support.apple.com/en-us/120682>), [R02-S8](<https://support.apple.com/guide/safari/hide-ads-when-reading-sfri32632/mac>)

Saved feature records: **8**. [Feature details](<FEATURES.md#R02-browser-safari>).

Sources: [R02-A1](<https://developer.chrome.com/docs/web-platform/blink>), [R02-S1](<https://support.apple.com/en-us/102665>), [R02-S10](<https://support.apple.com/guide/apple-vision-pro/browse-the-web-privately-tan4d3bd79f8/visionos>), [R02-S2](<https://webkit.org/blog/18486/webkit-features-for-safari-27-1/>), [R02-S3](<https://support.apple.com/en-us/105100>), [R02-S4](<https://support.apple.com/guide/safari/share-tab-groups-collaborate-safari-mac-ibrw7f189b02/mac>), [R02-S5](<https://support.apple.com/en-us/105028>), [R02-S6](<https://support.apple.com/en-us/120682>), [R02-S7](<https://support.apple.com/en-us/104996>), [R02-S8](<https://support.apple.com/guide/safari/hide-ads-when-reading-sfri32632/mac>), [R02-S9](<https://support.apple.com/guide/safari/prevent-cross-site-tracking-sfri40732/mac>).

Browser limitations:

- No runtime, privacy, or performance measurements.
- Latest patch per OS, complete Apple Intelligence eligibility, Highlights details, and cross-device persistence of hidden elements were not established.
- Chrome parity is unassessed.

<a id="R02-browser-vivaldi"></a>

### Vivaldi — R02-browser-vivaldi

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows<br>macOS<br>Linux<br>Android<br>iOS/iPadOS<br>Raspberry Pi<br>Android Automotive (vehicle-specific) | Chromium/Blink on desktop and Android; WebKit on iOS/iPadOS. Exact current embedded-engine revision was not pinned. | vendor-documented / high |

Vivaldi combines rule-routed workspaces, hierarchical Tab Stacks, multi-way tiling, command chains, arbitrary web panels, provenance-preserving notes, and optional productivity panels. Desktop 7.8 is an inspected shipping milestone, not the asserted latest build.

- **platform Qualifications:** **description:** Current download text lists desktop OS families; the 2023 cross-platform release also lists mobile, Raspberry Pi, and Android Automotive. Car support is vehicle-specific.<br>**sourceIds:** [R02-V1](<https://vivaldi.com/download>), [R02-V2](<https://vivaldi.com/blog/vivaldi-on-desktop-6-4/>)
- **documented Version:** **latestVersionClaim:** false<br>**releasedAt:** 2026-01-29<br>**scope:** Desktop release inspected<br>**sourceIds:** [R02-V3](<https://vivaldi.com/blog/vivaldi-on-desktop-7-8/>)<br>**version:** 7.8
- **tradeoffs:** **description:** Docs acknowledge one-window workspace ownership, accidental stacking, tiny tiles, narrow-site layouts, and timing delays in chains. Hibernation is a separate operation from grouping.<br>**sourceIds:** [R02-V4](<https://help.vivaldi.com/desktop/tabs/workspaces/>), [R02-V5](<https://help.vivaldi.com/desktop/tabs/tab-stacks/>), [R02-V6](<https://help.vivaldi.com/desktop/tabs/tab-tiling/>), [R02-V7](<https://help.vivaldi.com/desktop/shortcuts/command-chains/>), [R02-V8](<https://help.vivaldi.com/desktop/panels/web-panels/>)<br>**description:** Partner bookmarks and Speed Dials can earn affiliate commission, as disclosed on the download page.<br>**sourceIds:** [R02-V1](<https://vivaldi.com/download>)<br>**description:** A broad configuration surface may increase discoverability and shortcut-conflict costs; this was not measured.<br>**evidenceType:** hypothesis<br>**sourceIds:** [R02-V10](<https://help.vivaldi.com/desktop/panels/panels/>), [R02-V5](<https://help.vivaldi.com/desktop/tabs/tab-stacks/>), [R02-V7](<https://help.vivaldi.com/desktop/shortcuts/command-chains/>)

Saved feature records: **8**. [Feature details](<FEATURES.md#R02-browser-vivaldi>).

Sources: [R02-A1](<https://developer.chrome.com/docs/web-platform/blink>), [R02-A2](<https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/>), [R02-V1](<https://vivaldi.com/download>), [R02-V10](<https://help.vivaldi.com/desktop/panels/panels/>), [R02-V2](<https://vivaldi.com/blog/vivaldi-on-desktop-6-4/>), [R02-V3](<https://vivaldi.com/blog/vivaldi-on-desktop-7-8/>), [R02-V4](<https://help.vivaldi.com/desktop/tabs/workspaces/>), [R02-V5](<https://help.vivaldi.com/desktop/tabs/tab-stacks/>), [R02-V6](<https://help.vivaldi.com/desktop/tabs/tab-tiling/>), [R02-V7](<https://help.vivaldi.com/desktop/shortcuts/command-chains/>), [R02-V8](<https://help.vivaldi.com/desktop/panels/web-panels/>), [R02-V9](<https://help.vivaldi.com/desktop/panels/notes/>).

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

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows 7+<br>macOS (Intel, Apple Silicon and PowerPC builds listed)<br>Linux (multiple architectures)<br>FreeBSD | Goanna / Unified XUL Platform (UXP), an independent pre-Servo Mozilla lineage. UXP originated from Firefox 52; Basilisk explicitly does not track current Firefox releases. | vendor-documented / high |

A classic-interface desktop browser focused on customization and long-lived workflows, with independently maintained compatibility changes and classic extension/plugin support.

- **platform Boundaries:** Windows automatic updates are documented as supported; macOS downloads explicitly require manual updates; the FreeBSD archive also has no automatic updates.<br>The release introduces Intel 32-bit macOS builds and enables MIPS64EL Linux automatic updates.<br>Supporting an old OS means the app is offered there, not that the OS receives vendor security fixes.
- **maintenance Evidence:** The release body says Published 2026-11-01, the download page labels 2026.11.01 current, and the notes identify UXP commit 6b18be917d with security and compatibility changes.
- **observed Releases:** **edition:** Desktop release<br>**publishedAt:** 2026-11-01<br>**sourceIds:** [R03-S-B3](<https://www.basilisk-browser.org/releasenotes.html>), [R03-S-B4](<https://www.basilisk-browser.org/download.html>)<br>**sourceRevision:** UXP 6b18be917d<br>**version:** 2026.11.01

Saved feature records: **4**. [Feature details](<FEATURES.md#R03-B-BASILISK>).

Sources: [R03-S-B1](<https://www.basilisk-browser.org/>), [R03-S-B2](<https://www.basilisk-browser.org/features.html>), [R03-S-B3](<https://www.basilisk-browser.org/releasenotes.html>), [R03-S-B4](<https://www.basilisk-browser.org/download.html>).

Browser limitations:

- No telemetry policy or Tor-like anonymity was established; neither is inferred from engine independence.
- Compatibility is selective: :has() is disabled by default and the listed Intl.ListFormat polyfill is en-US-only.
- Platform downloads and release notes were read, but execution, plugin behavior and update mechanisms were not tested.

<a id="R03-B-DUCKDUCKGO"></a>

### DuckDuckGo Browser — R03-B-DUCKDUCKGO

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows 10 May 2020+<br>macOS<br>iOS/iPadOS<br>Android | Windows: WebView2/Blink in a historical first-party architecture article. macOS/iOS: WebKit per platform documentation, with a WKWebView-linked macOS design. Android: Android WebView, with Chromium implementation provenance. Current engine-runtime versions were not inspected. | vendor-documented / medium |

Four platform applications using platform rendering components with a common privacy/product layer. Feature coverage, distribution constraints, and underlying engine behavior vary by platform.

- **platform Boundaries:** The Windows help page says x86 updates end after version 0.170.0; it supplies no calendar cutoff.<br>The Mac App Store edition lacks the documented Bitwarden integration and local-file access of direct distribution.<br>The protection tables include platform-specific limitations and roadmap entries; uniform feature parity is not established.
- **maintenance Evidence:** The Q3 2026 update body documents ongoing product work, including Android Fire Tabs and AI-disable controls. Public Apple and Android repository documentation was also read.
- **observed Releases:** None recorded
- **latest Overall Release:** Not recorded

Saved feature records: **6**. [Feature details](<FEATURES.md#R03-B-DUCKDUCKGO>).

Sources: [R03-S-D1](<https://duckduckgo.com/duckduckgo-help-pages/get-duckduckgo/does-duckduckgo-make-a-browser>), [R03-S-D10](<https://duckduckgo.com/duckduckgo-help-pages/get-duckduckgo/get-duckduckgo-browser-on-windows>), [R03-S-D11](<https://duckduckgo.com/duckduckgo-help-pages/get-duckduckgo/get-duckduckgo-browser-on-mac>), [R03-S-D12](<https://chromium.googlesource.com/chromium/src/+/HEAD/android_webview/README.md>), [R03-S-D2](<https://duckduckgo.com/updates>), [R03-S-D3](<https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections>), [R03-S-D4](<https://duckduckgo.com/duckduckgo-help-pages/privacy/fire-tabs>), [R03-S-D5](<https://duckduckgo.com/sync_and_backup/privacy>), [R03-S-D6](<https://spreadprivacy.com/windows-browser-open-beta/>), [R03-S-D7](<https://spreadprivacy.com/duckduckgo-for-mac-open-beta/>), [R03-S-D8](<https://github.com/duckduckgo/apple-browsers>), [R03-S-D9](<https://github.com/duckduckgo/Android>).

Browser limitations:

- Exact latest app builds and engine versions remain unknown. Historical launch articles do not establish continued beta status or current extension availability.
- A guessed Windows repository URL returned 404; this does not establish Windows source availability or licensing.
- The Apple README identifies a proprietary font dependency, so not every distributed asset can be called open source.
- The policy documents a bat.bing.com conversion exception after DuckDuckGo ad clicks, not a blanket Microsoft-tracker exemption.
- Tracker blocking, private sessions and encryption do not establish Tor-equivalent anonymity; no runtime effectiveness or comparative data-use result was measured.

<a id="R03-B-LIBREWOLF"></a>

### LibreWolf — R03-B-LIBREWOLF

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| unknown | Windows x86\_64 and ARM64<br>macOS x86\_64 and ARM64<br>Linux (distribution packages and x86\_64 AppImage documented) | Custom Firefox-derived browser; Gecko-family classification follows documented lineage rather than runtime inspection. The project says it follows Firefox stable. | vendor-documented / medium |

A community Firefox derivative with privacy-oriented defaults and patches. Official installation pages supply current-looking download evidence, but release chronology and latest overall release could not be verified.

- **maintenance Evidence:** The three inspected installation pages offered 160.0-1. The official release endpoints were inaccessible, so active-release cadence, exact date, and latest overall version remain unknown.
- **observed Releases:** **edition:** Inspected Windows, macOS and Linux download pages<br>**observation:** Download-link version only; not a verified latest release.<br>**publishedAt:** Not recorded<br>**sourceIds:** [R03-S-L3](<https://librewolf.net/installation/windows/>), [R03-S-L4](<https://librewolf.net/installation/macos/>), [R03-S-L5](<https://librewolf.net/installation/linux/>)<br>**version:** 160.0-1
- **latest Overall Release:** Not recorded

Saved feature records: **6**. [Feature details](<FEATURES.md#R03-B-LIBREWOLF>).

Sources: [R03-S-L1](<https://librewolf.net/>), [R03-S-L2](<https://librewolf.net/docs/features/>), [R03-S-L3](<https://librewolf.net/installation/windows/>), [R03-S-L4](<https://librewolf.net/installation/macos/>), [R03-S-L5](<https://librewolf.net/installation/linux/>).

Browser limitations:

- The homepage update statement is a vendor policy, not measured timely delivery to every package channel.
- The source/releases and bsys6/releases endpoints returned HTTP 403; a newer version appearing only in search results was not accepted.
- Windows scheduled updating has optional setup paths; Linux packaging has documented sandbox/process-isolation differences.
- Safe Browsing, DRM and the built-in password manager are documented as disabled; no net-security conclusion follows.
- No Tor-network anonymity or runtime privacy effectiveness was established.

<a id="R03-B-MULLVAD"></a>

### Mullvad Browser — R03-B-MULLVAD

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows 10+ (64-bit)<br>macOS Sonoma 14+<br>Linux (64-bit, including AArch64 in 16.0) | Firefox ESR-derived browser developed with the Tor Project, without Tor-network patches; the 16.0 announcement names ESR 153. Exact engine patch level of 16.0.2 was not checked. | vendor-documented / high |

A fingerprint-resistance and private-session browser usable with or without a VPN. It omits the Tor network, and clearing its session does not change the user&#39;s IP address.

- **maintenance Evidence:** The official latest-release API returned non-prerelease 16.0.2, updating uBlock Origin and the Mullvad extension and fixing DNS UI/error handling.
- **observed Releases:** **edition:** Desktop<br>**prerelease:** false<br>**publishedAt:** 2026-11-17T13:03:22Z<br>**sourceIds:** [R03-S-M5](<https://api.github.com/repos/mullvad/mullvad-browser/releases/latest>)<br>**version:** 16.0.2

Saved feature records: **6**. [Feature details](<FEATURES.md#R03-B-MULLVAD>).

Sources: [R03-S-M1](<https://mullvad.net/en/browser>), [R03-S-M2](<https://mullvad.net/en/browser/hard-facts>), [R03-S-M3](<https://mullvad.net/en/blog/mullvad-browser-160>), [R03-S-M4](<https://github.com/mullvad/mullvad-browser>), [R03-S-M5](<https://api.github.com/repos/mullvad/mullvad-browser/releases/latest>).

Browser limitations:

- No mobile release was established.
- The older hard-facts page is superseded on default DNS and reset-button terminology by the 16.0 announcement.
- Documented build options disable EME/DRM and phishing/malware-protection functionality; restrictive fingerprint settings can affect sites.
- These choices do not establish a net security ranking or Tor-equivalent anonymity.

<a id="R03-B-PALEMOON"></a>

### Pale Moon — R03-B-PALEMOON

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows<br>macOS<br>Linux<br>Other community-supported systems (FreeBSD build options are discussed) | Independently maintained Goanna rendering engine and Unified XUL Platform (UXP); not current Firefox or Chromium. | vendor-documented / high |

An independent browser emphasizing deep customization, classic extensions, retained formats/protocols, and control. Its inclusion here is not a privacy or security endorsement.

- **maintenance Evidence:** The release notes explicitly identify 35.0.3 (2026-10-27) as a security release with certificate-store, crash, JAR-loading, and JavaScript fixes.
- **observed Releases:** **edition:** Inspected release-notes series<br>**publishedAt:** 2026-10-27<br>**sourceIds:** [R03-S-P2](<https://www.palemoon.org/releasenotes.shtml>)<br>**version:** 35.0.3

Saved feature records: **6**. [Feature details](<FEATURES.md#R03-B-PALEMOON>).

Sources: [R03-S-P1](<https://www.palemoon.org/>), [R03-S-P2](<https://www.palemoon.org/releasenotes.shtml>).

Browser limitations:

- The homepage acknowledges sites requiring special consideration or another browser.
- 35.0.2 disabled CSS :has() by default for performance; inspected later notes did not establish re-enablement.
- Single-process safety/resource-efficiency claims were not independently measured.
- Old plugin/protocol support does not establish maintenance or safety of a particular plugin or implementation.
- No complete platform/update-channel inventory, patch-latency comparison, or modern-site test corpus was performed.

<a id="R03-B-TOR"></a>

### Tor Browser — R03-B-TOR

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows<br>macOS<br>Linux<br>Android | Firefox ESR-derived Gecko on desktop and GeckoView on Android; the 16.0.1 changelog names 153.7.0esr. | vendor-documented / high |

A browser modified for Tor-network routing, site-keyed circuits, state isolation, and fingerprint resistance. Its network-anonymity design is distinct from ordinary private browsing or tracker blocking.

- **platform Boundaries:** 16.0 adds stable Linux AArch64 support and ends Linux x86 32-bit support.<br>The desktop offline manual and OS window-title option are not automatically Android features.<br>Only Tor Browser traffic is automatically routed through Tor; other applications are outside that scope.
- **maintenance Evidence:** The inspected blog index and release bodies show 16.0.1 with Firefox security updates and Android-only 16.0.2 fixing a zlib-related breakage.
- **observed Releases:** **edition:** Desktop<br>**engineVersion:** 153.7.0esr<br>**observation:** Newest desktop-targeting announcement located in the inspected index.<br>**publishedAt:** Not recorded<br>**sourceIds:** [R03-S-T5](<https://blog.torproject.org/new-release-tor-browser-1601>), [R03-S-T7](<https://blog.torproject.org/>)<br>**version:** 16.0.1<br>**edition:** Android<br>**engineVersion:** Not recorded<br>**observation:** Explicitly Android-only; the preceding 16.0.1 announcement names GeckoView 153.7.0esr.<br>**publishedAt:** Not recorded<br>**sourceIds:** [R03-S-T5](<https://blog.torproject.org/new-release-tor-browser-1601>), [R03-S-T6](<https://blog.torproject.org/new-release-tor-browser-1602>), [R03-S-T7](<https://blog.torproject.org/>)<br>**version:** 16.0.2

Saved feature records: **6**. [Feature details](<FEATURES.md#R03-B-TOR>).

Sources: [R03-S-T1](<https://blog.torproject.org/new-release-tor-browser-160>), [R03-S-T2](<https://support.torproject.org/tor-browser/getting-started/about-tor-browser>), [R03-S-T3](<https://support.torproject.org/tor-browser/features/managing-identities>), [R03-S-T4](<https://support.torproject.org/tor-browser/features/fingerprinting-protections>), [R03-S-T5](<https://blog.torproject.org/new-release-tor-browser-1601>), [R03-S-T6](<https://blog.torproject.org/new-release-tor-browser-1602>), [R03-S-T7](<https://blog.torproject.org/>).

Browser limitations:

- Announcement dates remain unknown because cleaned bodies did not establish them.
- Minimum OS versions and every distribution channel were not checked.
- Logging into an identifying account still identifies that account; Tor does not erase information deliberately supplied to a site.
- No anonymity-set size, privacy effectiveness, runtime behavior, or relative security result was measured.

<a id="R03-B-UNGOOGLED"></a>

### ungoogled-chromium — R03-B-UNGOOGLED

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows<br>macOS<br>Linux<br>FreeBSD (package route)<br>OpenBSD (ports route) | Chromium-derived common patches and configuration; Blink-family lineage. Platform-specific repositories supply additional build and packaging configuration. | vendor-documented / high |

A narrow Chromium de-integration project prioritizing removal of Google web-service dependencies while retaining the Chromium experience. Most additional privacy/control tweaks require manual activation.

- **maintenance Evidence:** The official common-repository API returned non-prerelease 158.0.8127.36-1 with a publication timestamp, but an empty change body and no attached binary assets.
- **observed Releases:** **binaryAssetCount:** 0<br>**edition:** Common source repository<br>**prerelease:** false<br>**publishedAt:** 2026-11-19T19:22:08Z<br>**sourceIds:** [R03-S-U2](<https://api.github.com/repos/ungoogled-software/ungoogled-chromium/releases/latest>)<br>**version:** 158.0.8127.36-1

Saved feature records: **6**. [Feature details](<FEATURES.md#R03-B-UNGOOGLED>).

Sources: [R03-S-U1](<https://github.com/ungoogled-software/ungoogled-chromium>), [R03-S-U2](<https://api.github.com/repos/ungoogled-software/ungoogled-chromium/releases/latest>).

Browser limitations:

- Latest source release is not proof of available, current, signed, or reproducible binaries for every platform.
- Per-platform updater behavior and current Android support were not established.
- The README documents Safe Browsing removal, impaired captive-portal detection, and a Windows change that does not set downloaded files&#39; Zone Identifier.
- Contributor binaries are not necessarily reproducible; the project qualifies their authenticity rather than guaranteeing it.
- Service removal is not Tor anonymity or a measured security/privacy superiority claim.

<a id="R03-B-WATERFOX"></a>

### Waterfox — R03-B-WATERFOX

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows 10+<br>macOS 10.15+<br>Linux<br>Android (separate app) | Desktop uses Gecko with a stated Firefox ESR maintenance model; its exact built engine version is unknown. The separate Android release body explicitly names Gecko 160.0, up from 159.0. | vendor-documented / high |

A Gecko-based browser combining privacy-oriented defaults with private tabs, tree tabs, persistent status information, and feed workflows. Desktop and Android release lines are distinct.

- **platform Boundaries:** Desktop download requirements include SSE4.2 for Windows/Linux and glibc 2.17 for Linux.<br>Firefox WebExtensions are documented as supported; Chrome-only extensions do not automatically transfer.<br>Current Waterfox must not be conflated with Waterfox Classic; Classic&#39;s lifecycle was not investigated.
- **maintenance Evidence:** Official release APIs provide substantive desktop 6.7.8 and Android 1.2.11-2026445488 changes with separate publication timestamps.
- **observed Releases:** **edition:** Desktop<br>**engineVersion:** Not recorded<br>**prerelease:** false<br>**publishedAt:** 2026-11-07T13:03:57Z<br>**sourceIds:** [R03-S-W4](<https://www.waterfox.com/releases/6.7.8>), [R03-S-W5](<https://api.github.com/repos/BrowserWorks/Waterfox/releases/latest>)<br>**version:** 6.7.8<br>**edition:** Android<br>**engineVersion:** Gecko 160.0<br>**prerelease:** false<br>**publishedAt:** 2026-11-06T11:35:13Z<br>**sourceIds:** [R03-S-W6](<https://api.github.com/repos/BrowserWorks/Waterfox-Android/releases/latest>)<br>**version:** 1.2.11-2026445488

Saved feature records: **8**. [Feature details](<FEATURES.md#R03-B-WATERFOX>).

Sources: [R03-S-W1](<https://www.waterfox.com/>), [R03-S-W2](<https://www.waterfox.com/releases>), [R03-S-W3](<https://www.waterfox.com/download/>), [R03-S-W4](<https://www.waterfox.com/releases/6.7.8>), [R03-S-W5](<https://api.github.com/repos/BrowserWorks/Waterfox/releases/latest>), [R03-S-W6](<https://api.github.com/repos/BrowserWorks/Waterfox-Android/releases/latest>).

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

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| sunset-announced | Windows 10 19H1 or later<br>macOS 13 or later | Chromium on documented desktop editions. | vendor-documented / high |

Desktop browser with durable sidebar organization. The maker announces a December 22, 2026 sunset and currently describes Chromium-only updates while download links remain visible.

- **lifecycle Details:** **sourceIds:** [R04-A1](<https://arc.net/>), [R04-A2](<https://arc.net/download>)<br>**sunsetAt:** 2026-12-22<br>**supportAtCutoff:** Chromium updates only, according to the download page.
- **platform Qualifications:** **description:** The download page separately links iOS Arc Search; this does not establish desktop-feature parity or the same engine.<br>**sourceIds:** [R04-A2](<https://arc.net/download>)
- **access:** **description:** Download links remain visible; an Arc account is required according to the legacy security FAQ. Current download price or post-sunset usability was not tested.<br>**sourceIds:** [R04-A2](<https://arc.net/download>), [R04-A4](<https://arc.net/security>)
- **recommendation Role:** Historical design precedent and migration case; not a recommendation to adopt a sunset product.

Saved feature records: **5**. [Feature details](<FEATURES.md#R04-browser-arc>).

Sources: [R04-A1](<https://arc.net/>), [R04-A2](<https://arc.net/download>), [R04-A3](<https://start.arc.net/command-bar-actions>), [R04-A4](<https://arc.net/security>).

Browser limitations:

- No current Mac/Windows feature-parity or onboarding test.
- The five feature entries use a legacy action reference and are historical evidence.
- Detailed account-deactivation behavior was not verified because the Help Center was blocked.

<a id="R04-browser-atlas"></a>

### ChatGPT Atlas — R04-browser-atlas

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| discontinued | macOS (historical shipping platform) | Chromium integrated through OWL with a native SwiftUI/AppKit macOS UI, according to the historical engineering account. | vendor-documented / high |

Launched October 21, 2025 on macOS and subsequently retired. Current OpenAI help says it no longer receives updates; the launch page now carries a deprecation banner.

- **lifecycle Details:** **currentStatus:** Retirement confirmed; exact shutdown day not established from the readable maker article<br>**launchedAt:** 2025-10-21<br>**retiredAt:** Not recorded<br>**sourceIds:** [R04-T1](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>), [R04-T2](<https://openai.com/index/introducing-chatgpt-atlas/>)
- **platform Qualifications:** **description:** Windows, iOS and Android were announced as future work at launch. Their shipment was not established by this research.<br>**sourceIds:** [R04-T2](<https://openai.com/index/introducing-chatgpt-atlas/>)
- **access:** **description:** Historical launch access: macOS for Free, Plus, Pro and Go; Business beta; Enterprise/Edu if enabled by an administrator. Agent mode launched in preview for Plus, Pro and Business. These are not current supported entitlements.<br>**sourceIds:** [R04-T1](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>), [R04-T2](<https://openai.com/index/introducing-chatgpt-atlas/>)
- **recommendation Role:** Historical control and retirement-resilient data-portability precedent only; not an active browser recommendation.

Saved feature records: **5**. [Feature details](<FEATURES.md#R04-browser-atlas>).

Sources: [R04-T1](<https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement>), [R04-T2](<https://openai.com/index/introducing-chatgpt-atlas/>), [R04-T3](<https://openai.com/index/building-chatgpt-atlas>).

Browser limitations:

- The precise August 2026 shutdown day appeared only in discovery material and is not asserted as verified.
- All five feature entries are historical, including formerly preview-only agent mode.
- Retired browser tabs/history do not transfer automatically and recovery is not guaranteed; no data recovery was attempted.

<a id="R04-browser-comet"></a>

### Perplexity Comet — R04-browser-comet

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows 10 or 11 (x64 and ARM64)<br>macOS 13 or later (Intel and Apple Silicon)<br>Android 12 or later<br>iOS | Chromium confirmed for documented desktop/browser context; Android and iOS engine implementations were not independently established in this lane. | vendor-documented / high |

Shipped contextual AI browser across Mac, Windows, Android and iOS. Explicit March 2026 launch evidence supersedes older official help pages saying mobile apps are unavailable.

- **lifecycle Details:** **freeDesktopReleasePeriod:** October 2025<br>**iosLaunchEvidencePeriod:** March 2026<br>**sourceIds:** [R04-C10](<https://www.perplexity.ai/changelog/what-we-shipped--march-27-2026>), [R04-C7](<https://www.perplexity.ai/changelog/what-we-shipped-october-3rd>), [R04-C9](<https://www.perplexity.ai/hub/blog/meet-comet-for-ios>)
- **platform Qualifications:** **description:** Desktop docs exclude Linux and ChromeOS. Android automation requires the app to remain open. Mobile engines, detailed parity and iOS minimum version remain unestablished.<br>**sourceIds:** [R04-C2](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>), [R04-C8](<https://www.perplexity.ai/help-center/comet/en/articles/12875447-comet-for-android-quick-start-and-key-features.md>), [R04-C9](<https://www.perplexity.ai/hub/blog/meet-comet-for-ios>)
- **access:** **description:** A dated release note offers the browser free worldwide and assigns parallel Background Assistants to Max subscribers. Current exact AI quotas and billing terms were not audited; enterprise controls require enterprise access.<br>**sourceIds:** [R04-C6](<https://www.perplexity.ai/help-center/en/articles/13531023-managing-comet-assistant-permissions.md>), [R04-C7](<https://www.perplexity.ai/changelog/what-we-shipped-october-3rd>)
- **recommendation Role:** Current documented features with platform/plan qualifications; no product endorsement.

Saved feature records: **6**. [Feature details](<FEATURES.md#R04-browser-comet>).

Sources: [R04-C1](<https://www.perplexity.ai/help-center/comet/en/articles/11583798-what-is-comet-s-browser-engine.md>), [R04-C10](<https://www.perplexity.ai/changelog/what-we-shipped--march-27-2026>), [R04-C11](<https://www.perplexity.ai/help-center/comet/en/articles/11734737-comet-mobile-app.md>), [R04-C13](<https://www.perplexity.ai/comet>), [R04-C2](<https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements.md>), [R04-C4](<https://www.perplexity.ai/help-center/comet/en/articles/12658082-control-what-comet-assistant-can-use.md>), [R04-C6](<https://www.perplexity.ai/help-center/en/articles/13531023-managing-comet-assistant-permissions.md>), [R04-C7](<https://www.perplexity.ai/changelog/what-we-shipped-october-3rd>), [R04-C8](<https://www.perplexity.ai/help-center/comet/en/articles/12875447-comet-for-android-quick-start-and-key-features.md>), [R04-C9](<https://www.perplexity.ai/hub/blog/meet-comet-for-ios>).

Browser limitations:

- No AI actions, accounts or browser sessions were tested.
- Official mobile help pages are inconsistent and undated; explicit mobile launch and platform-specific documentation takes precedence.
- New-tab-page replacement extensions are excluded from the documented extension support.
- Background-assistant entitlement is dated evidence, not a fresh quota check.

<a id="R04-browser-dia"></a>

### Dia — R04-browser-dia

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | macOS<br>Windows | Chromium; the November 5, 2026 changelog describes M157, not a locally measured engine version. | vendor-documented / high |

Shipping on Mac and Windows, combining profiles, nested tab organization, live work context and steerable AI. Windows 1.0 is dated October 6, 2026; both platforms have November 19 release entries.

- **lifecycle Details:** **observedReleaseEntries:** **date:** 2026-11-19<br>**platform:** Windows<br>**version:** 1.7.0<br>**date:** 2026-11-19<br>**platform:** macOS<br>**version:** 1.58.0<br>**sourceIds:** [R04-D2](<https://www.diabrowser.com/changelog>)<br>**windowsLaunchAt:** 2026-10-06
- **platform Qualifications:** **description:** An original Mac-only beta description is obsolete, but individual features and connectors retain their own platform and rollout qualifications.<br>**sourceIds:** [R04-D1](<https://www.diabrowser.com/>), [R04-D2](<https://www.diabrowser.com/changelog>)
- **access:** **description:** Browser downloads are advertised as free; the Arc transition notice says AI is optional. The privacy policy recognizes paid Dia Pro features, but current AI quotas and prices were not established. The policy excludes under-18 use.<br>**sourceIds:** [R04-A1](<https://arc.net/>), [R04-D1](<https://www.diabrowser.com/>), [R04-D4](<https://www.diabrowser.com/privacy>)
- **recommendation Role:** Current documented design evidence; no product endorsement and no Chrome gap established.

Saved feature records: **6**. [Feature details](<FEATURES.md#R04-browser-dia>).

Sources: [R04-A1](<https://arc.net/>), [R04-D1](<https://www.diabrowser.com/>), [R04-D2](<https://www.diabrowser.com/changelog>), [R04-D3](<https://www.diabrowser.com/security>), [R04-D4](<https://www.diabrowser.com/privacy>).

Browser limitations:

- No hands-on tests or current entitlement audit.
- Figma is marked GA on November 12; Ashby and Dropbox are marked beta on October 29, not universally GA.
- Availability of Linux or mobile editions was not established.

<a id="R04-browser-floorp"></a>

### Floorp — R04-browser-floorp

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| maintenance | Windows<br>macOS<br>Linux | Firefox-based, Gecko family. Release 12.21.2 describes a Firefox 160.0 base with subsequent commits and runtime display 160.0.1. | vendor-documented / high |

Maintained open-source browser in a temporary stabilization period. New-feature development and rollout are generally paused for several months while security updates and fixes continue.

- **lifecycle Details:** **documentedVersion:** 12.21.2<br>**maintenanceType:** Temporary stabilization, not discontinuation<br>**pauseEndAt:** Not recorded<br>**releaseArticleDate:** 2026-11-13<br>**sourceIds:** [R04-F2](<https://blog.floorp.app/en/release/12.21.2/>)
- **access:** **description:** Free, open-source desktop browser with no account required for browsing; Notes synchronization uses Firefox Sync.<br>**sourceIds:** [R04-F1](<https://floorp.app/en>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>)
- **recommendation Role:** Documented functionality and a maintenance-cost case; temporary stabilization is not abandonment.

Saved feature records: **5**. [Feature details](<FEATURES.md#R04-browser-floorp>).

Sources: [R04-F1](<https://floorp.app/en>), [R04-F2](<https://blog.floorp.app/en/release/12.21.2/>), [R04-F3](<https://docs.floorp.app/docs/features/workspaces/>), [R04-F4](<https://docs.floorp.app/docs/features/split-view/>), [R04-F5](<https://docs.floorp.app/docs/features/panel-sidebar/>).

Browser limitations:

- No local version measurement or stability test.
- Several manuals qualify behavior to 12.14.2 rather than the later release.
- Vendor-authored comparisons were not used to decide Chrome parity.

<a id="R04-browser-neon"></a>

### Opera Neon — R04-browser-neon

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Windows<br>macOS | Chromium-based Opera foundation, according to the agentic security explainer. | vendor-documented / high |

The agentic Neon product shipped on September 30, 2025 and remains offered with Free and Standard tiers. Active denotes the current offering, not a verified graduation of every Early Access feature to stable maturity.

- **lifecycle Details:** **currentOffering:** Free browser/basic Chat and paid built-in agentic capabilities<br>**initialAccess:** Paid invitations / Early Access<br>**launchedAt:** 2025-09-30<br>**sourceIds:** [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>)<br>**stableGraduationAt:** Not recorded
- **platform Qualifications:** **description:** Windows and Mac are verified in offering documentation; a mobile edition is future-facing in the FAQ, not established as shipped.<br>**sourceIds:** [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>)
- **channel Qualifications:** **description:** Retained 2025 sources describe invitations and Early Access. Broader 2026 access does not itself establish a stable-channel graduation date or production reliability.<br>**sourceIds:** [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>)
- **access:** **description:** Current Free includes browsing, MCP/CLI setup and basic Chat. Standard displays $19.90/month for built-in agentic, research, generation, Cards and scheduled-task capabilities; currency is not independently specified in the retained table. The August 2026 announcement distinguishes accountless browsing/CLI from account-required MCP. Older universal paid/account-required FAQ wording is qualified by these newer sources.<br>**sourceIds:** [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>)
- **recommendation Role:** Shipped and potentially experimental design precedent only; candidates do not recommend deploying or adopting Neon.

Saved feature records: **6**. [Feature details](<FEATURES.md#R04-browser-neon>).

Sources: [R04-N1](<https://www.operaneon.com/>), [R04-N2](<https://www.operaneon.com/faq>), [R04-N3](<https://www.operaneon.com/subscription>), [R04-N4](<https://www.operaneon.com/news/opera-ships-the-opera-neon-ai-agentic-browser>), [R04-N5](<https://blogs.opera.com/news/2026/08/your-ai-agents-can-use-opera-neon-free-of-charge/>), [R04-N6](<https://www.operaneon.com/news/opera-neon-understanding-agentic-browser-security>).

Browser limitations:

- No connection, agent task, subscription or security test was run.
- Residual prompt-injection risk and defenses still being explored must remain separate from implemented safeguards.
- Model lineups and exact usage limits are volatile and were not verified as a compatibility promise.
- Current free/paid access is better supported than universal paid-only FAQ wording, but complete feature maturity remains unassessed.

<a id="R04-browser-shift"></a>

### Shift — R04-browser-shift

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | macOS<br>Windows | Chromium lineage supported by official security descriptions; exact current engine version not established. | vendor-documented / medium |

Currently offered customizable Shift Browser with app stacks, Spaces and opt-in AI. The April 28, 2026 maker article documents the AI interaction design; the latest release cadence was not recovered.

- **platform Qualifications:** **description:** Mac and Windows are explicitly named in the downloaded page HTML metadata. No Linux or mobile shipment is established here.<br>**sourceIds:** [R04-H8](<https://shift.com/download/?platform=mac>)
- **access:** **description:** Free lists five Spaces, ten apps per Space, Builder/templates and limited Shift AI. Advanced displays $199.99 USD annually with unlimited Spaces/apps and expanded AI. Terms are those shown at retrieval, with no account or purchase verification.<br>**sourceIds:** [R04-H6](<https://shift.com/pricing/>)
- **recommendation Role:** Current offering and documented interaction precedent; Chrome equivalence remains unassessed.

Saved feature records: **6**. [Feature details](<FEATURES.md#R04-browser-shift>).

Sources: [R04-H1](<https://shift.com/>), [R04-H2](<https://shift.com/spaces/>), [R04-H3](<https://shift.com/builder/>), [R04-H4](<https://shift.com/ai/>), [R04-H5](<https://shift.com/blog/shift-ai-intelligence-that-meets-you-where-you-work/>), [R04-H6](<https://shift.com/pricing/>), [R04-H7](<https://shift.com/security/>), [R04-H8](<https://shift.com/download/?platform=mac>), [R04-H9](<https://shift.com/app-integrated/>).

Browser limitations:

- Blocked release-note host prevented establishing the latest browser/engine version and security cadence.
- Current Shift Browser was not conflated with every older v9 feature description.
- No runtime, account-isolation or AI privacy test.

<a id="R04-browser-sidekick"></a>

### Sidekick — R04-browser-sidekick

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| discontinued | Windows (historical distributor listing; title-only evidence) | Not established from readable maker evidence. Chromium appeared in discovery results and is not promoted to a verified engine claim. | secondary-reported / medium |

Historical productivity browser. Its former official front door now serves Comet; AppSumo&#39;s distributor notice explicitly names August 3, 2025 as the sunset.

- **lifecycle Details:** **authority:** Distributor notice; original maker announcement not recovered<br>**reportedSunsetAt:** 2025-08-03<br>**sourceIds:** [R04-K1](<https://www.meetsidekick.com/>), [R04-K2](<https://appsumo.com/products/sidekick/>)
- **platform Qualifications:** **description:** A Windows listing title was retrieved; complete historical maker confirmation for Windows, Mac and Linux was not recovered.<br>**sourceIds:** [R04-K1](<https://www.meetsidekick.com/>), [R04-K3](<https://apps.microsoft.com/detail/xp89dmjvg2wpz1?hl=en-GB&gl=MX>)
- **access:** **description:** Historic Pro/Team and lifetime-plan text is retained on AppSumo alongside the sunset notice. It is not evidence of a current supported purchase or subscription.<br>**sourceIds:** [R04-K2](<https://appsumo.com/products/sidekick/>)
- **recommendation Role:** Historical distributor-documented design evidence only; not an active-product recommendation.

Saved feature records: **5**. [Feature details](<FEATURES.md#R04-browser-sidekick>).

Sources: [R04-K1](<https://www.meetsidekick.com/>), [R04-K2](<https://appsumo.com/products/sidekick/>), [R04-K3](<https://apps.microsoft.com/detail/xp89dmjvg2wpz1?hl=en-GB&gl=MX>).

Browser limitations:

- All five feature entries rely on historical distributor-hosted copy, not a recovered maker manual.
- No proof that Comet preserves Sidekick Sessions or account isolation.
- The unrelated sidekick.io extension is not this product.
- No current download or support test.

<a id="R04-browser-sigmaos"></a>

### SigmaOS — R04-browser-sigmaos

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| unknown | macOS | WebKit with a native SwiftUI macOS application, according to the maker. | vendor-documented / medium |

Historically shipped tabs-as-tasks browser still advertised by its maker. Current security cadence, account/AI service operation and formal maintenance or discontinuation status were not established.

- **lifecycle Details:** **currentMaintenanceStatus:** Unresolved<br>**documentedHistoricalVersion:** 1.17.0<br>**lastReleaseAt:** Not recorded<br>**sourceIds:** [R04-S5](<https://docs.sigmaos.com/release-notes>), [R04-S6](<https://sigmaos.com/updates/1-17-0>), [R04-S7](<https://sigmaos.com/blog>)
- **platform Qualifications:** **description:** The homepage says macOS only. Windows and iOS are coming-soon statements, not verified shipments.<br>**sourceIds:** [R04-S1](<https://sigmaos.com/>)
- **access:** **description:** The homepage lists free Basic with unlimited workspaces and limited Airis, Pro at $20/month and Max at $30/month, plus a student/educator discount. Currency is not explicitly established. The older FAQ&#39;s $10 Pro price and paid workspace limits conflict with the homepage and are not current verified terms.<br>**sourceIds:** [R04-S1](<https://sigmaos.com/>), [R04-S2](<https://docs.sigmaos.com/common-questions>)
- **recommendation Role:** Design precedent with unresolved lifecycle; not recommended as an actively maintained replacement.

Saved feature records: **6**. [Feature details](<FEATURES.md#R04-browser-sigmaos>).

Sources: [R04-S1](<https://sigmaos.com/>), [R04-S2](<https://docs.sigmaos.com/common-questions>), [R04-S3](<https://docs.sigmaos.com/tutorial/workspaces>), [R04-S4](<https://docs.sigmaos.com/tutorial/split-screen>), [R04-S5](<https://docs.sigmaos.com/release-notes>), [R04-S6](<https://sigmaos.com/updates/1-17-0>), [R04-S7](<https://sigmaos.com/blog>).

Browser limitations:

- A live sales page is not proof of active maintenance; stale documentation is not proof of shutdown.
- No account creation, backend call or binary test was performed.
- Current support and subscription fulfillment remain unknown.

<a id="R04-browser-wavebox"></a>

### Wavebox — R04-browser-wavebox

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | macOS<br>Windows<br>Linux | Chromium, according to official platform documentation. | vendor-documented / high |

Shipping work browser with separate Spaces, Groups, Apps and Profiles. An October 8, 2026 release article documents version 155.3.12 and new Navigator and settings-chat features.

- **lifecycle Details:** **documentedVersion:** 155.3.12<br>**isLatestVersionEstablished:** false<br>**releaseArticleDate:** 2026-10-08<br>**sourceIds:** [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>)
- **access:** **description:** Seven-day Pro trial without a payment card; Basic remains available with two groups and two spaces. Pro and Teams broaden capabilities. Exact current paid rates were not recovered from a price table. Chat with Settings is described as free and outside the Brainbox token allowance.<br>**sourceIds:** [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>), [R04-W4](<https://wavebox.io/pricing>), [R04-W5](<https://wavebox.io/download>)
- **recommendation Role:** Current documentary workflow evidence, not a measured superiority or purchase recommendation.

Saved feature records: **6**. [Feature details](<FEATURES.md#R04-browser-wavebox>).

Sources: [R04-W1](<https://wavebox.io/>), [R04-W2](<https://wavebox.io/platform>), [R04-W3](<https://hub.wavebox.io/new-in-wavebox-smart-note-checklists-new-look-navigator-chat-with-settings-more/>), [R04-W4](<https://wavebox.io/pricing>), [R04-W5](<https://wavebox.io/download>), [R04-W6](<https://hub.wavebox.io/tag/releases/>).

Browser limitations:

- No runtime testing; enhanced web tabs are not necessarily native applications.
- The organization hierarchy can add conceptual overhead; this is a design hypothesis, not measured usability.
- AI, Sync and team deployment have distinct data and entitlement boundaries; AI-disable behavior is vendor-documented only.

<a id="R04-browser-zen"></a>

### Zen Browser — R04-browser-zen

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | macOS<br>Windows<br>Linux | Firefox-based, Gecko family; upstream-version updates are described in the release log. | vendor-documented / high |

Downloadable workspace-first browser with container defaults, Glance, splits, command actions and structure-aware continuity. The release page reports version 1.24.3b.

- **lifecycle Details:** **documentedVersion:** 1.24.3b<br>**releaseDate:** Not recorded<br>**sourceIds:** [R04-Z3](<https://zen-browser.app/release-notes>)
- **channel Qualifications:** **description:** Twilight is explicitly pre-release and may contain unfinished features. The b suffix alone was not used to infer identical maturity for every channel.<br>**sourceIds:** [R04-Z3](<https://zen-browser.app/release-notes>)
- **access:** **description:** Public downloads are documented. A Mozilla account is required for the described Spaces sync; exact pricing or other account entitlements were not part of the retained evidence.<br>**sourceIds:** [R04-Z2](<https://zen-browser.app/download>), [R04-Z3](<https://zen-browser.app/release-notes>)
- **recommendation Role:** Documented feature precedent; pre-release and earlier experimental sync behavior are not promoted to stable recommendations.

Saved feature records: **6**. [Feature details](<FEATURES.md#R04-browser-zen>).

Sources: [R04-Z1](<https://zen-browser.app/>), [R04-Z2](<https://zen-browser.app/download>), [R04-Z3](<https://zen-browser.app/release-notes>), [R04-Z4](<https://docs.zen-browser.app/user-manual/workspaces>), [R04-Z5](<https://docs.zen-browser.app/user-manual/glance>).

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

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Android<br>iPhone and iPad; US publisher record requires iOS 16+<br>Windows 64-bit advertised download<br>macOS Intel and Apple silicon advertised downloads<br>Linux deb/rpm advertised downloads | Android AlohaCore evolved from Chromium/WebView after earlier system-WebView and CrossWalk implementations. Chromium 130 is historical to the 2025-01-08 Android-only article, not the current version. iOS and desktop implementation details remain unestablished here. | vendor-documented / high |

Aloha documents browser VPN, content controls, access locks, media/download tools and account-linked sync, with separate Premium entitlements. The iOS record reports 8.13.2 released 2026-11-16; the website lists multiple desktop offerings.

Saved feature records: **5**. [Feature details](<FEATURES.md#R05-B-aloha>).

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-L01](<https://alohabrowser.com/>), [R05-L02](<https://alohabrowser.com/posts-aloha-core-i-love-and-hate-you>), [R05-L03](<https://apps.apple.com/us/app/aloha-browser-private-vpn/id1105317682>), [R05-L04](<https://alohabrowser.com/download.html>).

Browser limitations:

- No application, network routing, cryptography, no-log or claimed audit verification. Desktop/mobile feature boundaries, region availability and free-tier server selection are not fully resolved.
- Paid device-wide VPN scope differs from free browser-integrated access. Incognito and network routing are different mechanisms.
- An open-source Android core does not establish that the entire browser or its iOS implementation is open source.

<a id="R05-B-cromite"></a>

### Cromite — R05-B-cromite

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Android 10+ ARM32<br>Android 10+ ARM64<br>Android 10+ x86-64<br>Windows 64-bit<br>Linux 64-bit | Chromium fork based on Bromite. Latest-release API returned Chromium-versioned tag v153.0.8010.37-11507ac1061b5ea227806f5e84db5a57df6ccf6a; no binary engine test performed. | source-inspected / high |

Repository was unarchived with a source push on 2026-11-21, while the latest-release snapshot was published 2026-09-15. Filtering, site controls, disposable sessions and local-data tools are documented. Experimental Android-extension code is present in release-pinned source and described as default-off despite a contradictory FAQ.

Saved feature records: **6**. [Feature details](<FEATURES.md#R05-B-cromite>).

Sources: [R05-C01](<https://raw.githubusercontent.com/uazo/cromite/master/README.md>), [R05-C02](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FEATURES.md>), [R05-C03](<https://raw.githubusercontent.com/uazo/cromite/master/docs/FAQ.md>), [R05-C04](<https://api.github.com/repos/uazo/cromite>), [R05-C05](<https://api.github.com/repos/uazo/cromite/releases/latest>), [R05-C06](<https://raw.githubusercontent.com/uazo/cromite/11507ac1061b5ea227806f5e84db5a57df6ccf6a/build/patches/Experimental-support-for-extensions-on-Android.patch>), [R05-C07](<https://api.github.com/repos/uazo/cromite/issues/comments/5679359966>).

Browser limitations:

- Active source development does not establish binary patch timeliness or extension compatibility; no installed version tested. No iOS/macOS build established.
- Docs disable Google Sync/Translate, DRM, Safe Browsing and other cloud-backed capabilities; those tradeoffs are not universal improvements. Fingerprinting mitigations are incomplete; JIT-off may affect compatibility/performance.
- Patch licenses vary. The Bromite lineage is documented, but this lane did not establish an original Bromite EOL date.

<a id="R05-B-focus"></a>

### Firefox Focus — R05-B-focus

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Android<br>iPhone and iPad; US publisher record requires iOS 15+ | Android migrated to Gecko/GeckoView in the cited historical engineering article; current installed Android engine/version not inspected. Pinned iOS browsing-controller source imports WebKit and constructs WKWebView and WKContentRuleList; do not classify Focus iOS as Gecko-based. | source-inspected / high |

A deliberately disposable browsing workflow with erase, default tracking protection and limited shortcuts. Archived standalone repositories were migrated, not product-EOL notices: Android moved through firefox-android into Mozilla Central, and iOS into firefox-ios. The US iOS record reports version 155.0 released 2026-08-30.

Saved feature records: **4**. [Feature details](<FEATURES.md#R05-B-focus>).

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-F01](<https://www.firefox.com/en-US/mobile/focus/>), [R05-F02](<https://hacks.mozilla.org/2018/09/focus-with-geckoview/>), [R05-F03](<https://github.com/mozilla-mobile/focus-android>), [R05-F04](<https://github.com/mozilla-mobile/firefox-android>), [R05-F05](<https://github.com/mozilla-mobile/focus-ios>), [R05-F06](<https://github.com/mozilla-mobile/firefox-ios>), [R05-F07](<https://raw.githubusercontent.com/mozilla-mobile/firefox-ios/9e923b05c99b2b0e19c6cadf198b222acf1ddb5b/focus-ios/Blockzilla/Modules/WebView/LegacyWebViewController.swift>), [R05-F08](<https://apps.apple.com/us/app/firefox-focus-privacy-browser/id1055677337>).

Browser limitations:

- Source and publisher observations only; neither installed release nor erase completeness was tested. The inspected iOS commit was not mapped to each store binary.
- Full Firefox extensions, synchronization and desktop tabs must not be attributed to Focus. The challenged iOS support page supplied no verified Safari-integration feature evidence.
- Deleting local session data does not delete server records or hide a network address. iOS minimal-UI wording must not be substituted for Android tab behavior.

<a id="R05-B-kiwi"></a>

### Kiwi Browser — R05-B-kiwi

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| discontinued | Android; historical discontinued product | Historical Android Chromium-based browser; current supported engine build is not asserted after maintenance ended. | source-inspected / high |

Maintainer&#39;s archived successor repository says no maintenance after January 2025. Android Chrome-extension support, night mode and a bottom address bar are historical implementation references. Extension-code integration into a development Edge version is described as a partnership, not an acquisition.

Saved feature records: **3**. [Feature details](<FEATURES.md#R05-B-kiwi>).

Sources: [R05-K01](<https://github.com/kiwibrowser/src.next>), [R05-K02](<https://github.com/kiwibrowser/src>).

Browser limitations:

- No installed Kiwi binary or current Edge edition tested. Historical up-to-date language and build instructions do not establish a maintained current product.
- Exact notice-publication date and final maintenance day were not established. No iOS product or portability evidence was found in the cited sources; licensing and maintenance costs require separate review before source reuse.

<a id="R05-B-quetta"></a>

### Quetta — R05-B-quetta

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Android<br>iPhone and iPad; US publisher record requires iOS 17+<br>Windows advertised product route<br>macOS advertised product route | Android publisher text identifies Chromium and release text names 154.0.8037.127. iOS engine is unresolved: generalized FAQ wording does not override the platform-specific extension guide or identify the shipped iOS engine. | vendor-documented / high |

Android listing reports an update on 2026-11-20; iOS record reports version 1.5.1 released 2026-11-09. Android extension management, mobile filtering/media workflows and iOS private storage/reading tools are documented with edition-specific qualifications.

Saved feature records: **6**. [Feature details](<FEATURES.md#R05-B-quetta>).

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-Q01](<https://play.google.com/store/apps/details?id=net.quetta.browser&hl=en>), [R05-Q02](<https://www.quetta.net/features/extensions>), [R05-Q03](<https://www.quetta.net/products/ios>), [R05-Q04](<https://apps.apple.com/app/quetta-private-browser/id6504077999>), [R05-Q05](<https://www.quetta.net/downloads>), [R05-Q06](<https://www.quetta.net/features/video-downloader>), [R05-Q07](<https://www.quetta.net/features/playlist>), [R05-Q08](<https://www.quetta.net/faq>).

Browser limitations:

- No runtime tests; desktop links are advertising, not inspected packages or parity evidence. iOS Chrome Web Store hosting is not established.
- Android extension compatibility depends on layout, browser APIs, companion apps and background behavior. Saved media links and playable offline files are distinct states.
- Broad no-personal-data copy and Android Play disclosures differ; runtime collection was not adjudicated. AI filtering superiority and vault cryptography were not audited.

<a id="R05-B-samsung"></a>

### Samsung Internet / Samsung Browser — R05-B-samsung

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Android phones<br>Android tablets<br>Selected Galaxy Watch Wear OS devices<br>Windows offering | Android: Chromium lineage documented in historical release notes; exact current milestone not established. Windows engine/build not independently identified; no iOS edition established. | vendor-documented / high |

Current Android publisher listing uses Samsung Browser; Windows notes explicitly record the Samsung Internet rename. Mobile workflows include Video Assistant, tablet-only split browsing, configurable controls, Secret Mode and approved content-blocker integrations.

Saved feature records: **5**. [Feature details](<FEATURES.md#R05-B-samsung>).

Sources: [R05-S01](<https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en>), [R05-S02](<https://developer.samsung.com/browser/release-note/android-release-note.html>), [R05-S03](<https://developer.samsung.com/browser/release-note/windows-release-note.html>), [R05-S04](<https://developer.samsung.com/browser/android/extensions-dev-overview.html>).

Browser limitations:

- No installed release tested. Android developer changelog&#39;s latest visible 2024-05-11 entry is stale relative to the current listing; historical Android 8+ wording is not a current minimum-version assertion.
- Watch claims are limited to supported Galaxy Watch 4-series or later Wear OS devices. Windows AI/geography notes and extension-app behavior are edition-specific; no iOS offering was established.

<a id="R05-B-uc"></a>

### UC Browser — R05-B-uc

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | International Android edition: com.UCMobile.intl<br>Chinese iOS edition: App Store 586871187; iOS 13+<br>PC landing page only; current distributable desktop build not established | UC&#39;s U4 page describes a mobile engine used by UC Browser and WebView-style layers. Exact engine/version, Chromium ancestry and U4 mapping for each current international Android and Chinese iOS package remain unresolved. | vendor-documented / high |

International Android documentation advertises media/download tools, UC Drive, VPN, filtering and AI services. The distinct Chinese UCWeb iOS record reports version 19.3.0.3121 released 2026-11-20T02:36:07Z and emphasizes news, search, video and novels. Alibaba announced full acquisition of UCWeb on 2014-06-11.

Saved feature records: **7**. [Feature details](<FEATURES.md#R05-B-uc>).

Sources: [R05-U01](<https://play.google.com/store/apps/details?id=com.UCMobile.intl&hl=en>), [R05-U02](<https://open-uc.uc.cn/solution/u4>), [R05-U03](<https://www.alibabagroup.com/en-US/document-1489318545857708032>), [R05-U04](<https://itunes.apple.com/search?term=UC%E6%B5%8F%E8%A7%88%E5%99%A8&country=cn&entity=software&limit=10>), [R05-U04a](<https://apps.apple.com/cn/app/uc%E6%B5%8F%E8%A7%88%E5%99%A8-%E9%9A%8F%E5%BF%83%E6%90%9C-%E7%95%85%E5%BF%AB%E7%9C%8B/id586871187>), [R05-U05](<https://www.ucweb.com/download/pc>).

Browser limitations:

- No runtime, cloud entitlement, VPN, AI or engine measurement. International Android features are not transferred to Chinese iOS; a separately named speed edition returned by the API is not merged with this record.
- Current Chinese iOS distribution disproves a blanket Android-only conclusion for the observed date, but does not establish global storefront availability.
- The PC landing page is insufficient to establish a current binary or global desktop EOL. Older U4 performance/patch-speed claims are not current package measurements.
- Incognito local-state isolation does not itself hide an IP address; vendor wording must not be repeated as an observed network property.

<a id="R05-B-vanadium"></a>

### GrapheneOS Vanadium — R05-B-vanadium

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | GrapheneOS Android devices; official distribution only | Chromium variant; observed release 158.0.8127.42.0 documents updating to Chromium 158.0.8127.42. | vendor-documented / high |

Release dated 2026-11-19 documents current GrapheneOS-only official availability. Browser features include default-off per-site JIT policy, filtering, platform-integrated hardening, native credential paths and incoming-link privacy controls.

Saved feature records: **5**. [Feature details](<FEATURES.md#R05-B-vanadium>).

Sources: [R05-G01](<https://grapheneos.org/features#vanadium>), [R05-G02](<https://api.github.com/repos/GrapheneOS/Vanadium/releases/latest>).

Browser limitations:

- No binary or security behavior tested. A prospective outside-GrapheneOS release would lack system WebView and some hardening/features; it is not a current distribution claim.
- User-installed apps&#39; WebViews have different JIT defaults and OS controls; not all browser settings apply there. Documentation describes incomplete cookie partitioning and future cosmetic-filtering work; extensions are not planned.
- Hardening depends on the actual OS, build and hardware; no anonymity or cross-browser security ranking is established.

<a id="R05-B-via"></a>

### Via — R05-B-via

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| unknown | Android<br>iPhone and iPad; US publisher record requires iOS 11+<br>Apple-silicon Mac compatibility listing; not verified for macOS | Android uses the device&#39;s built-in WebView provider. iOS engine implementation is not established by the cited publisher sources. | vendor-documented / medium |

Official mobile distribution remains listed, with lightweight site controls on Android and scripts, reading utilities and iCloud synchronization advertised on iOS. The iOS publisher record reports version 1.9.0 released 2025-09-12; current Android release and ongoing maintenance cadence were not established, and no formal EOL was found in the consulted sources.

Saved feature records: **5**. [Feature details](<FEATURES.md#R05-B-via>).

Sources: [R05-A01](<https://itunes.apple.com/lookup?id=1105317682,1639085829,6504077999,1055677337&country=us>), [R05-V01](<https://github.com/tuyafeng/Via>), [R05-V02](<https://play.google.com/store/apps/details?id=mark.via.gp&hl=en>), [R05-V03](<https://apps.apple.com/us/app/via-browser/id1639085829>).

Browser limitations:

- No installed app or memory/speed benchmark. Android footprint depends on an external system WebView; comparisons must account for that dependency.
- The repository is for localization and is not evidence that the whole app is open source. Android autofill apps are documented on Android 8+; that is not the current app&#39;s minimum OS or a WebView saved-password guarantee.
- Apple compatibility metadata is not evidence of a separately engineered desktop version. Android/iOS script, sync and feature parity remain untested.

<a id="R05-B-yandex"></a>

### Yandex Browser — R05-B-yandex

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Android phones<br>Android tablets<br>iPhone; help specifies iOS 15+<br>Desktop browser referenced; exact current OS matrix not established | Vendor security-program documentation establishes Chromium-family architecture, but exact Android build and iOS implementation are unresolved; Chromium evidence is not applied indiscriminately to iOS. | vendor-documented / medium |

Current publisher/help sources describe Android extension management, platform-specific translation/OCR, subtitle language tools, Reader Mode and optional account sync. No cessation was established, but the latest mobile release versions were not audited.

Saved feature records: **6**. [Feature details](<FEATURES.md#R05-B-yandex>).

Sources: [R05-Y01](<https://play.google.com/store/apps/details?id=com.yandex.browser&hl=en>), [R05-Y02](<https://yandex.com/support/browser-mobile-android-phone/en/personal-settings/extensions>), [R05-Y02a](<https://yandex.com/support/browser-mobile-android-tablet/en/personal-settings/extensions>), [R05-Y03](<https://yandex.com/support/browser-mobile-android-phone/en/navigation/translation>), [R05-Y04](<https://yandex.com/support/browser-mobile-iphone/en/navigation/translation>), [R05-Y05](<https://yandex.com/support/browser-mobile-iphone/en/install/install>), [R05-Y06](<https://yandex.com/bugbounty/i/browser>).

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

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Linux<br>BSD<br>macOS<br>Windows via Cygwin<br>Atari: project-documented | Own real-time HTML/CSS renderer with FLTK graphical UI; constrained web-platform coverage and no JavaScript in the inspected manual. | vendor-documented / high |

Released lightweight graphical browser for resource-constrained machines and simpler content. Canonical 3.3.0 release and October 2026 repository work supersede the stale former GitHub website.

- **product Kind:** constrained-graphical-browser
- **latest Release:** **publishedAt:** 2026-04-26<br>**sourceIds:** [R06-D1](<https://dillo-browser.org/>), [R06-D2](<https://dillo-browser.org/release/3.3.0/>)<br>**version:** 3.3.0

Saved feature records: **5**. [Feature details](<FEATURES.md#R06-B-DILLO>).

Sources: [R06-D1](<https://dillo-browser.org/>), [R06-D2](<https://dillo-browser.org/release/3.3.0/>), [R06-D3](<https://dillo-browser.org/user_help.html>), [R06-D4](<https://dillo-browser.org/release/3.2.0/>), [R06-D5](<https://git.dillo-browser.org/dillo/>), [R06-D6](<https://dillo-browser.github.io/>).

Browser limitations:

- Not a text browser, but not a blanket replacement for JavaScript-dependent applications.
- Manual was generated for v3.2.0-90-g29a46a2d; newer controls are sourced to 3.3.0 notes.
- FLTK 1.4 support is experimental with HiDPI/Wayland problems.
- Windows means Cygwin, not a verified native Windows app release.
- No local-control commands, plugins or page actions were executed.
- Canonical domain is dillo-browser.org; the old GitHub surface and dillo.org must not be treated as current authoritative equivalents.

<a id="R06-B-FALKON"></a>

### Falkon — R06-B-FALKON

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Linux<br>Windows: official nightly distribution documented; stable support not independently checked | QtWebEngine, in the Chromium engine family; a separate KDE browser UI rather than an independent new web engine. | vendor-documented / high |

KDE browser formerly named QupZilla, with AdBlock, vertical-tab and extensibility options, per-site permissions, KWallet and Plasma integration. Its official feed lists 26.08.3 despite older standalone announcements.

- **product Kind:** released-graphical-browser
- **latest Release:** **publishedAt:** Not recorded<br>**qualification:** Listed in official RSS; publication fields are empty.<br>**sourceIds:** [R06-F2](<https://apps.kde.org/falkon/index.xml>)<br>**version:** 26.08.3

Saved feature records: **5**. [Feature details](<FEATURES.md#R06-B-FALKON>).

Sources: [R06-F1](<https://www.falkon.org/about/>), [R06-F2](<https://apps.kde.org/falkon/index.xml>), [R06-F3](<https://raw.githubusercontent.com/KDE/falkon/master/CHANGELOG>), [R06-F4](<https://apps.kde.org/falkon/>), [R06-F5](<https://www.falkon.org/posts/>), [R06-Q1](<https://qutebrowser.org/doc/changelog.html>).

Browser limitations:

- No binary was installed or tested.
- Capability detail comes from a CHANGELOG whose top entry is 25.08.0, not a complete 26.08.3 feature test.
- Nightly installers are explicitly unstable.
- Legacy RSS/Flash/Click2Flash copy is not certified as current functionality.
- Current macOS support and the exact 26.08.3 release date remain unverified.

<a id="R06-B-GNOME-WEB"></a>

### GNOME Web / Epiphany — R06-B-GNOME-WEB

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Linux, primarily GNOME and similar desktops<br>Stable Flatpak<br>Technology Preview and Canary: explicitly unstable | WebKitGTK / WebKit; browser UI and underlying engine/distribution versions have separate support implications. | vendor-documented / high |

Linux-focused end-user browser with GNOME integration, optional Firefox Sync, reader mode, tracking prevention, ad blocking and installed-web-app lifecycle controls.

- **product Kind:** released-graphical-browser
- **latest Release:** **publishedAt:** 2026-10-29<br>**sourceIds:** [R06-G2](<https://raw.githubusercontent.com/GNOME/epiphany/main/NEWS>)<br>**version:** 51.2

Saved feature records: **5**. [Feature details](<FEATURES.md#R06-B-GNOME-WEB>).

Sources: [R06-G1](<https://raw.githubusercontent.com/GNOME/epiphany/main/README.md>), [R06-G2](<https://raw.githubusercontent.com/GNOME/epiphany/main/NEWS>), [R06-G3](<https://apps.gnome.org/Epiphany/>).

Browser limitations:

- No runtime tests were run.
- GNOME integration is intentional; broad native Windows/macOS portability was not established.
- Technology Preview and Canary must not inherit stable-channel readiness.
- WebExtension fixes in NEWS do not establish store or API parity with Chrome.
- Package and WebKitGTK freshness must be evaluated separately from the browser version.

<a id="R06-B-LADYBIRD"></a>

### Ladybird — R06-B-LADYBIRD

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| experimental | Linux: development focus<br>macOS: development focus<br>Other Unix-like systems: documented builds<br>Windows via WSL2; native full browser planned<br>Mobile: not a current focus | Independent standards implementation: LibWeb rendering, LibJS JavaScript and LibWasm WebAssembly, with some SerenityOS-derived components and third-party libraries. | vendor-documented / high |

Actively developed full-browser project that its README labels pre-alpha and developer-only. The homepage still describes a future first alpha, not a released general-use replacement.

- **product Kind:** experimental-browser-and-engine
- **roadmap:** **evidenceType:** vendor-documented<br>**sourceIds:** [R06-L1](<https://ladybird.org/>), [R06-L3](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/Documentation/FAQ.md>)<br>**text:** FAQ targets alpha in 2026, beta in 2027 and stable in 2028; completion was not established.

Saved feature records: **4**. [Feature details](<FEATURES.md#R06-B-LADYBIRD>).

Sources: [R06-L1](<https://ladybird.org/>), [R06-L2](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/README.md>), [R06-L3](<https://raw.githubusercontent.com/LadybirdBrowser/ladybird/master/Documentation/FAQ.md>).

Browser limitations:

- No runtime, site-compatibility, performance or sandbox tests.
- The FAQ explicitly says particular sites may or may not be usable.
- Windows JavaScript-engine CI does not establish a native Windows browser.
- Engine independence does not mean absence of third-party libraries.
- Future alpha/beta/stable milestones must not be displayed as completed releases.

<a id="R06-B-LYNX"></a>

### Lynx — R06-B-LYNX

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Unix/POSIX including Linux<br>BSD and macOS package/port pointers<br>Windows: maintainer-distributed variants<br>Historical VMS, DOS and OS/2 ports: current version support unverified | Character-cell HTML/text presentation for terminals; a text-browser rendering model rather than a modern graphical engine. | vendor-documented / high |

Mature terminal browser with numbered link/form navigation, key help, forms and text/link export. The 2.9.3 release page gives 2026-05-27 and current development targets 2.9.4.

- **product Kind:** terminal-text-browser
- **latest Release:** **publishedAt:** 2026-05-27<br>**qualification:** Explicit release-body date takes precedence over the stale footer.<br>**sourceIds:** [R06-Y2](<https://lynx.invisible-island.net/lynx2.9.3/index.html>)<br>**version:** 2.9.3

Saved feature records: **5**. [Feature details](<FEATURES.md#R06-B-LYNX>).

Sources: [R06-Y1](<https://lynx.invisible-island.net/>), [R06-Y2](<https://lynx.invisible-island.net/lynx2.9.3/index.html>), [R06-Y3](<https://lynx.invisible-island.net/current/index.html>), [R06-Y4](<https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html>), [R06-Y5](<https://lynx.invisible-island.net/manpage/>), [R06-Y6](<https://invisible-island.net/lynx/>).

Browser limitations:

- No runtime or screen-reader testing.
- The documentation&#39;s fully-featured description is scoped to a terminal client, not graphical modern-web parity.
- Rich graphical and JavaScript-dependent workflows were not qualified.
- Windows builds without OpenSSL are explicitly unable to connect to HTTPS URLs.
- Historical platform and protocol lists are not current tested OS/build matrices.

<a id="R06-B-NYXT"></a>

### Nyxt — R06-B-NYXT

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Linux x86-64: 5.0.0 AppImage and Flatpak assets<br>macOS ARM64: 5.0.0 app asset<br>BSD: unofficial documentation<br>Windows via WSL: unofficial; native release not established | Chromium Embedded Framework (CEF) is the default in 5.0.0; WebKitGTK remains documented as another backend. Electron was removed in 5.0.0. | vendor-documented / high |

Lisp-extensible keyboard browser with fuzzy buffer selection, multi-object commands, cross-tab search and tagged bookmarks. Its 5.0.0 release materially changes renderer and platform evidence.

- **product Kind:** released-specialist-graphical-browser
- **latest Release:** **publishedAt:** 2026-11-15T18:20:30Z<br>**sourceIds:** [R06-N3](<https://nyxt-browser.com/article/release-5.0.0.org>), [R06-N4](<https://api.github.com/repos/atlas-engineer/nyxt/releases/tags/5.0.0>)<br>**version:** 5.0.0

Saved feature records: **5**. [Feature details](<FEATURES.md#R06-B-NYXT>).

Sources: [R06-N1](<https://raw.githubusercontent.com/atlas-engineer/nyxt/master/README.org>), [R06-N2](<https://raw.githubusercontent.com/atlas-engineer/nyxt/5.0.0/developer-manual.org>), [R06-N3](<https://nyxt-browser.com/article/release-5.0.0.org>), [R06-N4](<https://api.github.com/repos/atlas-engineer/nyxt/releases/tags/5.0.0>), [R06-N5](<https://nyxt.atlas.engineer/faq>).

Browser limitations:

- Documentary and release-asset observations only; no Nyxt execution.
- README and FAQ platform/backend text differs from dated 5.0.0 sources; prefer version-specific evidence.
- Do not advertise WebKit-only or Electron-default behavior for 5.0.0.
- Command prediction was removed, and the README no longer advertises history as a tree.
- Extension loading does not prove complete WebExtensions compatibility.
- Lisp customization targets specialists; native Windows support remains unestablished.

<a id="R06-B-ORION"></a>

### Orion by Kagi — R06-B-ORION

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | macOS<br>iOS / iPadOS<br>Linux beta: Kagi maintenance ended<br>Windows: Kagi development and planned release ended | WebKit; Apple releases remain Kagi&#39;s focus. Engine identity does not establish extension parity with Chromium or Firefox. | vendor-documented / high |

Released end-user browser with focus/compact UI, link previews, isolated profiles and documented content blocking. Kagi ended Linux/Windows development on 2026-10-02 while continuing Apple development.

- **lifecycle Scope:** Apple products only; Linux/Windows require the per-platform discontinuation qualifiers.
- **platform Lifecycle:** **lifecycle:** active<br>**platform:** macOS<br>**sourceIds:** [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>), [R06-O3](<https://orionbrowser.com/updates/orion-release-notes>)<br>**lifecycle:** active<br>**platform:** iOS / iPadOS<br>**qualification:** Continued focus documented; latest mobile version was not established.<br>**sourceIds:** [R06-O1](<https://blog.kagi.com/orion>), [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>)<br>**effectiveDate:** 2026-10-02<br>**lifecycle:** discontinued<br>**platform:** Linux<br>**qualification:** Kagi updates ended; community continuation remains unknown.<br>**sourceIds:** [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>)<br>**effectiveDate:** 2026-10-02<br>**lifecycle:** discontinued<br>**platform:** Windows<br>**qualification:** Kagi canceled its planned release; no completed successor handoff was verified.<br>**sourceIds:** [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>)
- **product Kind:** released-graphical-browser
- **latest Release:** **platform:** macOS<br>**publishedAt:** 2026-11-16<br>**sourceIds:** [R06-O3](<https://orionbrowser.com/updates/orion-release-notes>)<br>**version:** 1.1.4 (153)

Saved feature records: **5**. [Feature details](<FEATURES.md#R06-B-ORION>).

Sources: [R06-O1](<https://blog.kagi.com/orion>), [R06-O2](<https://blog.kagi.com/update-orion-linux-windows>), [R06-O3](<https://orionbrowser.com/updates/orion-release-notes>), [R06-O4](<https://help.kagi.com/orion/getting-started/installing-orion.html>).

Browser limitations:

- Documentary evidence only, not a runtime evaluation.
- Promise to open-source Linux/Windows is not proof that code release or successor stewardship occurred.
- Undated installation guidance still offers the Linux beta.
- macOS release-note fixes do not prove universal website or Chrome/Firefox extension compatibility.
- 1.0 feature descriptions should not be assumed identical on every mobile release.

<a id="R06-B-QUTEBROWSER"></a>

### qutebrowser — R06-B-QUTEBROWSER

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| active | Linux: distribution or source packaging varies<br>Windows: official prebuilt binaries<br>macOS: official prebuilt binaries<br>FreeBSD: documentation includes backend/package caveats | Python/Qt interface with default QtWebEngine (Chromium). Legacy QtWebKit is deprecated and untested in the inspected release history. | vendor-documented / high |

Vim-like graphical browser emphasizing keyboard navigation, element hints and an in-product command/help system. The inspected changelog&#39;s latest dated release is 3.7.0; 3.8.0 is unreleased.

- **engine Version Scope:** **qualification:** Release-specific publisher metadata; not the engine version of every installation.<br>**sourceIds:** [R06-Q1](<https://qutebrowser.org/doc/changelog.html>)<br>**text:** 3.7.0 Windows/macOS bundles Qt 6.11.0, based on Chromium 140.0.7339.225 with security patches through 146.0.7680.80.
- **product Kind:** released-keyboard-first-graphical-browser
- **latest Release:** **publishedAt:** 2026-04-03<br>**sourceIds:** [R06-Q1](<https://qutebrowser.org/doc/changelog.html>)<br>**version:** 3.7.0

Saved feature records: **5**. [Feature details](<FEATURES.md#R06-B-QUTEBROWSER>).

Sources: [R06-Q1](<https://qutebrowser.org/doc/changelog.html>), [R06-Q2](<https://qutebrowser.org/doc/quickstart.html>), [R06-Q3](<https://qutebrowser.org/doc/install.html>).

Browser limitations:

- No task-efficiency or assistive-technology test was run.
- Official Windows/macOS binaries require manual updates and are documented without proprietary codecs.
- Community packages may have different engine versions and update policies.
- Partial QtWebEngine WebExtensions work does not establish official qutebrowser extension support.
- An accessibility-disabling workaround on affected Qt versions means keyboard-first must not be equated with comprehensive accessibility.

<a id="R06-B-SERVO"></a>

### Servo — R06-B-SERVO

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| experimental | Windows<br>macOS<br>Linux<br>Android<br>OpenHarmony<br>FreeBSD: build milestone with qualifications | Prototype Rust browser engine with a WebView embedding API; servoshell is the runnable tech demo, not a complete mainstream browser product. | vendor-documented / high |

Active engine development aimed at embedding web technologies. Release 0.8.0 is published, while the README retains prototype status and release notes call the runnable application a Tech Demo.

- **product Kind:** embeddable-engine-and-tech-demo
- **latest Release:** **publishedAt:** 2026-11-09T12:29:13Z<br>**qualification:** GitHub prerelease:false does not imply consumer-browser readiness.<br>**sourceIds:** [R06-S3](<https://api.github.com/repos/servo/servo/releases/latest>), [R06-S4](<https://github.com/servo/servo/releases/tag/v0.8.0>)<br>**version:** 0.8.0

Saved feature records: **5**. [Feature details](<FEATURES.md#R06-B-SERVO>).

Sources: [R06-S1](<https://servo.org/>), [R06-S2](<https://raw.githubusercontent.com/servo/servo/main/README.md>), [R06-S3](<https://api.github.com/repos/servo/servo/releases/latest>), [R06-S4](<https://github.com/servo/servo/releases/tag/v0.8.0>), [R06-S5](<https://servo.org/blog/2026/04/30/march-in-servo/>), [R06-S6](<https://servo.org/blog/2026/08/31/july-in-servo/>).

Browser limitations:

- No runtime build, benchmark or application-compatibility assessment.
- Graphics, accessibility and other APIs are evolving; defaults and completeness differ by version/platform.
- Earlier selection limitations must be qualified against subsequent 0.8.0 work.
- OpenHarmony artifacts are not automatically signed for HarmonyOS.
- A FreeBSD build milestone does not establish equivalent release binaries.
- Treat as engine-diversity/interoperability research, not an unqualified migration option.

<a id="R06-B-W3M"></a>

### w3m — R06-B-W3M

| Lifecycle | Platforms / editions | Engine | Evidence / confidence |
| --- | --- | --- | --- |
| unknown | Unix-like systems<br>Linux and BSD: historical documented platforms<br>macOS: historical documentation; current packaging unverified<br>Windows via Cygwin: historical documentation; current packaging unverified | Built-in text HTML layout and pager; the inspected manual supports tables/frames but explicitly ignores JavaScript and CSS. | source-inspected / medium |

Terminal browser/pager with buffers, tabs, HTML text layout, optional graphics and graphical-browser handoff. A Debian-maintained fork and downstream package are documented; current original-upstream activity remains unknown.

- **product Kind:** terminal-text-browser-and-pager
- **maintenance Evidence:** **sourceIds:** [R06-W6](<https://api.github.com/repos/tats/w3m/commits?per_page=3>), [R06-W8](<https://github.com/tats/w3m/releases>)<br>**text:** The sampled tats/w3m default-branch tip is dated 2023-07-18; no GitHub Releases entries were listed.<br>**sourceIds:** [R06-W7](<https://tracker.debian.org/pkg/w3m>)<br>**text:** Debian tracker displays package 0.5.3+git20230121-2.3 and downstream patches.

Saved feature records: **5**. [Feature details](<FEATURES.md#R06-B-W3M>).

Sources: [R06-W1](<https://raw.githubusercontent.com/tats/w3m/master/README>), [R06-W2](<https://raw.githubusercontent.com/tats/w3m/master/doc/README>), [R06-W3](<https://raw.githubusercontent.com/tats/w3m/master/doc/w3m.1>), [R06-W4](<https://raw.githubusercontent.com/tats/w3m/master/doc/README.tab>), [R06-W5](<https://raw.githubusercontent.com/tats/w3m/master/doc/README.sixel>), [R06-W6](<https://api.github.com/repos/tats/w3m/commits?per_page=3>), [R06-W7](<https://tracker.debian.org/pkg/w3m>), [R06-W8](<https://github.com/tats/w3m/releases>).

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

No browser records in this shard; this does not imply missing research outside its assigned scope.

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

No browser records in this shard; this does not imply missing research outside its assigned scope.

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

No browser records in this shard; this does not imply missing research outside its assigned scope.

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

No browser records in this shard; this does not imply missing research outside its assigned scope.

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

**R01-S20 — [Use split view for multitasking in Chrome — computer](<https://support.google.com/chrome/answer/16971124?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:13:50Z. Published: not established.

Source limitations:

- The undated help body documents computer use and platform-specific shortcuts, not identical phone support.
- The documented two-view workflow does not alone prove that every richer multi-pane configuration is impossible.
- Side-panel and active-view behavior was not tested locally.

**R01-S38 — [Use Gemini in Chrome — computer](<https://support.google.com/chrome/answer/16283624?hl=en&co=GENIE.Platform%3DDesktop>)**

Kind: vendor-documentation. Retrieved: 2026-11-21T14:18:07Z. Published: not established.

Source limitations:

- The undated body expressly describes gradual rollout, supported devices, region/language/account/age requirements, and feature-specific permissions.
- Supported region and language tables were empty or partially stripped; their entries were not invented.
- Hiding the Gemini icon, changing tab sharing, and disabling all AI are not interchangeable. No runtime behavior or universal consumer all-AI-off control was established.

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
