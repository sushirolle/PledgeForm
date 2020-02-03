const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const fs = require('fs');
const pug = require('pug');

router.use(cors())
router.use(bodyParser.urlencoded({ extended: false }));
router.use('/public', express.static('public'))

//basic function to return home page
router.get('/', function (req, res) {
    res.sendFile(path.resolve('public/HTML/pledgeform.html'));
});

//formats database entries as US currency
function formatMoney(number) {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

//creates custom thank-you for donor
router.post('/submit-pledge', function (req, res) {

    const compiledFunction = pug.compileFile('public/HTML/confirmation.pug');
    const path = 'database/entries.json';
    //all donations to date
    var total = 0;

    fs.readFile(path, 'utf-8', function(err, data) {
        if (err) throw err
        //get all existing donations
        var existingDonations = JSON.parse(data);
        //add most recent donations
        existingDonations.donations.push({
            email: req.body.email,
            amount: req.body.pledgeAmount
        })
        //get running total
        for (i = 0; i < existingDonations.donations.length; i++) {  //loop through the array
            total += parseFloat(existingDonations.donations[i].amount.replace(/,/g, ''));
        }
        //return to user and record current donation in json file
        fs.writeFile(path, JSON.stringify(existingDonations), 'utf-8', function(err) {
            if (err) throw err
            var formattedTotal = formatMoney(total);
            res.send(
               compiledFunction({
                    name: req.body.fullName,
                    amount: req.body.pledgeAmount,
                    total: formattedTotal
                  })
            );

        })
    });
});

module.exports = router;