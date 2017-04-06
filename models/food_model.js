const mongoose = require('mongoose');
const db = require("./db");

let foodSchema = new mongoose.Schema({
  name: String,
  price: String,
  expired_date: Date
});

let Food = db.model("Food", foodSchema);

module.exports = Food
