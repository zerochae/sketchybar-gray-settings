import ayudark from './theme-ayudark.json';
import ayulight from './theme-ayulight.json';
import blossomlight from './theme-blossomlight.json';
import githubdark from './theme-githubdark.json';
import githublight from './theme-githublight.json';
import gruvboxlight from './theme-gruvboxlight.json';
import nord from './theme-nord.json';
import onedark from './theme-onedark.json';
import onelight from './theme-onelight.json';
import tokyonight from './theme-tokyonight.json';

export interface Theme {
  name: string;
  id: string;
  css: string;
}

export const themes: Record<string, Theme> = {
  ayudark,
  ayulight,
  blossomlight,
  githubdark,
  githublight,
  gruvboxlight,
  nord,
  onedark,
  onelight,
  tokyonight,
};

export const themeNames = Object.keys(themes);
