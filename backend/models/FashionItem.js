const mongoose = require('mongoose');

const FashionItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    price: Number,
    category: String
});

module.exports = mongoose.model('FashionItem', FashionItemSchema);

