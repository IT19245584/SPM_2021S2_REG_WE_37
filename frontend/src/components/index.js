
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
      //console.log(JSON.stringify(result.success));
   
      if( JSON.stringify(result.success) === 'true'){
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
                <img src="img/user.gif" width="75%"/>
                </center>
                <form>
                    <div class="form-group">
                        <label for="exampleInputPassword1">User Name</label>
                        <input type="text" class="form-control"  onChange={(e) =>{
                            setUser(e.target.value);
                        }}/>
                    </div>
                   <div class="form-group mt-3">
                        <label for="exampleInputPassword1">Password</label>
                        <input class="form-control" type={passwordShown ? "text" : "password"} id="pass" onChange={(e) =>{
                            set_Password(e.target.value);
                        }}/>
                        <input type="checkbox" onClick={showPassword}/><small style={{fontSize:'13px'}} className="text-muted">&nbsp;Show Password</small>
                    </div>
                    <div class="mt-3 mb-2">
                         <div class="d-grid gap-2">
                                <MDBBtn disabled={loginBtn} onClick={login} class="btn text-white bg-dark d-letter-spacing fw-light">Login</MDBBtn>
                         </div>
                    </div>
                    <center>
                     <MDBRow >
                        <MDBCol size='5'></MDBCol>
                        <MDBCol size='2'></MDBCol>
                        <MDBCol size='5'><a href="PasswordReset" class="text-muted"><small>Password Reset</small></a></MDBCol>
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