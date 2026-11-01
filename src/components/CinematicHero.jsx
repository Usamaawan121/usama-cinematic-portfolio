'use client';

import Link from 'next/link';
import {useCallback,useEffect,useRef,useState} from 'react';

// All visual scenes are captured from the uploaded reference recording at text-free moments.
// Videos add a slow zoom to those exact image frames. No AI-generated replacements are used.
const slides = [
  {
    id:'globe',
    overline:'FULL-STACK SOFTWARE ENGINEER  /  KARACHI, PAKISTAN',
    lead:'Beyond the interface.', accent:'Into the system.',
    summary:'I engineer digital products where expressive interfaces meet reliable APIs, thoughtful architecture and real business workflows.',
    tags:['REACT + .NET','5SUM LTD · UK','SAAS ENGINEERING'],
    featured:'Tummly', featuredDetail:'Restaurant SaaS · React / ASP.NET Core',
  },
  {
    id:'data',
    overline:'REACT  /  ASP.NET CORE  /  SQL SERVER',
    lead:'Thoughtful interfaces.', accent:'Dependable systems.',
    summary:'From responsive React experiences to secure backend APIs and relational data models—I build with maintainability and the user journey in mind.',
    tags:['REACT / NEXT.JS','REST APIS','SQL SERVER'],
    featured:'Engineering work', featuredDetail:'Frontend · Backend · Databases',
  },
  {
    id:'operations',
    overline:'REAL-WORLD PROJECT  /  UK RESTAURANT SAAS',
    lead:'From first request.', accent:'To real workflows.',
    summary:'At 5Sum Ltd, I worked on Tummly’s multi-stage onboarding, email OTP verification, admin review, account setup and authenticated workspace flows.',
    tags:['TUMMLY','ASP.NET CORE','AUTHENTICATION'],
    featured:'Tummly case study', featuredDetail:'Trial · OTP · Admin review · Invite',
  },
];

export default function CinematicHero(){
  const [active,setActive] = useState(0);
  const [paused,setPaused] = useState(false);
  const [reducedMotion,setReducedMotion] = useState(false);
  const refs=useRef([]);
  const navigate = useCallback((step)=>setActive(current=>(current+step+slides.length)%slides.length),[]);
  useEffect(()=>{
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const update=()=>setReducedMotion(media.matches||document.documentElement.classList.contains('reduce-effects'));
    update();media.addEventListener?.('change',update);
    const observer=new MutationObserver(update);
    observer.observe(document.documentElement,{attributes:true,attributeFilter:['class']});
    return ()=>{media.removeEventListener?.('change',update);observer.disconnect()};
  },[]);
  useEffect(()=>{
    refs.current.forEach((video,index)=>{
      if(!video)return;
      if(index===active && !paused && !reducedMotion){
        video.currentTime=0;
        video.play().catch(()=>{});
      }else video.pause();
    });
  },[active,paused,reducedMotion]);
  useEffect(()=>{
    if(paused||reducedMotion)return;
    const timer=window.setInterval(()=>setActive(current=>(current+1)%slides.length),7500);
    return ()=>window.clearInterval(timer);
  },[paused,reducedMotion,active]);
  const current=slides[active];
  return <section className="cinematic-hero" aria-roledescription="carousel" aria-label="Introduction to Muhammad Usama">
    <div className="cinematic-hero__media" aria-hidden="true">
      {slides.map((slide,i)=><div key={slide.id} className={'cinematic-hero__scene'+(active===i?' is-active':'')}>
        <video ref={el=>{refs.current[i]=el}} muted playsInline loop preload={i===0?'metadata':'none'} poster={`/media/hero-reference/${slide.id}-poster.jpg`}>
          <source src={`/media/hero-reference/${slide.id}.mp4`} type="video/mp4" />
        </video>
      </div>)}
      <div className="cinematic-hero__scrim"/>
      <div className="cinematic-hero__text-softener"/>
      <div className="cinematic-hero__grain"/>
    </div>
    <div className="wide cinematic-hero__body">
      <div className="cinematic-hero__copy" key={current.id}>
        <p className="cinematic-hero__overline"><span className="presence-dot"/>{current.overline}</p>
        <h1><span>{current.lead}</span><em>{current.accent}</em></h1>
        <p className="cinematic-hero__summary">{current.summary}</p>
        <div className="cinematic-hero__actions">
          <Link href="/work" className="button button-primary">EXPLORE SELECTED WORK <span>↗</span></Link>
          <Link href="/contact" className="button button-ghost">LET'S WORK TOGETHER <span>↗</span></Link>
        </div>
        <div className="cinematic-hero__proof">{current.tags.map(t=><span key={t}>{t}</span>)}</div>
      </div>
      <Link className="cinematic-hero__featured" href={active===1?'/skills':'/work/tummly'}>
        <span>FEATURED ENGINEERING</span><b>{current.featured} <i>↗</i></b><small>{current.featuredDetail}</small>
      </Link>
    </div>
    <div className="cinematic-hero__bottom wide">
      <div className="cinematic-hero__controls">
        <button type="button" className="cinematic-hero__arrow" aria-label="Previous hero scene" onClick={()=>navigate(-1)}>←</button>
        <div className="cinematic-hero__dots" role="group" aria-label="Choose hero scene">
          {slides.map((slide,i)=><button type="button" key={slide.id} aria-label={`Scene ${i+1} of ${slides.length}`} aria-current={i===active?'true':undefined} className={i===active?'active':''} onClick={()=>setActive(i)}/>) }
        </div>
        <button type="button" className="cinematic-hero__arrow" aria-label="Next hero scene" onClick={()=>navigate(1)}>→</button>
        <button type="button" className="cinematic-hero__pause" aria-label={paused?'Play hero animation':'Pause hero animation'} aria-pressed={paused} onClick={()=>setPaused(v=>!v)}>{paused?'PLAY':'PAUSE'} <span aria-hidden="true">{paused?'▶':'Ⅱ'}</span></button>
      </div>
      <span className="cinematic-hero__scroll">SCROLL TO EXPLORE ↓</span>
    </div>
  </section>;
}
