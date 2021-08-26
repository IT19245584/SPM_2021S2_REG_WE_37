    
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

function UserCertificate() {
    var todayDate = new Date().toISOString().slice(0, 10);
    const [today, settoday] = useState(todayDate);
    return (
            <div>
                <Navbar/>
                <div className="container-fluid pr-5 pl-5">
                <div class="row" style={{marginTop:'5%', marginBottom:'15%', paddingLeft:'4%'}}>
                <div class="col-sm-8">
                <div  style={{width:'87%', height:'630px', padding:'20px',textAlign:'center', background:'url(https://cdn.wallpapersafari.com/32/16/59ktPu.jpg)', border: '8px solid #373737'}}>
                <div style={{width:'100%', height:'570px', padding:'20px', textAlign:'center', border: '3px solid #787878'}}>
                    <span style={{fontSize:'50px', fontWeight:'bold'}}>Certificate of Completion</span>
                    <br/><br/>
                    <span style={{fontSize:'25px'}}><i>This is to certify that</i></span>
                    <br/><br/>
                    <span style={{fontSize:'30px'}}><b>$student.getFullName()</b></span><br/><br/>
                    <span style={{fontSize:'25px'}}><i>has completed the course</i></span> <br/><br/>
                    <span style={{fontSize:'30px'}}>$course.getName()</span> <br/><br/>
                    <span style={{fontSize:'20px'}}>with score of <b>$grade.getPoints()%</b></span> <br/><br/><br/><br/>
                    <span style={{fontSize:'25px'}}><i>{today}<br/></i></span><br/>
                    
                    <span style={{fontSize:'30px'}}></span>
                </div>
                </div>
                <div className="text-end"  style={{width:'87%'}}>
                     <MDBBtn className='mx-2 mt-3' color='dark' style={{letterSpacing:'1px', fontSize:'15px'}}>
                        Download <MDBIcon fas icon="cloud-download-alt" />
                     </MDBBtn>
                      <MDBBtn className='mx-2 mt-3' outline color='dark' style={{letterSpacing:'1px', fontSize:'15px'}}>
                        Print <MDBIcon fas icon="print" />
                     </MDBBtn>
                </div>
                </div>
                <div class="col-sm-4">
                  <div class="card bg-light">
                    <div class="card-body">
                        <center>
                            <h2 style={{letterSpacing:'2px'}} className="mt-3">Change Profile Name</h2>
                        </center>
                        
                    </div>
                  </div>
                </div>
                </div>
                </div>
                <Footer/>
            </div>
          )
};

export default UserCertificate;