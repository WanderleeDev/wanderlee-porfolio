import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro } from '../../chunks/astro/server_DQr9dNq9.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$project;
  const { project } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<div> <h1>${project}</h1> </div>`;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/pages/projects/[project].astro", void 0);

const $$file = "/home/wanderlee/projects/wanderlee-porfolio/src/pages/projects/[project].astro";
const $$url = "/projects/[project]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$project,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
