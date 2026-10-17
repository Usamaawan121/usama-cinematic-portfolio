import {notFound} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import projects from '@/data/projects.json';
import Footer from '@/components/Footer';
export const dynamicParams=false;
export function generateStaticParams(){return projects.map(p=>({slug:p.id}))}
export async function generateMetadata({params}){const {slug}=await params;const p=projects.find(p=>p.id===slug);return p?{title:p.title,description:p.description}:{};}
export default async function ProjectPage({params}){const {slug}=await params;const p=projects.find(p=>p.id===slug);if(!p)notFound();return <main id="main-content"><article className="case-study"><Link href="/projects" className="back-link">← All projects</Link><p className="eyebrow">{p.category}</p><h1>{p.title}<span>.</span></h1><p className="case-intro">{p.description}</p><figure className="case-image"><Image src={p.image} alt={`${p.title} — original concept artwork`} fill priority sizes="90vw"/><figcaption>Concept artwork · {p.status}</figcaption></figure><div className="case-grid"><div>{p.sections.map(s=><section key={s.heading}><h2>{s.heading}</h2>{s.text?<p>{s.text}</p>:<ul>{s.items.map(t=><li key={t}>{t}</li>)}</ul>}</section>)}</div><aside><p className="eyebrow">Stack</p><div className="tech-pills">{p.tech.map(t=><span key={t}>{t}</span>)}</div><p className="eyebrow mt-8">Status</p><p>{p.status}</p>{p.repository?<a href={p.repository} target="_blank" rel="noreferrer" className="outline-pill">GitHub repository ↗</a>:<Link href="/contact" className="outline-pill">Request repository ↗</Link>}<Link href="/contact" className="back-link">Ask about this project ↗</Link></aside></div></article><Footer/></main>}
