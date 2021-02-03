const express = require('express')
const firebase = require("firebase/app");
require("firebase/auth");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



const app = express()



const users = []

app.get('/users',(req,res) => {
    res.json(users)
})

app.listen(3000, () => {
    console.log('Server Started on 3000')
})