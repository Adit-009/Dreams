import { v as lazyRouteComponent, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as shopHead } from "./shop-head-ZEbKWtgT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order._id-DUCXF3_T.js
var $$splitComponentImporter = () => import("./order._id-4ZSi46Ns.mjs");
var Route = createFileRoute("/order/$id")({
	head: () => shopHead("Order Details", "Review your DREAMS order, payment status and delivery information."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
