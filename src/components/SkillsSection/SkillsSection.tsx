import React from "react";
import { Container, Col, Row, Card, Jumbotron } from "react-bootstrap";
import "./SkillsSection.scss";

const SkillsSection = () => {
  return (
    <Container fluid className="skillsSection" id="skills">
      <Jumbotron>
        <h1>
          <strong>Skills</strong>
        </h1>
        <h4>What can I do for you? </h4>
        <hr></hr>
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
                    <h5>Responsive UI design with:</h5>
                    <span>HTML, CSS, SCSS, Javascript, Typescript, React</span>
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
                    <h5>Robust and scalable data delivery with:</h5>
                    <span>Node.js, Express.js, C#, .NET, ASP.NET Web API, MySQL, MongoDB</span>
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
