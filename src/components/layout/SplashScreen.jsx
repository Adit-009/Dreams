import {useEffect,useState} from 'react';
import {ChefHat} from 'lucide-react';
import bakery from '@/assets/splash-bakery.jpg';

const MIN_MS=1500, MAX_MS=2500, FADE_MS=600;

// Rendered on the server too, so the splash covers the page from the first paint (no blank flash).
export function SplashScreen(){
 const [phase,setPhase]=useState('show');
 useEffect(()=>{
  const start=performance.now();
  let done=false;
  const finish=()=>{if(done)return;done=true;const wait=Math.max(0,MIN_MS-(performance.now()-start));setTimeout(()=>setPhase('fade'),wait)};
  if(document.readyState==='complete')finish();else window.addEventListener('load',finish,{once:true});
  const cap=setTimeout(finish,MAX_MS);
  return()=>{clearTimeout(cap);window.removeEventListener('load',finish)};
 },[]);
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
