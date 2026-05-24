import React from 'react';

const projects = [
  { idx: '/01', name: 'Keyninja',           meta: 'Web · 2022', href: 'https://keyninja.io' },
  { idx: '/02', name: 'ParkieAU',           meta: 'iOS · 2020', href: 'https://apps.apple.com/us/app/parkieau/id1480145624' },
  { idx: '/03', name: 'DAESY',              meta: 'iOS · 2021', href: 'https://apps.apple.com/us/app/daesy/id1483064076' },
  { idx: '/04', name: <>react-<span className="light">pixelate</span></>, meta: 'OSS · 2021', href: 'https://github.com/tonynguyenit18/react-pixelate' },
  { idx: '/05', name: <>LinkedIn <span className="light">Assistant</span></>, meta: 'AI · 2025', href: 'https://github.com/tonynguyenit18/linkedin-message-assistant' },
];

const Work = () => (
  <section className="section" id="work">
    <div className="wrap">
      <div className="section-head reveal">
        <span className="section-num">02 / Work</span>
      </div>

      <div className="projects reveal">
        {projects.map((p) => (
          <a key={p.idx} className="project" href={p.href} target="_blank" rel="noreferrer">
            <span className="project-index">{p.idx}</span>
            <h3 className="project-name">{p.name}</h3>
            <span className="project-meta">{p.meta}</span>
            <span className="project-arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
