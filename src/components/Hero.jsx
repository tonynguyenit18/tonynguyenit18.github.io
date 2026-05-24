import React from 'react';
import happyFace from '../images/happy-face.png';
import smile from '../images/smile.png';

const Hero = () => (
  <header className="hero" id="top">
    <div className="wrap">
      <div className="hero-tag-row">
        <span className="sticker"><span className="dot-w"></span>Open to work</span>
        <span className="sticker outline">Melbourne, AU</span>
      </div>

      <h1 className="hero-title">
        <span className="line">Hi, I'm Tony —</span>
        <span className="line">a <span className="mark">software</span></span>
        <span className="line">engineer who</span>
        <span className="line"><span className="light">makes things feel right.</span></span>
      </h1>

      <div className="hero-tag">
        <div className="hero-face" aria-hidden="true">
          <div className="face-core">
            <img className="face-base" src={happyFace} alt="" />
            <img className="face-smile" src={smile} alt="" />
          </div>
        </div>
        <p className="hero-line">
          React &amp; React Native, mostly. Currently at <strong>Sapia.ai</strong>.
        </p>
      </div>
    </div>
  </header>
);

export default Hero;
