const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membersSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    gender:{type:String,required:true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    joinDate: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, default: false }
});

const Members = mongoose.model('Members', membersSchema);

module.exports = Members;