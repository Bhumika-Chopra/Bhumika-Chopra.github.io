import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.css';
import LightLogo from '../../assets/avatar-2.svg';
import {
  RiHome2Line, RiUser3Line, RiBriefcase2Line, RiStackLine,
  RiBookOpenLine, RiChat3Line, RiMoonLine, RiSunLine, RiMenu2Line,
} from 'react-icons/ri';

const sections = [
  { id: 'home', label: 'Home', Icon: RiHome2Line },
  { id: 'about', label: 'About', Icon: RiUser3Line },
  { id: 'resume', label: 'Experience and education', Icon: RiBriefcase2Line },
  { id: 'portfolio', label: 'Projects', Icon: RiStackLine },
  { id: 'reading', label: 'Reading corner', Icon: RiBookOpenLine },
  { id: 'contact', label: 'Contact', Icon: RiChat3Line },
];

const Sidebar = ({ theme, switchTheme }) => {
  const [toggle, showMenu] = useState(false);
  const [active, setActive] = useState('home');
  const menuButton = useRef(null);

  useEffect(() => {
    let frame = null;
    const update = () => {
      frame = null;
      // Select the section crossing the upper third of the viewport.
      // This works for sections taller than the viewport as well as short ones.
      const marker = window.innerHeight * 0.35;
      let current = 'home';
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) current = id;
      });
      const height = document.documentElement.scrollHeight;
      if (height > window.innerHeight && window.scrollY + window.innerHeight >= height - 2) current = 'contact';
      setActive(current);
    };
    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeOnEscape = event => {
    if (event.key === 'Escape' && toggle) {
      showMenu(false);
      menuButton.current?.focus();
    }
  };

  return (
    <>
      <aside className={toggle ? 'aside show-menu' : 'aside'} onKeyDown={closeOnEscape}>
        <a href="#home" className="nav__logo" aria-label="Back to home" onClick={() => showMenu(false)}>
          <img src={LightLogo} alt="" />
        </a>
        <nav className="nav" aria-label="Main navigation" id="main-navigation">
          <ul className="nav__list">
            {sections.map(({ id, label, Icon }) => (
              <li className="nav__item" key={id}>
                <a href={`#${id}`} aria-label={label} aria-current={active === id ? 'location' : undefined}
                  onClick={() => { showMenu(false); setActive(id); }} className="nav__link">
                  <Icon aria-hidden="true" />
                  <span className="nav__label" aria-hidden="true">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav__footer">
          <button onClick={switchTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            aria-pressed={theme === 'dark'} className="nav__link footer__button">
            {theme === 'light' ? <RiMoonLine aria-hidden="true" /> : <RiSunLine aria-hidden="true" />}
            <span className="nav__label" aria-hidden="true">{theme === 'light' ? 'After hours' : 'Daylight'}</span>
          </button>
        </div>
      </aside>
      <button ref={menuButton} aria-label="Toggle navigation" aria-expanded={toggle} aria-controls="main-navigation"
        className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)} onKeyDown={closeOnEscape}>
        <RiMenu2Line aria-hidden="true" />
      </button>
    </>
  );
};
export default Sidebar;
