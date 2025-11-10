import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";
import KeyHint from "@/components/common/KeyHint";

export default function OpenConfigFile() {
  return (
    <div>
      <Heading level={2}>Open Config File</Heading>
      <Box padding="0">
        <Button variant="option" style={{ color: "var(--colors-blue)" }}>
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
