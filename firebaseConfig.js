// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  initializeFirestore,
  persistentLocalCache,
  persistentSingleTabManager,
  persistentMultipleTabManager,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNrDoakuvYNJd0NnctA7iRegRG5jA1kqo",
  authDomain: "my-web-wedding.firebaseapp.com",
  projectId: "my-web-wedding",
  storageBucket: "my-web-wedding.appspot.com",
  messagingSenderId: "1013958529412",
  appId: "1:1013958529412:web:468581c63d1e5022fa0dd1",
  measurementId: "G-QKFKP2EFDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentSingleTabManager() // Para un manejo de pestañas simple
    // Para multi-tab persistence, usa:
    // tabManager: persistentMultipleTabManager()
  }),
});
export {app, analytics,db};