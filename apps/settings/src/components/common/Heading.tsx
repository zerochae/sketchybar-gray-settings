interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Heading({
  children,
  level = 1,
  color,
  className = "section-title",
  style = { marginBottom: "8px" },
}: HeadingProps) {
  const getLevelColor = () => {
    if (color) return color;

    switch (level) {
      case 1:
        return "var(--colors-sapphire)";
      case 2:
        return "var(--colors-mint)";
      case 3:
        return "var(--colors-emerald)";
      default:
        return "var(--colors-sapphire)";
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
