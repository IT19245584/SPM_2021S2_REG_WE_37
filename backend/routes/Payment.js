const router = require('express').Router();
let Payment = require('../models/Payment');

router.route('/add').post((req,res) => {
    const accNo = req.body.accNo;
    const amount = req.body.amount;
    const expiryDate = req.body.expiryDate;
    const cvc = req.body.cvc;
    const email = req.body.email;
  
    const newPayment = new Payment({
        accNo,
        amount,
        expiryDate,
        cvc,
        email
        
    });

    newPayment.save()
        .then(() => res.json("Congargulations!! You are successfully done the payment"))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/view').get((req,res) => {
    Payment.find()
        .then(Payment => res.json(Payment))
        .catch(err => res.status(400).json('Error: ' +err)); 
});




module.exports = router;
