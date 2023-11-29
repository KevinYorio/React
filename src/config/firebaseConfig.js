
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAHNNUWndbSQLLmdAc21KcY4B8f45rtvPs",
  authDomain: "proyecto-react-d4567.firebaseapp.com",
  projectId: "proyecto-react-d4567",
  storageBucket: "proyecto-react-d4567.appspot.com",
  messagingSenderId: "493758118656",
  appId: "1:493758118656:web:5ce87551ec83c741dcd1e5"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);