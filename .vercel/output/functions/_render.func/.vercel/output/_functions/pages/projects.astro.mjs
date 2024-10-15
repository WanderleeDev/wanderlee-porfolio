import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_DQr9dNq9.mjs';
import 'kleur/colors';
import { $ as $$SectionLayout } from '../chunks/SectionLayout_BjePTOPR.mjs';
import { $ as $$GalleryProjects, m as myProjects, a as $$CardProject, b as $$ExtraProjects } from '../chunks/ExtraProjects_CrThLtwN.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const proyectDescription = "Mi selecci\xF3n personal de proyectos frontend, donde destaco ejemplos que representan mi enfoque en el desarrollo web orientado al usuario y a la calidad.";
  return renderTemplate`${renderComponent($$result, "SectionLayout", $$SectionLayout, { "headerPage": "Projectos \u{1F680}", "title": "Projects \u{1F680}", "sectionDescription": proyectDescription, "color": "#f94848" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryProjects", $$GalleryProjects, {}, { "default": ($$result3) => renderTemplate`|
${myProjects.map((project) => renderTemplate`${renderComponent($$result3, "CardProject", $$CardProject, { "project": project })}`)}` })} ${renderComponent($$result2, "ExtraProjects", $$ExtraProjects, {})} ` })}`;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/pages/projects/index.astro", void 0);

const $$file = "/home/wanderlee/projects/wanderlee-porfolio/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
