const express = require('express');
const router = express.Router();
const foodController = require('../controllers/food_controller');

router.post("/", foodController.createFood);
router.get("/", foodController.getAllDataFood);

module.exports = router
