// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcoUnguCQqmq9knT7w7w2rfST0Ml7_DZA",
  authDomain: "fir-auth-login-sim.firebaseapp.com",
  projectId: "fir-auth-login-sim",
  storageBucket: "fir-auth-login-sim.appspot.com",
  messagingSenderId: "973406060983",
  appId: "1:973406060983:web:dbd0c57ae19f857b612832",
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
