import React, { useEffect, useState } from 'react';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <a className="logo" href="#top">
          <svg viewBox="0 0 40 40" width="22" height="22" aria-hidden="true">
            <circle cx="20" cy="20" r="17" fill="var(--accent)"></circle>
            <circle cx="14" cy="17" r="1.8" fill="#fff"></circle>
            <circle cx="26" cy="17" r="1.8" fill="#fff"></circle>
            <path d="M13 24 Q20 30, 27 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path>
          </svg>
          <span>Tony</span>
        </a>
        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#work">work</a>
          <a href="#writing">writing</a>
          <a href="#contact">say&nbsp;hi</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
