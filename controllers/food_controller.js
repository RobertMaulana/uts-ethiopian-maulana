const db = require('../models/food_model');

let createFood = (req, res) => {
  db.create(req.body, (err, result) => {

    (!err) ? res.send(result) : res.send(err.message);

  })
}

let getAllDataFood = (req, res) => {
  db.find({}, (err, result) => {

    (!err) ? res.send(result) : res.send(err.message);

  })
}

let getSingleDataFood = (req, res) => {
  db.findById(req.params.id, (err, result) => {

    (!err) ? res.send(result) : res.send(err.message);

  })
}

let removeFood = (req, res) => {
  db.findByIdAndRemove(req.params.id, (err, result) => {

    (!err) ? res.send(`Data food with id ${req.params.id} has been removed!`) : res.send(err.message);

  })
}

let updateFood = (req, res) => {
  db.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        price: req.body.price,
        expired_date: req.body.expired_date,

      }
    }, {new: true}, (err, result) => {

      (!err) ? res.send(`Data food with id ${req.params.id} has been updated!`) : res.send(err.message);
      
  })
}


module.exports = {
  createFood, getAllDataFood, getSingleDataFood, removeFood, updateFood
}
