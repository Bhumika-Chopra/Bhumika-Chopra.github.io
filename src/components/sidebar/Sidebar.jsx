import React, { useState } from "react";
import "./Sidebar.css";
import LightLogo from "../../assets/avatar-2.svg";

import {
    RiHome2Line,
    RiUser3Line,
    RiBriefcase2Line,
    RiStackLine,
    RiChat3Line,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
} from "react-icons/ri";


const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo">
                    <img src={LightLogo} alt="logo" />
                </a>

                <nav className="nav" aria-label="Main navigation" id="main-navigation">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" aria-label="Home" onClick={() => showMenu(false)} className="nav__link">
                                    <RiHome2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" aria-label="About" onClick={() => showMenu(false)} className="nav__link">
                                    <RiUser3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#resume" aria-label="Experience and education" onClick={() => showMenu(false)} className="nav__link">
                                    <RiBriefcase2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#portfolio" aria-label="Projects" onClick={() => showMenu(false)} className="nav__link">
                                    <RiStackLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" aria-label="Contact" onClick={() => showMenu(false)} className="nav__link">
                                    <RiChat3Line />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button onClick={props.switchTheme} aria-label={`Switch to ${props.theme === 'light' ? 'dark' : 'light'} theme`} aria-pressed={props.theme === 'dark'} className="nav__link footer__button">
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <button aria-label="Toggle navigation" aria-expanded={toggle} aria-controls="main-navigation" className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
                <RiMenu2Line />
            </button>
        </>
    );
};

export default Sidebar;
