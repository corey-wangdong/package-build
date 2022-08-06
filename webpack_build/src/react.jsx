import React from "react";
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
// import './react.css';
// import './react.scss';
import './react.less';

function HelloMessage({ name }) {
  return <div className="container">Hello {name}</div>;
}

const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><HelloMessage name="corey" /></StrictMode>);
