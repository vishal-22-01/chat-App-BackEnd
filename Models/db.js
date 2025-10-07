const mongoose = require("mongoose");

const connectDB = process.env.MONGO_CONN;

mongoose
  .connect(connectDB)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });
