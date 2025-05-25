import React, { createContext, useState, useContext } from "react";
import { translations, Language } from "./translations";  
//est un hook qui permet d'accéder à un contexte que tu as créé avec createContext

type LanguageContextType = {
  lang: Language;  // La langue actuelle
  setLang: (lang: Language) => void;  // Fonction pour changer la langue
  t: (key: keyof typeof translations["fr"]) => string;  // Fonction pour récupérer la traduction d'une clé
};


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Composant qui fournit le contexte de la langue à tous les composants enfants
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 
  const [lang, setLang] = useState<Language>("fr");

  // Fonction pour traduire une clé en fonction de la langue actuelle
  const t = (key: keyof typeof translations["fr"]) => translations[lang][key];

  return (
    // Fournir le contexte de la langue à tous les enfants
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}  {}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte de la langue
export const useLanguage = () => {
  // Accéder au contexte de la langue
  const context = useContext(LanguageContext);
  
  // Si le contexte n'est pas disponible, lancer une erreur
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  
  return context; 
};
