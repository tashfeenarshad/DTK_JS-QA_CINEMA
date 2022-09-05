"use strict";

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

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

const cinema = require("./routes/cinemaRoutes.js");

app.use("/cinema", cinema);



const server = app.listen(5015, () => {
    console.log(`Server port: ${server.address().port}`);
})