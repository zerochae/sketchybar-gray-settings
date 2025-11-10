import icons from "@/assets/icon.json";
import KakaotalkIcon from "@/components/icons/KakaotalkIcon";
import { ReactNode } from "react";

export type WidgetName =
  | "clock"
  | "calendar"
  | "weather"
  | "caffeinate"
  | "volume"
  | "battery"
  | "disk"
  | "ram"
  | "cpu"
  | "kakaotalk";

export const ALL_WIDGETS: WidgetName[] = [
  "clock",
  "calendar",
  "weather",
  "caffeinate",
  "volume",
  "battery",
  "disk",
  "ram",
  "cpu",
  "kakaotalk",
];

export const WIDGET_COLORS: Record<WidgetName, string> = {
  clock: "var(--colors-yellow)",
  calendar: "var(--colors-tangerine)",
  weather: "var(--colors-cyan)",
  caffeinate: "var(--colors-green)",
  volume: "var(--colors-blue)",
  battery: "var(--colors-orange)",
  disk: "var(--colors-red)",
  ram: "var(--colors-magenta)",
  cpu: "var(--colors-blue)",
  kakaotalk: "var(--colors-yellow)",
};

export const WIDGET_ICONS: Record<WidgetName, string | ReactNode> = {
  clock: icons.clock,
  calendar: icons.calendar,
  weather: icons.weather,
  caffeinate: icons.coffee_on,
  volume: icons.volume_high,
  battery: icons.battery_full,
  disk: icons.disk,
  ram: icons.memory,
  cpu: icons.cpu,
  kakaotalk: <KakaotalkIcon color={WIDGET_COLORS.kakaotalk} size={16} />,
};

export const WIDGET_LABELS: Record<WidgetName, string> = {
  clock: "Clock",
  calendar: "Calendar",
  weather: "Weather",
  caffeinate: "Caffeinate",
  volume: "Volume",
  battery: "Battery",
  disk: "Disk",
  ram: "RAM",
  cpu: "CPU",
  kakaotalk: "KakaoTalk",
};
