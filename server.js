const express = require("express");
const app = express();
require("dotenv").config();
// 4TkVN0cAygEQwAuD
const PORT = process.env.PORT || 8080;


app.get("/vishal", (req, res) => {
  res.send("Thakur");
});

app.listen(PORT, () => {
  console.log(`Srever is running on : ${PORT}`);
});
