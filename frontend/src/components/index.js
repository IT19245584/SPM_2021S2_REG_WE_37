
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

function Home() {
    const [showBasic, setShowBasic] = useState(false);
    const [showNavRight, setShowNavRight] = useState(false);
    return (
    <div>
        <div className="pt-1 pb-1" style={{backgroundColor:'#F4F4F4'}}>
            <center>
                <small style={{fontSize:'12px'}} className="text-muted text-capitalize">Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</small>
            </center>
        </div>
        <Navbar/>
            
            <header class="bg-dark py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2 text-uppercase">
                                    OUR top categories<br/>
                                    <span
                                        class="txt-rotate text-warning"
                                        data-period="2000"
                                        data-rotate='[ "DESIGN", "DEVELOPMENT", "MARKETING", "IT & SOFTWARE"]'></span>
                                </h1> 
                                <p class="lead fw-normal text-white-50 mb-4">Courses designed by experts with real-world practice. Join our global community.</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a class="btn btn-danger btn-lg px-4 me-sm-3" href="/Login">Login</a>
                                    <a class="btn btn-outline-danger btn-lg px-4" href="#!">GET Pro</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src="./img/online-learning.png" alt="..." /></div>
                    </div>
                </div>
            </header>
            <section className="container mt-5 pt-5 pb-5 mb-5">
              <h2 className="text-uppercase text-center" style={{color: '#19011C'}}>OUR University Partners</h2>
              <div className="container">
              <MDBRow className="mt-4">
                <MDBCol sm='2'>
                    <MDBCard className="border-0 shadow-0">
                       <MDBCardImage position='top' src='https://prod-discovery.edx-cdn.org/organization/logos/8607c85e-2a12-4c51-8906-3a67848cf2a7-3e0a310f77c3.png' alt='...' />
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='2'>
                     <MDBCard className="border-0 shadow-0">
                       <MDBCardImage position='top' src='https://prod-discovery.edx-cdn.org/organization/logos/188a8d01-87c1-45e6-b518-3de65906deac-af51133a34ab.png' alt='...' />
                    </MDBCard>
                </MDBCol>
                 <MDBCol sm='2'>
                    <MDBCard className="border-0 shadow-0">
                       <MDBCardImage position='top' src='https://prod-discovery.edx-cdn.org/organization/logos/0e54e104-1705-4479-80ec-5be6cac8b021-92ff94bde414.png' alt='...' />
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='2'>
                    <MDBCard className="border-0 shadow-0">
                       <MDBCardImage position='top' src='https://prod-discovery.edx-cdn.org/organization/logos/f5d1ff66-002f-43fa-9d76-1b191d4a3272-0e2420850666.png' alt='...' />
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='2'>
                    <MDBCard className="border-0 shadow-0">
                       <MDBCardImage position='top' src='https://prod-discovery.edx-cdn.org/organization/logos/8554749f-b920-4d7f-8986-af6bb95290aa-f336c6a2ca11.png' alt='...' />
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='2'>
                    <MDBCard className="border-0 shadow-0">
                       <MDBCardImage position='top' src='https://prod-discovery.edx-cdn.org/organization/logos/eac96c61-1462-4084-a0b2-12525b74a9e1-8377159ff774.png' alt='...' />
                    </MDBCard>
                </MDBCol>
                </MDBRow>
                <div className="text-end text-capitalize">
                    <a href="" className="common-a" >
                          Learn from more than 9 member universities <MDBIcon fas icon="arrow-right" />
                    </a>
                </div>
              </div>
            </section>
            <br/>
            <section className="container text-center mt-5 pt-5 pb-5 mb-5">
              <h2 className="text-uppercase "  style={{color: '#19011C'}}>DO YOU WANT BECOME</h2>
               <MDBRow>
                <MDBCol sm='1'></MDBCol>
                <MDBCol sm='6'>
                    <MDBCard className="border-0 shadow-0">
                    <MDBCardBody className="pt-5 mt-3 text-right">
                        <MDBCardTitle className="h4">BECOME STUDENT</MDBCardTitle>
                        <MDBCardText  style={{color:'black', textAlign:'justify'}}>
                       Are you a student looking to start or complete an course? Affordable course programs provide you with the knowledge you need to succeed with top companies after learning.Join more than 18,000 students from over 100 countries and make yourself at home, right here at Memorial Are you ready to join the Education Revolution?
                        </MDBCardText>
                         <MDBBtn  className='mx-2' color='danger'>
                            Become
                         </MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='5'>
                    <MDBCard className="border-0 shadow-0">
                        <MDBCardImage style={{width:'79%'}} position='top' alt='...' src='./img/student.png' />
                    </MDBCard>
                </MDBCol>
                </MDBRow>
                <br/>
                <MDBRow className="mt-5">
                <MDBCol sm='1'></MDBCol>
                 <MDBCol sm='6'>
                    <MDBCard className="border-0 shadow-0">
                        <MDBCardImage style={{width:'79%'}} position='top' alt='...' src='https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg' />
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='5'>
                    <MDBCard className="border-0 shadow-0">
                    <MDBCardBody className="pt-5 mt-3 text-left">
                        <MDBCardTitle className="h4 text-uppercase">Become an instructor</MDBCardTitle>
                        <MDBCardText  style={{color:'black', textAlign:'justify'}}>
                            Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.                        </MDBCardText>
                         <MDBBtn outline className='mx-2' color='danger'>
                            Become
                         </MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
            </section>
            <br/>
            <section className="pb-5 pt-5 trust" style={{borderTop: '1px solid #E7D8EA', borderBottom: '1px solid #E7D8EA'}}>
                <div className="container">
                    <center><h2 className="text-uppercase mt-3"  style={{color: '#19011C'}}>OUR SUCCESS</h2></center>
                    <MDBRow className="mt-5 pt-1">
                            <MDBCol sm='3'>
                                <MDBCard className="text-center border-0 bg-transparent shadow-0">
                                       <h5  style={{color:'#3A3A3A',fontSize:'51px',lineHeight:'30px'}}>1000<br/>
                                     <span  className="h6 text-uppercase text-muted">Courses</span></h5>
                                </MDBCard>
                            </MDBCol>
                             <MDBCol sm='3'>
                                  <MDBCard className="text-center border-0 bg-transparent shadow-0">
                                      <h5  style={{color:'#3A3A3A',fontSize:'51px',lineHeight:'30px'}}>100+<br/>
                                     <span  className="h6 text-uppercase text-muted">Instructors</span></h5>
                                </MDBCard>
                            </MDBCol>
                             <MDBCol sm='3'>
                                  <MDBCard className="text-center border-0 bg-transparent shadow-0">
                                       <h5  style={{color:'#3A3A3A',fontSize:'51px',lineHeight:'30px'}}>10M<br/>
                                     <span  className="h6 text-uppercase text-muted">Learners</span></h5>
                                </MDBCard>
                            </MDBCol>
                             <MDBCol sm='3'>
                                  <MDBCard className="text-center border-0 bg-transparent shadow-0">
                                      <h5  style={{color:'#3A3A3A',fontSize:'51px',lineHeight:'30px'}}>40000<br/>
                                     <span  className="h6 text-uppercase text-muted">Minutes of videos</span></h5>
                                </MDBCard>
                            </MDBCol>
                    </MDBRow>
                     <MDBRow className="mt-4 mb-5 pb-3">
                             <MDBCol sm='4'>
                                  <MDBCard className="text-center border-0 bg-transparent shadow-0">
                                      <h5  style={{color:'#3A3A3A',fontSize:'51px',lineHeight:'30px'}}>480M<br/>
                                     <span  className="h6 text-uppercase text-muted">Course enrollments</span></h5>
                                </MDBCard>
                            </MDBCol>
                             <MDBCol sm='4'>
                                  <MDBCard className="text-center border-0 bg-transparent shadow-0">
                                       <h5  style={{color:'#3A3A3A',fontSize:'51px',lineHeight:'30px'}}>9<br/>
                                     <span  className="h6 text-uppercase text-muted">Languages</span></h5>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol sm='4'>
                                  <MDBCard className="text-center border-0 bg-transparent shadow-0">
                                       <h5  style={{color:'#3A3A3A',fontSize:'51px',lineHeight:'30px'}}>30000<br/>
                                     <span  className="h6 text-uppercase text-muted">Total Watching</span></h5>
                                </MDBCard>
                            </MDBCol>
                            
                    </MDBRow>
                </div>
            </section>
            <section  className="mb-5 pt-5"> 
                <div className="container pt-5 pb-5" >
                        <center>    <h2 className="text-uppercase "  style={{color: '#19011C'}}>Trusted by companies of all sizes</h2></center>
                        <MDBRow className="mt-5">
                            <MDBCol sm='2'>
                                <MDBCard className="border-0 shadow-0">
                                <img  src='./img/company/toyota.png' style={{filter: 'grayscale(1)'}} alt='...' />
                                </MDBCard>
                            </MDBCol>
                            <MDBCol sm='2'>
                                <MDBCard className="border-0 shadow-0">
                                <img  src='./img/company/images.png' style={{filter: 'grayscale(1)'}}  alt='...' />
                                </MDBCard>
                            </MDBCol>
                            <MDBCol sm='2'>
                                <MDBCard className="border-0 shadow-0">
                                <img  src='./img/company/Google.png' style={{filter: 'grayscale(1)'}}  alt='...' />
                                </MDBCard>
                            </MDBCol>
                            <MDBCol sm='2'>
                                <MDBCard className="border-0 shadow-0">
                                <img  src='./img/company/Yahoo-Logo.png' style={{filter: 'grayscale(1)'}}  alt='...' />
                                </MDBCard>
                            </MDBCol>
                               <MDBCol sm='2'>
                                <MDBCard className="border-0 shadow-0">
                                <img  src='./img/company/microsoft.jpg' style={{filter: 'grayscale(1)'}}  alt='...' />
                                </MDBCard>
                            </MDBCol>
                               <MDBCol sm='2'>
                                <MDBCard className="border-0 shadow-0">
                                <img  src='./img/company/nokia.png' style={{filter: 'grayscale(1)'}}  alt='...' />
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                </div>
            </section>
            <br/><br/>
            <Footer/>
    </div>
    )
};

export default Home;