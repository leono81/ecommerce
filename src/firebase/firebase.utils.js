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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
