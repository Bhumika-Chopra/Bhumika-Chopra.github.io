import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.css';

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
    if (!window.IntersectionObserver) return;
    let observer;
    const observe = () => {
      observer?.disconnect();
      observer = new window.IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting);
        if (visible.length) setActive(visible[visible.length - 1].target.id);
      }, { rootMargin: `-${Math.round(window.innerHeight * .2)}px 0px -${Math.round(window.innerHeight * .7)}px 0px`, threshold: 0 });
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });
    };
    observe();
    window.addEventListener('resize', observe);
    return () => { observer.disconnect(); window.removeEventListener('resize', observe); };
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
          <span className="nav__monogram">bc<span aria-hidden="true">✧</span></span>
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
      <header className="mobile-header">
        <a href="#home" className="mobile-header__name">Bhumika Chopra <span aria-hidden="true">✧</span></a>
        <button ref={menuButton} aria-label="Toggle navigation" aria-expanded={toggle} aria-controls="main-navigation"
          className="nav__toggle" onClick={() => showMenu(!toggle)} onKeyDown={closeOnEscape}>
          <RiMenu2Line aria-hidden="true" />
        </button>
      </header>

    </>
  );
};
export default Sidebar;
