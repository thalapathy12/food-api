const express = require('express');
const mongoose = require('mongoose');
const foodRoutes = require('./routes/foodRoutes');
const connectDB = require('./config/db');

const app = express();
connectDB();
app.use(express.json());
app.use('/api/food', foodRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));