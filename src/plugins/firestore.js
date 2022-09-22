import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

//DB PRINCIPAL
var firebaseConfig = {
//paste here the firebase api for firebase 8 =>
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const aut = firebase.auth
const db = firebase.firestore()

export {
  auth, aut, db
}