import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBkIzhj7heLGOTV33NOdhxS5WKs8pxuLE0",
  authDomain: "disney-clone-5b89d.firebaseapp.com",
  projectId: "disney-clone-5b89d",
  storageBucket: "disney-clone-5b89d.appspot.com",
  messagingSenderId: "955436946696",
  appId: "1:955436946696:web:6a51b8764f066bce7008bd",
  measurementId: "G-KW7KLYM6WJ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { firebaseApp, auth, provider, storage };
export default db;
