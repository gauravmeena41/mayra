const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register user
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const user = new User({
    username,
    email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username });
    !user && res.status(401).json("Wrong credentials");

    req.body.password !==
      CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC).toString(
        CryptoJS.enc.Utf8
      ) && res.status(401).json("Wrong credentials");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
