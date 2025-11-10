interface KeyHintProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function KeyHint({
  children,
  className = "key-hint",
  style,
}: KeyHintProps) {
  return (
    <span
      className={className}
      style={{ height: "16px", margin: "8px", ...style }}
    >
      {children}
    </span>
  );
}
