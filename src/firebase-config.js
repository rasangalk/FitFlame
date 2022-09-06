import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQjTuO2Wbmz77Tq9ekyhHl6jd9RW_mEcw",
  authDomain: "fitflame-82992.firebaseapp.com",
  projectId: "fitflame-82992",
  storageBucket: "fitflame-82992.appspot.com",
  messagingSenderId: "1091559323626",
  appId: "1:1091559323626:web:d903f7529d799cbd1ca493",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
