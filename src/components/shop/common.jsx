import {Link,useLocation,useNavigate} from '@tanstack/react-router';
import {ArrowLeft,ArrowRight,ChefHat,ShoppingCart,Heart,Home,Grid2X2,UserRound,Search,Instagram,MapPin,Minus,Plus,Truck,ShieldCheck,Package,ChevronRight} from 'lucide-react';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {useShop} from './store';
import {categories,money} from '@/data/shop';
export function Brand(){return <Link to="/" className="brand" aria-label="DREAMS home"><ChefHat/><span><strong>DREAMS</strong><small>BAKING SUPPLIES & MORE</small></span></Link>}
export function SearchBar({initial=''}){const [query,setQuery]=useState(initial);return <form action="/search" className="search-bar"><Search size={18}/><input aria-label="Search products" name="q" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search for chocolate chips, cake boxes..."/><Button variant="ghost" size="icon" type="submit" aria-label="Submit search"><ArrowRight/></Button></form>}
export function Header(){const {cart}=useShop();return <header className="site-header"><div className="header-main"><Brand/><div className="desktop-search"><SearchBar/></div><div className="header-actions"><Link to="/wishlist" className="header-action" aria-label="Wishlist"><Heart/><span>Wishlist</span></Link><Link to="/profile" className="header-action" aria-label="My account"><UserRound/><span>Account</span></Link><Link to="/cart" className="header-action cart-link" aria-label="Cart"><ShoppingCart/><span>Cart</span>{cart.length>0&&<b className="count">{cart.reduce((n,i)=>n+i.qty,0)}</b>}</Link><Link to="/contact" className="header-action nav-store" aria-label="Our Store"><MapPin/><span>Our Store</span></Link></div></div></header>}
export function BottomNavigation(){const path=useLocation().pathname;const {cart}=useShop();return <nav className="bottom-nav">{[[Home,'Home','/'],[Grid2X2,'Categories','/categories'],[ShoppingCart,'Cart','/cart'],[UserRound,'Profile','/profile']].map(([Icon,label,to])=><Link key={to} to={to} className={path===to?'active':''}><span><Icon size={21}/>{to==='/cart'&&cart.length>0&&<b className="count">{cart.reduce((n,i)=>n+i.qty,0)}</b>}</span>{label}</Link>)}</nav>}
export function Footer(){return <footer><div className="footer-inner"><div><Brand/><p>Everything you need to bake better.</p><a href="https://www.instagram.com/d_r_e_a_m_s_5661/" target="_blank" rel="noreferrer"><Instagram size={17}/> @d_r_e_a_m_s_5661</a></div><div><h4>Explore DREAMS</h4><Link to="/categories">All Categories</Link><Link to="/about">About Us</Link><Link to="/contact">Contact & Support</Link></div><div><h4>Your little baking world</h4><Link to="/orders">My Orders</Link><Link to="/wishlist">Wishlist</Link><Link to="/profile">My Account</Link></div><div className="footer-note"><ChefHat size={30}/><p>From your first cupcake<br/>to your next masterpiece.</p></div></div><div className="footer-bottom">© 2026 DREAMS · Baking Supplies & More <span>Made for the love of baking.</span></div></footer>}
export function SectionTitle({title,eyebrow,to,label='View All'}){return <div className="section-title"><div>{eyebrow&&<span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>{to&&<Link to={to}>{label}<ArrowRight size={16}/></Link>}</div>}
export function PageTitle({title,subtitle,backTo,onBack}){
  const navigate = useNavigate();
  const handleBack = (e) => {
    e?.preventDefault();
    if (onBack) {
      onBack();
      return;
    }
    if (backTo) {
      navigate({ to: backTo });
      return;
    }
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      navigate({ to: '/' });
    }
  };
  return (
    <div className="page-title">
      <button type="button" onClick={handleBack} aria-label="Go back" className="back-btn">
        <ArrowLeft size={20}/>
      </button>
      <div><h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div>
    </div>
  );
}
export function ProductCard({product}){const {wishlist,toggle,add}=useShop();return <article className="product-card"><div className="product-photo"><Link to="/product/$slug" params={{slug:product.id}}><img src={product.image} alt={product.name} loading="lazy" width="400" height="400"/></Link>{product.badge&&<span className="product-badge">{product.badge}</span>}<Button size="icon" variant="ghost" className={`wishlist-button ${wishlist.includes(product.id)?'saved':''}`} onClick={()=>toggle(product.id)} aria-label={`${wishlist.includes(product.id)?'Remove from':'Add to'} wishlist: ${product.name}`}><Heart/></Button></div><div className="product-info"><Link to="/product/$slug" params={{slug:product.id}} className="product-name">{product.name}</Link><span className="product-size">{product.size}</span><div className="price-row"><strong>{money(product.price)}</strong>{product.original&&<del>{money(product.original)}</del>}<span className="rating">★ 4.8</span></div><Button variant="add" className="add-button" onClick={()=>add(product)}>Add <ShoppingCart size={15}/></Button></div></article>}
export function ProductGrid({items}){return <div className="product-grid">{items.map(p=><ProductCard key={p.id} product={p}/>)}</div>}
export function CategoryCard({category}){return <Link to="/category/$slug" params={{slug:category.slug}} className="category-card"><img src={category.image} alt={category.name} width="400" height="400" loading="lazy"/><div>{category.name}<ArrowRight size={17}/></div></Link>}
export function Quantity({value,onMinus,onPlus}){return <div className="quantity"><Button size="icon" variant="ghost" onClick={onMinus} aria-label="Decrease quantity"><Minus size={14}/></Button><span>{value}</span><Button size="icon" variant="ghost" onClick={onPlus} aria-label="Increase quantity"><Plus size={14}/></Button></div>}
export function Empty({title,description}){return <div className="empty-state"><ShoppingCart size={44}/><h2>{title}</h2><p>{description}</p><Button asChild><Link to="/categories">Explore the shop <ArrowRight/></Link></Button></div>}
export function TrustStrip(){return <div className="trust-strip">{[[Package,'All your baking essentials','Ingredients, tools & a little magic'],[ShieldCheck,'Quality you can bake with','Carefully selected for every baker'],[Truck,'Packed with care','From our store to your kitchen']].map(([Icon,title,sub])=><div key={title}><Icon/><span><strong>{title}</strong><small>{sub}</small></span></div>)}</div>}
