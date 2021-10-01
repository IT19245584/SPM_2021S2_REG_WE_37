const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    s_name: {
        type: String,
        required: true,
        unique: true
    },
    s_comment: {
        type: String,
        required: true
    },
    s_rating: {
        type: String,
        required: true
    }        
}, {
timestamps: true
});
const Comment_lesson = mongoose.model('Comment_lesson', commentSchema);
module.exports = Comment_lesson;