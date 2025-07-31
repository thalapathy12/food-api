const express = require('express');
const router = express.Router();
const { getAllFood, addFoodItem, updateFoodItem, deleteFoodItem } = require('../Controllers/foodController');

router.get('/', getAllFood);
router.post('/', addFoodItem);
router.put('/:id', updateFoodItem);
router.delete('/:id', deleteFoodItem):
module.exports = router;

