import React from "react";
import Header from "../header";
import img4 from "./Images/img4.png";



function Businness() {

    // function show(id, topic, university, purpose, team_leader, email, phone, document, description){
    //     reactLocalStorage.setObject("Reviewer_ResearchPaper_Show", [id, topic, university, purpose, team_leader, email, phone, document, description]);
    //     window.location.href = "/show"
    // }
    
  return (
    <div>
     <Header/>
   
   <div className="container" style={{ marginTop: '5%' }}>
                <div className="text-center container">
                    <div className="row ps-5">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-10 ">                          
                            <span className=" h2 text-dark text-uppercase" style={{ textDecoration: 'none' }}>What business courses are available online?</span>
                            <h5 className="fw-normal " style={{ paddingTop: '5%' }}>
                            Looking into studying a business course? With qualifications in a plethora of specialised fields, we've got the details on which courses are available, what topics you can expect to be covered and the career opportunities that may come knocking at your door. <b>Let us discuss in details.</b><br />
                            </h5><br/>
                         
                           
                        <h6>
                        Discover a full suite of online business courses that will allow you to make better business decisions and succeed in today's competitive business world. Our courses provide a rich learning experience that will allow you to develop critical business skills in areas such as management and leadership, entrepreneurship, occupational health and safety, quality management systems, conflict management, customer service, risk assessment, human resources, workplace safety, operations management and more!

 

There are many reasons why you may choose to take a business course. It might give you the chance to progress your career to the next level or it might be an exciting first step towards exploring a new path. Whatever the reason, professionals from all areas of business, from entrepreneurship to management, can benefit from one of our free online business courses. In addition, you have the benefit of taking the programme from the comfort of your own home whilst learning at a pace that suits your lifestyle. 

 

Whether you want to kick-start your career and gain the essential business skills employers are looking for or upgrade your business skills and supplement your existing qualifications, our business course offerings will take you a step in the right direction<br/><br/>
                        Course length: Between 10 months and 1.25 years.<br/>
                        Subjects covered: Financial markets and economic principles, regulations ethic and risk management, financial analysis and valuation.

                        Career prospects:Technical specialist in corporate finance, financial risk management and investment analysis.<br/><br/></h6>
                        <h5>
                            Our catalog includes a variety of learning topics such as<br/>
                                        •  Marketing<br/>

                                        •  General Management<br/>

                                        •  Business Ethics<br/>

                                        •  Finance & Accounting<br/>

                                        •  Strategy<br/>

                                        •  Operations Management<br/>

                                        •  Organizational Behavior<br/><br/>
</h5>
                        </div>
                        <div className="col-sm-1 "></div>
                    </div>
                   
                </div>
            </div>
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                <div style={{ height: '300px' }}>
                    <div className="row row-cols-1 row-cols-md-3 g-4" className="text-center container">
                        <div className="col">
                            <div >
                                <div className="card-body">
                                <a href='/examregistration'><button type="button" class="btn btn-danger btn-lg"><h5 className="card-title" style={{ display: 'flex', color:'white',justifyContent: 'center', alignItems: 'center' }}>Enroll for Examination</h5></button></a>
                                    
                                </div>
                            </div>
                        </div>                      
                    </div>
                    <br/>
                    <div className="text-center container">
                    <a href='/moreInfo'><button type="button" className="btn btn-dark  btn-sm" style={{ letterSpacing: '2px' }}>More Info <i className="bi bi-arrow-right-circle-fill"></i></button></a>
                        </div>
                </div>
            </div>
   </div>
 

  );
}

export default Businness;


