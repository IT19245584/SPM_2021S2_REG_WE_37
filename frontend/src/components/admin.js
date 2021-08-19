
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
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System Flow
                            </MDBCardHeader>
                            
                            <MDBCardBody className="text-center mt-0 mb-5 pt-0 pb-0 ml-2 " >
                                <img src="./img/flow.png" width="80%" usemap="#systemFlow" className="mt-5" />
                                <map name="systemFlow">
                                    <area shape="rect" coords="15,0,200,80" alt="grn" href="google.com"/>
                                    <area shape="rect" coords="285,0,430,70" alt="received" href="google2.com" />
                                    <area shape="rect" coords="285,140,430,199" alt="stock on hand" href="google3.com" />
                                    <area shape="rect" coords="285,270,430,325" alt="issue" href="google4.com" />
                                    <area shape="rect" coords="15,270,200,325" alt="MRN" href="google5.com" />
                                    <area shape="rect" coords="500,140,664,199" alt="AOD" href="google6.com" />
                                </map>
                                
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm='3'>
                         <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 pl-2 " style={{color:'black'}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System Functions
                            </MDBCardHeader>
                            <MDBCardBody className="text-center mt-0 mb-3 pt-0 pb-0 ml-2 ">
                               <div className="text-left mt-2">
                                   <span className="text-black"><i class="fas fa-caret-right"></i> Bin</span>
                                    <div className="text-left ml-4 mt-0 mb-2">
                                       <small>
                                           <span className="text-dark"><i class="fas fa-caret-right"></i> Manage Bin <br/></span>
                                                <div className="text-left ml-4">
                                                    <small className="text-muted">Create Bin</small><br/>
                                                    <small className="text-muted">Edit Bin</small><br/>
                                                    <small className="text-muted">View Bin</small><br/>
                                                    <small className="text-muted">Delete Bin</small><br/>
                                                </div>
                                          <span className="text-dark"> <i class="fas fa-caret-right"></i> Allocate Bin <br/></span>
                                          
                                       </small>
                                    </div>
                                   <span className="text-black"><i class="fas fa-caret-right"></i> Racks </span>
                                   <div className="text-left ml-4 mt-0 mb-2">
                                       <small>
                                           <i class="fas fa-caret-right"></i> Manage Racks <br/>
                                            <div className="text-left ml-4">
                                                    <small className="text-muted">Create Racks</small><br/>
                                                    <small className="text-muted">Edit Racks</small><br/>
                                                    <small className="text-muted">View Racks</small><br/>
                                                    <small className="text-muted">Delete Racks</small><br/>
                                                </div>
                                       </small>
                                    </div>
                                    <span className="text-black"><i class="fas fa-caret-right"></i> Material </span>
                                    <div className="text-left ml-4 mt-0">
                                        <small>
                                            <i class="fas fa-caret-right"></i> Received Material<br/>
                                            <i class="fas fa-caret-right"></i> Issued Materials<br/>
                                       </small>
                                    </div>
                               </div>
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