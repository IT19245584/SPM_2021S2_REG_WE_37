    
import React, { useState , useEffect } from 'react';
import {
  MDBContainer,
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
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Navbar from './main_parts/navbar.js';
import Footer from './main_parts/footer.js';
import passwordValidator from 'password-validator';
var schema = new passwordValidator();

function Student_Reg() {
    const [showBasic, setShowBasic] = useState(false);
    const [showNavRight, setShowNavRight] = useState(false);
      const [passwordShown, setPasswordShown] = useState(false);
    function showPassword(){
        setPasswordShown(passwordShown ? false : true);
    }

    schema
    .is().min(4)                               
    .is().max(100)                             
    .has().uppercase()                         
    .has().lowercase()                         
    .has().digits(2)       
    .has().not().spaces()  
    .is().not().oneOf(['Passw0rd', 'Password123']); 

   const [isValidCFpassword, setIsValidCfpassword] = useState(false);
   const [messageCfpassword, setMessageCfpassword] = useState('');
   const [messageStrongpassword, setmessageStrongpassword] = useState('');
   const [password, setPassword] = useState("");
   const [CPassword, setCPassword] = useState("");
   const [UserName, setUserName] = useState("");
   const [Registrationbtn, setRegistrationbtn] = useState(true);
   const [Email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [Address, setAddress] = useState("");

   const setPasswordFunction = (event) =>{
            if(schema.validate(event) === false) {
                setIsValidCfpassword(false);
                setmessageStrongpassword('Password is not strong');
               
            }else{
                setIsValidCfpassword(true);
                setmessageStrongpassword('Password is strong');
               
            }
            setPassword(event);
   }

   const setCPasswordFnction = (event) => {
      const ConfirmPassword = event;
         
              if ((ConfirmPassword === password) && (ConfirmPassword !=='') && (ConfirmPassword!== null) ) {
                  setIsValidCfpassword(true);
                  setMessageCfpassword('Password Are Matching');
                  if((UserName.length > 0) && (ConfirmPassword.length >0) &&(ConfirmPassword.length>0)){
                      setRegistrationbtn(false);
                  }else{
                      setRegistrationbtn(true);
                  }
              } else {
                  setIsValidCfpassword(false);
                  setMessageCfpassword('Passwords Are Not Match');
                  setRegistrationbtn(true);
              }
      setCPassword(event);
    };

    return (
            <div>
                <Navbar/>
                <MDBRow  style={{marginTop:'10%', marginBottom:'10%', width:'99%'}}>
                <MDBCol sm='1'></MDBCol>
                 <MDBCol sm='6'>
                    <MDBCard className="border-0 shadow-0">
                        <MDBCardImage style={{width:'79%'}} position='top' alt='...' src='./img/student.png' />
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='4'>
                      <MDBCard className="border-0 shadow-0 p-5">
                    <MDBCardBody className="pt-5 mt-3 text-left">
                       <div className="bg-light p-4">
                         <center><h2 className="text-uppercase">Sing Up (Student)</h2></center>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">User Name</label>
                          <input type="text" class="form-control" 
                          onChange={(e) =>{
                              setUserName(e.target.value);
                          }}/>
                        </div>
                         <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Email</label>
                          <input type="email" class="form-control" 
                          onChange={(e) =>{
                              setEmail(e.target.value);
                          }}/>
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                          <input type="tel" class="form-control" 
                          onChange={(e) =>{
                              setPhone(e.target.value);
                          }}/>
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Address</label>
                          <input type="text" class="form-control" 
                          onChange={(e) =>{
                              setAddress(e.target.value);
                          }}/>
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Password</label>
                         <input class="form-control" type={passwordShown ? "text" : "password"} id="pass" onChange={(e) =>{
                            setPasswordFunction(e.target.value);
                         }}/>
                         <span style={{fontSize:'12px', margin:'0px', padding:'0px'}}  className={`messageCfpassword ${isValidCFpassword ? 'success' : 'error'}`} >
                              {messageStrongpassword}
                          </span>
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Retype Password</label>
                          <input class="form-control" type={passwordShown ? "text" : "password"} id="pass"  onChange={(e) =>{
                                            setCPasswordFnction(e.target.value);
                                          }} />
                          <span style={{fontSize:'12px', margin:'0px', padding:'0px'}}  className={`messageCfpassword ${isValidCFpassword ? 'success' : 'error'}`} >
                              {messageCfpassword}
                          </span>
                        </div>
                        
                         <div class="mt-3 mb-2">
                            <div class="d-grid gap-2">
                                    <MDBBtn class="btn text-white bg-dark d-letter-spacing fw-light" disabled={Registrationbtn}>Registration</MDBBtn> 
                            </div>
                         </div>
                         <center>
                          <MDBRow >
                              <MDBCol size='5'></MDBCol>
                              <MDBCol size='5'></MDBCol>
                              <MDBCol size='2'><a href="/Login" class="text-muted"><small>Login</small></a></MDBCol>
                          </MDBRow>
                         </center>
                       </div> 
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
                <Footer/>
            </div>
          )
};

export default Student_Reg;