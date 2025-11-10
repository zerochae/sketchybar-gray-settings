import { open } from "@tauri-apps/plugin-shell";
import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";
import KeyHint from "@/components/common/KeyHint";
import { useModal } from "@/contexts/ModalContext";

export default function OpenConfigFile() {
  const { showModal } = useModal();

  const handleOpenConfig = async () => {
    try {
      await open("~/.config/sketchybar/user.sketchybarrc");
      showModal(
        "Success",
        "Config file opened in default editor!",
        "success"
      );
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
