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
NC='\033[0m'

echo -e "${BLUE}=== Sketchybar Settings Deployment ===${NC}"
echo ""

# Step 1: Clean and build
echo -e "${BLUE}[1/4] Building release binary...${NC}"
cd "$PROJECT_DIR"
pnpm build:tauri

# Step 2: Check binary
BINARY_PATH="$PROJECT_DIR/src-tauri/target/release/$BINARY_NAME"
if [ ! -f "$BINARY_PATH" ]; then
  echo -e "${RED}Error: Built binary not found at $BINARY_PATH${NC}"
  exit 1
fi

BINARY_SIZE=$(du -h "$BINARY_PATH" | cut -f1)
echo -e "${GREEN}✓ Binary built successfully (${BINARY_SIZE})${NC}"
echo ""

# Step 3: Copy to sketchybar repo
echo -e "${BLUE}[2/4] Copying binary to sketchybar repo...${NC}"
mkdir -p "$SBAR_BIN_DIR"

# Remove dev binary if exists
if [ -f "$SBAR_BIN_DIR/dev" ]; then
  rm "$SBAR_BIN_DIR/dev"
  echo -e "${YELLOW}✓ Removed dev binary${NC}"
fi

cp "$BINARY_PATH" "$SBAR_BIN_DIR/$BINARY_NAME"
chmod +x "$SBAR_BIN_DIR/$BINARY_NAME"
echo -e "${GREEN}✓ Binary copied to: $SBAR_BIN_DIR/$BINARY_NAME${NC}"
echo ""

# Step 3: Check git status
echo -e "${BLUE}[3/3] Checking git status...${NC}"
cd "$SBAR_CONFIG_DIR"
if git status > /dev/null 2>&1; then
  echo -e "${YELLOW}Sketchybar repo git status:${NC}"
  git status --short bin/
  echo ""
  echo -e "${YELLOW}Note: Binary file is ready to commit${NC}"
  echo -e "${YELLOW}Size: ${BINARY_SIZE}${NC}"
  echo ""
  echo -e "${BLUE}To commit the binary:${NC}"
  echo -e "  cd $SBAR_CONFIG_DIR"
  echo -e "  git add bin/$BINARY_NAME"
  echo -e "  git commit -m \"feat: add settings binary v$(cat $PROJECT_DIR/package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[", ]//g')\""
fi

echo ""
echo -e "${GREEN}=== Deployment Complete ===${NC}"
echo -e "${BLUE}Test the settings app:${NC}"
echo -e "  $SBAR_BIN_DIR/$BINARY_NAME"
