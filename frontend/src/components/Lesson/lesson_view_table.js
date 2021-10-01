import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
// import Course_Dashboard from "..Course/course_dashboard.js";
import styles from '../Course_css/course.module.css'; 
import Course_Dashboard from '../Course/course_dashboard.js'; 

function View_Table_Lesson() {
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

    function remove_lesson(id){
        axios.delete("http://localhost:5000/Lesson/delete/"+id).then(() =>{
        	Swal.fire({  
                title: "Success!",
                text: "Lesson Deleted",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/view-table-lesson";
                    }
                });
        }).catch((err)=>{
            Swal.fire({  
                title: "Error!",
                text: "Lesson Details Not Delete",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
        });
    }

 //update
    function update(id, l_name, lecturer, l_image, lesson_content, l_video, l_description){
    reactLocalStorage.setObject("Update_Lesson", [id, l_name, lecturer, l_image, lesson_content, l_video, l_description]);
    window.location.href = "/update-lesson"
}

    //search lessons
    function search_lesson_function() {
    // Declare relevant variables
    var input, search, table, tr, td, i, txtValue;
    input = document.getElementById("lessonInput");
    search = input.value.toUpperCase();
    table = document.getElementById("lessonTable");
    tr = table.getElementsByTagName("tr");

    // find relevant names
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

    //search  courses by lecturer
    function search_lecturer_function() {
        // Declare relevant variables
        var input, search, table, tr, td, i, txtValue;
        input = document.getElementById("lecturerInput");
        search = input.value.toUpperCase();
        table = document.getElementById("lessonTable");
        tr = table.getElementsByTagName("tr");
    
        // find relevant names
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
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
                    <h4 className="my-3 text-center">Lesson Details</h4>
                    <div  className={styles.noPrint}>
                    <div class="row">
                        <div class="col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-dark text-danger" id="-i-search">
                                <i className="bi bi-search"></i>
                            </span>
                            <input className="text-dark" type="text" id="lessonInput" onKeyUp={() => search_lesson_function()} placeholder="Search Lesson"/>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-dark text-danger" id="-i-search">
                                <i className="bi bi-search"></i>
                            </span>
                            <input className="text-dark" type="text" id="lecturerInput" onKeyUp={() => search_lecturer_function()} placeholder="Search Lecturer"/>
                        </div>
        
                        </div>
                    </div>
                    </div>

                    <div className={styles.noPrint}>
                        <a className="mb-3 mr-3 btn btn-sm btn-outline-dark bi bi-arrow-repeat font-weight-bold text-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Refresh" href="/view-table-lesson"></a>
                        <a className="mb-3 mx-3 btn btn-sm btn-outline-primary bi bi-plus-lg font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add" href="/lesson"></a>
                        <a className="mb-3 mx-3 btn btn-sm btn-outline-danger bi bi-printer font-weight-bold text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Print" onClick={() => window.print()}></a>
                    </div>
                    <table className="table table-responsive table-hover bg-light" id="lessonTable">
                        <caption className={styles.noPrint}>List of available lessons</caption>
                        <thead>
                            <tr className="bg-light">
                                <th scope="col">No</th>
                                <th scope="col">Lesson</th>
                                <th scope="col">Lecturer</th>
                                <th scope="col">Description</th>
                                <th scope="col" className={styles.noPrint}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Lesson.map((lesson, key) =>{
                                return(
                                    <tr>
                                        <td scope="row">{key+1}</td>
                                        <td>{lesson.l_name}</td>
                                        <td>{lesson.lecturer}</td>
                                        <td>{lesson.l_description}</td>
                                        <td>
                                            <div className="row" className={styles.noPrint}>
                                                <div className="col-1">
                                                    <a onClick={() => remove_lesson(lesson._id)} className="m-1 text-danger">
                                                        <i className="bi bi-trash-fill"></i>
                                                    </a>
                                                </div>   
                                                <div className="col-1">
                                                    <a onClick={() => update(
                                                        lesson._id, lesson.l_name, lesson.lecturer, lesson.l_image, lesson.lesson_content, lesson.l_video, lesson.l_description 
                                                        )} className="m-1 text-primary">
                                                        <i className="bi bi-pencil-square"></i>
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

export default View_Table_Lesson;