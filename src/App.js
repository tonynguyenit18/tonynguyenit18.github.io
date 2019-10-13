import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import hero from './images/hero.png';
import happyFace from './images/happy-face.png';
import smile from './images/smile.png';
import './App.css';

const App = () => {
  const [words] = useState(["React", "React Native"]);
  const [fancyText, setFancyText] = useState("");
  const [textIndex, setTexIndex] = useState(0);
  const [action, setAction] = useState("write")
  const [intervalTime, setIntervalTime] = useState(100);
  const [navClassName, setnavClassName] = useState("collapse");

  useEffect(() => {
    const interval = setInterval(() => {
      if (action == "write") {
        if (fancyText.length == 0) {
          setIntervalTime(100)
        }
        const newText = fancyText + words[textIndex].charAt(fancyText.length);
        setFancyText(newText)
        if (newText.length == words[textIndex].length) {
          setIntervalTime(1500)
          setAction("remove");
        }
      } else {
        if (fancyText.length == words[textIndex].length) {
          setIntervalTime(100)
        }
        if (fancyText.length == 1) {
          setIntervalTime(400)
        }
        let newText = fancyText.split("");
        newText.pop();
        newText = newText.join("");
        setFancyText(newText)
        if (newText.length == 0) {
          setAction("write")
          if (textIndex == 0) {
            setTexIndex(1);
          } else {
            setTexIndex(0)
          }
        }
      }
    }, intervalTime);
    return () => clearInterval(interval);
  }, [fancyText, action, textIndex, intervalTime])

  const toggleNav = () => {
    if (navClassName == "collapse") {
      setnavClassName("collapsed-navbar")
    } else {
      setnavClassName("collapse")
    }
  }

  return (
    <div className="app">
      <header className="app-header d-flex flex-row" >
        <a href="/me" className="d-flex justify-content-center align-items-center logo" style={{ width: "80px", height: "80px", cursor: "pointer" }}>
          <img src={logo} style={{ width: "70%", height: "70%" }}></img>
        </a>
        <nav className="navbar navbar-expand-md navbar-light d-flex justify-content-end align-items-center" style={{ width: "90%", position: "relative" }}>
          <div
            className="humburger"
            onClick={toggleNav}>
            <svg
              style={{ height: "30px", stroke: "#3b3838" }}
              viewBox="0 0 100 100"
            >
              {navClassName != "collapsed-navbar" ?
                <React.Fragment>
                  <line x1="0" y1="20" x2="100" y2="20" strokeWidth="5"></line>
                  <line x1="0" y1="50" x2="100" y2="50" strokeWidth="5"></line>
                  <line x1="0" y1="80" x2="100" y2="80" strokeWidth="5"></line>
                </React.Fragment> :
                <React.Fragment>
                  <line x1="20" y1="20" x2="80" y2="80" strokeWidth="5"></line>
                  <line x1="20" y1="80" x2="80" y2="20" strokeWidth="5"></line>
                </React.Fragment>}
            </svg>
          </div>

          <div className={`${navClassName} navbar-collapse justify-content-end`} id="navbarContent">
            <ul className="navbar-nav">
              <li className="nav-item mx-2 "><a className="text-orange" href="#">Project</a></li>
              <li className="nav-item mx-2 "><a className="text-orange" href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <section className={`greet d-flex flex-row justify-content-center ${navClassName == "collapsed-navbar" ? "moved-down" : ""}`}>
        <div className="d-flex justify-content-end face-wrap" >
          <div className="happy-face-slide-animate">
            <div className="happy-face-rotate-animate">
              <div className="happy-face">
                <img src={happyFace} style={{ width: "100%", height: "100" }} />
                <img className="smile" src={smile} />
              </div>
            </div>
          </div>
        </div>
        <div className="quote d-flex justify-content-start" >
          <div className="d-flex flex-column align-items-start quote-wrap">
            <p className="greet-quote">Hi, I am Tony</p>
            <p className="tech-quote">I am a developer using <strong style={{ color: "#F8333C" }}>{fancyText}</strong><span className="cs-clink">|</span></p>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center mt-5">
        <div className="hero">
          <img src={hero} style={{ width: "100%", height: "100%" }} />
        </div>
      </section>
    </div>
  );
}

export default App;
