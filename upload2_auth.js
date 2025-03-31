import { auth, onAuthStateChanged } from './firebase-config.js';

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in. You can access user data here.
        console.log("User is signed in:", user);
        // Continue with the upload functionality.
    } else {
        // User is signed out. Redirect to the login page.
        console.log("User is signed out.");
        window.location.href = 'login.html'; // Redirect to login
    }
});