const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: Number
})

module.exports = mongoose.model('Review', reviewSchema);