<img width="743" height="572" alt="스크린샷 2025-11-10 16 59 50" src="https://github.com/user-attachments/assets/1e235d92-c485-421b-b977-7d894a109270" />

# Sketchybar Gray Settings

A GUI settings tool for macOS Sketchybar. Built with Tauri for lightweight and fast performance.

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
# Install dependencies, build, and auto-install to Sketchybar
pnpm install
pnpm run install
```

Reload Sketchybar after installation:

```bash
sketchybar --reload
```

Now click the config icon in Sketchybar to launch the settings app.

## Development

```bash
# Run development server (frontend only)
pnpm dev

# Tauri development mode (full app)
pnpm tauri dev

# Install as development version (test separately from production)
pnpm run install:dev
```

Development mode installs to `~/.config/sketchybar/bin/dev` and takes precedence over production version.

## Settings Storage

Settings are saved to `~/.config/sketchybar/user.sketchybarrc` in Bash environment variable format.

## Tech Stack

- **Tauri 2**: Lightweight and secure desktop app framework
- **React 19**: Latest React features
- **TypeScript**: Type safety
- **Framer Motion**: Smooth animations
- **Vite**: Fast build tool
