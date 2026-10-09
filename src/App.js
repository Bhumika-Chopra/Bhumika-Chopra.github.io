import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Reading from './components/reading/Reading';
import Footer from './components/footer/Footer';
import useLocalStorage from 'use-local-storage';
import { useLayoutEffect, useRef } from 'react';
import { flushSync } from 'react-dom';


function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    useLayoutEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const themeTransition = useRef(null);
    const switchTheme = () => {
        const update = () => flushSync(() => setTheme(theme === 'light' ? 'dark' : 'light'));
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (document.startViewTransition && !reduceMotion) {
            themeTransition.current?.skipTransition();
            themeTransition.current = document.startViewTransition(update);
        } else {
            update();
        }
    };

    return (
        <div className="app">
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <Home />
                <About />
                <Resume />
                <Portfolio />
                <Reading />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}

export default App;
