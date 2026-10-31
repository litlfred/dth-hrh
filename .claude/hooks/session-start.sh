#!/usr/bin/env bash
# Session start: lay down the platform's layers as the remote mounts
# index.lock.json pins (the folio-assistant/ submodule is gone, bean n3h9),
# then run the shared session-start primer from the cat-harness-tools mount.
#
# Mounts only when they are absent. After a repin, re-run
# `bun run cat-harness-tools/scripts/remote-mount.ts` by hand.
set -uo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/../.." || exit 0

if [ ! -f cat-harness-tools/scripts/session-start-coord-sweep.sh ]; then
  {
    ref=$(python3 -c "import json;print(next(m['ref'] for m in json.load(open('index.lock.json'))['mounts'] if m['harness']=='cat-harness-tools'))")
    M=$(mktemp -d)
    git init -q "$M" &&
      git -C "$M" fetch -q --depth 1 https://github.com/litlfred/cat-harness-tools.git "$ref" &&
      git -C "$M" checkout -q FETCH_HEAD &&
      bun run "$M/scripts/mount-from-lock.ts" --root .
    rm -rf "$M"
  } >&2
fi
# This folio's own dependencies and workspace mounts, pinned by bun.lock.
[ -d node_modules ] || bun install --frozen-lockfile >/dev/null 2>&1

[ -f cat-harness-tools/scripts/session-start-coord-sweep.sh ] &&
  exec bash "$PWD/cat-harness-tools/scripts/session-start-coord-sweep.sh"
echo "the platform's mounts are not on disk: run \`bun run cat-harness-tools/scripts/remote-mount.ts\`"
