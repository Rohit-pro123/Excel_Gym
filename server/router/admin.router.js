const express = require('express');
const router = express.Router();
const Trainers = require('../model/trainers.model');
const Bookings = require('../model/booking.model');
const Classes = require('../model/class.model');
const Members = require('../model/members.model');
router.get('/dashboard', async (req, res) => {
    try {
        const memberCount = await Members.countDocuments({ isAdmin: false });
        const bookingCount = await Bookings.countDocuments();
        const classCount = await Classes.countDocuments();
        const trainerCount = await Trainers.countDocuments();
        res.json({ mcount: memberCount,
            bcount:bookingCount,
            ccount:classCount,
            tcount:trainerCount
         });
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch member count", error: err.message });
    }
});
router.get('/search', async (req, res) => {
    const { collection, field, query } = req.query;
    try {
        let filteredData;
        const queryFilter = {};
        queryFilter[field] = { $regex: query, $options: 'i' };
        if ('trainers'==collection){
            filteredData = await Trainers.find(queryFilter)}
        else if ('members'==collection){
            filteredData = await Members.find(queryFilter)}
        else if ('classes'==collection){
            filteredData = await Classes.find(queryFilter)}
        else if ('bookings'==collection){
            filteredData = await Bookings.find(queryFilter)}
        res.json(filteredData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});
module.exports = router;