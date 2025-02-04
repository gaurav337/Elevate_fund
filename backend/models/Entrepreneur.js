const mongoose = require('mongoose');

const EntrepreneurSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  businessName: { type: String, required: true },
  businessDescription: { type: String, required: true },
  industry: { type: String, required: true },
  fundingNeeded: { type: Number, required: true },
  fundingPurpose: { type: String, required: true },
  currentRevenue: { type: Number },
  teamSize: { type: Number },
  location: { type: String },
  pitchDeck: { type: String }, // URL to pitch deck
  businessPlan: { type: String }, // URL to business plan
  status: { type: String, default: 'Active' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entrepreneur', EntrepreneurSchema); 