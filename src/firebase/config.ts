import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAyVeOHXVqSMNn0XW9G5dH17u_CBixW7HE",
  authDomain: "test-3a5ee.firebaseapp.com",
  databaseURL: "https://test-3a5ee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-3a5ee",
  storageBucket: "test-3a5ee.appspot.com",
  messagingSenderId: "1016110405826",
  appId: "1:1016110405826:web:e97a8598bde3493c0d435b"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
