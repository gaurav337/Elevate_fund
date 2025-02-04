const mongoose = require('mongoose');

const checkMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/elevatefund');
    console.log('Successfully connected to MongoDB');
    
    // Get connection status
    const state = mongoose.connection.readyState;
    console.log('Connection state:', state === 1 ? 'Connected' : 'Not connected');
    
    // Get database information
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    console.log('\nAvailable collections:');
    collections.forEach(collection => {
      console.log(`- ${collection.name}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

checkMongoDB(); 