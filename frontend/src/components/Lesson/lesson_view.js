import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Course_Dashboard from "../Course/course_dashboard.js";

function View_Lesson() {

    var courseView = reactLocalStorage.getObject('View_Lesson');
    const[Lesson, setLesson] = useState([]); 
    const[l_name, setL_name] = useState("");
    const[lecturer, setLecturer] = useState("");
    const[l_image, setL_image] = useState("");
    const[lesson_content, setLesson_content] = useState("");
    const[l_video, setL_video] = useState("");
    const[l_description, setL_description] = useState("");


    useEffect(() =>{
        axios.get("http://localhost:5000/Lesson/view-all-l")
        .then(res => setLesson(res.data))
        .catch(error => console.log(error));
    });
    return(
        <div className="container-responsive bg-danger">
            <Course_Dashboard/>
            <div className="">
                <div classNmae="container">
                    <form className="p-3 mt-2">
                        <div className="card mb-1" style={{maxWidth: "fixed"}}>
                            <div className="row g-0">
                                <div className="col" >
                                    <div className="card-body bg-light">
                                        <div className="col-md-12">
                                            <h3 className="card-title ml-3 mb-2 text-center">Available Lessons</h3>
                                                <div className="row">
                                                    {Lesson.map((LessonDetails, key) => (
                                                        <div class="col-sm-4 mt-3">
                                                            <div class="card">
                                                                <div className="text-center">
                                                                    <img className="card-img-top " style={{ width: '100%' }} src={'https://res.cloudinary.com/applicationframework2021/image/upload/v1624901540/' + LessonDetails.c_image} alt="Card image cap" />
                                                                </div>
                                                                <div className="card-body">
                                                                    <h5 className="card-title text-center text-capitalize">{LessonDetails.name}</h5>
                                                                    <p className="card-text">
                                                                        <span className="fw-bold">Lesson : </span>{LessonDetails.l_name}<br />
                                                                        <span className="fw-bold"></span>{LessonDetails.l_image}<br />
                                                                        <span className="fw-bold">Lecturer : </span>{LessonDetails.lecturer}<br />
                                                                        <span className="fw-bold">Description : </span>{LessonDetails.l_description}<br /></p>
                                                                </div>
                                                                <div className="card-footer bg-white border-0 text-end">
                                                                    <a className="btn btn-dark text-light" href="#">More..</a>
                                                                    {/* <button type="button" onClick={() => deleteTechnicalCommitteeMember(LessonDetails._id)} className="btn btn-danger btn-sm">Delete <i class="bi bi-trash"></i></button>{' '}
                                                                    <button type="button" onClick={() => updateTechnicalCommitteeMember(LessonDetails._id, LessonDetails.name, LessonDetails.image, LessonDetails.department, LessonDetails.description, LessonDetails.status)} class="btn btn-success btn-sm">Update <i class="bi bi-pencil-square"></i></button> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
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

export default View_Lesson;