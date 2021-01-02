import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBfS5MEzayt1bzW-QE8zOHQQnJ1HLFGqDU",
    authDomain: "crwn-clothing-db-f6a0e.firebaseapp.com",
    projectId: "crwn-clothing-db-f6a0e",
    storageBucket: "crwn-clothing-db-f6a0e.appspot.com",
    messagingSenderId: "462696769400",
    appId: "1:462696769400:web:a81a165ef0a4e33d6d8a8d",
    measurementId: "G-5PQJFW33KJ"
};

// firebase.initializeApp(config);
if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 }

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;