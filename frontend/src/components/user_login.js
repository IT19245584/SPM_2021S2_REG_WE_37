    
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

function Login() {
    const [password, setPassword] = useState("");
    const [UserName, setUsername] = useState("");
    const [disabled, setdisabled] = useState(true);
    
    function set_Password(event) {
        setPassword(event);
        if(UserName ==='' && password ===''){
            setdisabled(true);
        }else{
            setdisabled(false);
        }
    }

    function loginBtn(){
        
    }

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
                         <center><h2 className="text-uppercase">Sing In</h2></center>
                       
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">User Name</label>
                         <input class="form-control"  id="pass" onChange={(e) =>{
                            setUsername(e.target.value);
                         }}/>
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Password</label>
                          <input class="form-control" type="pasword" id="pass"  onChange={(e) =>{
                            set_Password(e.target.value);
                           }} />
                        </div>
                        
                         <div class="mt-3 mb-2">
                            <div class="d-grid gap-2">
                                    <MDBBtn class="btn text-white bg-dark d-letter-spacing fw-light" disabled={disabled}>Login</MDBBtn> 
                            </div>
                         </div>
                         <center>
                          <MDBRow >
                              <MDBCol size='4'></MDBCol>
                              <MDBCol size='4'></MDBCol>
                              <MDBCol size='4'><a href="/Reset" class="text-muted"><small>Reset Password</small></a></MDBCol>
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

export default Login;