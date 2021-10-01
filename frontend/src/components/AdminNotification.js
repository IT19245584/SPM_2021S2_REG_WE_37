import React, {Component} from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import './APIUrl';

import Navbar from "./adminNav";
class AdminNotifications extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notifications: []
        }
    }

    componentDidMount() {
        axios.get(global.APIUrl+'/cv/')
            .then(response => {
                this.setState({
                    notifications: response.data.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidUpdate() {
        axios.get(global.APIUrl+'/cv/')
            .then(response => {
                this.setState({
                    notifications: response.data.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onClickDeclineHandler = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Decline it!',
            cancelButtonText: 'Cancel'

        }).then((result) => {
            if (result.value) {

                axios.delete(global.APIUrl+'/cv/'+ id)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire(
                            'Done',
                            'User Successfully Rejected!',
                            'warning'
                            )
                    this.props.history.push('/Admin') 
                    })
                    .catch(err => console.log(err.message));
                    
            }
        });

    };

    onClickAcceptHandler = (notificationId) => {

    //    axios.put('http://localhost:4000/admin/notifications/' + notificationId, {
    //         status: true
    //     }).then(res => {
    //          console.log(res.data);
    //          Swal.fire(
    //             'Done',
    //             'Conference Successfully Published!',
    //             'success'
    //             )
    //          this.props.history.push('/conference/view')     
    //     }).catch(err => console.log(err.message));

            Swal.fire(
                    'Done',
                    'User Successfully Accepted!',
                    'success'
                    )
                 this.props.history.push('/Admin') 
             };

    render() {
        return (
            <div class="dashboard-main-wrapper">
            <Navbar/>
            <div class="dashboard-wrapper">
                <h3 className="text-center pt-3 mb-2">Notifications Of Users</h3>
                {
                    this.state.notifications.map((notification, i) => {
                            return (
                                <div className="container">
                                    <div className="alert alert-secondary" style={{marginTop:'20px'}} key={i}>
                                        <label className="mt-1">Do you like to assign {notification.username} as lecturer for {notification.course} module?</label>
                                        <br/>
                                        <a id="assigned_doc"href={global.APIUrl+'/'+notification.file_url}download>
                                            {notification.file_name + '.' + notification.file_ext}
                                        </a>
                                        <input type="button" value="Decline"
                                            onClick={() => this.onClickDeclineHandler(notification._id)}
                                            className="float-right btn btn-danger"/>
                                        <input type="button" value="Accept"
                                            onClick={() => this.onClickAcceptHandler(notification._id)}
                                            className="float-right btn btn-secondary mr-3"/>
                                    </div>
                                </div>
                            );
                    })
                }
                </div>
            </div>
        );
    }
}

export default AdminNotifications;