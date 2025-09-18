import React from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function GetInTouch() {
  return (
    <section id="contact" className="w-full py-20 lg:py-28 bg-[#0d0c22]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/70 md:text-xl">
            We're here to help you bring your ideas to life. Contact us for a quote, or just to say hello.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-[#1a1a3d] rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 bg-[#18cb96] text-white space-y-8">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <p>
                Fill up the form and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <FaPhone className="h-6 w-6" />
                  <span>+974 5595 3483</span>
                </div>
                <div className="flex items-center space-x-6">
                  <FaEnvelope className="h-6 w-6" />
                  <span>info@taqwalabs.com</span>
                </div>
                <div className="flex items-center space-x-6">
                  <FaMapMarkerAlt className="h-6 w-6" />
                  <span>Doha, Qatar</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 text-white">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                  <Input id="name" placeholder="Your name" className="bg-[#0d0c22] border border-gray-600 text-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-[#0d0c22] border border-gray-600 text-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={4} className="bg-[#0d0c22] border border-gray-600 text-white" />
                </div>
                <Button type="submit" className="w-full bg-white text-[#18cb96] font-bold hover:bg-gray-200 transition-colors">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}