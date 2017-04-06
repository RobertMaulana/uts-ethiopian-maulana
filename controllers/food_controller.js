const db = require('../models/food_model');


let createFood = (req, res) => {
  db.create(req.body, (err, result) => {
    if (!err) {
      res.send(result);
    }else {
      res.send(err.message);
    }
  })
}

let getAllDataFood = (req, res) => {
  db.find({}, (err, result) => {
    if (!err) {
      res.send(result);
    }else {
      res.send(err.message);
    }
  })
}


module.exports = {
  createFood, getAllDataFood
}
