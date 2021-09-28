import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from "../header";
import { reactLocalStorage } from 'reactjs-localstorage';
import $ from 'jquery';
import Pdf from 'react-to-pdf';

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [9.5,8]
};

class Exam extends Component {
    constructor(props) {
        super(props);
        this.ExameDetails = this.updateExameDetails.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.state = {
            guest: []
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

        console.log(this.props.guest);

        axios.get('http://localhost:5000/ExamRegistration/view')
            .then(response => {
                const guest = response.data;
                this.setState({ guest });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }

    deleteData(id) {
        axios.delete('http://localhost:5000/ExamRegistration/delete/' + id)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Successfully Unenrolled from the lesson!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = "/enrollment";
                    }
                });
            }).catch((err) => {
                Swal.fire({
                    title: "error!",
                    text: "Unenrollment is not Success",
                    icon: 'error',
                    position: 'center',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });
            });
    }

    updateExameDetails(id, regNo, lesson, examDate, session, amount) {
        reactLocalStorage.setObject("Exam", [id, regNo, lesson, examDate, session, amount]);
        window.location.href = "/updateExam";
    }

    render() {
        return (
            <div>
                  <Header/>
                  <br/>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                    <h1 tag='div' className='display-3 pb-3 mb-3 border-bottom'>Examination Registration Details</h1>
                </div>
                <div className='float-right' style={{ marginRight:'20%',marginTop:'1.5%' }}>
                    <Pdf targetRef={ref} filename="Exam Registration Details.pdf" options={options} >
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
                <div ref={ref} className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '120rem', margin: 'auto', padding: '10px' }}>
                    <div className="card-body" >
                        <div className="row">
                            <table className="table table-success table-striped">
                                <thead className="table-info" >
                                    <tr>
                                        <th scope="col">Registration No.</th>
                                        <th scope="col">Lesson Name</th>
                                        <th scope="col">Exam Date</th>
                                        <th scope="col">Exam Session</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Payment Status</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Unenroll from lesson</th>
                                    </tr>
                                </thead>
                                {this.state?.guest?.length > 0 && this.state.guest.map((item, index) =>
                                    <tbody id="myTable" key={index}>
                                        <tr>
                                            <td>{item.regNo}</td>
                                            <td>{item.lesson}</td>
                                            <td>{(item.examDate).split('T')[0]}</td>
                                            <td>{item.session}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.paymentStatus}</td>
                                            <td>
                                                <button type="button" class="btn btn-info"
                                                    onClick={() => this.updateExameDetails(item._id, item.regNo, item.lesson, item.examDate, item.session, item.amount)}>Edit</button>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-danger"
                                                    onClick={() => this.deleteData(item._id)}>Unenroll</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <a href="/examregistration">
                        <div className="text-end mb-4">
                            <button type="button" class="btn btn-danger btn-sm">+ Add More Lessons</button>
                        </div>
                    </a>
                </div>
                <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px',marginTop:'-7%' }}>
                <div style={{ height: '300px' }}>
                    <div className="row row-cols-1 row-cols-md-3 g-4" className="text-center container">
                        <div className="col">
                            <div >
                                <div className="card-body">
                                <a href='/payment'><button type="button" class="btn btn-dark btn-lg"><h5 className="card-title" style={{ display: 'flex', color:'white',justifyContent: 'center', alignItems: 'center' }}>Pay here</h5></button></a>
                                    
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Exam;