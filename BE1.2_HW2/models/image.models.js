const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  headerImageUrl: String,
  heading: String,
  info: String,
  calories: Number,
  protein: Number,
  carbohydrates: Number,
  fatUnsaturated: Number,
});

const Image = new mongoose.model("Image", imageSchema);

module.exports = Image;
