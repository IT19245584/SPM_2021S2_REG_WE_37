import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Course_Dashboard from "./course_dashboard.js";
function View_Table_Course() {

    const[c_name, setC_name] = useState("");
    const[c_image, setC_image] = useState("");
    const[c_description, setC_description] = useState("");

    function sendCourseData(e) {
        e.preventDefault();
        const addCourse ={
            c_name,
            c_image,
            c_description
        }
        axios.post("http://localhost:5000/Course/view-all", addCourse).then(() => {
            Swal.fire({  
                title: "Success!",
                text: "Course Added Successfully!",
                icon: 'success',
                confirmButtonText: "OK",
                confirmButtonColor: "#00B74A",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/course";
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
            <Course_Dashboard/>
            <div className="container-fluid">
                <div classNmae="container">
                


                </div>
            </div>
        </div>
    );
}

export default View_Table_Course;