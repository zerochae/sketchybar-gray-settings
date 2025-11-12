import type React from "react";
import { css, cx } from "@sketchybar-gray/panda/css";

interface LabelProps {
  icon?: string | React.ReactNode;
  children: React.ReactNode;
  color?: string;
  iconColor?: string;
  size?: string;
  className?: string;
  reverse?: boolean;
}

export default function Label({
  icon,
  children,
  color,
  iconColor,
  size = "11px",
  className = "section-title",
  reverse = false,
}: LabelProps) {
  const isStringIcon = typeof icon === "string";

  return (
    <div
      className={cx(
        className,
        css({
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: size,
          flexDirection: reverse ? "row-reverse" : "row",
          justifyContent: reverse ? "space-between" : "flex-start",
        })
      )}
      style={color ? { color: `var(--colors-${color})` } : undefined}
    >
      {icon && (
        <>
          {isStringIcon ? (
            <span
              className={css({
                fontSize: "16px",
                lineHeight: 0,
              })}
              style={iconColor ? { color: `var(--colors-${iconColor})` } : undefined}
            >
              {icon}
            </span>
          ) : (
            <span className={css({ lineHeight: 0 })}>{icon}</span>
          )}
        </>
      )}
      {children}
    </div>
  );
}
