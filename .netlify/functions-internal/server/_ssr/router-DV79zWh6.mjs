import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as useRouter, _ as Outlet, b as createRootRouteWithContext, d as Scripts, f as HeadContent, g as createRouter, m as useRouterState, p as useLocation, v as lazyRouteComponent, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { o as Footer, p as ShopProvider, s as Header, t as BottomNavigation } from "./common-GP_Ppbtc.mjs";
import { t as shopHead } from "./shop-head-ZEbKWtgT.mjs";
import { t as Route$13 } from "./category._slug-DVFS7-k8.mjs";
import { t as Route$14 } from "./order._id-DUCXF3_T.mjs";
import { t as Route$15 } from "./product._slug-DUnuvy7P.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as gsapWithCSS } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DV79zWh6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CuUKYqmL.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
function SplashScreen() {
	const [gone, setGone] = (0, import_react.useState)(false);
	const root = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = root.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline().fromTo(".splash-glow", {
				scale: .4,
				opacity: 0
			}, {
				scale: 1,
				opacity: 1,
				duration: 1.2,
				ease: "power2.out"
			}).fromTo(".splash-logo-glow", {
				scale: .3,
				opacity: 0
			}, {
				scale: 1,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}, "-=0.8").fromTo(".splash-emblem", {
				y: 30,
				scale: .7,
				opacity: 0
			}, {
				y: 0,
				scale: 1,
				opacity: 1,
				duration: .9,
				ease: "back.out(1.7)"
			}, "-=0.6").fromTo(".splash-letter", {
				y: 20,
				opacity: 0,
				rotateX: -90
			}, {
				y: 0,
				opacity: 1,
				rotateX: 0,
				stagger: .06,
				duration: .5,
				ease: "back.out(2)"
			}, "-=0.3").fromTo(".splash-tagline", {
				y: 12,
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				duration: .5,
				ease: "power2.out"
			}, "-=0.15").fromTo(".splash-progress", {
				opacity: 0,
				scaleX: .5
			}, {
				opacity: 1,
				scaleX: 1,
				duration: .4,
				ease: "power2.out"
			}, "-=0.2").fromTo(".splash-progress-fill", { scaleX: 0 }, {
				scaleX: 1,
				duration: 2.2,
				ease: "power1.inOut"
			}, "<").to(".splash-center", {
				scale: .92,
				opacity: 0,
				y: -30,
				duration: .5,
				ease: "power3.in"
			}, "+=0.15").to(".splash-glow", {
				scale: 2.5,
				opacity: 0,
				duration: .6,
				ease: "power2.in"
			}, "<").to(el, {
				clipPath: "inset(0 0 100% 0)",
				duration: .9,
				ease: "power4.inOut"
			}, "-=0.25").add(() => {
				document.documentElement.classList.add("site-ready");
				const q = (s) => document.querySelectorAll(s);
				const markRevealed = (elements) => {
					elements.forEach((node) => node.setAttribute("data-revealed", "true"));
				};
				const et = gsapWithCSS.timeline({
					defaults: { ease: "power3.out" },
					onComplete: () => {
						const allAnimated = document.querySelectorAll(".site-header, .site-header .brand, .site-header .desktop-search, .site-header .header-action, .hero, .hero img, .hero-content > *, .hero-label, .category-shortcuts .shortcut, .home-content > .section-title, .product-card, .bottom-nav, .bottom-nav a, [data-revealed=\"true\"]");
						if (allAnimated.length) gsapWithCSS.set(allAnimated, { clearProps: "transform,opacity" });
					}
				});
				const header = q(".site-header");
				if (header.length) et.from(header, {
					y: -70,
					opacity: 0,
					duration: .65
				});
				const headerItems = q(".site-header .brand, .site-header .desktop-search, .site-header .header-action");
				if (headerItems.length) et.from(headerItems, {
					y: -16,
					opacity: 0,
					stagger: .05,
					duration: .45
				}, "-=0.4");
				const heroImg = q(".hero img");
				if (heroImg.length) {
					markRevealed(heroImg);
					et.from(heroImg, {
						scale: 1.07,
						opacity: 0,
						duration: .85,
						ease: "power2.out"
					}, "-=0.35");
				}
				const heroElements = q(".hero-content .eyebrow, .hero-content h1, .hero-content p, .hero-content .hero-button, .hero-label");
				if (heroElements.length) {
					markRevealed(heroElements);
					et.from(heroElements, {
						y: 30,
						scale: .95,
						opacity: 0,
						stagger: .07,
						duration: .65,
						ease: "back.out(1.5)"
					}, "-=0.6");
				}
				const shortcuts = q(".category-shortcuts .shortcut");
				if (shortcuts.length) {
					markRevealed(shortcuts);
					et.from(shortcuts, {
						y: 30,
						scale: .85,
						opacity: 0,
						stagger: .05,
						duration: .55,
						ease: "back.out(1.6)"
					}, "-=0.45");
				}
				const firstSectionTitle = q(".home-content > .section-title");
				if (firstSectionTitle.length) {
					markRevealed(firstSectionTitle);
					et.from(firstSectionTitle[0], {
						y: 24,
						opacity: 0,
						duration: .55
					}, "-=0.35");
				}
				const productCards = q(".home-content .product-grid .product-card");
				if (productCards.length) {
					const firstCards = Array.from(productCards).slice(0, 4);
					markRevealed(firstCards);
					et.from(firstCards, {
						y: 38,
						scale: .94,
						opacity: 0,
						stagger: .08,
						duration: .65,
						ease: "back.out(1.4)"
					}, "-=0.35");
				}
				const bottomNav = q(".bottom-nav");
				if (bottomNav.length) et.from(bottomNav, {
					y: 70,
					opacity: 0,
					duration: .55
				}, "-=0.55");
				const bottomNavItems = q(".bottom-nav a");
				if (bottomNavItems.length) et.from(bottomNavItems, {
					y: 16,
					opacity: 0,
					stagger: .04,
					duration: .4
				}, "-=0.4");
			}, "-=0.45").add(() => setGone(true));
		}, el);
		return () => ctx.revert();
	}, []);
	if (gone) return null;
	const letters = "DREAMS".split("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		className: "splash",
		role: "status",
		"aria-label": "Loading DREAMS",
		style: { clipPath: "inset(0 0 0 0)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "splash-pattern",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "splash-glow",
				"aria-hidden": "true",
				style: { opacity: 0 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "splash-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "splash-logo-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "splash-logo-glow",
							"aria-hidden": "true",
							style: { opacity: 0 }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							className: "splash-emblem",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							"aria-hidden": "true",
							style: { opacity: 0 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 17h12" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "splash-brand",
						children: letters.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "splash-letter",
							style: { opacity: 0 },
							children: l
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "splash-tagline",
						style: { opacity: 0 },
						children: "BAKING SUPPLIES & MORE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "splash-progress",
						"aria-hidden": "true",
						style: { opacity: 0 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "splash-progress-fill" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "splash-progress-shimmer" })]
					})
				]
			})
		]
	});
}
/**
* Universal Reveal Animation Manager
* Applies the signature DREAMS reveal animation (smooth vertical lift + scale spring + stagger)
* to all elements across the entire website on scroll and route changes.
*/
function ScrollReveal() {
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let observer;
		let cancelled = false;
		const setupObserver = () => {
			if (cancelled) return;
			if (!document.documentElement.classList.contains("site-ready")) return;
			if (observer) observer.disconnect();
			observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const el = entry.target;
						observer.unobserve(el);
						if (el.getAttribute("data-revealed") === "true") return;
						el.setAttribute("data-revealed", "true");
						animateElement(el);
					}
				});
			}, {
				rootMargin: "0px 0px -40px 0px",
				threshold: .08
			});
			document.querySelectorAll([
				".section-title:not([data-revealed=\"true\"])",
				".product-grid:not([data-revealed=\"true\"])",
				".category-grid:not([data-revealed=\"true\"])",
				".promo-band:not([data-revealed=\"true\"])",
				".trust-strip:not([data-revealed=\"true\"])",
				".instagram-section:not([data-revealed=\"true\"])",
				".page-title:not([data-revealed=\"true\"])",
				".detail-layout:not([data-revealed=\"true\"])",
				".filter-row:not([data-revealed=\"true\"])",
				".listing-meta:not([data-revealed=\"true\"])",
				".empty-state:not([data-revealed=\"true\"])",
				".footer-inner:not([data-revealed=\"true\"])",
				".welcome-copy:not([data-revealed=\"true\"])",
				".reveal-item:not([data-revealed=\"true\"])"
			].join(", ")).forEach((el) => {
				const rect = el.getBoundingClientRect();
				if (rect.top < window.innerHeight && rect.bottom > 0) {
					el.setAttribute("data-revealed", "true");
					animateElement(el);
				} else {
					gsapWithCSS.set(el, {
						opacity: 0,
						y: 30
					});
					observer.observe(el);
				}
			});
		};
		const animateElement = (el) => {
			if (el.classList.contains("product-grid")) {
				const cards = el.querySelectorAll(".product-card");
				if (cards.length) gsapWithCSS.fromTo(cards, {
					y: 38,
					scale: .94,
					opacity: 0
				}, {
					y: 0,
					scale: 1,
					opacity: 1,
					duration: .65,
					stagger: .07,
					ease: "back.out(1.4)",
					clearProps: "transform,opacity"
				});
				gsapWithCSS.set(el, {
					opacity: 1,
					y: 0,
					clearProps: "all"
				});
				return;
			}
			if (el.classList.contains("category-grid")) {
				const cards = el.querySelectorAll(".category-card");
				if (cards.length) gsapWithCSS.fromTo(cards, {
					y: 38,
					scale: .94,
					opacity: 0
				}, {
					y: 0,
					scale: 1,
					opacity: 1,
					duration: .65,
					stagger: .07,
					ease: "back.out(1.4)",
					clearProps: "transform,opacity"
				});
				gsapWithCSS.set(el, {
					opacity: 1,
					y: 0,
					clearProps: "all"
				});
				return;
			}
			if (el.classList.contains("trust-strip")) {
				const items = el.querySelectorAll(":scope > div");
				if (items.length) gsapWithCSS.fromTo(items, {
					y: 25,
					opacity: 0,
					scale: .96
				}, {
					y: 0,
					opacity: 1,
					scale: 1,
					duration: .6,
					stagger: .08,
					ease: "power3.out",
					clearProps: "transform,opacity"
				});
				gsapWithCSS.set(el, {
					opacity: 1,
					y: 0,
					clearProps: "all"
				});
				return;
			}
			if (el.classList.contains("instagram-section")) {
				const header = el.querySelector(".instagram-header");
				const cards = el.querySelectorAll(".instagram-card");
				const tl = gsapWithCSS.timeline({ defaults: { ease: "power3.out" } });
				if (header) tl.fromTo(header, {
					y: 25,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: .6,
					clearProps: "transform,opacity"
				});
				if (cards.length) tl.fromTo(cards, {
					y: 32,
					scale: .94,
					opacity: 0
				}, {
					y: 0,
					scale: 1,
					opacity: 1,
					duration: .65,
					stagger: .07,
					ease: "back.out(1.4)",
					clearProps: "transform,opacity"
				}, "-=0.3");
				gsapWithCSS.set(el, {
					opacity: 1,
					y: 0,
					clearProps: "all"
				});
				return;
			}
			if (el.classList.contains("promo-band")) {
				gsapWithCSS.fromTo(el, {
					y: 35,
					scale: .96,
					opacity: 0
				}, {
					y: 0,
					scale: 1,
					opacity: 1,
					duration: .7,
					ease: "back.out(1.3)",
					clearProps: "transform,opacity"
				});
				return;
			}
			if (el.classList.contains("detail-layout")) {
				const photo = el.querySelector(".detail-photo");
				const info = el.querySelector(".detail-info");
				if (photo && info) gsapWithCSS.fromTo([photo, info], {
					y: 35,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: .7,
					stagger: .1,
					ease: "power3.out",
					clearProps: "transform,opacity"
				});
				return;
			}
			if (el.classList.contains("footer-inner")) {
				const cols = el.querySelectorAll(":scope > div");
				if (cols.length) gsapWithCSS.fromTo(cols, {
					y: 30,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: .65,
					stagger: .08,
					ease: "power3.out",
					clearProps: "transform,opacity"
				});
				return;
			}
			gsapWithCSS.fromTo(el, {
				y: 26,
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				duration: .6,
				ease: "power3.out",
				clearProps: "transform,opacity"
			});
		};
		const checkInterval = setInterval(() => {
			if (document.documentElement.classList.contains("site-ready")) {
				clearInterval(checkInterval);
				setTimeout(setupObserver, 200);
			}
		}, 80);
		return () => {
			cancelled = true;
			clearInterval(checkInterval);
			if (observer) observer.disconnect();
		};
	}, [location.pathname]);
	return null;
}
/**
* PageTransition & Navigation Progress Bar
* Provides butter-smooth page entry animations, staggered section reveals,
* and an elegant ambient progress indicator on route changes.
*/
function PageTransition({ children }) {
	const location = useLocation();
	const routerState = useRouterState();
	const [navigating, setNavigating] = (0, import_react.useState)(false);
	const prevPathRef = (0, import_react.useRef)(location.pathname);
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (prevPathRef.current !== location.pathname) {
			prevPathRef.current = location.pathname;
			setNavigating(true);
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "instant"
			});
			const timer = setTimeout(() => {
				setNavigating(false);
			}, 420);
			const el = containerRef.current;
			if (el && document.documentElement.classList.contains("site-ready")) {
				const contentChild = el.querySelector(".content");
				if (contentChild) {
					const sections = Array.from(contentChild.children);
					if (sections.length) gsapWithCSS.fromTo(sections, {
						opacity: 0,
						y: 24
					}, {
						opacity: 1,
						y: 0,
						stagger: .06,
						duration: .5,
						ease: "power3.out",
						clearProps: "transform,opacity"
					});
				}
			}
			return () => clearTimeout(timer);
		}
	}, [location.pathname]);
	const isPending = routerState?.status === "pending" || navigating;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `route-progress-bar ${isPending ? "is-active" : ""}`,
		"aria-hidden": "true"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: "page-transition-wrap",
		children
	}, location.pathname)] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "DREAMS · Baking Supplies & More" },
			{
				name: "description",
				content: "Your little world of baking ingredients, decorations, packaging and tools."
			},
			{
				name: "author",
				content: "DREAMS"
			},
			{
				property: "og:title",
				content: "DREAMS · Baking Supplies & More"
			},
			{
				property: "og:description",
				content: "Everything you need to bake better."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplashScreen, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ShopProvider, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTransition, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNavigation, {})
			] })
		]
	});
}
var $$splitComponentImporter$11 = () => import("./routes-BAx81szL.mjs");
var Route$11 = createFileRoute("/")({
	head: () => shopHead("Baking Supplies & More", "Shop chocolate, baking ingredients, decorations and packaging for your next beautiful bake."),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./about-BukqY-oB.mjs");
var Route$10 = createFileRoute("/about")({
	head: () => shopHead("About DREAMS", "Baking supplies and more: ingredients, decorations, packaging and tools."),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./cart-QqA4rNjh.mjs");
var Route$9 = createFileRoute("/cart")({
	head: () => shopHead("My Cart", "Your DREAMS baking supplies, quantities and order summary."),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./categories-CGaWWZYe.mjs");
var Route$8 = createFileRoute("/categories")({
	head: () => shopHead("Shop by Category", "Explore chocolate, ingredients, decorations, candles, packaging and bakery supplies."),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./checkout-Db8HN1tV.mjs");
var Route$7 = createFileRoute("/checkout")({
	head: () => shopHead("Checkout", "Choose delivery and preview your baking supplies order with demo payments."),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-1WyD7YZg.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => shopHead("Contact DREAMS", "Find DREAMS on Instagram and get in touch about baking supplies."),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./orders-tn37moVr.mjs");
var Route$5 = createFileRoute("/orders")({
	head: () => shopHead("My Orders", "Browse your DREAMS orders and delivery statuses."),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./profile-OyjJJzkU.mjs");
var Route$4 = createFileRoute("/profile")({
	head: () => shopHead("Your Baking World", "Your DREAMS profile, favorite products, addresses and orders."),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./search-D6Vmafmn.mjs");
var Route$3 = createFileRoute("/search")({
	head: () => shopHead("Search Baking Supplies", "Find chocolate chips, cake boxes, cocoa powder and more at DREAMS."),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./track-order-SqnwtOhZ.mjs");
var Route$2 = createFileRoute("/track-order")({
	head: () => shopHead("Track Your Order", "Follow every step of your DREAMS baking supplies order."),
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	validateSearch: (search) => ({ id: typeof search["id"] === "string" ? search["id"] : "" })
});
var $$splitComponentImporter$1 = () => import("./welcome-wxqLbr0u.mjs");
var Route$1 = createFileRoute("/welcome")({
	head: () => shopHead("Welcome to your baking world", "Everything you need to bake better. Discover DREAMS baking essentials."),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./wishlist-DWgGtCRf.mjs");
var Route = createFileRoute("/wishlist")({
	head: () => shopHead("Your Wishlist", "Save your favorite baking essentials for your next creation."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$11.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AboutRoute: Route$10.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$12
	}),
	CartRoute: Route$9.update({
		id: "/cart",
		path: "/cart",
		getParentRoute: () => Route$12
	}),
	CategoriesRoute: Route$8.update({
		id: "/categories",
		path: "/categories",
		getParentRoute: () => Route$12
	}),
	CheckoutRoute: Route$7.update({
		id: "/checkout",
		path: "/checkout",
		getParentRoute: () => Route$12
	}),
	ContactRoute: Route$6.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$12
	}),
	OrdersRoute: Route$5.update({
		id: "/orders",
		path: "/orders",
		getParentRoute: () => Route$12
	}),
	ProfileRoute: Route$4.update({
		id: "/profile",
		path: "/profile",
		getParentRoute: () => Route$12
	}),
	SearchRoute: Route$3.update({
		id: "/search",
		path: "/search",
		getParentRoute: () => Route$12
	}),
	TrackOrderRoute: Route$2.update({
		id: "/track-order",
		path: "/track-order",
		getParentRoute: () => Route$12
	}),
	WelcomeRoute: Route$1.update({
		id: "/welcome",
		path: "/welcome",
		getParentRoute: () => Route$12
	}),
	WishlistRoute: Route.update({
		id: "/wishlist",
		path: "/wishlist",
		getParentRoute: () => Route$12
	}),
	CategorySlugRoute: Route$13.update({
		id: "/category/$slug",
		path: "/category/$slug",
		getParentRoute: () => Route$12
	}),
	OrderIdRoute: Route$14.update({
		id: "/order/$id",
		path: "/order/$id",
		getParentRoute: () => Route$12
	}),
	ProductSlugRoute: Route$15.update({
		id: "/product/$slug",
		path: "/product/$slug",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
