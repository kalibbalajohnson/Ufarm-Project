const express = require('express');
const router = express.Router();
const Products = require('../models/productsModel');
const multer = require('multer')

router.get("/index", async (req, res) => {
    try {
        const horticultureProducts = await Products.find({category: 'horticulture'});
        const poultryProducts = await Products.find({category: 'poultry'});
        const diaryProducts = await Products.find({category: 'diary'});
        res.render("index", {horticultureProducts, poultryProducts, diaryProducts});
    } catch (error) {
        res.send(error)
    }
});

module.exports = router;
