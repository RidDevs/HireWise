import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { auth } from "./firebase-config.js"; // Import the auth object

document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("User signed out");
                window.location.href = "login.html"; // Redirect to login page
            })
            .catch((error) => {
                // An error happened.
                console.error("Sign out error:", error);
                alert("Sign out failed: " + error.message);
            });
    });
});