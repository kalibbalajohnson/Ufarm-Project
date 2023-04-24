const express = require('express');
const router = express.Router();

router.get('/checkout', (req,res)=>{
    res.render('checkout')
});

// node sees files as modules
module.exports = router