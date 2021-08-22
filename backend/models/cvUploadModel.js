const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CvUploadSchema = new Schema({
    username: {
        type: String,
        required : true
    },
    qualification: {
        type: String,
        required : true
    },
    experience: {
        type: String,
        required : true
    },
    course: {
        type: String,
        required : true
    },
    file_name: {
        type: String,
        required : true
    },
    file_url: {
        type: String,
        required : true
    },
    file_ext: {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('CvUpload', CvUploadSchema);