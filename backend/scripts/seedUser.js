const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Entrepreneur = require('../models/Entrepreneur');
require('dotenv').config();

const seedUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Delete existing user if exists
    await User.deleteOne({ email: 'admin@admin.com' });
    await Entrepreneur.deleteOne({ email: 'admin@admin.com' });
    console.log('Cleaned up existing user data');

    // Create entrepreneur profile
    const profile = new Entrepreneur({
      name: 'Admin User',
      email: 'admin@admin.com',
      businessName: 'Admin Business',
      businessDescription: 'Test business description',
      industry: 'Technology',
      fundingNeeded: 100000,
      fundingPurpose: 'Business expansion and development'
    });

    await profile.save();
    console.log('Created entrepreneur profile');

    // Create user
    const user = new User({
      email: 'admin@admin.com',
      password: '0791Gaurav@',
      userType: 'entrepreneur',
      profileId: profile._id
    });

    await user.save();
    console.log('Created user account');
    
    // Verify the user was created
    const createdUser = await User.findOne({ email: 'admin@admin.com' });
    console.log('Verification - User found:', {
      email: createdUser.email,
      userType: createdUser.userType,
      profileId: createdUser.profileId
    });

    process.exit(0);
  } catch (error) {
    console.error('Error seeding user:', error);
    process.exit(1);
  }
};

seedUser(); 