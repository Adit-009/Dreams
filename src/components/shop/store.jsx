import {createContext,useContext,useEffect,useState} from 'react';
import {demoOrders,demoReviews} from '@/data/shop';
import {priceForSize} from '@/services/shop';
const Store=createContext(null);
export function ShopProvider({children}){
 const [cart,setCart]=useState([]),[wishlist,setWishlist]=useState([]),[orders,setOrders]=useState(demoOrders),[reviews,setReviews]=useState(demoReviews),[ready,setReady]=useState(false),[notice,setNotice]=useState('');
 useEffect(()=>{
   try{
     setCart(JSON.parse(localStorage.getItem('dreams-cart')||'[]'));
     setWishlist(JSON.parse(localStorage.getItem('dreams-wishlist')||'[]'));
     setOrders(JSON.parse(localStorage.getItem('dreams-orders')||'null')||demoOrders);
     setReviews(JSON.parse(localStorage.getItem('dreams-reviews')||'null')||demoReviews);
   }catch{}
   setReady(true);
 },[]);
 useEffect(()=>{
   if(ready){
     localStorage.setItem('dreams-cart',JSON.stringify(cart));
     localStorage.setItem('dreams-wishlist',JSON.stringify(wishlist));
     localStorage.setItem('dreams-orders',JSON.stringify(orders));
     localStorage.setItem('dreams-reviews',JSON.stringify(reviews));
   }
 },[cart,wishlist,orders,reviews,ready]);
 useEffect(()=>{if(!notice)return;const t=setTimeout(()=>setNotice(''),2500);return()=>clearTimeout(t)},[notice]);
 const add=(p,qty=1,size=p.size)=>{const key=`${p.id}-${size}`;setCart(old=>old.some(i=>i.key===key)?old.map(i=>i.key===key?{...i,qty:i.qty+qty}:i):[...old,{key,id:p.id,qty,size,price:priceForSize(p,size)}]);setNotice(`${p.name} added to cart`)};
 const change=(key,delta)=>setCart(old=>old.map(i=>i.key===key?{...i,qty:i.qty+delta}:i).filter(i=>i.qty>0));
 const remove=key=>setCart(old=>old.filter(i=>i.key!==key));
 const toggle=id=>setWishlist(old=>old.includes(id)?old.filter(i=>i!==id):[...old,id]);

 const addReview=(review)=>{
   const newReview={
     id:`rev-${Date.now()}`,
     date:new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}),
     likes:0,
     verified:true,
     ...review,
   };
   setReviews(old=>[newReview,...old]);
   setNotice('Thank you! Your verified review has been published.');
   return newReview;
 };

 const likeReview=(reviewId)=>{
   setReviews(old=>old.map(r=>r.id===reviewId?{...r,likes:(r.likes||0)+1}:r));
 };

 const hasPurchasedProduct=(productId)=>{
   return orders.some(o=>o.items&&o.items.some(i=>i.id===productId));
 };

 const getOrdersForProduct=(productId)=>{
   return orders.filter(o=>o.items&&o.items.some(i=>i.id===productId));
 };

 return <Store.Provider value={{cart,wishlist,orders,reviews,setOrders,setCart,setReviews,add,change,remove,toggle,setNotice,addReview,likeReview,hasPurchasedProduct,getOrdersForProduct}}>{children}{notice&&<div className="cart-toast" role="status">{notice}</div>}</Store.Provider>
}
export const useShop=()=>useContext(Store);
