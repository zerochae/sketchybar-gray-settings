<img width="743" height="572" alt="스크린샷 2025-11-10 16 59 50" src="https://github.com/user-attachments/assets/1e235d92-c485-421b-b977-7d894a109270" />

# Sketchybar Gray UI

A collection of GUI tools for macOS Sketchybar. Built with Tauri for lightweight and fast performance.

## Apps

- **Settings**: GUI settings tool for Sketchybar configuration
- **Volume**: Volume control UI (coming soon)
- **WiFi**: WiFi management UI (coming soon)

## Key Features

### 🎨 Appearance

- **Theme Selection**: Choose from various color themes to change the overall appearance of Sketchybar
- **Widget Toggle**: Enable or disable individual widgets
- **Widget Order**: Rearrange widget display order with drag and drop
- **Bar Style**: Customize Sketchybar's style

### 🔧 Widgets

Detailed configuration for individual widgets:

- **Calendar**: Calendar widget settings
- **Clock**: Clock widget settings
- **Weather**: Weather widget location settings (e.g., Seoul, Tokyo)
- More widgets coming soon

### ⚙️ Advanced

- **Open Config File**: Directly edit `user.sketchybarrc` file
- **Reload Sketchybar**: Apply changes immediately
- **Reset to Defaults**: Restore all settings to initial state

### 💾 Real-time Saving

- **Save & Exit**: Save settings and automatically reload Sketchybar
- **Keyboard Shortcuts**: Number keys (1-3) for category navigation
- **Visual Feedback**: Animated notifications on successful save

## Installation

```bash
# Install dependencies and build all apps
pnpm install

# Build and install all apps to Sketchybar
pnpm run install:all
```

Reload Sketchybar after installation:

```bash
sketchybar --reload
```

Now click the config icon in Sketchybar to launch the settings app.

## Development

```bash
# Run settings app in development mode (frontend only)
pnpm run dev:settings

# Run settings app in Tauri development mode (full app)
pnpm run tauri:settings

# Build specific app
pnpm --filter settings build:tauri
```

### Monorepo Structure

This is a pnpm workspace monorepo containing multiple Tauri apps:

```
sketchybar-gray-ui/
├── apps/
│   ├── settings/      # Settings GUI app
│   ├── volume/        # Volume control UI (coming soon)
│   └── wifi/          # WiFi management UI (coming soon)
├── scripts/
└── pnpm-workspace.yaml
```

## Settings Storage

Settings are saved to `~/.config/sketchybar/user.sketchybarrc` in Bash environment variable format.

## Tech Stack

- **Tauri 2**: Lightweight and secure desktop app framework
- **React 19**: Latest React features
- **TypeScript**: Type safety
- **Framer Motion**: Smooth animations
- **Vite**: Fast build tool
