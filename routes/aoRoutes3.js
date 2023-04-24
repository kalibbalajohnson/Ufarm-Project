const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login')
const Products = require('../models/productsModel');
const multer = require('multer')

let storage = multer.diskStorage({ 
    destination: (req, file, cb) => { cb(null, 'public/products')}, 
    filename: (req, file, cb) => { cb(null, file.originalname)}})
let imageupload = multer({ storage: storage })

// router.get("/aodash", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
router.get("/aodash3", (req, res) => {
    res.render("aoDash3")
});

router.post("/aodash3", imageupload.single('productimage'), (req, res) => {
    console.log(req.file)
    try {
        const products = new Products(req.body)
        products.productimage = req.file.originalname
        products.save()
        res.redirect('/products')
    } catch (error) {
        res.send('image upload failed: ' + error)
    }
    // res.render("aoDash")
});



module.exports = router
