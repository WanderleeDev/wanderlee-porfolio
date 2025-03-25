import type { Gallery, Tech } from "../models/Gallery.model";

import angular from "@iconify-icons/devicon/angular";
import css from "@iconify-icons/devicon/css3";
import html from "@iconify-icons/devicon/html5";
import js from "@iconify-icons/devicon/javascript";
import ts from "@iconify-icons/devicon/typescript";
import sass from "@iconify-icons/devicon/sass";
import tailwind from "@iconify-icons/devicon/tailwindcss";
import git from "@iconify-icons/devicon/git";
import react from "@iconify-icons/devicon/react";
import astro from "@iconify-icons/devicon/astro";
import nextJs from "@iconify-icons/skill-icons/nextjs-light";

import node from "@iconify-icons/devicon/nodejs";
import mySql from "@iconify-icons/devicon/mysql";
import nestJs from "@iconify-icons/skill-icons/nestjs-dark";
import python from "@iconify-icons/devicon/python";

import github from "@iconify-icons/devicon/github";
import vue from "@iconify-icons/devicon/vuejs";
import nuxt from "@iconify-icons/devicon/nuxtjs";
import bootstrap from "@iconify-icons/devicon/bootstrap";
import ngrx from "@iconify-icons/devicon/ngrx";
import { addIcon, getIcon } from "@iconify/react/dist/iconify.js";

// addIcon("@custom:csss", {
//   body: `<path d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" fill="currentColor"/>`,
//   width: 24,
//   height: 24,
// });

// const customCss = getIcon("@custom:csss");

const technologies: Tech[] = [
  { color: "#E44D26", name: "html", icon: html },
  { color: "#264DE4", name: "css", icon: css },
  { color: "#F0DB4F", name: "javaScript", icon: js },
  { color: "#CC6699", name: "sass", icon: sass },
  { color: "#F05032", name: "git", icon: git },
  { color: "#007ACC", name: "typeScript", icon: ts },
  { color: "#F837C9", name: "angular", icon: angular },
  { color: "#06B6D4", name: "tailwindCss", icon: tailwind },
  { color: "#00d8ff", name: "react", icon: react },
  { color: "#747474", name: "nextJs", icon: nextJs },
  { color: "#ff5d01", name: "astro", icon: astro },
  { name: "github", icon: github, color: "#747474" },
];

const learningTech: Tech[] = [
  { color: "#83cd29", name: "node", icon: node },
  { color: "#F29111", name: "mySql", icon: mySql },
  // { color: "#e0234e", name: "nestJs", icon: customCss! },
  { color: "#ffc331", name: "python", icon: python },
];

const others: Tech[] = [
  { name: "vueJs", icon: vue, color: "#42b883" },
  { name: "nuxtJs", icon: nuxt, color: "#00c58e" },
  { name: "bootstrap", icon: bootstrap, color: "#7952b3" },
  { name: "ngrx", icon: ngrx, color: "#d2227d" },
];

export const mySkills: Gallery = {
  techs: technologies,
  title: "Tecnologías que actualmente manejo",
};

export const learningSkills: Gallery = {
  techs: learningTech,
  title: "Tecnologías que actualmente me encuentro estudiando",
};

export const othersSkills: Gallery = {
  title: "Tecnologías que he usado ocasionalmente",
  techs: others,
};
