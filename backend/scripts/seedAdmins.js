const mongoose = require('mongoose');
const User = require('../models/User');
const Entrepreneur = require('../models/Entrepreneur');
const Investor = require('../models/Investor');
require('dotenv').config();

const seedAdmins = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Entrepreneur.deleteMany({});
    await Investor.deleteMany({});
    console.log('Cleared existing data');

    // Create entrepreneur profile
    const entrepreneurProfile = new Entrepreneur({
      name: 'Admin Entrepreneur',
      companyName: 'Admin Company',
      industry: 'Technology',
      description: 'Admin entrepreneur account',
      fundingNeeded: 1000000,
      email: 'admin@admin.com'
    });
    await entrepreneurProfile.save();
    console.log('Created entrepreneur profile');

    // Create entrepreneur user
    const entrepreneurUser = new User({
      email: 'admin@admin.com',
      password: '0791Gaurav@',
      userType: 'entrepreneur',
      profileId: entrepreneurProfile._id
    });
    await entrepreneurUser.save();
    console.log('Created entrepreneur user');

    // Create investor profile
    const investorProfile = new Investor({
      name: 'Admin Investor',
      organization: 'Admin Investment Firm',
      investmentRange: '1000000-5000000',
      focusAreas: ['Technology', 'Healthcare'],
      email: 'admin1@admin.com'
    });
    await investorProfile.save();
    console.log('Created investor profile');

    // Create investor user
    const investorUser = new User({
      email: 'admin1@admin.com',
      password: '0791Gaurav@',
      userType: 'investor',
      profileId: investorProfile._id
    });
    await investorUser.save();
    console.log('Created investor user');

    // Verify users were created
    const users = await User.find({});
    console.log('Created users:', users.map(u => ({ email: u.email, userType: u.userType })));

    process.exit(0);
  } catch (error) {
    console.error('Error seeding admins:', error);
    process.exit(1);
  }
};

seedAdmins(); 