import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Tony Nguyen</span>
        <span>★ thanks for scrolling</span>
      </div>
    </div>
  </footer>
);

export default Footer;
