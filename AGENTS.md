# Base44 notes

- Create React App (react-scripts 4) landing page; no backend, no database, no external credentials required.
- Runs on Node 16 (`node:16` image) — newer Node breaks webpack 4's OpenSSL usage.
- `npm install --legacy-peer-deps` is required (React 17 vs peer ranges).
- `.env` sets `NODE_PATH=src/`, so imports are absolute from `src/`.
- Dev server needs `DANGEROUSLY_DISABLE_HOST_CHECK=true` and polling watchers behind the bind mount.
- Verify: `curl -s -o /dev/null -w '%{http_code}' localhost:3000` → 200.
