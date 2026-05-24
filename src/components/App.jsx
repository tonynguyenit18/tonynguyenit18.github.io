import React, { useEffect } from 'react';
import '../css/App.css';

import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Work from './Work.jsx';
import Writing from './Writing.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Tweaks from './Tweaks.jsx';

const App = () => {
  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Writing />
      <Contact />
      <Footer />
      <Tweaks />
    </>
  );
};

export default App;
