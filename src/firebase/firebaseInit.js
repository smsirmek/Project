import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCBxMKZHoVI3SHD7hcZO0xxivjg8n3uTGY",
    authDomain: "project-879bc.firebaseapp.com",
    projectId: "project-879bc",
    storageBucket: "project-879bc.appspot.com",
    messagingSenderId: "14933523311",
    appId: "1:14933523311:web:7a28c4efb1be6a94f2c69a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();