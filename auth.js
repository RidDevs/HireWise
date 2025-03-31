import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";


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
    const dashboardLink = document.getElementById("dashboardLink");
    const profileLink = document.getElementById("profileLink");

    function checkAuth(event, redirectUrl) {
        event.preventDefault(); 
        onAuthStateChanged(auth, (user) => {
            if (user) {
                window.location.href = redirectUrl;
            } else {     
                alert("Please login to access this page.");
                window.location.href = "login.html";
            }
        });
    }

    dashboardLink.addEventListener("click", (event) => {
        checkAuth(event, "dashboard.html");
    });

    profileLink.addEventListener("click", (event) => {
        checkAuth(event, "profile.html");
    });

    if(window.location.pathname.includes('dashboard.html') || window.location.pathname.includes('profile.html')){
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          window.location.href = "login.html";
        }
      });
    }

});