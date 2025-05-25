
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 88 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'TypeScript', level: 75 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      title: 'Other Skills',
      skills: [
        { name: 'Git/GitHub', level: 88 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Firebase', level: 80 },
        { name: 'Python', level: 78 },
        { name: 'UI/UX Design', level: 85 }
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
            My technical expertise and proficiency levels
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
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#222222] font-medium">{skill.name}</span>
                      <span className="text-[#7B7B7B] text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-[#F8F8F8] rounded-full h-2">
                      <motion.div
                        className="bg-[#222222] h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
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
