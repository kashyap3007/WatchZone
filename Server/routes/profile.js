const express = require("express");
const router = express.Router();
const User = require("../models/user");

//GET USER
router.get("/:username", async (req, res) => {
  try {
    let data = await User.find();
    data = await data.map((info) => {
      if (info.username == req.params.username) {
        console.log(info.username);
        const src = `data:image/png;base64,${Buffer.from(info.image).toString(
          "base64"
        )}`;
        return {
          src,
          fullName: info.fullname,
          // lastName: info.fullName,
          username: info.username,
          email: info.email,
        };
      }
    });

    res.json(data);

    // console.log(madarchod);
    // console.log(data);

    // let hello = false;
    // data = await data.map((info) => {
    //   if (info.username == req.params.username) {
    //     hello = true;
    //     console.log("Madarchod");
    //     return;
    //   }
    // info.username === req.params.username;
    // });

    // if (hello) {
    //   // console.log("MC");
    //   res.json(data);
    // }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
// router.get("/:username", async (req, res) => {
//   try {
//     let data = await User.find({});

//     data = await data.filter((info) => {
//       return info.username === req.params.username;
//     });

//     res.json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Patch
router.patch("/update/:id", async (req, res) => {
  // console.log(req.body);
  // console.log(req.files.file.data);
  const user = await User.findById(req.params.id);
  // if (!req.body.password) {
  //   res.json("Please Enter Password!");
  // } else
  if (user.password === req.body.password) {
    const { password, ...others } = req.body;
    if (req.files) {
      User.findByIdAndUpdate(
        req.params.id,
        { ...others, image: req.files.file.data },
        (err, doc) => {
          if (!err) {
            console.log("success");
            // console.log(doc);
            res.json("success");
          } else {
            console.log(err);
            res.json("failed");
          }
        }
      );
    } else {
      User.findByIdAndUpdate(req.params.id, { ...others }, (err, doc) => {
        if (!err) {
          console.log("success");
          // console.log(doc);
          res.json("success");
        } else {
          console.log(err);
          res.json("failed");
        }
      });
    }
  } else {
    res.json("Wrong password");
  }
  // try {
  //   const user = await User.findById(req.params.id);
  //   if (user.password != req.body.password) {
  //     res.status(400).json(" Sorry! Wrong Password!......");
  //   } else {
  //     if (req.body.image) {
  //       const file = req.files.image.data;
  //       const { password, ...others } = req.body;
  //       //   console.log(others);
  //       const updatedData = others;
  //       const id = req.params.id;

  //       const options = { new: true };
  //       const result = await User.findByIdAndUpdate(
  //         id,
  //         { ...updatedData, image: file },
  //         options
  //       );
  //       res.send(result);
  //     } else {
  //       const { password, ...others } = req.body;
  //       //   console.log(others);
  //       const updatedData = others;
  //       const id = req.params.id;
  //       const options = { new: true };
  //       const result = await User.findByIdAndUpdate(id, updatedData, options);
  //       res.send(result);
  //     }
  //   }
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
});

//delete
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndDelete(id);
    res.send(
      `${data.fullname} with username ${data.username} has been deleted........`
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
