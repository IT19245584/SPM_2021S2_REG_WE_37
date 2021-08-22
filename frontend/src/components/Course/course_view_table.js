import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Course_Dashboard from "./course_dashboard.js";

function View_Table_Course() {
    const[Course, setCourse] = useState([]); 
    const[c_name, setC_name] = useState("");
    // const[c_image, setC_image] = useState("");
    const[c_description, setC_description] = useState("");

    useEffect(() =>{
        axios.get("http://localhost:5000/Course/view-all")
        .then(res => setCourse(res.data))
        .catch(error => console.log(error));
    });

    function remove_course(id){
        axios.delete("http://localhost:5000/Course/delete/"+id).then(() =>{
        	Swal.fire({  
                title: "Success!",
                text: "Course Deleted",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/view-table";
                    }
                });
        }).catch((err)=>{
            Swal.fire({  
                title: "Error!",
                text: "Course Details Not Delete",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
        });
    }

    return(
        <div>
            <Course_Dashboard/>
            <div className="container-fluid">
                <div classNmae="container p-3">
                    <h3 className="my-3">Course Details</h3>
                    <table class="table table-responsive table-hover table-sm">
                        <caption>List of available courses</caption>
                        <thead>
                            <tr className="">
                                <th scope="col">No</th>
                                <th scope="col">Course</th>
                                {/* <th scope="col">Image</th> */}
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Course.map((course, key) =>{
                                return(
                                    <tr>
                                        <td scope="row">{key+1}</td>
                                        <td>{course.c_name}</td>
                                        {/* <td>{course.c_image}</td> */}
                                        <td>{course.c_description}</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-1">
                                                    <a onClick={() => remove_course(course._id)} className="m-1 text-danger">
                                                        <i className="bi bi-trash-fill"></i>
                                                    </a>
                                                </div>              
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        </table>

                </div>
            </div>
        </div>
    );
}

export default View_Table_Course;