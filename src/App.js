import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import hero from './images/hero.png';
import happyFace from './images/happy-face.png';
import './App.css';

const App = () => {
  const [words, setWords] = useState(["React", "React Native"]);
  const [fancyText, setFancyText] = useState("");
  const [textIndex, setTexIndex] = useState(0);
  const [action, setAction] = useState("write")
  const [intervalTime, setIntervalTime] = useState(100)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(fancyText, action)
      if (action == "write") {
        if (fancyText.length == 0) {
          setIntervalTime(100)
        }
        const newText = fancyText + words[textIndex].charAt(fancyText.length);
        setFancyText(newText)
        if (newText.length == words[textIndex].length) {
          console.log(newText.length, words[textIndex].length)
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

  return (
    <div className="app">
      <header className="app-header d-flex flex-row">
        <div className="d-flex justify-content-center align-items-center" style={{ width: "80px", height: "80px", cursor: "pointer" }}>
          <img src={logo} style={{ width: "70%", height: "70%" }}></img>
        </div>
        <nav className="navbar navbar-expand-sm navbar-light" style={{ width: "90%" }}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
            <ul className="navbar-nav">
              <li className="nav-item mx-3 "><a className="text-orange" href="#">Project</a></li>
              <li className="nav-item"><a className="text-orange" href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <section className="greet d-flex flex-row justify-content-center mt-5">
        <div className="ml-4" >
          <img src={happyFace} style={{ width: "120px", height: "120px", marginRight: "30px" }} />
        </div>
        <div className="d-flex flex-column align-items-start" style={{ minWidth: "550px" }}>
          <p style={{ fontSize: "36px", fontWeight: "bold" }}>Hi, I am Tony</p>
          <p style={{ fontSize: "32px", fontWeight: "bold" }}>I am a developer using <strong style={{ color: "#F8333C" }}>{fancyText}</strong><span className="cs-clink">|</span></p>
        </div>
      </section>
      <section className="hero d-flex justify-content-center mt-5">
        <div style={{ width: "60%" }}>
          <img src={hero} style={{ width: "100%", height: "100%" }} />
        </div>
      </section>
    </div>
  );
}

export default App;
