
const mongoose = require('mongoose');

  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    vendor: String,
    delivery: String,
    category: String
  });

const Product = mongoose.model('products', productSchema);

module.exports = Product;
