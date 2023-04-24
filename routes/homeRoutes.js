const express = require('express');
const router = express.Router();

router.get('/home', (req,res)=>{
    res.render('home')
});

// node sees files as modules
module.exports = router