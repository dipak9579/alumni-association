
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
import Login from './components/UserSignUp/Login';
import {AuthProvider} from './components/context/AuthContext';
import ProtectedRoute from './components/context/ProtectedRoute';
import UserProfile from './components/Navbar/UserProfile';
import JobPost from './components/JobPost/JobPost';
import JobList from './components/JobPost/JobList';
import AboutUs from './components/Navbar/AboutUs';
import AdminDashboard from './pages/AdminDashboard';
import EventBooking from './components/MiddleSection/EventBooking';

const HomePage = () => {

  
  return (
    <>
    <HeroSection/>
    <RecentNews/>

    <SuccessStories/>
    <Gallery/>
    <Footer />
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<ProtectedRoute><UserProfile/></ProtectedRoute>}/>
        <Route path="/jobCreate" element={<JobPost/>}/>
        <Route path="/getJobs" element={<JobList/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/eventBook" element={<EventBooking/>}/>
        
        
       
      </Routes>
    
    </Router>
    </AuthProvider>
  );
};

export default App;
