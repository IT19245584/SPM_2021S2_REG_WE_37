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

function Header() {
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
                            <MDBDropdownLink><a class="nav-link active" aria-current="page" href="/development">Development</a></MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink><a class="nav-link active" aria-current="page" href="/businness">Bussiness</a></MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink>Finance & Accounting</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink>Design</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink><a class="nav-link active" aria-current="page" href="/music">Music</a></MDBDropdownLink>
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
                    <MDBNavbarLink href='/examregistration' tabIndex={-1} aria-disabled='true' style={{color: '#DCDCDC', cursor: 'pointer'}}>
                        Exam Registration
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
                    <MDBDropdown>
                   
                    <MDBDropdownToggle tag='a' style={{color: '#DCDCDC', cursor: 'pointer'}}  className='nav-link'>
                    <MDBIcon fas icon="user-circle"  size='3x'  />
                        </MDBDropdownToggle>
                    <MDBDropdownMenu>
                        <MDBDropdownItem>
                            <MDBDropdownLink><a class="nav-link active" aria-current="page" href="/studentProfile">Student Profile</a></MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink><a class="nav-link active" aria-current="page" href="/">Log Out</a></MDBDropdownLink>
                        </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    </MDBNavbarItem>
                </MDBNavbarNav>
                </MDBCollapse>
                </MDBCollapse>
            </MDBContainer>
            </MDBNavbar>
    
   </div>
 

  );
}

export default Header;


