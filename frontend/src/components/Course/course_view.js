import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Course_Dashboard from "./course_dashboard.js";
function View_Course() {
    var courseView = reactLocalStorage.getObject('View_Course');
    const [Course, setCourse] = useState([]);
    const id = courseView[0];
    const[c_name, setC_name] = useState(courseView[1]);
    const[c_image, setC_image] = useState("https://res.cloudinary.com/dece6pnob/image/upload/v1633066858/"+ courseView[2]);
    const[c_description, setC_description] = useState(courseView[3]);

    useEffect(() =>{
        axios.get("http://localhost:5000/Course/view-all")
        .then(res => setCourse(res.data))
        .catch(error => console.log(error));
    });
    return(
        <div className="container-responsive bg-danger">
            <Course_Dashboard/>
            <div className="">
                <div className="container">
                    <form className="p-3 mt-2">
                        <div className="card mb-1" style={{maxWidth: "fixed"}}>
                            <div className="row g-0">
                                <div className="col" >
                                    <div className="card-body bg-light">
                                        <div className="col-md-12">
                                            <h3 className="card-title ml-3 mb-2 text-center">Available Courses</h3>
                                            <div>
                                                <span className="bg-dark p-2 rounded"><i class="text-danger bi bi-award-fill"></i><a className="badge badge-danger" href="/lesson-comment">Check User Review</a></span>
                                            
                                            </div>
                                                <div className="row">
                                                    {Course.map((CoursedDetails, key) => (
                                                        <div class="col-sm-6 mt-3">
                                                            <div class="card">
                                                                <div className="text-center">
                                                                    <img className="card-img-top " 
                                                                        style={{ 
                                                                            width: '100%', 
                                                                            float: "left",
                                                                            width:  "100%",
                                                                            height: "500px",
                                                                            objectFit: "cover" 
                                                                        }}
                                                                    src={'https://res.cloudinary.com/dece6pnob/image/upload/v1633066858/' + CoursedDetails.c_image} alt="Card image cap" />
                                                                </div>
                                                                <div className="card-body">
                                                                    <h5 className="card-title text-center text-capitalize">{CoursedDetails.name}</h5>
                                                                    <p className="card-text">
                                                                        <center>
                                                                        <span className="fw-bold">{CoursedDetails.c_name}</span><br />
                                                                        </center>
                                                                        <span className="fw-bold"></span>{CoursedDetails.c_description}<br />
                                                                    </p>
                                                                </div>
                                                                <div className="card-footer bg-white border-0 text-end">
                                                                    <a className="btn btn-dark text-light" href="/view-lesson">More..</a>
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

export default View_Course;