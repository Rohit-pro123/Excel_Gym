const express = require('express');
const router = express.Router();
const ClassModel = require('../model/class.model');
const Trainers = require('../model/trainers.model');
router.get('/classes', async (req, res) => {
    try {
        const classes = await ClassModel.find()
            .populate('trainersId', 'trainersName')
            .exec();

        res.json(classes);
    } catch (error) {
        console.error('Error fetching classes:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
router.post('/newclass', async (req, res) => {
    const { classname, selectedTrainer, schedule, price } = req.body;
    try {
        const existingUser = await ClassModel.findOne({ classname });
        if (existingUser) {
            return res.status(400).json({ message: "class with this name already exists" });
        }
        const newUser = new ClassModel({
            className: classname,
            trainersId: selectedTrainer,
            schedule: schedule,
            price: price
        });
        await newUser.save();
        res.status(201).json({ message: "Added successful" });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
module.exports = router;
router.delete('/delclasses/:id', async (req, res) => {
    try {
        const deletedclass = await ClassModel.findByIdAndDelete(req.params.id);
        if (!deletedclass) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.json({ message: 'Class deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
