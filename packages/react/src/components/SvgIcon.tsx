import type React from "react";
import { css } from "@sketchybar-gray/panda/css";

interface SvgIconProps {
  children: React.ReactNode;
  color?: string;
  size?: number;
  viewBox?: string;
}

export default function SvgIcon({
  children,
  color = "currentColor",
  size = 16,
  viewBox = "0 0 24 24",
}: SvgIconProps) {
  const fillColor = color === "currentColor" ? color : `var(--colors-${color})`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fillColor}
      viewBox={viewBox}
      className={css({
        display: "inline-block",
        verticalAlign: "middle",
      })}
    >
      {children}
    </svg>
  );
}
