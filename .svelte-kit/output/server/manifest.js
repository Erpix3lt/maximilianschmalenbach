export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","profile.png","profilePicture.png","robots.txt","svelte-welcome.png","svelte-welcome.webp","techstack/appium.svg","techstack/figma.svg","techstack/git-icon.svg","techstack/java.svg","techstack/javascript.svg","techstack/nodejs-icon.svg","techstack/python.svg","techstack/raspberry-pi.svg","techstack/socket.svg","techstack/spring-icon.svg","techstack/svelte-icon.svg","techstack/tensorflow.svg","techstack/threejs.svg"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-bfe8ecf7.js","js":["start-bfe8ecf7.js","chunks/index-06cb3e88.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/projects",
				pattern: /^\/blog\/projects\/?$/,
				names: [],
				types: [],
				path: "/blog/projects",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/posts/[id]",
				pattern: /^\/blog\/posts\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/[tag]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				names: ["tag"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
