const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1}, 	
    email: { type: String, required: true, minlength: 1}},
    { timestamps: true });


//custom methods, pre, post etc. here

const User = mongoose.model('User', userSchema );      

