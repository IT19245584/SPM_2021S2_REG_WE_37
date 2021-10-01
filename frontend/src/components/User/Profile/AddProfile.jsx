import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from "../header";

export default function AddTechnicalCommittee() {
    const [name, setName] = useState("");
    const [department, setdepartment] = useState("");
    const [description, setdescription] = useState("");
    const [status, setstatus] = useState("");
    const [imageSelected, setimageSelected] = useState("");

    const onSubmit = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "ml_default");

        axios.post("https://api.cloudinary.com/v1_1/applicationframework2021/image/upload", formData).then((response) => {
            const image = imageSelected.name;
            const AddTechnicalCommittee = {
                name,
                image,
                department,
                description,
                status
            }
            axios.post("http://localhost:5000/Profile/addTecCommittee", AddTechnicalCommittee)
                .then(() => {
                    Swal.fire({
                        title: "Success!",
                        text: "Academic Details Saved",
                        icon: 'success',
                        confirmButtonText: "OK",
                        type: "success"
                    }).then(okay => {
                        if (okay) {
                            window.location.href = "/development";
                        }
                    });
                }).catch((err) => {
                    Swal.fire({
                        title: "Error!",
                        text: "Unable to save.",
                        icon: 'error',
                        confirmButtonText: "OK",
                        type: "success"
                    })
                })
        })
    }

    return (
        <div>
             <Header/>
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '220px' }}>
                <h3 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Add Academic Details</h3>
            </div>
            {/* <div className="col-sm-6 p-3 bg-light" className="center" style={{marginLeft:'30%',marginRight:'30%'}}></div> */}
            <div className="col-sm-6 p-3 bg-light" className="center" style={{marginLeft:'30%',marginRight:'30%',marginTop: '-25px'}}>
                <div className="row g-0">
                    <div className="form-outline mb-4">
                    <label style={{color:'black'}} class="form-label"> <b>Name:</b></label> <input type="text" id="name" className="form-control border border-dark mb-3" name="name" onChange={(e) => { setName(e.target.value) }} required />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="customFile"><b>Add Image</b></label>
                        <input type="file" onChange={(e) => { setimageSelected(e.target.files[0]) }} className="form-control" id="customFile" required />

                    </div>
                    <div className="form-outline mb-4">
                    <label style={{color:'black'}} class="form-label"> <b>Major:</b></label> <input type="text" id="department" className="form-control border border-dark mb-3" name="department" onChange={(e) => { setdepartment(e.target.value) }} required />

                    </div>
                    <div className="form-outline mb-4">
                    <label style={{color:'black'}} class="form-label"> <b>About:</b></label> <textarea className="form-control border border-dark mb-3" id="description" rows="4" name="description" onChange={(e) => { setdescription(e.target.value) }} required />

                    </div>
                    <div className="form-outline mb-4">
                    <label style={{color:'black'}} class="form-label"> <b>Class Level:</b></label>
                        <select className="form-select" aria-label="Default select example" id="status" name="status" onChange={(e) => { setstatus(e.target.value) }}>
                            <option defaultValue value="Undergraduate">Undergraduate</option>
                            <option value="Postgraduate">Postgraduate</option>
                            <option value="School Studen">School Student</option>
                        </select>
                    </div>
                    <br></br>
                    <button type="submit" onClick={onSubmit} class="btn btn-dark btn-md">Save</button>
                </div>
            </div>
        </div>
    );
}