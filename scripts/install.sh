#!/usr/bin/env bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
SBAR_CONFIG_DIR="$HOME/.config/sketchybar"
SBAR_BIN_DIR="$SBAR_CONFIG_DIR/bin"
BINARY_NAME="settings"

GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
NC='\033[0m'

echo ""
echo -e "${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BOLD}${BLUE}  Sketchybar Settings Installation${NC}"
echo -e "${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

BINARY_PATH="$PROJECT_DIR/apps/settings/src-tauri/target/release/$BINARY_NAME"

if [ ! -f "$BINARY_PATH" ]; then
  echo -e "${RED}✗ Binary not found${NC}"
  echo -e "  ${YELLOW}Expected: ${BINARY_PATH}${NC}"
  echo -e "  ${YELLOW}Run: pnpm build:tauri${NC}"
  exit 1
fi

BINARY_SIZE=$(du -h "$BINARY_PATH" | cut -f1)
echo -e "${GREEN}✓${NC} Found binary ${YELLOW}(${BINARY_SIZE})${NC}"

mkdir -p "$SBAR_BIN_DIR"

TARGET_PATH="$SBAR_BIN_DIR/$BINARY_NAME"
cp "$BINARY_PATH" "$TARGET_PATH"
chmod +x "$TARGET_PATH"

echo -e "${GREEN}✓${NC} Installed to ${BLUE}$SBAR_BIN_DIR/$BINARY_NAME${NC}"
echo ""
echo -e "${YELLOW}→${NC} Next: ${BOLD}sketchybar --reload${NC}"
echo ""
