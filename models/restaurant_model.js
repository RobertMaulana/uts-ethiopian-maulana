const mongoose = require('mongoose');
const db = require("./db");

let restaurantSchema = new mongoose.Schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean,
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  }
});

let Restaurant = db.model("Restaurant", restaurantSchema);

module.exports = Restaurant
