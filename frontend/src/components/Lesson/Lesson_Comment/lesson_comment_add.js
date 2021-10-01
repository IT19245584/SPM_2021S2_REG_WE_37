import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';

function Add_Lesson_Comment() {
    //view
    var lessonCommentView = reactLocalStorage.getObject('Add_Lesson_Comment');
    const [LessonComment, setLessonComment] = useState([]);
    const id = lessonCommentView[0];
    const[s_name, setS_name] = useState("");
    const[s_comment, setS_comment] = useState("");
    const[statusEmpty, setstatusEmpty] = useState("");
    const[btnStatus, setbtnStatus] = useState(true);
    const[s_rating, setS_rating] = useState();
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

    function sendCommentLessonData() {
       
        const addCommentLesson ={
            s_name,
            s_comment,
            s_rating
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

    function setS_comments(e)
    {
        const comment = e;
       if((comment == "") || (s_name == "") || (s_rating == "") || (s_rating < 0) || (s_rating >= 6))
       {
        setbtnStatus(true);
        setstatusEmpty("Please Enter Valid Details");
       }else{
        setbtnStatus(false);
        setstatusEmpty("                                  ");
       }
       setS_comment(comment)
    }

    return(
        <div>
            {/* <Course_Dashboard/> */}
            <div className="container-fluid">
                <div classNmae="container">
                    <form className="p-5 mt-2">
                        <div className="card mb-0 " style={{maxWidth: "fixed"}} >
                            <div className="row g-0">
                                <div className="col-md-7 ">
                                    <div className="mt-0">
                                        <h3 className="card-title ml-3 mb-0 text-center mt-3">Available Comments</h3>
                                            <div className="row p-3">
                                                {LessonComment.map((lessonCommentDetails, key) => (
                                                    <div class="col-md-10 m-2">
                                                        {/* <div class="card bg-warning"> */}
                                                            <div className="shadow p-3 mb-1 bg-body comment_box ">
                                                            {/* <div className="p-2 border border-danger  rounded"> */}
                                                                {/* <h5 className="card-title text-center text-capitalize">{lessonCommentDetails.name}</h5> */}
                                                                <p className="card-text px-2">
                                                                <span className="fw-bold"><img className="comment_image" src="https://i.dlpng.com/static/png/4723703-700-free-teacher-school-images-pixabay-teachr-and-student-png-501_340_preview.png"></img></span>
                                                                    <span className="fw-bold"></span>   <span className="badge badge-success">{lessonCommentDetails.s_name}</span> <a onClick={() => remove_comment(lessonCommentDetails._id)} className=" text-danger">
                                                                        <i className="bi bi-trash-fill"></i>
                                                                    </a><br />
                                                                    <span className="fw-bold"> </span>{lessonCommentDetails.s_comment}<br />
                                                                    <span className="fw-bold"> </span><span className="badge badge-warning comment_show">{lessonCommentDetails.s_rating}</span>/5<br />
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
                                        <div className=" mt-5 col-md-10 shadow rounded">
                                        <h3 className="card-title ml-3 mb-2">New Comment</h3>
                                        <center>
                                            <div className="col-md-8 my-4">
                                                {/* <label for="" className="form-label text-left">Student Name: </label> */}
                                                <div className="input-group">
                                                    {/* <span className="input-group-text bg-dark"><i className="bi bi-card-heading text-white"></i></span> */}
                                                    <input type="text" placeholder="Name" className="input-group form-control comment_textbox p-2" id="s_name" name="s_name" 
                                                        onChange={(e) =>{
                                                        setS_name(e.target.value);
                                                    }} />
                                                </div> 
                                            </div>
                                            <div className="col-md-8 mb-1">
                                                {/* <label for="" className="form-label">Rate Lesson (5): </label> */}
                                                <div className="input-group">
                                                    {/* <span className="input-group-text bg-dark"><i className="bi bi-file-image text-white"></i></span> */}
                                                    <input type="number" min={0} placeholder="Rating(5)" className="input-group form-control comment_textbox p-2" name="s_rating" id="s_rating"
                                                    onChange={(e) =>{
                                                        setS_rating(e.target.value);
                                                    }}/>
                                                </div> 
                                            </div>
                                            <div className="col-md-8 my-4">
                                                {/* <label for="" className="form-label text-left">Comment: </label> */}
                                                <div className="input-group ">
                                                    {/* <span className="input-group-text bg-dark"><i className="bi bi-code text-white"></i></span> */}
                                                    <textarea placeholder="Comment" className="input-group comment_textbox p-2" id="s_comment" name="s_comment" rows="4" cols="30"
                                                    onChange={(e) =>{
                                                        setS_comments(e.target.value);
                                                    }}>
                                                    </textarea>
                                                    <span className="text-danger">{statusEmpty}</span>
                                                </div> 
                                            </div>

                                            <div className="">
                                                    <button type="button" name="submit" disabled={btnStatus} onClick={sendCommentLessonData} className="btn btn-sm btn-outline-danger mb-3 mx-3">ADD COMMENT</button>   
                                                    <input type="reset" value="RESET DATA" className="btn btn-sm btn-outline-dark  mb-3 mx-3"/>
                                            </div>
                                            </center>
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