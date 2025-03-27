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
// import django from "@iconify-icons/skill-icons/django";

import node from "@iconify-icons/devicon/nodejs";
import mySql from "@iconify-icons/skill-icons/mysql-dark";
import nestJs from "@iconify-icons/skill-icons/nestjs-light";
import python from "@iconify-icons/devicon/python";
// import spring from "@iconify-icons/devicon/spring";
// import java from "@iconify-icons/devicon/java";
// import fastapi from "@iconify-icons/devicon/fastapi";
// import express from "@iconify-icons/devicon/express";

import github from "@iconify-icons/devicon/github";
import vue from "@iconify-icons/devicon/vuejs";
import nuxt from "@iconify-icons/devicon/nuxtjs";
import bootstrap from "@iconify-icons/devicon/bootstrap";
import ngrx from "@iconify-icons/devicon/ngrx";

const technologies: Tech[] = [
  { color: "#E44D26", name: "html", icon: html },
  { color: "#4884B7", name: "css", icon: css },
  { color: "#F0DB4F", name: "javaScript", icon: js },
  { color: "#CC6699", name: "sass", icon: sass },
  { color: "#F05032", name: "git", icon: git },
  { color: "#007ACC", name: "typeScript", icon: ts },
  { color: "#DA1139", name: "angular", icon: angular },
  { color: "#06B6D4", name: "tailwindCss", icon: tailwind },
  { color: "#00d8ff", name: "react", icon: react },
  { color: "#e9e9e9", name: "nextJs", icon: nextJs },
  { color: "#ff5d01", name: "astro", icon: astro },
  { color: "#e9e9e9", name: "github", icon: github },
];

const learningTech: Tech[] = [
  { color: "#83cd29", name: "node", icon: node },
  { color: "#F29111", name: "mySql", icon: mySql },
  { color: "#e0234e", name: "nestJs", icon: nestJs },
  { color: "#ffc331", name: "python", icon: python },
  // { color: "#007396", name: "java", icon: java },
  // { color: "#6DB33F", name: "spring", icon: spring },
  // { color: "#009688", name: "fastapi", icon: fastapi },
  // { color: "#e9e9e9", name: "express", icon: express },
  // { color: "#00c58e", name: "django", icon: django },
];

const others: Tech[] = [
  { name: "vueJs", icon: vue, color: "#42b883" },
  { name: "nuxtJs", icon: nuxt, color: "#00c58e" },
  { name: "bootstrap", icon: bootstrap, color: "#8C38EF" },
  { name: "ngrx", icon: ngrx, color: "#d2227d" },
];

export const mySkills: Gallery = {
  techs: technologies,
  title: "Technologies I currently handle",
  label: "My skills",
};

export const learningSkills: Gallery = {
  techs: learningTech,
  title: "Technologies I currently study",
  label: "Learning",
};

export const othersSkills: Gallery = {
  title: "Technologies I have used occasionally",
  label: "Others",
  techs: others,
};
