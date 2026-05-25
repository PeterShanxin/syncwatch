# SyncWatch Fork - Vidhub Watch Party

## Status
Forked from Semro/syncwatch (MIT). Targeting vidhub4.cc (and mirrors). Phase 1 supports the original SyncWatch relay, an optional computer A-hosted relay, and an optional personal VPS relay.

## Known findings
- vidhub4.cc: working mirror. vidhub2.top / vidhub3.top / vidhub.tv have Cloudflare/redirect issues.
- Video is inside a same-origin iframe (vidhub4.cc/yzmplayer/...), not top page.
- Player: ArtPlayer 5.4.0, HLS stream, blob video URL.
- SyncWatch content script has all_frames: true - iframe hook expected to work.
- Original relay: server.syncwatch.space may work directly or via VPN/roaming.
- Self-hosted relay is optional: any reachable Node Socket.IO relay works, including computer A on LAN/VPN or a personal VPS for public cross-border use.

## Roadmap

### Phase 1 - Core (fork + relay)
- [x] P1.1 - Decide relay mode: original SyncWatch relay, computer A-hosted relay over LAN/VPN, or optional personal VPS
- [x] P1.2 - Keep relay URL configurable; set fork default only if needed for chosen relay mode
- [ ] P1.3 - Manual end-to-end test on vidhub4.cc from two browsers - confirm hook + sync
- [ ] P1.4 - Test chosen relay reachability from intended networks (VPN/roaming acceptable; true CN domestic only if targeting no-VPN use)
- [x] P1.5 - Package and sideload extension for internal use

### Relay mode options
- Original relay: simplest path if both users can connect to server.syncwatch.space.
- Computer A-hosted relay: run packages/syncwatch-server on computer A; browser A and browser B both set SyncWatch server URL to A's reachable relay address. Works best on same LAN or mesh VPN. Public internet requires firewall/router/NAT/TLS work.
- Personal VPS relay: optional reliability upgrade for no-VPN CN/SG use; use wss:// on port 443 when exposing publicly.

### Phase 1 verification notes
- 2026-05-25: Original relay root endpoint responds from this machine.
- 2026-05-25: Built relay server responds locally on port 18080, confirming computer A-hosted mode can run from the repo build.
- 2026-05-25: Chrome MV3 extension package builds at packages/syncwatch-extension/.output/syncwatch-extension-1.1.0-chrome.zip.
- Still required: manual two-browser vidhub4.cc test and intended-network reachability test.

### Phase 2 - Stability
- [ ] P2.1 - Handle vidhub mirror domain changes: fetch active domain from config endpoint or support domain pattern matching in manifest
- [ ] P2.2 - Drift correction: audit current sync logic, tune tolerance for HLS blob player (ArtPlayer may report position differently)
- [ ] P2.3 - Reconnection handling: auto-rejoin room on WebSocket drop (important for CN users with unstable connections)
- [ ] P2.4 - Confirm all vidhub mirrors work once Cloudflare issues are resolved: vidhub2.top, vidhub3.top, vidhub.tv

### Phase 3 - UX
- [ ] P3.1 - Room link sharing (one-click copy)
- [ ] P3.2 - Host controls: option to restrict play/pause to host only
- [ ] P3.3 - Visible sync indicator (in-page overlay showing room members + sync status)
- [ ] P3.4 - Basic in-page chat (if not already working via original SyncWatch chat feature)

### Phase 4 - Distribution
- [ ] P4.1 - Chrome Web Store submission under new app identity
- [ ] P4.2 - Support Edge (already Chromium-based, minimal changes)

## Out of scope (for now)
- Mobile support (Chrome extensions not supported on iOS)
- Other streaming sites (vidhub-first)
- Video/voice chat
