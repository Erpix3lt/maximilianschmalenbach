import { c as create_ssr_component, e as escape, v as validate_component } from "./index-756e41cf.js";
import { b as blogAsJSON } from "./blog-6dac7dba.js";
var footer_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".content-wrapper.svelte-eouehi{display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex-wrap:wrap}hr.svelte-eouehi{background-color:#2F5371;height:1px;border:0}div.svelte-eouehi{color:darkgray;font-size:.9em}body.light-mode hr.svelte-eouehi{background-color:#b99b99}body.light-mode p.svelte-eouehi{color:#2c4961}.wave.svelte-eouehi{animation-name:svelte-eouehi-wave-animation;animation-duration:2.5s;animation-iteration-count:infinite;transform-origin:70% 70%;display:inline-block}@keyframes svelte-eouehi-wave-animation{0%{transform:rotate( 0.0deg) }10%{transform:rotate(14.0deg) }20%{transform:rotate(-8.0deg) }30%{transform:rotate(14.0deg) }40%{transform:rotate(-4.0deg) }50%{transform:rotate(10.0deg) }60%{transform:rotate( 0.0deg) }100%{transform:rotate( 0.0deg) }}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentYear = new Date().getFullYear();
  $$result.css.add(css$3);
  return `<hr class="${"svelte-eouehi"}">
<div class="${"content-wrapper svelte-eouehi"}"><div class="${"copyright-wrapper svelte-eouehi"}"><p class="${"svelte-eouehi"}">\xA9 ${escape(currentYear)} Maximilian Schmalenbach</p></div>
    <p class="${"wave svelte-eouehi"}">\u270C\u{1F3FC}</p>
</div>`;
});
var darkModeButton_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.switch.svelte-1aii1u8.svelte-1aii1u8{--secondary-container:#7b4949;--primary:#FF9C9C;font-size:17px;position:relative;display:inline-block;width:2.7em;height:1.4em}.switch.svelte-1aii1u8 input.svelte-1aii1u8{display:none;opacity:0;width:0;height:0}.slider.svelte-1aii1u8.svelte-1aii1u8{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#313033;transition:.2s;border-radius:30px}.slider.svelte-1aii1u8.svelte-1aii1u8:before{position:absolute;content:"";height:1em;width:1em;border-radius:20px;left:0.2em;bottom:0.2em;background-color:#aeaaae;transition:.4s}input.svelte-1aii1u8:checked+.slider.svelte-1aii1u8::before{background-color:var(--primary)}input.svelte-1aii1u8:checked+.slider.svelte-1aii1u8{background-color:var(--secondary-container)}input.svelte-1aii1u8:focus+.slider.svelte-1aii1u8{box-shadow:0 0 1px var(--secondary-container)}input.svelte-1aii1u8:checked+.slider.svelte-1aii1u8:before{transform:translateX(1.2em)}',
  map: null
};
const DarkModeButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<label class="${"switch svelte-1aii1u8"}"><input type="${"checkbox"}" class="${"svelte-1aii1u8"}">
    <span class="${"slider svelte-1aii1u8"}"></span>
</label>`;
});
var lowLevelHeader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".latest-tags-wrapper.svelte-1dmy6lh{display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.tag.svelte-1dmy6lh{color:rgb(170, 194, 219);font-size:.8em;padding-left:1em;text-decoration:none}.link-wrapper.svelte-1dmy6lh{display:flex;flex-direction:row;align-items:center}.content-wrapper.svelte-1dmy6lh{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.links.svelte-1dmy6lh{padding-top:1em;padding-right:3em;padding-bottom:1em;color:whitesmoke;text-decoration:none;font-size:.7em}hr.svelte-1dmy6lh{background-color:#2F5371;height:1px;border:0}body.light-mode hr.svelte-1dmy6lh{background-color:#b99b99}body.light-mode a.svelte-1dmy6lh{color:#1d3040}@media screen and (max-width: 992px){.links.svelte-1dmy6lh{padding-right:1em;font-size:.8em}.tag.svelte-1dmy6lh{font-size:.8em}}",
  map: null
};
const LowLevelHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<hr class="${"svelte-1dmy6lh"}">
    <div class="${"content-wrapper svelte-1dmy6lh"}"><div class="${"link-wrapper svelte-1dmy6lh"}"><a class="${"links svelte-1dmy6lh"}" href="${""}">ABOUT</a>
            <a class="${"links svelte-1dmy6lh"}" href="${""}">PROJECTS</a>
            <a class="${"links svelte-1dmy6lh"}" href="${"https://www.instagram.com/maximilianschmalenbach/"}">INSTAGRAM</a>
            <a class="${"links svelte-1dmy6lh"}" href="${"https://github.com/Erpix3lt"}">GITHUB</a></div>
        <div class="${"dark-mode-button-wrapper"}">${validate_component(DarkModeButton, "DarkModeButton").$$render($$result, {}, {}, {})}</div></div>
    <hr class="${"svelte-1dmy6lh"}">
    <div class="${"latest-tags-wrapper svelte-1dmy6lh"}"><a class="${"tag svelte-1dmy6lh"}" href="${"/blog/" + escape(blogAsJSON[0].tag)}">#${escape(blogAsJSON[0].tag)}</a>
        <a class="${"tag svelte-1dmy6lh"}" href="${"/blog/" + escape(blogAsJSON[1].tag)}">#${escape(blogAsJSON[1].tag)}</a>
        <a class="${"tag svelte-1dmy6lh"}" href="${"/blog/" + escape(blogAsJSON[2].tag)}">#${escape(blogAsJSON[2].tag)}</a>
    </div>`;
});
var topLevelHeader_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-kcuf91{padding-top:.8em;padding-bottom:.8em;color:white}a.svelte-kcuf91{text-decoration:none}body.light-mode h2.svelte-kcuf91{color:#1d3040}body.light-mode a.svelte-kcuf91{color:#7b4949}@media screen and (max-width: 992px){h2.svelte-kcuf91{font-size:1.2em}}",
  map: null
};
const TopLevelHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<a href="${"./"}" class="${"svelte-kcuf91"}"><h2 class="${"svelte-kcuf91"}">MaxSchmalenbach.co</h2></a>`;
});
export { Footer as F, LowLevelHeader as L, TopLevelHeader as T };
