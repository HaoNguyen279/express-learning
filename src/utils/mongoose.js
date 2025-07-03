module.exports = {
    multipleMongooseToObject: (mongooseArrays) => {
        return mongooseArrays.map(mongooseArrays => mongooseArrays.toObject());
    },
    mongooseToObject : (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}