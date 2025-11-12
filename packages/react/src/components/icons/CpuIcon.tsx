import type React from "react";
import { ICONS_TEXTS } from "../../constants/icons";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function CpuIcon({ className, style }: IconProps) {
  return (
    <span className={className} style={style}>
      {ICONS_TEXTS.cpu}
    </span>
  );
}
