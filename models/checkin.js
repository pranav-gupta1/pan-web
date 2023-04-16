const mongoose = require('mongoose');

const checkinSchema = new mongoose.Schema({
    week: Number,
    user_id: String,
    emotion: Array,
    happy: Number,
    notes: String
})


const Checkin = mongoose.model('Checkin', checkinSchema);

module.exports = Checkin; 