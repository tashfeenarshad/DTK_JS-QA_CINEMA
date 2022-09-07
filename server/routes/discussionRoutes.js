"use strict";

const router = require('express').Router();
const Discussion = require('../schema/discussionSchema.js');

router.get("/getAll", (req, res) => {

    Discussion.find({}, (err, result) => {
        if (err) res.send(err);
        res.status(200).send(result);
    });
});

router.get("/get/:id", (req, res) => {

    Discussion.findById(req.params.id, (err, result) => {
        if (err) res.send(err);
        res.status(200).send(result);
    });
});

router.post("/create", (req, res) => {
    const discussion = new Discussion(req.body);
    discussion.save().then((result) => {
        res.status(201).send(`Comment by ${result.name} added`)
    });
});

router.put("/update/:id", (req, res) => {

    Discussion.findByIdAndUpdate({_id: req.params.id}, req.body, (err, result) => {
        if (err)res.send(err);
        res.status(202).send(`Updated comment by ${req.body.name}`);
    });

});

router.delete("/delete/:id", (req, res) => {
    Discussion.findByIdAndDelete({_id: req.params.id}, (err, result) => {
        if (err)res.send(err);
        res.status(204).send(`Deleted comment with ID : ${req.params.id}`);
    });

});


module.exports = router;