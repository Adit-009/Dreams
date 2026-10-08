import {products} from '../data/shop';
export const productService={list:()=>products,search:query=>products.filter(p=>`${p.name} ${p.type}`.toLowerCase().includes(query.toLowerCase())),get:id=>products.find(p=>p.id===id)};
export const priceForSize=(product,size)=>product.id==='cocoa-powder'?({'50 g':45,'100 g':75,'200 g':140}[size]??product.price):product.price;
export const cartSubtotal=items=>items.reduce((total,item)=>total+item.price*item.qty,0);
export const paymentService={createPayment:method=>({method,status:method==='UPI'?'PENDING':'PAY_ON_DELIVERY'}),submitUTR:utr=>({utr,status:'VERIFYING'}),getPaymentStatus:payment=>payment.status};
