import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CoreContent from '../components/CoreContent';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CoreContent />
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;