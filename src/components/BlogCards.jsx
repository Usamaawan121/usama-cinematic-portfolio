import Link from 'next/link';
import Image from 'next/image';
import posts from '@/data/posts.json';
export default function BlogCards({limit}){return <div className="blog-grid">{posts.slice(0,limit||posts.length).map(p=><Link href={`/blog/${p.slug}`} key={p.slug} className="blog-card"><div className="blog-image"><Image src={p.image} alt={p.title} fill sizes="(max-width:700px) 100vw, 45vw"/></div><p className="eyebrow">{p.category} · {Math.max(1,Math.ceil((p.intro+' '+p.sections.flat().join(' ')).split(/\s+/).length/200))} min read</p><h2>{p.title}</h2><p>{p.intro}</p><span className="read-more">Read article ↗</span></Link>)}</div>}
