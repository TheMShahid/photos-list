import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAGuBAsm-oOf5Wth45VlpSb2KyS6-VhkDo",
  authDomain: "crwn-db-c02c3.firebaseapp.com",
  projectId: "crwn-db-c02c3",
  storageBucket: "crwn-db-c02c3.appspot.com",
  messagingSenderId: "616588234770",
  appId: "1:616588234770:web:fab49dcd2ecb0baf7408cb",
  measurementId: "G-C222PXFXBQ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
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
