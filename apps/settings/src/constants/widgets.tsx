import { ICONS, KakaotalkIcon } from "@sketchybar-gray/react";
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
  | "kakaotalk"
  | "config";

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
  "config",
];

export const WIDGET_COLORS: Record<WidgetName, string> = {
  clock: "yellow",
  calendar: "tangerine",
  weather: "cyan",
  caffeinate: "green",
  volume: "blue",
  battery: "orange",
  disk: "red",
  ram: "magenta",
  cpu: "blue",
  kakaotalk: "yellow",
  config: "blue",
};

export const WIDGET_ICONS: Record<WidgetName, string | ReactNode> = {
  clock: ICONS.clock,
  calendar: ICONS.calendar,
  weather: ICONS.weather,
  caffeinate: ICONS.coffee_on,
  volume: ICONS.volume_high,
  battery: ICONS.battery_full,
  disk: ICONS.disk,
  ram: ICONS.memory,
  cpu: ICONS.cpu,
  kakaotalk: <KakaotalkIcon color={WIDGET_COLORS.kakaotalk} size={10} />,
  config: ICONS.config,
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
  config: "Config",
};
