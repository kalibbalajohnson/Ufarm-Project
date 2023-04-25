const express = require('express');
const router = express.Router();
const Products = require('../models/productsModel');
const multer = require('multer')
const connectEnsureLogin =require('connect-ensure-login');

let storage = multer.diskStorage({ 
    destination: (req, file, cb) => { cb(null, 'public/products')}, 
    filename: (req, file, cb) => { cb(null, file.originalname)}})
let imageupload = multer({ storage: storage })

 router.get("/upload", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
// router.get("/upload", (req, res) => {
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

router.get("/uploadinfo", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    try {
        let items = await Products.find();
        // console.log(items)
        let fees = await Products.aggregate([
            {
                //'$group': {category: '$parents', 
                '$group': {
                    _id: '$all',
                    totalFees: { $sum: '$price' }
                    // averageFees: { $avg: '$fees' }
                }
            }
        ])
        res.render("uploadinfo", { uploads: items, total: fees[0] })
    }
    catch (err) {
        console.log(err)
        res.send("failed to retrive student details")
    }
});
router.get("/uploadinfo2", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    try {
        let items = await Products.find();
        // console.log(items)
        let fees = await Products.aggregate([
            {
                //'$group': {category: '$parents', 
                '$group': {
                    _id: '$all',
                    totalFees: { $sum: '$price' }
                    // averageFees: { $avg: '$fees' }
                }
            }
        ])
        res.render("uploadinfo2", { uploads: items, total: fees[0] })
    }
    catch (err) {
        console.log(err)
        res.send("failed to retrive student details")
    }
});

// delete route
router.post("/uploadinfo/delete", async (req, res) => {
    try {
        await Products.deleteOne({ _id: req.body.id });
        res.redirect("back")
    }
    catch (err) {
        console.log(err)
    }
});

//edit route
router.get("/edit_upload/:id", async (req, res) => {
    try {
        const item = await Products.findOne({ _id: req.params.id });
        res.render("upload_edit", { upload: item });
    }
    catch (err) {
        console.log(err)
        res.send("could not find upload");
        console.log(err)
    }
});


router.post("/edit_upload", async (req, res) => {
    try {
        await Products.findOneAndUpdate({ _id: req.query.id }, req.body);
        res.redirect("/uploadinfo2")
    }
    catch (err) {

        res.send("could not update upload details");
        console.log(err)
    }
});





module.exports = router




module.exports = router
