'use client';
import dynamic from 'next/dynamic';
import ContactForm from '@/components/ContactForm';
import {profile} from '@/data/profile';
const GradientBlinds=dynamic(()=>import('@/components/GradientBlinds'),{ssr:false});
const colors=['#000000','#ff6b1a','#111111'];
export default function ContactPage(){return <section className="contact-page"><div className="contact-blinds" aria-hidden="true"><GradientBlinds gradientColors={colors} angle={45} noise={.2} blindCount={12} blindMinWidth={50} spotlightRadius={.7} spotlightSoftness={1.5} spotlightOpacity={.6} mixBlendMode="screen"/></div><div className="relative z-10"><p className="eyebrow">Get in touch</p><div className="contact-grid"><ContactForm/><div className="contact-info"><h1 className="section-title smaller">Let's build<br/>something<br/><span className="ghost-orange">meaningful.</span></h1><p>{profile.availability}</p><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={`tel:${profile.phoneHref}`}>{profile.phone}</a><div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.resume} target="_blank" rel="noreferrer">Résumé ↗</a><a href={profile.coverLetter} target="_blank" rel="noreferrer">Cover letter ↗</a></div><p>{profile.location}</p></div></div></div></section>}
