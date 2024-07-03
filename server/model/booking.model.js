const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    memberId: { type: Schema.Types.ObjectId, ref: 'Members', required: true },
    classId: { type: Schema.Types.ObjectId, ref: 'Class', required: true },
    bookingDate: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
