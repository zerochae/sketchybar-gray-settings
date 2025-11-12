import type React from "react";
import { css, cx } from "@sketchybar-gray/panda/css";

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  color?: string;
  className?: string;
  marginBottom?: string;
}

export default function Heading({
  children,
  level = 1,
  color,
  className = "section-title",
  marginBottom = "8px",
}: HeadingProps) {
  const getLevelColor = () => {
    if (color) return color;

    switch (level) {
      case 1:
        return "sapphire";
      case 2:
        return "mint";
      case 3:
        return "emerald";
      default:
        return "sapphire";
    }
  };

  const hashPrefix = "#".repeat(level);
  const levelColor = getLevelColor();

  return (
    <div
      className={cx(
        className,
        css({
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          marginBottom,
          // color: levelColor
        })
      )}
      style={{ color: `var(--colors-${levelColor})` }}
    >
      <span className={css({ opacity: 0.5, lineHeight: 0 })}>{hashPrefix}</span>
      {children}
    </div>
  );
}
