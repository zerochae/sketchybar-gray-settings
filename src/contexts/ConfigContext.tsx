import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import type { Config } from "@/types/config";
import { readConfig, writeConfig } from "@/utils/configFile";
import { Command } from "@tauri-apps/plugin-shell";

const defaultConfig: Config = {
  appearance: {
    theme: "onedark",
    barStyle: "block",
    barBackground: "transparent",
    barHeight: 56,
    barPosition: "top",
    labelFontFamily: "SpaceMono Nerd Font Mono",
    iconFontFamily: "SpaceMono Nerd Font Mono",
    iconFontSize: 18.0,
    labelFontSize: 12.0,
  },
  widgets: {
    clock: {
      color: "yellow",
      enabled: true,
      format: "MM/DD HH:mm",
    },
    calendar: {
      color: "tangerine",
      enabled: true,
      format: "YYYY-MM-DD",
    },
    weather: {
      color: "cyan",
      enabled: true,
      location: "Seoul",
    },
    caffeinate: {
      color: "green",
      enabled: true,
    },
    volume: {
      color: "blue",
      enabled: true,
    },
    battery: {
      color: "orange",
      enabled: true,
    },
    disk: {
      color: "red",
      enabled: true,
    },
    ram: {
      color: "magenta",
      enabled: true,
      showGraph: true,
      showPercent: true,
    },
    cpu: {
      color: "blue",
      enabled: true,
      showGraph: true,
      showPercent: true,
    },
    kakaotalk: {
      color: "yellow",
      enabled: true,
    },
  },
  advanced: {
    updateFreqDefault: 10,
    updateFreqFast: 2,
    updateFreqSlow: 30,
  },
};

interface ConfigContextType {
  config: Config;
  updateAppearance: <K extends keyof Config["appearance"]>(
    key: K,
    value: Config["appearance"][K]
  ) => void;
  updateWidget: <W extends keyof Config["widgets"], K extends keyof Config["widgets"][W]>(
    widget: W,
    key: K,
    value: Config["widgets"][W][K]
  ) => void;
  updateAdvanced: <K extends keyof Config["advanced"]>(
    key: K,
    value: Config["advanced"][K]
  ) => void;
  saveConfig: () => Promise<void>;
  resetConfig: () => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export function ConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<Config>(defaultConfig);

  useEffect(() => {
    readConfig().then((loadedConfig) => {
      setConfig((prev) => ({
        ...prev,
        ...loadedConfig,
        appearance: { ...prev.appearance, ...loadedConfig.appearance },
        widgets: { ...prev.widgets, ...loadedConfig.widgets },
        advanced: { ...prev.advanced, ...loadedConfig.advanced },
      }));
    });
  }, []);

  const updateAppearance = useCallback(
    <K extends keyof Config["appearance"]>(
      key: K,
      value: Config["appearance"][K]
    ) => {
      setConfig((prev) => ({
        ...prev,
        appearance: {
          ...prev.appearance,
          [key]: value,
        },
      }));
    },
    []
  );

  const updateWidget = useCallback(
    <W extends keyof Config["widgets"], K extends keyof Config["widgets"][W]>(
      widget: W,
      key: K,
      value: Config["widgets"][W][K]
    ) => {
      setConfig((prev) => ({
        ...prev,
        widgets: {
          ...prev.widgets,
          [widget]: {
            ...prev.widgets[widget],
            [key]: value,
          },
        },
      }));
    },
    []
  );

  const updateAdvanced = useCallback(
    <K extends keyof Config["advanced"]>(
      key: K,
      value: Config["advanced"][K]
    ) => {
      setConfig((prev) => ({
        ...prev,
        advanced: {
          ...prev.advanced,
          [key]: value,
        },
      }));
    },
    []
  );

  const saveConfig = useCallback(async () => {
    try {
      // await writeConfig(config);
      await Command.create("sketchybar", ["--reload"]).execute();
    } catch (error) {
      console.error("Failed to save config:", error);
      throw error;
    }
  }, [config]);

  const resetConfig = useCallback(() => {
    setConfig(defaultConfig);
  }, []);

  return (
    <ConfigContext.Provider
      value={{
        config,
        updateAppearance,
        updateWidget,
        updateAdvanced,
        saveConfig,
        resetConfig,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig must be used within ConfigProvider");
  }
  return context;
}
