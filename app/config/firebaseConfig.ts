// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"; // Optional if you use Firestore

const firebaseConfig = {
  apiKey: "",
  authDomain: "attendoapp-527ee.firebaseapp.com",
  projectId: "attendoapp-527ee",
  storageBucket: "attendoapp-527ee.appspot.com",
  messagingSenderId: "77534049470",
  appId: "1:77534049470:web:c373833a9421ff70575aef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth
export const auth = getAuth(app);

// Optionally export Firestore
// export const db = getFirestore(app);
