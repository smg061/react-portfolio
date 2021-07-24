import React from "react";
import { Container, Row } from "react-bootstrap";
import "./ServicesSection.scss";

const ServicesSection: React.FC= () => {
   return (
      <Container fluid id="services" className="services">
         <div id="skills" className="container">
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
                        <i className="fa fa-mobile fa-3x" id="phone-icon"></i>
                     </div>
                  </div>
                  <div className="col-xs-8 wthree_about_right_grid_right">
                     <h4>Web Design</h4>
                     <p>
                        Responsive, mobile-first design with HTML5, CSS, SCSS, Bootstrap
                        and Semantic-UI
                     </p>
                  </div>
                  <div className="clearfix"> </div>
               </div>
               <div className="col-md-6 wthree_about_right_grid">
                  <div className="col-xs-4 wthree_about_right_grid_left">
                     <div className="hvr-rectangle-in">
                        <i className="fa fa-html5 fa-2x"></i>
                     </div>
                  </div>
                  <div className="col-xs-8 wthree_about_right_grid_right">
                     <h4>Front End Development</h4>
                     <p>
                        {" "}
                        Modern UI and Front end scripting with Javascript, Typescript, and
                        React.
                     </p>
                  </div>
                  <div className="clearfix"> </div>
               </div>
               <div className="col-md-6 wthree_about_right_grid">
                  <div className="col-xs-4 wthree_about_right_grid_left">
                     <div className="hvr-rectangle-in">
                        <i className="fa fa-server fa-2x"></i>
                     </div>
                  </div>
                  <div className="col-xs-8 wthree_about_right_grid_right">
                     <h4>Back End development</h4>
                     <p>
                        Robust, scalable back end solutions with Node.js, Express.js, C#,
                        .NET, and ASP.NET Web API
                     </p>
                  </div>
                  <div className="clearfix"> </div>
               </div>
               <div className="col-md-6 wthree_about_right_grid">
                  <div className="col-xs-4 wthree_about_right_grid_left">
                     <div className="hvr-rectangle-in">
                        <i className="fa fa-database fa-2x"></i>
                     </div>
                  </div>
                  <div className="col-xs-8 wthree_about_right_grid_right">
                     <h4>Database Design</h4>
                     <p>Using MySQL and MongoDB</p>
                  </div>
                  <div className="clearfix"> </div>
               </div>
               <div className="clearfix"> </div>
            </Row>
         </div>
      </Container>
   );
};



export default ServicesSection;
