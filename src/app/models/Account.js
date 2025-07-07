const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    username: {type : String, required: true, minlength : 8, maxlength : 30, trim : true },
    password: { type : String, required : true,minlength : 8, maxlength :64, trim : true}
}, {timestamps : true});

module.exports = mongoose.model('Account', Account);