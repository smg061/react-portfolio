import React from "react";
import { Row, Col, Container, Jumbotron, Image as Img, Button, Form } from "react-bootstrap";
import "./ProfileSection.scss";

const styles = {
  h1: {
    fontSize: "4rem",
  },
};

interface Props {

}
const ProfileSection_test: React.FC = () => {
  return (
    <Container fluid className="profileSection">
      <Jumbotron
        fluid
        as="h1"
        style={{
          fontSize: "4rem",
          backgroundImage:
            " linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url(/images/test.jpg)",
        }}
      >
        Santos Gonzalez, Full-Stack Developer
        <Row className="justify-content-md-center">
          <Col className="portrait" lg={{ span: 4 }} md={10}>
            <Img rounded src="/images/portrait.jpg"></Img>
          </Col>
          <Col lg={{ span: 8 }} className="biographyCol">
            <h2> <strong>A little bit about me...</strong></h2>
            <p>
              Aspiring Full-Stack software Developer with a background in Microbiology and Genetics. 
              Clear understanding of Front and Back End Development using Node.js,
              Express.js, React, .Net MySQL, and MongoDB databases. Excellent at self-teaching and motivated
              to learn, grow, and excel in tech industry. 
            </p>
            <a className="button" download="santos_gonzalez_resume.docx" href="/gonzalez_resume_updated.docx"> Get my resume</a>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
};

export default ProfileSection_test;
