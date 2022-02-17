import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBlzkDK-AqBWnDf79hQ8LIdUtKU3ozgpWE',
  authDomain: 'facebook-clone-e8585.firebaseapp.com',
  projectId: 'facebook-clone-e8585',
  storageBucket: 'facebook-clone-e8585.appspot.com',
  messagingSenderId: '74045684581',
  appId: '1:74045684581:web:cd6e40d71cef4079083f8c',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
