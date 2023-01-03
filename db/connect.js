const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("💽 [DATABASE] MongoDB Connection Ready!");
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
