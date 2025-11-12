import { useEffect } from "react";
import { useConfig } from "@/contexts/ConfigContext";
import { getTheme, injectTheme } from "@sketchybar-gray/panda/themes";
import { ThemeName } from "@sketchybar-gray/panda";

export function useTheme() {
  const { config, updateAppearance } = useConfig();
  const selectedTheme = config.appearance.theme as ThemeName;

  const setSelectedTheme = (theme: string) => {
    updateAppearance("theme", theme);
  };

  useEffect(() => {
    getTheme(selectedTheme).then((theme) => {
      injectTheme(document.documentElement, theme);
    });
  }, [selectedTheme]);

  return { selectedTheme, setSelectedTheme };
}
