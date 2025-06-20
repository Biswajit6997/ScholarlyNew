//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
//  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
//  import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
 
// const firebaseConfig = {
//   apiKey: "AIzaSyCcoC5NngDO6esJdOEdkbUzrxc5YNAYqqU",
//   authDomain: "scholary-9e628.firebaseapp.com",
//   projectId: "scholary-9e628",
//   storageBucket: "scholary-9e628.firebasestorage.app",
//   messagingSenderId: "535194024420",
//   appId: "1:535194024420:web:edd3f270880153d52eaff1"
// };
//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);

//  function showMessage(message, divId){
//     var messageDiv=document.getElementById(divId);
//     messageDiv.style.display="block";
//     messageDiv.innerHTML=message;
//     messageDiv.style.opacity=1;
//     setTimeout(function(){
//         messageDiv.style.opacity=0;
//     },5000);
//  }
//  const signUp=document.getElementById('submitSignUp');
//  signUp.addEventListener('click', (event)=>{
//     event.preventDefault();
//     const email=document.getElementById('rEmail').value;
//     const password=document.getElementById('rPassword').value;
//     const firstName=document.getElementById('fName').value;
//     const lastName=document.getElementById('lName').value;

//     const auth=getAuth();
//     const db=getFirestore();

//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential)=>{
//         const user=userCredential.user;
//         const userData={
//             email: email,
//             firstName: firstName,
//             lastName:lastName
//         };
//         showMessage('Account Created Successfully ,, You can login Now', 'signUpMessage');
//         const docRef=doc(db, "users", user.uid);
//         setDoc(docRef,userData)
//         .then(()=>{
//             window.location.href='index.html';
//         })
//         .catch((error)=>{
//             console.error("error writing document", error);

//         });
//     })
//     .catch((error)=>{
//         const errorCode=error.code;
//         if(errorCode=='auth/email-already-in-use'){
//             showMessage('Email Address Already Exists !!!', 'signUpMessage');
//         }
//         else{
//             showMessage('unable to create User', 'signUpMessage');
//         }
//     })
//  });

//  const signIn=document.getElementById('submitSignIn');
//  signIn.addEventListener('click', (event)=>{
//     event.preventDefault();
//     const email=document.getElementById('email').value;
//     const password=document.getElementById('password').value;
//     const auth=getAuth();

//     signInWithEmailAndPassword(auth, email,password)
//     .then((userCredential)=>{
//         showMessage('login is successful', 'signInMessage');
//         const user=userCredential.user;
//         localStorage.setItem('loggedInUserId', user.uid);
//         window.location.href='finalpage.html';//
//     })
//     .catch((error)=>{
//         const errorCode=error.code;
//         if(errorCode==='auth/invalid-credential'){
//             showMessage('Incorrect Email or Password', 'signInMessage');
//         }
//         else{
//             showMessage('Account does not Exist', 'signInMessage');
//         }
//     })
//  })



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyCcoC5NngDO6esJdOEdkbUzrxc5YNAYqqU",
//     authDomain: "scholary-9e628.firebaseapp.com",
//     projectId: "scholary-9e628",
//     storageBucket: "scholary-9e628.firebasestorage.app",
//     messagingSenderId: "535194024420",
//     appId: "1:535194024420:web:edd3f270880153d52eaff1"
// };
 const firebaseConfig = {
    apiKey: "AIzaSyBTZRMEhqIJh11ZrzkU06HCcADcO--inMI",
    authDomain: "scholarly-f9fb4.firebaseapp.com",
    projectId: "scholarly-f9fb4",
    storageBucket: "scholarly-f9fb4.firebasestorage.app",
    messagingSenderId: "500752465256",
    appId: "1:500752465256:web:9f2e94eb3e0426bbbcaadd"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showMessage(message, divId) {
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function() {
        messageDiv.style.opacity = 0;
    }, 5000);
}

const signUp = document.getElementById('submitSignUp');
signUp.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                email: email,
                firstName: firstName,
                lastName: lastName
            };
            showMessage('Account Created Successfully, You can login Now', 'signUpMessage');
            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData)
                .then(() => {
                    window.location.href = 'index.html';
                })
                .catch((error) => {
                    console.error("error writing document", error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/email-already-in-use') {
                showMessage('Email Address Already Exists !!!', 'signUpMessage');
            } else {
                showMessage('Unable to create User', 'signUpMessage');
            }
        });
});

const signIn = document.getElementById('submitSignIn');
signIn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            showMessage('Login is successful', 'signInMessage');
            const user = userCredential.user;
            localStorage.setItem('loggedInUserId', user.uid);
            // window.location.href = 'finalpage.html';
            window.location.href = 'http://localhost:8501';
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/invalid-credential') {
                showMessage('Incorrect Email or Password', 'signInMessage');
            } else {
                showMessage('Account does not Exist', 'signInMessage');
            }
        });
});

// Google Login for Sign Up
const googleSignUpButton = document.querySelector('#signup .fab.fa-google');
googleSignUpButton.addEventListener('click', () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const db = getFirestore();

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            showMessage('Signed up with Google successfully!', 'signUpMessage');

            // Store user data in Firestore
            const userData = {
                email: user.email,
                firstName: user.displayName ? user.displayName.split(' ')[0] : '', // Attempt to get first name
                lastName: user.displayName ? user.displayName.split(' ').slice(1).join(' ') : '' // Attempt to get last name
            };
            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData, { merge: true }) // Use merge: true to avoid overwriting existing data if the user logs in again
                .then(() => {
                    window.location.href = 'index.html'; // Or 'finalpage.html' depending on your flow
                })
                .catch((error) => {
                    console.error("Error writing Google user data to Firestore:", error);
                });

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Google Sign Up Error:", errorCode, errorMessage);
            if (errorCode === 'auth/popup-closed-by-user') {
                showMessage('Google sign-up cancelled.', 'signUpMessage');
            } else if (errorCode === 'auth/cancelled-popup-request') {
                showMessage('Another Google sign-up request is pending.', 'signUpMessage');
            } else {
                showMessage(`Google sign-up failed: ${errorMessage}`, 'signUpMessage');
            }
        });
});

// Google Login for Sign In
const googleSignInButton = document.querySelector('#signIn .fab.fa-google');
googleSignInButton.addEventListener('click', () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            const user = result.user;
            showMessage('Signed in with Google successfully!', 'signInMessage');
            localStorage.setItem('loggedInUserId', user.uid);
            // window.location.href = 'finalpage.html';
            window.location.href = 'http://localhost:8501';
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Google Sign In Error:", errorCode, errorMessage);
            if (errorCode === 'auth/popup-closed-by-user') {
                showMessage('Google sign-in cancelled.', 'signInMessage');
            } else if (errorCode === 'auth/cancelled-popup-request') {
                showMessage('Another Google sign-in request is pending.', 'signInMessage');
            } else {
                showMessage(`Google sign-in failed: ${errorMessage}`, 'signInMessage');
            }
        });
});