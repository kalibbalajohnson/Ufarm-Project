const express = require('express');
const router = express.Router();

router.get('/about', (req,res)=>{
    res.render('about')
});

// node sees files as modules
module.exports = router