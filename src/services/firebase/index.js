import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuAFCryQOyxh253BUPtYNq8YGSOOJe96Q",
  authDomain: "backendecommerce-aefbb.firebaseapp.com",
  projectId: "backendecommerce-aefbb",
  storageBucket: "backendecommerce-aefbb.appspot.com",
  messagingSenderId: "910646425687",
  appId: "1:910646425687:web:96ea1e2c2548f547168b12",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
