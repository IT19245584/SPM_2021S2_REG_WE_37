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
    const [imageSelected, setimageSelected] = useState("");
    const [imageSelected1, setimageSelected1] = useState("");
    const [imageSelected2, setimageSelected2] = useState("");
    const[statusEmpty, setLessonstatusEmpty] = useState("");
    const[btnStatus, setbtnLessonStatus] = useState(true);

    function sendLessonData(e) {
        e.preventDefault();
        const formData = new FormData();
        const formData1 = new FormData();
        const formData2 = new FormData();
        formData.append("file" ,imageSelected);
        formData1.append("pdf" ,imageSelected1);
        formData2.append("video" ,imageSelected2);
        formData.append("upload_preset", "xb3h6lr2");
        formData1.append("upload_preset", "xb3h6lr2");
        formData2.append("upload_preset", "xb3h6lr2");
        axios.post("https://api.cloudinary.com/v1_1/dece6pnob/image/upload",formData, formData1, formData2).then((response)=>{
            console.log(imageSelected)
            console.log(imageSelected1)
            console.log(imageSelected2)
            const l_image =imageSelected.name;
            const lesson_content =imageSelected1.name;
            const l_video =imageSelected2.name;
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
    })
    }
    function setL_descriptions(e)
    {
        const descriptionLesson = e;
        if((l_name == "") || (lecturer == "") || (l_description ==""))
        {
            setbtnLessonStatus(true);
            setLessonstatusEmpty("No empty fields");
            if((l_description.length <5)){
                setLessonstatusEmpty("Please Enter Valid Data");
            }
        }else{
            setbtnLessonStatus(false);
            setLessonstatusEmpty("                                  ");
        }
        setL_description(descriptionLesson)
    }


    return(
        <div className="container-responsive">
            <div className="card-group p-3">
                <div className="card">
                    <div className="card-body">
                        <img className="card-img-top" src="https://www.usnews.com/dims4/USNEWS/535f8ab/2147483647/crop/2121x1415%2B0%2B0/resize/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fa4%2F10%2Fba054af94d868fddf78aac10cd06%2F210121-onlinelearning2-stock.jpg" alt="Card image cap"></img>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="col-md-12">
                                <h3 className="card-title ml-3 mb-2">New Lesson</h3>
                                <div className="col-md-8 mb-2">
                                    <label for="" className="form-label text-left">Lesson: </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-dark"><i className="bi bi-card-heading text-white"></i></span>
                                            <input type="text" className="input-group form-control" id="l_name" name="l_name" 
                                                onChange={(e) =>{
                                                    setL_name(e.target.value);
                                                }} />
                                        </div> 
                                </div> 
                                <div className="col-md-8 mb-2">
                                    <label for="" className="form-label text-left">Lecturer's Name: </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-dark"><i className="bi bi-card-heading text-white"></i></span>
                                            <input type="text" className="input-group form-control" id="lecturer" name="lecturer" 
                                                    onChange={(e) =>{
                                                        setLecturer(e.target.value);
                                            }} />
                                    </div> 
                                </div>  
                                <div className="col-md-8 mb-2">
                                    <label for="" className="form-label">Upload Image: </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-dark"><i className="bi bi-file-image text-white"></i></span>
                                        {/* <input type="file" className="input-group form-control" name="l_image" id="l_image"
                                            onChange={(e) =>{
                                                setL_image(e.target.value);
                                            }}/> */}
                                            <input type="file" onChange={(e) =>{
                                                        setimageSelected(e.target.files[0]);
                                                    }} class="form-control" id="l_image" />
                                    </div> 
                                </div>
                                <div className="col-md-8 mb-2">
                                    <label for="" className="form-label text-left">Lesson Content: </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-dark"><i className="bi bi-code text-white"></i></span>
                                            <input type="file" accept="application/pdf" className="input-group form-control" id="lesson_content" name="lesson_content"
                                                onChange={(e) =>{
                                                    setimageSelected1(e.target.files[1]);
                                                }}/>
                                    </div> 
                                </div>
                                <div className="col-md-8 mb-2">
                                    <label for="" className="form-label">Upload Video: </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-dark"><i className="bi bi-file-image text-white"></i></span>
                                            <input type="file" className="input-group form-control" name="l_video" id="l_video"
                                                onChange={(e) =>{
                                                    setimageSelected2(e.target.files[2]);
                                                }}/>
                                    </div> 
                                </div>
                                <div className="col-md-8 mb-3">
                                    <label for="" className="form-label text-left">Description: </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-dark"><i className="bi bi-code text-white"></i></span>
                                            <textarea className="input-group form-control" id="l_description" name="l_description" rows="5" cols="30"
                                                onChange={(e) =>{
                                                    setL_descriptions(e.target.value);
                                                }}>
                                            </textarea>
                                    </div> 
                                </div>
                                <span className='text-danger p-2'>{statusEmpty}</span>
                                <div className="">
                                    <button type="button" name="submit" disabled={btnStatus} onClick={sendLessonData} className="btn btn-sm btn-outline-danger mb-2 mx-3">ADD LESSONS</button>   
                                    <input type="reset" value="RESET DATA" className="btn btn-sm btn-outline-dark mb-2 mx-3"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Add_Lesson;