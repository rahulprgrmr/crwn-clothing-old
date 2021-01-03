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

if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 }

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email }    = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;