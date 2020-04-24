import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyAjN5vbz5L_OmpKbjOinlmqAVWCEgquggI",
  authDomain: "ecommerce-81.firebaseapp.com",
  databaseURL: "https://ecommerce-81.firebaseio.com",
  projectId: "ecommerce-81",
  storageBucket: "ecommerce-81.appspot.com",
  messagingSenderId: "843271541151",
  appId: "1:843271541151:web:4ef523da4446b7b4976daa",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
