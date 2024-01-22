import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import Rout from './JS/router';
import reportWebVitals from './JS/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>
);


reportWebVitals();
