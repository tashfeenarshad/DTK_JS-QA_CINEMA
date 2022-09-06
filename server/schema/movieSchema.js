const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showtimeSchema = new Schema({
    days : [String],
    times : [String]
})

const movieSchema = new Schema({

    title: {
        type : String,
        required : true
    },
    year: {
        type : String,
        required : true
    },
    rated: {
        type : String,
        required : true
    },
    released: {
        type : String,
        required : true
    },
    runtime: {
        type : String,
        required : true
    },
    genre: {
        type : String,
        required : true
    },
    director: {        
        type : String,
        required : true},
    actors: {
        type : String,
        required : true
    },
    plot: {
        type : String,
        required : true
    },
    poster: {
        type : String,
        required : true
    },
    showtime : [showtimeSchema]

})

module.exports = mongoose.model('Movie', movieSchema);