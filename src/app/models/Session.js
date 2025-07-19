const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Session = new Schema({
    sessionId : {type : String, required : true},
    userId : {type: String, required: true},
    deviceInfo : {type : String}


}, {timestamps : true})

module.exports = mongoose.model('Session', Session);