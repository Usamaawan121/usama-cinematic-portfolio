import {projects,categories} from '@/data/projects';
import WorkFilter from '@/components/WorkFilter';
export const metadata={title:'Selected Work',description:'Case studies and engineering projects from Muhammad Usama: full-stack applications, SaaS workflows and interface work.'};
export default function Work(){return <main className="inner-page"><header className="page-hero wide"><p className="eyebrow gold">PORTFOLIO / 01</p><h1>Work built with<br/><em>purpose.</em></h1><p>Browse full-stack applications, SaaS products, mobile work, system design studies and selected concepts. Every cover opens its own project detail page.</p><div className="hero-hairline"/></header><section className="wide work-list"><WorkFilter projects={projects} categories={categories}/></section></main>}
