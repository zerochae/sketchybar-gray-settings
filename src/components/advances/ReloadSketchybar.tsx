import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";
import KeyHint from "@/components/common/KeyHint";

export default function ReloadSketchybar() {
  return (
    <div>
      <Heading level={2}>Reload Sketchybar</Heading>
      <Box padding="0">
        <Button variant="option" style={{ color: "var(--colors-green)" }}>
          <span>Reload Now</span>
          <KeyHint>⌘R</KeyHint>
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
          Reloads sketchybar configuration and restarts all plugins.
        </div>
      </Box>
    </div>
  );
}
