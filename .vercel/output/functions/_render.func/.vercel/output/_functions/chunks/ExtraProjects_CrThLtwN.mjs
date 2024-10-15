import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro, h as renderSlot } from './astro/server_DQr9dNq9.mjs';
import 'kleur/colors';
import { a as $$Icon, b as $$Heading } from './SectionLayout_BjePTOPR.mjs';
/* empty css                         */
import { $ as $$Image } from './_astro_assets_BLWnfQ96.mjs';
import 'clsx';

const $$Astro$2 = createAstro();
const $$GroupLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GroupLinks;
  const { routes, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="gruopLink" data-astro-cid-hftbrfjt> ${Object.entries(routes).map((route) => renderTemplate`<a class="gruopLink-link"${addAttribute(route[1], "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`ver ${route[0]} ${title}`, "title")}${addAttribute(`ver ${route[0]} ${title}`, "aria-label")} data-astro-cid-hftbrfjt> ${renderComponent($$result, "Icon", $$Icon, { "class": "card-icon", "name": `extras/${route[0]}`, "width": 30, "height": 30, "aria-hidden": "true", "data-astro-cid-hftbrfjt": true })} </a>`)} <a class="gruopLink-link"${addAttribute(`/projects/${title.replaceAll(" ", "-").toLocaleLowerCase()}`, "href")} rel="noopener noreferrer"${addAttribute(`ver mas detalles de ${title}`, "title")}${addAttribute(`ver mas detalles de ${title}`, "aria-label")} data-astro-cid-hftbrfjt> ${renderComponent($$result, "Icon", $$Icon, { "class": "card-icon", "name": "extras/github", "width": 30, "height": 30, "aria-hidden": "true", "data-astro-cid-hftbrfjt": true })} </a> </div> `;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/components/astro/GroupLinks.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardProject = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardProject;
  const {
    project: { description, technologies, title, links, image }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card" data-astro-cid-2g5uz2nc> <div class="card-link" data-astro-cid-2g5uz2nc> ${renderComponent($$result, "Image", $$Image, { "class": "card-img", "src": image, "width": 396, "height": 252, "alt": title, "data-astro-cid-2g5uz2nc": true })} ${renderComponent($$result, "GroupLinks", $$GroupLinks, { "routes": links, "title": title, "data-astro-cid-2g5uz2nc": true })} </div> <div class="card-content" data-astro-cid-2g5uz2nc> <h3 class="card-title" data-astro-cid-2g5uz2nc>${title}</h3> ${technologies.length > 0 && renderTemplate`<figure class="card-icons" data-astro-cid-2g5uz2nc> ${technologies.map((tech) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "class": "card-icon", "name": `myTech/${tech}`, "width": 25, "height": 25, "title": tech, "data-astro-cid-2g5uz2nc": true })}`)} </figure>`} <p class="card-description" data-astro-cid-2g5uz2nc>${description}</p> </div> </article> `;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/components/astro/CardProject.astro", void 0);

const myProjects = [
  {
    title: "Ecomerce",
    description: "Ecommerce con sistema de autenticación, carrito de compras, notificación y uso de local Storage",
    links: {
      demo: "https://clior.vercel.app/",
      code: "https://github.com/WanderleeDev/clior-ecommerce"
    },
    technologies: ["angular", "sass", "typeScript", "flowbite"],
    deploy: "vercel",
    image: "https://www.dropbox.com/scl/fi/m6vzt3tx6nuuhvkxgiyw3/clior.webp?rlkey=1ph4dond6v40m47ys5y0wlb4a&st=f6sn5xlr&raw=1"
  },
  {
    title: "Ubuntu desktop",
    description: "Copia funcional del escritorio de ubuntu 22.0.4, calendario, terminal, editor de código entre otros",
    links: {
      demo: "https://github.com/",
      code: "https://github.com/WanderleeDev/ubuntu-desktop"
    },
    technologies: ["angular", "tailwindCss", "typeScript", "ngrx"],
    deploy: "netlify",
    image: "https://www.dropbox.com/scl/fi/3vx4bw7gmkdpy3lzj4qe4/ubuntu.webp?rlkey=jnsbbqkxs74nn3wlq0wporkvg&st=pd1f8swy&raw=1"
  },
  {
    title: "Retro Blog",
    description: "Desarrollado  con la librería CSS Nes, cuenta con pequeños blogs de contenido estático y uso las features Scroll Animations de Css",
    links: {
      demo: "https://retro-blog-two.vercel.app/",
      code: "https://github.com/WanderleeDev/Astro-retro-blog"
    },
    technologies: ["astro", "css", "typeScript"],
    deploy: "vercel",
    image: "https://www.dropbox.com/scl/fi/5469s60a6i7kkrh2snodt/retro-blog.webp?rlkey=y4fzo2u4d837l5ck6iraxqfyn&st=5z3k3hd8&raw=1"
  },
  {
    title: "Text to Speech",
    description: "Desarrollado utilizando la programación Orientada a objetos (POO), cuenta un manejador de errores en caso no ser compatible.",
    links: {
      demo: "https://text-to-speech-3t1bdmkyk-wanderleedev.vercel.app/",
      code: "https://github.com/WanderleeDev/text-to-speech/tree/main"
    },
    technologies: ["html", "tailwindCss", "typeScript"],
    deploy: "vercel",
    image: "https://www.dropbox.com/scl/fi/e9malpqyvbfg9l7vr2ziq/text-to-speech.webp?rlkey=ure8t2dlw11mw1tpgsy9lzlum&st=qn26ra5i&raw=1"
  }
];

const $$GalleryProjects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="gallery" data-astro-cid-mhvflin7> <div class="gallery-projects" data-astro-cid-mhvflin7> ${myProjects.map((project) => renderTemplate`${renderComponent($$result, "CardProject", $$CardProject, { "project": project, "data-astro-cid-mhvflin7": true })}`)} </div> </div> `;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/components/astro/GalleryProjects.astro", void 0);

