import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-756e41cf.js";
import { B as Blog } from "../../../chunks/blog-67dc6d74.js";
import "../../../chunks/time-32f85e35.js";
var projects_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{font-family:'Courier New', Courier, monospace;background-color:#0c141a;color:white}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Blog, "Blog").$$render($$result, {}, {}, {})}`;
});
export { Projects as default };
