'use client';
import {useMemo,useState} from 'react';
import ProjectTile from './ProjectTile';
export default function WorkFilter({projects,categories}){
 const [active,setActive]=useState('All');
 const [query,setQuery]=useState('');
 const filtered=useMemo(()=>projects.filter(p=>(active==='All'||p.category===active)&&(!query||[p.title,p.category,p.type,...p.stack].join(' ').toLowerCase().includes(query.toLowerCase().trim()))),[projects,active,query]);
 return <>
  <div className="work-toolbar">
    <div className="filter-bar" role="group" aria-label="Filter work by category">{categories.map(c=><button type="button" aria-pressed={active===c} className={active===c?'active':''} onClick={()=>setActive(c)} key={c}>{c==='All'?'All work':c}</button>)}</div>
    <label className="work-search"><span className="sr-only">Search portfolio projects</span><svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="10.9" cy="10.9" r="6.3"/><path d="m16 16 5 5"/></svg><input placeholder="Search projects…" type="search" value={query} onChange={e=>setQuery(e.target.value)}/></label>
  </div>
  <div className="work-result-line"><span>SELECTED ENGINEERING WORK</span><span aria-live="polite">{filtered.length} / {projects.length} PROJECTS</span></div>
  {filtered.length?<div className="project-grid">{filtered.map((p,i)=><ProjectTile key={p.slug} project={p} index={i}/>)}</div>:<p className="work-empty">No projects match. Try another category or search term.</p>}
 </>
}
