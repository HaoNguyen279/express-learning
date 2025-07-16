const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    laptopid: String,
    amount: Number
});
const Review = new Schema({
    title : String,
    content: String,
})
const User = new Schema({
    userid: String,
    username : String,
    user_display_name : String,
    cart : [Item],
    memberShip : String,


});

module.exports = mongoose.model('User', User);