const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Laptop = new Schema({
    name:{ type : String },
    price: {type: Number},
    specs: String,
    image_url : String,
    slug : String,
    brand: String,
    rating: Number,
    total_ratings:  Number
});

module.exports = mongoose.model('Laptop', Laptop); // ("a", b)
// b la Course
// a la model name convert thanh dang chu thuong, cach nhau thanh gach duoi