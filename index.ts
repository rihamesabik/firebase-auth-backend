import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARl_Piq93N61cN3BVbYE60MTDPaJ2BBvE",
  authDomain: "miniprojet-300a0.firebaseapp.com",
  projectId: "miniprojet-300a0",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = 'rihame2005@gmail.com';      // change selon ton utilisateur Firebase
const password = '123456';             // idem

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => userCredential.user.getIdToken())
  .then((idToken) => {
    console.log('Firebase ID Token:', idToken);
  })
  .catch((error) => {
    console.error('Erreur :', error.message);
  });
