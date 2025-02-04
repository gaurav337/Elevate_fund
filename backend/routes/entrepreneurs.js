const express = require('express');
const router = express.Router();
const Entrepreneur = require('../models/Entrepreneur');

// Get all entrepreneurs
router.get('/', async (req, res) => {
  try {
    const entrepreneurs = await Entrepreneur.find();
    res.json(entrepreneurs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get entrepreneur by ID
router.get('/:id', async (req, res) => {
  try {
    const entrepreneur = await Entrepreneur.findById(req.params.id);
    if (!entrepreneur) {
      return res.status(404).json({ error: 'Entrepreneur not found' });
    }
    res.json(entrepreneur);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 