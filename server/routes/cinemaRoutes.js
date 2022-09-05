const router = require('express').Router();
const express = require('express');
const { findById } = require('../schema/cinemaSchema.js');
const Cinema = require('../schema/cinemaSchema.js');

const app = express();


// app.use((req, res, next) => {
//     console.log("Test");
//     next();
// })

// router.get("/", (req,res) => {
//     res.status(200).send("<h1>Hello Cinemas<h1>");
// })

router.get("/getAll", (req, res) => {

    Cinema.find({}, (err, result) => {
        if (err) res.send(err);
        res.status(200).send(result);
    })
});

router.get("/get/:id", (req, res) => {

    Cinema.findById(req.params.id, (err, result) => {
        if (err) res.send(err);
        res.status(200).send(result);
    })
});

router.post("/create", (req, res) => {
    const cinema = new Cinema(req.body);
    cinema.save().then((result) => {
        res.status(201).send(`${result.name} added to the database`)
    })
})

router.put("/update/:id", (req, res) => {
    // const cinema = req.body;
    // const index = req.params.id;
    // const old = Cinema[index];
    // Cinema[index] = cinema;
    // res.send(`${old} replaced with ${cinema}`);

    Cinema.findByIdAndUpdate({_id: req.params.id}, req.body, (err, result) => {
        if (err)res.send(err);

        res.send("Updated Movie : " + req.params.id);
    })

})

router.delete("/delete/:id", (req, res) => {
    Cinema.findByIdAndDelete({_id: req.params.id}, (err, result) => {
        if (err)res.send(err);

        res.send("Deleted Movie : " + req.params.id);
    })

})


module.exports = router;