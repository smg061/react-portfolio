import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import "./ServicesSection.scss";

const ServicesSection: React.FC= () => {
   return (
      <Container fluid id="services" className="services">
         <div className="container">
            <div className="service-head one text-center ">
               <h4>What can I do for you?</h4>
               <h3>
                 <strong>My Skills</strong>
               </h3>
               <span className="border two"></span>
            </div>
            <Row className="wthree_about_right_grids w3l-agile">
               <div className="col-md-6 wthree_about_right_grid">
                  <div className="col-xs-4 wthree_about_right_grid_left">
                     <div className="hvr-rectangle-in">
                        <i className="glyphicon glyphicon-pencil"></i>
                     </div>
                  </div>
                  <div className="col-xs-8 wthree_about_right_grid_right">
                     <h4>Web Design</h4>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim.
                     </p>
                  </div>
                  <div className="clearfix"> </div>
               </div>
               <div className="col-md-6 wthree_about_right_grid">
                  <div className="col-xs-4 wthree_about_right_grid_left">
                     <div className="hvr-rectangle-in">
                        <i className="fa fa-gear fa-2x"></i>
                     </div>
                  </div>
                  <div className="col-xs-8 wthree_about_right_grid_right">
                     <h4>Web Design</h4>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim.
                     </p>
                  </div>
                  <div className="clearfix"> </div>
               </div>
               <div className="col-md-6 wthree_about_right_grid">
                  <div className="col-xs-4 wthree_about_right_grid_left">
                     <div className="hvr-rectangle-in">
                        <i className="glyphicon glyphicon-leaf"></i>
                     </div>
                  </div>
                  <div className="col-xs-8 wthree_about_right_grid_right">
                     <h4>Web Design</h4>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim.
                     </p>
                  </div>
                  <div className="clearfix"> </div>
               </div>
               <div className="col-md-6 wthree_about_right_grid">
                  <div className="col-xs-4 wthree_about_right_grid_left">
                     <div className="hvr-rectangle-in">
                        <i className="glyphicon glyphicon-gift"></i>
                     </div>
                  </div>
                  <div className="col-xs-8 wthree_about_right_grid_right">
                     <h4>Web Design</h4>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim.
                     </p>
                  </div>
                  <div className="clearfix"> </div>
               </div>
               <div className="clearfix"> </div>
            </Row>
         </div>
      </Container >
   );
};



export default ServicesSection;
