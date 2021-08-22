import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
// import Course_Dashboard from "./src/components/Course/course_dashboard.js";
function Add_Lesson() {

    const[l_name, setL_name] = useState("");
    const[lecturer, setLecturer] = useState("");
    const[l_image, setL_image] = useState("");
    const[lesson_content, setLesson_content] = useState("");
    const[l_video, setL_video] = useState("");
    const[l_description, setL_description] = useState("");

    function sendLessonData(e) {
        e.preventDefault();
        const addLesson ={
            l_name,
            lecturer,
            l_image,
            lesson_content,
            l_video,
            l_description
        }
        axios.post("http://localhost:5000/Lesson/add", addLesson).then(() => {
            Swal.fire({  
                title: "Success!",
                text: "Lesson Added Successfully!",
                icon: 'success',
                confirmButtonText: "OK",
                confirmButtonColor: "#00B74A",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/lesson";
                    }
                    });
            }).catch((err)=>{
    
                Swal.fire({  
                title: "Error!",
                text: "Error in adding Lesson! Try Again.",
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
                    <form className="p-3 mt-2 form-center">
                        <div className="card mb-1" style={{maxWidth: "fixed;"}}>
                            <div className="row g-0">
                                <div className=" ">
                                    <div className="mt-0" style={{position: "absolute", width: "80vw",  opacity:"0.5"}}>
                                        <img src="../../img/undraw_studying_s3l7.png" alt="update-image"/>
                                    </div>
                                </div>
                                <center>
                                <div className="col-md-7" >
                                    <div className="card-body">
                                        <div className="col-md-12">
                                        <h3 className="card-title ml-3 mb-2">New Lesson</h3>
                                            <div className="col-md-8 mb-3">
                                                <label for="" className="form-label text-left">Lesson: </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark"><i className="bi bi-card-heading text-white"></i></span>
                                                    <input type="text" className="input-group form-control" id="l_name" name="l_name" 
                                                    onChange={(e) =>{
                                                        setL_name(e.target.value);
                                                    }} />
                                                </div> 
                                            </div> 
                                            <div className="col-md-8 mb-3">
                                                <label for="" className="form-label text-left">Lecturer: </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark"><i className="bi bi-card-heading text-white"></i></span>
                                                    <input type="text" className="input-group form-control" id="lecturer" name="lecturer" 
                                                    onChange={(e) =>{
                                                        setLecturer(e.target.value);
                                                    }} />
                                                </div> 
                                            </div>  
                                            <div className="col-md-8 mb-3">
                                                <label for="" className="form-label">Upload Image: </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark"><i className="bi bi-file-image text-white"></i></span>
                                                    <input type="file" className="input-group form-control" name="l_image" id="l_image"
                                                    onChange={(e) =>{
                                                        setL_image(e.target.value);
                                                    }}/>
                                                </div> 
                                            </div>
                                            <div className="col-md-8 mb-5">
                                                <label for="" className="form-label text-left">Lesson Content: </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark"><i className="bi bi-code text-white"></i></span>
                                                    <input type="file" accept="application/pdf" className="input-group form-control" id="lesson_content" name="lesson_content"
                                                    onChange={(e) =>{
                                                        setLesson_content(e.target.value);
                                                    }}/>
                                                </div> 
                                            </div>
                                            <div className="col-md-8 mb-3">
                                                <label for="" className="form-label">Upload Video: </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark"><i className="bi bi-file-image text-white"></i></span>
                                                    <input type="video/mp4" className="input-group form-control" name="l_video" id="l_video"
                                                    onChange={(e) =>{
                                                        setL_video(e.target.value);
                                                    }}/>
                                                </div> 
                                            </div>
                                            <div className="col-md-8 mb-5">
                                                <label for="" className="form-label text-left">Description: </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark"><i className="bi bi-code text-white"></i></span>
                                                    <textarea className="input-group form-control" id="l_description" name="l_description" rows="5" cols="30"
                                                    onChange={(e) =>{
                                                        setL_description(e.target.value);
                                                    }}>
                                                    </textarea>
                                                </div> 
                                            </div>
                                            <div className="">
                                                    <button type="submit" name="submit" onClick={sendLessonData} className="btn btn-sm btn-outline-danger mb-3 mx-3">ADD LESSONS</button>   
                                                    <input type="reset" value="RESET DATA" className="btn btn-sm btn-outline-dark  mb-3 mx-3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </center>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add_Lesson;