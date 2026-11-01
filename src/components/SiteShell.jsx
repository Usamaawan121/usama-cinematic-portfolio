'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useState} from 'react';
import {nav} from '@/data/projects';

export default function SiteShell({children}){
 const pathname=usePathname(); const [open,setOpen]=useState(false),[still,setStill]=useState(false),[scroll,setScroll]=useState(0);
 useEffect(()=>{setOpen(false);},[pathname]);
 useEffect(()=>{const media=window.matchMedia('(prefers-reduced-motion: reduce)');setStill(media.matches)},[]);
 useEffect(()=>{document.documentElement.classList.toggle('reduce-effects',still);return()=>document.documentElement.classList.remove('reduce-effects')},[still]);
 useEffect(()=>{let frame=0;function update(){cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const d=document.documentElement;setScroll(window.scrollY/Math.max(1,d.scrollHeight-innerHeight))})}window.addEventListener('scroll',update,{passive:true});update();return()=>{window.removeEventListener('scroll',update);cancelAnimationFrame(frame)}},[]);
 useEffect(()=>{const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');obs.unobserve(e.target)}}),{threshold:.07,rootMargin:'0px 0px -20px 0px'});const els=[...document.querySelectorAll('[data-reveal]')];els.forEach(e=>obs.observe(e));return()=>obs.disconnect()},[pathname]);
 return <><div className="scroll-progress" style={{transform:`scaleX(${scroll})`}} aria-hidden="true"/><header className="masthead"><Link href="/" className="brand" aria-label="Muhammad Usama homepage">USAMA<span>✳</span></Link><nav className={'navigation '+(open?'expanded':'')} aria-label="Main navigation">{nav.map(([href,label])=><Link href={href} key={href} aria-current={pathname===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><div className="nav-actions"><button className="motion-control" type="button" aria-pressed={still} onClick={()=>setStill(v=>!v)} title="Toggle decorative motion"><span className="motion-icon">◌</span><span>{still?'Motion off':'Motion on'}</span></button><Link className="nav-contact" href="/contact">LET'S TALK <span>↗</span></Link><button aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} className={'menu-button '+(open?'is-open':'')} onClick={()=>setOpen(v=>!v)}><span/><span/></button></div></header><div className="page-content" key={pathname}>{children}</div><footer className="footer"><div><Link href="/" className="brand">USAMA<span>✳</span></Link><p>Engineering with intention. Built in Karachi, available worldwide.</p></div><div className="footer-nav"><Link href="/work">Selected work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><a href="https://github.com/Usamaawan121" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div><small>© {new Date().getFullYear()} Muhammad Usama. All rights reserved.</small></footer></>;
}
