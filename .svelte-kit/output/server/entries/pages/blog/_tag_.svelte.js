import { c as create_ssr_component, a as each, e as escape, v as validate_component } from "../../../chunks/index-756e41cf.js";
import { b as blogAsJSON, r as readingTime } from "../../../chunks/time-32f85e35.js";
import { T as TopLevelHeader, L as LowLevelHeader, F as Footer } from "../../../chunks/topLevelHeader-89f409fd.js";
var dynamicBlog_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".post-wrapper.svelte-13w78gm{padding-top:4em;padding-bottom:5em;width:80%}.info-wrapper.svelte-13w78gm{display:flex;flex-direction:row;align-items:center}h1.svelte-13w78gm{font-size:5em;margin:0;color:white}.description.svelte-13w78gm{color:lightgray;font-size:2em}.date.svelte-13w78gm{padding-right:1em;color:#FF9C9C;font-size:1.2em}.tag.svelte-13w78gm{padding-left:1.5em;color:rgb(170, 194, 219);font-size:.8em}.read-time.svelte-13w78gm{color:lightslategrey;font-size:.8em}body.light-mode h1.svelte-13w78gm{color:#000000}body.light-mode p.svelte-13w78gm{color:#2c4961}body.light-mode .date.svelte-13w78gm{color:#7b4949}body.light-mode .read-time.svelte-13w78gm{color:#538ab7}",
  map: null
};
const DynamicBlog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let blogAsJSONFiltered = [];
  let { tag: tag2 } = $$props;
  try {
    blogAsJSON.forEach((post) => {
      if (post.tag === tag2) {
        blogAsJSONFiltered.push(post);
      }
    });
    if (blogAsJSONFiltered.length == 0) {
      blogAsJSONFiltered[0] = {
        id: null,
        topic: "ERROR",
        description: "Error - Your searched post was not found",
        date: "",
        link: "",
        tag: "error - message"
      };
    }
  } catch (error) {
    console.log("an errror happened, trying to filter the blog posts", error);
  }
  if ($$props.tag === void 0 && $$bindings.tag && tag2 !== void 0)
    $$bindings.tag(tag2);
  $$result.css.add(css$1);
  return `<div class="${"post-wrapper svelte-13w78gm"}">${each(blogAsJSONFiltered, (post) => {
    return `<h1 class="${"svelte-13w78gm"}">${escape(post.topic)}</h1>
        <p class="${"date svelte-13w78gm"}">${escape(post.date)}</p>    
        <p class="${"description svelte-13w78gm"}">${escape(post.description)}</p>
        <div class="${"info-wrapper svelte-13w78gm"}"><p class="${"read-time svelte-13w78gm"}">${escape(readingTime(post.description))}</p>
            <a class="${"tag svelte-13w78gm"}" href="${"/blog/" + escape(post.tag)}">#${escape(post.tag)}</a>
        </div>`;
  })}
</div>`;
});
var _tag__svelte_svelte_type_style_lang = "";
const css = {
  code: ".content-wrapper.svelte-qyqyds{margin:0 auto;width:80%}body{font-family:'Montserrat', sans-serif;background-color:#0c141a}body.light-mode{background-color:#DFCECD}",
  map: null
};
let tag;
async function load({ params }) {
  tag = params.tag;
  console.log("tag" + tag);
  return { props: { tag } };
}
const U5Btagu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `




<div class="${"content-wrapper svelte-qyqyds"}">${validate_component(TopLevelHeader, "TopLevelHeader").$$render($$result, {}, {}, {})}
    ${validate_component(LowLevelHeader, "LowLevelHeader").$$render($$result, {}, {}, {})}
    ${validate_component(DynamicBlog, "DynamicBlog").$$render($$result, { tag }, {}, {})}
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export { U5Btagu5D as default, load };
