import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Wrench, BarChart } from 'lucide-react';

export function OurMission() {
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
  };

  return (
    <section className="w-full py-20 lg:py-28 bg-[#373643]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="flex justify-center">
            <motion.div 
              className="text-center"
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-white/80 mb-8">
                To empower businesses with cutting-edge web solutions that not only look stunning but also deliver measurable results. We believe every business deserves a digital presence that truly represents their brand and drives growth.
              </p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#18cb96]">100+</p>
                  <p className="text-white/80 font-medium">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#18cb96]">5+</p>
                  <p className="text-white/80 font-medium">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}