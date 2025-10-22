const mongoose = require("mongoose");

const ProductCardSchema = new mongoose.Schema({
  productImageUrl: {
    type: String,
    required: true,
  },
  avilableOffers: [
    {
      type: String,
    },
  ],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },

  totalRatings: {
    type: Number,
  },
  totalReview: {
    type: String,
  },
  wifiConnectivity: {
    type: boolean,
  },
  varient: {
    type: String,
  },
  modelYear: {
    type: Number,
  },
});

const ProductCard = mongoose.model("ProductCard", ProductCardSchema);
module.exports = ProductCard;
