
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
  MDBCollapse
} from 'mdb-react-ui-kit';

function TeacherNavbar() {
    const [showBasic, setShowBasic] = useState(false);
    const [showNavRight, setShowNavRight] = useState(false);
    return (
    <div>
        <MDBNavbar expand='lg' className="sticky-top" light bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#' style={{fontSize:'25px'}} className="pt-2 navbar-brand h1 fw-bold"><MDBIcon fas icon="book-open" className="text-danger"/> <span className="text-danger">&nbsp;E</span><span className="text-white">-Learning</span></MDBNavbarBrand>

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
                    <MDBNavbarLink href='/lecturer/course' tabIndex={-1} aria-disabled='true' style={{color: '#DCDCDC', cursor: 'pointer'}}>
                        Lessons
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                     <MDBNavbarItem>
                    {/* <MDBNavbarLink href='#' tabIndex={-1} aria-disabled='true' style={{color: '#DCDCDC', cursor: 'pointer'}}>
                        Discuss
                    </MDBNavbarLink> */}
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    {/* <MDBNavbarLink href='#' tabIndex={-1} aria-disabled='true' style={{color: '#DCDCDC', cursor: 'pointer'}}>
                        Blog
                    </MDBNavbarLink> */}
                    </MDBNavbarItem>
                </MDBNavbarNav>

               <MDBCollapse navbar show={showNavRight}>
                <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                  
                    <MDBNavbarItem>
                    <MDBNavbarLink href='#'>
                        {/* <MDBBtn size="lg" outline className='mx-2 text-white' style={{fontSize:'12px',letterSpacing:'2px'}} color='danger'>
                            Student
                        </MDBBtn> */}
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink  href='#'  >
                        {/* <MDBBtn size="lg" className='mx-2' color='danger'  style={{fontSize:'12px',letterSpacing:'2px'}} >
                            Teacher
                        </MDBBtn> */}
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>
                </MDBCollapse>
                </MDBCollapse>
            </MDBContainer>
            </MDBNavbar>
            {/* <header class="bg-dark py-4">
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
            </header> */}
    </div>
    )
};

export default TeacherNavbar;