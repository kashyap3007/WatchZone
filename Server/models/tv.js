const mongoose = require("mongoose");
const { Schema } = mongoose;

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
    default: "Tv",
  },
  details: {
    required: true,
    type: String,
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model("Tv", productSchema);
