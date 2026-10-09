import React, { useState } from 'react';
import './Portfolio.css';
import Menu from './Menu';
const Project = ({ title, description, category, repositoryUrl, image, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className={`portfolio__card${open ? ' is-open' : ''}`}>
      <div className="portfolio__visual">
        <img src={image} alt="" loading="lazy" />
        <span className="portfolio__number">0{id}</span>
      </div>
      <div className="portfolio__details" id={`project-${id}`}>
        <span className="portfolio__category">{category.join(' · ')}</span>
        <p>{description}</p>
        <a href={repositoryUrl} target="_blank" rel="noreferrer" aria-label={`View ${title} on GitHub`}>View repository ↗</a>
      </div>
      <div className="portfolio__caption">
        <h3>{title}</h3>
        <button className="portfolio__reveal" aria-expanded={open} aria-controls={`project-${id}`} aria-label={`${open ? 'Hide' : 'Show'} details for ${title}`} onClick={() => setOpen(!open)}>{open ? '−' : '+'}</button>
      </div>
    </article>
  );
};
const Portfolio = () => (
  <section className="portfolio container section" id="portfolio">
    <h2 className="section__title">Things I've been tinkering with</h2>
    <p className="portfolio__intro">Six little windows into my work. Hover, focus, or tap + for the story behind each.</p>
    <div className="portfolio__container grid">{Menu.slice(0, 6).map(project => <Project key={project.id} {...project} />)}</div>
    <a className="portfolio__all" href="https://github.com/Bhumika-Chopra?tab=repositories" target="_blank" rel="noreferrer">The rest of the notebook lives on GitHub ↗</a>
  </section>
);
export default Portfolio;
