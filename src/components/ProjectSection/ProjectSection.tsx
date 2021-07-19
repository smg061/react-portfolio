import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import { Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
import "./ProjectSection.scss";

const projects = [
  {
    title: "The TechBlog",
    description: "Share your opinions about the latest tech",
    image: "",
    githubLink: "",
    deployedLink: "",
    technologies: ["Javascript", "Express.js", "SQL", "Node.js"],
  },
  {
    title: "The Plug Select",
    description: "Bid for premium goods",
    image: "",
    githubLink: "",
    deployedLink: "",
    technologies: ["Python", "SQL", "Node.js"],
  },
  {
    title: "Fitness Tracker",
    description: "",
    image: "",
    githubLink: "",
    deployedLink: "",
    technologies: ["Python", "SQL", "Node.js"],
  },
  {
    title: "Budget Tracker",
    description: "",
    image: "",
    githubLink: "",
    deployedLink: "",
    technologies: ["Python", "SQL", "Node.js"],
  },
];

const ProjectSection: React.FC = () => {
  return (
    <Container className="projectSection">
      <Jumbotron>
        <h1>
          <strong>My projects</strong>
        </h1>
        <h4>See something interesting? </h4>
      </Jumbotron>
      <Row>
        {projects.map((project) => (
          <Col lg={6}>
            <ProjectItem
              key={project.title}
              projectTitle={project.title}
              projectDescription={project.description}
              image={project.image}
              technologies={project.technologies}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectSection;
