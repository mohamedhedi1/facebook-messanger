import firebase from 'firebase';
const firebaseApp=firebase.initializeApp({
apiKey: "AIzaSyAE4uKB683gKEVlK18VlqAoIkaoinom8YA",
authDomain: "fbook-messenger.firebaseapp.com",
projectId: "fbook-messenger",
storageBucket: "fbook-messenger.appspot.com",
messagingSenderId: "5507325705",
appId: "1:5507325705:web:7772099fde883a7e327dd8",
measurementId: "G-5HYP4FLQG1"});

const db=firebaseApp.firestore();
export default db;
   
  