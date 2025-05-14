"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("firebase/app");
var auth_1 = require("firebase/auth");
var firebaseConfig = {
    apiKey: "AIzaSyARl_Piq93N61cN3BVbYE60MTDPaJ2BBvE",
    authDomain: "miniprojet-300a0.firebaseapp.com",
    projectId: "miniprojet-300a0",
};
var app = (0, app_1.initializeApp)(firebaseConfig);
var auth = (0, auth_1.getAuth)(app); //Récupère une instance du service d'authentification
var email = 'rihame2005@gmail.com';
var password = '123456';
(0, auth_1.signInWithEmailAndPassword)(auth, email, password) //Connexion de l'utilisateur avec email et mot de passe
    .then(function (userCredential) { return userCredential.user.getIdToken(); })
    .then(function (idToken) {
    console.log('Firebase ID Token:', idToken);
})
    .catch(function (error) {
    console.error('Erreur :', error.message);
});
