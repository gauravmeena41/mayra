const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register user
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
});
