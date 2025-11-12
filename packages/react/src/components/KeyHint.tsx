import type React from "react";
import { css, cx } from "@sketchybar-gray/panda/css";

interface KeyHintProps {
  children: React.ReactNode;
  className?: string;
}

export default function KeyHint({ children, className = "key-hint" }: KeyHintProps) {
  return <span className={cx(className, css({ height: "16px", margin: "8px" }))}>{children}</span>;
}
