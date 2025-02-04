const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    // Get token from header and verify format
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Invalid authorization header' });
    }

    const token = authHeader.replace('Bearer ', '');
    
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Find user and check if exists
      const user = await User.findById(decoded.userId)
        .select('-password') // Exclude password from the response
        .lean(); // Convert to plain JavaScript object

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      // Check if token was issued before password was last changed
      if (user.passwordChangedAt && decoded.iat < user.passwordChangedAt.getTime() / 1000) {
        return res.status(401).json({ error: 'Password was changed. Please login again' });
      }

      // Add user info to request
      req.user = user;
      req.token = token;
      next();
    } catch (error) {
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'Invalid token' });
      }
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token has expired' });
      }
      throw error;
    }
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = auth; 