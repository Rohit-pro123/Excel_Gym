const express = require('express');
const router = express.Router();
const Trainers = require('../model/trainers.model');
router.get('/trainers', async (req, res) => {
    try {
        const trainers = await Trainers.find();
        res.json(trainers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
router.post('/newtrainer', async (req, res) => {
    const {firstname,lastname,specialties,phonenumber} = req.body;
    const name=firstname+' '+lastname;
    try {
      const existingUser = await Trainers.findOne({name});
      if (existingUser) {
        return res.status(400).json({ message: "User with this name already exists" });
      }
    const newUser = new Trainers({
        trainersName: name,
        specialties: specialties,
        contactInfo: phonenumber
    });
        await newUser.save();
        res.status(201).json({ message: "Added successful"});
      }
     catch (error) {
     console.error('Error added new trainer:', error);
      res.status(500).json({ message: "Server error" });
    }
  });
router.delete('/deltrainers/:id', async (req, res) => {
    try {
        const deletedTrainer = await Trainers.findByIdAndDelete(req.params.id);
        if (!deletedTrainer) {
            return res.status(404).json({ message: 'Trainer not found' });
        }
        res.json({ message: 'Trainer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
module.exports = router;