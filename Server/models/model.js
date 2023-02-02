const mongoose = require("mongoose");
const Schema = mongoose;

//Latest And Trending Page

const productSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  image: {
    data: Buffer,
  },
  category: {
    type: String,
    default: "Trending",
  },
  url: {
    type: String,
  },
  details: {
    required: true,
    type: String,
  },
});

// console.log(productSchema);
module.exports = mongoose.model("Data", productSchema);

// console.log(mongoose.model);
