import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import NavigationBar from './components/Navbar/NavigationBar';
import HeroSection from './components/HeroSection/HeroSection';
import ProfileSection from './components/ProfileSection/ProfileSection';
import ProjectItem from './components/ProjectItem/ProjectItem';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
      <NavigationBar/>
      <HeroSection title={"henlo"}/>
      <ProfileSection/>
      </Container>
      <Container>
        <ProjectItem/>
      </Container>
    </div>
  );
}

export default App;
