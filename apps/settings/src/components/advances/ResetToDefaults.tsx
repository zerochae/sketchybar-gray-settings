import { writeTextFile } from "@tauri-apps/plugin-fs";
import { homeDir, resolve } from "@tauri-apps/api/path";
import { relaunch } from "@tauri-apps/plugin-process";
import { Command } from "@tauri-apps/plugin-shell";
import { Box, Heading, Button, KeyHint, WarningIcon, useModal } from "@sketchybar-gray/react";
import { css } from "@sketchybar-gray/panda/css";

export default function ResetToDefaults() {
  const { showConfirm, showModal } = useModal();

  const handleReset = () => {
    showConfirm(
      "Reset to Defaults",
      "Are you sure you want to reset all settings to defaults? This will clear the config file and restart the app.",
      async () => {
        try {
          const home = await homeDir();
          const configPath = await resolve(home, ".config/sketchybar/user.sketchybarrc");

          await writeTextFile(configPath, "#!/usr/bin/env bash\n\n");

          await Command.create("sh", ["-c", "sketchybar --reload"]).execute();

          showModal(
            "Success",
            "Config file cleared. App will restart with default settings.",
            "success"
          );

          setTimeout(() => {
            relaunch();
          }, 1500);
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Failed to reset settings!";
          showModal("Error", errorMessage, "error");
        }
      },
      "warning"
    );
  };

  return (
    <div>
      <Heading level={2}>Reset to Defaults</Heading>
      <Box padding="0">
        <Button onClick={handleReset} variant="danger">
          <span>Reset All Settings</span>
          <KeyHint>⌘⌫</KeyHint>
        </Button>
        <div
          className={css({
            marginTop: "12px",
            padding: "12px",
            background: "bg3",
            borderRadius: "4px",
            fontSize: "12px",
            color: "comment",
          })}
        >
          <WarningIcon /> This will reset all settings to default values. This action cannot be
          undone.
        </div>
      </Box>
    </div>
  );
}
