import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4BES5eJ7O594V9xSgzT2MleQW8R0MnZs",
  authDomain: "tiktok---jornada-dev-9b01a.firebaseapp.com",
  projectId: "tiktok---jornada-dev-9b01a",
  storageBucket: "tiktok---jornada-dev-9b01a.appspot.com",
  messagingSenderId: "193973989564",
  appId: "1:193973989564:web:374b496826107c02c320b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;