import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import NavigationBar from './components/Navbar/NavigationBar';
import HeroSection from './components/HeroSection/HeroSection';
import ProfileSection from './components/ProfileSection/ProfileSection';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <HeroSection title={"henlo"}/>
      <ProfileSection/>
    </div>
  );
}

export default App;
