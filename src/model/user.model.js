const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        },
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

    refreshToken: { type: String },

    verified: { type: Boolean, default: false },
})

module.exports = mongoose.model('User', userSchema)