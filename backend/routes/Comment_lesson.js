const router = require('express').Router();
let Comment = require('../models/Comment_lesson');

//add new comment
router.route('/add').post((req,res) => {
    const s_name = req.body.s_name;
    const s_comment = req.body.s_comment;
    // const s_rating = req.body.s_rating;

    const newComment = new Comment({
        s_name,
        s_comment
    })

    newComment.save().then(() =>{
        res.json("New Comment Added");
    }).catch((err) => {
        console.log(err);
    })
})

//view all via table view
router.route("/view-all").get((req, res) => {
    Comment.find().then((Comment) => {
        res.json(Comment)
    }).catch((err) => {
        console.log(err);
    })
})

//update comment
router.route("/update/:id").put(async (req, res) => {
    let CommentID = req.params.id;
    const { s_name, s_comment
    } = req.body;

    const updateComment = {
        s_name,
        s_comment
    }

    const update = await Comment.findByIdAndUpdate(CommentID, updateComment)
    .then(() => {
    res.status(200).send({status: "Comment Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating Comment", error: err.message});
    })
})

//delete comment
router.route("/delete/:id").delete(async (req, res) => {
    let CommentID = req.params.id;
    await Comment.findByIdAndDelete(CommentID)
        .then(() => {
            res.status(200).send({status: "Comment Deleted"});
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({status: "Error with delete Comment", error});
        })
})

//view one Comment's information
router.route("/get/:id").get(async (req, res) => {
    let CommentID = req.params.id;
    const crse = await Comment.findById(CommentID)
    .then((Comment) => {
        res.status(200).send({status: "Comment fetched", Comment})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get Comment", error: err.message});
    })
})

module.exports = router;