const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Profile = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const Technical_Committee_Schema = mongoose.model('Technical_Committee_Schema',Profile);
module.exports = Technical_Committee_Schema;