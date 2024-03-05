import type { ITechnology } from '../interfaces/ITechnology.interface' 
import angular from '../icons/myTech/angular.svg'
import html from '../icons/myTech/html.svg'
import css from '../icons/myTech/css.svg'
import javaScript from '../icons/myTech/javaScript.svg'
import typeScript from '../icons/myTech/typeScript.svg'
import sass from '../icons/myTech/sass.svg'
import tailwindCss from '../icons/myTech/tailwindCss.svg'
import git from '../icons/myTech/git.svg'

import react from '../icons/learning/react.svg'
import astro from '../icons/learning/astro.svg'
import node from '../icons/learning/node.svg'
import express from '../icons/learning/express.svg'
import cSharp from '../icons/learning/cSharp.svg'
import mySql from '../icons/learning/mySql.svg'

import net from '../icons/technologies/net.svg'
import postgreSQL from '../icons/technologies/postgreSQL.svg'
import nextJs from '../icons/technologies/nextJs.svg'
import nestJs from '../icons/technologies/nestJs.svg'
import python from '../icons/technologies/python.svg'
import swift from '../icons/technologies/swift.svg'
import cyberSecurity from '../icons/technologies/cyberSecurity.svg'

export const technologies: ITechnology[] = [
  { svg: html.src, color: '#E44D26', name: 'html' },
  { svg: css.src, color: '#264DE4', name: 'css' },
  { svg: javaScript.src, color: '#F0DB4F', name: 'javaScript' },
  { svg: angular.src, color: '#DD0031', name: 'angular' },
  { svg: typeScript.src, color: '#007ACC', name: 'typeScript' },
  { svg: sass.src, color: '#CC6699', name: 'sass' },
  { svg: tailwindCss.src, color: '#06B6D4', name: 'tailwindCss' },
  { svg: git.src, color: '#F05032', name: 'git' }
]

export const learningTech: ITechnology[] = [
  { svg: react.src, color: '#00d8ff', name: 'react' },
  { svg: astro.src, color: '#ff5d01', name: 'astro' },
  { svg: node.src, color: '#83cd29', name: 'node' },
  { svg: express.src, color: '#aaa', name: 'express' },
  { svg: cSharp.src, color: '#d871f2', name: 'cSharp' },
  { svg: mySql.src, color: '#F29111', name: 'mySql' }
]

export const learningToFuture: ITechnology[] = [
  { svg: net.src, color: '#512bd4', name: 'net' },
  { svg: postgreSQL.src, color: '#336791', name: 'postgreSQL' },
  { svg: nextJs.src, color: '#747474', name: 'nextJs' },
  { svg: nestJs.src, color: '#e0234e', name: 'nestJs' },
  { svg: python.src, color: '#ffc331', name: 'python' },
  { svg: swift.src, color: '#f05138', name: 'swift' },
  { svg: cyberSecurity.src, color: '#747474', name: 'cyberSecurity' }
]
