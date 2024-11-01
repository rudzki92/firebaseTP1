import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJb-b9QXIaXJHLN501TC4T3saFgHfP-UA",
  authDomain: "crudzki-85362.firebaseapp.com",
  projectId: "crudzki-85362",
  storageBucket: "crudzki-85362.firebasestorage.app",
  messagingSenderId: "421106379141",
  appId: "1:421106379141:web:b95fca28a658b458f73cec",
  measurementId: "G-CGXXJQM6XX",
  databaseURL: "https://crudzki-85362-default-rtdb.firebaseio.com" 
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 
const analytics = getAnalytics(app);
export { app, database };