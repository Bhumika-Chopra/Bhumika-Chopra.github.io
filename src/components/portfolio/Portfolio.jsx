import React from 'react';
import './Portfolio.css';
import Menu from './Menu';
import { RiGithubLine } from 'react-icons/ri';
const Portfolio = () => (
  <section className="portfolio container section" id="portfolio">
    <h2 className="section__title">Selected Projects & Contributions</h2>
    <p className="portfolio__intro">Recent work in machine learning and systems, alongside earlier projects.</p>
    <div className="portfolio__container grid">
      {Menu.map(({ id, title, description, category, repositoryUrl }) => (
        <article className="portfolio__card" key={id}>
          <span className="portfolio__category">{category.join(' · ')}</span>
          <h3 className="portfolio__title">{title}</h3>
          <p>{description}</p>
          <a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__github-button" aria-label={`View ${title} on GitHub`}><RiGithubLine /> View repository</a>
        </article>
      ))}
    </div>
    <a className="portfolio__all" href="https://github.com/Bhumika-Chopra?tab=repositories" target="_blank" rel="noreferrer">Explore all public repositories →</a>
  </section>
);
export default Portfolio;
