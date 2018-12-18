const mongoose = require('mongoose');

// ***** Build Your Model Schema here *****
const videosSchema = mongoose.Schema({
    title: String,
    runTime:String,
    genre: String,
    ratings: String,
    director: String,
    status: String
})

module.exports = mongoose.model('videos', videosSchema);
