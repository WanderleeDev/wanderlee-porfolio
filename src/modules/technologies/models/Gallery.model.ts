import type { IconifyIcon } from "@iconify/react/dist/iconify.js";

export interface Gallery {
  techs: Tech[];
  title: string;
}

export interface Tech {
  name: string;
  color: string;
  icon: IconifyIcon;
}
