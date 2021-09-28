import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import Header from "../header";
import $ from 'jquery';
import Pdf from 'react-to-pdf';

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [9.5,8]
};

class PaymentHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payment: []
            
        }
    }

    componentDidMount() {
        $(document).ready(function () {
            $("#myInput").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                $("#myTable tr").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });

        console.log(this.props.payment);

        axios.get('http://localhost:5000/ExamRegistration/view')
            .then(response => {
                const payment = response.data;
                this.setState({ payment });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }


    render() {
        return (
            <div>
                  <Header/>
                  <br/>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                    <h1 tag='div' className='display-3 pb-3 mb-3 border-bottom'><b>Payment History</b></h1>
                </div>
                <div className='float-right' style={{ marginRight:'20%',marginTop:'1.5%' }}>
                    <Pdf targetRef={ref} filename="Payment History.pdf" options={options} >
                        {({ toPdf }) =>  <input type="button" value="Export" onClick={toPdf} className="btn btn-dark"/>}
                    </Pdf>
                </div>
                <div className='mx-auto col-md-4 m-4'>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-search"></i></span>
                        </div>
                        <input class="form-control" id="myInput" type="text" placeholder="Search.."></input>
                    </div>
                </div>
                <div ref={ref} className="card card border border-light shadow-0 mb-3" style={{maxWidth: '80rem', margin: 'auto', padding: '10px' }}>
                    <div className="card-body" >
                        <div className="row">
                            <table className="table table-success table-striped">
                                <thead className="table-info" >
                                    <tr>
                                        <th scope="col">Lesson Name</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Payment Status</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                {this.state?.payment?.length > 0 && this.state.payment.map((item, index) =>
                                    <tbody id="myTable" key={index}>
                                        <tr>
                                            <td>{item.lesson}</td>
                                            <td>{item.amount}</td>
                                            <td>Completed</td>
                                            <td>{(item.examDate).split('T')[0]}</td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                <div style={{ height: '300px' }}>
                    <div className="row row-cols-1 row-cols-md-3 g-4" className="text-center container">
                        <div className="col">
                            <div >
                                <div className="card-body">
                                <a href='/'><button type="button" class="btn btn-dark btn-lg"><h5 className="card-title" style={{ display: 'flex', color:'white',justifyContent: 'center', alignItems: 'center' }}>Generate Report</h5></button></a>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div> */}
            </div>
        );
    }
}

export default PaymentHistory;