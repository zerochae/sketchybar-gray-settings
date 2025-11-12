import {
  BatteryFullIcon,
  CalendarIcon,
  ClockIcon,
  CoffeeOnIcon,
  ConfigIcon,
  CpuIcon,
  DiskIcon,
  KakaotalkIcon,
  MemoryIcon,
  VolumeHighIcon,
  WeatherIcon,
} from "@sketchybar-gray/react";
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

export const WIDGET_ICONS: Record<WidgetName, ReactNode> = {
  clock: <ClockIcon />,
  calendar: <CalendarIcon />,
  weather: <WeatherIcon />,
  caffeinate: <CoffeeOnIcon />,
  volume: <VolumeHighIcon />,
  battery: <BatteryFullIcon />,
  disk: <DiskIcon />,
  ram: <MemoryIcon />,
  cpu: <CpuIcon />,
  kakaotalk: <KakaotalkIcon color={WIDGET_COLORS.kakaotalk} size={10} />,
  config: <ConfigIcon />,
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
