// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaanHJP8SeQoaufJrpf8g_AwcXJj7TQjg",
  authDomain: "backend-restaurant-c4.firebaseapp.com",
  projectId: "backend-restaurant-c4",
  storageBucket: "backend-restaurant-c4.appspot.com",
  messagingSenderId: "96782494285",
  appId: "1:96782494285:web:665ec720b557808e6e8a04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//* especificamos los servicios que queremos ocupar

export const db = getFirestore(app);  //? FIRESTORE DATABASE