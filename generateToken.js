const admin = require('firebase-admin');
const serviceAccount = require('/home/riham/project/firebase-auth/src/auth/firebaseServiceAcount.json'); // Chemin vers ton fichier de clé

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function generateToken(uid) {
  try {
    const customToken = await admin.auth().createCustomToken(uid); // UID de l'utilisateur Firebase
    console.log('Generated Token:', customToken);
    return customToken;
  } catch (error) {
    console.error('Error generating custom token:', error);
  }
}

// Remplace 'your-uid' par l'UID réel d'un utilisateur Firebase
generateToken('FF1oSUmKcpTuGySTHhd2icATWaK2');
