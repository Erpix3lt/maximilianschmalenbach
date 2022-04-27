import { c as create_ssr_component, a as each, e as escape } from "./index-756e41cf.js";
import { r as readingTime, b as blogAsJSON } from "./time-32f85e35.js";
var blog_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post.svelte-ugmxb5.svelte-ugmxb5{padding-top:2em;padding-bottom:2em}.post-border.svelte-ugmxb5.svelte-ugmxb5{padding:1em;background-color:rgba(0, 0, 0, 0.114);border-radius:10px}body.light-mode .post-border.svelte-ugmxb5.svelte-ugmxb5{background-color:rgba(255, 255, 255, 0.114)}.item-border.svelte-ugmxb5.svelte-ugmxb5{padding:1em}.post-wrapper.svelte-ugmxb5.svelte-ugmxb5{width:60%}.info-wrapper.svelte-ugmxb5.svelte-ugmxb5{display:flex;flex-direction:row}h1.svelte-ugmxb5.svelte-ugmxb5{margin:0;color:white}h1.svelte-ugmxb5.svelte-ugmxb5:hover{color:rgb(218, 218, 218)}.description.svelte-ugmxb5.svelte-ugmxb5{color:lightgray;font-size:1.2em}.date.svelte-ugmxb5.svelte-ugmxb5{padding-right:1em;color:#FF9C9C;font-size:.8em}.section-header.svelte-ugmxb5.svelte-ugmxb5{display:flex;flex-direction:row;align-items:center}.section-header.svelte-ugmxb5 p.svelte-ugmxb5{color:lightgray;padding-right:1em}hr.svelte-ugmxb5.svelte-ugmxb5{background-color:#2F5371;height:1px;border:0;width:100%}.tag.svelte-ugmxb5.svelte-ugmxb5{color:rgb(170, 194, 219);font-size:.8em;text-decoration:none}.read-time.svelte-ugmxb5.svelte-ugmxb5{color:lightslategrey;font-size:.8em}body.light-mode h1.svelte-ugmxb5.svelte-ugmxb5{color:#000000}body.light-mode h1.svelte-ugmxb5.svelte-ugmxb5:hover{color:#515151}body.light-mode hr.svelte-ugmxb5.svelte-ugmxb5{background-color:#b99b99}body.light-mode p.svelte-ugmxb5.svelte-ugmxb5{color:#2c4961}body.light-mode .date.svelte-ugmxb5.svelte-ugmxb5{color:#7b4949}body.light-mode .read-time.svelte-ugmxb5.svelte-ugmxb5{color:#538ab7}@media screen and (max-width: 992px){.post-wrapper.svelte-ugmxb5.svelte-ugmxb5{width:100%}.description.svelte-ugmxb5.svelte-ugmxb5{color:lightgray;font-size:.9em}.item-border.svelte-ugmxb5.svelte-ugmxb5{padding:.2em}.post-border.svelte-ugmxb5.svelte-ugmxb5{padding:.2em}h1.svelte-ugmxb5.svelte-ugmxb5{font-size:1.5em}.date.svelte-ugmxb5.svelte-ugmxb5{font-size:.7em}.read-time.svelte-ugmxb5.svelte-ugmxb5{font-size:.7em}.tag.svelte-ugmxb5.svelte-ugmxb5{font-size:.7em}}",
  map: null
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"post-wrapper svelte-ugmxb5"}"><div class="${"section-header svelte-ugmxb5"}"><p class="${"svelte-ugmxb5"}">BLOG</p>
            <hr class="${"svelte-ugmxb5"}"></div>
        ${each(blogAsJSON, (post) => {
    return `<div class="${"post svelte-ugmxb5"}"><div class="${"post-border svelte-ugmxb5"}"><div class="${"item-border svelte-ugmxb5"}"><h1 style="${"cursor: pointer;"}" class="${"svelte-ugmxb5"}">${escape(post.topic)}</h1>
            <a class="${"tag svelte-ugmxb5"}" href="${"/blog/" + escape(post.tag)}">#${escape(post.tag)}</a>
            <p class="${"description svelte-ugmxb5"}">${escape(post.description)}</p>
            <div class="${"info-wrapper svelte-ugmxb5"}"><p class="${"date svelte-ugmxb5"}">${escape(post.date)}</p>
                <p class="${"read-time svelte-ugmxb5"}">${escape(readingTime(post.description))}</p></div>
        </div></div>
        </div>`;
  })}
    </div>`;
});
export { Blog as B };
