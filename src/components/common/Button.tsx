interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "option" | "primary" | "danger" | "success";
  active?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function Button({
  children,
  onClick,
  variant = "option",
  active = false,
  className,
  style,
}: ButtonProps) {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "primary":
        return {
          padding: "8px 12px",
          background: "var(--colors-blue)",
          color: "var(--colors-bg)",
          border: "none",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: 600,
          cursor: "pointer",
          transition: "opacity 0.2s",
        };
      case "success":
        return {
          padding: "8px 12px",
          background: "var(--colors-green)",
          color: "var(--colors-bg)",
          border: "none",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: 600,
          cursor: "pointer",
          transition: "opacity 0.2s",
        };
      case "danger":
        return {
          padding: "8px 12px",
          background: "var(--colors-red)",
          color: "var(--colors-bg)",
          border: "none",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: 600,
          cursor: "pointer",
          transition: "opacity 0.2s",
        };
      case "option":
      default:
        return {};
    }
  };

  const variantStyles = getVariantStyles();
  const baseClassName =
    variant === "option"
      ? `option-item ${active ? "active" : ""} ${className || ""}`.trim()
      : className || "";

  return (
    <button
      onClick={onClick}
      className={baseClassName}
      style={{ ...variantStyles, ...style }}
      onMouseEnter={(e) => {
        if (variant !== "option") {
          e.currentTarget.style.opacity = "0.8";
        }
      }}
      onMouseLeave={(e) => {
        if (variant !== "option") {
          e.currentTarget.style.opacity = "1";
        }
      }}
    >
      {children}
    </button>
  );
}
