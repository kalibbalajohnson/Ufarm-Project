const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login')
const User = require('../models/userModel');

router.get("/aodash", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    let farmerWard = req.user['ward']
    console.log('the farmer ward is:', farmerWard)
    if (req.user.role == "ao") {
        try {
            let activeFarmers = await User.countDocuments({ role: 'uf', ward: farmerWard });
            let activeFarmer = await User.countDocuments({ role: 'fo', ward: farmerWard });
            let newFarmerOnes = await User.find({ role: 'fo', ward: farmerWard })
            res.render("aoDash", {
                FarmerOnes: newFarmerOnes,
                activeFarmer,
                activeFarmers,
                farmerWard
            })
        } catch (error) {
            res.status(400).send('could not find farmers in the database')
        }
    } else { res.redirect('/login') }
});

module.exports = router
