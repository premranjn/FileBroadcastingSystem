// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3uBQQjemaS87oKxxZXuk8ZKB59OeqQeU",
  authDomain: "react-auth-1c49e.firebaseapp.com",
  projectId: "react-auth-1c49e",
  storageBucket: "react-auth-1c49e.appspot.com",
  messagingSenderId: "237217792286",
  appId: "1:237217792286:web:43c5b48719d6b1da84c90f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const reference = ref(db, 'users/' + userId);
export const auth = getAuth(app);
export default app;