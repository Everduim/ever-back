/*
const mongoose   = require('mongoose');
const bcrypt = require("bcrypt") ;
const saltRounds = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {required: true,type: String,},
    password:{required: true,type: String,},
    name:{required: true,type: String,},
    lastname:{required: true,type: String,},
    adress:{required: true,type: String,},
    phone:{required: true,type: Number,}
    
})

userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});
const users = mongoose.model("users", userSchema);
module.exports = users;*/

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  adress: { type: String, required: true },
  phone: { type: Number, required: true }
});

userSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;




