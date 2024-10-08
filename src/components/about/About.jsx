import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hi, I'm Bhumika Chopra, a passionate software engineer with a strong foundation in mathematics and computer science, honed during my time at IIT Delhi. 
                            Currently, I’m working at Maven Securities as part of the options market-making pricing team. My work involves optimizing pricing algorithms, developing low-latency software, and refining volatility models using a variety of technologies.<br></br>

                            <br></br>
                            I thrive in fast-paced environments that push the boundaries of what's possible with software.
                            I am always seeking new learning opportunities and challenges that stretch my skills.
                            My current focus these days is on expanding my portfolio by building more projects that I can add on here, as well as growing as an engineer.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>c++</li>
                            <li>c#</li>
                            <li>python</li>
                            <li>julia</li>
                            <li>javascript</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About