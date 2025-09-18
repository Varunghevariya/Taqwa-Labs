import React, { useState, useEffect } from 'react';
import { ChevronUp, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';
import { Hero } from './components/Hero';
import { Features } from './components/Features'; // New import
import { OurMission } from './components/OurMission'; // New import
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Team } from './components/Team';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials'; // New import
import { GetInTouch } from './components/GetInTouch';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#373643] text-white">
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Features /> {/* New component */}
        <Services />
        <Pricing />
        <Portfolio />
        <Testimonials /> {/* New component */}
        <About />
        <OurMission />
        <Team />
        <GetInTouch />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#18cb96] hover:bg-[#15b085] text-white rounded-full p-3 shadow-lg"
          size="icon"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
      )}

      <Toaster position="top-center" />
    </div>
  );
}