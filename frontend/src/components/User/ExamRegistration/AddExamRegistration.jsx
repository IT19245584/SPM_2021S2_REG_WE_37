import React, {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {reactLocalStorage} from 'reactjs-localstorage';
import Header from "../header";

export default function ExamDetails() {
    const [regNo, setregNo] = useState("");
    const [lesson, setlesson] = useState("");
    const [examDate, setexamDate] = useState("");
    const [session, setsession] = useState("");
    const [amount, setamount] = useState("");
    const [paymentStatus, setpaymentStatus] = useState("");


   const [isValid, setIsValid] = useState(false);
   const [message, setMessage] = useState('');
   const [Required, setRequired] = useState('*Required');


   function sendDate(e){
    e.preventDefault();

    const paymentStatus = "Pending";

    const addExam ={
      regNo, 
      lesson, 
      examDate, 
      session,  
      amount, 
      paymentStatus 
      }

    console.log('Data', addExam);
		axios.post("http://localhost:5000/ExamRegistration/add",addExam).then(() =>{
			Swal.fire({  
			title: "Success!",
			text: "Successfully Registered to the Examination!",
			icon: 'success',
			confirmButtonText: "OK",
            confirmButtonColor: "#00B74A",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/enrollment";
				}
				});

			
		}).catch((err)=>{

			Swal.fire({  
			title: "Error!",
			text: "Registration to the Examination Unsuccessful! Try Again.",
			icon: 'error',
			confirmButtonText: "OK",
            confirmButtonColor: "#F93154",
			type: "success"})
		})
	 }


  return (
    <div>
          <Header/>
          <br/>
           <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center',height:"60px"}}><b>Register for Examination</b></h2>
                <div className="col-sm-6 p-3 bg-light" className="center" style={{marginLeft:'30%',marginRight:'30%'}}>
                  <div class="mb-3">
                  <label style={{color:'black'}} class="form-label"><b>Registration No. </b><sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                  <div className="input-group">
                  <span className="input-group-text bg-dark"><i className="bi bi-card-heading text-warning"></i></span>
                    <input type="regNo" class="form-control"  placeholder="Enter Registration No." onChange={(e) =>{
                              setregNo(e.target.value);
                            }}/>
                            </div>
                  </div>
                  <div className="mb-3">
                            <label style={{color:'black'}} className="form-label"><b>Lesson Name </b><sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>                           
                            <select class="form-select" aria-label="Default select example"  onChange={(e) =>{
                                      setlesson(e.target.value);
                                    }}>
                                     
                            <option value="">Select a lesson</option>
                            <option value="IT & Software">IT & Software</option>
                            <option value="Development">Development</option>                         
                            <option value="Bussinees">Bussinees</option>
                            <option value="Music">Music</option>
                            <option value="Accounts & Finance">Accounts & Finance</option>
                            <option value="Marketing">Marketing</option>
                          </select>
                          
                          </div>
                  <div class="mb-3">
                  <label style={{color:'black'}} className="form-label"><b>Exam Date </b><sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                    <div className="input-group">
                    <span className="input-group-text bg-dark"><i className="bi bi-calendar-check text-warning"></i></span>
                    <input type="date" class="form-control" onChange={(e) =>{
                              setexamDate(e.target.value);
                            }}/>
                            </div>
                  </div>
                  <div className="mb-3">
                            <label style={{color:'black'}} className="form-label"><b>Exam Session </b><sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                            <select class="form-select" aria-label="Default select example"  onChange={(e) =>{
                                      setsession(e.target.value);
                                    }}>
                            <option value="">Select a session</option>
                            <option value="Morning">Morning</option>
                            <option value="Evening">Evening</option>
                          </select>
                          
                          </div>
                  <div class="mb-3">
                    <label style={{color:'black'}} class="form-label"><b>Amount </b><sup className="text-danger" style={{fontSize:'10px'}}></sup></label>
                    <div className="input-group">
                    <span className="input-group-text bg-dark"><i className="bi bi-cash-coin text-warning"></i></span>
                    <input type="number" class="form-control"  placeholder="Enter Amount" onChange={(e) =>{
                              setamount(e.target.value);
                            }}/>
                            </div>
                  </div>
                  <div style={{color:'black'}} className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                <div style={{ height: '300px' }}>
                    <div className="row row-cols-1 row-cols-md-3 g-4" className="text-center container">
                        <div className="col">
                            <div >
                                <div className="card-body">
                                <button onClick={sendDate} type="button" class="btn btn-danger btn-lg"><h5 className="card-title" style={{ display: 'flex', color:'white',justifyContent: 'center', alignItems: 'center' }}>Submit</h5></button>                                   
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
                </div>     
     </div>
  );
}