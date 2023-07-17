import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOH7cI389l3njK2y_XitypPMP4v8cd1aY",
  authDomain: "ada-demo-project-57538.firebaseapp.com",
  projectId: "ada-demo-project-57538",
  storageBucket: "ada-demo-project-57538.appspot.com",
  messagingSenderId: "404516369631",
  appId: "1:404516369631:web:57c589736c8c8df2fda56a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;