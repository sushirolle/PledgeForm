const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
const cors = require('cors')
router.use(cors())


router.get('/', function (req, res) {
    const path = require('path');
    res.sendFile(path.resolve('api/HTML/pledgeform.html'));
});

router.post('/submit-pledge', function (req, res) {
    var outputstring =  'Thank you, ' + req.body.fullName + ', for pledging $' + req.body.pledgeAmount; 
    
    res.send(outputstring);
});

module.exports = router;