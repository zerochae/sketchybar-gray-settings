import type React from "react";
import { motion } from "framer-motion";
import { css, cx } from "@sketchybar-gray/panda/css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "option" | "primary" | "secondary" | "danger" | "success";
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
  const getVariantColor = () => {
    switch (variant) {
      case "primary":
        return "blue";
      case "secondary":
        return "comment";
      case "success":
        return "green";
      case "danger":
        return "red";
      case "option":
      default:
        return undefined;
    }
  };

  const variantColor = getVariantColor();
  const baseClassName = `option-item ${active ? "active" : ""} ${className || ""}`.trim();

  return (
    <motion.button
      onClick={onClick}
      className={cx(baseClassName, css({ outline: "none" }))}
      style={{
        ...(variantColor ? { color: `var(--colors-${variantColor})` } : {}),
        ...style,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "tween" as const,
        ease: "easeOut",
        duration: 0.1,
      }}
    >
      {children}
    </motion.button>
  );
}
