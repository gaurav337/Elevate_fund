const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Entrepreneur = require('../models/Entrepreneur');
const Investor = require('../models/Investor');
const auth = require('../middleware/auth');
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { email, password, userType, ...profileData } = req.body;

    // Validate input
    if (!email || !password || !userType) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create profile based on user type
    let profile;
    if (userType === 'entrepreneur') {
      profile = new Entrepreneur(profileData);
    } else if (userType === 'investor') {
      profile = new Investor({
        ...profileData,
        email: email
      });
    } else {
      return res.status(400).json({ error: 'Invalid user type' });
    }

    // Save profile
    await profile.save();

    // Create user
    const user = new User({
      email,
      password,
      userType,
      profileId: profile._id,
      passwordChangedAt: new Date()
    });

    await user.save();

    // Generate token
    const token = jwt.sign(
      { 
        userId: user._id,
        userType: user.userType,
        email: user.email,
        version: user.passwordChangedAt.getTime()
      },
      process.env.JWT_SECRET,
      { 
        expiresIn: '7d',
        issuer: 'elevatefund',
        audience: 'elevatefund-client'
      }
    );

    // Remove password from user object
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    // Send response
    res.status(201).json({
      token,
      user: {
        ...userWithoutPassword,
        profile
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Signup failed. Please try again.' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' });
    }

    // Find user by email and include password
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Get user profile
    const Profile = user.userType === 'entrepreneur' ? Entrepreneur : Investor;
    const profile = await Profile.findById(user.profileId);

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id,
        userType: user.userType,
        email: user.email,
        version: user.passwordChangedAt ? user.passwordChangedAt.getTime() : 0
      },
      process.env.JWT_SECRET,
      { 
        expiresIn: '7d',
        issuer: 'elevatefund',
        audience: 'elevatefund-client'
      }
    );

    // Remove password from user object
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    // Send response
    res.json({
      token,
      user: {
        ...userWithoutPassword,
        profile
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed. Please try again.' });
  }
});

// Get current user route
router.get('/me', auth, async (req, res) => {
  try {
    // Get user profile
    const Profile = req.user.userType === 'entrepreneur' ? Entrepreneur : Investor;
    const profile = await Profile.findById(req.user.profileId);

    res.json({
      user: {
        ...req.user,
        profile
      }
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Failed to get user data' });
  }
});

// Change password route
router.post('/change-password', auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Validate input
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Please provide current and new password' });
    }

    // Get user with password
    const user = await User.findById(req.user.id).select('+password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check current password
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({ error: 'Current password is incorrect' });
    }

    // Validate new password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      return res.status(400).json({
        error: 'New password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      });
    }

    // Update password
    user.password = newPassword;
    user.passwordChangedAt = new Date();
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ error: 'Failed to change password' });
  }
});

module.exports = router; 