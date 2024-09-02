// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClvc6wiSQGCw9gZH1g7ZmMfJtETs0O65A",
  authDomain: "ecommerce-nextjs-55923.firebaseapp.com",
  projectId: "ecommerce-nextjs-55923",
  storageBucket: "ecommerce-nextjs-55923.appspot.com",
  messagingSenderId: "612115529159",
  appId: "1:612115529159:web:606a20158d72c712872de2",
  measurementId: "G-SP829QJRGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {
    app,
    db,
    storage,
    auth
}