const $$Astro = createAstro();
const $$ExtraCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExtraCard;
  const { background, title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="animatedCard fadeIn-scroll-ani u-min-shadow"${addAttribute({ background }, "style")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`ver proyectos extra de ${title}"`, "aria-label")}${addAttribute(`ir a proyects ${title} extra`, "title")} data-astro-cid-3ocoq4t3> <div class="animatedCard-content" data-astro-cid-3ocoq4t3> <h3 class="animatedCard-title" data-astro-cid-3ocoq4t3> <span class="animatedCard-signal" data-astro-cid-3ocoq4t3>&lt;</span>
Proyectos ${title} <span class="animatedCard-signal" data-astro-cid-3ocoq4t3>&gt;</span> </h3> <p data-astro-cid-3ocoq4t3>Algunos de mis proyectos realizados con ${title}.</p> </div> <div class="animatedCard-icon" data-astro-cid-3ocoq4t3> ${renderSlot($$result, $$slots["default"])} </div> </a> `;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/components/astro/ExtraCard.astro", void 0);

const $$LogoAngularAnimation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="angularLogo" data-astro-cid-pysk5tzg> <div class="angularLogo-ring angularLogo-outset" data-astro-cid-pysk5tzg></div> <div class="angularLogo-ring angularLogo-inset" data-astro-cid-pysk5tzg></div> ${renderComponent($$result, "Icon", $$Icon, { "class": "angularLogo-icon", "aria-hidden": "true", "name": "myTech/angular", "width": 120, "height": 120, "data-astro-cid-pysk5tzg": true })} </div> `;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/components/astro/LogoAngularAnimation.astro", void 0);

const $$ReactLogoAnimated = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="reactLogo" data-astro-cid-y2dydcby> <div class="reactLogo-animations" data-astro-cid-y2dydcby> <ul class="containerBlocks" data-astro-cid-y2dydcby> ${Array(10).fill("").map((_) => renderTemplate`<li class="containerBlocks-block" data-astro-cid-y2dydcby></li>`)} </ul> </div> ${renderComponent($$result, "Icon", $$Icon, { "class": "reactLogo-icon", "aria-hidden": "true", "name": "learning/react", "width": 120, "height": 120, "data-astro-cid-y2dydcby": true })} </div> `;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/components/astro/ReactLogoAnimated.astro", void 0);

const $$ExtraProjects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Angular",
      link: "https://entry-page-angular.vercel.app/",
      backgroundCard: "linear-gradient(to left, #3a6186, #89253e);"
    },
    {
      title: "React",
      link: "https://react-showcase-three.vercel.app/",
      backgroundCard: "linear-gradient(to right, #4b79a1, #283e51);"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<article class="projectsExtra" data-astro-cid-vmzvzb3j> ${renderComponent($$result, "Heading", $$Heading, { "headingName": "Proyectos extra", "typeHeading": "h2", "color": "#F94848", "data-astro-cid-vmzvzb3j": true })} ${projects.map(({ backgroundCard, link, title }) => renderTemplate`${renderComponent($$result, "ExtraCard", $$ExtraCard, { "title": title, "background": backgroundCard, "url": link, "data-astro-cid-vmzvzb3j": true }, { "default": ($$result2) => renderTemplate`${title === "Angular" && renderTemplate`${renderComponent($$result2, "LogoAngularAnimation", $$LogoAngularAnimation, { "data-astro-cid-vmzvzb3j": true })}`}${title === "React" && renderTemplate`${renderComponent($$result2, "ReactLogoAnimated", $$ReactLogoAnimated, { "data-astro-cid-vmzvzb3j": true })}`}` })}`)} </article> `;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/components/astro/ExtraProjects.astro", void 0);

export { $$GalleryProjects as $, $$CardProject as a, $$ExtraProjects as b, myProjects as m };
