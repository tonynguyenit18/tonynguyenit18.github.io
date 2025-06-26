import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './components/App.jsx';
import "jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
