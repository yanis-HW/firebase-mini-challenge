import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

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

document.getElementById("register").onclick = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Compte créé !");
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    })
    .catch((error) => {
      alert(error.message);
    });
};

document.getElementById("login").onclick = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    })
    .catch((error) => {
      alert(error.message);
    });
};

document.getElementById("logout").onclick = () => {
  signOut(auth);
};

function updateInterface(user) {
  const authSection = document.getElementById("auth-section");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");
  const logoutBtn = document.getElementById("logout");
  const emailButton = document.getElementById("email");
  const passwordButton = document.getElementById("password");

  if (user) {
    authSection.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    authSection.style.display = "block";
    registerBtn.style.display = "inline-block";
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }
}

onAuthStateChanged(auth, (user) => {
  updateInterface(user);
});
