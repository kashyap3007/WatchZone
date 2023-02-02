const express = require("express");

const router = express.Router();

//Model -- Trending Page
const Model = require("../models/model");
const Sports = require("../models/sports");
const Movies = require("../models/movies");
const Tv = require("../models/tv");
const Special = require("../models/special");
// const sports = require("../models/sports");

// console.log(Model);
//we are using Router from Express, and we are exporting it too using module.exports.

// router.get("/home", (req, res) => {
//   console.log(__dirname);
//   res.sendFile(path.join(__dirname, "../index.html"));
// });
// router.get("/", (req, res)=>{
//   res.send("Hello world");
// })

router.post("/movies/post", async (req, res) => {
  try {
    const file = req.files.image;
    const data = new Movies({
      name: req.body.name,
      image: {
        data: file.data,
        contentType: "image/png/jpg/jpeg",
      },
      details: req.body.details,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    console.log("Success!");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/sports/post", async (req, res) => {
  try {
    const file = req.files.image;
    const data = new Sports({
      name: req.body.name,
      image: {
        data: file.data,
        contentType: "image/png/jpg/jpeg",
      },
      details: req.body.details,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    console.log("Success!");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Trending Page k liye
router.post("/post", async (req, res) => {
  try {
    // console.log(req.body);
    const file = req.files.image;
    // console.log(file.data);
    // const { name } = req.body;
    // console.log(req.files.name, "image");
    // is a buffer console.log(file.data);
    const data = new Model({
      name: req.body.name,
      image: {
        data: file.data,
        contentType: "image/png/jpg/jpeg",
      },
      details: req.body.details,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/tv/post", async (req, res) => {
  try {
    const file = req.files.image;
    const data = new Tv({
      name: req.body.name,
      image: {
        data: file.data,
        contentType: "image/png/jpg/jpeg",
      },
      details: req.body.details,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    console.log("Success!");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/special/post", async (req, res) => {
  try {
    const file = req.files.image;
    const data = new Special({
      name: req.body.name,
      image: {
        data: file.data,
        contentType: "image/png/jpg/jpeg",
      },
      details: req.body.details,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    console.log("Success!");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//corousels k liye
router.get("/start/Trending/get", async (req, res) => {
  try {
    let data = await Model.find().limit(3);
    // console.log("inside");
    data = await data.map((info) => {
      const src = `data:image/png;base64,${Buffer.from(
        info.image.data
      ).toString("base64")}`;
      return {
        id: info._id,
        src,
        name: info.name,
        details: info.details,
        category: info.category,
      };
    });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//Trending page + Trending Get by id  ----------------------------------------------------------------------------
router.get("/Trending/get", async (req, res) => {
  try {
    let data = await Model.find();
    data = data.map((info) => {
      const src = `data:image/png;base64,${Buffer.from(
        info.image.data
      ).toString("base64")}`;
      // console.log(info.category);
      return {
        id: info._id,
        src,
        name: info.name,
        details: info.details,
        category: info.category,
      };
    });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/Trending/get/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    const data = await Model.findById(req.params.id);
    res.json(data);
    //Sends data in JSON format and ends the request
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// --------------------------------------------------------------------------------------------------------

//Movies
router.get("/Movies/get", async (req, res) => {
  try {
    let data = await Movies.find();
    data = await data.map((info) => {
      const src = `data:image/png;base64,${Buffer.from(
        info.image.data
      ).toString("base64")}`;
      return {
        id: info._id,
        src,
        name: info.name,
        details: info.details,
        category: info.category,
        url: info.url,
      };
    });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/Movies/get/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    const data = await Movies.findById(req.params.id);
    res.json(data);
    //Sends data in JSON format and ends the request
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//-----------------------------------------------------------------------------------------------------------

// Tv- Shows
// Tvs
router.get("/Tv/get", async (req, res) => {
  try {
    let data = await Tv.find();
    data = data.map((info) => {
      const src = `data:image/png;base64,${Buffer.from(
        info.image.data
      ).toString("base64")}`;
      return {
        id: info._id,
        src,
        name: info.name,
        details: info.details,
        category: info.category,
      };
    });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/Tv/get/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Tv.findById(req.params.id);
    res.json(data);
    //Sends data in JSON format and ends the request
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

///---------------------------------------------------------------------------------------------------------------

router.get("/sports/get", async (req, res) => {
  try {
    let data = await Sports.find();
    data = await data.map((info) => {
      const src = `data:image/png;base64,${Buffer.from(
        info.image.data
      ).toString("base64")}`;
      return {
        id: info._id,
        src,
        name: info.name,
        details: info.details,
        category: info.category,
      };
    });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/Sports/get/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Sports.findById(req.params.id);
    res.json(data);
    //Sends data in JSON format and ends the request
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//------------------------------------------------------------------------------------------------------------------

router.get("/Special/get", async (req, res) => {
  try {
    let data = await Special.find();
    data = await data.map((info) => {
      const src = `data:image/png;base64,${Buffer.from(
        info.image.data
      ).toString("base64")}`;
      return {
        id: info._id,
        src,
        name: info.name,
        details: info.details,
        category: info.category,
      };
    });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/Special/get/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Special.findById(req.params.id);
    res.json(data);
    //Sends data in JSON format and ends the request
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//-----------------------------------------------------------------------------------------------------------------

//Update by ID Method

router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with name ${data.name} and ${id} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
