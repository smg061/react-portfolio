import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import { Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
import "./ProjectSection.scss";

const projects = [
  {
    title: "The TechBlog",
    description: "Share your opinions about the latest tech",
    image: "https://res.cloudinary.com/theplugselect/image/upload/v1626907789/Screenshot_2021-07-21_at_17-48-09_The_Techblog_homepage_bqnrcm.png",
    githubLink: "https://github.com/smg061/techblog",
    deployedLink: "",
    technologies: ["Javascript", "Express.js", "SQL", "Node.js"],
  },
  {
    title: "The Plug Select",
    description: "Bid for premium goods",
    image: "https://res.cloudinary.com/theplugselect/image/upload/v1626907789/Screenshot_2021-07-21_at_17-46-39_The_Plug_Select_jgk4po.png",
    githubLink: "",
    deployedLink: "",
    technologies: ["Python", "SQL", "Node.js"],
  },
  {
    title: "Fitness Tracker",
    description: "",
    image: "https://res.cloudinary.com/theplugselect/image/upload/v1626907789/Screenshot_2021-07-21_at_17-49-23_Fitness_Chart_eztgss.png",
    githubLink: "",
    deployedLink: "",
    technologies: ["Python", "SQL", "Node.js"],
  },
  {
    title: "Budget Tracker",
    description: "",
    image: "https://res.cloudinary.com/theplugselect/image/upload/v1626907789/Screenshot_2021-07-21_at_17-48-38_Budget_Tracker_fwvhmx.png",
    githubLink: "",
    deployedLink: "",
    technologies: ["Python", "SQL", "Node.js"],
  },
];

const ProjectSection: React.FC = () => {
  return (
    <Container className="projectSection">
       <br></br>
      <Jumbotron>
        <h1>
          <strong>My projects</strong>
        </h1>
        <h4>See something interesting? </h4>
        <hr></hr>
      </Jumbotron>
      <br></br>
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
