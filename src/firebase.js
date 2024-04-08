import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAiTTiINt_nBEV07QfBxRBHojTy5NcW598",
    authDomain: "drive-6b31f.firebaseapp.com",
    projectId: "drive-6b31f",
    storageBucket: "drive-6b31f.appspot.com",
    messagingSenderId: "343625060744",
    appId: "1:343625060744:web:37e6805cb5421866bdaa3d",
    measurementId: "G-Y93NY353QG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { db, storage, auth, provider}