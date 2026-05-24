import React, { useEffect, useState } from 'react';

const ACCENTS = {
  coral:   'oklch(66% 0.22 22)',
  crimson: 'oklch(58% 0.24 18)',
  tomato:  'oklch(64% 0.22 24)',
  ember:   'oklch(58% 0.20 30)',
  sunset:  'oklch(74% 0.18 45)',
};

const STORAGE_KEY = 'tony-portfolio-tweaks';

const applyAccent = (key) => {
  const val = ACCENTS[key] || ACCENTS.tomato;
  const base = val.replace(')', '');
  document.documentElement.style.setProperty('--accent', val);
  document.documentElement.style.setProperty('--accent-soft', `${base} / 0.16)`);
  document.documentElement.style.setProperty('--highlight', `${base} / 0.22)`);
};

const applyLight = (on) => {
  document.body.classList.toggle('theme-light', !!on);
};

const Tweaks = () => {
  const [open, setOpen] = useState(false);
  const [accent, setAccent] = useState('tomato');
  const [light, setLight] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved.accent && ACCENTS[saved.accent]) setAccent(saved.accent);
        if (typeof saved.light === 'boolean') setLight(saved.light);
      }
    } catch (_) { /* ignore */ }
  }, []);

  // Persist + apply
  useEffect(() => {
    applyAccent(accent);
    applyLight(light);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ accent, light })); } catch (_) { /* ignore */ }
  }, [accent, light]);

  if (!open) {
    return (
      <button className="tweak-collapsed" onClick={() => setOpen(true)} aria-label="Open theme tweaks">
        ✦ theme
      </button>
    );
  }

  return (
    <div className="tweak-panel" role="dialog" aria-label="Theme tweaks">
      <h4>Theme · <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}>close</button></h4>
      <div className="tweak-row">
        <span>Accent</span>
        <div className="tweak-swatches">
          {Object.entries(ACCENTS).map(([k, v]) => (
            <button
              key={k}
              className={`tweak-swatch ${k === accent ? 'active' : ''}`}
              style={{ background: v }}
              onClick={() => setAccent(k)}
              aria-label={`Accent ${k}`}
            />
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <span>Light mode</span>
        <button
          className={`tweak-toggle ${light ? 'on' : ''}`}
          onClick={() => setLight((v) => !v)}
          aria-label="Toggle light mode"
          aria-pressed={light}
        />
      </div>
    </div>
  );
};

export default Tweaks;
