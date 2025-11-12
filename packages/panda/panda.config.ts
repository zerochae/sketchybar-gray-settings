import { defineConfig } from "@pandacss/dev";
import {
  onedarkColors,
  nordColors,
  onelightColors,
  tokyonightColors,
  ayulightColors,
  ayudarkColors,
  gruvboxlightColors,
  blossomlightColors,
  githublightColors,
  githubdarkColors,
  themeNames,
} from "./src";

function toThemeTokens(colors: Record<string, string>) {
  return Object.entries(colors).reduce(
    (acc, [key, value]) => {
      acc[key] = { value };
      return acc;
    },
    {} as Record<string, { value: string }>
  );
}

export default defineConfig({
  preflight: true,
  syntax: "object-literal",
  jsxFramework: "react",
  jsxFactory: "panda",
  include: ["../../apps/**/src/**/*.{ts,tsx,js,jsx}", "../react/src/**/*.{ts,tsx,js,jsx}"],
  exclude: [],
  cssVarRoot: ":where(:root, :host)",
  emitPackage: true,
  staticCss: {
    themes: themeNames as unknown as string[],
  },
  outdir: "styled-system",
  theme: {
    extend: {
      tokens: {
        fonts: {
          mono: { value: "SpaceMono Nerd Font Mono, var(--font-mono, monospace)" },
        },
        colors: toThemeTokens(onedarkColors),
      },
    },
  },
  themes: {
    onedark: {
      tokens: {
        colors: toThemeTokens(onedarkColors),
      },
    },
    nord: {
      tokens: {
        colors: toThemeTokens(nordColors),
      },
    },
    onelight: {
      tokens: {
        colors: toThemeTokens(onelightColors),
      },
    },
    tokyonight: {
      tokens: {
        colors: toThemeTokens(tokyonightColors),
      },
    },
    ayulight: {
      tokens: {
        colors: toThemeTokens(ayulightColors),
      },
    },
    ayudark: {
      tokens: {
        colors: toThemeTokens(ayudarkColors),
      },
    },
    gruvboxlight: {
      tokens: {
        colors: toThemeTokens(gruvboxlightColors),
      },
    },
    blossomlight: {
      tokens: {
        colors: toThemeTokens(blossomlightColors),
      },
    },
    githublight: {
      tokens: {
        colors: toThemeTokens(githublightColors),
      },
    },
    githubdark: {
      tokens: {
        colors: toThemeTokens(githubdarkColors),
      },
    },
  },
  globalCss: {
    "*": {
      boxSizing: "border-box",
      fontFamily: "mono",
      fontWeight: "700",
      userSelect: "none",
      WebkitUserSelect: "none",
    },
    "*, *::before, *::after": {
      transition: "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
    },
    "*::-webkit-scrollbar": {
      width: "8px",
    },
    "*::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "*::-webkit-scrollbar-thumb": {
      background: "token(colors.blue)",
      backgroundClip: "padding-box",
      borderRadius: "10px",
      borderRight: "4px solid transparent",
      borderLeft: "2px solid transparent",
    },
    "*::-webkit-scrollbar-thumb:hover": {
      background: "token(colors.blue)",
    },
  },
});
