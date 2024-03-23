const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    assembly: {
        type: String,
        required: true
    },
    constituency: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    panchayath: {
        type: String,
        required: true
    },
    municipality: {
        type: String,
        required: true
    },
    corporation: {
        type: String,
        required: true
    }
});

// Create model
const User = mongoose.model('UserData', userSchema);

module.exports = User;
