import React, {Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {Link} from "react-router-dom";
import $ from "jquery";
import AddAssessment from "./AddAssessment";
import TeacherNavbar from './TeacherNavbar'
import '../APIUrl'

const LinkView = ({assessment, deleteMaterial}) => (
    <li className="list-group-item">
        <Link to={'/lecturer/assessments/' + assessment._id}>
            <label className="d-inline">
                <label className="alert-link">{assessment.link_name}</label>
            </label>
        </Link>
        <input type="button" id="delete_material" value="Delete" onClick={() => {
            deleteMaterial(assessment._id)
        }} className="btn btn-danger float-right d-inline"/>
    </li>
);

class ViewCourseAssessments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            assessments: [],
            course: '',
            file_url: '',
            file_type: '',
            enable_add_assessment: false
           
        };
    }

    componentDidMount() {
        $(document).ready(function () {
            $("#reset").click(function () {
                $("#input_File").siblings(".custom-file-label").addClass("selected").html('');
            });
        });

        axios.get(global.APIUrl+'/assessments/course/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    assessments: response.data.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(global.APIUrl+'/lesson/get/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    course: response.data.Lesson,
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    // componentDidUpdate() {
    //     axios.get(BASE_URL + 'assessments/course/' + this.props.match.params.id)
    //         .then(response => {
    //             this.setState({
    //                 assessments: response.data.data,
    //             });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }


    onClickAssignment = () => {
        this.setState({
            enable_add_assessment: true
        });
    };

    onClickDisable = () => {
        this.setState({
            enable_add_assessment: false
        });
    };

    deleteMaterial = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'

        }).then((result) => {
            if (result.value) {
                let assessments = this.state.assessments.find((assessment) => {
                    return assessment._id === id
                });

                let deleteFile = {
                    file_url: assessments.file_url
                };
                axios.delete(global.APIUrl+'/assessments/' + id)
                    .then(() => {
                        axios.post(global.APIUrl+'/assessments/delete-file', deleteFile)
                        window.location.reload();     
                        
                    })
            }
        })

    };

    addComponentLoader() {
        if (this.state.enable_add_assessment === true) {
            return <AddAssessment course={this.state.course}/>
        }
    };

    assignmentListView() {
        return (
            <div>
                <div className="card mt-2" id="myTable">
                    <div className="card-header">
                        <b>Assignments</b>
                    </div>
                    <ul className="list-group list-group-flush ">
                        {
                            this.state.assessments.map((assignment, i) => {
                                return <LinkView deleteMaterial={this.deleteMaterial} assessment={assignment} key={i}/>;
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <TeacherNavbar/>
                <div className="container mt-3">
                    <h2>Course : {this.state.course.l_name}</h2><br/>
                    <div className="nav  nav-fill">
                        <div className="nav-item mx-2">
                            <label className="nav-link btn-dark" onClick={this.onClickAssignment}>
                                <b>Create New Assessment</b>
                            </label>
                        </div>
                        <div className="nav-item mx-2">
                            <label className="nav-link btn-primary" onClick={this.onClickDisable}>
                                <b>View Assignments</b>
                            </label>
                        </div>
                    </div>
                    {this.addComponentLoader()}
                    {this.assignmentListView()}
                    <br/>
                </div>
            </div>
        );
    }
};

export default ViewCourseAssessments;