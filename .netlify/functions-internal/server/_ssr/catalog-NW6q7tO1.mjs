import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { p as useLocation, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowRight, o as Star, s as ShoppingCart, v as Instagram, x as Heart } from "../_libs/lucide-react.mjs";
import { S as useShop, _ as money, a as Empty, b as productService, c as PageTitle, d as SearchBar, f as SectionTitle, g as categories, i as CategoryCard, l as ProductGrid, m as TrustStrip, n as Brand, r as Button, u as Quantity, x as products, y as priceForSize } from "./common-GP_Ppbtc.mjs";
import { t as baking_hero_default } from "./baking-hero-BwdoQ1hZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-NW6q7tO1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "content home-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mobile-search",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hero",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: baking_hero_default,
						alt: "Pink strawberry cake with butterfly decorations and chocolate baking supplies",
						width: "1536",
						height: "1024"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-content",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "A LITTLE MAGIC STARTS HERE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
								"Bake Something",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Beautiful." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Ingredients · Decorations",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "mobile-only" }),
								" · Packaging · And More"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "hero-button",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/categories",
									children: ["Shop Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hero-label",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 12 }), " For the love of baking"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "category-shortcuts",
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "shortcut",
					to: "/category/$slug",
					params: { slug: c.slug },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.image,
						alt: "",
						width: "200",
						height: "160"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.name })]
				}, c.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				title: "Best Sellers",
				eyebrow: "THE ONES YOU LOVE",
				to: "/categories"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: products.slice(0, 4) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "promo-band",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: categories[4].image,
						alt: "Pink cake packaging boxes",
						loading: "lazy",
						width: "400",
						height: "400"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "THE PERFECT FINISHING TOUCH"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Beautiful bakes. Beautifully boxed." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Give your creations the packaging they deserve." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/category/$slug",
						params: { slug: "packaging" },
						children: ["Shop Packaging ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				title: "A little bit of everything",
				eyebrow: "EXPLORE YOUR BAKING WORLD",
				to: "/categories",
				label: "All Categories"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "category-grid",
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, { category: c }, c.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "instagram-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "instagram-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "instagram-title-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 13 }), " BAKE · CREATE · SHARE"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Made with a little DREAMS" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Tag ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "@d_r_e_a_m_s_5661" }),
								" in your sweet creations to be featured in our community gallery."
							] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://www.instagram.com/d_r_e_a_m_s_5661/",
						target: "_blank",
						rel: "noreferrer",
						className: "instagram-btn",
						"aria-label": "Follow @d_r_e_a_m_s_5661 on Instagram",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "instagram-btn-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 17 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Follow ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "@d_r_e_a_m_s_5661" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 15,
								className: "instagram-btn-arrow"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "instagram-grid",
					children: [
						{
							src: baking_hero_default,
							label: "Strawberry celebration cake"
						},
						{
							src: categories[2].image,
							label: "Butterfly cake decorations"
						},
						{
							src: categories[3].image,
							label: "Pastel birthday candles"
						},
						{
							src: categories[5].image,
							label: "Baking and piping supplies"
						}
					].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://www.instagram.com/d_r_e_a_m_s_5661/",
						target: "_blank",
						rel: "noreferrer",
						className: "instagram-card",
						"aria-label": `View ${item.label} on Instagram`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.src,
							alt: item.label,
							loading: "lazy",
							width: "400",
							height: "400"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "instagram-overlay",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "instagram-overlay-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 20 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "instagram-overlay-text",
									children: item.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "instagram-overlay-view",
									children: "View on Instagram ↗"
								})
							]
						})]
					}, item.src))
				})]
			})
		]
	});
}
function CategoriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "content",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			title: "Categories",
			subtitle: "Everything for your next beautiful bake"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "category-grid",
			children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, { category: c }, c.slug))
		})]
	});
}
function CategoryPage({ slug }) {
	const category = categories.find((c) => c.slug === slug);
	const [filter, setFilter] = (0, import_react.useState)("All"), [sort, setSort] = (0, import_react.useState)("featured");
	if (!category) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "content",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
			title: "Category not found",
			description: "Find your baking essentials in our shop."
		})
	});
	const all = products.filter((p) => p.category === slug);
	const chips = ["All", ...new Set(all.map((p) => p.type))];
	let shown = all.filter((p) => filter === "All" || filter === p.type);
	if (sort === "low") shown = [...shown].sort((a, b) => a.price - b.price);
	if (sort === "high") shown = [...shown].sort((a, b) => b.price - a.price);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
				title: category.name,
				subtitle: "A little inspiration for your next creation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "filter-row",
				children: chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "filter-chip",
					variant: filter === chip ? "default" : "secondary",
					onClick: () => setFilter(chip),
					children: chip
				}, chip))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "listing-meta",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [shown.length, " Products"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Sort ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Sort products",
					value: sort,
					onChange: (e) => setSort(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "featured",
							children: "Featured"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "low",
							children: "Price: Low to High"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "high",
							children: "Price: High to Low"
						})
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: shown })
		]
	});
}
function ProductPage({ slug }) {
	const product = productService.get(slug);
	const [size, setSize] = (0, import_react.useState)(product?.size), [qty, setQty] = (0, import_react.useState)(1);
	const { add, toggle, wishlist } = useShop();
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "content",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
			title: "Product not found",
			description: "There are more lovely supplies waiting for you."
		})
	});
	const price = priceForSize(product, size);
	const sizes = product.id === "cocoa-powder" ? [
		"50 g",
		"100 g",
		"200 g"
	] : [product.size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, { title: "A little baking essential" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "detail-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "detail-photo",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						width: "700",
						height: "700"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						className: `wishlist-button ${wishlist.includes(product.id) ? "saved" : ""}`,
						onClick: () => toggle(product.id),
						"aria-label": "Save product to wishlist",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "detail-info",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "DREAMS BAKING ESSENTIALS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: product.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [size, " · Carefully selected · Perfect for baking"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "price-row detail-price",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(price) }),
								product.original && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("del", { children: money(product.original) }),
								product.original && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "discount",
									children: [Math.round((1 - product.price / product.original) * 100), "% OFF"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "availability",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { size: 13 }),
									" 4.8 ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "(120 demo reviews)"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "stock",
								children: "● In Stock"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "field-label",
							children: "Select Size"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-options",
							children: sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: size === s ? "selected" : "outline",
								className: "size-option",
								onClick: () => setSize(s),
								children: [s, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: money(priceForSize(product, s)) })]
							}, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "field-label",
							children: "Quantity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quantity, {
							value: qty,
							onMinus: () => setQty((q) => Math.max(1, q - 1)),
							onPlus: () => setQty((q) => q + 1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "detail-add",
							onClick: () => add(product, qty, size),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {}),
								" Add to Cart · ",
								money(price * qty)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "accordions",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
									open: true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: "Product Description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.id === "cocoa-powder" ? "Rich, finely milled cocoa powder for chocolate cakes, brownies, cookies and delicious warm drinks. A little chocolate magic for every bake." : `${product.name} brings the finishing touch to your baking collection. Selected for everyday creations and special celebrations alike.` })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: "Ingredients" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.id === "cocoa-powder" ? "Cocoa powder. Refer to the actual product label for verified ingredients and allergen information." : "Refer to the product packaging for materials, ingredients and allergen details." })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: "Nutrition Information" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nutritional values will be available from the product label. This demo does not provide verified nutritional information." })] })
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "related",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "You might also love" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: products.filter((p) => p.id !== slug).slice(0, 4) })]
			})
		]
	});
}
function SearchPage() {
	const location = useLocation();
	const initial = new URLSearchParams(location.searchStr).get("q") || "";
	const [query, setQuery] = (0, import_react.useState)(initial);
	const results = productService.search(query);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, { title: "Find your baking essentials" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "search-bar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					"aria-label": "Search the shop",
					placeholder: "Try chocolate chips, cake boxes...",
					value: query,
					onChange: (e) => setQuery(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "search-suggestions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: query ? "Suggested searches" : "Popular searches" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "filter-row",
					children: [
						"cake box",
						"chocolate chips",
						"cocoa powder",
						"candles",
						"cake"
					].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						className: "filter-chip",
						onClick: () => setQuery(q),
						children: q
					}, q))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: query ? `${results.length} results for “${query}”` : "Discover something lovely" }),
			results.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: results }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
				title: "No matches just yet",
				description: "Try cocoa, candles or cake boxes."
			})
		]
	});
}
function WishlistPage() {
	const { wishlist } = useShop();
	const items = products.filter((p) => wishlist.includes(p.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "content",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			title: "Your Wishlist",
			subtitle: "A few things for your next bake"
		}), items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
			title: "A little room for your favorites",
			description: "Save the supplies you love with the heart on each product."
		})]
	});
}
function WelcomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "content",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "welcome",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: baking_hero_default,
				alt: "Pink cake with strawberry and butterfly decorations",
				width: "1536",
				height: "1024"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "welcome-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						"Everything You Need",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"to Bake Better"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							children: ["Get Started ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				]
			})]
		})
	});
}
//#endregion
export { SearchPage as a, ProductPage as i, CategoryPage as n, WelcomePage as o, HomePage as r, WishlistPage as s, CategoriesPage as t };
