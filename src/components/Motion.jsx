'use client';
import {useEffect,useRef,useState} from 'react';
export function Tilt({children,className='',...props}){const ref=useRef(null);useEffect(()=>{const el=ref.current;if(!el)return;const fine=matchMedia('(pointer:fine)').matches;if(!fine)return;function move(e){if(document.documentElement.classList.contains('reduce-effects'))return;const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.setProperty('--rx',(-y*7)+'deg');el.style.setProperty('--ry',(x*9)+'deg');el.style.setProperty('--px',((x+.5)*100)+'%');el.style.setProperty('--py',((y+.5)*100)+'%')}function leave(){el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg')}el.addEventListener('pointermove',move);el.addEventListener('pointerleave',leave);return()=>{el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',leave)}},[]);return <div ref={ref} className={'tilt-surface '+className} {...props}>{children}</div>}
export function ChapterScroll(){
 const ref=useRef(null);
 const [stage,setStage]=useState(0);
 const stages=[
  {eyebrow:'01 / DISCOVER',tag:'The idea',heading:'Find the problem.',desc:'Start with the people, the constraints and a purpose worth solving.',detail:'Understanding the brief',short:'Discover'},
  {eyebrow:'02 / ENGINEER',tag:'The build',heading:'Design the system.',desc:'Bring interfaces, secure APIs and data architecture together into one dependable workflow.',detail:'From interface to API',short:'Engineer'},
  {eyebrow:'03 / DELIVER',tag:'The outcome',heading:'Ship with care.',desc:'Make the result usable, resilient and ready to grow beyond the first release.',detail:'Test, improve and deploy',short:'Deliver'}
 ];
 useEffect(()=>{
  let raf=0;
  const update=()=>{
   if(raf)return;
   raf=requestAnimationFrame(()=>{
    raf=0;
    const el=ref.current;if(!el)return;
    const span=Math.max(1,el.offsetHeight-window.innerHeight);
    const progress=Math.min(1,Math.max(0,-el.getBoundingClientRect().top/span));
    el.style.setProperty('--stage',progress.toFixed(4));
    setStage(Math.min(2,Math.floor(progress*3)));
   });
  };
  window.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update);
  update();
  return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update);cancelAnimationFrame(raf)};
 },[]);
 const jumpTo=(i)=>{
  const el=ref.current;if(!el)return;
  const span=Math.max(1,el.offsetHeight-window.innerHeight);
  const target=el.getBoundingClientRect().top+window.scrollY+(span*(i+.18)/3);
  window.scrollTo({top:target,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 };
 return <section className="chapter-wrap" ref={ref} aria-label="How I approach software engineering">
  <div className="chapter-sticky">
   <div className="chapter-backdrop" aria-hidden="true"/>
   <div className="chapter-art" aria-hidden="true"><div className="orbit-shell"><i/><b/><em/></div><div className="orbit-core"/><div className="chapter-art-line chapter-art-line-one"/><div className="chapter-art-line chapter-art-line-two"/></div>
   <div className="chapter-copy">
    <div className="chapter-eyebrow"><span className="eyebrow gold">03 / ENGINEERING IN MOTION</span><span className="chapter-small-label">FROM IDEA TO IMPLEMENTATION</span></div>
    <div className="chapter-primary" aria-live="off">
     {stages.map((item,i)=><div className={'chapter-message '+(stage===i?'active':'')} key={item.tag} aria-hidden={stage!==i}>
      <span>{item.eyebrow}</span><h2>{item.heading}</h2><p>{item.desc}</p>
      <div className="chapter-subline">{item.detail}<span aria-hidden="true">↗</span></div>
     </div>)}
    </div>
    <div className="chapter-stage-nav" aria-label="Engineering process stages">{stages.map((item,i)=><button type="button" onClick={()=>jumpTo(i)} key={item.short} className={'chapter-stage-button '+(stage===i?'is-active':'')} aria-current={stage===i?'step':undefined}>
     <small>0{i+1}</small><strong>{item.short}</strong><span aria-hidden="true"/></button>)}</div>
    <div className="chapter-footer"><span>SCROLL OR CHOOSE A STAGE</span><span className="chapter-counter">0{stage+1} <i>/ 03</i></span></div>
   </div>
   <div className="chapter-orbit-caption" aria-hidden="true"><span>DESIGN</span><i>·</i><span>DEVELOP</span><i>·</i><span>DEPLOY</span></div>
  </div>
 </section>
}
export function FlowExplorer({steps}){const [step,setStep]=useState(0);return <div className="flow-widget"><div className="flow-top"><p className="eyebrow gold">INTERACTIVE / SYSTEM FLOW</p><small>Choose a stage to explore</small></div><div className="flow-stages">{steps.map((s,i)=><button className={step===i?'is-selected':''} key={s} onClick={()=>setStep(i)} aria-pressed={step===i}><span>0{i+1}</span>{s}</button>)}</div><div className="flow-description"><span>STAGE 0{step+1}</span><h3>{steps[step]}</h3><p>{['User intent enters the application through a clearly defined interaction.','Validate the request and apply the appropriate application rules.','Exchange structured data with services, queues or the database.','Return a usable result and make the next action obvious.'][step%4]}</p></div></div>}
export function ImageViewer({src,title}){const[open,setOpen]=useState(false),[zoom,setZoom]=useState(1);useEffect(()=>{if(!open)return;document.body.style.overflow='hidden';const onKey=e=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',onKey);return()=>{document.body.style.overflow='';window.removeEventListener('keydown',onKey)}},[open]);return <><button className="image-zoom-trigger" onClick={()=>{setZoom(1);setOpen(true)}} aria-label={`Enlarge ${title} visual`}>View detail <span>↗</span></button>{open&&<div className="zoom-overlay" role="dialog" aria-modal="true" aria-label={`Enlarged ${title} project image`} onClick={e=>{if(e.target===e.currentTarget)setOpen(false)}}><div className="zoom-actions"><button onClick={()=>setZoom(v=>Math.max(1,v-.25))} aria-label="Zoom out">−</button><output>{Math.round(zoom*100)}%</output><button onClick={()=>setZoom(v=>Math.min(3,v+.25))} aria-label="Zoom in">+</button><button onClick={()=>setOpen(false)} aria-label="Close image">✕</button></div><div className="zoom-media" style={{transform:`scale(${zoom})`}}><img src={src} alt={`${title} project visualization`}/></div></div>}</>}
