////// Dependance ////////
const express = require('express');
const mysql = require('mysql');
const path = require("path");
require('dotenv').config()




// Express
const app = express();

// MySQL
var db = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE
  });
   
  db.connect((err) => {
    if (err) { throw err;}
    console.log('Connecté à la base MySQL, sportGlisse');
});

global.db = db;

// EJS
app.set('view engine', 'ejs');

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Static
app.use(express.static(path.join(__dirname, 'public')));




 
///////// Controllers //////////
// Home Page
const { homePage } = require("./controllers/homePage")
const { getCreatePage, createPlayer, getOnePlayer, getEditPage } = require("./controllers/players")




///////// Routes //////////
// Home Page
app.get("/", homePage)
// Player
app.get("/player/create", getCreatePage)
app.post("/player/create", createPlayer)
app.get("/player/:id", getOnePlayer)
app.get("/player/edit/:id", getEditPage)




//////// Serveur ////////
app.listen(3000, function(){
    console.log("Le serveur tourne sur le port 3000");
})