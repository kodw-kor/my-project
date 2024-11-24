import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRrwzjzrgryQvpI0r7RnRfQJKixFzlj_o",
  authDomain: "my-project-426e6.firebaseapp.com",
  projectId: "my-project-426e6",
  storageBucket: "my-project-426e6.firebasestorage.app",
  messagingSenderId: "790239078795",
  appId: "1:790239078795:web:294dc5283b7bb1a8c5278e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
