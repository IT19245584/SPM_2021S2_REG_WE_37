import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

// https://material-ui.com/components/rating/
// https://www.w3.org/WAI/tutorials/forms/custom-controls/#a-star-rating
// import Course_Dashboard from "../../LessonComment/course_dashboard.js";

function Add_Lesson_Comment() {
    //view
    var lessonCommentView = reactLocalStorage.getObject('Add_Lesson_Comment');
    const [LessonComment, setLessonComment] = useState([]);
    const id = lessonCommentView[0];
    const[s_name, setS_name] = useState(lessonCommentView[1]);
    const[s_comment, setS_comment] = useState(lessonCommentView[2]);
    // const[s_rating, setS_rating] = useState(lessonCommentView[3]);
    // const[value, setValue] = useState(lessonCommentView[4]);
   
    useEffect(() =>{
        axios.get("http://localhost:5000/comment-lesson/view-all")
        .then(res => setLessonComment(res.data))
        .catch(error => console.log(error));
    });

    function remove_comment(id){
        axios.delete("http://localhost:5000/comment-lesson/delete/"+id).then(() =>{
        	Swal.fire({  
                title: "Success!",
                text: "Comment Deleted",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/lesson-comment";
                    }
                });
        }).catch((err)=>{
            Swal.fire({  
                title: "Error!",
                text: "Comment Not Delete",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
        });
    }

    //save
    // const[s_name, setS_name] = useState("");
    // const[s_comment, setS_comment] = useState("");
    // const[s_rating, setS_rating] = useState("");

    // const [value, setValue] = React.useState(4);
//   const [hover, setHover] = React.useState(-1);
//   const classes = useStyles();

    function sendCommentLessonData(e) {
        e.preventDefault();
        const addCommentLesson ={
            s_name,
            s_comment
        }
        axios.post("http://localhost:5000/comment-lesson/add", addCommentLesson).then(() => {
            Swal.fire({  
                title: "Success!",
                text: "Comment Added Successfully!",
                icon: 'success',
                confirmButtonText: "OK",
                confirmButtonColor: "#00B74A",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/lesson-comment";
                    }
                    });
            }).catch((err)=>{
    
                Swal.fire({  
                title: "Error!",
                text: "Error! Try Again.",
                icon: 'error',
                confirmButtonText: "OK",
                confirmButtonColor: "#F93154",
                type: "success"})
        })
    }
    return(
        <div>
            {/* <Course_Dashboard/> */}
            <div className="container-fluid">
                <div classNmae="container">
                    <form className="p-3 mt-2">
                        <div className="card mb-0" style={{maxWidth: "fixed"}}>
                            <div className="row g-0">
                                <div className="col-md-7 ">
                                    <div className="mt-0">
                                        <h3 className="card-title ml-3 mb-0 text-center mt-3">Available Comments</h3>
                                            <div className="row p-4">
                                                {LessonComment.map((lessonCommentDetails, key) => (
                                                    <div class="col-md-6 my-3">
                                                        {/* <div class="card bg-warning"> */}
                                                            <div className="shadow p-2 mb-1 bg-body rounded">
                                                            {/* <div className="p-2 border border-danger  rounded"> */}
                                                                {/* <h5 className="card-title text-center text-capitalize">{lessonCommentDetails.name}</h5> */}
                                                                <p className="card-text">
                                                                    <span className="fw-bold">Name : </span>{lessonCommentDetails.s_name}<br />
                                                                    <span className="fw-bold">Comment : </span>{lessonCommentDetails.s_comment}<br />
                                                                    {/* <span className="fw-bold">Rating : </span>{lessonCommentDetails.s_rating}<br /> */}
                                                                    {/* <span className="fw-bold">Rating : </span>{lessonCommentDetails.value}<br /> */}

                                                            {/* </div> */}
                                                            {/* <div className="card-footer bg-white border-0 text-end"> */}
                                                                {/* <a className="text-primary"><i class="bi bi-pencil"></i></a> */}
                                                                <a onClick={() => remove_comment(lessonCommentDetails._id)} className="m-1 text-danger">
                                                        <i className="bi bi-trash-fill"></i>
                                                    </a>
                                                                </p>
                                                                </div>
                                                        </div>
                                                    // </div>
                                                ))}
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-5" >
                                    <div className="card-body ">
                                        <div className=" mt-5 col-md-12 shadow rounded">
                                        <h3 className="card-title ml-3 mb-2">New Comment</h3>
                                            <div className="col-md-12 my-4">
                                                {/* <label for="" className="form-label text-left">Student Name: </label> */}
                                                <div className="input-group">
                                                    {/* <span className="input-group-text bg-dark"><i className="bi bi-card-heading text-white"></i></span> */}
                                                    <input type="text" placeholder="Name" className="input-group form-control comment_textbox" id="s_name" name="s_name" 
                                                        onChange={(e) =>{
                                                        setS_name(e.target.value);
                                                    }} />
                                                </div> 
                                            </div>
                                            <div className="col-md-12 my-4">
                                                {/* <label for="" className="form-label text-left">Comment: </label> */}
                                                <div className="input-group ">
                                                    {/* <span className="input-group-text bg-dark"><i className="bi bi-code text-white"></i></span> */}
                                                    <textarea placeholder="Comment" className="input-group comment_textbox" id="s_comment" name="s_comment" rows="5" cols="30"
                                                    onChange={(e) =>{
                                                        setS_comment(e.target.value);
                                                    }}>
                                                    </textarea>
                                                </div> 
                                            </div>
                                            {/* <div className="col-md-8 mb-1">
                                                <label for="" className="form-label">Rate Lesson (5): </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark"><i className="bi bi-file-image text-white"></i></span>
                                                    <input type="number"  maxLength={1} min={0} max={5} className="input-group form-control" name="s_rating" id="s_rating"
                                                    onChange={(e) =>{
                                                        setS_rating(e.target.value);
                                                    }}/>
                                                </div> 
                                            </div> */}

                                            <div className="">
                                                    <button type="submit" name="submit" onClick={sendCommentLessonData} className="btn btn-sm btn-outline-danger mb-3 mx-3">ADD COMMENT</button>   
                                                    <input type="reset" value="RESET DATA" className="btn btn-sm btn-outline-dark  mb-3 mx-3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add_Lesson_Comment;