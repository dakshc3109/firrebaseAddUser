 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB9nROKGTJvd-1RII5F7l0_8bOs4Ac96DY",
    authDomain: "kwitter-78fce.firebaseapp.com",
    databaseURL: "https://kwitter-78fce-default-rtdb.firebaseio.com",
    projectId: "kwitter-78fce",
    storageBucket: "kwitter-78fce.appspot.com",
    messagingSenderId: "445873111626",
    appId: "1:445873111626:web:fe7a7f9bcf9bafd7e71cb3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    var user_name =  document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "Add user"
    });
}