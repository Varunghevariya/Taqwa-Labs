import React, { useRef, useEffect, useState } from 'react'; // Added useState
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import taqwaLogo from '../assets/30a4b8ce34c6451232d618f721ef5ffed16373f5.png';

export function Hero() {
  const scene3DRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false); // New state for animation

  useEffect(() => {
    setIsLoaded(true); // Trigger animations on mount

    const handleMouseMove = (e) => {
      if (!scene3DRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      scene3DRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/97455953483?text=Hi%20Taqwa%20Labs%2C%20I%20have%20a%20question%20about%20your%20web%20design%20services.', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#373643] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> {/* Animation */}
              {/* <img src={taqwaLogo} alt="Taqwa Labs" className="h-16 w-auto mx-auto lg:mx-0 mb-8" /> */}
            </div>
            
            <h1 className={`text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> {/* Animation */}
              We design & build websites that{' '}
              <span className="text-[#18cb96]">grow your business</span>
            </h1>
            
            <p className={`text-xl text-white/80 mb-8 leading-relaxed max-w-2xl transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> {/* Animation */}
              Custom websites, lightning-fast performance, and support that scales with you.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> {/* Animation */}
              <Button
                onClick={scrollToPricing}
                className="bg-[#18cb96] hover:bg-[#15b085] text-white px-8 py-3 text-lg group"
              >
                See Packages
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                onClick={openWhatsApp}
                className="border-[#18cb96] text-[#18cb96] hover:bg-[#18cb96] hover:text-white px-8 py-3 text-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk on WhatsApp
              </Button>
            </div>
          </div>

          {/* Right 3D Scene */}
          <div className="relative">
            <div
              ref={scene3DRef}
              className="transition-transform duration-100 ease-out"
            >
              {/* 3D Laptop Mockup */}
              <div className="relative mx-auto max-w-lg">
                <div className="bg-gradient-to-br from-[#4a4958] to-[#373643] rounded-lg p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-md aspect-video mb-4 flex items-center justify-center">
                    <div className="text-[#18cb96] text-2xl font-bold">
                      Taqwa Labs
                    </div>
                  </div>
                  <div className="h-4 bg-[#4a4958] rounded-full"></div>
                </div>
                
                {/* Floating Phone */}
                <div className="absolute -right-8 -bottom-8 bg-[#4a4958] rounded-[2rem] p-2 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-[1.5rem] w-32 h-60 p-4 flex flex-col">
                    <div className="flex-1 bg-gradient-to-b from-[#18cb96] to-[#15b085] rounded-lg mb-2"></div>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Turquoise Shapes */}
                <div className="absolute -left-12 top-8 w-16 h-16 bg-gradient-to-br from-[#18cb96] to-[#15b085] rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -right-4 top-12 w-8 h-8 bg-[#18cb96] rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute left-8 -bottom-4 w-12 h-12 bg-gradient-to-tr from-[#18cb96] to-[#15b085] rounded-lg opacity-70 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}