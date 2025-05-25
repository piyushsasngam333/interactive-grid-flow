
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Layers, Smartphone } from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using modern frameworks like React, Next.js, and Vue.js with attention to user experience and performance.',
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization', 'Cross-browser Compatibility']
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Development',
      description: 'Building robust server-side applications, APIs, and database solutions using Node.js, Express, and various database technologies.',
      features: ['RESTful APIs', 'Database Design', 'Authentication', 'Server Optimization']
    },
    {
      icon: <Layers size={32} />,
      title: 'Full Stack Development',
      description: 'End-to-end web application development combining frontend and backend technologies to deliver complete digital solutions.',
      features: ['MERN Stack', 'System Architecture', 'DevOps Integration', 'Scalable Solutions']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'App Development',
      description: 'Creating mobile-first applications and progressive web apps that work seamlessly across all devices and platforms.',
      features: ['Mobile-First Design', 'PWA Development', 'Cross-Platform', 'App Store Deployment']
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-4">Services</h2>
          <p className="text-lg text-[#7B7B7B] max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="w-16 h-16 bg-[#222222] text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#7B7B7B] transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-[#222222] mb-4">{service.title}</h3>
              <p className="text-[#7B7B7B] mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-[#7B7B7B] text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#222222] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
