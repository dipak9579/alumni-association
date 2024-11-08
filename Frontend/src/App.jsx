// src/App.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/Hero/HeroSection';
import Navbar from './components/Navbar/Navbar';
import RecentNews from './components/MiddleSection/RecentNews';
import Events from './components/MiddleSection/Event';
import SuccessStories from './components/MiddleSection/SuccessStories';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Register from './components/UserSignUp/Register';


const HomePage = () => {

  
  return (
    <>
    <HeroSection/>
    <RecentNews/>
    <Events/>
    <SuccessStories/>
    <Gallery/>
    <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register/>}/>
       
      </Routes>
    
    </Router>
  );
};

export default App;
