import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react'
import HeroSection from './components/Hero/HeroSection'
import Navbar from './components/Navbar/Navbar'
import RecentNews from './components/MiddleSection/RecentNews'
import Events from './components/MiddleSection/Event'
import SuccessStories from './components/MiddleSection/SuccessStories'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
      <HeroSection/>
      <Events/>
      <RecentNews/>
      <SuccessStories/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
