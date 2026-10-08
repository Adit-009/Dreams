//#region node_modules/.nitro/vite/services/ssr/assets/shop-head-ZEbKWtgT.js
var shopHead = (title, description) => ({ meta: [
	{ title: `${title} · DREAMS` },
	{
		name: "description",
		content: description
	},
	{
		property: "og:title",
		content: `${title} · DREAMS`
	},
	{
		property: "og:description",
		content: description
	},
	{
		property: "og:type",
		content: "website"
	},
	{
		name: "twitter:card",
		content: "summary_large_image"
	}
] });
//#endregion
export { shopHead as t };
