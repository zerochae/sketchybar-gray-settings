import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";
import KeyHint from "@/components/common/KeyHint";
import icons from "@/assets/icon.json";

export default function ResetToDefaults() {
  return (
    <div>
      <Heading level={2}>Reset to Defaults</Heading>
      <Box padding="0">
        <Button variant="option" style={{ color: "var(--colors-red)" }}>
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
          {icons.warning} This will reset all settings to default values. This action
          cannot be undone.
        </div>
      </Box>
    </div>
  );
}
