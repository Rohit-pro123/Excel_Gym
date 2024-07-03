const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainersSchema = new Schema({
    trainersName: { type: String, required: true },
    specialties: { type: String },
    contactInfo: { type: String }
});

const Trainers = mongoose.model('Trainers', trainersSchema);

module.exports = Trainers;
