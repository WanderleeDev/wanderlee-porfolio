import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro, h as renderSlot } from '../chunks/astro/server_DQr9dNq9.mjs';
import 'kleur/colors';
import { b as $$Heading, l as learningToFuture, a as $$Icon, $ as $$SectionLayout } from '../chunks/SectionLayout_BjePTOPR.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BLWnfQ96.mjs';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ImagePopover = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ImagePopover;
  const { imageSrc, alt, id } = Astro2.props;
  const newID = `${crypto.randomUUID().slice(0, 5)}${id}`;
  return renderTemplate`${maybeRenderHead()}<label class="card"${addAttribute(`photo-${newID}`, "for")} data-astro-cid-nbobnjvg> <input hidden class="" type="button" value=""${addAttribute(`photo-${newID}`, "id")}${addAttribute(`popover-${newID}`, "popovertarget")} data-astro-cid-nbobnjvg> ${renderComponent($$result, "Image", $$Image, { "class": "card-image", "src": imageSrc, "alt": alt, "width": "300", "height": "200", "data-astro-cid-nbobnjvg": true })} <div class="position-center popover"${addAttribute(`popover-${newID}`, "id")} popover data-astro-cid-nbobnjvg> ${renderComponent($$result, "Image", $$Image, { "class": "popover-image", "src": imageSrc, "widths": [240, 540, 720], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px,`, "alt": alt, "width": "540", "height": "400", "data-astro-cid-nbobnjvg": true })} </div> </label> `;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/components/astro/ImagePopover.astro", void 0);

const $$Astro = createAstro();
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Accordion;
  const {
    dataAccordion: { description, images, title },
    name
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details class="accordion"${addAttribute(name, "name")} data-astro-cid-wp7yhrsz> <summary class="accordion-title" data-astro-cid-wp7yhrsz> ${renderComponent($$result, "Heading", $$Heading, { "headingName": title, "typeHeading": "h3", "data-astro-cid-wp7yhrsz": true })} </summary> <p class="accordion-description" data-astro-cid-wp7yhrsz>${description}</p> <div class="accordion-content" data-astro-cid-wp7yhrsz> ${renderSlot($$result, $$slots["content-extra"])} ${images.length > 0 && renderTemplate`<div class="accordion-grid" data-astro-cid-wp7yhrsz> ${images.map((img, i) => renderTemplate`${renderComponent($$result, "ImagePopover", $$ImagePopover, { "imageSrc": img, "alt": "", "id": i, "data-astro-cid-wp7yhrsz": true })}`)} </div>`} </div> </details> `;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/components/astro/Accordion.astro", void 0);

const videoUnWrapper = "/_astro/unwrapped.UG3RQFUR.mp4";

const useVideoControls = () => {
  const videoPlayer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const togglePlay = () => {
    if (!(videoPlayer.current instanceof HTMLVideoElement)) return;
    if (videoPlayer.current.paused) {
      videoPlayer.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        setIsPlaying(false);
        console.error("Error al reproducir el video:", error.message);
      });
    } else {
      videoPlayer.current.pause();
      setIsPlaying(false);
    }
  };
  const toggleMute = () => {
    if (!(videoPlayer.current instanceof HTMLVideoElement)) return;
    videoPlayer.current.muted = !videoPlayer.current.muted;
    setIsMuted((prev) => !prev);
  };
  const toggleFullScreen = () => {
    const video = videoPlayer.current;
    if (!(video instanceof HTMLVideoElement)) return;
    if (video.requestFullscreen !== void 0) {
      video.requestFullscreen().then().catch((e) => {
        console.log(e.message);
      });
    }
  };
  return {
    videoPlayer,
    isPlaying,
    togglePlay,
    isMuted,
    toggleMute,
    toggleFullScreen
  };
};

