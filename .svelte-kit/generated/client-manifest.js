export { matchers } from './client-matchers.js';

export const components = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/blog/[tag].svelte"),
	() => import("../../src/routes/blog/posts/[id].svelte"),
	() => import("../../src/routes/blog/projects.svelte"),
	() => import("../../src/routes/index.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"blog/projects": [[0, 4], [1]],
	"blog/posts/[id]": [[0, 3], [1]],
	"blog/[tag]": [[0, 2], [1]]
};