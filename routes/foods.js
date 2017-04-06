const express = require('express');
const router = express.Router();
const foodController = require('../controllers/food_controller');

router.post("/", foodController.createFood);
router.get("/", foodController.getAllDataFood);
router.get("/:id", foodController.getSingleDataFood);
router.delete("/:id", foodController.removeFood);
router.put("/:id", foodController.updateFood);

module.exports = router
