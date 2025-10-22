const mongoose = require("mongoose");

const RecipeCardSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tagLine: {
    type: String,
  },
  serving: {
    type: Number,
  },
  prepingTime: {
    type: Number,
  },
  cookingTime: {
    type: Number,
  },
  ingredients: [
    {
      type: String,
    },
  ],
  directions: [
    {
      type: String,
    },
  ],
  notes: {
    type: String,
  },
});

const RecipeCard = mongoose.model("RecipeCard", RecipeCardSchema);
module.exports = RecipeCard;