const VideoPlayer = () => {
  const { togglePlay, videoPlayer, isMuted, isPlaying, toggleMute, toggleFullScreen } = useVideoControls();
  return /* @__PURE__ */ jsxs("div", { className: "video-wrapper u-shadow-2", children: [
    /* @__PURE__ */ jsxs("video", { className: "video", preload: "auto", width: "100%", muted: true, ref: videoPlayer, children: [
      /* @__PURE__ */ jsx("source", { type: "video/mp4", src: videoUnWrapper }),
      "Your browser does not support the video tag."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "video-controls", children: [
      /* @__PURE__ */ jsx("button", { "aria-label": "iniciar o detener video", onClick: togglePlay, className: `video-btn ${isPlaying ? "play" : "pause"}`, type: "button" }),
      /* @__PURE__ */ jsx("button", { "aria-label": "activar o desactivar sonido", onClick: toggleMute, className: `video-btn ${!isMuted ? "muted" : "sound"}`, type: "button" }),
      /* @__PURE__ */ jsx("button", { "aria-label": "activar o desactivar fullscreen", onClick: toggleFullScreen, className: "video-btn fullScreen", type: "button" })
    ] })
  ] });
};

const $$ExtraContent = createComponent(($$result, $$props, $$slots) => {
  const expectations = [
    "Asegurar mi primer empleo en la industria tecnol\xF3gica.",
    "Aprender, comprender y luego transmitir ese conocimiento.",
    "Repasar siempre los conocimientos base es fundamental para comprender los mas avanzados.",
    "Mantenerme actualizado con las \xFAltimas novedades del mundo Tech.",
    "Fomentar un buen ambiente laboral y trabajo en equipo.",
    "Estar siempre dispuesto a aceptar nuevos retos."
  ];
  return renderTemplate`${maybeRenderHead()}<div class="contentExtra" data-astro-cid-dvqeihtc> <ul class="expectations" data-astro-cid-dvqeihtc> ${expectations.map((item) => renderTemplate`<li class="expectations-item" data-astro-cid-dvqeihtc>${item}</li>`)} </ul> <figure class="technologies" data-astro-cid-dvqeihtc> <figcaption class="technologies-title" data-astro-cid-dvqeihtc>
Tecnologias que me gustria aprender a futuro
</figcaption> <div class="technologies-icons" data-astro-cid-dvqeihtc> ${learningToFuture.map((technology) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "style": { color: technology.color }, "class": "technologies-icon", "name": `technologies/${technology.name}`, "width": 32, "height": 32, "data-astro-cid-dvqeihtc": true })}`)} </div> </figure> </div> `;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/components/astro/ExtraContent.astro", void 0);

const studies = [
  {
    title: "Estudios",
    description: "Mis estudios realizados en programación",
    images: ["https://www.dropbox.com/scl/fi/4m35mktvnb1voch8aw6wr/Certificado-Curso-de-signals-en-Angular.webp?rlkey=u8w6jddjlr9sibkup0kwy45gs&raw=1", "https://www.dropbox.com/scl/fi/4m35mktvnb1voch8aw6wr/Certificado-Curso-de-signals-en-Angular.webp?rlkey=u8w6jddjlr9sibkup0kwy45gs&raw=1"],
    typeContent: "studies"
  },
  {
    title: "Capacitaciones",
    description: "Mis capacitaciones mas recientes, mantenerse actualizado es importante pero nunca se debe olvidar las bases.",
    images: ["https://www.dropbox.com/scl/fi/4m35mktvnb1voch8aw6wr/Certificado-Curso-de-signals-en-Angular.webp?rlkey=u8w6jddjlr9sibkup0kwy45gs&raw=1", "https://www.dropbox.com/scl/fi/4m35mktvnb1voch8aw6wr/Certificado-Curso-de-signals-en-Angular.webp?rlkey=u8w6jddjlr9sibkup0kwy45gs&raw=1", "https://www.dropbox.com/scl/fi/4m35mktvnb1voch8aw6wr/Certificado-Curso-de-signals-en-Angular.webp?rlkey=u8w6jddjlr9sibkup0kwy45gs&raw=1"],
    typeContent: "training"
  },
  {
    title: "Expectativas",
    description: "",
    typeContent: "expectations",
    images: []
  },
  {
    title: "extra",
    description: "Resumen de mi primer año aprendiendo programación. Generado por #GitHubUnwrapped que brinda un video personalizado de mi actividad en GitHub 2023.",
    typeContent: "extra",
    images: []
  }
];

const $$About = createComponent(($$result, $$props, $$slots) => {
  const aboutDescription = "Soy un desarrollador frontend orientado en la creaci\xF3n de p\xE1ginas web responsive. Mi objetivo es crear interfaces intuitivas y funcionales para mejorar la experiencia del usuario en cualquier dispositivo";
  return renderTemplate`${renderComponent($$result, "SectionLayout", $$SectionLayout, { "title": "Sobre mi \u{1F468}\u200D\u{1F4BB}", "headerPage": "Sobre mi", "color": "#ee6307", "sectionDescription": aboutDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${studies.map((study) => renderTemplate`${renderComponent($$result2, "Accordion", $$Accordion, { "dataAccordion": study, "name": "data" }, { "content-extra": ($$result3) => renderTemplate`${study.typeContent === "extra" && renderTemplate`${renderComponent($$result3, "VideoPlayer", VideoPlayer, { "client:visible": true, "slot": "content-extra", "client:component-hydration": "visible", "client:component-path": "/home/wanderlee/projects/wanderlee-porfolio/src/components/react/components/VideoPlayer", "client:component-export": "default" })}`}${study.typeContent === "expectations" && renderTemplate`${renderComponent($$result3, "ExtraContent", $$ExtraContent, { "slot": "content-extra" })}`}` })}`)} </div> ` })}`;
}, "/home/wanderlee/projects/wanderlee-porfolio/src/pages/about.astro", void 0);

const $$file = "/home/wanderlee/projects/wanderlee-porfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
