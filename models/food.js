const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['Egg','Veg'], required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Food', foodSchema);
