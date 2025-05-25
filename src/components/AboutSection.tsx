
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineItems = [
    {
      type: 'experience',
      title: 'Full Stack Web Developer',
      company: 'Next24tech Technology & Services LLP',
      period: 'Mar 2025 - May 2025',
      description: 'Developing modern web applications using MERN stack technologies, implementing responsive designs, and optimizing application performance.',
      icon: <Briefcase size={20} />
    },
    {
      type: 'education',
      title: 'BTech ECE',
      company: 'NIT Hamirpur',
      period: '2024 - 2027',
      description: 'Pursuing Bachelor of Technology in Electronics and Communication Engineering with focus on programming and software development.',
      icon: <GraduationCap size={20} />
    },
    {
      type: 'education',
      title: 'Schooling',
      company: 'City Montessori School, Lucknow',
      period: '2010 - 2022',
      description: 'Completed secondary and higher secondary education with strong foundation in mathematics and sciences.',
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-4">About Me</h2>
          <p className="text-lg text-[#7B7B7B] max-w-2xl mx-auto">
            My journey through education and professional experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#F8F8F8]"></div>
          
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#222222] rounded-full transform -translate-x-1/2 z-10"></div>
              
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="bg-[#F8F8F8] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-[#222222] text-white rounded-lg mr-3">
                      {item.icon}
                    </div>
                    <div className="flex items-center text-sm text-[#7B7B7B]">
                      <Calendar size={16} className="mr-1" />
                      {item.period}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#222222] mb-2">{item.title}</h3>
                  <p className="text-[#7B7B7B] font-medium mb-3">{item.company}</p>
                  <p className="text-[#7B7B7B] text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[#7B7B7B] max-w-3xl mx-auto leading-relaxed">
            I'm passionate about creating innovative web solutions that bridge design and functionality. 
            With experience in full-stack development and a strong educational background, I bring both 
            technical expertise and creative problem-solving to every project.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
