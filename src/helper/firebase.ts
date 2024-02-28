// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9dyaHoUFvHiLQXWvZ0UUhUQwe9yU-LGc",
  authDomain: "weronika-kogut-aad.firebaseapp.com",
  databaseURL:
    "https://weronika-kogut-aad-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "weronika-kogut-aad",
  storageBucket: "weronika-kogut-aad.appspot.com",
  messagingSenderId: "599510589800",
  appId: "1:599510589800:web:890c76794561327f6e36dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);

export const login = async (user: string, password: string) => {
  await signInWithEmailAndPassword(auth, user, password);
};

export const logout = async () => {
  await signOut(auth);
};
