# Dev Notes

## Architecture
- Extension: Chrome MV3, content script with all_frames: true
- Sync: Socket.IO over WebSocket
- Relay server: Node.js, located in packages/syncwatch-server of original repo

## Key files to touch
- packages/syncwatch-extension/manifest.ts - browser permissions and vidhub host permissions
- packages/syncwatch-extension/entrypoints/content.ts - content script runs in all frames for target video pages
- packages/syncwatch-extension/entrypoints/background.ts - default relay URL and configurable connectionUrl storage
- packages/syncwatch-server/ - relay server source for computer A or personal VPS hosting

## Relay options (Phase 1.1)
- Original service: use the built-in default server.syncwatch.space if both users can reach it, including via VPN or roaming.
- Computer A-hosted relay: run packages/syncwatch-server on computer A. Browser A and browser B both point SyncWatch's server URL option to computer A's reachable address.
- Same LAN example: http://<computer-a-lan-ip>:8080, with Windows firewall allowing inbound TCP 8080.
- Mesh VPN example: http://<computer-a-vpn-ip>:8080 via Tailscale/ZeroTier/other VPN, avoiding public port forwarding.
- Public internet example: domain + TLS + reverse proxy to the Node server, preferably wss:// on port 443. A personal VPS is optional and mainly useful for no-VPN CN/SG reliability.
- Confirm chosen relay with browser DevTools Network and, where useful, wscat/curl from both endpoints.

## Testing checklist
- [ ] vidhub4.cc video loads and plays
- [ ] Extension popup activates and shows room UI
- [ ] Two browser tabs join same room
- [ ] Play event on tab A triggers play on tab B within 2s
- [ ] Seek event syncs correctly
- [ ] Relay WebSocket connection shown as wss:// in Network tab (not ws://)
- [ ] Chosen relay reachable from intended network path (VPN/roaming/LAN acceptable unless no-VPN CN domestic is required)

## Build outputs
- Chrome MV3 unpacked build: packages/syncwatch-extension/.output/chrome-mv3
- Chrome zip package: packages/syncwatch-extension/.output/syncwatch-extension-1.1.0-chrome.zip
- Local relay build: packages/syncwatch-server/build/index.js
