import { auth, onAuthStateChanged } from './firebase-config.js'; 

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in:", user);
    } else {    
        console.log("User is signed out.");
        window.location.href = 'login.html'; 
    }
});