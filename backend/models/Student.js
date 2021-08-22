const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentRegSchema = new Schema({
    username: {
    type: String,
    required: true,
    unique: true
    },
    password: {
    type: String,
    required: true
    },
    email: {
    type: String,
    required: true,
    unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
        },
    address: {
    type: String
    },
}, {
timestamps: true
});
const student = mongoose.model('student_reg', studentRegSchema);
module.exports = student;