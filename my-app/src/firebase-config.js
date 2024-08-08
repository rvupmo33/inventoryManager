import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARlhwjiwpmgfEex-PFNf6Juqbh0VARQ8I",
  authDomain: "inventorymanager-aaaee.firebaseapp.com",
  projectId: "inventorymanager-aaaee",
  storageBucket: "inventorymanager-aaaee.appspot.com",
  messagingSenderId: "777526358656",
  appId: "1:777526358656:web:b2cff9a50ddd452501ac65",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
