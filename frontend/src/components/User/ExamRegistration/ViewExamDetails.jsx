import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from "../header";

class Exam extends Component {
    constructor(props) {
        super(props);
       // this.updateGuestSpeaker = this.updateGuestSpeaker.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.state = {
            guest: []
        }
    }

    componentDidMount() {
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

    // updateGuestSpeaker(id, name, profession, description, status, image) {
    //     reactLocalStorage.setObject("GuestSpeaker", [id, name, profession, description, status, image]);
    //     window.location.href = "/update-guest-speaker";
    // }

    render() {
        return (
            <div>
                  <Header/>
                  <br/>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                    <h1 tag='div' className='display-3 pb-3 mb-3 border-bottom'>Examination Registration Details</h1>
                </div>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '120rem', margin: 'auto', padding: '10px' }}>
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
                                        <th scope="col">Unenroll from lesson</th>
                                    </tr>
                                </thead>
                                {this.state?.guest?.length > 0 && this.state.guest.map((item, index) =>
                                    <tbody key={index}>
                                        <tr>
                                            <td>{item.regNo}</td>
                                            <td>{item.lesson}</td>
                                            <td>{item.examDate}</td>
                                            <td>{item.session}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.paymentStatus}</td>
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
                    <a href="/addlesson">
                        <div className="text-end mb-4">
                            <button type="button" class="btn btn-danger btn-sm">+ Add More Lessons</button>
                        </div>
                    </a>
                </div>
                <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
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