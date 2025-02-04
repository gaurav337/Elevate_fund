const express = require('express');
const router = express.Router();
const Investor = require('../models/Investor');

// Get all investors
router.get('/', async (req, res) => {
  try {
    const investors = await Investor.find();
    res.json(investors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get investor by ID
router.get('/:id', async (req, res) => {
  try {
    const investor = await Investor.findById(req.params.id);
    if (!investor) {
      return res.status(404).json({ error: 'Investor not found' });
    }
    res.json(investor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 