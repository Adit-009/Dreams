import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as ProductPage } from "./catalog-NW6q7tO1.mjs";
import { t as Route } from "./product._slug-DUnuvy7P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-DHXRDpuc.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { slug } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPage, { slug });
}
//#endregion
export { Page as component };
