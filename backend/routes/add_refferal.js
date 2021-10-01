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

router.route("/deleteAccount/:id").delete(async (req, res) => {
        let id = req.params.id;
        refferal_schema.findByIdAndDelete(id).then(() => {
                res.status(200).send({status :"Account Delted"});
        }).catch((err) => {
            console.log(err);
                res.status(500).send({status: "Error with Deleting Data",error: err.message});
        });
});


router.route("/searchUserAccount/:id").get(async (req, res) => {
          let id = req.params.id;
          refferal_schema.find({userId: { $regex: ".*" + id + ".*"} })
                .then(account => res.json(account))
                .catch(err => res.status(400).json('No Data'))
});

router.route("/searchAccount/:id").get(async (req, res) => {
          let id = req.params.id;
          refferal_schema.find({userId: id})
                .then(account => res.json(account))
                .catch(err => res.status(400).json('No Data'))
});
module.exports = router;