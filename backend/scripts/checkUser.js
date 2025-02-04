const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const checkUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Find user
    const user = await User.findOne({ email: 'admin@admin.com' });
    if (user) {
      console.log('User found:', {
        email: user.email,
        userType: user.userType,
        name: user.name,
        _id: user._id
      });
    } else {
      console.log('User not found');
    }
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

checkUser(); 