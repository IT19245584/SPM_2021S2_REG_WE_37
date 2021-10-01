const router = require('express').Router();
let refferal_schema = require('../models/refferal');
const jwt = require('jsonwebtoken');

router.route('/addrefferal').post((req,res) => {
    const id = req.body.id;
    const code = req.body.code;

    const refferal = new refferal_schema({
       userId,
       code});

    refferal.save()
        .then(() => res.json('Code Added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route("/allRefferal").get(async (req, res) => {
        refferal_schema.find()
                .then(refferal => res.json(refferal))
                .catch(err => res.status(400).json('No Data'))
});


module.exports = router;