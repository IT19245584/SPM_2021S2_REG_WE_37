import React, {useState} from 'react';
import Swal from 'sweetalert2';
import Header from "../header";
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';

export default function Payment(){
  var Payment = reactLocalStorage.getObject('PaymentHistory');
  const [amount, setamount] = useState(Payment[4]);
  const [accNo, setaccNo] = useState("");
  //const [amount, setamount] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  const [cvc, setcvc] = useState("");
  const [email, setemail] = useState("");



  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [Required, setRequired] = useState('*Required');

  function sendDate(e){
    e.preventDefault();

    const payment ={
      accNo, 
      amount, 
      expiryDate, 
      cvc,  
      email
      }

    console.log('Data', payment);

		axios.post("http://localhost:5000/Payment/add",payment).then(() =>{
			Swal.fire({  
			title: "Success!",
			text: "Payment Successful!",
			icon: 'success',
			confirmButtonText: "OK",
            confirmButtonColor: "#00B74A",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/payment";
				}
				});

			
		}).catch((err)=>{

			Swal.fire({  
			title: "Error!",
			text: "Payment Unsuccessful! Please fill all the fiels.",
			icon: 'error',
			confirmButtonText: "OK",
            confirmButtonColor: "#F93154",
			type: "success"})
		})
	 }
    return(
<div> 
    <Header/>
    <div className="container">   
          <div class="row mt-5 mb-2">
              <div class="col-sm-6">
              <img src="https://i.imgur.com/Gi5lMXq.jpeg" style={{width:'100%'}} class="img-fluid pt-6" alt="Responsive image"/>
              </div>
              <div class="col-sm-6 p-3 bg-light">
              <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center',height:"60px" }}><b>Payment Details</b></h2>
              <div style={{ justifyContent:'center', alignItems:'center' }}>
              <div className="row mb-1">
                  <div class="mb-1 col-6">
                    <label style={{color:'black'}}  class="form-label"><b>Account Number </b></label>
                    <input type="number" class="form-control"  placeholder="Enter Account number" onChange={(e) =>{
                              setaccNo(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-1 col-4">
                    <label style={{color:'black'}}  class="form-label"><b>Amount </b></label>
                    <input class="form-control" disabled={true} placeholder="$2000"onChange={(e) => { setamount(e.target.value) }} value={amount}
                            />
                  </div>
                  </div>
                  <div className="row mb-1">
                  <div class="mb-1 col-6">
                    <label style={{color:'black'}}  class="form-label"><b>Expeir Date </b></label>
                    <input type="date" class="form-control"  placeholder="" onChange={(e) =>{
                              setexpiryDate(e.target.value);
                            }}/>
                  </div>
                  <div class="mb-1 col-4">
                    <label style={{color:'black'}}  class="form-label"><b>CVC </b></label>
                    <input type="number" class="form-control"  placeholder="Enter CVC" onChange={(e) =>{
                             setcvc(e.target.value);
                            }}/>
                  </div>
                  </div>
                  <div class="row mb-1">
                  <div class="mb-1 col-10">
                    <label style={{color:'black'}}  class="form-label"><b>Email </b></label>
                    <input type="email" class="form-control"  placeholder="Enter Email" onChange={(e) =>{
                             setemail(e.target.value);
                            }}/>
                  </div>
                  </div>
                </div>
                <br/>
                <div class="row mb-1">
                  <div class="mb-1 col-10">
               
              <center><button onClick={sendDate} type="submit" className="btn btn-danger btn-block mb-2" >
                Preview & Checkout<i className="fas fa-angle-double-right"></i>
              </button></center>          
              </div>
                  </div>  
                </div>                          
              </div>                           
        </div>
        <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: '-20px -80px', padding: '20px' }}>
                <div style={{ height: '300px' }}>
                    <div className="row row-cols-1 row-cols-md-3 g-4" className="text-center container">
                        <div className="col">
                            <div >
                                <div className="card-body">
                                <a href='/paymentHistory'><button type="button" class="btn btn-dark btn-lg"><h5 className="card-title" style={{ display: 'flex', color:'white',justifyContent: 'center', alignItems: 'center' }}>Payment History</h5></button></a>
                                    
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
          
    )
}
