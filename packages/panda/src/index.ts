export {
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
} from "./colorscheme";

export const themeNames = [
  "onedark",
  "nord",
  "onelight",
  "tokyonight",
  "ayulight",
  "ayudark",
  "gruvboxlight",
  "blossomlight",
  "githublight",
  "githubdark",
] as const;

export type ThemeName = (typeof themeNames)[number];
