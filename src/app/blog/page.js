import BlogCards from '@/components/BlogCards';
import Footer from '@/components/Footer';
export const metadata={title:'Blog',description:'Articles on AI, automation and building practical business workflows, from Verendo.'};
export default function Page(){return <main id="main-content"><section className="blog-index"><p className="eyebrow">Ideas / AI / Automation</p><h1 className="section-title">Notes &<br/><span className="ghost">perspectives.</span></h1><p className="blog-intro">Articles from Verendo on useful technology and the workflows behind it.</p><BlogCards/></section><Footer/></main>}
