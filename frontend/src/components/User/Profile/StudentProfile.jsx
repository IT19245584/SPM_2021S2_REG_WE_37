import React, {useState, useEffect} from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Header from "../header";

export default function Student(){

    var student = reactLocalStorage.getObject('Student');

    const id = student[0];
    const [username, setusername] = useState(student[0]);
   // const [email, setEmail] = useState(student[1]);
    const [phoneNumber, setcontactNum] = useState(student[2]); 
    const [address, setaddress] = useState(student[3]);
    

    function sendData(e){
        e.preventDefault();
        
        const student = {
            username,
              email,
              phoneNumber,
              address


        }

        
        axios.get("http://localhost:5000/Student/view/", student).then(()=>{
            const id = 0;
	
		})
    }
    const [disable, setDisable] = useState(true);

    function edit(){
      
        setDisable(false);
    }
    const email = Cookies.get('email');
    const fullName = Cookies.get('fullName');
   
    const [profile,setProfile] = useState([])
        useEffect(() => {
            axios.get('http://localhost:5000/students/search/'+email)
            .then(res => setProfile(res.data))
            .catch(error => console.log(error));
        })
        
    return(
<div> 
<Header/>
        <div className="container"><br/>
        <div className="d-flex p-2" style={{ display: 'flex',  alignItems: 'center', height: '100px',marginLeft:'10%',marginTop:'0%' }}>
                    <h1 tag='div' className='display-3 pb-3 mb-3 border-bottom'><b>Student Profile</b></h1>
                </div>
                <div className="container">
          <div class="row mt-5 mb-5">
                <div class="col-sm-6 pt-5">
              <img src="./img/user-profile.jpg" style={{width:'60%', margin: '-80px 20px',marginLeft:'20%'}} class="img-fluid pt-5" alt="Responsive image"/>
              </div>
              <div class="col-sm-6 p-3 bg-light">
        <form style={{ maxWidth: '70rem', margin: '10px -40px', padding: '20px' }} className="row" onSubmit={sendData}>
            
            <div className="col-5 form-group">
                <label  style={{color:'black'}} for="name" className="form-label"><b>Username</b></label>
                    <input type="text" className="form-control" id="name"  disabled={true} value={profile.fullName}
                   disabled={disable} />
            </div>

            <div className=" form-group">
                <label style={{color:'black'}} for="age" className="form-label"><b>Email</b></label>
                    <input type="text" className="form-control"  id="age"  value={email}
                  disabled={disable} />
            </div>
            <div className="form-group">
                <label style={{color:'black'}} for="gender" className="form-label"><b>Phone Number</b></label>
                    <input type="text" className="form-control" id="gender"  value={phoneNumber}
                    disabled={disable} />
            </div>
            <div className="form-group">
                <label style={{color:'black'}} for="gender" className="form-label"><b>Address</b></label>
                    <textarea type="text" className="form-control" id="gender"  value={address}
                    disabled={disable} />
            </div>
           
            <div style={{color:'black'}} className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '-30px' }}>
                <div style={{ height: '300px' }}>
                    <div className="row row-cols-1 row-cols-md-3 g-4" className="text-center container">
                        <div className="col">
                            <div >
                                <div className="card-body">
                                <button onClick={edit} type="button"  class="btn btn-danger  btn-lg">Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;                            
                                <button type="button"  class="btn btn-success btn-lg">Save</button>
                                </div>
                                
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
