import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC_ALV70359mI_tMMsz2s19VS1mp0cb12g",
    authDomain: "linkedin-clone-c2f2f.firebaseapp.com",
    projectId: "linkedin-clone-c2f2f",
    storageBucket: "linkedin-clone-c2f2f.appspot.com",
    messagingSenderId: "351558053640",
    appId: "1:351558053640:web:7e1ec4af656c48678086bd",
    measurementId: "G-1R2ZRSEP18"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export  { auth, provider, storage };
export default db;
