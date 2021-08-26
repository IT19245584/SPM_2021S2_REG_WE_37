
import React, { useState , useEffect } from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBIcon, MDBCardFooter, MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Navbar from "./adminNav";

function Admin() {
    
    return (
    <div>
    <div class="dashboard-main-wrapper">
        <Navbar/>
        <div class="dashboard-wrapper">
            <div class="container" style={{paddingTop:'3%',paddingLeft:'2%', width:'98%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard</h4>
                <hr/>
                 <MDBRow  style={{marginTop:'3%'}}>
                    <MDBCol sm='4'>
                        <a href="libraryDashboard">
                         <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                               <MDBIcon fas icon="book-open text-muted" /><br/> <span>Library</span>
                            </MDBCardHeader>
                        </MDBCard>
                        </a>
                    </MDBCol>
                    <MDBCol sm='4'>
                         <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                              <MDBIcon fas icon="book-reader text-muted" /> <br/> <span>Subjects</span>
                            </MDBCardHeader>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm='4'>
                          <a href="newsDashboard">
                            <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                                <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                                <MDBIcon fas icon="newspaper text-muted" /> <br/> News
                                </MDBCardHeader>
                            </MDBCard>
                        </a>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow  style={{marginTop:'1%'}}>
                    <MDBCol sm='4'>
                         <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                               <MDBIcon fas icon="user-graduate text-muted" /> <br/>STUDENTS
                            </MDBCardHeader>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm='4'>
                        <a href="circularDashboard">
                         <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                               <MDBIcon fas icon="palette text-muted" /> <br/>circular A.
                            </MDBCardHeader>
                        </MDBCard>
                        </a>
                    </MDBCol>
                    <MDBCol sm='4'>
                         <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                               <MDBIcon fas icon="scroll text-muted" /> <br/>Exams
                            </MDBCardHeader>
                        </MDBCard>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow  style={{marginTop:'1%'}}>
                     <MDBCol sm='4'>
                        <a href="StaffDashboard">
                         <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                               <MDBIcon fas icon="users text-muted" /> <br/>Staff
                            </MDBCardHeader>
                        </MDBCard>
                        </a>
                    </MDBCol>
                   
                    <MDBCol sm='4'>
                         <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                             <a href="FacilitiesDashboard">
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'black'}}>
                               <MDBIcon fas icon="tint text-muted" /> <br/>Facilities
                            </MDBCardHeader>
                            </a>
                        </MDBCard>
                    </MDBCol>
                 </MDBRow>
                
            </div>
        </div>
      </div>
    </div>
      )
};


export default Admin;