interface LabelProps {
  icon?: string | React.ReactNode;
  children: React.ReactNode;
  color?: string;
  iconColor?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
  reverse?: boolean;
}

export default function Label({
  icon,
  children,
  color,
  iconColor,
  size = "11px",
  className = "section-title",
  style,
  reverse = false,
}: LabelProps) {
  const isStringIcon = typeof icon === "string";

  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        color,
        fontSize: size,
        flexDirection: reverse ? "row-reverse" : "row",
        justifyContent: reverse ? "space-between" : "flex-start",
        ...style,
      }}
    >
      {icon && (
        <>
          {isStringIcon ? (
            <span
              style={{
                fontSize: "16px",
                color: iconColor,
                lineHeight: 0,
              }}
            >
              {icon}
            </span>
          ) : (
            <span style={{ lineHeight: 0 }}>
              {icon}
            </span>
          )}
        </>
      )}
      {children}
    </div>
  );
}
