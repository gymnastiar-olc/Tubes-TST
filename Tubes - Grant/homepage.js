import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_w-U-ob1yMWwQSpV5lWN88-G0LgYFUAY",
    authDomain: "login-form-82c66.firebaseapp.com",
    projectId: "login-form-82c66",
    storageBucket: "login-form-82c66.firebasestorage.app",
    messagingSenderId: "647365571451",
    appId: "1:647365571451:web:52e7603ac03f886b4983de"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;

            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })