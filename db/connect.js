const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  console.log("💽 [DATABASE] MongoDB Connection Ready!");
  return mongoose.connect(url);
};

module.exports = connectDB;
