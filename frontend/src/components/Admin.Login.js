
import React, { useState , useEffect } from 'react';
import { MDBBtn , MDBCol , MDBRow, MDBIcon} from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import './APIUrl';

function Index() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [loginBtn, setloginBtn] = useState(true);
    const [userName, setUser] = useState("");
    const [password, setPassword] = useState("");

    function set_Password(e){
        if((e.length > 2)&& (userName.length>2)){
                setloginBtn(false);
        }else{
                setloginBtn(true);
        }
        setPassword(e);
    }

    function showPassword(){
        setPasswordShown(passwordShown ? false : true);
    }

    async function login(e){
       e.preventDefault();

       let item = {userName, password};
       let result = await fetch(global.APIUrl+"/user/login", {
         method: 'POST',
         headers:{
            "Content-Type" : "application/json",
            "Accept" : "application/json"
         },
         body:JSON.stringify(item)
      });
      result = await result.json();
      //localStorage.setItem("user-info",JSON.stringify(result));
      console.log(JSON.stringify(result.message));
   
      if( JSON.stringify(result.message) === 'true'){
          Cookies.set('user_name',userName, { expires: 70000, path: '' });

          	Swal.fire({  
			title: "Success!",
			text: "Login Success",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/Admin";
				}
			});
      }else{
          	Swal.fire({  
			title: "Error!",
			text: "Login Not Success",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
       }
    }
      return (
         <div>
           <div class="back">
            <div class="div-center shadow-4">
                <div class="content">
                <center>
                <img src="img/user.gif" width="65%"/>
                </center>
                <form>
                    <div class="form-group">
                        <small>User Name</small>
                        <input type="text" class="form-control"  onChange={(e) =>{
                            setUser(e.target.value);
                        }}/>
                    </div>
                   <div class="form-group mt-3">
                        <small>Password</small>
                        <input class="form-control" type={passwordShown ? "text" : "password"} id="pass" onChange={(e) =>{
                            set_Password(e.target.value);
                        }}/>
                        <input type="checkbox" onClick={showPassword}/><small style={{fontSize:'13px'}} className="text-muted">&nbsp;Show Password</small>
                    </div>
                    <div class="mt-3 mb-2">
                         <div class="d-grid gap-2">
                                <MDBBtn disabled={loginBtn} onClick={login} class="btn btn-sm text-white bg-dark d-letter-spacing fw-light">Login</MDBBtn>
                         </div>
                    </div>
                    <center>
                     <MDBRow >
                        <MDBCol size='6'> <a href="PasswordReset" class="text-muted"><small>Password Reset</small></a></MDBCol>
                        <MDBCol size='1'></MDBCol>
                        <MDBCol size='1'></MDBCol>
                        <MDBCol size='4'>
                            <a href="Registration" class="text-muted"><small>Registration</small></a>
                        </MDBCol>
                     </MDBRow>
                    </center>
                </form>
                </div>
                </div>
            </div>
         </div>
      )
};


export default Index;