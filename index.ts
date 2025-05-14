import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARl_Piq93N61cN3BVbYE60MTDPaJ2BBvE",
  authDomain: "miniprojet-300a0.firebaseapp.com",
  projectId: "miniprojet-300a0",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);//Récupère une instance du service d'authentification

const email = 'rihame2005@gmail.com';     
const password = '123456';             

signInWithEmailAndPassword(auth, email, password)//Connexion de l'utilisateur avec email et mot de passe
  .then((userCredential) => userCredential.user.getIdToken())
  .then((idToken) => {
    console.log('Firebase ID Token:', idToken);
  })
  .catch((error) => {
    console.error('Erreur :', error.message);
  });
