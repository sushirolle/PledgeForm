const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const fs = require('fs');

router.use(cors())
router.use(bodyParser.urlencoded({ extended: false }));
router.use('/public', express.static('public'))

router.get('/', function (req, res) {
    res.sendFile(path.resolve('public/HTML/pledgeform.html'));
});

router.post('/submit-pledge', function (req, res) {
    const path = 'database/entries.json';
    var outputstring =  'Thank you, ' + req.body.fullName + 
    ', for pledging $' + req.body.pledgeAmount + "!"; 
    var total = 0;

    fs.readFile(path, 'utf-8', function(err, data) {
        if (err) throw err
    
        var existingDonations = JSON.parse(data)

        existingDonations.donations.push({
            email: req.body.email,
            amount: req.body.pledgeAmount
        })

        for (i = 0; i < existingDonations.donations.length; i++) {  //loop through the array
            total += parseFloat(existingDonations.donations[i].amount);
        }
    
        outputstring += " We've raised $" + total + " so far!"

        fs.writeFile(path, JSON.stringify(existingDonations), 'utf-8', function(err) {
            if (err) throw err
            
            res.send(outputstring);

        })
    });
});

module.exports = router;