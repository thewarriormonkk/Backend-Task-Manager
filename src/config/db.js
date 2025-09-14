const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('=== ENVIRONMENT VARIABLES DEBUG ===');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('MONGO_URI exists:', !!process.env.MONGO_URI);
    console.log('MONGO_URI value:', process.env.MONGO_URI ? 'SET' : 'NOT SET');
    console.log('=====================================');

    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/task_management';
    console.log('Connecting to MongoDB with URI:', mongoURI.substring(0, 20) + '...');

    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
