
import React, { useState , useEffect } from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBIcon, MDBCardFooter, MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Navbar from "./adminNav";

function Index() {
    
    return (
    <div>
    <div class="dashboard-main-wrapper">
        <Navbar/>
        
        <div class="dashboard-wrapper">
            <div class="container" style={{paddingTop:'3%',paddingLeft:'2%', width:'98%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard</h4>
                <hr/>
                 <MDBRow  style={{marginTop:'3%'}}>
                     
                    <MDBCol sm='9'>
                        <MDBCard className=" square border-bottom border-5 border-dark bgdigram" style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 pl-2 " style={{color:'black'}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xxxxx
                            </MDBCardHeader>
                            
                            <MDBCardBody className="text-center mt-0 mb-5 pt-0 pb-0 ml-2 " >
                                
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm='3'>
                         <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 pl-2 " style={{color:'black'}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xxxx
                            </MDBCardHeader>
                            <MDBCardBody className="text-center mt-0 mb-3 pt-0 pb-0 ml-2 ">
                               
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                 </MDBRow>
                
            </div>
        </div>
      </div>
    </div>
      )
};


export default Index;