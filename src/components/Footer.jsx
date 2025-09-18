import React from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import taqwaLogo from '../assets/30a4b8ce34c6451232d618f721ef5ffed16373f5.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/97455953483?text=Hi%20Taqwa%20Labs%2C%20I%20have%20a%20question%20about%20your%20web%20design%20services.', '_blank');
  };

  return (
    <footer className="bg-[#373643] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img src={taqwaLogo} alt="Taqwa Labs" className="h-12 w-auto mb-4" />
                <p className="text-gray-300 leading-relaxed max-w-md">
                  We design and build websites that grow your business. Custom solutions, 
                  lightning-fast performance, and support that scales with you.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-4 w-4 mr-3 text-[#18cb96]" />
                  <span>+974 55953483</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 mr-3 text-[#18cb96]" />
                  <span>hello@taqwalabs.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-3 text-[#18cb96]" />
                  <span>Doha, Qatar</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  onClick={openWhatsApp}
                  className="bg-[#18cb96] hover:bg-[#15b085] text-white flex items-center"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')} 
                    className="text-gray-300 hover:text-[#18cb96] transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="text-gray-300 hover:text-[#18cb96] transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('pricing')} 
                    className="text-gray-300 hover:text-[#18cb96] transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('portfolio')} 
                    className="text-gray-300 hover:text-[#18cb96] transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-gray-300 hover:text-[#18cb96] transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="text-gray-300 hover:text-[#18cb96] transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 hover:text-[#18cb96] transition-colors">Website Design</li>
                <li className="text-gray-300 hover:text-[#18cb96] transition-colors">Web Development</li>
                <li className="text-gray-300 hover:text-[#18cb96] transition-colors">E-commerce Solutions</li>
                <li className="text-gray-300 hover:text-[#18cb96] transition-colors">SEO Optimization</li>
                <li className="text-gray-300 hover:text-[#18cb96] transition-colors">Website Maintenance</li>
                <li className="text-gray-300 hover:text-[#18cb96] transition-colors">Website Hosting</li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-700" />
        
        {/* Copyright */}
        <div className="py-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} Taqwa Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}