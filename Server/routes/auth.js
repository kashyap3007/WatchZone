// register and login

const express = require("express");

const router = express.Router();

const User = require("../models/user");

// const validator = require('express-validator');

router.post("/register", async (req, res) => {
  // console.log(req.body);
  // res.json({message: "Succesfully got data"});
  try {
    const data = new User({
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const dataToSave = await data.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  // console.log(req.body);
  // console.log("Data got");
  try {
    const user = await User.findOne({ username: req.body.username });
    // !user && res.status(400).json("Wrong credentials!");
    if (!user) {
      res.status(400).json("User Not Found");
    } else if (req.body.password != user.password) {
      res.status(400).json("Password Not Match.....");
    } else {
      const { password, ...others } = user._doc;
      // Password k alawa users ka sara cheej others me hn
      res.status(200).json(others);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
