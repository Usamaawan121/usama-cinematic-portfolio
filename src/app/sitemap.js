import posts from '@/data/posts.json';
import projects from '@/data/projects.json';
export default function sitemap(){const base=process.env.NEXT_PUBLIC_SITE_URL;if(!base)return [];return ['','/about','/projects','/blog','/contact',...projects.map(p=>`/projects/${p.id}`),...posts.map(p=>`/blog/${p.slug}`)].map(path=>({url:`${base.replace(/\/$/,'')}${path}`}))}
