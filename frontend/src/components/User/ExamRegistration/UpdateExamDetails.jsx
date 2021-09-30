import React, {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {reactLocalStorage} from 'reactjs-localstorage';
import Header from "../header";


import {
    MDBInput,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse,
    MDBCardImage,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol
  } from 'mdb-react-ui-kit';

export default function ExamDetails() {
    var ExamDetails = reactLocalStorage.getObject('Exam');
    const id = ExamDetails[0];
    const [regNo, setregNo] = useState(ExamDetails[1]);
    const [lesson, setlesson] = useState(ExamDetails[2]);
    const [examDate, setexamDate] = useState(ExamDetails[3]);
    const [session, setsession] = useState(ExamDetails[4]);
    const [amount, setamount] = useState(ExamDetails[5]);
    const [paymentStatus, setpaymentStatus] = useState("");


   const [isValid, setIsValid] = useState(false);
   const [message, setMessage] = useState('');
   const [Required, setRequired] = useState('*Required');


   function updateExame(e){
    e.preventDefault();

    const addExam ={
      regNo, 
      lesson, 
      examDate, 
      session,  
      amount, 
      paymentStatus 
      }

      axios.post("http://localhost:5000/ExamRegistration/update/" + id, addExam).then(() => {

        Swal.fire({
            title: "Success!",
            text: "Update Successed!",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"
        }).then(okay => {
            if (okay) {
                window.location.href = "/enrollment";
            }
        });

    }).catch((err) => {
        Swal.fire({
            title: "error!",
            text: "Update Not Success",
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
    })
	 }


  return (
    <div>
          <Header/>
          <br/>
          <MDBRow  style={{width:'99%'}}>
            <MDBCol sm='3'>
               
            </MDBCol>
            <MDBCol sm='6' className="bg-light shadow-2 rounded">
                <div>
                <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center',height:"60px"}} className="mt-5"><b>Register for Semester examination</b></h2>
                <div className="mt-5">
                        <label style={{color:'black'}} class="form-label"><b>Registration No. </b><sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                        <input type="text" className="form-control" value={regNo} onChange={(e) => { setregNo(e.target.value) }} />
                </div>
                <div className="mt-4">
                        <label style={{color:'black'}} className="form-label"><b>Lesson Name </b><sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>                           
                        <select class="form-select" aria-label="Default select example"    onChange={(e) => { setlesson(e.target.value) }}>
                                        
                            <option value={lesson} className="bg-danger text-white"  selected>{lesson}</option>
                            <option value="IT & Software">IT & Software</option>
                            <option value="Development">Development</option>                         
                            <option value="Bussinees">Bussinees</option>
                            <option value="Music">Music</option>
                            <option value="Accounts & Finance">Accounts & Finance</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                </div>
                <div className="mt-4">
                        <label style={{color:'black'}} className="form-label"><b>Exam Date </b><sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                        <input type="text"  className="form-control" disabled value={examDate} onChange={(e) => { setexamDate(e.target.value) }} />
                </div>
                <div className="mt-4">
                        <label style={{color:'black'}} className="form-label"><b>Exam Session </b><sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                        <select class="form-select" aria-label="Default select example"   onChange={(e) => { setsession(e.target.value) }}>
                                <option value={session} className="bg-danger text-white" selected>{session}</option>
                                <option value="Morning">Morning</option>
                                <option value="Evening">Evening</option>
                        </select>
                </div>
                <div className="mt-4">
                        <label style={{color:'black'}} class="form-label"><b>Amount </b><sup className="text-danger" style={{fontSize:'10px'}}></sup></label>
                        <input type="number" className="form-control"  value={amount} onChange={(e) => { setamount(e.target.value) }}/>
                </div>
                <div className="mt-4 text-end">
                        <button onClick={updateExame}  type="button" class="btn btn-danger btn-sm">Save</button>                                   
                </div>
                </div>
           
            </MDBCol>
            <MDBCol sm='3'>
               
            </MDBCol>
            </MDBRow>
    </div>
  );
}