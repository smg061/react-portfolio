import React from "react";
import { Container, Col, Row, Card, Jumbotron } from "react-bootstrap";
import "./SkillsSection.scss";

const SkillsSection = () => {
  return (
    <Container className="skillsSection">
      <Jumbotron>
        <h1>
          <strong>Skills</strong>
        </h1>
        <h4>See something interesting? </h4>
      </Jumbotron>
      <Row>
        <Col>
          <Card>
            <Card.Header> Front End Development</Card.Header>     
         </Card>
        </Col>
        <Col>
          <Card>henlo</Card>
        </Col>
        <Col>
          <Card>henlo</Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsSection;
