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
import { useLayoutEffect } from 'react';


function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    useLayoutEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const switchTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

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
