import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Import de ton composant App
import { BrowserRouter } from 'react-router-dom'; // Assure-toi d'importer BrowserRouter
import "./index.css"; // ✅ C'est ton vrai fichier de style


// Point d'entrée de l'application
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Le Router ici enveloppe tout l'app */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
