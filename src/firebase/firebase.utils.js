import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {

    apiKey: "AIzaSyBDi3ePOS9bDsCoeIske9r_n_idnt_dPmg",
    authDomain: "crown-db-1f70e.firebaseapp.com",
    databaseURL: "https://crown-db-1f70e.firebaseio.com",
    projectId: "crown-db-1f70e",
    storageBucket: "crown-db-1f70e.appspot.com",
    messagingSenderId: "766843719872",
    appId: "1:766843719872:web:3c56f3e67224734d25dd25",
    // measurementId: "G-83V1B5V9FF"
  };

 export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

 const userRef = firestore.doc(`users/${userAuth.uid}`);
 const snapShot = await userRef.get();


 if(!snapShot.exits){
   const { displayName, email} = userAuth;
   const createDate = new Date();

   try {
     await userRef.set({
       displayName,
       email,
       createDate,
       ...additionalData
     })
   } catch (error){
     console.log('error creating user', error.message);
   }
 }
  return userRef;
 };



  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
