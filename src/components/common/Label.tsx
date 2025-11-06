interface LabelProps {
  icon?: string | React.ReactNode;
  children: React.ReactNode;
  color?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Label({
  icon,
  children,
  color,
  size = "11px",
  className = "section-title",
  style,
}: LabelProps) {
  const isStringIcon = typeof icon === "string";

  return (
    <div
      className={className}
      style={{
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
              }}
            >
              {icon}
            </span>
          ) : (
            icon
          )}{" "}
        </>
      )}
      {children}
    </div>
  );
}
