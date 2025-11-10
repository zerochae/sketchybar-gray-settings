export interface WidgetConfig {
  color: string;
  enabled: boolean;
}

export interface ClockConfig extends WidgetConfig {
  format: string;
}

export interface CalendarConfig extends WidgetConfig {
  format: string;
}

export interface WeatherConfig extends WidgetConfig {
  location: string;
}

export interface CPUConfig extends WidgetConfig {
  showGraph: boolean;
  showPercent: boolean;
}

export interface RAMConfig extends WidgetConfig {
  showGraph: boolean;
  showPercent: boolean;
}

export interface AppearanceConfig {
  theme: string;
  barStyle: "block" | "compact";
  barBackground: string;
  barHeight: number;
  barPosition: "top" | "bottom";
  labelFontFamily: string;
  iconFontFamily: string;
  iconFontSize: number;
  labelFontSize: number;
}

export interface WidgetsConfig {
  clock: ClockConfig;
  calendar: CalendarConfig;
  weather: WeatherConfig;
  caffeinate: WidgetConfig;
  volume: WidgetConfig;
  battery: WidgetConfig;
  disk: WidgetConfig;
  ram: RAMConfig;
  cpu: CPUConfig;
  kakaotalk: WidgetConfig;
}

export interface AdvancedConfig {
  updateFreqDefault: number;
  updateFreqFast: number;
  updateFreqSlow: number;
  configVisible: boolean;
}

export interface Config {
  appearance: AppearanceConfig;
  widgets: WidgetsConfig;
  advanced: AdvancedConfig;
  widgetsOrder: string[];
}
