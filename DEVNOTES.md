# Dev Notes

## Architecture
- Extension: Chrome MV3, content script with all_frames: true
- Sync: Socket.IO over WebSocket
- Relay server: Node.js, located in /server directory of original repo

## Key files to touch
- manifest.json - update name, permissions, host_permissions for vidhub domains
- src/ or content script entry - locate relay server URL constant and update to self-hosted
- server/ - relay server source, redeploy this on HK VPS

## Relay deployment (Phase 1.1)
- Provider: Alibaba Cloud HK or Tencent Cloud HK (CN2 routing preferred)
- Port: 443, protocol: wss://
- Run: Node.js + PM2 or Docker
- Confirm open ports and test with wscat from both SG and CN domestic connections

## Testing checklist
- [ ] vidhub4.cc video loads and plays
- [ ] Extension popup activates and shows room UI
- [ ] Two browser tabs join same room
- [ ] Play event on tab A triggers play on tab B within 2s
- [ ] Seek event syncs correctly
- [ ] Relay WebSocket connection shown as wss:// in Network tab (not ws://)
- [ ] Relay reachable from CN domestic (test separately)
