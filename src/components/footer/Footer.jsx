import React from 'react';
import './Footer.css';
const Footer = () => (
  <footer className="site-footer container">
    <svg className="site-footer__cat" viewBox="0 0 160 100" aria-hidden="true">
      <path className="cat-tail" d="M108 68c49 15 51-25 31-28" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="87" cy="68" rx="34" ry="20" fill="currentColor" />
      <path d="M36 57l-3-34 21 14q16-8 33 0l17-14-2 35q-32 28-66-1" fill="currentColor" />
      <g className="cat-face" fill="none" stroke="var(--body-color)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M46 51q6 6 12 0m21 0q6 6 12 0m-23 9h5m-29 0-20-4m20 11-20 3m70-10 17-4m-17 11 17 3" />
      </g>
      <path d="M35 90h107" stroke="var(--border-color)" strokeWidth="2" />
    </svg>
    <div><p>That's the end of the notebook.</p><span>The cat is keeping your place.</span></div>
    <a href="#home">Back to the top ↑</a>
  </footer>
);
export default Footer;
