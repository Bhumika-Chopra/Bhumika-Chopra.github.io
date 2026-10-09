import React from 'react';
import './About.css';
import Image from '../../assets/sunset.png';
import AboutBox from './AboutBox';

const About = () => (
  <section className="about container section" id="about">
    <h2 className="section__title">About Me</h2>
    <div className="about__container grid">
      <img src={Image} alt="Sunset" className="about__img" />
      <div className="about__data">
        <p className="about__description">I'm Bhumika, an MS in Computer Science student at Georgia Tech with a background in mathematics and computer science from IIT Delhi. I left Maven Securities to pursue graduate study and focus on systems for machine learning.</p>
        <p className="about__description">My recent work includes contributing to Setu, a distributed tensor exchange project. At AWS, I built AI/LLM agents as an SDE intern. I'm currently interning at a startup in the machine learning inference domain.</p>
        <p className="about__description">I'm interested in SysML, CUDA, distributed systems, and ML inference optimization: building the systems that help models run efficiently.</p>
        <p className="about__description"><strong>Tools & languages:</strong> C++, Python, C, C#, Java, Julia, and AWS. My current focus is GPU programming and inference systems.</p>
        <a className="btn" href="https://www.linkedin.com/in/bhumika-chopra-740717165/" target="_blank" rel="noreferrer">View my profile</a>
      </div>
    </div>
    <AboutBox />
  </section>
);
export default About;
