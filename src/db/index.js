import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ 
  apiKey: "AIzaSyDgmmmZQE0AlpGDGe5hVEOBK_HsyqNlGgY",
  authDomain: "exchangerio-3a293.firebaseapp.com",
  databaseURL: "https://exchangerio-3a293.firebaseio.com",
  projectId: "exchangerio-3a293",
  storageBucket: "exchangerio-3a293.appspot.com",
  messagingSenderId: "223950346936",
  appId: "1:223950346936:web:11be01fbf9ca86402d324d",
  measurementId: "G-J5BKNNBRMN"
})
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

