const db = require('../models/restaurant_model');

let createRestaurant = (req, res) => {
  let arrFoodlist;
  if (/[,]/gi.test(req.body.menu)) {
    arrFoodlist = req.body.menu.split(",");
  }else {
    arrFoodlist = req.body.menu
  }

  let status;
  if (req.body.open_status == "true") {
    status = true;
  }else {
    status = false;
  }
  db.create({
    name: req.body.name,
    owner: req.body.owner,
    address: req.body.address,
    open_status: status,
    menu: arrFoodlist,
  }, (err, result) => {
    if (!err) {
      res.send(result);
    }else {
      res.send(err.message);
    }
  })
}

let getAllDataRestaurant = (req, res) => {
  db.find({})
    .populate("menu")
    .exec((err, result) => {
      if (!err) {
        res.send(result);
      }else {
        res.send(err.message)
      }
    })
}

let getSingleDataRestaurant = (req, res) => {
  db.findById(req.params.id)
    .populate("menu")
    .exec((err, result) => {
      if (!err) {
        res.send(result);
      }else {
        res.send(err.message)
      }
    })
}

let removeRestaurant = (req, res) => {
  db.findByIdAndRemove(req.params.id, (err, result) => {
    if (!err) {
      res.send(`Data restaurant with id ${req.params.id} has been removed!`);
    }else {
      res.send(err.message);
    }
  })
}

let updateRestaurant = (req, res) => {
  let arrFoodlist;
  if (/[,]/gi.test(req.body.menu)) {
    arrFoodlist = req.body.menu.split(",");
  }else {
    arrFoodlist = req.body.menu
  }

  let status;
  if (req.body.open_status == "true") {
    status = true;
  }else {
    status = false;
  }
  db.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        owner: req.body.owner,
        address: req.body.address,
        open_status: status,
        menu: arrFoodlist,
      }
    }, {new: true}, (err, result) => {
    if (!err) {
      res.send(`Data restaurant with id ${req.params.id} has been updated!`);
    }else {
      res.send(err.message);
    }
  })
}


module.exports = {
  createRestaurant, getAllDataRestaurant, getSingleDataRestaurant, removeRestaurant, updateRestaurant
}
