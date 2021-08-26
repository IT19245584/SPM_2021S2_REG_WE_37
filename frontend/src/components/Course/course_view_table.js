import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Course_Dashboard from "./course_dashboard.js";
import styles from '../Course_css/course.module.css'; 

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

    //search courses
    function search_course_function() {
    // Declaring variables
    var input, search, table, tr, td, i, txtValue;
    input = document.getElementById("courseInput");
    search = input.value.toUpperCase();
    table = document.getElementById("courseTable");
    tr = table.getElementsByTagName("tr");

    // find matching names by looping
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(search) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }
    }
    }

    return(
        <div>
            <Course_Dashboard/>
            <div className="container">
                <div classNmae="container p-3">
                    <h4 className="my-3 text-center">Course Details</h4>
                    <div className={styles.noPrint}>
                    <div className="mx-3 input-group mb-3">
                        <span className="input-group-text bg-dark text-danger" id="-i-search">
                            <i className="bi bi-search"></i>
                        </span>
                        <input className="text-dark" type="text" id="courseInput" onKeyUp={() => search_course_function()} placeholder="Search Course"/>
                    </div>
                    </div>
                    <div className={styles.noPrint}>
                        <a className="mb-3 mx-3 btn btn-sm btn-outline-dark bi bi-arrow-repeat font-weight-bold text-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Refresh" href="/view-table"></a>
                        <a className="mb-3 mx-3 btn btn-sm btn-outline-primary bi bi-plus-lg font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add" href="/course"></a>
                        <a className="mb-3 mx-3 btn btn-sm btn-outline-danger bi bi-printer font-weight-bold text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Print" onClick={() => window.print()}></a>
                    </div>
                    <table className="table table-responsive table-hover" id="courseTable">
                        <caption className={styles.noPrint}>List of available courses</caption>
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