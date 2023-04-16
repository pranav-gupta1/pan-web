const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
    subjects: Array,
    gradeLevel: Number,
    description: String,
    timing: String,
    meetLink: String,
    students: Array,
    user_id: String,
    phoneNum: Number,
    reviews: Array,
    email: String,
    avgRating: Number
})


const Position = mongoose.model('Position', positionSchema);

module.exports = Position; 