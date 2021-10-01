const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    l_name: {
        type: String,
        required: true,
        unique: true
    },
    lecturer: {
        type: String,
        required: true
    },
    l_image: {
        type: String,
        required: true
    },
    lesson_content: {
        type: String,
        required: true
    },
    l_video: {
        type: String,
        required: true
    },
    l_description: {
        type: String,
        required: true
    }
    
}, {
timestamps: true
});
const Lesson = mongoose.model('Lesson', LessonSchema);
module.exports = Lesson;