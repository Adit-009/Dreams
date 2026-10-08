import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as CategoryPage } from "./catalog-NW6q7tO1.mjs";
import { t as Route } from "./category._slug-DVFS7-k8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-C8-HrwCJ.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { slug } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryPage, { slug });
}
//#endregion
export { Page as component };
