import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import $ from 'jquery';

import '../APIUrl'
import Header from './header'

class LecturerRequest extends Component{
    
        constructor(props) {
            super(props);
    
            this.state = {
                username: '',
                qualification:'',
                experience:'',
                course:'',
                file_name: '',
                file_url: '',
                file_ext: '',
                file: ''
            };
        }
    
        componentDidMount() {
            $(".custom-file-input").on("change", function () {
                let fileName = $(this).val().split("\\").pop();
                $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
            });
        }
    
        fileUploadHandler = (e) => {
            this.setState({
                file: e.target.files[0]
            })
        };
    
        onTypeFileHandler = (e) => {
            this.setState({
                [e.target.id]: e.target.value,
            })
        };
    
        handleAddSubmit = (e) => {
            e.preventDefault();
    
                const fd = new FormData();
                fd.append("file", this.state.file);
    
                if (this.state.file.size <= 10 * 1024 * 1024) {
                        axios.post(global.APIUrl+'/cv/upload-file', fd, {
                            onUploadProgress: progressEvent => {
                                console.log('Upload Progress : ' + Math.round((progressEvent.loaded / progressEvent.total) * 100));
                            }
                        })
                            .then(res => {
                                if (res.data.status !== 400) {
                                    let file = this.state.file.name.split(".");
                                    let fileName = file[0].charAt(0).toUpperCase() + file[0].slice(1);
                                    let extension = file[1];
    
                                    const newFile = {
                                        file_name: fileName,
                                        username: this.state.username,
                                        file_url: res.data.file_url,
                                        file_ext: extension,
                                        qualification: this.state.qualification,
                                        experience: this.state.experience,
                                        course:this.state.course
                                    };
    
                                    axios.post(global.APIUrl+'/cv/', newFile)	
                                        .then(res => {
                                            
                                            Swal.fire('File Added Successfully', '', 'success');
                                            this.props.history.push('/')   
                                        })
                                        .catch(err => {
                                            Swal.fire('Oops...', 'File Upload Failed', 'error');
                                            console.log(err.message)
                                        });
                                    }     
                                });
                            }       
                        }
        render() {
            return (
                <div>
                <Header/>
                <div className="container">
                    <div className="card mt-5">
                        <form id="form"  className="m-3" onSubmit={this.handleAddSubmit}>
                            <div className="text-center card-header  ">
                                <h5>Request to Become a Teacher</h5>
                            </div>
                            <div className="row form-group">
                                <div className="col-lg-6 col-md-6 form-group">
                                    <label className="alert-link ml-1">User Name</label>
                                    <div className="ml-auto">
                                        <input type="text" className="form-control"
                                            onChange={this.onTypeFileHandler}
                                            id="username"
                                            placeholder="User Name"
                                            required/>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 form-group">
                                    <label className="alert-link ml-1">Select Course</label>
                                        <select id="course" className="form-control" onChange={this.onTypeFileHandler}>
                                            <option selected>Choose Course</option>
                                            <option>Angular</option>
                                            <option>Node JS</option>
                                            <option>React</option>
                                            <option>MongoDB</option>
                                        </select>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-lg-6 col-md-6 form-group">
                                    <label className="alert-link ml-1">Qualification:</label>
                                    <div className="ml-auto">
                                        <textarea
                                            className="form-control"
                                            id="qualification"
                                            rows="1"
                                            placeholder="Qualification"
                                            onChange={this.onTypeFileHandler}
                                            />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 form-group">
                                    <label className="alert-link ml-1">Experience:</label>
                                    <div className="ml-auto">
                                    <textarea
                                            className="form-control"
                                            id="experience"
                                            rows="1"
                                            placeholder="Experience"
                                            onChange={this.onTypeFileHandler}
                                            />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mx-sm-2 ml-2 mr-2">
                                <label className="alert-link ml-1">Upload Document:
                                    <small> (Max:10MB)</small>
                                </label>
                                <div className="custom-file">
                                    <input type="file"
                                        className="custom-file-input"
                                        onChange={this.fileUploadHandler}
                                        id="input_File"
                                        required/>
                                    <label className="custom-file-label form-control">Choose file</label>
                                </div>
                            </div>
                            <div className="col text-center mb-3">
                                <button id="add_material" className="btn btn-primary">
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            );
        }
    }


export default LecturerRequest;