import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCWOYQarSkk1mCecksrD4RLHT8JKVLURD4",
    authDomain: "crwn-db-b6507.firebaseapp.com",
    databaseURL: "https://crwn-db-b6507.firebaseio.com",
    projectId: "crwn-db-b6507",
    storageBucket: "crwn-db-b6507.appspot.com",
    messagingSenderId: "1095874740507",
    appId: "1:1095874740507:web:5eec6c63026a4fdca093be",
    measurementId: "G-MGTFVXZ97W"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;