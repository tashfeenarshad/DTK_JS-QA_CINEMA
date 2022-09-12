"use strict";

const router = require('express').Router();
const Discussion = require('../schema/discussionSchema.js');

router.get("/getAll", (req, res) => {

    try {
        Discussion.find({}, (err, result) => {
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

router.get("/get/:id", (req, res) => {


    try {
        Discussion.findById(req.params.id, (err, result) => {
            if (err) {
                res.status(500).send(err);
            }
            else if (!result) {
                res.status(404).send(`No entry wiht ID ${req.params.id} found`);
            }
            res.status(200).send(result);
        });
    } catch (err) {
        res.send(err);
    }


});

router.post("/create", (req, res) => {
    try {
        const discussion = new Discussion(req.body);
        discussion.save().then((result) => {
            res.status(201).send(`Comment by ${result.name} added`)
        });
    } catch (err) {
        res.send(err);
    }
});


module.exports = router;