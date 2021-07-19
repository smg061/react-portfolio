import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import { Card, Col, Container, Jumbotron, Row } from "react-bootstrap";

const projects = [
   {
      title: "",
      description: "",
      image: "",
      githubLink: "",
      deployedLink: "",
   },
   {
      title: "",
      description: "",
      image: "",
      githubLink: "",
      deployedLink: "",
   },
   {
      title: "",
      description: "",
      image: "",
      githubLink: "",
      deployedLink: "",
   },
];

const ProjectSection: React.FC = () => {
   return (
      <Container>
         <Jumbotron>
            <h1>
               <strong>My projects</strong>
            </h1>
            <h4>See something interesting? </h4>
         </Jumbotron>
         <Row>
            <Col lg={true}>
               <ProjectItem
                  projectTitle="MEh"
                  projectDescription=""
                  image=""
               ></ProjectItem>
            </Col>
            <Col lg={true}>
               <ProjectItem
                  projectTitle="MEh"
                  projectDescription=""
                  image=""
               ></ProjectItem>
            </Col>
         </Row>
      </Container>
   );
};

export default ProjectSection;
