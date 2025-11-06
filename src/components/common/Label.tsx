interface LabelProps {
  icon?: string | React.ReactNode;
  children: React.ReactNode;
  color?: string;
  iconColor?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Label({
  icon,
  children,
  color,
  iconColor,
  size = "11px",
  className = "section-title",
  style,
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
