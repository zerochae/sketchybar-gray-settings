interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
  style?: React.CSSProperties;
}

export default function Heading({
  children,
  level = 1,
  className = "section-title",
  style = { marginBottom: "8px" },
}: HeadingProps) {
  const getLevelColor = () => {
    switch (level) {
      case 1:
        return "var(--colors-blue)";
      case 2:
        return "var(--colors-cyan)";
      case 3:
        return "var(--colors-green)";
      default:
        return "var(--colors-blue)";
    }
  };

  const hashPrefix = "#".repeat(level);

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        color: getLevelColor(),
        ...style,
      }}
    >
      <span style={{ opacity: 0.5, lineHeight: 0 }}>{hashPrefix}</span>
      {children}
    </div>
  );
}
