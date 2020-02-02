const express = require('express');
const router = express.Router();

//basic welcome message to get you started
router.get('/', (req, res, next) => {  
    const path = require('path');
    res.sendFile(path.resolve('api/HTML/home.html'));
});

module.exports = router;
