import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyDHSQOqFzgKnIOHEDxXXDmR4luE5Ehi9aU",
    authDomain: "projetoead-6d7c6.firebaseapp.com",
    projectId: "projetoead-6d7c6",
    storageBucket: "projetoead-6d7c6.appspot.com",
    messagingSenderId: "18596151029",
    appId: "1:18596151029:web:f271da7aa9cb1aaf834fbc"

};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
