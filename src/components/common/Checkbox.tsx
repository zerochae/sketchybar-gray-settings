interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

export default function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={onChange}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: checked ? "var(--colors-blue)" : "var(--colors-comment)",
          fontWeight: 600,
        }}
      >
        {checked ? "[x]" : "[ ]"}
      </span>
      <span style={{ textTransform: "capitalize" }}>{label}</span>
    </label>
  );
}
