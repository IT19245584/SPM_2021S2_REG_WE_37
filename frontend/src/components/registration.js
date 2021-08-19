
import React, { useState , useEffect } from 'react';
import { MDBBtn , MDBCol , MDBRow, MDBIcon} from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import passwordValidator from 'password-validator';
var schema = new passwordValidator();

function Register() {
    const [passwordShown, setPasswordShown] = useState(false);
    function showPassword(){
        setPasswordShown(passwordShown ? false : true);
    }

    schema
    .is().min(4)                               
    .is().max(100)                             
    .has().uppercase()                         
    .has().lowercase()                         
    .has().digits(2)       
    .has().not().spaces()  
    .is().not().oneOf(['Passw0rd', 'Password123']); 

   const [isValidCFpassword, setIsValidCfpassword] = useState(false);
   const [messageCfpassword, setMessageCfpassword] = useState('');
   const [typeForgotPassowrd, setForgotLoginPassword] = useState("");
   const [ForgotLoginCPassword, setForgotLoginCPassword] = useState("");
   const [UserName, setUserName] = useState("");
   const [ResetBtn, setResetBtn] = useState(true);

   
    const setCFPasswordFnction = (event) => {
    const ConfirmPassword = event;
        if(schema.validate(typeForgotPassowrd) === false) {
                setIsValidCfpassword(true);
                setMessageCfpassword('Password is not strong');
                setResetBtn(true);
        }else{
            if ((ConfirmPassword === typeForgotPassowrd) && (ConfirmPassword !=='') && (ConfirmPassword!== null) ) {
                setIsValidCfpassword(true);
                setMessageCfpassword('Password Are Matching');
                if((UserName.length > 0) && (typeForgotPassowrd.length >0) &&(ForgotLoginCPassword.length>0)){
                    setResetBtn(false);
                }else{
                    setResetBtn(true);
                }
            } else {
                setIsValidCfpassword(false);
                setMessageCfpassword('Passwords Are Not Match');
                setResetBtn(true);
            }
        }
   
    setForgotLoginCPassword(event);
  };

  function resetPassword(e){
       e.preventDefault();
       const userReg ={ UserName, ForgotLoginCPassword}

        axios.post(global.APIUrl+"/user/register/",userReg).then(() =>{

        Swal.fire({  
        title: "Success!",
        text: "Registrtaion Success!",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"}).then(okay => {
        if (okay) {
            window.location.href = "/";
        }
        });

        
    }).catch((err)=>{

        Swal.fire({  
        title: "Error!",
        text: "Registrtaion Not Success",
        icon: 'error',
        confirmButtonText: "OK",
        type: "success"})
    })
  }
      return (
         <div>
           <div class="back">
            <div class="div-center  shadow-4">
                <div class="content">
                <center>
                <img src="img/user.gif" width="65%"/>
                </center>
                <form>
                    <div class="form-group">
                        <small for="exampleInputPassword1">User Name</small>
                        <input type="text" class="form-control" 
                         onChange={(e) =>{
                            setUserName(e.target.value);
                        }}/>
                    </div>
                   <div class="form-group mt-3">
                        <small for="exampleInputPassword1">Password</small>
                        <input class="form-control" type={passwordShown ? "text" : "password"} id="pass" onChange={(e) =>{
                            setForgotLoginPassword(e.target.value);
                        }}/>
                    </div>
                     <div class="form-group mt-3">
                        <small>Confirm Password</small>
                        <input class="form-control" type={passwordShown ? "text" : "password"} id="pass"  onChange={(e) =>{
                                            setCFPasswordFnction(e.target.value);
                                          }} />
                        <span style={{fontSize:'12px', margin:'0px', padding:'0px'}}  className={`messageCfpassword ${isValidCFpassword ? 'success' : 'error'}`} >
                            {messageCfpassword}
                        </span>
                        <br/>
                        <input type="checkbox" onClick={showPassword}/><small style={{fontSize:'10px'}} className="text-muted">&nbsp;Show Password</small>
                    </div>
                    
                    <div class="mt-3 mb-2">
                         <div class="d-grid gap-2">
                                <MDBBtn onClick={resetPassword} class="btn text-white btn-sm bg-dark d-letter-spacing fw-light" disabled={ResetBtn}>Registration</MDBBtn> 
                         </div>
                    </div>
                    <center>
                     <MDBRow >
                        <MDBCol size='5'></MDBCol>
                        <MDBCol size='2'></MDBCol>
                        <MDBCol size='5'><a href="/Admin.Login" class="text-muted"><small>Login</small></a></MDBCol>
                     </MDBRow>
                    </center>
                </form>
                </div>
                </div>
            </div>
         </div>
      )
};


export default Register;