import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowRight, E as ChevronRight, T as CircleQuestionMark, _ as LogOut, g as MapPin, h as MessageCircle, k as Bookmark, l as Settings, p as Package, r as UserRound, t as X, v as Instagram, w as Clock, x as Heart, y as Info } from "../_libs/lucide-react.mjs";
import { S as useShop, _ as money, a as Empty, c as PageTitle, r as Button, x as products } from "./common-GP_Ppbtc.mjs";
import { t as baking_hero_default } from "./baking-hero-BwdoQ1hZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-ERDLD1Lv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrdersPage() {
	const { orders } = useShop();
	const [tab, setTab] = (0, import_react.useState)("All");
	const shown = orders.filter((o) => tab === "All" || o.status === tab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
				title: "My Orders",
				subtitle: "A little baking joy, past and present"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "filter-row",
				children: [
					"All",
					"Processing",
					"Shipped",
					"Delivered"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: tab === t ? "default" : "secondary",
					className: "filter-chip",
					onClick: () => setTab(t),
					children: t
				}, t))
			}),
			shown.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orders-grid",
				children: shown.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "order-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "order-card-top",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: ["#", order.id] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: order.date })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `status-badge ${order.status.toLowerCase()}`,
								children: order.status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "order-thumbs",
							children: order.items.slice(0, 4).map((item, i) => {
								const p = products.find((p) => p.id === item.id);
								return p && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.name,
									width: "60",
									height: "60"
								}, i);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "order-card-bottom",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								order.items.length,
								" items ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "ml-2",
									children: money(order.total)
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/order/$id",
								params: { id: order.id },
								children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 13 })]
							})]
						})
					]
				}, order.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
				title: "No orders here yet",
				description: "Your next creation is waiting in the shop."
			})
		]
	});
}
function ProfilePage() {
	const { setNotice } = useShop();
	const [modal, setModal] = (0, import_react.useState)(""), [address, setAddress] = (0, import_react.useState)(""), [saved, setSaved] = (0, import_react.useState)(false), [notifications, setNotifications] = (0, import_react.useState)(true), [signedOut, setSignedOut] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "content",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "profile-layout",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "profile-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "avatar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hello," }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: signedOut ? "Guest Baker" : "Customer" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your little baking world" })
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "profile-menu",
					children: [
						[
							[
								Package,
								"My Orders",
								"/orders"
							],
							[
								Heart,
								"Wishlist",
								"/wishlist"
							],
							[
								Bookmark,
								"Saved Items",
								"/wishlist"
							],
							[
								CircleQuestionMark,
								"Help & Support",
								"/contact"
							],
							[
								Info,
								"About Us",
								"/about"
							]
						].map(([Icon, label, to]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 }),
								label,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })
							]
						}, label)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							onClick: () => setModal("My Addresses"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 }),
								"My Addresses",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							onClick: () => setModal("Settings"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { size: 18 }),
								"Settings",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							onClick: () => {
								setSignedOut(!signedOut);
								setNotice(signedOut ? "Welcome back to your demo profile." : "You are now browsing as a guest.");
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 18 }),
								signedOut ? "Return to Demo Profile" : "Logout",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })
							]
						})
					]
				}),
				modal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "modal-backdrop",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "modal-box",
						role: "dialog",
						"aria-modal": "true",
						"aria-label": modal,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "modal-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: modal }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								onClick: () => setModal(""),
								"aria-label": "Close dialog",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
							})]
						}), modal === "My Addresses" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4 text-xs text-muted-foreground",
								children: saved ? "Your address has been saved for this visit." : "Add your delivery address."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "text-input",
								"aria-label": "Saved address",
								value: address,
								onChange: (e) => setAddress(e.target.value),
								placeholder: "House number, street, city and PIN code"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => {
									if (!address.trim()) {
										setNotice("Please enter your address.");
										return;
									}
									setSaved(true);
									setNotice("Address saved for this visit.");
								},
								children: "Save Address"
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "option-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: notifications,
									onChange: (e) => setNotifications(e.target.checked)
								}),
								"Order notifications ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Demo preference" })
							]
						})]
					})
				})
			]
		})
	});
}
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "content",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "info-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, { title: "About DREAMS" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "info-cover",
					src: baking_hero_default,
					alt: "Beautiful pink cake made with baking decorations",
					width: "1536",
					height: "1024"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "DREAMS" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "BAKING SUPPLIES & MORE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Everything you need to bake better. DREAMS is a place for baking ingredients, cake decorations, thoughtful packaging and bakery supplies — the little essentials that help bring your creations to life." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From chocolate chips and cocoa powder to candles, cake boxes and piping tools, explore supplies for your everyday bakes and special celebrations." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/categories",
						children: ["Explore Our Categories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})
			]
		})
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "content",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "info-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
				title: "Let’s talk baking",
				subtitle: "Contact DREAMS · Baking Supplies & More"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contact-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contact-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Instagram" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.instagram.com/d_r_e_a_m_s_5661/",
								target: "_blank",
								rel: "noreferrer",
								children: "@d_r_e_a_m_s_5661 ↗"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contact-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "WhatsApp" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Store WhatsApp number coming soon." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contact-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Visit our store" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Store address to be added." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contact-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Business Hours" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Opening hours to be confirmed." })
						]
					})
				]
			})]
		})
	});
}
//#endregion
export { ProfilePage as i, ContactPage as n, OrdersPage as r, AboutPage as t };
