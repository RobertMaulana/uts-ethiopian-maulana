const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant_controller');

router.post("/", restaurantController.createRestaurant);
router.get("/", restaurantController.getAllDataRestaurant);
router.get("/:id", restaurantController.getSingleDataRestaurant);
router.delete("/:id", restaurantController.removeRestaurant);
router.put("/:id", restaurantController.updateRestaurant);

module.exports = router
