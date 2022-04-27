import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index-756e41cf.js";
import { T as TopLevelHeader, L as LowLevelHeader, F as Footer } from "../../chunks/topLevelHeader-89f409fd.js";
import { B as Blog } from "../../chunks/blog-67dc6d74.js";
import { b as blogAsJSON, r as readingTime } from "../../chunks/time-32f85e35.js";
var workingWith_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".content-wrapper.svelte-14tx834.svelte-14tx834{padding-top:1.5em}img.svelte-14tx834.svelte-14tx834{width:30px;height:auto;padding:1.5em;padding-left:0em}.content-wrapper.svelte-14tx834 div.svelte-14tx834{display:flex;flex-wrap:wrap;justify-content:flex-start}hr.svelte-14tx834.svelte-14tx834{background-color:#2F5371;height:1px;border:0;width:100%}body.light-mode hr.svelte-14tx834.svelte-14tx834{background-color:#b99b99}@media screen and (max-width: 992px){div.svelte-14tx834.svelte-14tx834{justify-content:space-evenly}}",
  map: null
};
const WorkingWith = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"content-wrapper svelte-14tx834"}"><hr class="${"svelte-14tx834"}">
    <div class="${"svelte-14tx834"}"><img src="${"./techstack/appium.svg"}" alt="${"appiumn"}" class="${"svelte-14tx834"}">
        <img src="${"./techstack/figma.svg"}" alt="${"figma"}" class="${"svelte-14tx834"}">
        <img src="${"./techstack/git-icon.svg"}" alt="${"git"}" class="${"svelte-14tx834"}">
        <img src="${"./techstack/java.svg"}" alt="${"java"}" class="${"svelte-14tx834"}">
        <img src="${"./techstack/javascript.svg"}" alt="${"js"}" class="${"svelte-14tx834"}">
        <img src="${"./techstack/nodejs-icon.svg"}" alt="${"node"}" class="${"svelte-14tx834"}">
        <img src="${"./techstack/python.svg"}" alt="${"python"}" class="${"svelte-14tx834"}">
        <img src="${"./techstack/raspberry-pi.svg"}" alt="${"raspberry"}" class="${"svelte-14tx834"}">
        <img src="${"./techstack/socket.svg"}" alt="${"socket"}" class="${"svelte-14tx834"}">
        <img src="${"./techstack/svelte-icon.svg"}" alt="${"svelte"}" class="${"svelte-14tx834"}">
        <img src="${"./techstack/threejs.svg"}" alt="${"threejs"}" class="${"svelte-14tx834"}">
        <img src="${"./techstack/spring-icon.svg"}" alt="${"spring-boot"}" class="${"svelte-14tx834"}">
        <img src="${"./techstack/tensorflow.svg"}" alt="${"tensorflow"}" class="${"svelte-14tx834"}"></div>
