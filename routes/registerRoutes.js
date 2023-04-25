const express = require('express');
const router = express.Router();
const connectEnsureLogin =require('connect-ensure-login');
//imported model
const Register = require("../models/registerModel");
const User = require('../models/userModel');


router.get("/register", (req, res) => {
    res.render("register")
});

router.post("/register", async (req, res) => {
    try {
        const register = new Register(req.body);
        await register.save()
        res.redirect("/register")
        console.log(req.body)
    }
    catch (err) {
        console.log(err)
    }
});



//we redirect to a path then render a file
router.get("/students", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    try {
        let items = await Register.find();
        // console.log(items)
        let price = await Register.aggregate([
            {
                //'$group': {category: '$parents', 
                '$group': {
                    _id: '$all',
                    totalFees: { $sum: '$price' }
                    // averageFees: { $avg: '$fees' }
                }
            }
        ])
        res.render("students", { students: items, total: price[0] })
    }
    catch (err) {
        console.log(err)
        res.send("failed to retrive student details")
    }
});


// router.get("/foDash", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
//     let farmerWard = req.user['ward']
//     console.log('the farmer ward is:', farmerWard)
//     if (req.user.role == "fo") {
//         try {
//             let activeFarmers = await User.countDocuments({ role: 'uf', ward: farmerWard });
//             let newUrbanFarmers = await User.find({ role: 'uf', ward: farmerWard })
//             res.render("foDash", {
//                 urbanFarmers: newUrbanFarmers,
//                 activeFarmers,
//                 farmerWard
//             })
//         } catch (error) {
//             res.status(400).send('could not find farmers in the database')
//         }
//     } else { res.redirect('/login') }
//     try {
//         let items = await Register.find();
//         let fees = await Register.aggregate([
//             {
//                 '$group': {
//                     _id: '$all',
//                     totalFees: { $sum: '$fees' }
//                 }
//             }
//         ])
//         res.render("foDash", { students: items, total: fees[0] })
//     }
//     catch (err) {
//         console.log(err)
//         res.send("failed to retrieve student details")
//     }

// });



// router.get("/fodash", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
//     let farmerWard = req.user['ward']
//     console.log('the farmer ward is:', farmerWard)
//     if (req.user.role == "fo") {
//         try {
//             let activeFarmers = await User.countDocuments({ role: 'uf', ward: farmerWard });
//             let newUrbanFarmers = await User.find({ role: 'uf', ward: farmerWard })
//             res.render("foDash", {
//                 urbanFarmers: newUrbanFarmers,
//                 activeFarmers,
//                 farmerWard
//             })
//         } catch (error) {
//             res.status(400).send('could not find farmers in the database')
//         }
//     } else { res.redirect('/login') }
// });

router.get("/foDash", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    try {
        let items = await Register.find();
        // console.log(items)
        let fees = await Register.aggregate([
            {
                //'$group': {category: '$parents', 
                '$group': {
                    _id: '$all',
                    totalFees: { $sum: '$price' }
                    // averageFees: { $avg: '$fees' }
                }
            }
        ])
        res.render("foDash", { students: items, total: fees[0] })
    }
    catch (err) {
        console.log(err)
        res.send("failed to retrive student details")
    }
});

// delete route
router.post("/students/delete", async (req, res) => {
    try {
        await Register.deleteOne({ _id: req.body.id });
        res.redirect("back")
    }
    catch (err) {
        console.log(err)
    }
});

//edit route
router.get("/edit_student/:id", async (req, res) => {
    try {
        const item = await Register.findOne({ _id: req.params.id });
        res.render("student_edit", { student: item });
    }
    catch (err) {
        console.log(err)
        res.send("could not find student");
        console.log(err)
    }
});


router.post("/edit_student", async (req, res) => {
    try {
        await Register.findOneAndUpdate({ _id: req.query.id }, req.body);
        res.redirect("/students")
    }
    catch (err) {

        res.send("could not update student details");
        console.log(err)
    }
});





module.exports = router

