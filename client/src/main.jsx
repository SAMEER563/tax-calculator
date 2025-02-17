import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 root API
import './index.css'; // Tailwind CSS
import App from './App'; // Main app component
import { BrowserRouter } from 'react-router-dom'; // React Router for routing

// Create the root of the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application with routing
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
