import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import Header from "../header";


export default function ViewTechnicalCommittee() {

    const [TechnicalCommittee, setTechnicalCommittee] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/Profile/viewTechnicalCommittee/')
            .then(res => setTechnicalCommittee(res.data))
            .catch(error => console.log(error));
    })

    function deleteTechnicalCommitteeMember(id) {
        axios.delete('http://localhost:5000/Profile/deleteTechnicalCommittee/' + id)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Deleting Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = "/";
                    }
                });
            }).catch((err) => {
                Swal.fire({
                    title: "error!",
                    text: "Deleting Not Success",
                    icon: 'error',
                    position: 'center',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });
            });
    }

    function updateTechnicalCommitteeMember(id, name, image, department, description, status) {
        reactLocalStorage.setObject("TechnicalCommittee", [id, name, image, department, description, status]);
        window.location.href = "/updatetech";
    }
    return (
        <div>
            <Header/>
            <div>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                    <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Student Profile</h1>
                </div>
            </div>
            <div className="container">
                {/* <a href="/addtec">
                    <div className="text-end mb-4">
                        <button type="button" class="btn btn-secondary btn-sm"> + Add New Technical committee Member</button>
                    </div>
                </a> */}
                <div className="row">
                    {TechnicalCommittee.map((TechnicalCommitteeMember, key) => (
                        <div >
                            <div class="card"  style={{ width: '100%',alignItems:'center' }} >
                                <div className="text-center">
                                    <img className="card-img-top " style={{ width: '60%' }} src={'https://res.cloudinary.com/applicationframework2021/image/upload/v1624901540/' + TechnicalCommitteeMember.image} alt="Card image cap" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center text-capitalize">{TechnicalCommitteeMember.name}</h5>
                                    <p className="card-text">
                                        <span className="fw-bold">Major : </span>{TechnicalCommitteeMember.department}<br />
                                        <span className="fw-bold">About : </span>{TechnicalCommitteeMember.description}<br />
                                        <span className="fw-bold">Class Level : </span>{TechnicalCommitteeMember.status}<br />
                                        <span className="fw-bold">Joined Date : </span>{TechnicalCommitteeMember.date}</p>
                                </div>
                                <div className="card-footer bg-white border-0 text-end">
                                    <button type="button" onClick={() => deleteTechnicalCommitteeMember(TechnicalCommitteeMember._id)} className="btn btn-danger btn-sm">Delete <i class="bi bi-trash"></i></button>{' '}
                                    <button type="button" onClick={() => updateTechnicalCommitteeMember(TechnicalCommitteeMember._id, TechnicalCommitteeMember.name, TechnicalCommitteeMember.image, TechnicalCommitteeMember.department, TechnicalCommitteeMember.description, TechnicalCommitteeMember.status)} class="btn btn-success btn-sm">Update <i class="bi bi-pencil-square"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}