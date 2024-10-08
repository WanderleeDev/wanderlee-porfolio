import type { IProject } from "../interfaces/IProject.interface"

export const myProjects: IProject[] = [
  {
    title: 'Ecomerce',
    description: 'Ecommerce con sistema de autenticación, carrito de compras, notificación y uso de local Storage',
    links: {
      demo: 'https://clior.vercel.app/',
      code: 'https://github.com/WanderleeDev/clior-ecommerce'
    },
    technologies: ['angular', 'sass', 'typeScript', 'flowbite'],
    deploy: 'vercel',
    image: 'https://www.dropbox.com/scl/fi/m6vzt3tx6nuuhvkxgiyw3/clior.webp?rlkey=1ph4dond6v40m47ys5y0wlb4a&st=f6sn5xlr&raw=1'
  },
  {
    title: 'Ubuntu desktop',
    description: 'Copia funcional del escritorio de ubuntu 22.0.4, calendario, terminal, editor de código entre otros',
    links: {
      demo: 'https://github.com/',
      code: 'https://github.com/WanderleeDev/ubuntu-desktop'
    },
    technologies: ['angular', 'tailwindCss', 'typeScript', 'ngrx'],
    deploy: 'netlify',
    image: 'https://www.dropbox.com/scl/fi/3vx4bw7gmkdpy3lzj4qe4/ubuntu.webp?rlkey=jnsbbqkxs74nn3wlq0wporkvg&st=pd1f8swy&raw=1'
  },
  {
    title: 'Retro Blog',
    description: 'Desarrollado  con la librería CSS Nes, cuenta con pequeños blogs de contenido estático y uso las features Scroll Animations de Css',
    links: {
      demo: 'https://retro-blog-two.vercel.app/',
      code: 'https://github.com/WanderleeDev/Astro-retro-blog'
    },
    technologies: ['astro', 'css', 'typeScript'],
    deploy: 'vercel',
    image: 'https://www.dropbox.com/scl/fi/5469s60a6i7kkrh2snodt/retro-blog.webp?rlkey=y4fzo2u4d837l5ck6iraxqfyn&st=5z3k3hd8&raw=1'
  },
  {
    title: 'Text to Speech',
    description: 'Desarrollado utilizando la programación Orientada a objetos (POO), cuenta un manejador de errores en caso no ser compatible.',
    links: {
      demo: 'https://text-to-speech-3t1bdmkyk-wanderleedev.vercel.app/',
      code: 'https://github.com/WanderleeDev/text-to-speech/tree/main'
    },
    technologies: ['html', 'tailwindCss', 'typeScript'],
    deploy: 'vercel',
    image: 'https://www.dropbox.com/scl/fi/e9malpqyvbfg9l7vr2ziq/text-to-speech.webp?rlkey=ure8t2dlw11mw1tpgsy9lzlum&st=qn26ra5i&raw=1'
  }
]
