import React, {Component} from 'react';
import {Link} from "react-router-dom";
import moment from 'moment';
import axios from 'axios';
import Swal from "sweetalert2";
import StudentNavbar from './StudentNavbar'
import '../APIUrl';

class ViewAssessmentSubmission extends Component {

    constructor(props) {
        super(props);

        this.state = {
            submission: '',
        };

        this.onDelete=this.onDelete.bind(this);
    }

    componentDidMount() {
        axios.get(global.APIUrl+'/submissions/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    submission: response.data.data,
                });
            })
            .catch(err => {
                Swal.fire('Oops...', 'Assessment Submission View Failed', 'error');
                console.log(err.message)
            });
    }

    // componentDidUpdate() {
    //     axios.get(BASE_URL + 'submissions/' + this.props.match.params.id)
    //         .then(response => {
    //             this.setState({
    //                 submission: response.data.data,
    //             });
    //         })
    //         .catch(err => {
    //             Swal.fire('Oops...', 'Assessment Submission View Failed', 'error');
    //             console.log(err.message)
    //         });
    // }

    onDelete(){
        axios.delete(global.APIUrl+'/submissions/'+this.props.match.params.id)
            .then(
                (res)=>{
                    console.log(res.data)
               
                Swal.fire(
                    'Good job!',
                    'Submission Sucessfully Deleted!',
                    'success'
                    )

                this.props.history.push('/student/assessments/'+this.state.submission.assessment);
                }
            )
    }

    getRemainingTime = (dueDateString) => {
        let currentDate = new Date();
        let dueDate = new Date(dueDateString);
        let dayDiffs = dueDate.getTime() - currentDate.getTime();

        let mins = Math.floor(dayDiffs / 60000);
        let hrs = Math.floor(mins / 60);
        let days = Math.floor(hrs / 24);

        mins = mins % 60;
        hrs = hrs % 24;

        return days + ' days ' + hrs + ' hours ' + mins + ' minutes';
    };

    render() {
        return (
            <div>
                <StudentNavbar/>
                <div className="container mt-3">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="d-inline">Submission Details</h5>

                            {
                                this.state.submission.marks === 0   ?
                                    <Link to={"/submissions/" + this.state.submission._id + "/edit"}>
                                        <input type="button" value="Edit" className="btn btn-primary float-right d-inline "/>
                                    </Link>
                                    : null}
                        </div>


                        <div className="input-group mx-2 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Document File</span>
                            </div>
                            <a id="assigned_doc" className="form-control alert-link mr-3"
                            href={global.APIUrl+'/'+this.state.submission.file_url}
                            download>
                                {this.state.submission.file_name}
                            </a>
                        </div>


                        <div className="input-group mx-2 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Status</span>
                            </div>
                            <label className="form-control nav-link mr-3" id="due_date">
                                {this.state.submission.due_date_passed ? (<div>Delayed</div>) : <div>Early</div>}
                            </label>
                        </div>

                        <div className="input-group mx-2 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Last Modified</span>
                            </div>
                            <label className="form-control nav-link mr-3" id="modified_date">
                                {moment(this.state.submission.modified_date).format('ddd, Do MMM YYYY, h:mm A')}
                            </label>
                        </div>

                        <div className="input-group mx-2 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Marks</span>
                            </div>

                            {
                                this.state.submission.marks === 0
                                    ? <label className="form-control alert-link mr-3" id="modified_date">Not Graded</label>
                                    : <label className="form-control alert-link mr-3" id="modified_date">Graded : Marks = {this.state.submission.marks}%</label>
                            }
                        </div>
                        <div className='text-center mb-2'>
                            {
                                this.state.submission.marks === 0 
                                ? <input type="button" value="Delete" onClick={this.onDelete} className="btn btn-danger d-inline "/> 
                                : null
                            }
                        </div>
                    </div>   
                </div>
            </div>
        );
    }
}

export default ViewAssessmentSubmission;


