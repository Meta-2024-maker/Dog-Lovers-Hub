// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUI8vdPKxO5ph40yP1cX5j_2bxGmE2XQo",
    authDomain: "dog-lovers-hub.firebaseapp.com",
    projectId: "dog-lovers-hub",
    storageBucket: "dog-lovers-hub.firebasestorage.app",
    messagingSenderId: "190630856908",
    appId: "1:190630856908:web:434ef2262d134092c55a69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// submit button
const submit = document.getElementById('submit-input');
submit.addEventListener("click", function (event) {
    event.preventDefault()

    //inputs
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Loggin In...")
            window.location.href="menu.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})