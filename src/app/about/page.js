import PageShell from '@/components/PageShell';
import AboutPage from '@/views/about';
import Footer from '@/components/Footer';
import {Experience,Process} from '@/components/HomeSections';
import {profile} from '@/data/profile';
export const metadata={title:'About',description:profile.bio[0]};
export default function Page(){return <PageShell><AboutPage/><section className="content-section education-section"><div><p className="eyebrow">Education</p>{profile.education.map(t=><p key={t}>{t}</p>)}</div><div><p className="eyebrow">Languages</p>{profile.languages.map(t=><p key={t}>{t}</p>)}</div><div><p className="eyebrow">Currently exploring</p><p>{profile.learning.join(' · ')}</p></div><a href={profile.coverLetter} target="_blank" rel="noreferrer" className="outline-pill">Read cover letter ↗</a></section><Experience/><Process/><Footer/></PageShell>}
