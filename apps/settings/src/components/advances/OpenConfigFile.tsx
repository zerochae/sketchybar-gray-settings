import { Command } from "@tauri-apps/plugin-shell";
import { homeDir, resolve } from "@tauri-apps/api/path";
import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";
import KeyHint from "@/components/common/KeyHint";
import { useModal } from "@/contexts/ModalContext";

export default function OpenConfigFile() {
  const { showModal } = useModal();

  const handleOpenConfig = async () => {
    try {
      const home = await homeDir();
      const configPath = await resolve(
        home,
        ".config/sketchybar/user.sketchybarrc",
      );

      const guiEditors = [
        { cmd: "code", app: "Visual Studio Code" },
        { cmd: "cursor", app: "Cursor" },
        { cmd: "zed", app: "Zed" },
        { cmd: "subl", app: "Sublime Text" },
      ];

      for (const { cmd, app } of guiEditors) {
        try {
          const whichResult = await Command.create("which", [cmd]).execute();
          if (whichResult.code === 0 && whichResult.stdout.trim()) {
            const editorPath = whichResult.stdout.trim();
            await Command.create(editorPath, [configPath]).spawn();
            showModal("Success", `Config file opened with ${app}!`, "success");
            return;
          }
        } catch {
          continue;
        }
      }

      const terminalEditors = ["nvim", "vim"];

      for (const editor of terminalEditors) {
        try {
          const whichResult = await Command.create("which", [editor]).execute();
          if (whichResult.code === 0 && whichResult.stdout.trim()) {
            await Command.create("osascript", [
              "-e",
              `tell application "Terminal" to do script "${editor} '${configPath}'"`,
            ]).execute();
            showModal(
              "Success",
              `Config file opened with ${editor} in Terminal!`,
              "success",
            );
            return;
          }
        } catch {
          continue;
        }
      }

      await Command.create("open", [configPath]).execute();
      showModal("Success", "Config file opened in default editor!", "success");
    } catch (error) {
      showModal("Error", "Failed to open config file!", "error");
    }
  };

  return (
    <div>
      <Heading level={2}>Open Config File</Heading>
      <Box padding="0">
        <Button
          onClick={handleOpenConfig}
          variant="option"
          style={{ color: "var(--colors-blue)" }}
        >
          <span>Open in Editor</span>
          <KeyHint>⌘O</KeyHint>
        </Button>
        <div
          style={{
            marginTop: "12px",
            padding: "12px",
            background: "var(--colors-bg3)",
            borderRadius: "4px",
            fontSize: "12px",
            color: "var(--colors-comment)",
          }}
        >
          Opens user.sketchybarrc in your default editor.
        </div>
      </Box>
    </div>
  );
}
