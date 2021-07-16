import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCGYb6jWoq4vL41sWWDE-Dc72-b6HuoiPM",
  authDomain: "crwn-db-b8a84.firebaseapp.com",
  projectId: "crwn-db-b8a84",
  storageBucket: "crwn-db-b8a84.appspot.com",
  messagingSenderId: "318079587907",
  appId: "1:318079587907:web:8753d55d361927c28d26f6",
  measurementId: "G-FE18G6C6FM",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firebase.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
