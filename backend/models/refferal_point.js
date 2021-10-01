const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refreral_points_Schema = new Schema({
    code: {
        type: String,
        required: true
    },
    point: {
        type: String,
        required: true
    },
}, {
timestamps: true
});
const refreral_points_Schema = mongoose.model('refreral_points', refreral_points_Schema);
module.exports = refreral_points_Schema;