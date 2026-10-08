import {createContext,useContext,useEffect,useState} from 'react';
import {demoOrders} from '@/data/shop';
import {priceForSize} from '@/services/shop';
const Store=createContext(null);
export function ShopProvider({children}){
 const [cart,setCart]=useState([]),[wishlist,setWishlist]=useState([]),[orders,setOrders]=useState(demoOrders),[ready,setReady]=useState(false),[notice,setNotice]=useState('');
 useEffect(()=>{try{setCart(JSON.parse(localStorage.getItem('dreams-cart')||'[]'));setWishlist(JSON.parse(localStorage.getItem('dreams-wishlist')||'[]'));setOrders(JSON.parse(localStorage.getItem('dreams-orders')||'null')||demoOrders);}catch{}setReady(true)},[]);
 useEffect(()=>{if(ready){localStorage.setItem('dreams-cart',JSON.stringify(cart));localStorage.setItem('dreams-wishlist',JSON.stringify(wishlist));localStorage.setItem('dreams-orders',JSON.stringify(orders))}},[cart,wishlist,orders,ready]);
 useEffect(()=>{if(!notice)return;const t=setTimeout(()=>setNotice(''),2500);return()=>clearTimeout(t)},[notice]);
 const add=(p,qty=1,size=p.size)=>{const key=`${p.id}-${size}`;setCart(old=>old.some(i=>i.key===key)?old.map(i=>i.key===key?{...i,qty:i.qty+qty}:i):[...old,{key,id:p.id,qty,size,price:priceForSize(p,size)}]);setNotice(`${p.name} added to cart`)};
 const change=(key,delta)=>setCart(old=>old.map(i=>i.key===key?{...i,qty:i.qty+delta}:i).filter(i=>i.qty>0));
 const remove=key=>setCart(old=>old.filter(i=>i.key!==key));
 const toggle=id=>setWishlist(old=>old.includes(id)?old.filter(i=>i!==id):[...old,id]);
 return <Store.Provider value={{cart,wishlist,orders,setOrders,setCart,add,change,remove,toggle,setNotice}}>{children}{notice&&<div className="cart-toast" role="status">{notice}</div>}</Store.Provider>
}
export const useShop=()=>useContext(Store);
