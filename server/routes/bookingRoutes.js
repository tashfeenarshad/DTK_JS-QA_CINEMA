"use strict";

const router = require('express').Router();
const Booking = require('../schema/bookingSchema.js');

router.get("/getAll", (req, res) => {

    try {
        Booking.find({}, (err, result) => {
            if (err) {
                res.status(500).send(err);
            }
            else if (!result) {
                res.status(404).status(`No entries found in the database`);
            }
            res.status(200).send(result);
        });
    } catch (err) {
        res.send(err);
    }
});

router.get("/get/:id", (req, res) => {

    try {
        Booking.findById(req.params.id, (err, result) => {
            if (err) {
                res.status(500).send(err);
            }
            else if (!result) {
                res.status(404).send(`No entry with ID ${req.params.id} found`);
            }
            res.status(200).send(result);
        });
    } catch (err) {
        res.send(err);
    }
});

router.post("/create", (req, res) => {
    try {
        const booking = new Booking(req.body);
        booking.save().then((err, result) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(201).send(result)
        });
    } catch (err) {
        res.send(err);
    }
});


module.exports = router;