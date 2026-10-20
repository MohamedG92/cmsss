const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require('./config/db.js')
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

// autorise le front (autre origine) à appeler l'API
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello from le front, Prénom Nom")
})
app.get('/login', (req, res) => {
    res.send("Bienvenue sur la route login")
})
app.get('/sign-up', (req, res) => {
    res.send("Bienvenue sur la route sign up")
})
app.get('/api/test', (req, res) => {
    res.json({ message: "Connexion Front-Back réussie" })
})

app.listen(PORT, () => {
    connectDB();
    console.log("serveur fonctionne dans :" + PORT)

})
