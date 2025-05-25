
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'HTML/CSS',
        'JavaScript',
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'TypeScript'
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'PostgreSQL',
        'REST APIs',
        'GraphQL'
      ]
    },
    {
      title: 'Other Skills',
      skills: [
        'Git/GitHub',
        'Docker',
        'AWS',
        'Firebase',
        'Python',
        'UI/UX Design'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-4">Skills</h2>
          <p className="text-lg text-[#7B7B7B] max-w-2xl mx-auto">
            My technical expertise and technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#222222] mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    className="bg-[#F8F8F8] px-3 py-2 rounded-lg text-center text-[#222222] font-medium text-sm hover:bg-[#222222] hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
