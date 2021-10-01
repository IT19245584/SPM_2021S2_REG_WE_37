import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Course_Dashboard from "./course_dashboard.js";

function Update_Course() {

    var courseUpdate = reactLocalStorage.getObject('Update_Course');

    const id = courseUpdate[0];
    const[c_name, setC_name] = useState(courseUpdate[1]);
    const[c_image, setC_image] = useState("https://res.cloudinary.com/dece6pnob/image/upload/v1633068234/"+courseUpdate[2]);
    const[c_description, setC_description] = useState(courseUpdate[3]);

    function sendCourseData(e) {
        e.preventDefault();
        const courseUpdate ={
            c_name,
            c_image,
            c_description
        }
        axios.put("http://localhost:5000/course/update/"+id, courseUpdate).then(() => {
        const id = 0;   
        Swal.fire({  
                title: "Success!",
                text: "Course Updated Successfully!",
                icon: 'success',
                confirmButtonText: "OK",
                confirmButtonColor: "#00B74A",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/view-table-course";
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
        <div className="container-responsive">
            <Course_Dashboard/>
            <div className="">
                <div classNmae="container">
                    <form className="p-3 mt-2">
                        <div className="card mb-1" style={{maxWidth: "fixed"}}>
                            <div className="row g-0">
                                <div className="col-md-7 ">
                                    <div className="mt-0">
                                        {/* <img src="https://www.vippng.com/png/detail/109-1091109_developer-cartoon-programmer.png" className="mt-0 img-fluid rounded-start" alt="update-image"/> */}
                                        <img src={c_image} className="mt-0 img-fluid rounded-start p-5" alt="update-image"/>
                                    </div>
                                </div>
                                <div className="col-md-5" >
                                    <div className="card-body">
                                        <div className="col-md-12">
                                        <h3 className="card-title ml-3 mb-2">Update Course</h3>
                                            <div className="col-md-8 mb-3">
                                                <label for="" className="form-label text-left">Course: </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark"><i className="bi bi-card-heading text-white"></i></span>
                                                    <input type="text" className="input-group form-control" id="c_name" name="c_name" value={c_name}
                                                    onChange={(e) =>{
                                                        setC_name(e.target.value);
                                                    }} />
                                                </div> 
                                            </div>   <input value={id}></input>
                                            <div className="col-md-8 mb-3">
                                                <label for="" className="form-label">Upload Image: </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark"><i className="bi bi-file-image text-white"></i></span>
                                                    <input type="file" className="input-group form-control" name="c_image" id="c_image" 
                                                    onChange={(e) =>{
                                                        setC_image(e.target.value);
                                                    }}/>
                                                </div> 
                                            </div>
                                            <div className="col-md-8 mb-5">
                                                <label for="" className="form-label text-left">Description: </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark"><i className="bi bi-code text-white"></i></span>
                                                    <textarea className="input-group form-control" id="c_description" name="c_description" rows="7" cols="30" value={c_description}
                                                    onChange={(e) =>{
                                                        setC_description(e.target.value);
                                                    }}>
                                                    
                                                    </textarea>
                                                </div> 
                                            </div>
                                            <div className="">
                                                    <button type="submit" name="submit" onClick={sendCourseData} className="btn btn-sm btn-outline-danger mb-3 mx-3">EDIT COURSE</button>   
                                                    <input type="reset" value="RESET DATA" className="btn btn-sm btn-outline-dark  mb-3 mx-3"/>
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

export default Update_Course;