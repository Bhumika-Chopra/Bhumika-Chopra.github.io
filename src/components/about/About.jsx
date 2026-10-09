import React from 'react';
import './About.css';
import Image from '../../assets/sunset.png';
const About = () => (
  <section className="about container section" id="about">
    <h2 className="section__title">A little about me</h2>
    <div className="about__container grid">
      <figure className="about__photo"><img src={Image} alt="A sunset" /><figcaption>somewhere between code & a sunset</figcaption></figure>
      <div className="about__data">
        <p className="about__description">My route into systems started between math problems at IIT Delhi and pricing code at Maven. I kept finding myself more interested in what was happening underneath the software than on top of it.</p>
        <p className="about__description">That curiosity brought me to Georgia Tech for my MSCS, where I focus on SysML. While models get most of the spotlight, I love the plumbing behind them—everything it takes to keep inference fast, efficient, and reliable under real traffic.</p>
        <p className="about__description">Lately, I’ve been putting that into practice: interning at <a href="https://avartha.ai/">Avartha</a> on ML inference, contributing to <a href="https://github.com/Bhumika-Chopra/setu">Setu</a> (a distributed tensor exchange), and building AI agents at Amazon.</p>
        <p className="about__description">When I’m not at my terminal, I’m usually deep in a good book. I’m always open to technical chats or reading recommendations!</p>
        <div className="about__tags"><span>serving systems</span><span>SysML</span><span>one more chapter 📖</span></div>
      </div>
    </div>
  </section>
);
export default About;
