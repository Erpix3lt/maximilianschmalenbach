import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-756e41cf.js";
import { B as Blog } from "../../../chunks/blog-2e3316c4.js";
import "../../../chunks/blog-6dac7dba.js";
import "reading-time-estimator";
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
