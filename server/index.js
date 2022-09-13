"use strict";

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const movie = require("./routes/movieRoutes.js");
const discussion = require("./routes/discussionRoutes.js");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/cinema", {useNewUrlParser : true}, (error) => {
    if (error) {
        console.log("Can't connect " + error);
    } else {
        console.log("Connected to cinema db");
    }
})

app.use("/movie", movie);
app.use("/discussion", discussion);



const server = app.listen(5017, () => {
    console.log(`Server port: ${server.address().port}`);
})