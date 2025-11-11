import { useEffect } from "react";
import { useConfig } from "@/contexts/ConfigContext";

export function useTheme() {
  const { config, updateAppearance } = useConfig();
  const selectedTheme = config.appearance.theme;

  const setSelectedTheme = (theme: string) => {
    updateAppearance("theme", theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-panda-theme", selectedTheme);
  }, [selectedTheme]);

  return { selectedTheme, setSelectedTheme };
}
