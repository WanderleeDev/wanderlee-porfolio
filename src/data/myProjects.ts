import type { IProject } from "../interfaces/IProject.interface"

export const myProjects: IProject[] = [
  {
    title: 'Ecomerce',
    description: 'Ecommerce con sistema de autenticación, carrito de compras, notificación y uso de local Storage',
    links: {
      demo: 'https://github.com/',
      code: 'https://github.com/'
    },
    technologies: ['angular', 'sass', 'typeScript'],
    deploy: 'vercel'
  },
  {
    title: 'Ubuntu desktop',
    description: 'Copia funcional del escritorio de ubuntu 22.0.4, calendario, terminal, editor de código entre otros',
    links: {
      demo: 'https://github.com/',
      code: 'https://github.com/WanderleeDev/ubuntu-desktop'
    },
    technologies: ['angular', 'tailwindCss', 'typeScript'],
    deploy: 'netlify'
  },
  {
    title: 'Retro Blog',
    description: 'Desarrollado  con la librería CSS Nes, cuenta con pequeños blogs de contenido estático y uso las features Scroll Animations de Css',
    links: {
      demo: 'https://retro-blog-two.vercel.app/',
      code: 'https://github.com/WanderleeDev/Astro-retro-blog'
    },
    technologies: ['angular', 'css', 'typeScript'],
    deploy: 'vercel'
  },
  {
    title: 'Text to Speech',
    description: 'Desarrollado utilizando la programación Orientada a objetos (POO), cuenta un manejador de errores en caso no ser compatible.',
    links: {
      demo: 'https://text-to-speech-3t1bdmkyk-wanderleedev.vercel.app/',
      code: 'https://github.com/WanderleeDev/text-to-speech/tree/main'
    },
    technologies: ['html', 'tailwindCss', 'typeScript'],
    deploy: 'vercel'
  }
]
