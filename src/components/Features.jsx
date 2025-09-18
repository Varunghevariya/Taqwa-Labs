import React from 'react';
import { Lightbulb, Rocket, Shield } from 'lucide-react'; // Example icons

export function Features() {
  const featuresData = [
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'We bring fresh ideas and cutting-edge technology to solve your unique challenges.',
    },
    {
      icon: Rocket,
      title: 'Blazing Fast Performance',
      description: 'Optimized websites that load quickly, providing an excellent user experience.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Robust security measures and dependable infrastructure for peace of mind.',
    },
    {
      icon: Lightbulb,
      title: 'Scalable Architecture',
      description: 'Build with future growth in mind, ensuring your platform can expand effortlessly.',
    },
    {
      icon: Rocket,
      title: 'SEO Optimized',
      description: 'Websites built with SEO best practices to ensure higher visibility and organic traffic.',
    },
    {
      icon: Shield,
      title: 'Dedicated Support',
      description: 'Our team is always ready to assist you with any queries or issues.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#2a2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-[#373643] p-6 rounded-lg shadow-lg border border-[#4a4958]"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#18cb96]/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-[#18cb96]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
