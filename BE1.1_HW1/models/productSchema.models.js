const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  numberOfRatings: {
    type: Number,
    min: 0,
  },
  numberOfReviews: {
    type: Number,
    min: 0,
  },
  price: Number,

  originalPrice: Number,

  discountPercentage: Number,

  freeDelivery: {
    type: Boolean,
    default: false,
  },
  lowestPriceSinceLaunch: {
    type: Boolean,
    default: false,
  },
  stock: {
    type: Number,
    min: 0,
  },
  features: [
    {
      type: String,
    },
  ],
  effectivePixels: String,

  sensorType: String,

  wifiAvailable: {
    type: Boolean,
  },
  uhd4k: {
    type: Boolean,
  },
  warranty: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
