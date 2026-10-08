import {useEffect,useState} from 'react';
import {ChefHat} from 'lucide-react';
import bakery from '@/assets/splash-bakery.jpg';

const SHOW_MS=3000, FADE_MS=600;

// Rendered on the server too, so the splash covers the page from the first paint (no blank flash).
export function SplashScreen(){
 const [phase,setPhase]=useState('show');
 useEffect(()=>{const t=setTimeout(()=>setPhase('fade'),SHOW_MS);return()=>clearTimeout(t)},[]);
 useEffect(()=>{if(phase!=='fade')return;const t=setTimeout(()=>setPhase('gone'),FADE_MS);return()=>clearTimeout(t)},[phase]);
 if(phase==='gone')return null;
 return <div className={`splash ${phase==='fade'?'splash-out':''}`} role="status" aria-label="Loading DREAMS">
  <div className="splash-pattern" aria-hidden="true"/>
  <div className="splash-center">
   <ChefHat className="splash-emblem" aria-hidden="true"/>
   <h1 className="splash-word">DREAMS</h1>
   <span className="splash-tag">BAKING SUPPLIES &amp; MORE</span>
   <p className="splash-line">Everything You Need<br/>to Bake Better</p>
  </div>
  <img className="splash-photo" src={bakery} alt="" width="1536" height="864"/>
  <div className="splash-loader" aria-hidden="true"><span/></div>
 </div>;
}
