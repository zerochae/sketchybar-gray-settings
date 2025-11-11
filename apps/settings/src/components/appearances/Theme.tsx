import { themeNames } from "@sketchybar-gray/panda";
import * as themes from "@sketchybar-gray/panda";
import { useTheme } from "@/hooks/useTheme";
import { Checkbox, Box, Heading } from "@sketchybar-gray/react";
import icons from "@/assets/icon.json";

const ansiColors = [
  "red",
  "yellow",
  "blue",
  "green",
  "magenta",
  "cyan",
  "orange",
  "peach",
  "lime",
  "sky",
  "aqua",
] as const;

const getThemeColors = (themeName: string): Record<string, string> => {
  const theme = themes[themeName];
  if (!theme) return {};

  const colors: Record<string, string> = {};
  const cssVarRegex = /--colors-(\w+):\s*([^;]+);/g;
  let match;

  while ((match = cssVarRegex.exec(theme.css)) !== null) {
    const [, colorName, colorValue] = match;
    colors[colorName] = colorValue.trim();
  }

  return colors;
};

export default function Theme() {
  const { selectedTheme, setSelectedTheme } = useTheme();

  return (
    <div>
      <Heading level={2}>Theme</Heading>
      <Box
        padding="8px 12px"
        style={{ display: "flex", flexDirection: "column", gap: "4px" }}
      >
        {themeNames.map((theme) => {
          const colors = getThemeColors(theme);
          return (
            <div
              key={theme}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Checkbox
                checked={selectedTheme === theme}
                onChange={() => setSelectedTheme(theme)}
                label={theme}
              />
              <div
                style={{
                  display: "flex",
                  gap: "2px",
                  marginLeft: "auto",
                }}
              >
                {ansiColors.map((colorKey) => (
                  <span
                    key={colorKey}
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "1",
                      borderRadius: "2px",
                      color: colors[colorKey] || "transparent",
                    }}
                  >
                    {icons.box}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </Box>
    </div>
  );
}
