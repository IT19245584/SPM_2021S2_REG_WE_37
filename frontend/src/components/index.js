
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
        <MDBNavbar expand='lg' className="sticky-top" light bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#' style={{fontSize:'25px'}} className="pt-2 navbar-brand h1 fw-bold">
                    <MDBIcon fas icon="book-open" className="text-danger"/> <span className="text-danger">&nbsp;E</span><span className="text-white">-Learning</span>
                </MDBNavbarBrand>

                <MDBNavbarToggler
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowBasic(!showBasic)}
                >
                <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                    <MDBNavbarItem>
                    <MDBNavbarLink style={{color: '#DCDCDC'}} active aria-current='page' href='#'>
                        About
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                    
                    <MDBNavbarItem>
                    <MDBDropdown>
                        <MDBDropdownToggle tag='a' style={{color: '#DCDCDC', cursor: 'pointer'}}  className='nav-link'>
                        Categories
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                        <MDBDropdownItem>
                            <MDBDropdownLink>Development</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink>Bussiness</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink>Finance & Accounting</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink>Design</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink>Music</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink>IT & Software</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink>Marketing</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink>Languages</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink>School Education</MDBDropdownLink>
                        </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                    <MDBNavbarLink href='#' tabIndex={-1} aria-disabled='true' style={{color: '#DCDCDC', cursor: 'pointer'}}>
                        Discuss
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                     <MDBNavbarItem>
                    <MDBNavbarLink href='#' tabIndex={-1} aria-disabled='true' style={{color: '#DCDCDC', cursor: 'pointer'}}>
                        Discuss
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink href='#' tabIndex={-1} aria-disabled='true' style={{color: '#DCDCDC', cursor: 'pointer'}}>
                        Blog
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>

               <MDBCollapse navbar show={showNavRight}>
                <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                  
                    <MDBNavbarItem>
                    <MDBNavbarLink href='/studentRegistration'>
                        <MDBBtn size="lg" outline className='mx-2 text-white' style={{fontSize:'12px',letterSpacing:'2px'}} color='danger'>
                            Student
                        </MDBBtn>
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink  href='/teacherRegistration'  >
                        <MDBBtn size="lg" className='mx-2' color='danger'  style={{fontSize:'12px',letterSpacing:'2px'}} >
                            Teacher
                        </MDBBtn>
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>
                </MDBCollapse>
                </MDBCollapse>
            </MDBContainer>
            </MDBNavbar>

            

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
                                    <a class="btn btn-danger btn-lg px-4 me-sm-3" href="#features">Join now</a>
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
            <section style={{borderTop: '1px solid #E7D8EA'}} className="mb-5 trust"> 
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
                                <img  src='./img/company/apple.png' style={{filter: 'grayscale(1)'}}  alt='...' />
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
            <footer class="text-center text-lg-start bg-dark text-muted">
            <section
                class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >
                <div class="me-5 d-none d-lg-block">
                <span class="text-warning">Get connected with us on social networks:</span>
                </div>

                <div>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-google"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-github"></i>
                </a>
                </div>
            </section>

            <section class="">
                <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h4 class="text-uppercase fw-bold mb-4" style={{letterSpacing:'3px'}}>
                         <MDBIcon fas icon="book-open" className="text-danger"/> <span className="text-danger">&nbsp;E</span><span className="text-white">-Learning</span>
                    </h4>
                    <p>
                        Every individual has the potential to create change, whether in their life, their community, or the world. The transformative power of education is what unlocks that potential.
                    </p>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 class="text-uppercase fw-normal text-F1F1F1 mb-4">
                        Userful Links
                    </h6>
                    <p>
                        <a href="#!" class="text-reset">Affilliate</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Sitemap</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Privacy Policy</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Careers</a>
                    </p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                   <h6 class="text-uppercase fw-normal text-F1F1F1 mb-4">
                       &nbsp;
                    </h6>
                    <p>
                        <a href="#!" class="text-reset">Blogs</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Contact Us</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Help Center</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Terms</a>
                    </p>
                    </div>

                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                    <h6 class="text-uppercase fw-normal text-F1F1F1 mb-4">
                        Contact
                    </h6>
                    <p><i class="fas fa-home me-3"></i> 89, Galle Road, Kandy</p>
                    <p>
                        <i class="fas fa-envelope me-3"></i>
                         elearning@gmail.com
                    </p>
                    <p><i class="fas fa-phone me-3"></i> + 94 10 88 7822</p>
                    <p><i class="fas fa-print me-3"></i> + 94 11 78 2390</p>
                    </div>

                </div>

                </div>
            </section>



            <div class="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                © 2021 Copyright:
                <a class="text-reset fw-bold" href="https://elearning.com">elearning.com</a>
            </div>

            </footer>

    </div>
    )
};

export default Home;
