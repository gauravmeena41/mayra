const router = require("express").Router();
const User = require("../models/User");

router.get("/user", (req, res) => {
  res.send("user");
});
module.exports = router;
