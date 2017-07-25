const mongoose = require('mongoose');

var bucketSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 1}, 	
    description: { type: String, required: true, minlength: 1},
    createdBy: { type: String, required: true },
    taggedUserID: { type: String }},
    { timestamps: true });

//custom methods, pre, post etc. here

const Bucket = mongoose.model('Bucket', bucketSchema );      

