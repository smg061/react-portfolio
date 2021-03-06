import React from "react";
import { Row, Col, Container, Jumbotron, Image as Img, Button } from "react-bootstrap";
import "./ProfileSection.scss";

import profilePic from "../../assets/images/portrait.jpg";

const styles = {
   h1: {
      fontSize: "4rem",
   },
};

const ProfileSection_test: React.FC = () => {
   return (
      <Container fluid id="about" className="profileSection">
         <Jumbotron
            fluid
            as="h1"
            style={{
               fontSize: "4rem",
               backgroundImage:
                  " linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url(https://smg061.github.io/react-portfolio/images/test.jpewwg)",
            }}
         >
            Santos Gonzalez, Full-Stack Developer
            <Row className="justify-content-md-center">
               <Col className="portrait" lg={{ span: 4 }} md={10}>
                  <Img rounded src={profilePic}></Img>
               </Col>
               <Col lg={{ span: 8 }} className="biographyCol">
                  <h2>
                     <strong>A little bit about me...</strong>
                  </h2>
                  <p>
                     Aspiring Full-Stack software Developer with a background in
                     Microbiology and Genetics. Clear understanding of Front and Back End
                     Development using Node.js, Express.js, React, and .Net. Motivated to
                     learn, grow, and excel in tech industry.
                  </p>
                  <Container id="social-and-resume">
                     <Col>
                        <Col sm className="social-links">
                           <h2>Follow me at: </h2>
                           <a href="https://www.github.com/smg061">
                              <i className="fa fa-github fa-2x "></i>
                           </a>
                           <a href="https://www.linkedin.com/in/santos-gonzalez-060a09186/">
                              <i className="fa fa-linkedin fa-2x"></i>
                           </a>
                        </Col>
                        <Col className="resume-btn">
                           <Button
                              as="a"
                              className="button"
                              download="santos_gonzalez_resume.docx"
                              href="https://smg061.github.io/react-portfolio/gonzalez_resume_updated.docx"
                           >
                              <strong>Get my resume</strong>
                           </Button>
                        </Col>
                     </Col>
                  </Container>
               </Col>
            </Row>
         </Jumbotron>
      </Container>
   );
};

export default ProfileSection_test;
