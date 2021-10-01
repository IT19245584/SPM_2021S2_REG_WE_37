import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Swal from 'sweetalert2';
import '../APIUrl';
import Navbar from '../header';

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
class StudentLogin extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeUserType = this.onChangeUserType.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

        this.state = {
            email: '',
            password: ''
        }

    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        })
    }

    onChangeUserType(e) {
        this.setState({
            userType: e.target.value
        })
    }


    handleLoginSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };


                axios.post(global.APIUrl+'/students/login', user)
                    .then(response => {


                        if (response.data.result) {
                            Swal.fire({
                                title: 'Login Successful',
                                type: 'success',
                                confirmButtonText: 'OK!',
                            }).then((result) => {

                                if (result.value) {
                                    sessionStorage.setItem('userId', response.data.data._id);
                                    sessionStorage.setItem('loggedUser', response.data.data.email);
                                    sessionStorage.setItem('userType', 'student');
                                    window.location.href = "/addtec";
                                }
                            });
                        } else {
                            Swal.fire('Oops...', 'Invalid Password or User Id', 'error');
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    });

            } 


    render() {
        return (
          <div>
          <Navbar/>
          <MDBRow  style={{marginTop:'2%', marginBottom:'10%', width:'99%'}}>
          <MDBCol sm='1'></MDBCol>
           <MDBCol sm='6'>
              <MDBCard className="border-0 shadow-0">
                  <MDBCardImage style={{width:'79%'}} position='top' alt='...' src='./img/student.jpeg' />
              </MDBCard>
          </MDBCol>
          <MDBCol sm='5'  style={{marginTop:'5%', marginLeft:'-5%'}}>
              <MDBCard className="border-0 shadow-0">
              <MDBCardBody className="pt-5 mt-3 text-left">
              <form onSubmit={this.handleLoginSubmit}>
                 <div className="bg-light p-4">
                   <center><h2 className="text-uppercase">Sing In</h2></center>
                   <br/>
                  <div class="mb-3">
                    <div className="input-group-prepend">
                  <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-envelope"/></span>
                            </div>
                            <input type="email"
                                   className="form-control mr-3"
                                   id="email"
                                   value={this.state.email}
                                   onChange={this.onChangeEmail}
                                   placeholder="Email"
                                   required/>
                   </div>
                  </div>
                  <br/>
                  <div class="mb-3">
                  <div className="input-group-prepend">
                  <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-key"/></span>
                            </div>
                            <input type="password"
                                   className="form-control mr-3"
                                   id="password"
                                   value={this.state.password}
                                   onChange={this.onChangePassword}
                                   placeholder="Password"
                                   required/>
                  </div>
                  </div>
              
                  <div className="text-center mb-2 ml-5">
                            <Link to="/updatePassword" className="alert-link mr-5">Forgot Password ?</Link>
                        </div>

                        <div className="col text-center">
                            <input type="submit" className="btn btn-dark" value="Login"/>
                        </div>
                        <div className="text-center mt-3">
                            <label className="ml-5 mb-3 text-muted">Don't have an account ?</label>
                            <Link to="/studentRegistration" className="alert-link mr-5"> Sign Up</Link>
                        </div>
                 </div> 
                 </form>
              </MDBCardBody>
              </MDBCard>
          
          </MDBCol>
        
          </MDBRow>
      </div>
        )
    }
}

export default StudentLogin;