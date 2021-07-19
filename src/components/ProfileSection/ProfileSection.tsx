import React from "react";
import { Container, Jumbotron, Image as Img } from "react-bootstrap";

const styles = {
  h1: {
    fontSize: "4rem",
  },
};
const ProfileSection: React.FC = () => {
  return (
    <div style={{ padding: "auto" }}>
      <Container fluid>
        <Img src="/images/home.jpg" roundedCircle fluid></Img>
        <Jumbotron as="h1" style={styles.h1} fluid>
          Santos Gonzalez, Web Designer
        </Jumbotron>
      </Container>
    </div>
  );
};

export default ProfileSection;
