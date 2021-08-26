
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

function NavBar() {
    const [showBasic, setShowBasic] = useState(false);
    const [showNavRight, setShowNavRight] = useState(false);
    return (
           <MDBNavbar expand='lg' className="sticky-top" light bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/' style={{fontSize:'25px'}} className="pt-2 navbar-brand h1 fw-bold">
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
                    <MDBNavbarLink href='User_student_registration'>
                        <MDBBtn size="lg" outline className='mx-2 text-white' style={{fontSize:'12px',letterSpacing:'2px'}} color='danger'>
                            Student
                        </MDBBtn>
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink  href='User_teacher_login'  >
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
          )
};

export default NavBar;