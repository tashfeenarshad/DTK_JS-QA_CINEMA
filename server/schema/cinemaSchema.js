const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const genreSchema = new Schema({
//     flying : Boolean,
//     xray : Boolean,
//     super : {
//         superStrength : Boolean,
//         superSpeed : Boolean
//     }
// })

const cinemaSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    airTime : String,
    genre : {
        action: Boolean,
        comedy : Boolean,
        horror : Boolean,
        romance : Boolean

    }

})

module.exports = mongoose.model('Cinema', cinemaSchema);