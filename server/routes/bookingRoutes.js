"use strict";

const router = require('express').Router();
const Booking = require('../schema/bookingSchema.js');


router.get("/getAll", (req, res) => {

    
    Booking.find({}, (err, result) => {
        if (err) 
            res.status(500).send(err);
        
        else if (!result.length) 
            res.status(404).send(`No entries found in the database`);
        else
        res.status(200).send(result);
    });

});

router.get("/get/:id", (req, res) => {

    Booking.find({}, (err, result) => {
        if (err) 
            res.status(500).send(err);
        
        else if (!result.length) 
            res.status(404).send(`No entries found in the database`);
        else
        res.status(200).send(result);
    });
});

router.post("/create", (req, res) => {
        const booking = new Booking(req.body);
        booking.save().then((result) => {
            res.status(201).send(result)
        });
});


module.exports = router;