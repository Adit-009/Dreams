import {useEffect,useState} from 'react';

const MIN_MS=3000, MAX_MS=3800, REVEAL_MS=700;

// Rendered on the server too, so the splash covers the page from the first paint (no blank flash).
export function SplashScreen(){
 const [phase,setPhase]=useState('show');
 useEffect(()=>{
  const start=performance.now();
  let done=false;
  const finish=()=>{if(done)return;done=true;const wait=Math.max(0,MIN_MS-(performance.now()-start));setTimeout(()=>setPhase('reveal'),wait)};
  if(document.readyState==='complete')finish();else window.addEventListener('load',finish,{once:true});
  const cap=setTimeout(finish,MAX_MS);
  return()=>{clearTimeout(cap);window.removeEventListener('load',finish)};
 },[]);
 useEffect(()=>{if(phase!=='reveal')return;const t=setTimeout(()=>setPhase('gone'),REVEAL_MS);return()=>clearTimeout(t)},[phase]);
 if(phase==='gone')return null;
 return <div className={`splash ${phase==='reveal'?'splash-out':''}`} role="status" aria-label="Loading DREAMS">
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
