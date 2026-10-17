'use client';
import {useEffect,useRef,useState} from 'react';

// One decoder, short keyframes and event-driven seeks keep forward/backward
// scrolling responsive without downloading a second reverse video.
export default function VideoScrub(){
 const video=useRef(null);const [enabled,setEnabled]=useState(false);
 useEffect(()=>{const q=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setEnabled(!q.matches);update();q.addEventListener('change',update);return()=>q.removeEventListener('change',update)},[]);
 useEffect(()=>{
  const v=video.current;if(!enabled||!v)return;
  let frame=0,end=1,target=0;
  const seek=()=>{if(document.hidden||!Number.isFinite(v.duration)||v.seeking)return;const t=Math.min(v.duration-.04,Math.max(.35,.35+target*(v.duration-.35)));if(Math.abs(v.currentTime-t)>.025)v.currentTime=t};
  const update=()=>{frame=0;target=Math.min(1,window.scrollY/end);seek()};
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
  const measure=()=>{const contact=document.getElementById('contact-section');end=Math.max(1,contact?contact.offsetTop+contact.offsetHeight*.5-innerHeight*.5:document.documentElement.scrollHeight-innerHeight);schedule()};
  const observer=new ResizeObserver(measure);observer.observe(document.body);
  window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',measure,{passive:true});document.addEventListener('visibilitychange',schedule);v.addEventListener('loadedmetadata',measure);v.addEventListener('seeked',seek);measure();
  return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',measure);document.removeEventListener('visibilitychange',schedule);v.removeEventListener('loadedmetadata',measure);v.removeEventListener('seeked',seek);v.pause()};
 },[enabled]);
 return <div className="scene-background fixed inset-0 z-0 pointer-events-none bg-[#0a0a0a]" aria-hidden="true" style={{backgroundImage:"url('/photo/hero.webp')",backgroundSize:'cover',backgroundPosition:'center top'}}>{enabled&&<video ref={video} src="/videos/scene.mp4" poster="/photo/hero.webp" className="absolute inset-0 w-full h-full object-cover" muted playsInline preload="auto"/>}<div className="absolute inset-0 bg-black/35"/><div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent"/><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25"/></div>
}
