const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    fullName  :{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    contactNum:{
        type:String,
        required:true
    },
    courses :[{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }],
    assessments :[{
        type: Schema.Types.ObjectId,
        ref: 'Assessment'
    }]
});

module.exports = mongoose.model('Student', StudentSchema);

