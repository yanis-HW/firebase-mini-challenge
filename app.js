import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

console.log("Hello Firebase!");
const firebaseConfig = {
  apiKey: "AIzaSyAKTpZBXfQXgzXyy3LT4fEMhJUeREoJCCw",
  authDomain: "fir-mini-challenge-be7e5.firebaseapp.com",
  projectId: "fir-mini-challenge-be7e5",
  storageBucket: "fir-mini-challenge-be7e5.firebasestorage.app",
  messagingSenderId: "19865812685",
  appId: "1:19865812685:web:05e4283a1725d93bd5b384",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log("Signed in as:", user.email);
    })
    .catch((error) => {
      console.error("Sign in error:", error.message);
    });
}

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      console.log("Signed up as:", user.email);
    })
    .catch((error) => {
      console.error("Sign up error:", error.message);
    });
}

function signOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
