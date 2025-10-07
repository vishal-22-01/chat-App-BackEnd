const router = require("express").Router();

router.post("/signUp", (req, res) => {
  res.send("Sign Up Successful");
});
router.post("/login", (req, res) => {
  res.send("Login Successful");
});

module.exports = router;
