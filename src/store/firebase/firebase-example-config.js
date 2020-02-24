import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Put your firebase informations here and rename this to 'firebase.js'
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb
