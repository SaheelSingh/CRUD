const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
    sportman: {
        type: String,
        require: true
    },
    sport: {
        type: String,
        require: true
    }
})

const Sport = mongoose.model('sport', sportSchema);
module.exports = Sport;