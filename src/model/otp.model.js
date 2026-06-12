// const mongoose = require("mongoose")

// const otpSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: [true, "Email is required"],
//         lowercase: true,  // ← auto normalizes email on save
//         trim: true
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "users",
//         required: [true, "User is required"]
//     },
//     otpHash: {
//         type: String,
//         required: [true, "OTP hash is required"]
//     },
//     expiresAt: {
//         type: Date,
//         default: () => new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
//     }
// }, {
//     timestamps: true
// })

// const otpModel = mongoose.model("otps", otpSchema)
// module.exports = otpModel






const mongoose = require('mongoose');

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
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  refreshToken: { type: String },

  verified: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
