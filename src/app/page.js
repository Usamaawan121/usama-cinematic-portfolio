import Hero from '@/components/Hero';
import About from '@/components/About';
import VideoScrub from '@/components/VideoScrub';
import {ProjectBand,Services,Work,Experience,Process} from '@/components/HomeSections';
import Contact from '@/components/Contact';
import BlogCards from '@/components/BlogCards';
import Link from 'next/link';
import Footer from '@/components/Footer';
export default function Home(){return <main id="main-content"><VideoScrub/><div className="relative z-10"><Hero/><ProjectBand/><About/><Services/><Work/><Experience/><Process/><section className="content-section"><div className="section-head"><div><p className="eyebrow">Ideas & perspectives</p><h2 className="section-title">Journal.</h2></div><Link className="outline-pill" href="/blog">All articles ↗</Link></div><BlogCards limit={3}/></section><Contact/><Footer/></div></main>}
