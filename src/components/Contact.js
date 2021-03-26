import React, { Component } from 'react';
class Contact extends Component{
    render(){
        return(
            <div>
 <div id="contact" className="p-5 m-5 mw-750 bg-white border border-dark modal fade" tabindex="-1" role="dialog"
            aria-labelledby="contactlabel" aria-hidden="true">
            <form>
                <h5>Contact Us</h5>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control from-control-lg" name="Name" placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                    <label for="email">E-Mail</label>
                    <input type="email" className="form-control from-control-lg" name="E-Mail"
                        placeholder="Enter your E-Mail"/>
                </div>
                <div className="form-group">
                    <label for="Contact number">Contact number</label>
                    <input type="tel" className="form-control from-control-lg" name="contact"
                        placeholder="Enter your Number"/>
                </div>
                <div className="form-group">
                    <label for="Message">Name</label>
                    <input type="text" className="form-control from-control-lg" name="Message"
                        placeholder="Type your message here"/>
                </div>
                <img src="./images/captcha.gif" alt="captcha" width="100px"/>
                <i className="fa fa-refresh text-primary  " aria-hidden="true"><a href="#"></a></i>
                <div className="form-group">
                    <input type="text" className="form-control from-control-lg" name="captcha" placeholder="Enter captcha"/>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit"/>
            </form>
        </div>
        <button type="button" className="btn btn-orangered btn-lg  btn-fixed p-1" data-toggle="modal"
            data-target="#contact">CONTACT US</button>
        <button type="button" className="btn1 btn1-orangered btn-sm  btn1-fixed p-1"/><a href="./ait_using_bs.html"><i
                    className="fa fa-caret-up" aria-hidden="true"></i></a> </div>
                    

        )
    }
}
export default Contact;