const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    c_name: {
        type: String,
        required: true,
        unique: true
    },
    c_image: {
        type: String,
        required: true
    },
    c_description: {
        type: String,
        required: true
    }       
}, {
timestamps: true
});
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;