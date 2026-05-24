# SyncWatch Fork - Vidhub Watch Party

## Status
Forked from Semro/syncwatch (MIT). Targeting vidhub4.cc (and mirrors).

## Known findings
- vidhub4.cc: working mirror. vidhub2.top / vidhub3.top / vidhub.tv have Cloudflare/redirect issues.
- Video is inside a same-origin iframe (vidhub4.cc/yzmplayer/...), not top page.
- Player: ArtPlayer 5.4.0, HLS stream, blob video URL.
- SyncWatch content script has all_frames: true - iframe hook expected to work.
- Original relay: server.syncwatch.space (Yandex Cloud Russia) - unreliable for CN domestic users.

## Roadmap

### Phase 1 - Core (fork + relay)
- [ ] P1.1 - Deploy self-hosted relay server (Socket.IO) on HK VPS (port 443, wss://)
- [ ] P1.2 - Update relay server URL constant in extension to point to self-hosted relay
- [ ] P1.3 - Manual end-to-end test on vidhub4.cc from two browsers - confirm hook + sync
- [ ] P1.4 - Test relay reachability from true CN domestic network (not SG roaming)
- [ ] P1.5 - Package and sideload extension for internal use

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
