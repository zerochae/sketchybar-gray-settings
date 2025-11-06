interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Heading({
  children,
  className = "section-title",
  style = { marginBottom: "8px" },
}: HeadingProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
