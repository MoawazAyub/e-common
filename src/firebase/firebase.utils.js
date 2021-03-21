import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyARrYvlVk3nAi9BIrGf2P4Z6CaD7ipAi7c",
  authDomain: "e-common-db.firebaseapp.com",
  projectId: "e-common-db",
  storageBucket: "e-common-db.appspot.com",
  messagingSenderId: "876533361892",
  appId: "1:876533361892:web:5dad42bd41d1e937c550f1",
  measurementId: "G-G3VQBT7MZV"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;