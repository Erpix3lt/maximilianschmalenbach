import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index-756e41cf.js";
import { r as readingTime, b as blogAsJSON } from "../../../../chunks/time-32f85e35.js";
import { T as TopLevelHeader, L as LowLevelHeader, F as Footer } from "../../../../chunks/topLevelHeader-89f409fd.js";
var post_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".post-wrapper.svelte-11i0ivv{padding-top:4em;padding-bottom:5em;width:80%}.info-wrapper.svelte-11i0ivv{display:flex;flex-direction:row;align-items:center}h1.svelte-11i0ivv{font-size:5em;margin:0;color:white}.description.svelte-11i0ivv{color:lightgray;font-size:2em}.date.svelte-11i0ivv{padding-right:1em;color:#FF9C9C;font-size:1.2em}.tag.svelte-11i0ivv{padding-left:1.5em;color:rgb(170, 194, 219);font-size:.8em;text-decoration:none}.read-time.svelte-11i0ivv{color:lightslategrey;font-size:.8em}body.light-mode h1.svelte-11i0ivv{color:#000000}body.light-mode p.svelte-11i0ivv{color:#2c4961}body.light-mode .date.svelte-11i0ivv{color:#7b4949}body.light-mode .read-time.svelte-11i0ivv{color:#538ab7}",
  map: null
};
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$1);
  return `<div class="${"post-wrapper svelte-11i0ivv"}"><p class="${"date svelte-11i0ivv"}">LATEST ${escape(post.date)}</p>
    <h1 class="${"svelte-11i0ivv"}">${escape(post.topic)}</h1>
    <p class="${"description svelte-11i0ivv"}">${escape(post.description)}</p>
    <div class="${"info-wrapper svelte-11i0ivv"}"><p class="${"read-time svelte-11i0ivv"}">${escape(readingTime(post.description))}</p>
        <a class="${"tag svelte-11i0ivv"}" href="${"/blog/" + escape(post.tag)}">#${escape(post.tag)}</a></div>

</div>`;
});
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: ".content-wrapper.svelte-wpd1k5{margin:0 auto;width:80%}body{font-family:'Montserrat', sans-serif;background-color:#0c141a}body.light-mode{background-color:#DFCECD}",
  map: null
};
let entryById;
async function load({ params }) {
  let id = params.id;
  console.log("id" + id);
  const post = blogAsJSON;
  post.forEach((entry) => {
    if (entry.id == parseInt(id)) {
      entryById = entry;
    }
  });
  if (entryById == null) {
    entryById = {
      id: null,
      topic: "ERROR",
      description: "Error - Your searched post was not found",
      date: "",
      link: "",
      tag: "error - message"
    };
  }
  return { props: { post } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `






${$$result.head += `${$$result.title = `<title>POST - ${escape(entryById.topic)}</title>`, ""}`, ""}

<div class="${"content-wrapper svelte-wpd1k5"}">${validate_component(TopLevelHeader, "TopLevelHeader").$$render($$result, {}, {}, {})}
    ${validate_component(LowLevelHeader, "LowLevelHeader").$$render($$result, {}, {}, {})}
    ${validate_component(Post, "Post").$$render($$result, { post: entryById }, {}, {})}
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export { U5Bidu5D as default, load };
