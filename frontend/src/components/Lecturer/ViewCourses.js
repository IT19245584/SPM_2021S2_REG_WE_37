import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import TeacherNavbar from './TeacherNavbar'

class ViewCourses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios
          .get(global.APIUrl+'/lesson/view-all')
          .then((response) => {
            this.setState({
                courses: response.data,
            })
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      
      render() {
        return (
            <div>
                <TeacherNavbar/>
                <div className="container mt-3">
                    <div className="list-group">
                        <h3 className='mt-2 mb-3'>Lessons</h3>
                        {
                            this.state.courses.map((course, i) => {
                                return (
                                    <div>
                                        <div className="card" key={i}>
                                            <div className="card-body">
                                                <Link to={"/lecturer/courses/" + course._id}
                                                    className="list-group-item list-group-item-action bg-light">
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <h5 className="mb-1">{course.l_name}</h5>
                                                    </div>
                                                    <small className="text-muted"> {course.l_description}</small>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default ViewCourses;