const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    laptopid: String,
    amount: Number
});
const Feedback = new Schema({
    title : String,
    content: String,
});
const User = new Schema({
    email: {type: String, required : true,minlength: 1, maxlength : 64, trim : true},
    password : {type : String, required : true, minlength: 8, maxlength: 64, trim : true},
    displayName : {type : String, required : true, minLength : 4, maxlength: 64, trim : true},
    memberShip : String,
    cart : [Item],
    reviews : [Feedback]
}, {timestamps: true});

module.exports = mongoose.model('User', User);