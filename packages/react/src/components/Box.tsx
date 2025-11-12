import type React from "react";
import { css, cx } from "@sketchybar-gray/panda/css";

interface BoxProps {
  children: React.ReactNode;
  padding?: string;
  className?: string;
}

export default function Box({ children, padding = "12px", className = "box-container" }: BoxProps) {
  return <div className={cx(className, css({ padding }))}>{children}</div>;
}
