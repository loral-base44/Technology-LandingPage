# Notes for agents

- Static React (CRA 4) landing page — no backend, no database, no external credentials needed.
- Run with: `docker compose -f docker-compose.base44.yml up -d` (node:16 image; CRA 4 fails on newer Node's OpenSSL).
- `.env` sets `NODE_PATH=src/`, so imports are absolute from `src/` (e.g. `import theme from "theme"`).
- Dev server needs `DANGEROUSLY_DISABLE_HOST_CHECK=true` and `CHOKIDAR_USEPOLLING=true` behind the preview proxy.
- Verify: `curl -s -o /dev/null -w "%{http_code}" localhost:3000` → 200.
