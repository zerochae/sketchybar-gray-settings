import Label from "@/components/common/Label";
import KeyHint from "@/components/common/KeyHint";

export default function Shortcuts() {
  return (
    <div
      style={{
        flexShrink: 0,
        fontSize: "11px",
        color: "var(--colors-comment)",
        paddingTop: "12px",
        borderTop: "1px solid var(--colors-border)",
      }}
    >
      <div
        style={{
          marginBottom: "6px",
          color: "var(--colors-blue)",
          fontWeight: 600,
        }}
      >
        Shortcuts
      </div>
      <Label
        icon={<KeyHint>↑↓</KeyHint>}
        style={{ marginBottom: "4px", fontSize: "11px", fontWeight: 400 }}
      >
        Navigate
      </Label>
      <Label
        icon={<KeyHint>⏎</KeyHint>}
        style={{ marginBottom: "4px", fontSize: "11px", fontWeight: 400 }}
      >
        Select
      </Label>
      <Label icon={<KeyHint>󱊷</KeyHint>} style={{ fontSize: "11px", fontWeight: 400 }}>
        Close
      </Label>
    </div>
  );
}
