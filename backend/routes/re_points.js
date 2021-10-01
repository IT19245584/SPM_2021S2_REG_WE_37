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


router.route("/allRefferalPoints/:id").get(async (req, res) => {
    const id = req.params.id;
        refferal_point_schema.find({code : id})
                .then(refferal_point => res.json(refferal_point))
                .catch(err => res.status(400).json('No Data'))
});

module.exports = router;