"use strict";

const router = require('express').Router();
const Movie = require('../schema/movieSchema.js');


router.get("/getAll", (req, res) => {

    try {
        Movie.find({}, (err, result) => {
            if (err) {
                res.status(500).send(err);
            }
            else if (!result) {
                res.status(404).send(`No entries found in the database`);
            }
            res.status(200).send(result);
        });
    } catch (err) {
        res.send(err);
    }
});

router.get("/getAllCurrent", (req, res) => {

    try {
        Movie.find({ released: { $lte: new Date() } }, (err, result) => {
            if (err) {
                res.status(500).send(err);
            }
            else if (!result) {
                res.status(404).send(`No entries with Date value lower than current`);
            }
            res.status(200).send(result);
        })
    } catch (err) {
        res.send(err);
    }

});

router.get("/getAllNew", (req, res) => {

    try {
        Movie.find({ released: { $gt: new Date() } }, (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else if (!result) {
                res.status(404).send(`No entries with Date value higher than current`);
            }
            res.status(200).send(result);
        })
    } catch (err) {
        res.send(err);
    }

});

router.get("/get/:id", (req, res) => {

    try {
        Movie.findById(req.params.id, (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else if (!result) {
                res.status(404).send(`No entries with ID ${req.params.id} found`);
            }
            res.status(200).send(result);
        });
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;