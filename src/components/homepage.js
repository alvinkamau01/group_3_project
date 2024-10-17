import React from 'react';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import Listings from './Listings';
import AboutSection from './About';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <Listings />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default HomePage;