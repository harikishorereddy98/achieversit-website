import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {
    render(){
        return(
        <div>   
            <nav className="container col-md-12 navbar navbar-expand-sm bg-dark navbar-light">
       <Link to="/"> <a className="container  navbar-brand ">
            <img src="https://www.achieversit.com/assets/images/AIT-white.jpg" alt="logo" width="167px" height="50px"/>
        </a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsiblenavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-10 col-sm-10 col-md-9 col-lg-5 col-xl-5 pl-5 collapse navbar-collapse justify-content-center  "
            id="collapsiblenavbar">
            <ul className="nav nav-pills row text-right ">
                <Link to="/Corporate"><li className="nav-item d-none d-md-block  "><a className="nav-link a1 text-white">Corporate
                        Training</a></li></Link>
                <Link to="/Training"><li className="nav-item d-none d-md-block "><a className="nav-link a1 text-white">Placements
                        Page</a></li></Link>
            </ul>

        </div>
    </nav>
    </div>
        )
    }
}
export default Header;