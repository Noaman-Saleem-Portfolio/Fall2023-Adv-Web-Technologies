const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config/config");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);

    console.log(
      `Connected to MongoDb server at address ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
  }
};

module.exports = connectDB;
