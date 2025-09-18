import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
    {
      name: 'Ahmed Hassan',
      role: 'Founder & Lead Designer',
      image: 'https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3NzQ5MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'With 8+ years of experience in web design and development, Ahmed leads our creative vision.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ahmed@taqwalabs.com'
      }
    },
    {
      name: 'Fatima Ali',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3ODEyOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Full-stack developer specializing in modern web technologies and performance optimization.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'fatima@taqwalabs.com'
      }
    },
    {
      name: 'Omar Khan',
      role: 'Digital Marketing Specialist',
      image: 'https://images.unsplash.com/photo-1525078104030-f4e802197252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTc4NDI0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'SEO expert and digital marketing strategist ensuring your website gets found and converts.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'omar@taqwalabs.com'
      }
    }
  ];

export function Team() {
  return (
    <section id="team" className="w-full py-20 lg:py-28 bg-[#2a2937]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-[#373643] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="aspect-square relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#18cb96] font-medium mb-3">{member.role}</p>
                <p className="text-white/70 mb-4">{member.description}</p>
                <div className="flex space-x-3">
                  <a href={member.social.linkedin} aria-label="LinkedIn" className="text-white/70 hover:text-[#18cb96]">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} aria-label="Twitter" className="text-white/70 hover:text-[#18cb96]">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${member.social.email}`} aria-label="Email" className="text-white/70 hover:text-[#18cb96]">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
