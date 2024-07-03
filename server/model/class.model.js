const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    className: { type: String, required: true },
    trainersId: { type: Schema.Types.ObjectId, ref: 'Trainers', required: true },
    schedule: { type: String },
    price: { type: Number }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
