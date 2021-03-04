require("dotenv").config();
const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;
console.log("uri", MONGODB_URI);
const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = async () => {
  console.log("started");
  await mongoose.connect(MONGODB_URI, dbOptions);
  console.log("connected to mongo");
};
