import {useEffect,useRef,useState} from 'react';
import gsap from 'gsap';

const HOLD_S=3;

// Rendered on the server too, so the splash covers the page from the first paint.
// The site stays hidden (html:not(.site-ready)) until the splash lifts, then elements make their entries.
export function SplashScreen(){
 const [gone,setGone]=useState(false);
 const root=useRef(null);
 useEffect(()=>{
  const el=root.current;if(!el)return;
  const ctx=gsap.context(()=>{
   const tl=gsap.timeline();
   tl.from('.splash-emblem',{y:24,scale:.85,opacity:0,duration:.8,ease:'back.out(1.6)'})
     .from('.splash-loader',{opacity:0,y:10,duration:.4,ease:'power2.out'},'-=.4')
     .fromTo('.splash-loader span',{scaleX:0},{scaleX:1,duration:HOLD_S-.6,ease:'power1.inOut'},'<')
     .to('.splash-center',{y:-20,opacity:0,duration:.4,ease:'power2.in'},'+=.15')
     .to(el,{yPercent:-100,duration:.8,ease:'power4.inOut'},'-=.1')
     .add(()=>{
      document.documentElement.classList.add('site-ready');
      const q=s=>document.querySelectorAll(s);
      const et=gsap.timeline({defaults:{ease:'power3.out'},onComplete:()=>gsap.set('.site-header,.site-header .brand,.site-header .desktop-search,.site-header .header-action,main > *,main section,footer,.bottom-nav',{clearProps:'all'})});
      et.from('.site-header',{y:-80,opacity:0,duration:.7})
        .from(q('.site-header .brand, .site-header .desktop-search, .site-header .header-action'),{y:-16,opacity:0,stagger:.06,duration:.5},'-=.4')
        .from(q('main section').length?q('main section'):q('main > *'),{y:50,opacity:0,stagger:.12,duration:.8},'-=.35')
        .from('.bottom-nav',{y:80,opacity:0,duration:.6},'-=.6')
        .from('footer',{opacity:0,y:30,duration:.6},'-=.4');
     },'-=.45')
     .add(()=>setGone(true));
  },el);
  return()=>ctx.revert();
 },[]);
 if(gone)return null;
 return <div ref={root} className="splash" role="status" aria-label="Loading DREAMS">
  <div className="splash-pattern" aria-hidden="true"/>
  <div className="splash-center">
   <svg className="splash-emblem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/>
    <path d="M6 17h12"/>
   </svg>
   <div className="splash-loader" aria-hidden="true"><span/></div>
  </div>
 </div>;
}
