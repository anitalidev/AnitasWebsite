#!/bin/bash
set -euo pipefail

REPO_DIR="/var/www/MyWebsite"
APP_DIR="$REPO_DIR/frontend"
FORCE_BUILD=false

if [ "${1:-}" = "--force" ]; then
  FORCE_BUILD=true
fi

log() {
  echo "-- $* --"
}

log "Pulling files from GitHub $(date)"
log "Current directory $(pwd)"

cd "$REPO_DIR"
BEFORE_HEAD=$(git rev-parse HEAD 2>/dev/null || echo "")

git pull --ff-only

AFTER_HEAD=$(git rev-parse HEAD 2>/dev/null || echo "")

if [ "$FORCE_BUILD" = false ] && [ -n "$BEFORE_HEAD" ] && [ "$BEFORE_HEAD" = "$AFTER_HEAD" ]; then
  log "No new Git content. Skipping npm rebuild."
  exit 0
fi

if [ ! -d "$APP_DIR" ] || [ ! -f "$APP_DIR/package.json" ]; then
  log "Frontend app not found at $APP_DIR"
  exit 1
fi

cd "$APP_DIR"
log "Installing npm dependencies"
npm install

log "Building the React/Vite project"
npm run build

log "Done"
