import React from 'react';
import './About.css';
import Image from '../../assets/sunset.png';
const About = () => (
  <section className="about container section" id="about">
    <h2 className="section__title">A little about me</h2>
    <div className="about__container grid">
      <figure className="about__photo"><img src={Image} alt="A sunset" /><figcaption>somewhere between code & a sunset</figcaption></figure>
      <div className="about__data">
        <p className="about__description">Somewhere between a maths problem at IIT Delhi and a pricing system at Maven, I got very interested in what happens underneath the abstractions. That curiosity eventually brought me to an MS in Computer Science at Georgia Tech.</p>
        <p className="about__description">These days, my rabbit holes tend to be serving systems and SysML. The model gets the spotlight; I'm usually wondering what it takes to keep it fed, moving, and answering on time.</p>
        <p className="about__description">Lately, that has meant contributing to <a href="https://github.com/Bhumika-Chopra/setu">Setu</a>, a distributed tensor exchange project, and interning at <a href="https://avartha.ai/">Avartha</a>. Along the way, there was also a summer at Amazon building AI/LLM agents.</p>
        <p className="about__description">Away from the code, a good novel is an excellent excuse for one more chapter. Book recommendations and conversations about systems are both very welcome.</p>
        <div className="about__tags"><span>serving systems</span><span>SysML</span><span>one more chapter 📖</span></div>
      </div>
    </div>
  </section>
);
export default About;
