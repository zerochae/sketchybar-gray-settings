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
  const getVariantColor = (): string | undefined => {
    switch (variant) {
      case "primary":
        return "var(--colors-blue)";
      case "success":
        return "var(--colors-green)";
      case "danger":
        return "var(--colors-red)";
      case "option":
      default:
        return undefined;
    }
  };

  const variantColor = getVariantColor();
  const baseClassName = `option-item ${active ? "active" : ""} ${className || ""}`.trim();

  return (
    <button
      onClick={onClick}
      className={baseClassName}
      style={{ color: variantColor, ...style }}
    >
      {children}
    </button>
  );
}
