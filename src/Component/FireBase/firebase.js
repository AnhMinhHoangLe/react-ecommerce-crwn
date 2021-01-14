// firebase utility library, firebase has all of the utility libraries loaded
// when we included the entire dependency when we installed firebase with ya
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyC8uBt9uhbCAljW7gCwqBwtpMD5uGu_9k0",
  authDomain: "crwn-db-29bc4.firebaseapp.com",
  projectId: "crwn-db-29bc4",
  storageBucket: "crwn-db-29bc4.appspot.com",
  messagingSenderId: "855046410320",
  appId: "1:855046410320:web:05ce21c33742dff7b18155",
  measurementId: "G-L11RN1RQDK"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`) // go to the user profile by UID
  const snapShot = await userRef.get() // get the snapshot of the user from console
  if (!snapShot.exists) {
    // create user in database if it does not exist
    const { displayName, email } = userAuth
    const createAt = new Date() 
    try {
      // get the data set 
      await userRef.set({ displayName, email, createAt, ...additionalData })
    }
    catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// this gives us access to this new Google auth provider class from the authentication library.
// We want to always trigger the Google pop up when ever we use this Google auth provider for authentication and sign in 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;