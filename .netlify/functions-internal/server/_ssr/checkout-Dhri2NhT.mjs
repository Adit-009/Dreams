import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useNavigate, p as useLocation, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowRight, C as Copy, O as Check, a as Trash2, d as QrCode, i as Truck, n as Wallet, p as Package, w as Clock } from "../_libs/lucide-react.mjs";
import { S as useShop, _ as money, a as Empty, c as PageTitle, h as cartSubtotal, r as Button, u as Quantity, v as paymentService, x as products } from "./common-GP_Ppbtc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-Dhri2NhT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { cart, change, remove, setNotice } = useShop();
	const [coupon, setCoupon] = (0, import_react.useState)("");
	const subtotal = cartSubtotal(cart);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "content",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			title: "My Cart",
			subtitle: `${cart.reduce((n, i) => n + i.qty, 0)} lovely things for your next bake`
		}), cart.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "split-layout",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				cart.map((item) => {
					const p = products.find((p) => p.id === item.id);
					if (!p) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cart-item",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								width: "95",
								height: "95"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "cart-item-info",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/product/$slug",
										params: { slug: p.id },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.name })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.size }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quantity, {
										value: item.qty,
										onMinus: () => change(item.key, -1),
										onPlus: () => change(item.key, 1)
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "cart-item-side",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									"aria-label": `Remove ${p.name}`,
									onClick: () => remove(item.key),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(item.price * item.qty) })]
							})
						]
					}, item.key);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "field-label",
					children: "Have a Coupon?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "coupon",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "text-input",
						"aria-label": "Coupon code",
						placeholder: "Enter coupon code",
						value: coupon,
						onChange: (e) => setCoupon(e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: () => setNotice(coupon ? "This coupon is not available in the demo." : "Please enter a coupon code."),
						children: "Apply"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "summary-box",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Order Summary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "summary-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(subtotal) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "summary-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Standard delivery (demo)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "₹40" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "summary-line total",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(subtotal + 40) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "checkout-cta",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/checkout",
							children: ["Proceed to Checkout ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A little care in every package." })
				]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
			title: "Your cart is waiting for a little magic",
			description: "Find the perfect supplies for your next beautiful bake."
		})]
	});
}
function CheckoutPage() {
	const { cart, setCart, orders, setOrders, setNotice } = useShop();
	const navigate = useNavigate();
	const [method, setMethod] = (0, import_react.useState)("Cash on Delivery"), [delivery, setDelivery] = (0, import_react.useState)("Standard"), [address, setAddress] = (0, import_react.useState)(""), [name, setName] = (0, import_react.useState)(""), [phone, setPhone] = (0, import_react.useState)(""), [utr, setUtr] = (0, import_react.useState)(""), [payment, setPayment] = (0, import_react.useState)(null), [error, setError] = (0, import_react.useState)("");
	const fee = delivery === "Standard" ? 40 : 70;
	const total = cartSubtotal(cart) + fee;
	const place = (e) => {
		e.preventDefault();
		if (method === "UPI" && !payment) {
			setError("Submit your UTR / Transaction ID before placing the order.");
			return;
		}
		const id = `DRM${Date.now().toString().slice(-7)}`;
		const order = {
			id,
			date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN"),
			items: [...cart],
			total,
			status: "Processing",
			payment: method === "UPI" ? "Payment Verification Pending" : method === "Order on WhatsApp" ? "WhatsApp confirmation pending" : "Cash on Delivery",
			address,
			name,
			phone,
			delivery,
			utr: method === "UPI" ? utr : ""
		};
		setOrders([order, ...orders]);
		setCart([]);
		navigate({
			to: "/order/$id",
			params: { id }
		});
	};
	if (!cart.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "content",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, { title: "Checkout" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
			title: "Your cart is empty",
			description: "Add your baking essentials before checking out."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "content",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			title: "Checkout",
			subtitle: "Your next beautiful bake is almost here"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			onSubmit: place,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "checkout-section",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Delivery Address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "address-form",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									className: "text-input",
									"aria-label": "Full name",
									placeholder: "Full name",
									value: name,
									onChange: (e) => setName(e.target.value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									className: "text-input",
									type: "tel",
									"aria-label": "Phone number",
									placeholder: "Phone number",
									value: phone,
									onChange: (e) => setPhone(e.target.value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									className: "text-input",
									"aria-label": "Delivery address",
									placeholder: "House number, street, city and PIN code",
									value: address,
									onChange: (e) => setAddress(e.target.value)
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "checkout-section",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Delivery Method" }), [[
							"Standard",
							"3–5 days",
							40
						], [
							"Express",
							"1–2 days",
							70
						]].map(([label, days, cost]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "option-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "delivery",
									checked: delivery === label,
									onChange: () => setDelivery(label)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { size: 19 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [label, " Delivery"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [days, " · Demo estimate"] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: money(cost) })
							]
						}, label))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "checkout-section",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Payment Method" }),
							[
								"Cash on Delivery",
								"UPI",
								"Order on WhatsApp"
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "option-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "payment",
										checked: method === m,
										onChange: () => {
											setMethod(m);
											setError("");
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { size: 18 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: m })
								]
							}, m)),
							method === "UPI" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "payment-panel",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "qr-placeholder",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { size: 38 }), "QR placeholder"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-center",
										children: "Demo UPI ID: dreams@example"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "payment-actions",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											variant: "outline",
											onClick: async () => {
												try {
													await navigator.clipboard.writeText("dreams@example");
													setNotice("Demo UPI ID copied");
												} catch {
													setNotice("Demo UPI ID: dreams@example");
												}
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), "Copy UPI ID"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											variant: "outline",
											onClick: () => setNotice("Demo only — no payment app or real payment is opened."),
											children: ["Open UPI App ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Payment preview only. Do not send money to this placeholder." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "text-input",
										"aria-label": "UTR or Transaction ID",
										placeholder: "UTR / Transaction ID",
										value: utr,
										onChange: (e) => {
											setUtr(e.target.value);
											setPayment(null);
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										onClick: () => {
											if (!utr.trim()) {
												setError("Enter a UTR / Transaction ID.");
												return;
											}
											setPayment(paymentService.submitUTR(utr));
											setError("");
										},
										children: "Submit Payment Details"
									}),
									payment && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										role: "status",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 }), " Payment Verification Pending"]
									})
								]
							}),
							method === "Order on WhatsApp" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "payment-panel",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your order will be saved with WhatsApp confirmation pending. The store’s WhatsApp number has not been provided." })
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "summary-box",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Your Order" }),
						cart.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "summary-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								products.find((p) => p.id === item.id)?.name,
								" × ",
								item.qty
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(item.price * item.qty) })]
						}, item.key)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "summary-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delivery" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(fee) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "summary-line total",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total Amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(total) })]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-destructive",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "checkout-cta",
							type: "submit",
							children: [
								method === "Order on WhatsApp" ? "Save WhatsApp Order" : "Place Order",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Demo checkout · No real payment is collected." })
					]
				})]
			})
		})]
	});
}
function OrderPage({ id }) {
	const { orders } = useShop();
	const order = orders.find((o) => o.id === id);
	if (!order) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "content",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
			title: "Order not found",
			description: "Find all your orders in your account."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "content",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "confirmation",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "success-icon",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 36 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "A LITTLE JOY IS ON ITS WAY"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Order Placed Successfully" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Thank you for baking with DREAMS." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["#", order.id] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "summary-box",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Order Details" }),
						order.items.map((i, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "summary-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								products.find((p) => p.id === i.id)?.name,
								" × ",
								i.qty
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(i.price * i.qty) })]
						}, n)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "summary-line total",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(order.total) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "summary-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Payment status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: order.payment || "Completed · Demo order" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "summary-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delivery" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [order.delivery || "Standard", " Delivery"] })]
						}),
						order.address && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-xs text-muted-foreground",
							children: [
								order.name,
								" · ",
								order.address
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/track-order",
						search: { id: order.id },
						children: ["Track Order ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					asChild: true,
					className: "ml-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/orders",
						children: "My Orders"
					})
				})
			]
		})
	});
}
function TrackingPage() {
	const { orders } = useShop();
	const query = new URLSearchParams(useLocation().searchStr);
	const order = orders.find((o) => o.id === query.get("id")) || orders[0];
	const steps = [
		"Order Placed",
		"Payment Verification",
		"Confirmed",
		"Processing",
		"Ready",
		"Shipped",
		"Delivered"
	];
	const active = order?.status === "Delivered" ? 6 : order?.status === "Shipped" ? 5 : order?.payment === "Payment Verification Pending" ? 1 : 3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "content",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			title: "Track Order",
			subtitle: `Order #${order?.id || "DREAMS"}`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "timeline",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-7 text-xs text-muted-foreground",
				children: order?.payment === "Payment Verification Pending" ? "Your payment details are awaiting verification." : "Every step, from our store to your kitchen."
			}), steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `timeline-item ${i <= active ? "done" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "timeline-icon",
					children: i < active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 18 }) : i === active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 17 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: s }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: i < active ? "Completed" : i === active ? "Current stage · Demo tracking" : "Coming up" })] })]
			}, s))]
		})]
	});
}
//#endregion
export { TrackingPage as i, CheckoutPage as n, OrderPage as r, CartPage as t };
