import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import Swal from "sweetalert2";
import $ from 'jquery';
import Pdf from 'react-to-pdf';

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [9.5,8]
};

class ViewSubmissions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            submissions: []
        };
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

        console.log(this.props.assessment);

        axios.get(global.APIUrl+'/submissions/assessment/' + this.props.assessment)
            .then(response => {
                this.setState({
                    submissions: response.data.data,
                });
            })
            .catch(err => {
                console.log(err.message)
            });
    }

    componentDidUpdate() {

        $(document).ready(function () {
            $("#myInput").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                $("#myTable tr").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });

        axios.get(global.APIUrl+'/submissions/assessment/' + this.props.assessment)
            .then(response => {
                this.setState({
                    submissions: response.data.data,
                });
            })
            .catch(err => {
                console.log(err.message)
            });
    }

    onClickAssignMarks = (id) => {
        let marks = document.getElementById(id).value;

        if (0 <= marks && marks <= 100) {
            axios.put(global.APIUrl+'/submissions/' + id, { marks: marks })
                .then(response => {
                    console.log(response.data.message)
                })
                .catch(err => {
                    Swal.fire('Oops...', 'Submissions View Failed', 'error');
                    console.log(err.message)
                });

        } else {
            Swal.fire('Oops...', 'Assign Marks between 0 and 100', 'error');
        }
    };

    render() {
        return (
            <div className="container">
                <div className='float-right'>
                    <Pdf targetRef={ref} filename="SubmissionList.pdf" options={options} >
                        {({ toPdf }) =>  <input type="button" value="Export" onClick={toPdf} className="btn btn-info"/>}
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

                <div ref={ref}>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="d-inline">Submission Details</h5>
                        </div>
                    </div>
                    <table className="table table-bordered table-striped table-responsive-sm bg-light">
                        <thead>
                            <tr>
                                <th>Student Email</th>
                                <th>Submission Date</th>
                                <th>Submission File</th>
                                <th>Status</th>
                                <th>Marks</th>
                                <th>Assign Marks</th>
                            </tr>
                        </thead>
                        <tbody id="myTable">
                            {
                                this.state.submissions.map((submission, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{submission.student.email}</td>
                                            <td>{moment(submission.modified_date).format('Do MMMM YYYY')}</td>
                                            <td>
                                                <a id="assigned_doc" className="alert-link mr-3"
                                                    href={global.APIUrl+'/'+submission.file_url}
                                                    download>
                                                    {submission.file_name}
                                                </a>
                                            </td>
                                            <td>{submission.due_date_passed ? (<div>Delayed</div>) : <div>Early</div>}</td>
                                            <td>{submission.marks}%</td>
                                            <td>
                                                <div className="input-group">
                                                    <input type="number"
                                                        id={submission._id}
                                                        className="form-control"
                                                        placeholder="Enter Marks" />
                                                    <div className="input-group-append">
                                                        <input type="button"
                                                            value="Assign"
                                                            onClick={() => this.onClickAssignMarks(submission._id)}
                                                            className="btn btn-info" />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <br /><br />
                </div>
            </div>
        );
    }
}

export default ViewSubmissions;