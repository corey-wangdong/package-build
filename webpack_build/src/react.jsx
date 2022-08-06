import React from "react";
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><HelloMessage name="corey" /></StrictMode>);
