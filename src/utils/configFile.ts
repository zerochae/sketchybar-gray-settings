import { readTextFile, writeTextFile } from "@tauri-apps/plugin-fs";
import { homeDir, resolve } from "@tauri-apps/api/path";
import type { Config } from "@/types/config";

const CONFIG_PATH = ".config/sketchybar/user.sketchybarrc";

const ENV_VAR_MAP: Record<string, string> = {
  "appearance.theme": "SBAR_THEME",
  "appearance.barStyle": "SBAR_BAR_STYLE",
  "appearance.barBackground": "SBAR_BAR_BACKGROUND",
  "appearance.barHeight": "SBAR_BAR_HEIGHT",
  "appearance.barPosition": "SBAR_BAR_POSITION",
  "appearance.labelFontFamily": "SBAR_LABEL_FONT_FAMILY",
  "appearance.iconFontFamily": "SBAR_ICON_FONT_FAMILY",
  "appearance.iconFontSize": "SBAR_ICON_FONT_SIZE",
  "appearance.labelFontSize": "SBAR_LABEL_FONT_SIZE",
  "widgets.clock.color": "SBAR_COLOR_CLOCK",
  "widgets.calendar.color": "SBAR_COLOR_CALENDAR",
  "widgets.weather.color": "SBAR_COLOR_WEATHER",
  "widgets.caffeinate.color": "SBAR_COLOR_CAFFEINATE",
  "widgets.volume.color": "SBAR_COLOR_VOLUME",
  "widgets.battery.color": "SBAR_COLOR_BATTERY",
  "widgets.disk.color": "SBAR_COLOR_DISK",
  "widgets.ram.color": "SBAR_COLOR_RAM",
  "widgets.cpu.color": "SBAR_COLOR_CPU",
  "widgets.kakaotalk.color": "SBAR_COLOR_KAKAOTALK",
  "widgets.clock.format": "SBAR_CLOCK_FORMAT",
  "widgets.calendar.format": "SBAR_CALENDAR_FORMAT",
  "widgets.weather.location": "SBAR_WEATHER_LOCATION",
  "widgets.cpu.showGraph": "SBAR_CPU_SHOW_GRAPH",
  "widgets.cpu.showPercent": "SBAR_CPU_SHOW_PERCENT",
  "widgets.ram.showGraph": "SBAR_RAM_SHOW_GRAPH",
  "widgets.ram.showPercent": "SBAR_RAM_SHOW_PERCENT",
  "advanced.updateFreqDefault": "SBAR_ITEM_UPDATE_FREQ_DEFAULT",
  "advanced.updateFreqFast": "SBAR_ITEM_UPDATE_FREQ_FAST",
  "advanced.updateFreqSlow": "SBAR_ITEM_UPDATE_FREQ_SLOW",
  "widgetsOrder": "SBAR_WIDGETS_RIGHT_ENABLED",
};

const REVERSE_ENV_VAR_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(ENV_VAR_MAP).map(([k, v]) => [v, k])
);

async function getConfigPath(): Promise<string> {
  const home = await homeDir();
  return await resolve(home, CONFIG_PATH);
}

function setNestedValue(obj: any, path: string, value: any) {
  const keys = path.split(".");
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((curr, key) => curr?.[key], obj);
}

export async function readConfig(): Promise<Partial<Config>> {
  try {
    const path = await getConfigPath();
    const content = await readTextFile(path);
    return parseConfigFile(content);
  } catch (error) {
    console.error("Failed to read config:", error);
    return {};
  }
}

function parseConfigFile(content: string): Partial<Config> {
  const config: any = {
    appearance: {},
    widgets: {},
    advanced: {},
  };

  const lines = content.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("export ")) continue;

    const match = trimmed.match(/export\s+(\w+)=["']?([^"']*)["']?/);
    if (!match) continue;

    const [, envVar, rawValue] = match;
    const configPath = REVERSE_ENV_VAR_MAP[envVar];

    if (!configPath) continue;

    let value: any = rawValue;

    if (configPath === "widgetsOrder") {
      value = rawValue.split(/\s+/).filter(Boolean);
    } else if (rawValue === "true" || rawValue === "false") {
      value = rawValue === "true";
    } else if (!isNaN(Number(rawValue)) && rawValue !== "") {
      value = rawValue.includes(".") ? parseFloat(rawValue) : parseInt(rawValue);
    }

    setNestedValue(config, configPath, value);
  }

  return config;
}

const COLOR_MAP: Record<string, string> = {
  "cyan": "$COLOR_CYAN",
  "blue": "$COLOR_BLUE",
  "green": "$COLOR_GREEN",
  "yellow": "$COLOR_YELLOW",
  "orange": "$COLOR_ORANGE",
  "red": "$COLOR_RED",
  "magenta": "$COLOR_MAGENTA",
  "tangerine": "$COLOR_TANGERINE",
  "white": "$COLOR_WHITE",
  "black": "$COLOR_BLACK",
};

export async function writeConfig(config: Config): Promise<void> {
  console.log("writeConfig called with config:", config);

  const lines: string[] = ["#!/usr/bin/env bash", ""];

  for (const [configPath, envVar] of Object.entries(ENV_VAR_MAP)) {
    const value = getNestedValue(config, configPath);

    if (value === undefined) continue;

    if (configPath === "widgetsOrder" && Array.isArray(value)) {
      lines.push(`export ${envVar}="${value.join(" ")}"`);
    } else if (typeof value === "string") {
      if (configPath.includes(".color")) {
        const colorVar = COLOR_MAP[value.toLowerCase()];
        if (colorVar) {
          lines.push(`export ${envVar}=${colorVar}`);
        } else {
          lines.push(`export ${envVar}="${value}"`);
        }
      } else {
        lines.push(`export ${envVar}="${value}"`);
      }
    } else {
      lines.push(`export ${envVar}=${value}`);
    }
  }

  const content = lines.join("\n") + "\n";
  console.log("Generated content:", content);

  const path = await getConfigPath();
  console.log("Config path:", path);

  try {
    await writeTextFile(path, content);
    console.log("writeTextFile completed successfully");
  } catch (error) {
    console.error("writeTextFile failed:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    throw error;
  }
}
