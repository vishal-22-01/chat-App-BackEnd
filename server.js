const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
require("./Models/db");
const authRouter = require("./Routes/authRouter");
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRouter);

app.get("/vishal", (req, res) => {
  res.send("Thakur");
});

app.listen(PORT, () => {
  console.log(`Server is running on : ${PORT}`);
});
