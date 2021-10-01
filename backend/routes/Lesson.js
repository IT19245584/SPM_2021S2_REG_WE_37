const router = require('express').Router();
let Lesson = require('../models/Lesson');

//add new Lesson
// const date = new Date().toISOString().slice(0,10);
router.route('/add').post((req,res) => {
    const l_name = req.body.l_name;
    const lecturer = req.body.lecturer;
    const l_image = req.body.l_image;
    const lesson_content = req.body.lesson_content;
    const l_video = req.body.l_video;
    const l_description = req.body.l_description;
    //const state ="Pending";

    const newLesson = new Lesson({
        l_name,
        lecturer,
        l_image,
        lesson_content,
        l_video,
        l_description
        // state
    })

    newLesson.save().then(() =>{
        res.json("New Lesson Added");
    }).catch((err) => {
        console.log(err);
    })
})

//Lesson->url
//view all via table view
router.route("/view-all-l").get((req, res) => {
    Lesson.find().then((Lesson) => {
        res.json(Lesson)
    }).catch((err) => {
        console.log(err);
    })
})

//update
router.route("/update/:id").put(async (req, res) => {
    let LessonID = req.params.id;
    const { l_name, lecturer, l_image, lesson_content, l_video, l_description
    } = req.body;

    const updateLesson = {
        l_name,
        lecturer,
        l_image,
        lesson_content,
        l_video,
        l_description
    }

    const update = await Lesson.findByIdAndUpdate(LessonID, updateLesson)
    .then(() => {
    res.status(200).send({status: "Lesson Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating Lesson", error: err.message});
    })
})

//delete
router.route("/delete/:id").delete(async (req, res) => {
    let LessonID = req.params.id;
    await Lesson.findByIdAndDelete(LessonID)
        .then(() => {
            res.status(200).send({status: "Lesson Deleted"});
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({status: "Error with delete Lesson", error});
        })
})

//view one Lesson,s information
router.route("/get/:id").get(async (req, res) => {
    let LessonID = req.params.id;
    const lson = await Lesson.findById(LessonID)
    .then((Lesson) => {
        res.status(200).send({status: "Lesson fetched", Lesson})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get Lesson", error: err.message});
    })
})

module.exports = router;