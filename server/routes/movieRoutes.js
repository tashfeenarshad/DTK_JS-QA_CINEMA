"use strict";

const router = require('express').Router();
const Movie = require('../schema/movieSchema.js');


router.get("/getAll", (req, res) => {

    
        Movie.find({}, (err, result) => {
            if (err) 
                res.status(500).send(err);
            
            else if (!result.length) 
                res.status(404).send(`No entries found in the database`);
            else
            res.status(200).send(result);
        });
    
});

router.get("/getAllCurrent", (req, res) => {

    Movie.find({}, (err, result) => {
        if (err) 
            res.status(500).send(err);
        
        else if (!result.length) 
            res.status(404).send(`No entries found in the database`);
        else
        res.status(200).send(result);
    });

});

router.get("/getAllNew", (req, res) => {

    Movie.find({}, (err, result) => {
        if (err) 
            res.status(500).send(err);
        
        else if (!result.length) 
            res.status(404).send(`No entries found in the database`);
        else
        res.status(200).send(result);
    });

});

router.get("/get/:id", (req, res) => {

    Movie.find({}, (err, result) => {
        if (err) 
            res.status(500).send(err);
        
        else if (!result.length) 
            res.status(404).send(`No entries found in the database`);
        else
        res.status(200).send(result);
    });
});

module.exports = router;