const Food = require('../models/food');

exports.getAllFood = async (req, res) => {
  const foodItems = await Food.find();
  res.json(foodItems);
};

exports.addFoodItem = async (req, res) => {
  try {
    const newItem = new Food(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ...existing code...

exports.updateFoodItem = async (req, res) => {
  try {
    const updatedItem = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ error: 'Food item not found' });
    }
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteFoodItem = async (req, res) => {
  try {
    const deletedItem = await Food.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Food item not found' });
    }
    res.json({ message: 'Food item deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// ...existing code...