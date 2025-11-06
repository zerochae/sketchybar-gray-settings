interface BoxProps {
  children: React.ReactNode;
  padding?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Box({
  children,
  padding = "12px",
  className = "box-container",
  style,
}: BoxProps) {
  return (
    <div
      className={className}
      style={{
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
