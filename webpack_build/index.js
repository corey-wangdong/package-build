import React from "react";
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
// import React_js from './src/react.jsx';
import React_ts from './src/react.tsx';

function HelloMessage({ name }) {
  return <div className="container">
    Hello {name}
    <React_ts name={name} />
  </div>;
}

const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><HelloMessage name="corey" /></StrictMode>);