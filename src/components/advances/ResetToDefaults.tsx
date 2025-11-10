import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";
import KeyHint from "@/components/common/KeyHint";
import icons from "@/assets/icon.json";
import { useConfig } from "@/contexts/ConfigContext";
import { useModal } from "@/contexts/ModalContext";

export default function ResetToDefaults() {
  const { resetConfig, saveConfig } = useConfig();
  const { showConfirm, showModal } = useModal();

  const handleReset = () => {
    showConfirm(
      "Reset to Defaults",
      "Are you sure you want to reset all settings to defaults? This action cannot be undone.",
      async () => {
        try {
          resetConfig();
          await saveConfig();
          showModal(
            "Success",
            "All settings have been reset to defaults!",
            "success",
          );
        } catch (error) {
          showModal("Error", "Failed to reset settings!", "error");
        }
      },
      "warning",
    );
  };

  return (
    <div>
      <Heading level={2}>Reset to Defaults</Heading>
      <Box padding="0">
        <Button
          onClick={handleReset}
          variant="option"
          style={{ color: "var(--colors-red)" }}
        >
          <span>Reset All Settings</span>
          <KeyHint>⌘⌫</KeyHint>
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
          {icons.warning} This will reset all settings to default values. This
          action cannot be undone.
        </div>
      </Box>
    </div>
  );
}
