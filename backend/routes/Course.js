const router = require('express').Router();
let Course = require('../models/Course');

//add new course
// const date = new Date().toISOString().slice(0,10);
router.route('/add').post((req,res) => {
    const c_name = req.body.c_name;
    const c_image = req.body.c_image;
    const c_description = req.body.c_description;
    //const state ="Pending";

    const newCourse = new Course({
        c_name,
        c_image,
        c_description
        // state
    })

    newCourse.save().then(() =>{
        res.json("New Course Added");
    }).catch((err) => {
        console.log(err);
    })
})

//Course->url
//view all via table view
router.route("/view-all").get((req, res) => {
    Course.find().then((Course) => {
        res.json(Course)
    }).catch((err) => {
        console.log(err);
    })
})

//update
router.route("/update/:id").put(async (req, res) => {
    let CourseID = req.params.id;
    const { c_name, c_image, c_description
    } = req.body;

    const updateCourse = {
        c_name,
        c_image,
        c_description
    }

    const update = await Course.findByIdAndUpdate(CourseID, updateCourse)
    .then(() => {
    res.status(200).send({status: "Course Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating Course", error: err.message});
    })
})

//delete
router.route("/delete/:id").delete(async (req, res) => {
    let CourseID = req.params.id;
    await Course.findByIdAndDelete(CourseID)
        .then(() => {
            res.status(200).send({status: "Course Deleted"});
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({status: "Error with delete Course", error});
        })
})

//view one Course,s information
router.route("/get/:id").get(async (req, res) => {
    let CourseID = req.params.id;
    const crse = await Course.findById(CourseID)
    .then((Course) => {
        res.status(200).send({status: "Course fetched", Course})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get Course", error: err.message});
    })
})

module.exports = router;