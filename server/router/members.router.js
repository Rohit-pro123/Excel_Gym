const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Members = require('../model/members.model');
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Members.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid Email or Password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }
    res.status(200).json({ message: "Login successful",isadmin:user.isAdmin,id:user._id});
  } catch (err) {
    res.status(500).json({ message: "Failed to login" });
  }
});
router.post('/signup', async (req, res) => {
  const { firstname, lastname, gender, email, password, phonenumber, comfirmpassword } = req.body;
  if (password !== comfirmpassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  try {
    const existingUser = await Members.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }
    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      if (err) {
        return res.status(400).json({ message: 'Error hashing password'});
      }
      const newUser = new Members({
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        email: email,
        password: hashedPassword,
        phone: phonenumber
      });
      await newUser.save();
      res.status(201).json({ message: "Signup successful",id: newUser._id});
    });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get('/members', async (req, res) => {
  try {
    const members = await Members.find({ isAdmin: false });
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});
router.get('/member/:memberId', async (req, res) => {
  const memberId = req.params.memberId;
  try {
      const member = await Members.findById(memberId);
      if (!member) {
          return res.status(404).json({ message: 'Member not found' });
      }
      res.json(member);
  } catch (err) {
      console.error('Error fetching member:', err);
      res.status(500).json({ message: 'Server Error' });
  }
});
router.delete('/delmembers/:id', async (req, res) => {
  try {
      const deletedMember = await Members.findByIdAndDelete(req.params.id);
      if (!deletedMember) {
          return res.status(404).json({ message: 'Member not found' });
      }
      res.json({ message: 'Member deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

module.exports = router;