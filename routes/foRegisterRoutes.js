const express = require('express');
const router = express.Router();
const connectEnsureLogin =require('connect-ensure-login');
//imported model
const foRegister = require("../models/foRegisterModel");


router.get("/foregister", (req, res) => {
    res.render("foRegister")
});

router.post("/foregister", async (req, res) => {
    try {
        const register = new foRegister(req.body);
        await register.save()
        res.redirect("/home")
        console.log(req.body)
    }
    catch (err) {
        console.log(err)
    }
});



//we redirect to a path then render a file
router.get("/foinfo", async (req, res) => {
// router.get("/foinfo", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
//router.get("/foinfo",  async (req, res) => {
    try {
        let items = await foRegister.find();
        // console.log(items)
        let price = await foRegister.aggregate([
            {
                //'$group': {category: '$parents', 
                '$group': {
                    _id: '$all',
                    totalFees: { $sum: '$price' }
                    // averageFees: { $avg: '$fees' }
                }
            }
        ])
        res.render("foinfo", { farmerones: items, total: price[0] })
    }
    catch (err) {
        console.log(err)
        res.send("failed to retrive student details")
    }
});



// delete route
router.post("/foinfo/delete", async (req, res) => {
    try {
        await foRegister.deleteOne({ _id: req.body.id });
        res.redirect("back")
    }
    catch (err) {
        console.log(err)
    }
});

//edit route
router.get("/edit_fo/:id", async (req, res) => {
    try {
        const item = await foRegister.findOne({ _id: req.params.id });
        res.render("fo_edit", { farmerone: item });
    }
    catch (err) {
        console.log(err)
        res.send("could not find student");
        console.log(err)
    }
});


router.post("/edit_fo", async (req, res) => {
    try {
        await foRegister.findOneAndUpdate({ _id: req.query.id }, req.body);
        res.redirect("/foinfo")
    }
    catch (err) {

        res.send("could not update student details");
        console.log(err)
    }
});





module.exports = router

