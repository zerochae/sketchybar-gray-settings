#!/usr/bin/env bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
SBAR_CONFIG_DIR="$HOME/.config/sketchybar"
SBAR_BIN_DIR="$SBAR_CONFIG_DIR/bin"
BINARY_NAME="settings"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}Installing Sketchybar Settings...${NC}"

# Find the built binary
BINARY_PATH="$PROJECT_DIR/src-tauri/target/release/$BINARY_NAME"

if [ ! -f "$BINARY_PATH" ]; then
  echo -e "${RED}Error: Built binary not found at $BINARY_PATH${NC}"
  echo -e "${RED}Please run 'pnpm build:tauri' first.${NC}"
  exit 1
fi

echo -e "${BLUE}Found binary at: $BINARY_PATH${NC}"

# Create bin directory if it doesn't exist
mkdir -p "$SBAR_BIN_DIR"

# Check if this is a dev install or production install
if [ "$1" = "--dev" ]; then
  TARGET_PATH="$SBAR_BIN_DIR/dev"
  echo -e "${BLUE}Installing to dev mode: $TARGET_PATH${NC}"
else
  TARGET_PATH="$SBAR_BIN_DIR/$BINARY_NAME"
  echo -e "${BLUE}Installing to production: $TARGET_PATH${NC}"
fi

# Copy binary
echo -e "${BLUE}Copying binary from $BINARY_PATH${NC}"
cp "$BINARY_PATH" "$TARGET_PATH"
chmod +x "$TARGET_PATH"

# Update open_settings.sh
PLUGIN_PATH="$SBAR_CONFIG_DIR/events/open_settings.sh"
echo -e "${BLUE}Updating $PLUGIN_PATH${NC}"

cat > "$PLUGIN_PATH" << 'EOF'
#!/usr/bin/env bash

BIN_DIR="$HOME/.config/sketchybar/bin"
DEV_BIN="$BIN_DIR/dev"
PROD_BIN="$BIN_DIR/settings"

# Close popup if it exists
sketchybar --set config popup.drawing=off 2>/dev/null

# Determine which binary to use (dev takes priority)
if [ -x "$DEV_BIN" ]; then
  SETTINGS_BIN="$DEV_BIN"
elif [ -x "$PROD_BIN" ]; then
  SETTINGS_BIN="$PROD_BIN"
else
  echo "Settings binary not found in $BIN_DIR"
  exit 1
fi

# Check if app is already running
if pgrep -f "$SETTINGS_BIN" > /dev/null; then
  osascript -e 'tell application "System Events" to set frontmost of first process whose unix id is '$(pgrep -f "$SETTINGS_BIN")' to true' 2>/dev/null
  exit 0
fi

# Run the settings app
"$SETTINGS_BIN" &
exit 0
EOF

chmod +x "$PLUGIN_PATH"

echo -e "${GREEN}✓ Installation complete!${NC}"
echo -e "${BLUE}Binary installed to: $TARGET_PATH${NC}"
echo -e "${BLUE}Plugin updated: $PLUGIN_PATH${NC}"
echo ""
echo -e "${BLUE}Reload sketchybar to apply changes:${NC}"
echo -e "  ${GREEN}sketchybar --reload${NC}"
echo ""
if [ "$1" = "--dev" ]; then
  echo -e "${BLUE}Note: Installed in dev mode. Remove dev binary to use production:${NC}"
  echo -e "  ${GREEN}rm $SBAR_BIN_DIR/dev${NC}"
fi
