"use strict";

const router = require('express').Router();
const Movie = require('../schema/movieSchema.js');


router.get("/getAll", (req, res) => {

    Movie.find({}, (err, result) => {
        if (err) res.send(err);
        res.status(200).send(result);
    });
});

router.get("/get/:id", (req, res) => {

    Movie.findById(req.params.id, (err, result) => {
        if (err) res.send(err);
        res.status(200).send(result);
    });
});

router.post("/create", (req, res) => {
    const movie = new Movie(req.body);
    movie.save().then((result) => {
        res.status(201).send(`${result.title} added to the database`)
    });
});

router.put("/update/:id", (req, res) => {

    Movie.findByIdAndUpdate({_id: req.params.id}, req.body, (err, result) => {
        if (err)res.send(err);
        res.status(202).send(`Updated Movie ${req.body.title}`);
    });

});

router.delete("/delete/:id", (req, res) => {
    Movie.findByIdAndDelete({_id: req.params.id}, (err, result) => {
        if (err)res.send(err);
        res.status(204).send(`Deleted Movie with ID : ${req.params.id}`);
    });

});


module.exports = router;