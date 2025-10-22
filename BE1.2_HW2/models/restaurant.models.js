const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cuisine: [
      {
        type: String,
        enum: [
          "Italian",
          "Mexican",
          "Chinese",
          "Indian",
          "American",
          "French",
          "Japanese",
          "Mediterranean",
          "Thai",
          "Vegetarian",
          "Vegan",
          "Other",
        ],
      },
    ],
    location: {
      type: String,
      required: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
    phone: String,
    websiteUrl: String,
    openeingYear: Number,
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    specialDishes: [
      {
        type: String,
      },
    ],
    photoUrls: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
