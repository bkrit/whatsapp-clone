import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwbJF9-Bi23UhZsWyzEoiTZZiHgAaGMv8",
  authDomain: "whatsapp-clone-bc149.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-bc149.firebaseio.com",
  projectId: "whatsapp-clone-bc149",
  storageBucket: "whatsapp-clone-bc149.appspot.com",
  messagingSenderId: "467660475291",
  appId: "1:467660475291:web:8712eee28e92cefbcc2f3e"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
