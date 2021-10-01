const router = require('express').Router();
let refferal_point_schema = require('../models/refferal_point');
const jwt = require('jsonwebtoken');

router.route('/addrefferalpoint').post((req,res) => {
    const code = req.body.code;
    const point = req.body.point;

    const refferal_point = new refferal_point_schema({
       code, point});

    refferal_point.save()
        .then(() => res.json('Point Added!'))
        .catch(err => res.status(400).json('Error: '+err));
});


module.exports = router;