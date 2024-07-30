// Import the required Firebase functions
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Generic function to get data from a specific path
export const getData = (path) => {
  const dataRef = ref(db, path);
  return new Promise((resolve, reject) => {
    onValue(
      dataRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

// Generic function to add new data to a specific path
export const addData = (path, newData) => {
  const dataRef = ref(db, path);
  return push(dataRef, newData);
};

// Generic function to update data at a specific path
export const updateData = (path, updatedData) => {
  const dataRef = ref(db, path);
  return set(dataRef, updatedData);
};

// Generic function to delete data at a specific path
export const deleteData = (path) => {
  const dataRef = ref(db, path);
  return remove(dataRef);
};

// Example usage:
// getData('users').then(data => console.log(data));
// addData('users', {name: 'John Doe', age: 30});
// updateData('users/-NxYz1234', {age: 31});
// deleteData('users/-NxYz1234');
