import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js"; 

const firebaseConfig = {
    apiKey: "AIzaSyBtRpcHlXxixH52I0BCKOsgtKu34Uefadc", 
    authDomain: "hirewise-d9b7d.firebaseapp.com",
    projectId: "hirewise-d9b7d",
    storageBucket: "hirewise-d9b7d.firebasestorage.app",
    messagingSenderId: "993492358089",
    appId: "1:993492358089:web:f7e66365c427fa7c864e18",
    measurementId: "G-G4W1YG528M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.querySelector("form"); 

    registrationForm.addEventListener("submit", async (event) => {
        event.preventDefault(); 

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value; 
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm_password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: username
            });
            console.log("User registered:", user);
            alert("Registration successful!");

            window.location.href = "login.html";
        } catch (error) {
            console.error("Registration failed:", error);
            alert("Registration failed: " + error.message);
        }
    });
});