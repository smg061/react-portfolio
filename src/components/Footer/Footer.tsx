import React from "react";
import { Button, Col } from "react-bootstrap";
import "./Footer.scss";
const Footer = () => {
   return (
      <div id="contact">
         <div className="mt-5 pt-5 pb-5 footer">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-xs-12 contact-me">
                     <div>
                        <h3> Send me a message, let's work together</h3>
                        <form role="form">
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 id="user_name"
                                 placeholder="Enter your name"
                              ></input>
                           </div>
                           <div className="form-group">
                              <input
                                 type="email"
                                 className="form-control"
                                 id="your_email"
                                 placeholder="Enter your email"
                              ></input>
                           </div>
                           <div className="form-group">
                              <textarea
                                 name="InputMessage"
                                 id="user_message"
                                 className="form-control"
                                 placeholder="Enter your message"
                              ></textarea>
                           </div>
                           <Button type="submit" className="btn medium">
                              <i className="fa fa-envelope-o fa-xs"></i>
                              Send Email
                           </Button>
                        </form>
                     </div>
                  </div>
                  <Col lg={6} xs={12} className="location">
                     <h4 className="mt-lg-0 mt-sm-4">Let's get social</h4>
                     <p>Follow me at </p>
                     <a href="https://www.github.com/smg061">
                        <i className="fa fa-github fa-md "></i>
                     </a>
                     <a href="https://www.linkedin.com/in/santos-gonzalez-060a09186/">
                        <i className="fa fa-linkedin fa-md"></i>
                     </a>
                     <p>
                        <i className="fa fa-envelope-o mr-3"></i>max.go.95@gmail.com
                     </p>
                  </Col>
               </div>
               <div className="row mt-5">
                  <div className="col copyright">
                     <p className="">
                        <small className="text-white-50"></small>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
