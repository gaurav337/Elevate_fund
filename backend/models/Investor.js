const mongoose = require('mongoose');

const InvestorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // Angel Investor, VC Partner, etc.
  focusAreas: [{ type: String }],
  investmentRange: {
    min: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  tags: [{ type: String }],
  recentInvestments: { type: String },
  profileImage: { type: String },
  email: { type: String, required: true, unique: true },
  bio: { type: String },
  linkedInProfile: { type: String },
  status: { type: String, default: 'Active' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Investor', InvestorSchema); 