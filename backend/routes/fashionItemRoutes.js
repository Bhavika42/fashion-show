const express = require('express');
const FashionItem = require('../models/FashionItem');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const items = await FashionItem.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const item = new FashionItem({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        category: req.body.category
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
