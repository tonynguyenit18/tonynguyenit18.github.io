import React from 'react';

const Contact = () => (
  <section className="contact" id="contact">
    <div className="wrap">
      <div className="section-head reveal">
        <span className="section-num">04 / Say hi</span>
      </div>

      <div className="contact-inner">
        <div>
          <h2 className="contact-title reveal">
            Let's <span className="mark-solid">build</span><br />
            <span className="light">something good.</span>
          </h2>
          <div style={{ marginTop: 32 }} className="reveal d1">
            <a className="contact-email" href="mailto:tony@tonynguyen.dev">tony@tonynguyen.dev</a>
          </div>
        </div>

        <div className="contact-side reveal d1">
          <a href="https://github.com/tonynguyenit18" target="_blank" rel="noreferrer">
            <span>github</span><span className="arr">→</span>
          </a>
          <a href="https://www.linkedin.com/in/tonynguyenit18" target="_blank" rel="noreferrer">
            <span>linkedin</span><span className="arr">→</span>
          </a>
          <a href="https://tonynguyenit.medium.com" target="_blank" rel="noreferrer">
            <span>medium</span><span className="arr">→</span>
          </a>
        </div>
      </div>

      <div className="contact-sig reveal d2">
        <span className="sig">— Tony</span>
        <span className="from">Melbourne · with coffee</span>
      </div>
    </div>
  </section>
);

export default Contact;
