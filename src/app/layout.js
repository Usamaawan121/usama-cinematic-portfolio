import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import { profile } from '@/data/profile';
const inter=Inter({subsets:['latin'],variable:'--font-inter',display:'swap'});
const playfair=Playfair_Display({subsets:['latin'],style:['normal','italic'],variable:'--font-playfair',display:'swap'});
export const metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://usama-portfolio-wine.vercel.app"),title:{default:'Muhammad Usama — Full-Stack Software Engineer',template:'%s | Muhammad Usama'},description:profile.bio[0],icons:{icon:'/icon.svg'},openGraph:{title:'Muhammad Usama — Full-Stack Software Engineer',description:profile.bio[0],images:['/projects/tummly.webp']},robots:{index:true,follow:true}};
export const viewport={themeColor:'#080808'};
export default function Layout({children}) {return <html lang="en" className={`${inter.variable} ${playfair.variable}`}><body><a className="skip-link" href="#main-content">Skip to content</a><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Person',name:profile.name,jobTitle:profile.title,email:profile.email,telephone:profile.phone,sameAs:[profile.github,profile.linkedin],address:{'@type':'PostalAddress',addressLocality:'Karachi',addressCountry:'PK'}})}}/><SiteChrome/>{children}</body></html>}
