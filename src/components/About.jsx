import React from 'react';

const About = () => (
  <section className="section" id="about">
    <div className="wrap">
      <div className="section-head reveal">
        <span className="section-num">01 / About</span>
      </div>

      <div className="about">
        <p className="about-body reveal">
          Saigon kid, Melbourne dev. I work on the <span className="mark">small stuff</span> — how things feel, how fast they load, how human the copy reads.
        </p>
        <div className="about-card reveal d1">
          <dl>
            <div className="row"><dt>Based</dt><dd>Melbourne 🇦🇺</dd></div>
            <div className="row"><dt>From</dt><dd>Saigon 🇻🇳</dd></div>
            <div className="row"><dt>Now</dt><dd>Sapia.ai</dd></div>
            <div className="row"><dt>Stack</dt><dd>React · RN · TS</dd></div>
            <div className="row"><dt>Inbox</dt><dd>always open</dd></div>
          </dl>
        </div>
      </div>
    </div>
  </section>
);

export default About;
