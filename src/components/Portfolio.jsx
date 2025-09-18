import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'QuantumLeap E-commerce',
    type: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a custom CMS and integrated payment gateways.',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=500&h=400&fit=crop',
    category: 'Platinum',
    technologies: ['Next.js', 'Stripe', 'Sanity', 'Tailwind CSS'],
    deliveryTime: '8 Weeks',
    features: ['Custom CMS', 'Payment Gateway Integration', 'Product Management', 'Order Tracking'],
    notes: 'This project involved a complete overhaul of the client\'s online presence, resulting in a 50% increase in sales.'
  },
  {
    title: 'Zenith Web Solutions',
    type: 'Corporate Website',
    description: 'A stunning and responsive corporate website for a local business, designed to attract and inform customers.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
    category: 'Gold',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    deliveryTime: '4 Weeks',
    features: ['Animated Landing Page', 'Contact Form', 'Services Showcase', 'Testimonials Section'],
    notes: 'The focus was on creating a visually appealing and easy-to-navigate user experience.'
  },
  {
    title: 'Nova Creative Hub',
    type: 'Portfolio Website',
    description: 'A creative portfolio website for a design agency, showcasing their work with a clean and modern design.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop',
    category: 'Silver',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    deliveryTime: '2 Weeks',
    features: ['Project Gallery', 'About Page', 'Contact Information'],
    notes: "A simple yet elegant solution to showcase the agency's portfolio."
  },
  {
    title: 'Apex Corporate Site',
    type: 'Corporate Website',
    description: 'A corporate website with a clean and modern design.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=400&fit=crop',
    category: 'Gold',
    technologies: ['WordPress', 'Elementor', 'Adobe Photoshop'],
    deliveryTime: '3 Weeks',
    features: ['Custom WordPress Theme', 'Blog', 'SEO Optimization'],
    notes: 'A fast-loading and easy-to-manage website for a growing corporation.'
  },
  {
    title: 'Orion Blog Platform',
    type: 'Blog Platform',
    description: 'A personal blog with a focus on readability and performance.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=400&fit=crop',
    category: 'Silver',
    technologies: ['Gatsby', 'Markdown', 'Netlify'],
    deliveryTime: '2 Weeks',
    features: ['Static Site Generation', 'Dark Mode', 'RSS Feed'],
    notes: 'A lightweight and performant blog that is easy to maintain.'
  },
  {
    title: 'Fusion Fashion Store',
    type: 'E-commerce Store',
    description: 'A full-featured e-commerce store for a fashion brand.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=400&fit=crop',
    category: 'Platinum',
    technologies: ['Shopify', 'Liquid', 'Figma'],
    deliveryTime: '6 Weeks',
    features: ['Shopify Theme Customization', 'Product Variant Support', 'Checkout Optimization'],
    notes: 'A stylish and high-converting online store for a popular fashion brand.'
  }
];

const categoryStyles = {
  Silver: {
    badge: 'bg-gray-300 text-gray-800 border-gray-400',
    text: 'text-gray-400',
  },
  Gold: {
    badge: 'bg-yellow-400 text-yellow-900 border-yellow-500',
    text: 'text-yellow-400',
  },
  Platinum: {
    badge: 'bg-indigo-400 text-indigo-900 border-indigo-500',
    text: 'text-indigo-400',
  },
};

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="w-full py-20 lg:py-28 bg-[#2a2937]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A glimpse into our recent work and success stories.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog key={index} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
              <DialogTrigger asChild>
                <motion.div
                  className="bg-[#373643] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer flex flex-col h-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-48"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <Badge className={`absolute top-2 right-2 ${categoryStyles[project.category]?.badge}`}>
                      {project.category === 'Silver' ? 'silver' : project.category === 'Gold' ? 'GOld' : project.category === 'Platinum' ? 'platinum' : project.category}
                    </Badge>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className={`text-sm font-medium ${categoryStyles[project.category]?.text}`}>
                      {project.type}
                    </p>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm mb-4 flex-grow">{project.description}</p>
                    <Button
                      variant="outline"
                      className="border-[#18cb96] text-[#18cb96] group-hover:bg-[#18cb96] group-hover:text-white transition-colors duration-300 mt-auto"
                    >
                      View Details
                    </Button>
                  </div>
                </motion.div>
              </DialogTrigger>
              {selectedProject && (
                <DialogContent className="bg-[#373643] text-white border-gray-700 max-w-2xl p-0">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-t-lg" />
                  <div className="p-6">
                    <DialogHeader>
                      <div className="flex justify-between items-start">
                        <DialogTitle className="text-2xl text-white">{selectedProject.title}</DialogTitle>
                        <Badge className={`${categoryStyles[selectedProject.category]?.badge} ml-4`}>
                          {selectedProject.category === 'Silver' ? 'silver' : selectedProject.category === 'Gold' ? 'GOld' : selectedProject.category === 'Platinum' ? 'platinum' : selectedProject.category}
                        </Badge>
                      </div>
                    </DialogHeader>
                    <div className="mt-4 space-y-2">
                      <p><strong className="text-white/90">Type:</strong> {selectedProject.type}</p>
                      <p><strong className="text-white/90">Technologies:</strong> {selectedProject.technologies.join(', ')}</p>
                      <p><strong className="text-white/90">Delivery Time:</strong> {selectedProject.deliveryTime}</p>
                      <p><strong className="text-white/90">Features:</strong> {selectedProject.features.join(', ')}</p>
                      {selectedProject.notes && <p className="mt-4 text-white/70 italic">{selectedProject.notes}</p>}
                    </div>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
