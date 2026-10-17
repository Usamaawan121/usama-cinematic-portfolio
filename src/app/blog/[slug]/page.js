import {notFound} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import posts from '@/data/posts.json';
import Footer from '@/components/Footer';
export const dynamicParams=false;
export function generateStaticParams(){return posts.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}){const {slug}=await params;const p=posts.find(p=>p.slug===slug);return p?{title:p.title,description:p.intro,openGraph:{title:p.title,description:p.intro,images:[p.image],type:'article'}}:{}}
export default async function Article({params}){const {slug}=await params;const p=posts.find(p=>p.slug===slug);if(!p)notFound();const next=posts[(posts.indexOf(p)+1)%posts.length];return <main id="main-content"><article className="blog-article"><Link href="/blog" className="back-link">← All articles</Link><p className="eyebrow">{p.category} · From Verendo</p><h1>{p.title}</h1><p className="article-intro">{p.intro}</p><div className="article-image"><Image src={p.image} alt={p.title} fill priority sizes="90vw"/></div><div className="article-body">{p.sections.map(([heading,body])=><section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<div className="next-article"><p className="eyebrow">Continue reading</p><Link href={`/blog/${next.slug}`}>{next.title} ↗</Link></div></div></article><Footer/></main>}
