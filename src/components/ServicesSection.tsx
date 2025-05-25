
import React from 'react';
import { Code, Server, Smartphone, Globe } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using modern frameworks like React, Next.js, and Vue.js with clean, maintainable code.',
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization']
    },
    {
      icon: <Server size={40} />,
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs using Node.js, Express, and database technologies to power your applications.',
      features: ['RESTful APIs', 'Database Design', 'Authentication Systems']
    },
    {
      icon: <Globe size={40} />,
      title: 'Full Stack Development',
      description: 'End-to-end web application development combining both frontend and backend expertise for complete digital solutions.',
      features: ['Complete Solutions', 'MERN Stack', 'Deployment & Hosting']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'App Development',
      description: 'Creating mobile-first applications and progressive web apps that work seamlessly across all devices and platforms.',
      features: ['Cross-Platform', 'PWA Development', 'Mobile Optimization']
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-4">Services</h2>
          <p className="text-lg text-[#7B7B7B] max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#222222] text-white rounded-lg mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#222222] mb-4">{service.title}</h3>
              <p className="text-[#7B7B7B] mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-[#7B7B7B] text-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#222222] rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
