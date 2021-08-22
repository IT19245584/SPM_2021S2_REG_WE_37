import React, {Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {Link} from "react-router-dom";
import $ from "jquery";

import StudentNavbar from './StudentNavbar'
import '../APIUrl'


const LinkView = ({assessment}) => (
    <li className="list-group-item">
        <Link to={'/student/assessments/' + assessment._id}>
            <label className="d-inline">
                <label className="alert-link">{assessment.link_name}</label>
            </label>
        </Link>
    </li>
);

class CourseAssessment extends Component {

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
                Swal.fire('Oops...', 'Assessments Data Not Found', 'error');
                console.log(error);
            });

        axios.get(global.APIUrl+'/lesson/get/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    course: response.data.Lesson,
                });
            })
            .catch(function (error) {
                Swal.fire('Oops...', 'Course Data Not Found', 'error');
                console.log(error);
            });

    }

    assignmentListView() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <b>Assignments</b>
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            this.state.assessments.map((assignment, i) => {
                                    return <LinkView  assessment={assignment} key={i}/>;
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
                <StudentNavbar/>
                <div className="container mt-3">
                    <h2>Course : {this.state.course.l_name}</h2>
                    {this.assignmentListView()}
                    <br/>
                </div>
            </div>
        );
    }
};

export default CourseAssessment;