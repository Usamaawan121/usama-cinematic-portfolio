'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {profile} from '@/data/profile';
gsap.registerPlugin(ScrollTrigger);
const links=[['Projects','/projects'],['About','/about'],['Blog','/blog'],['Contact','/contact']];
export default function SiteChrome(){
 const path=usePathname();const [open,setOpen]=useState(false);const cursor=useRef(null);const lenis=useRef(null);const menuButton=useRef(null);
 useEffect(()=>{setOpen(false);},[path]);
 useEffect(()=>{const q=matchMedia('(min-width:761px)');const close=()=>{if(q.matches)setOpen(false)};q.addEventListener('change',close);return()=>q.removeEventListener('change',close)},[]);
 useEffect(()=>{if(path==='/projects'||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const l=new Lenis({lerp:.1,smoothWheel:true});lenis.current=l;l.on('scroll',ScrollTrigger.update);const tick=t=>l.raf(t*1000);gsap.ticker.add(tick);return()=>{gsap.ticker.remove(tick);l.destroy();lenis.current=null}},[path]);
 useEffect(()=>{if(open){lenis.current?.stop();document.body.style.overflow='hidden'}else{lenis.current?.start();document.body.style.overflow=''}const onKey=e=>{if(e.key==='Escape'){setOpen(false);menuButton.current?.focus()}};window.addEventListener('keydown',onKey);return()=>{document.body.style.overflow='';window.removeEventListener('keydown',onKey)}},[open]);
 useEffect(()=>{if(!matchMedia('(pointer:fine)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const el=cursor.current;let x=-100,y=-100,cx=x,cy=y,scale=1,target=1,raf;const move=e=>{x=e.clientX;y=e.clientY;el.style.opacity='1';target=e.target.closest('a,button,input,textarea')?2.1:1};const leave=()=>{el.style.opacity='0'};const tick=()=>{cx+=(x-cx)*.18;cy+=(y-cy)*.18;scale+=(target-scale)*.15;el.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%) scale(${scale})`;raf=requestAnimationFrame(tick)};document.documentElement.classList.add('custom-pointer');window.addEventListener('pointermove',move,{passive:true});document.addEventListener('mouseleave',leave);tick();return()=>{cancelAnimationFrame(raf);document.documentElement.classList.remove('custom-pointer');window.removeEventListener('pointermove',move);document.removeEventListener('mouseleave',leave)}},[]);
 return <><div className="grain-overlay" aria-hidden="true"/><div ref={cursor} className="custom-cursor" aria-hidden="true"/><nav className="site-nav" aria-label="Main navigation"><Link href="/" aria-label="Muhammad Usama home" className="brand"><svg viewBox="0 0 40 48" width="28" height="34" aria-hidden="true"><path d="M7 6v27l13 8 13-8V6M13 10v20l7 4 7-4V10" fill="none" stroke="currentColor" strokeWidth="1.4"/></svg></Link><div className="desktop-nav">{links.map(([n,u])=><Link key={u} href={u} aria-current={path===u?'page':undefined} className={path===u?'active':''}>{n}</Link>)}<a href={profile.github} target="_blank" rel="noreferrer" aria-label="Usama on GitHub" className="github-link">GitHub ↗</a><Link href="/contact" className="pill">Let's talk</Link></div><button ref={menuButton} className="mobile-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?'Close ✕':'Menu ☰'}</button></nav>{open&&<div id="mobile-menu" className="mobile-menu"><Link href="/" onClick={()=>setOpen(false)}>Home</Link>{links.map(([n,u])=><Link href={u} key={u} onClick={()=>setOpen(false)}>{n}</Link>)}<a href={`mailto:${profile.email}`} className="menu-email">{profile.email}</a></div>}</>
}
