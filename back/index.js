const express = require("express");
const app = express();
const connectDB = require('./config/db.js')
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send("Hello from backend")
})
app.listen(PORT, () => {
    connectDB();
    console.log("serveur fonctionne dans :" + PORT)

})
