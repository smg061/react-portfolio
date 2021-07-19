import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavigationBar from "./components/Navbar/NavigationBar";
import HeroSection from "./components/HeroSection/HeroSection";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import SkillsSection from "./components/SkillsSection/SkillsSection";

function App() {
   return (
      <div className="App">
         <Container fluid="md">
            <NavigationBar />
            <HeroSection title={"henlo"} />
            <ProfileSection />
         </Container>
         <SkillsSection/>
         <ProjectSection />
         <Footer/>
      </div>
   );
}

export default App;
