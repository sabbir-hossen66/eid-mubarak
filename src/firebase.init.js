// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtwbsWeStuvt4CSWqBCRX6WbMcNH8am5Q",
    authDomain: "eid-mubarak-1d722.firebaseapp.com",
    projectId: "eid-mubarak-1d722",
    storageBucket: "eid-mubarak-1d722.appspot.com",
    messagingSenderId: "991671563827",
    appId: "1:991671563827:web:ed8269341e4748ba915546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;