</div>`;
});
var about_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".about-wrapper.svelte-18job7q.svelte-18job7q{width:30%}h1.svelte-18job7q.svelte-18job7q{font-size:10em;line-height:0}mark.svelte-18job7q.svelte-18job7q{color:white;background-color:#1d304000}body.light-mode mark.svelte-18job7q.svelte-18job7q{color:black}mark.svelte-18job7q.svelte-18job7q:hover{color:black;background-color:#ffff00}a.svelte-18job7q.svelte-18job7q{color:#FF9C9C;text-decoration:none}.light-hightlighting.svelte-18job7q.svelte-18job7q{color:gray;text-decoration:none}.section-header.svelte-18job7q.svelte-18job7q{display:flex;flex-direction:row;align-items:center}.section-header.svelte-18job7q p.svelte-18job7q{color:lightgray;padding-right:1em}h3.svelte-18job7q.svelte-18job7q{color:white;padding-top:1em}p.svelte-18job7q.svelte-18job7q{font-size:.8;color:lightgray}hr.svelte-18job7q.svelte-18job7q{background-color:#2F5371;height:1px;border:0;width:100%}body.light-mode h3.svelte-18job7q.svelte-18job7q{color:#1d3040}body.light-mode hr.svelte-18job7q.svelte-18job7q{background-color:#b99b99}body.light-mode p.svelte-18job7q.svelte-18job7q{color:#2c4961}body.light-mode a.svelte-18job7q.svelte-18job7q{color:#7b4949}@media screen and (max-width: 992px){.about-wrapper.svelte-18job7q.svelte-18job7q{width:100%}p.svelte-18job7q.svelte-18job7q{font-size:1em}}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"about-wrapper svelte-18job7q"}"><div class="${"section-header svelte-18job7q"}"><p class="${"svelte-18job7q"}">ABOUT</p>
        <hr class="${"svelte-18job7q"}"></div>
    
    <h1 class="${"svelte-18job7q"}"><mark class="${"svelte-18job7q"}">HI.</mark></h1>
    <h3 class="${"svelte-18job7q"}">MaxSchmalenbach.co</h3>
    <p class="${"svelte-18job7q"}">Hi I am Max! <br>
        Currently studying at Th-Koeln, <a class="${"light-hightlighting svelte-18job7q"}" href="${"https://coco.study/"}">Code and Context</a> .
        Interested in design, photography, architecture.
    </p>
    <div class="${"social"}"><p class="${"svelte-18job7q"}">The best place to get a hold of me, is to shoot me a dm on
        <a href="${"https://www.instagram.com/maximilianschmalenbach/"}" class="${"svelte-18job7q"}">instagram</a></p></div>
    ${validate_component(WorkingWith, "WorkingWith").$$render($$result, {}, {}, {})}
</div>`;
});
var latestArticle_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".post-wrapper.svelte-1vsd3wn{padding-top:4em;padding-bottom:5em;width:80%}.info-wrapper.svelte-1vsd3wn{display:flex;flex-direction:row;align-items:center}h1.svelte-1vsd3wn{font-family:'PT MONO',monospace;font-size:6em;margin:0;color:white}.description.svelte-1vsd3wn{color:lightgray;font-size:2em}.date.svelte-1vsd3wn{padding-right:1em;color:#FF9C9C;font-size:1.2em}.tag.svelte-1vsd3wn{padding-left:1.5em;color:rgb(170, 194, 219);font-size:.8em;text-decoration:none}.read-time.svelte-1vsd3wn{color:lightslategrey;font-size:.8em}body.light-mode h1.svelte-1vsd3wn{color:#000000}body.light-mode p.svelte-1vsd3wn{color:#2c4961}body.light-mode .date.svelte-1vsd3wn{color:#7b4949}body.light-mode .read-time.svelte-1vsd3wn{color:#538ab7}@media screen and (max-width: 992px){h1.svelte-1vsd3wn{font-size:4em}.date.svelte-1vsd3wn{font-size:.8em}.read-time.svelte-1vsd3wn{font-size:.8em}.tag.svelte-1vsd3wn{font-size:.8em}.description.svelte-1vsd3wn{font-size:1.1em}.post-wrapper.svelte-1vsd3wn{width:100%}}",
  map: null
};
const LatestArticle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"post-wrapper svelte-1vsd3wn"}"><p class="${"date svelte-1vsd3wn"}">LATEST ${escape(blogAsJSON[0].date)}</p>
        <h1 class="${"svelte-1vsd3wn"}">${escape(blogAsJSON[0].topic)}</h1>
        <p class="${"description svelte-1vsd3wn"}">${escape(blogAsJSON[0].description)}</p>
        <div class="${"info-wrapper svelte-1vsd3wn"}"><p class="${"read-time svelte-1vsd3wn"}">${escape(readingTime(blogAsJSON[0].description))}</p>
            <a class="${"tag svelte-1vsd3wn"}" href="${"/blog/" + escape(blogAsJSON[0].tag)}">#${escape(blogAsJSON[0].tag)}</a></div>

</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info-wrapper.svelte-g5yhqo{justify-content:space-between;display:flex;flex-direction:row}.content-wrapper.svelte-g5yhqo{margin:0 auto;width:90%}body{font-family:'Montserrat', sans-serif;background-color:#0c141a}body.light-mode{background-color:#DFCECD}@media screen and (max-width: 992px){.info-wrapper.svelte-g5yhqo{flex-direction:column-reverse;align-items:flex-start}.content-wrapper.svelte-g5yhqo{width:95%}}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"content-wrapper svelte-g5yhqo"}">${validate_component(TopLevelHeader, "TopLevelHeader").$$render($$result, {}, {}, {})}
	${validate_component(LowLevelHeader, "LowLevelHeader").$$render($$result, {}, {}, {})}
	${validate_component(LatestArticle, "LatestArticle").$$render($$result, {}, {}, {})}
	<div class="${"info-wrapper svelte-g5yhqo"}">${validate_component(Blog, "Blog").$$render($$result, {}, {}, {})}
		${validate_component(About, "About").$$render($$result, {}, {}, {})}</div>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export { Routes as default };
