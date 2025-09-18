import React from 'react';
import { Palette, Code2, Headphones } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Design',
      description: 'UI/UX design, responsive mockups, and beautiful interfaces that convert visitors into customers.',
      features: ['Custom UI/UX Design', 'Responsive Mockups', 'Brand Identity', 'User Experience Optimization']
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Clean code, SEO optimization, and CMS integration for websites that perform and scale.',
      features: ['Clean Code Architecture', 'SEO Optimization', 'CMS Integration', 'Performance Optimization']
    },
    {
      icon: Headphones,
      title: 'Support',
      description: 'Ongoing maintenance, performance optimization, and dedicated support for your peace of mind.',
      features: ['24/7 Maintenance', 'Performance Monitoring', 'Security Updates', 'Priority Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#2a2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Complete web solutions from concept to launch, backed by ongoing support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-all duration-300 hover:shadow-xl bg-[#373643] border border-[#4a4958] hover:border-[#18cb96]" // Added hover border color
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#18cb96]/10 rounded-full flex items-center justify-center mx-auto mb-4 
                            group-hover:bg-[#18cb96]/20 transition-colors group-hover:shadow-lg group-hover:shadow-[#18cb96]/50"> {/* Added glow effect */}
                  <service.icon className="h-8 w-8 text-[#18cb96]" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-[#18cb96] transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-white/70 mb-4">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 text-white/80">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-sm">
                      <svg className="w-4 h-4 mr-2 text-[#18cb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}