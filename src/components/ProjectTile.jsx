import Image from 'next/image';
import Link from 'next/link';
import {Tilt} from './Motion';

/**
 * V10 fold cards: hover-to-flip on desktop; direct navigation on touch.
 * The outer Tilt layer follows the pointer and the inner deck flips independently.
 * Neither effect changes the original project image.
 */
export default function ProjectTile({project,index=0}) {
  const number=String(index+1).padStart(2,'0');
  return <Tilt className="project-tile project-tile-v10">
    <Link className="project-fold-link" href={'/work/'+project.slug} aria-label={'Open '+project.title+' project case study'}>
      <div className="project-fold-deck">
        <article className="project-fold-face project-fold-front" aria-hidden="true">
          <div className="project-fold-visual">
            <Image src={project.cover} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 1180px) 50vw, 33vw" priority={index===0} />
            <span className="fold-visual-index">{number} <i>—</i> {project.category}</span>
            <span className="fold-page-corner" aria-hidden="true"/>
          </div>
          <div className="project-fold-front-copy">
            <span className="fold-mini-label">{project.type}</span>
            <div className="fold-front-title-row"><h3>{project.title}</h3><span className="fold-front-arrow">↗</span></div>
            <p>{project.description}</p>
            <span className="fold-prompt">HOVER TO UNFOLD <span aria-hidden="true">✦</span></span>
          </div>
        </article>
        <article className="project-fold-face project-fold-back" aria-hidden="true">
          <div className="fold-back-top"><span>{number} / PROJECT INSIGHT</span><span className="fold-back-symbol" aria-hidden="true">↗</span></div>
          <h3>{project.title}<span className="gold-dot">.</span></h3>
          <p className="fold-back-description">{project.description}</p>
          <div className="fold-back-detail"><small>FOCUS</small><p>{project.role}</p></div>
          <div className="fold-back-tags">{project.stack.slice(0,4).map(s=><span key={s}>{s}</span>)}</div>
          <div className="fold-back-cta"><span>OPEN CASE STUDY</span><b aria-hidden="true">↗</b></div>
        </article>
      </div>
    </Link>
  </Tilt>;
}
