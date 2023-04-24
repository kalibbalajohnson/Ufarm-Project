const express = require('express');
const router = express.Router();
const Products = require('../models/productsModel');
const multer = require('multer')

let storage = multer.diskStorage({ 
    destination: (req, file, cb) => { cb(null, 'public/products')}, 
    filename: (req, file, cb) => { cb(null, file.originalname)}})
let imageupload = multer({ storage: storage })

// router.get("/aodash", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
router.get("/upload", (req, res) => {
    res.render("upload")
});

router.post("/upload", imageupload.single('productimage'), (req, res) => {
    console.log(req.file)
    try {
        const products = new Products(req.body)
        products.productimage = req.file.originalname
        products.save()
        res.redirect('/index')
    } catch (error) {
        res.send('image upload failed: ' + error)
    }
    // res.render("aoDash")
});



module.exports = router
