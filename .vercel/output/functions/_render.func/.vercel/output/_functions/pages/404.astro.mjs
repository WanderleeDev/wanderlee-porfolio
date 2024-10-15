import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderTransition, f as createTransitionScope, d as renderComponent, g as renderHead, h as renderSlot, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DQr9dNq9.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$ViewTransitions } from '../chunks/ViewTransitions_DYU1NdKY.mjs';
import { a as getImage } from '../chunks/_astro_assets_BLWnfQ96.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$NotFoundLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NotFoundLayout;
  return renderTemplate`<html lang="es"${addAttribute(renderTransition($$result, "irrgwuh4", "fade", ""), "data-astro-transition-scope")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="¡Bienvenido a mi portafolio! Soy un programador front-end especializado en Angular, TypeScript, SCSS y Tailwind CSS. Además, estoy explorando React con Astro Framework. Descubre mis proyectos y experiencias, y contáctame para colaboraciones o para saber más sobre mis servicios."><title>${`Porfolio | 404`}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"${addAttribute(createTransitionScope($$result, "mfmuhnrx"), "data-astro-transition-persist")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/layouts/NotFoundLayout.astro", "self");

const notFoundImage = new Proxy({"src":"/_astro/404.lsCP-qZO.webp","width":498,"height":498,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/wanderlee/projects/wanderlee-porfolio/src/assets/images/404.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { href } = Astro2.url;
  const optimizedImage404 = await getImage({
    src: notFoundImage,
    format: "webp"
  });
  return renderTemplate`${renderComponent($$result, "NotFoundLayout", $$NotFoundLayout, { "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="notFound" data-astro-cid-zetdm5md> <div class="notFound-WrapperImg"${addAttribute(`background-image: url(${optimizedImage404.src});`, "style")} data-astro-cid-zetdm5md></div> <h1 class="notFound-title" data-astro-cid-zetdm5md>NOT FOUND</h1> <p class="notFound-description" data-astro-cid-zetdm5md>
The route you want to access does not exist:
<span class="notFound-url" data-astro-cid-zetdm5md> ${href} </span> </p> <a aria-label="Back to home" title="Back to home" href="/" class="notFound-btn" type="button" title="to home" aria-label="to home" data-astro-cid-zetdm5md>
Back to Home
</a> </section> ` })} `;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/pages/404.astro", void 0);

const $$file = "/home/wanderlee/projects/wanderlee-porfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
