// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAj3Zg-U3a7J6MLZHit0zzNsJfn2vZ2Fy4',
  authDomain: 'encrypted-chat-applicati-a32c6.firebaseapp.com',
  projectId: 'encrypted-chat-applicati-a32c6',
  storageBucket: 'encrypted-chat-applicati-a32c6.appspot.com',
  messagingSenderId: '53342651623',
  appId: '1:53342651623:web:3406907d8e7db846494e42',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the initialized app and services
export { app, auth, db, storage };
