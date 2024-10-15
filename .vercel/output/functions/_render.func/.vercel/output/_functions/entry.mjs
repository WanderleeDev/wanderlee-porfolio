import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B7LkMoR2.mjs';
import { manifest } from './manifest_CZeErePr.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/email/message.schema.astro.mjs');
const _page4 = () => import('./pages/api/email.astro.mjs');
const _page5 = () => import('./pages/api/projects.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/projects/_project_.astro.mjs');
const _page8 = () => import('./pages/projects.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/email/message.schema.ts", _page3],
    ["src/pages/api/email/index.ts", _page4],
    ["src/pages/api/projects/index.ts", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/projects/[project].astro", _page7],
    ["src/pages/projects/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ba3d2bca-7f56-49e0-86fd-4d4c8befb51e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
