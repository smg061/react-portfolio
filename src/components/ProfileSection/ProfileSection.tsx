import React from "react";
import { Row, Col, Container, Jumbotron, Image as Img } from "react-bootstrap";
import "./ProfileSection.scss";

const styles = {
  h1: {
    fontSize: "4rem",
  },
};
const ProfileSection: React.FC = () => {
  return (
    <Container fluid className="profileSection">
      <Row>
        <Jumbotron
          fluid
          as="h1"
          style={{
            fontSize: "4rem",
            backgroundImage:
              " linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url(/images/test.jpg)",
          }}
        >
          Santos Gonzalez, Web Designer
          <Col>
            <Img rounded src="/images/home.jpg"></Img>
          </Col>
          <Col lg >
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </p>
          </Col>
        </Jumbotron>
      </Row>
    </Container>
  );
};

export default ProfileSection;
