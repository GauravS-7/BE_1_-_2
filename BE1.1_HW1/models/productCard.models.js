const mongoose = require("mongoose");

const ProductCardSchema = new mongoose.Schema({
  productPictureUrl: String,
  productName: String,
  productCategory: String,
  productInfo: String,
  productSize: [
    {
      type: Number,
      enum: [7, 8, 9, 10, 11],
    },
  ],
  productColor: [
    {
      type: String,
      enum: ["Blue", "Magenta", "Green", "Red", "Greyf"],
    },
  ],
  productPrice: Number,
});

const Product = mongoose.model("Product", ProductCardSchema);
module.exports = Product;
