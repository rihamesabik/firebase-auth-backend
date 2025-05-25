// src/stories/App.stories.tsx

import React from "react";  // Importation de React
import App from "../App";  // Importation du composant principal de l'application (App)
import { LanguageProvider } from "../i18n/LanguageContext";  // Importation du fournisseur de contexte pour la langue

// Définition de la story
export default {
  title: "Pages/App",  // Titre qui apparait dans l'UI de Storybook. Cela définit la catégorie "Pages" et le nom "App" dans la liste des stories.
  component: App,  // Le composant à afficher dans cette story (App).
};

// Définition de la story pour la langue française
export const French = () => (
  <LanguageProvider>  {/* Le composant LanguageProvider fournit le contexte de langue */}
    <App />  {/* Le composant App est rendu avec le contexte de la langue définie */}
  </LanguageProvider>
);

// Définition de la story pour la langue arabe
export const Arabic = () => (
  <LanguageProvider>  {/* Le composant LanguageProvider fournit le contexte de langue */}
    {/* Ici, tu pourrais forcer la langue arabe si nécessaire, en mettant 'ar' comme langue active */}
    <App />  {/* Le composant App est rendu avec le contexte de la langue définie (par défaut ou modifiée) */}
  </LanguageProvider>
);
