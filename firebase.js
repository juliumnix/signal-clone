import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASykumATYbTn2hjGslQOE5zkaAWuON5Kg",
  authDomain: "signal-clone-cf996.firebaseapp.com",
  projectId: "signal-clone-cf996",
  storageBucket: "signal-clone-cf996.appspot.com",
  messagingSenderId: "448354892892",
  appId: "1:448354892892:web:6d4174efeafe31e27f3a99"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
else{
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth};