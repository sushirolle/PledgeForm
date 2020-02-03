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

router.get('/', function (req, res) {
    res.sendFile(path.resolve('public/HTML/pledgeform.html'));
});

function formatMoney(number) {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

router.post('/submit-pledge', function (req, res) {
    const compiledFunction = pug.compileFile('public/HTML/confirmation.pug');
    const path = 'database/entries.json';
    var total = 0;

    fs.readFile(path, 'utf-8', function(err, data) {
        if (err) throw err
    
        var existingDonations = JSON.parse(data);

        existingDonations.donations.push({
            email: req.body.email,
            amount: req.body.pledgeAmount
        })

        for (i = 0; i < existingDonations.donations.length; i++) {  //loop through the array
            total += parseFloat(existingDonations.donations[i].amount.replace(/,/g, ''));
        }

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