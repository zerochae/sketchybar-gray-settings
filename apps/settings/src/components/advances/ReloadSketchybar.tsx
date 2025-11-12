import { Command } from "@tauri-apps/plugin-shell";
import { Box, Heading, Button, KeyHint } from "@sketchybar-gray/react";
import { css } from "@sketchybar-gray/panda/css";
import { useModal } from "@/contexts/ModalContext";

export default function ReloadSketchybar() {
  const { showModal } = useModal();

  const handleReload = async () => {
    try {
      await Command.create("sh", ["-c", "sketchybar --reload"]).execute();
      showModal("Success", "Sketchybar reloaded successfully!", "success");
    } catch {
      showModal("Error", "Failed to reload sketchybar!", "error");
    }
  };

  return (
    <div>
      <Heading level={2}>Reload Sketchybar</Heading>
      <Box padding="0">
        <Button onClick={handleReload} variant="success">
          <span>Reload Now</span>
          <KeyHint>⌘R</KeyHint>
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
          Reloads sketchybar configuration and restarts all plugins.
        </div>
      </Box>
    </div>
  );
}
