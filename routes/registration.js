const express = require('express');
const router = express.Router();
const User = require('../userModel');
const Registration = require('../registrationModel');
const crypto = require('crypto'); // Add crypto for token generation

// Registration route
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // Validate required fields
    if (!username || !email || !password || !confirmPassword) {
      console.log('Validation error: All fields are required');
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      console.log('Validation error: Passwords do not match');
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Validation error: User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({
      username,
      email,
      password,
      isVerified: false,
      verificationToken: generateVerificationToken()
    });

    // Save user to database
    await newUser.save();
    console.log('User saved to database');

    // Optionally, save registration data to registration collection
    const newRegistration = new Registration({
      name: username,
      email,
      password
    });
    await newRegistration.save();
    console.log('Registration data saved to database');

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Function to generate a verification token
function generateVerificationToken() {
  return crypto.randomBytes(32).toString('hex');
}

module.exports = router;
