import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-me.webp';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';


const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width="200" height="200" />
                <span className="home__eyebrow">a little corner of the internet ✧</span>
                <h1 className="home__name">Bhumika Chopra</h1>
                <span className="home__education">MS Computer Science · Georgia Tech</span>

                <p className="home__tagline">Exploring the systems behind fast, reliable inference.</p>
                <p className="home__focus">Serving systems · SysML</p>
                <HeaderSocials />

                <a href="#contact" className="btn">Say hello ↗</a>

                <ScrollDown />
            </div>


        </section>
    )
}

export default Home