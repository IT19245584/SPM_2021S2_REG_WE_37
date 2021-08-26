import React, { Component } from "react";
import Swal from 'sweetalert2';

class Navbar extends Component { 
render() {
    function logout(){
        
          	Swal.fire({  
                title: "Success!",
                text: "Logout Success",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/Login";
                    }
            });
    }
return (
  <div>
      <div class="dashboard-header">
            <nav class="navbar navbar-expand-lg bgTopNav fixed-top">
                <a class="navbar-brand h1 fw-bold" style={{fontSize:'25px'}} href="Admin"><span className="text-black">AMPE</span><span className="text-danger">A.V</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto navbar-right-top">
                        <li class="nav-item square border border-0">
                            <div id="custom-search" class="top-search-bar">
                                <input class="form-control" type="text" placeholder="Search.."/>
                            </div>
                        </li>
                        <li class="nav-item dropdown notification square border border-0">
                            <a class="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-fw fa-bell"></i> <span class="indicator"></span></a>
                            <ul class="dropdown-menu dropdown-menu-right notification-dropdown">
                                <li>
                                    <div class="notification-title"> Notification</div>
                                    <div class="notification-list">
                                        <div class="list-group">
                                          
                                            
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-footer"> <a href="#">View all notifications</a></div>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown connection square border border-0">
                            <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fas fa-fw fa-th"></i> </a>
                            <ul class="dropdown-menu dropdown-menu-right connection-dropdown">
                                <li class="connection-list">
                                </li>
                                <li>
                                    <div class="conntection-footer"><a href="#">More</a></div>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown nav-user">
                            <a class="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-fw fa-user"></i></a>
                            <div class="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                                <div class="nav-user-info">
                                    <h5 class="mb-0 text-white nav-user-name">N. Sandeepa </h5>
                                    <span class="status"></span><span class="ml-2">Available</span>
                                </div>
                                <a class="dropdown-item" href="#"><i class="fas fa-user mr-2"></i>Account</a>
                                <a class="dropdown-item" href="#"><i class="fas fa-cog mr-2"></i>Setting</a>
                                <a class="dropdown-item" href="#" onClick={logout}><i class="fas fa-power-off mr-2"></i>Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="nav-left-sidebar sidebar-dark">
            <div class="menu-list" style={{paddingBottom:'40%'}}>
                <nav class="navbar navbar-expand-lg navbar-light shadow-0">
                    <a class="d-xl-none d-lg-none" href="#">Dashboard</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav flex-column">
                           <h4 className="mt-4 mb-4 text-warning">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</h4>
                            <li class="nav-item ">
                                <a class="nav-link active" style={{fontSize:'17px'}} href="#"  aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> ADMIN </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" style={{fontSize:'17px'}}  aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2"> TEACHER</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link " style={{fontSize:'17px'}} href="#"  aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> FACILITIES </a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link " style={{fontSize:'17px'}} href="#"  aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> SUBJECTS </a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link " style={{fontSize:'17px'}} href="#"  aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> NEWS </a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link " style={{fontSize:'17px'}} href="#"  aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> STUDENTS </a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link " style={{fontSize:'17px'}} href="#"  aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> CIRCULAR ACTIVITY </a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link " style={{fontSize:'17px'}} href="#"  aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> EXAM </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
   );
 }
}
export default Navbar; 