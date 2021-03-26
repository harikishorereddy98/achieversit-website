import React, { Component } from 'react';
class Footer extends Component{
    render(){
        return(
            <div>
        <div className="container-fluid footerbanner py-5 pl-5 pr-5 ">

<div className="row">
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 text-secondary">
        <img src="./images/AIT-white.jpg" alt="aitlogo" width="280px" height="84px"/>
        <p>AchieversIT - provides a wide group of opportunities
            for freshers and Experienced candidate who can develop their skills and build their career
            opportunities across multiple Companies.</p>
    </div>
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 text-muted py-3 px-5">
        <h5><b>COMPANY</b></h5>
        <ul className="list-unstyled py-3 ">
            <li className=" col-lg-1 p-1 listgroup-item  ">
                <a href="#" className="text-white text-decoration-none ">Home</a>
            </li>
            <li className=" col-lg-1 p-1">
                <a href="#" className="text-white text-decoration-none ">Placements</a>
            </li>
            <li className=" col-lg-1 p-1">
                <a href="#" className="text-white text-decoration-none ">Corporate Training</a>
            </li>
            <li className=" col-lg-1 p-1">
                <a href="#" className="text-white text-decoration-none ">CONTACT US</a>
            </li>
        </ul>
    </div>
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 text-secondary py-3 px-3">
        <h5><b>TRENDING COURSES</b></h5>
        <div className="footer-list text-white py-3">
            <p>UI Development Course</p>
            <p>Angular JS Course</p>
            <p>React JS Course</p>
            <p>Digital Marketing Course</p>
            <p>Python Course</p>
        </div>
    </div>
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 text-secondary py-3 px-3">
        <h5><b>CONTACT INFO</b></h5>
        
        <ul className="list  ">
            <li>
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-2 text-white">
                        <i className="fa fa-map" aria-hidden="true"></i>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-10 text-white">
                        <p>#272, 6th Main, Next to Preksha Montessori , 1st Floor, BTM 2nd
                            Stage,Bangalore,
                            India - 560076
                    </p>
                    </div>
                </div>
            </li>
            <li>
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-2 text-white">
                        <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-10 text-white">
                        <p>India : +918431-040-457</p>

                    </div>
                </div>
            </li>
            <li>
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6  col-xl-2 text-white">
                        <i className="fa fa-envelope-open" aria-hidden="true"></i>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-10 text-white">
                        <p>info@achieversit.com</p>

                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div className="container text-white">
        <hr/>
    </div>

    <div className="container social-links d-flex    px-5">
        <i className="fa fa-facebook circle-icon facebook fa-2x p-2 h-2 text-center" aria-hidden="true"></i>
        <i className="fa fa-linkedin circle-icon linkedin fa-2x text-center" aria-hidden="true"></i>
        <i className="fa fa-twitter circle-icon  twitter fa-2x text-center" aria-hidden="true"></i>
        <i className="fa fa-pinterest circle-icon  pintrest fa-2x text-center" aria-hidden="true"></i>
        <i className="fa fa-youtube-play circle-icon youtube fa-2x text-center" aria-hidden="true"></i>
    </div>
    <div className="container px-5">
        <div className="row">
            <div className="col-lg-3 col-xl-6 text-white">
                <p>Copyright © 2020 AchieversIT. All Rights Reserved</p>
            </div>
            <div className="col-lg-3 col-xl-2 text-white">
                <p>Privacy Policy</p>
            </div>
            <div className="col-lg-3 col-xl-2 text-white">
                <p>Terms of use</p>
            </div>
            <div className="col-lg-3 col-xl-2 text-white">
                <p>Refund Policy</p>
            </div>
        </div>
    </div>
</div>
</div>
</div>
            
        )
    }
}
export default Footer;