const mongoose = require("mongoose");

const BankCreditCardSchema = new mongoose.Schema({
  cardHolderName: String,
  cardNumber: Number,
  goodThruDate: Date,
  cardType: String,
});
