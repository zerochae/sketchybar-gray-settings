import { useEffect } from "react";
import { themes } from "@/themes";
import { useConfig } from "@/contexts/ConfigContext";

export function useTheme() {
  const { config, updateAppearance } = useConfig();
  const selectedTheme = config.appearance.theme;

  const setSelectedTheme = (theme: string) => {
    updateAppearance("theme", theme);
  };

  useEffect(() => {
    const theme = themes[selectedTheme];
    if (theme) {
      const styleId = "dynamic-theme";
      let styleEl = document.getElementById(styleId) as HTMLStyleElement;

      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
      }

      styleEl.textContent = theme.css.replace(
        `[data-panda-theme=${selectedTheme}]`,
        ":root",
      );
    }
  }, [selectedTheme]);

  return { selectedTheme, setSelectedTheme };
}
