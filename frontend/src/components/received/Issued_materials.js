
import React, { useState , useEffect } from 'react';
import { MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Navbar from "../adminNav";

function Issued_materials() {
    const [Buyer, setBuyer] = useState("");
    const [Session, setSession] = useState("");
    const [Style, setStyle] = useState("");
    const [GRN, setGRN] = useState("");
    const [Category, setCategory] = useState("");
    const [ItemType, setItemType] = useState("");
    const [ItemCategory, setItemCategory] = useState("");
    const [Color, setColor] = useState("");
    const [Description, setDescription] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [Date, setDate] = useState("");
    const [RollCount, setRollCount] = useState("");
    const [TotalQty, setTotalQty] = useState("");
    const [TotalRollsReceived, setTotalRollsReceived] = useState("");
    const [Remarks, setRemarks] = useState("");

    const [staticModal, setStaticModal] = useState(false);
    const toggleShow = () => setStaticModal(!staticModal);
    return(
    <div>
    <div class="dashboard-main-wrapper" >
        <Navbar/>
        <div className="dashboard-wrapper" style={{paddingBottom:'5%'}}>
            <div className="container" style={{paddingTop:'3%',paddingLeft:'2%', width:'98%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i className="fas fa-home"></i> Create - <span style={{color:'#424242'}}>Issued Materials</span></h4>
                <hr/>
                <br/>
                <div className="text-end mb-2">
                    <MDBBtn className='mx-2 fw-normal shadow-0' style={{letterSpacing:'1px',backgroundColor:'#4D4D4D'}} size='sm' data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                        Allocate Bin Location 
                    </MDBBtn>
                    <div class="modal fade bg-light" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header border-0 bg-dark">
                            <span class="modal-title text-warning" style={{fontWeight: '400',fontSize:'18px'}} id="staticBackdropLabel">Create - Issue Bin Allocation</span>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body m-2 text-left">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label mt-0 mb-0">Issued Total Qty-Rack</label>
                                <input type="text" class="form-control " />
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                        <div className="col">
                                            <label for="exampleFormControlInput1" class="form-label mt-0 mb-0">Allocated Racks</label>
                                            <select class="form-select" aria-label="Default select example" >
                                                <option selected></option>
                                                <option value="1">One</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label for="exampleFormControlInput1" class="form-label mt-0 mb-0">Allocated Bin</label>
                                            <select class="form-select" aria-label="Default select example" >
                                                <option selected></option>
                                                <option value="1">One</option>
                                            </select>
                                        </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="row ">
                                        <div className="col">
                                            <label for="exampleFormControlInput1" class="form-label mt-0 mb-0">Issued Batch No</label>
                                            <input type="text" class="form-control " />
                                        </div>
                                        <div className="col">
                                            <label for="exampleFormControlInput1" class="form-label mt-0 mb-0">Issued Quantity</label>
                                            <input type="text" class="form-control " />
                                        </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label mt-0 mb-0">Issued Rolls Count</label>
                                <input type="text" class="form-control " />
                            </div>
                        </div>
                        <div class="modal-footer border-0 mr-2 ml-2">
                            <button type="button" class="btn btn-outline-dark btn-sm" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-dark btn-sm">Save</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <MDBBtn className='mx-2 fw-normal shadow-0' style={{letterSpacing:'1px',backgroundColor:'#393939'}}  size='sm'>
                       View Allocate Bin Location 
                    </MDBBtn>
                </div>
                <div className="row bg-white p-4 shadow border-0 me-1 ms-1 rounded-2">
                <div className="col-sm-7 border border-1 border-light shadow-0 rounded-4" style={{backgroundColor:'#F4F4F4',border:'none'}}>
                  <div className="pr-3 pl-3" style={{backgroundColor:'transparent', border:'none'}} >
                    <h4 className="text-center text-decoration-underline mt-5 mb-4" style={{fontWeight:'100'}}>Adding Form</h4>
                    <div className="row pt-2 pb-2 " >
                        <div className="col">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label mb-0">Buyer</label>
                            <select class="form-select" aria-label="Default select example"  onChange={(e) =>{
                                setBuyer(e.target.value);
                            }}>
                              <option selected></option>
                              <option value="1">One</option>
                            </select>
                        </div>
                        </div>
                        <div className="col">
                         <div className="mb-2">
                            <label for="exampleFormControlInput1" className="form-label mb-0">Session</label>
                            <select className="form-select" aria-label="Default select example"  onChange={(e) =>{
                                setSession(e.target.value);
                            }}>
                              <option selected></option>
                              <option value="1">One</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row mt-4">
                        <div className="col">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label mb-0">Style / Item</label>
                                <select class="form-select" aria-label="Default select example"  onChange={(e) =>{
                                setStyle(e.target.value);
                            }}>
                                    <option selected></option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label mb-0">GRN</label>
                                <select class="form-select" aria-label="Default select example"  onChange={(e) =>{
                                    setGRN(e.target.value);
                                }}>
                                    <option selected></option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                       <div className="col">
                            <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label mb-0">Category</label>
                            <select class="form-select" aria-label="Default select example"  onChange={(e) =>{
                                    setCategory(e.target.value);
                            }}>
                                <option selected></option>
                                <option value="1">One</option>
                            </select>
                        </div>
                       </div>
                       <div className="col">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label mb-0">Item Type</label>
                                <select class="form-select" aria-label="Default select example" onChange={(e) =>{
                                    setItemType(e.target.value);
                                }}>
                                    <option selected></option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                       </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label mb-0">Item Category</label>
                            <select class="form-select" aria-label="Default select example"  onChange={(e) =>{
                                setItemCategory(e.target.value);
                            }}>
                                <option selected></option>
                                <option value="1">One</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label mb-0">Color</label>
                            <select class="form-select" aria-label="Default select example"  onChange={(e) =>{
                                setColor(e.target.value);
                            }}>
                                <option selected></option>
                                <option value="1">One</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label mb-0">Description</label>
                            <textarea className="form-control" rows="5"  onChange={(e) =>{
                                setDescription(e.target.value);
                            }}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label mb-0">Quantity</label>
                            <select class="form-select" aria-label="Default select example"  onChange={(e) =>{
                                setQuantity(e.target.value);
                            }}>
                                <option selected></option>
                                <option value="1">One</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label mb-0">Date</label>
                            <select class="form-select" aria-label="Default select example"  onChange={(e) =>{
                                setDate(e.target.value);
                            }}>
                                <option selected></option>
                                <option value="1">One</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label mb-0">Roll Count</label>
                            <select class="form-select" aria-label="Default select example"  onChange={(e) =>{
                                setRollCount(e.target.value);
                            }}>
                                <option selected></option>
                                <option value="1">One</option>
                            </select>
                        </div>
                    </div>
                    <hr/>
                    <div className="row pt-4">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label mb-0">Total Quantity Received</label>
                            <input type="number" className="form-control "  onChange={(e) =>{
                                setTotalQty(e.target.value);
                            }}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label mb-0">Total Rolls Received</label>
                            <input type="number" className="form-control "  onChange={(e) =>{
                                setTotalRollsReceived(e.target.value);
                            }}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label mb-0">Remarks</label>
                            <textarea className="form-control" rows="3"  onChange={(e) =>{
                                setRemarks(e.target.value);
                            }}></textarea>
                        </div>
                    </div>
                    <div className="text-end pb-4">
                        <MDBBtn className='mx-2 fw-normal' style={{letterSpacing:'1px'}} color='black' size='sm'>
                            Save <MDBIcon fas icon="save" />
                        </MDBBtn>
                        <MDBBtn className='mx-2 fw-normal' style={{letterSpacing:'1px'}} color='dark' size='sm'>
                            View <MDBIcon far icon="eye" />
                        </MDBBtn>
                        <MDBBtn className='mx-2 fw-normal' style={{letterSpacing:'1px',backgroundColor:'#263238'}}  size='sm'>
                            Reset <MDBIcon fas icon="redo" />
                        </MDBBtn>
                    </div>
                </div>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-4 border border-1 border-light shadow-0 rounded-4">
                   <div className="card border border-1 border-light shadow-0" style={{backgroundColor:'#F4F4F4'}}>
                   <div className="card-body">
                       <h4 className="text-center text-decoration-underline" style={{fontWeight:'100'}}>Receive Materials</h4>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Buyer</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{Buyer}</span></div>
                         </div>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Session</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{Session}</span></div>
                         </div>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Style / Item</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{Style}</span></div>
                         </div>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>GRN</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{GRN}</span></div>
                         </div>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Category</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{Category}</span></div>
                         </div>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Item Type</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{ItemType}</span></div>
                         </div>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Item Category</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{ItemCategory}</span></div>
                         </div>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Color</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{Color}</span></div>
                         </div>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Description</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{Description}</span></div>
                         </div>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Date</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{Date}</span></div>
                         </div>
                          <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Quantity</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{Quantity}</span></div>
                         </div>
                         <hr/>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Rolls Count</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{RollCount}</span></div>
                         </div>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Total Quantity Received</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{TotalQty}</span></div>
                         </div>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Total Rolls Received</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{TotalRollsReceived}</span></div>
                         </div>
                         <div className="row">
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>Remarks</span></div>
                            <div className="col-sm-6"><span style={{fontSize:'14px'}}>{Remarks}</span></div>
                         </div>
                   </div>
                   </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
};


export default Issued_materials;