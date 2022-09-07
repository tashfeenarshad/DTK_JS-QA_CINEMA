"use strict";

const router = require('express').Router();
const Booking = require('../schema/bookingSchema.js');

router.get("/getAll", (req, res) => {

    Booking.find({}, (err, result) => {
        if (err) res.send(err);
        res.status(200).send(result);
    });
});

router.get("/get/:id", (req, res) => {

    Booking.findById(req.params.id, (err, result) => {
        if (err) res.send(err);
        res.status(200).send(result);
    });
});

router.post("/create", (req, res) => {
    const booking = new Booking(req.body);
    booking.save().then((result) => {
        res.status(201).send(result)
    });
});

router.put("/update/:id", (req, res) => {

    Booking.findByIdAndUpdate({_id: req.params.id}, req.body, (err, result) => {
        if (err)res.send(err);
        res.status(202).send(`Updated Booking ${req.body.title}`);
    });

});

router.delete("/delete/:id", (req, res) => {
    Booking.findByIdAndDelete({_id: req.params.id}, (err, result) => {
        if (err)res.send(err);
        res.status(204).send(`Deleted Booking with ID : ${req.params.id}`);
    });

});


module.exports = router;