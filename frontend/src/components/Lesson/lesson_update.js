import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Course_Dashboard from "../Course/course_dashboard.js";

function Update_Lesson() {
    var lessonUpdate = reactLocalStorage.getObject('Update_Lesson');

    const id = lessonUpdate[0];
    const[l_name, setL_name] = useState(lessonUpdate[1]);
    const[lecturer, setLecturer] = useState(lessonUpdate[2]);
    const[l_image, setL_image] = useState(lessonUpdate[3]);
    const[lesson_content, setLesson_content] = useState(lessonUpdate[4]);
    const[l_video, setL_video] = useState(lessonUpdate[5]);
    const[l_description, setL_description] = useState(lessonUpdate[6]);
    
    function sendLessonData(e) {
        e.preventDefault();
        const lessonUpdate ={
            l_name,
            lecturer,
            l_image,
            lesson_content,
            l_video,
            l_description
        }
        axios.put("http://localhost:5000/lesson/update/"+id, lessonUpdate).then(() => {
            const id = 0;      
        Swal.fire({  
                title: "Success!",
                text: "Lesson Updated Successfully!",
                icon: 'success',
                confirmButtonText: "OK",
                confirmButtonColor: "#00B74A",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/view-table-lesson";
                    }
                    });
                }).catch((err)=>{
        
                Swal.fire({  
                title: "Error!",
                text: "Error in Updating Lesson! Try Again.",
                icon: 'error',
                confirmButtonText: "OK",
                confirmButtonColor: "#F93154",
                type: "success"})
            })
        }
        return(
            <div>
                <Course_Dashboard/>
                <div className="container-responsive">
                    <div className="container">
                        <form className="p-3 mt-2 form-center">
                            <div className="card mb-1" style={{maxWidth: "fixed;"}}>
                                <div className="row g-0">
                                    <div className=" ">
                                        <div className="mt-0" style={{position: "absolute", width: "80vw",  opacity:"0.3"}}>
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
                                                        <input type="text" className="input-group form-control" id="l_name" name="l_name" value={l_name}
                                                        onChange={(e) =>{
                                                            setL_name(e.target.value);
                                                        }} />
                                                    </div> 
                                                </div> 
                                                <div className="col-md-8 mb-3">
                                                    <label for="" className="form-label text-left">Lecturer: </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-dark"><i className="bi bi-card-heading text-white"></i></span>
                                                        <input type="text" className="input-group form-control" id="lecturer" name="lecturer" value={lecturer}
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
                                                        <input type="file" className="input-group form-control" name="l_video" id="l_video"
                                                        onChange={(e) =>{
                                                            setL_video(e.target.value);
                                                        }}/>
                                                    </div> 
                                                </div>
                                                <div className="col-md-8 mb-5">
                                                    <label for="" className="form-label text-left">Description: </label>
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-dark"><i className="bi bi-code text-white"></i></span>
                                                        <textarea className="input-group form-control" id="l_description" name="l_description" rows="10" cols="30" value={l_description}
                                                        onChange={(e) =>{
                                                            setL_description(e.target.value);
                                                        }}>
                                                        </textarea>
                                                    </div> 
                                                </div>
                                                <div className="">
                                                        <button type="submit" name="submit" onClick={sendLessonData} className="btn btn-sm btn-outline-danger mb-3 mx-3">EDIT LESSON</button>   
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
    
    export default Update_Lesson;