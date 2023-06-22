const mongoose = require("mongoose");
require("colors");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db coonected ${conn.connection.host}`.yellow.bgBlack);
  } catch (error) {
    console.log(`mongo error -- ${error}`.white.bgRed);
    process.exit(1);
  }
};

module.exports = connectDb;
