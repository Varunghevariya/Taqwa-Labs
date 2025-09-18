import React, { useState, useEffect } from 'react';
import { Check, Star, Crown, Sparkles, Zap, Diamond } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const hoverBorderColors = {
    Silver: '#C0C0C0',
    Gold: '#FFD700',
    Platinum: '#8A2BE2',
  };

  const plans = [
    {
      name: 'Silver',
      price: '1,500qr ($412)',
      description: 'Perfect for small businesses',
      icon: Sparkles,
      gradient: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 25%, #A8A8A8 50%, #D3D3D3 75%, #B8B8B8 100%)',
      borderGradient: 'linear-gradient(135deg, #E8E8E8, #A8A8A8, #D3D3D3)',
      glowColor: 'rgba(192, 192, 192, 0.4)',
      shadowColor: 'rgba(192, 192, 192, 0.3)',
      features: [
        'A complete 5 page site to showcase your core services and capture leads (Home, About, services, Gallery, Contact)',
        'Multi language support (Arabic/english)',
        'Custom Design based on a template',
        'Word - press',
        'Basic lead capture form',
        'Fully responsive on all devices',
        'On-page SEO setup (title tags, Meta descriptions)',
        'Integration to their social media.', 
        '1 week post launch support'
      ],
      whatsappUrl: 'https://wa.me/97455953483?text=Hi%20Taqwa%20Labs%2C%20I%27m%20interested%20in%20the%20Silver%20website%20package.%20Please%20share%20details.',
      popular: false,
      delay: 0
    },
    {
      name: 'Gold',
      price: '3,000qr ($824)',
      description: 'Great for growing businesses',
      icon: Crown,
      gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFFF00 50%, #FFB347 75%, #DAA520 100%)',
      borderGradient: 'linear-gradient(135deg, #FFD700, #FFA500, #FFFF00)',
      glowColor: 'rgba(255, 215, 0, 0.4)',
      shadowColor: 'rgba(255, 215, 0, 0.3)',
      features: [
        'Everything in silver PLUS',
        'Up to 10 pages (+ Blog, Testimonials, FAQ)',
        'Fully custom UI/UX Design (no template)', 
        'Booking system OR Basic E- commerce', 
        'We populate the site with your text and images', 
        'Keyword research + full on page optimization', 
        'Setup and optimization', 
        'Website speed optimization', 
        'Google analytics and search console setup',
        '1 month post launch support', 
        '1 free month for our essential maintenance plan'
      ],
      whatsappUrl: 'https://wa.me/97455953483?text=Hi%20Taqwa%20Labs%2C%20I%27d%20like%20to%20know%20more%20about%20the%20Gold%20website%20package.',
      popular: true,
      delay: 0.2
    },
    {
      name: 'Platinum',
      price: '9,000qr ($2,472)',
      description: 'Ultimate solution for enterprises',
      icon: Diamond,
      gradient: 'linear-gradient(135deg, #8A2BE2 0%, #9370DB 25%, #BA55D3 50%, #EE82EE 75%, #800080 100%)',
      borderGradient: 'linear-gradient(135deg, #8A2BE2, #9370DB, #BA55D3)',
      glowColor: 'rgba(138, 43, 226, 0.4)',
      shadowColor: 'rgba(138, 43, 226, 0.3)',
      features: [
        'Unlimited pages', 
        'Multi language support (Arabic/english)', 
        'Premium custom designs with multiple design concepts', 
        'Advanced booking system or full e commerce', 
        'Professional copywriting for key pages or 2 blog posts', 
        'Email marketing integration + lead magnet'
      ],
      whatsappUrl: 'https://wa.me/97455953483?text=Hello%20Taqwa%20Labs%2C%20I%27m%20interested%20in%20the%20Platinum%20package.%20I%20need%20custom%20features%20and%20post-launch%20support.',
      popular: false,
      delay: 0.4
    }
  ];

  const allFeatures = [
    'Custom Design',
    'Mobile Responsive',
    'Contact Forms',
    'Basic SEO',
    'Social Media Integration',
    'CMS Integration',
    'Blog Setup',
    'eCommerce Functionality',
    'Advanced SEO',
    'Analytics Setup',
    'Priority Support',
    '1 Month Support'
  ];

  const openWhatsApp = (url) => {
    window.open(url, '_blank');
  };

  // Floating geometric shapes
  const FloatingShape = ({ delay, duration, className }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration }}
      className={className}
    />
  );

  return (
    <section id="pricing" className="py-20 relative overflow-hidden bg-[#2a2937]">
      {/* Background elements */}
      <FloatingShape delay={0.2} duration={0.8} className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#18cb96]/5 blur-3xl" />
      <FloatingShape delay={0.3} duration={0.8} className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#18cb96]/5 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Choose the perfect package for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden group hover:scale-105 transition-all duration-300"
              style={{
                background: '#373643',
                borderColor: hoveredCard === index ? hoverBorderColors[plan.name] : '#4a4958',
                boxShadow: `0 0 20px ${plan.shadowColor}`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[#18cb96] text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                    <Star className="h-3 w-3" /> POPULAR
                  </div>
                </div>
              )}
              
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${plan.glowColor} 0%, transparent 100%)`,
                  borderRadius: 'inherit'
                }}
              />
              
              <CardHeader className="text-center pb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: plan.gradient
                  }}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-white/70">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-white">{plan.price}</p>
                  <p className="text-white/70">one-time payment</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/80">
                      <Check className="h-5 w-5 text-[#18cb96] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-[#18cb96] hover:bg-[#15b586] text-white"
                  onClick={() => openWhatsApp(plan.whatsappUrl)}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-white/80 mb-4">Need a custom solution? Contact us for a tailored quote.</p>
          <Button 
            variant="outline" 
            className="border-[#18cb96] text-[#18cb96] hover:bg-[#18cb96] hover:text-white"
            onClick={() => openWhatsApp('https://wa.me/97455953483?text=Hi%20Taqwa%20Labs%2C%20I%20need%20a%20custom%20website%20solution.%20Can%20you%20provide%20a%20quote%3F')}
          >
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}