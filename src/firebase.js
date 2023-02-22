import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCwPqe-D__H4sCEGTzCPVDMfrXadjDYqTM",
  authDomain: "trello-board-clone-9e946.firebaseapp.com",
  projectId: "trello-board-clone-9e946",
  storageBucket: "trello-board-clone-9e946.appspot.com",
  messagingSenderId: "469990568527",
  appId: "1:469990568527:web:b061b276f1bd73cf5c703a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const timestamp = serverTimestamp();

export { app, db, timestamp };
