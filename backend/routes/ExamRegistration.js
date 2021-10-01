const router = require('express').Router();
let ExamRegistration = require('../models/ExamRegistration');

router.route('/add').post((req,res) => {
    const regNo = req.body.regNo;
    const lesson = req.body.lesson;
    const examDate = req.body.examDate;
    const session = req.body.session;
    const amount = req.body.amount;
    const paymentStatus = req.body.paymentStatus;
    
 

    const newExamRegistration = new ExamRegistration({
        regNo,
        lesson,
        examDate,
        session,
        amount,
        paymentStatus
    });

    newExamRegistration.save()
        .then(() => res.json("Congargulations!! You are successfully Registered"))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/view').get((req,res) => {
    ExamRegistration.find()
        .then(ExamRegistration => res.json(ExamRegistration))
        .catch(err => res.status(400).json('Error: ' +err)); 
});

router.route('/delete/:id').delete(async (req,res) => {
    let id = req.params.id;
    await ExamRegistration.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Successfully Unenroll from the lesson."});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while deleting lesson.", error: err.message});
    }); 
});

router.route('/update/:id').post(async (req,res) => {
    let id = req.params.id;
    const amount = req.body.amount;
    const lesson = req.body.lesson;
    const examDate = req.body.examDate;
    const session = req.body.session;
    const updateExamRegistration={
        amount,
        lesson,
        examDate,
        session
    }
    const update = await ExamRegistration.findOneAndUpdate({_id:id},updateExamRegistration).then(() => {
        res.status(200).send({status: "Successfully updated lesson details"});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while updating lesson details.", error: err.message});
    });
});

module.exports = router;
