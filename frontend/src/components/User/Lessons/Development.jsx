import React from "react";
import img5 from "./Images/img5.jpg";
import Header from "../header";

function HomePage() {
  return (
    <div>
        <Header/>
   <div className="container" style={{ marginTop: '5%' }}>
                <div className="text-center container">
                    <div className="row ps-5">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-10 ">                          
                            <span className=" h2 text-dark text-uppercase" style={{ textDecoration: 'none' }}>Music Theory: Musical Form</span>
                            <h5 className="fw-normal " style={{ paddingTop: '10%' }}>This free online music theory course teaches you about musical form. In this course you will study the six models in classical music from sonata-allegro to rondo form and how each model was formed including their differences. You will also look into the features of verse and chorus and the four functional types that will show up in a sonata-allegro form, how the same material can return at certain points in a musical piece, and more!
                            <br />
                            </h5><br/><br/>
                            <div id="carouselExampleIndicators" class="carousel slide sld1 " data-ride="carousel">
                                <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                </ol>
                                <div class="carousel-inner ">
                                <div class="carousel-item active">
                                <img class="d-block w-100" style={{height:'50%'}} src="./img/Online-Music-Learning-Tutorial-2.png" alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" style={{height:'20%'}} src="./img/Music-Courses.jpg" alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" style={{height:'20%'}} src="./img/muc.jpg" alt="Third slide" />
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" style={{height:'20%'}} src="./img/Online-Music-Learning-Tutorial-2.png" alt="fourth slide" />
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" style={{height:'20%'}} src={img5}alt="fourth slide" />
                            </div>
                </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
            </div><br/>
                <h6>
                This course will first introduce you to the six models in classical music which are the ternary form, sonata-allegro form, theme and variations, rondo, fugue, and ostinato. You will learn how they were developed at various times in the history of music. You will learn that theme and variations are the most established forms, and that sonata-allegro is more recent but is the most complex and the most difficult of all of these forms.<br/><br/></h6>
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

export default HomePage;


