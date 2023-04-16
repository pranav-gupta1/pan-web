const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    },
    name: String,
    email: String,
    age: Number,
    classes: Array,   
    phoneNum: Number,
    bio: String,
    interests: Array,
})

const orgProfile = mongoose.model('orgProfile', userSchema);

module.exports = orgProfile; 