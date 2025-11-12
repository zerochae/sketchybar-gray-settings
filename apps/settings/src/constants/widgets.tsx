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
  clock: icons.clock,
  calendar: icons.calendar,
  weather: icons.weather,
  caffeinate: icons.coffee_on,
  volume: icons.volume_high,
  battery: icons.battery_full,
  disk: icons.disk,
  ram: icons.memory,
  cpu: icons.cpu,
  kakaotalk: <KakaotalkIcon color={WIDGET_COLORS.kakaotalk} size={10} />,
  config: icons.config,
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
