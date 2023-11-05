const firebaseConfig = {
    apiKey: "AIzaSyCm83scGMDqUuUVmuOAeftoMl6OovGvKls",
    authDomain: "kwitter-39f19.firebaseapp.com",
    databaseURL: "https://kwitter-39f19-default-rtdb.firebaseio.com",
    projectId: "kwitter-39f19",
    storageBucket: "kwitter-39f19.appspot.com",
    messagingSenderId: "1026702277277",
    appId: "1:1026702277277:web:8e46f1005144f0d51bb274",
    measurementId: "G-DRY4GFG1K5"
  };
  
  // Initialize Firebase
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
