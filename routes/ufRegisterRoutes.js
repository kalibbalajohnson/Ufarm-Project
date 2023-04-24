const express = require('express');
const router = express.Router();
const connectEnsureLogin =require('connect-ensure-login');
//imported model
const ufRegister = require("../models/ufRegisterModel");


router.get("/ufregister", (req, res) => {
    res.render("ufRegister")
});

router.post("/ufregister", async (req, res) => {
    try {
        const register = new ufRegister(req.body);
        await register.save()
        res.redirect("/home")
        console.log(req.body)
    }
    catch (err) {
        console.log(err)
    }
});



//we redirect to a path then render a file
router.get("/ufinfo", async (req, res) => {
// router.get("/foinfo", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
//router.get("/foinfo",  async (req, res) => {
    try {
        let items = await ufRegister.find();
        // console.log(items)
        let price = await ufRegister.aggregate([
            {
                //'$group': {category: '$parents', 
                '$group': {
                    _id: '$all',
                    totalFees: { $sum: '$price' }
                    // averageFees: { $avg: '$fees' }
                }
            }
        ])
        res.render("ufinfo", { urbanfarmers: items, total: price[0] })
    }
    catch (err) {
        console.log(err)
        res.send("failed to retrive student details")
    }
});



// delete route
router.post("/ufinfo/delete", async (req, res) => {
    try {
        await ufRegister.deleteOne({ _id: req.body.id });
        res.redirect("back")
    }
    catch (err) {
        console.log(err)
    }
});

//edit route
router.get("/edit_uf/:id", async (req, res) => {
    try {
        const item = await ufRegister.findOne({ _id: req.params.id });
        res.render("uf_edit", { urbanfarmer: item });
    }
    catch (err) {
        console.log(err)
        res.send("could not find student");
        console.log(err)
    }
});


router.post("/edit_uf", async (req, res) => {
    try {
        await ufRegister.findOneAndUpdate({ _id: req.query.id }, req.body);
        res.redirect("/ufinfo")
    }
    catch (err) {

        res.send("could not update student details");
        console.log(err)
    }
});





module.exports = router

