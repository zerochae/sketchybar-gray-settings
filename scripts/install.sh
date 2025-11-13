#!/usr/bin/env bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
SBAR_CONFIG_DIR="$HOME/.config/sketchybar"
SBAR_BIN_DIR="$SBAR_CONFIG_DIR/bin"

GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
NC='\033[0m'

if [ -n "$1" ]; then
  APPS=("$1")
else
  APPS=("settings" "volume")
fi

echo ""
echo -e "${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BOLD}${BLUE}  Sketchybar Installation${NC}"
echo -e "${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

MISSING_BINARIES=()

for APP in "${APPS[@]}"; do
  BINARY_PATH="$PROJECT_DIR/apps/$APP/src-tauri/target/release/$APP"

  if [ ! -f "$BINARY_PATH" ]; then
    MISSING_BINARIES+=("$APP")
  fi
done

if [ ${#MISSING_BINARIES[@]} -gt 0 ]; then
  echo -e "${RED}✗ Binaries not found:${NC}"
  for APP in "${MISSING_BINARIES[@]}"; do
    echo -e "  ${YELLOW}$PROJECT_DIR/apps/$APP/src-tauri/target/release/$APP${NC}"
  done
  echo -e "  ${YELLOW}Run: pnpm build:all${NC}"
  exit 1
fi

mkdir -p "$SBAR_BIN_DIR"

for APP in "${APPS[@]}"; do
  BINARY_PATH="$PROJECT_DIR/apps/$APP/src-tauri/target/release/$APP"
  BINARY_SIZE=$(du -h "$BINARY_PATH" | cut -f1)

  TARGET_PATH="$SBAR_BIN_DIR/$APP"
  cp "$BINARY_PATH" "$TARGET_PATH"
  chmod +x "$TARGET_PATH"

  echo -e "${GREEN}✓${NC} Installed ${BOLD}$APP${NC} ${YELLOW}(${BINARY_SIZE})${NC}"
done

echo ""
echo -e "${YELLOW}→${NC} Next: ${BOLD}sketchybar --reload${NC}"
echo ""
