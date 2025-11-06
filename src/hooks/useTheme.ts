import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { themes } from "@/themes";

export function useTheme() {
  const [selectedTheme, setSelectedTheme] = useState<string>("onedark");

  useEffect(() => {
    invoke<string>("read_config_theme")
      .then((theme) => {
        if (themes[theme]) {
          setSelectedTheme(theme);
        }
      })
      .catch((error) => {
        console.error("Failed to read theme from config:", error);
      });
  }, []);

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

      invoke("write_config_theme", { theme: selectedTheme }).catch((error) => {
        console.error("Failed to write theme to config:", error);
      });
    }
  }, [selectedTheme]);

  return { selectedTheme, setSelectedTheme };
}
