// Exemple de données simulées (mock)
const quizzes = {
  "lecon1": [
    { question: "Quelle est la capitale du Maroc ?", options: ["Rabat", "Casablanca", "Fès", "Tanger"], answer: "Rabat" },
    { question: "Combien de régions au Maroc ?", options: ["10", "12", "15", "18"], answer: "12" }
  ],
  "lecon2": [
    { question: "Quelle est la couleur du ciel ?", options: ["Rouge", "Bleu", "Vert", "Noir"], answer: "Bleu" }
  ]
};

// Fonction simulée pour récupérer un quiz par leçon
export const getQuizByLecon = async (leconId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(quizzes[leconId] || []);
    }, 500); // Simule un délai de réponse
  });
};
