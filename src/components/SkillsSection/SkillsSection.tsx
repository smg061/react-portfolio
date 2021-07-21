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
        <h4>What can I do for you? </h4>
      </Jumbotron>
      <Container>
        <Row xs={6}>
          <Col xs={6} lg={6} sm={6}>
            <Card className="skillCard">
              <Card.Body>
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="fa fa-pencil"></i>
                  </div>
                  <div className="media-body text-right">
                    <h3>Front End Development</h3>
                    <span>HTML, CSS, Javascript, Typescript, React</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} lg={6} sm={6}>
            <Card className="skillCard">
              <Card.Body>
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="fa fa-pencil"></i>
                  </div>
                  <div className="media-body text-right">
                    <h3>Back End Development</h3>
                    <span>Node.js, Express.js, C#, .NET, ASP.NET Web API</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SkillsSection;
