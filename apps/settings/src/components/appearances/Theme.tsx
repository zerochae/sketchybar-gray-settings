import { themeNames } from "@sketchybar-gray/panda";
import * as themes from "@sketchybar-gray/panda";
import { useTheme } from "@/hooks/useTheme";
import { Checkbox, Box, Heading, BoxIcon } from "@sketchybar-gray/react";
import { css } from "@sketchybar-gray/panda/css";

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
  const colorKey = `${themeName}Colors` as keyof typeof themes;
  const theme = themes[colorKey];
  if (!theme) return {};
  return theme as Record<string, string>;
};

export default function Theme() {
  const { selectedTheme, setSelectedTheme } = useTheme();

  return (
    <div>
      <Heading level={2}>Theme</Heading>
      <Box
        padding="8px 12px"
        className={css({ display: "flex", flexDirection: "column", gap: "4px" })}
      >
        {themeNames.map((theme) => {
          const colors = getThemeColors(theme);
          return (
            <div
              key={theme}
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "8px",
              })}
            >
              <Checkbox
                checked={selectedTheme === theme}
                onChange={() => setSelectedTheme(theme)}
                label={theme}
              />
              <div
                className={css({
                  display: "flex",
                  gap: "2px",
                  marginLeft: "auto",
                })}
              >
                {ansiColors.map((colorKey) => (
                  <span
                    key={colorKey}
                    className={css({
                      fontSize: "1.2rem",
                      lineHeight: "1",
                      borderRadius: "2px",
                    })}
                    style={{ color: colors[colorKey] || "transparent" }}
                  >
                    <BoxIcon />
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
