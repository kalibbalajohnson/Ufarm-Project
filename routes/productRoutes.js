const express = require('express');
const router = express.Router();
const Products = require('../models/productsModel');
const multer = require('multer')


// router.get("/aodash", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
router.get("/products", async (req, res) => {
    try {
        const products = await Products.find()
        console.log(products)
        res.render("products", {data:products})
    } catch (error) {
        res.send(error)
    }
});


module.exports = router
