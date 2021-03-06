import React, {useState} from 'react';
import Swal from 'sweetalert2';
import Navbar from '../header';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import axios from 'axios';

export default function Login() {
  var researchpaperUpdate = reactLocalStorage.getObject('StudentRegister');
    const id = researchpaperUpdate[0];
    const [email, setEmail] = useState(researchpaperUpdate[1]);
    const [password, setPassword] = useState(researchpaperUpdate[2]);

    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
 
    const [Required, setRequired] = useState('*Required');
 
    const [isValidpassword, setIsValidpassword] = useState(false);
    const [messagepassword, setMessagepassword] = useState('');
 
      const setConfirmPassword = (event) => {
     const ConfirmPassword = event;
     if (ConfirmPassword === password) {
       setIsValidpassword(true);
       setMessagepassword('Password Are Matching');
     } else {
       setIsValidpassword(false);
       setMessagepassword('Passwords Are Not Match');
     }
   };
  
    function dataReset(e){
        e.preventDefault();
        const updateDetails = {
        
          password
           
        }

        axios.put("http://localhost:5000/students/updatePassword/"+email,updateDetails).then(() => {
            const id = 0;
            Swal.fire({
                title: "Success!",
                text: "Successfully Updated!",
                icon: "success",
                confirmButtonText: "Ok",
                type: "success"}).then(done => {
                    if(done){
                        window.location.href="/Login";
                    }
                });
            }).catch((err) => {
                Swal.fire({
                    title: "Error!",
                    text: "Not Updated!",
                    icon: "error",
                    confirmButtonText: "Ok",
                    type: "success"})
                })
         
    }
  return (
      <div>
             <Navbar/>
            <div className="container">
          <div class="row mt-5 mb-5">
              <div class="col-sm-6 pt-5">
              <img src="./img/student.jpeg" style={{marginTop:'-20%', marginBottom:'10%', width:'99%'}} class="img-fluid pt-5" alt="Responsive image"/>
              </div>
              <div class="col-sm-6 p-3 bg-light" style={{marginTop:'10%', marginBottom:'10%'}} >
              <center><h2 className="text-uppercase">Reset Password</h2></center>
              <div >
              <div class="mb-3">
                    <label class="form-label">Email <sup className="text-danger" style={{fontSize:'10px'}}>*Required</sup></label>
                    <input type="email" class="form-control"  placeholder="Enter Email" onChange={(e) =>{
                              setEmail(e.target.value);
                            }}/>
                  </div>
              <div className="mb-3">
                            <label className="form-label">New Password <sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                            <input type="password" className="form-control"  placeholder="Enter Password" onChange={(e) =>{
                                      setPassword(e.target.value);
                                    }}/>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Confirm Password <sup className="text-danger" style={{fontSize:'10px'}}>{Required}</sup></label>
                            <input type="password" className="form-control"  placeholder="Enter Confirm Password" onChange={(e) =>{
                                      setConfirmPassword(e.target.value);
                                    }}/>
                            <small className={`messagepassword ${isValidpassword ? 'success' : 'error'}`} >
                              {messagepassword}
                            </small>
                          </div>
                </div>
                       
                <div className="text-end pr-4">
              <center><button onClick={dataReset}  type="submit" className="btn btn-dark btn-block mb-2" >
                Submit <i className="fas fa-angle-double-right"></i>
              </button></center>
            </div>
              </div>
          </div>
          </div>
      
     </div>
  );
}