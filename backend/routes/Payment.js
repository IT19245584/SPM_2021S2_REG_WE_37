const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Payment = new Schema({
    accNo:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    expiryDate:{
        type:Date,
        required:true
    },
    cvc:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const Payment__Schema = mongoose.model('Payment__Schema',Payment);
module.exports = Payment__Schema;