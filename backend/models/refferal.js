const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refreral_Schema = new Schema({
    userId: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
}, {
timestamps: true
});
const refreral_codes = mongoose.model('refreral_codes', refreral_Schema);
module.exports = refreral_codes;