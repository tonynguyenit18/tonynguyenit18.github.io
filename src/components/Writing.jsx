import React from 'react';

const articles = [
  { year: '2024', title: 'Pre-signed S3 URLs with Node.',           delay: '' },
  { year: '2024', title: 'Contract testing with Pact & Buildkite.', delay: 'd1' },
  { year: '2023', title: 'React Native bridges, without the headache.', delay: '' },
  { year: '2023', title: 'The smallest useful design system.',    delay: 'd1' },
];

const Writing = () => (
  <section className="section" id="writing">
    <div className="wrap">
      <div className="section-head reveal">
        <span className="section-num">03 / Writing</span>
      </div>

      <div className="writing">
        {articles.map((a) => (
          <a
            key={a.title}
            className={`article reveal ${a.delay}`}
            href="https://tonynguyenit.medium.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="article-meta">{a.year}</span>
            <h3 className="article-title">{a.title}</h3>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Writing;
