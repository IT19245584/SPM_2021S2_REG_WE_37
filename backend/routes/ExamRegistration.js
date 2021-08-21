const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExamRegistration = new Schema({
    regNo:{
        type:String,
        required:true
    },
    lesson:{
        type:String,
        required:true
    },
    examDate:{
        type:Date,
        required:true
    },
    session:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    paymentStatus:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const Exam_Registration_Schema = mongoose.model('Exam_Registration_Schema',ExamRegistration);
module.exports = Exam_Registration_Schema;