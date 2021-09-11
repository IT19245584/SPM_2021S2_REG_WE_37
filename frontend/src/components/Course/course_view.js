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
    const[c_image, setC_image] = useState(courseView[2]);
    const[c_description, setC_description] = useState(courseView[3]);

    useEffect(() =>{
        axios.get("http://localhost:5000/Course/view-all")
        .then(res => setCourse(res.data))
        .catch(error => console.log(error));
    });

    function sendCourseData(e) {
        e.preventDefault();
        const courseView ={
            c_name,
            c_image,
            c_description
        }
        axios.put("http://localhost:5000/course/update/"+id, courseView).then(() => {
        const id = 0;   
        Swal.fire({  
                title: "Success!",
                text: "Course Updated Successfully!",
                icon: 'success',
                confirmButtonText: "OK",
                confirmButtonColor: "#00B74A",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/view-table";
                    }
                    });
            }).catch((err)=>{
    
                Swal.fire({  
                title: "Error!",
                text: "Error In Updating! Try Again.",
                icon: 'error',
                confirmButtonText: "OK",
                confirmButtonColor: "#F93154",
                type: "success"})
        })
    }
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
                                            <h3 className="card-title ml-3 mb-2 text-center">Available Courses</h3>
                                                <div className="row">
                                                    {Course.map((CoursedDetails, key) => (
                                                        <div class="col-sm-3 mt-3">
                                                            <div class="card">
                                                                <div className="text-center">
                                                                    <img className="card-img-top " style={{ width: '100%' }} src={'https://res.cloudinary.com/applicationframework2021/image/upload/v1624901540/' + CoursedDetails.c_image} alt="Card image cap" />
                                                                </div>
                                                                <div className="card-body">
                                                                    <h5 className="card-title text-center text-capitalize">{CoursedDetails.name}</h5>
                                                                    <p className="card-text">
                                                                        <span className="fw-bold">Course : </span>{CoursedDetails.c_name}<br />
                                                                        <span className="fw-bold">Description : </span>{CoursedDetails.c_description}<br />
                                                                        </p>
                                                                </div>
                                                                <div className="card-footer bg-white border-0 text-end">
                                                                    <a className="btn btn-dark text-light">More..</a>
                                                                    {/* <button type="button" onClick={() => deleteTechnicalCommitteeMember(CoursedDetails._id)} className="btn btn-danger btn-sm">Delete <i class="bi bi-trash"></i></button>{' '}
                                                                    <button type="button" onClick={() => updateTechnicalCommitteeMember(CoursedDetails._id, CoursedDetails.name, CoursedDetails.image, CoursedDetails.department, CoursedDetails.description, CoursedDetails.status)} class="btn btn-success btn-sm">Update <i class="bi bi-pencil-square"></i></button> */}
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