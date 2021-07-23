import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavigationBar from "./components/Navbar/NavigationBar";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProfileSection_test from "./components/ProfileSection/ProfileSection_test";
import ServicesSection from "./components/ServicesSection/ServicesSection";

function App() {
   return (
      <div className="App">
         <Container fluid="md">
            <NavigationBar />
            <HeroSection title={"henlo"} />
         </Container>

         <ProfileSection_test />
         <hr></hr>
         <ServicesSection/>
         <ProjectSection />
         <Footer />
      </div>
   );
}

export default App;
