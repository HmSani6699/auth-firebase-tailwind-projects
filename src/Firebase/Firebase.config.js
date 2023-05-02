// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcNamF8vSKlBTt8ICpQ5X3Fo8eCNpV9Wc",
  authDomain: "auth-firebase-tailwind-project.firebaseapp.com",
  projectId: "auth-firebase-tailwind-project",
  storageBucket: "auth-firebase-tailwind-project.appspot.com",
  messagingSenderId: "434437086312",
  appId: "1:434437086312:web:9ca15e5808ff75886f6fdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;