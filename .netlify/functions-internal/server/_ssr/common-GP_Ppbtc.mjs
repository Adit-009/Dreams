import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { p as useLocation, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowRight, D as ChefHat, S as Grid2x2, b as House, c as ShieldCheck, f as Plus, g as MapPin, i as Truck, j as ArrowLeft, m as Minus, p as Package, r as UserRound, s as ShoppingCart, u as Search, v as Instagram, x as Heart } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/common-GP_Ppbtc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var chocolate_default = "/assets/chocolate-BOYZ_tGI.jpg";
var ingredients_default = "/assets/ingredients-NaODXe3I.jpg";
var decoration_default = "/assets/decoration-Cxg50Klq.jpg";
var candles_default = "/assets/candles-DAadlSnU.jpg";
var packaging_default = "/assets/packaging-Bh5UeMo3.jpg";
var tools_default = "/assets/tools-CGbTJMQc.jpg";
var cocoa_default = "/assets/cocoa-vVxq_c6Q.jpg";
var categories = [
	{
		slug: "chocolate-cocoa",
		name: "Chocolate & Cocoa",
		image: chocolate_default
	},
	{
		slug: "baking-ingredients",
		name: "Baking Ingredients",
		image: ingredients_default
	},
	{
		slug: "cake-decoration",
		name: "Cake Decoration",
		image: decoration_default
	},
	{
		slug: "candles",
		name: "Candles",
		image: candles_default
	},
	{
		slug: "packaging",
		name: "Packaging",
		image: packaging_default
	},
	{
		slug: "bakery-supplies",
		name: "Bakery Supplies",
		image: tools_default
	}
];
var products = [
	{
		id: "white-choco-chips",
		name: "Chocotown White Choco Chips",
		size: "500 g",
		price: 449,
		original: 499,
		image: chocolate_default,
		category: "chocolate-cocoa",
		type: "Chocolate Chips",
		badge: "BEST SELLER"
	},
	{
		id: "cocoa-powder",
		name: "Puramaté Cocoa Powder",
		size: "100 g",
		price: 75,
		original: 90,
		image: cocoa_default,
		category: "chocolate-cocoa",
		type: "Cocoa",
		badge: "BAKER’S FAVORITE"
	},
	{
		id: "pink-cake-box",
		name: "Premium Pink Cake Box",
		size: "12 × 12 inch",
		price: 50,
		original: 65,
		image: packaging_default,
		category: "packaging",
		type: "Cake Boxes"
	},
	{
		id: "dark-choco-chips",
		name: "Chocotown Dark Choco Chips",
		size: "500 g",
		price: 399,
		original: 449,
		image: chocolate_default,
		category: "chocolate-cocoa",
		type: "Chocolate Chips"
	},
	{
		id: "dark-compound",
		name: "Puramaté Dark Compound Chips",
		size: "100 g",
		price: 55,
		image: chocolate_default,
		category: "chocolate-cocoa",
		type: "Compound"
	},
	{
		id: "milk-compound",
		name: "Puramaté Milk Compound Chips",
		size: "100 g",
		price: 55,
		image: chocolate_default,
		category: "chocolate-cocoa",
		type: "Compound"
	},
	{
		id: "baking-powder",
		name: "Double Acting Baking Powder",
		size: "100 g",
		price: 65,
		image: ingredients_default,
		category: "baking-ingredients",
		type: "Ingredients"
	},
	{
		id: "butterfly-toppers",
		name: "Butterfly Cake Toppers",
		size: "Set of 12",
		price: 120,
		image: decoration_default,
		category: "cake-decoration",
		type: "Decorations"
	},
	{
		id: "birthday-candles",
		name: "Pastel Birthday Candles",
		size: "Pack of 6",
		price: 45,
		image: candles_default,
		category: "candles",
		type: "Candles"
	},
	{
		id: "piping-set",
		name: "Baking & Piping Essentials",
		size: "Set of 8",
		price: 249,
		image: tools_default,
		category: "bakery-supplies",
		type: "Tools"
	},
	{
		id: "white-cake-box",
		name: "White Cake Box",
		size: "8 × 8 inch",
		price: 35,
		image: packaging_default,
		category: "packaging",
		type: "Cake Boxes"
	},
	{
		id: "baking-soda",
		name: "Pure Baking Soda",
		size: "100 g",
		price: 40,
		image: ingredients_default,
		category: "baking-ingredients",
		type: "Ingredients"
	}
];
var demoOrders = [
	{
		id: "DRM12456",
		date: "12 Aug 2026",
		status: "Delivered",
		items: [{
			id: "white-choco-chips",
			qty: 1,
			size: "500 g",
			price: 449
		}, {
			id: "cocoa-powder",
			qty: 1,
			size: "100 g",
			price: 75
		}],
		total: 564
	},
	{
		id: "DRM12412",
		date: "5 Aug 2026",
		status: "Shipped",
		items: [{
			id: "dark-choco-chips",
			qty: 1,
			size: "500 g",
			price: 399
		}],
		total: 439
	},
	{
		id: "DRM12398",
		date: "28 Jul 2026",
		status: "Processing",
		items: [{
			id: "pink-cake-box",
			qty: 2,
			size: "12 × 12 inch",
			price: 50
		}, {
			id: "birthday-candles",
			qty: 1,
			size: "Pack of 6",
			price: 45
		}],
		total: 185
	}
];
var money = (value) => `₹${value.toLocaleString("en-IN")}`;
var productService = {
	list: () => products,
	search: (query) => products.filter((p) => `${p.name} ${p.type}`.toLowerCase().includes(query.toLowerCase())),
	get: (id) => products.find((p) => p.id === id)
};
var priceForSize = (product, size) => product.id === "cocoa-powder" ? {
	"50 g": 45,
	"100 g": 75,
	"200 g": 140
}[size] ?? product.price : product.price;
var cartSubtotal = (items) => items.reduce((total, item) => total + item.price * item.qty, 0);
var paymentService = {
	createPayment: (method) => ({
		method,
		status: method === "UPI" ? "PENDING" : "PAY_ON_DELIVERY"
	}),
	submitUTR: (utr) => ({
		utr,
		status: "VERIFYING"
	}),
	getPaymentStatus: (payment) => payment.status
};
var Store = (0, import_react.createContext)(null);
function ShopProvider({ children }) {
	const [cart, setCart] = (0, import_react.useState)([]), [wishlist, setWishlist] = (0, import_react.useState)([]), [orders, setOrders] = (0, import_react.useState)(demoOrders), [ready, setReady] = (0, import_react.useState)(false), [notice, setNotice] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		try {
			setCart(JSON.parse(localStorage.getItem("dreams-cart") || "[]"));
			setWishlist(JSON.parse(localStorage.getItem("dreams-wishlist") || "[]"));
			setOrders(JSON.parse(localStorage.getItem("dreams-orders") || "null") || demoOrders);
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (ready) {
			localStorage.setItem("dreams-cart", JSON.stringify(cart));
			localStorage.setItem("dreams-wishlist", JSON.stringify(wishlist));
			localStorage.setItem("dreams-orders", JSON.stringify(orders));
		}
	}, [
		cart,
		wishlist,
		orders,
		ready
	]);
	(0, import_react.useEffect)(() => {
		if (!notice) return;
		const t = setTimeout(() => setNotice(""), 2500);
		return () => clearTimeout(t);
	}, [notice]);
	const add = (p, qty = 1, size = p.size) => {
		const key = `${p.id}-${size}`;
		setCart((old) => old.some((i) => i.key === key) ? old.map((i) => i.key === key ? {
			...i,
			qty: i.qty + qty
		} : i) : [...old, {
			key,
			id: p.id,
			qty,
			size,
			price: priceForSize(p, size)
		}]);
		setNotice(`${p.name} added to cart`);
	};
	const change = (key, delta) => setCart((old) => old.map((i) => i.key === key ? {
		...i,
		qty: i.qty + delta
	} : i).filter((i) => i.qty > 0));
	const remove = (key) => setCart((old) => old.filter((i) => i.key !== key));
	const toggle = (id) => setWishlist((old) => old.includes(id) ? old.filter((i) => i !== id) : [...old, id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Store.Provider, {
		value: {
			cart,
			wishlist,
			orders,
			setOrders,
			setCart,
			add,
			change,
			remove,
			toggle,
			setNotice
		},
		children: [children, notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cart-toast",
			role: "status",
			children: notice
		})]
	});
}
var useShop = () => (0, import_react.useContext)(Store);
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			add: "bg-accent text-primary hover:bg-secondary border border-accent",
			selected: "bg-secondary text-accent-foreground border border-primary",
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Brand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "brand",
		"aria-label": "DREAMS home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "DREAMS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "BAKING SUPPLIES & MORE" })] })]
	});
}
function SearchBar({ initial = "" }) {
	const [query, setQuery] = (0, import_react.useState)(initial);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		action: "/search",
		className: "search-bar",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				"aria-label": "Search products",
				name: "q",
				value: query,
				onChange: (e) => setQuery(e.target.value),
				placeholder: "Search for chocolate chips, cake boxes..."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				type: "submit",
				"aria-label": "Submit search",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
			})
		]
	});
}
function Header() {
	const { cart } = useShop();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "site-header",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "header-main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "desktop-search",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "header-actions",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/wishlist",
							className: "header-action",
							"aria-label": "Wishlist",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Wishlist" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/profile",
							className: "header-action",
							"aria-label": "My account",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Account" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/cart",
							className: "header-action cart-link",
							"aria-label": "Cart",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cart" }),
								cart.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "count",
									children: cart.reduce((n, i) => n + i.qty, 0)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "header-action nav-store",
							"aria-label": "Our Store",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Our Store" })]
						})
					]
				})
			]
		})
	});
}
function BottomNavigation() {
	const path = useLocation().pathname;
	const { cart } = useShop();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "bottom-nav",
		children: [
			[
				House,
				"Home",
				"/"
			],
			[
				Grid2x2,
				"Categories",
				"/categories"
			],
			[
				ShoppingCart,
				"Cart",
				"/cart"
			],
			[
				UserRound,
				"Profile",
				"/profile"
			]
		].map(([Icon, label, to]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to,
			className: path === to ? "active" : "",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 21 }), to === "/cart" && cart.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
				className: "count",
				children: cart.reduce((n, i) => n + i.qty, 0)
			})] }), label]
		}, to))
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "footer-inner",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Everything you need to bake better." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://www.instagram.com/d_r_e_a_m_s_5661/",
					target: "_blank",
					rel: "noreferrer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 17 }), " @d_r_e_a_m_s_5661"]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Explore DREAMS" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/categories",
					children: "All Categories"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					children: "About Us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					children: "Contact & Support"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Your little baking world" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/orders",
					children: "My Orders"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/wishlist",
					children: "Wishlist"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/profile",
					children: "My Account"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-note",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { size: 30 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"From your first cupcake",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"to your next masterpiece."
				] })]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "footer-bottom",
		children: ["© 2026 DREAMS · Baking Supplies & More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Made for the love of baking." })]
	})] });
}
function SectionTitle({ title, eyebrow, to, label = "View All" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "section-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title })] }), to && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to,
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
		})]
	});
}
function PageTitle({ title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			"aria-label": "Back home",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 20 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title }), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: subtitle })] })]
	});
}
function ProductCard({ product }) {
	const { wishlist, toggle, add } = useShop();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "product-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "product-photo",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$slug",
					params: { slug: product.id },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						loading: "lazy",
						width: "400",
						height: "400"
					})
				}),
				product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "product-badge",
					children: product.badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					variant: "ghost",
					className: `wishlist-button ${wishlist.includes(product.id) ? "saved" : ""}`,
					onClick: () => toggle(product.id),
					"aria-label": `${wishlist.includes(product.id) ? "Remove from" : "Add to"} wishlist: ${product.name}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "product-info",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$slug",
					params: { slug: product.id },
					className: "product-name",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "product-size",
					children: product.size
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "price-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(product.price) }),
						product.original && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("del", { children: money(product.original) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rating",
							children: "★ 4.8"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "add",
					className: "add-button",
					onClick: () => add(product),
					children: ["Add ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { size: 15 })]
				})
			]
		})]
	});
}
function ProductGrid({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "product-grid",
		children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
	});
}
function CategoryCard({ category }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/category/$slug",
		params: { slug: category.slug },
		className: "category-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: category.image,
			alt: category.name,
			width: "400",
			height: "400",
			loading: "lazy"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [category.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })] })]
	});
}
function Quantity({ value, onMinus, onPlus }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "quantity",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon",
				variant: "ghost",
				onClick: onMinus,
				"aria-label": "Decrease quantity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 14 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon",
				variant: "ghost",
				onClick: onPlus,
				"aria-label": "Increase quantity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 })
			})
		]
	});
}
function Empty({ title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "empty-state",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { size: 44 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/categories",
					children: ["Explore the shop ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			})
		]
	});
}
function TrustStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "trust-strip",
		children: [
			[
				Package,
				"All your baking essentials",
				"Ingredients, tools & a little magic"
			],
			[
				ShieldCheck,
				"Quality you can bake with",
				"Carefully selected for every baker"
			],
			[
				Truck,
				"Packed with care",
				"From our store to your kitchen"
			]
		].map(([Icon, title, sub]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: sub })] })] }, title))
	});
}
//#endregion
export { useShop as S, money as _, Empty as a, productService as b, PageTitle as c, SearchBar as d, SectionTitle as f, categories as g, cartSubtotal as h, CategoryCard as i, ProductGrid as l, TrustStrip as m, Brand as n, Footer as o, ShopProvider as p, Button as r, Header as s, BottomNavigation as t, Quantity as u, paymentService as v, products as x, priceForSize as y };
