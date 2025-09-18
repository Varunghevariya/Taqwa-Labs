import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="w-full py-20 lg:py-28 bg-gradient-to-b from-[#2a2937] to-[#373643]">
      <motion.div 
        className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">About Taqwa Labs</h2>
        <p className="text-xl text-white/80">
          We’re a passionate team of designers, developers, and digital strategists dedicated to creating exceptional web experiences that drive business growth. Founded on the principles of innovation, quality, and customer success.
        </p>
      </motion.div>
    </section>
  );
}
