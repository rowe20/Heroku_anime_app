require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");

mongoose
.connect(process.env.MONGOURL)
.then( ()=> console.log("Mongo DB connected"));

//routes
const animeRoute = require("./routes/animeRoute");
const episodeRoute = require("./routes/episodeRoute");


app.get("/",(req,res)=> res.send("Welcome To Anime World") res.end());
app.use("/anime",animeRoute);
app.use("/episode",episodeRoute);

app.listen(port, () => console.log(`Example app listening on port 5000!`))
