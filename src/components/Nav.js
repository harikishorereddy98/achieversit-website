import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Nav extends Component{
    links = ["ui-developement","Angular","ReactJS","VUEJS","MEAN" ,"MERN","Digital Marketing","Phython","Ionic","React Native","web Dev"]
    render(){
        return(
            
            <div className="contanier-fluid nav  sticky-top">
            <ul className="nav    bg-white">
                <li className="nav-item  text-dark dropdown">
                    <a className="nav-link dropdown-toggler text-secondary tx" data-toggle="dropdown" href="#"><i
                            className="fa fa-bars fa-2x"></i>Courses</a>
                    <div className="dropdown-menu dropright m-1">
                        <a className="dropdown-item bg-warning p-4 text-center " href="#">Courses lists</a>
                        <a className=" dropdown-item  p-3" href="#">Front-End Courses</a>
                        <a className=" dropdown-item  p-3" href="#">Digital Markrting Courses</a>
                    </div>
                </li>
                {this.links.map((e)=>(
                    <div>
                        <Link to={e}>
                      <li className="nav-item d-none d-md-block"><a className="nav-link txt text-secondary" > {e} </a></li></Link>
                      </div>


                ))}
           </ul>

        </div>
        )
    }
}
export default Nav;