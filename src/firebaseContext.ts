import { createContext } from 'react';
import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// TODO: add potentially multiple configs for addition of STG/PRD servers
let firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);
if (process.env.NODE_ENV === 'development') {
  // TODO: Use auth emulator when firebase fixes auth
  firebase.auth().useEmulator('http://localhost:9099/');
}

const gAuthProvider = new firebase.auth.GoogleAuthProvider();
gAuthProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export { firebase };

export default createContext(firebase);
