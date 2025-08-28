import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyARiSGqqkBpiFqIk8uKDOTDxu-MX8K-EJY",
  authDomain: "first-project-d87d4.firebaseapp.com",
  projectId: "first-project-d87d4",
  storageBucket: "first-project-d87d4.firebasestorage.app",
  messagingSenderId: "422501131556",
  appId: "1:422501131556:web:c4e2cd2f974a8b441c3fb1",
  measurementId: "G-CLLEGM8LGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);   
export default app;