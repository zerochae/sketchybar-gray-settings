interface WidgetTitleProps {
  icon: string | React.ReactNode;
  label: string;
  useAppFont?: boolean;
  color?: string;
}

export default function WidgetTitle({
  icon,
  label,
  useAppFont = false,
  color,
}: WidgetTitleProps) {
  const isStringIcon = typeof icon === "string";

  return (
    <div className="section-title" style={{ marginBottom: "8px" }}>
      <span style={{ color: color }}>
        {isStringIcon ? (
          <span
            style={{
              fontSize: "16px",
              fontFamily: useAppFont ? "sketchybar-app-font" : undefined,
            }}
          >
            {icon}
          </span>
        ) : (
          icon
        )}{" "}
        {label}
      </span>
    </div>
  );
}
