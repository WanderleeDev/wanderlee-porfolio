import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_DQr9dNq9.mjs';
import 'kleur/colors';
import { $ as $$SectionLayout } from '../chunks/SectionLayout_BjePTOPR.mjs';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="form" class="form-container" data-astro-cid-vwqnme5u> <form class="form-content" autocomplete="off" data-astro-cid-vwqnme5u> <fieldset class="form-fieldset" data-astro-cid-vwqnme5u> <legend class="form-legend" data-astro-cid-vwqnme5u>Para WanderleeDev : </legend> <label class="form-label" for="author" data-astro-cid-vwqnme5u>Tu nombre (opcional)</label> <input class="form-input" type="text" id="author" name="author" data-astro-cid-vwqnme5u> <label class="form-label mark" for="message" data-astro-cid-vwqnme5u>Mensaje y contacto</label> <textarea name="message" id="message" class="form-input" data-astro-cid-vwqnme5u></textarea> <button class="form-button" type="submit" data-astro-cid-vwqnme5u>Enviar mensaje</button> </fieldset> </form> </div>  `;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/components/astro/Form.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const contactDescription = "Pongamonos en comunicaci\xF3n para de desarrollar un proyecto en conjunto y compartir conocimientos. Estare a la espera de su contacto.";
  return renderTemplate`${renderComponent($$result, "SectionLayout", $$SectionLayout, { "title": "contacme \u{1F6F0}\uFE0F", "headerPage": "Contact", "color": "brown", "sectionDescription": contactDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Form", $$Form, {})} ` })}`;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/pages/contact.astro", void 0);

const $$file = "/home/wanderlee/projects/wanderlee-porfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
