const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
  investor: { type: mongoose.Schema.Types.ObjectId, ref: 'Investor', required: true },
  entrepreneur: { type: mongoose.Schema.Types.ObjectId, ref: 'Entrepreneur', required: true },
  amount: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['Pending', 'Approved', 'Rejected', 'Completed'],
    default: 'Pending'
  },
  terms: { type: String },
  equity: { type: Number }, // Percentage of equity offered
  notes: { type: String },
  documents: [{ type: String }], // URLs to relevant documents
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt timestamp before saving
InvestmentSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Investment', InvestmentSchema); 