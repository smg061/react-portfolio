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
        <Col>
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
        <Col>
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
      </Row>
    </Container>
  );
};

export default SkillsSection;
