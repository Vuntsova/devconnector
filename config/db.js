const mongoose = require('mongoose');
const conf = require('config');
const db = conf.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(`this message: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
