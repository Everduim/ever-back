//const ////mongoose   = r//equire('mongoose')

//const ////Schema = mongoose.Schema;

// const ///productSchema = new Schema({
//     //product: {  type: String, require: true },
//     //image:{type: String, require: true },
//     //info:{type: Number, require: true },
//     //price:{type: Number, require: true },
// },
// { //timestamps: true }
// );

// const products = mongoose.model("roduct", productSchema);

// //module.expot = products;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    product: { type: String, require: true },
    image: { type: String, require: true },
    info: { type: Number, require: false },
    price: { type: Number, require: true },
},
{ timestamps: true }
);

const products = mongoose.model("product", productSchema);

module.exports = products;
