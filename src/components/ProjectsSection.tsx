
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Chatalaxy',
      description: 'A modern social media platform built with MERN stack featuring real-time messaging, user authentication, post sharing, and interactive user profiles.',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT'],
      features: [
        'Real-time messaging system',
        'User authentication & authorization',
        'Post creation and sharing',
        'Like and comment functionality',
        'Responsive design'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'GeminiForms',
      description: 'An intelligent form builder application powered by Google Gemini AI that automatically generates forms based on user requirements and natural language input.',
      techStack: ['React.js', 'TypeScript', 'Gemini AI', 'Tailwind CSS', 'Firebase'],
      features: [
        'AI-powered form generation',
        'Natural language processing',
        'Drag & drop form builder',
        'Real-time form preview',
        'Export functionality'
      ],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-4">Portfolio</h2>
          <p className="text-lg text-[#7B7B7B] max-w-2xl mx-auto">
            Featured projects showcasing my development skills and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#F8F8F8] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-[#222222] to-[#7B7B7B] flex items-center justify-center">
                <div className="text-white text-2xl font-bold">{project.title}</div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#222222] mb-4">{project.title}</h3>
                <p className="text-[#7B7B7B] mb-6 leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-[#222222] font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-[#222222] text-sm rounded-full border border-[#7B7B7B]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-[#222222] font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-[#7B7B7B] text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-[#222222] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#7B7B7B] transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 border border-[#222222] text-[#222222] rounded-lg hover:bg-[#222222] hover:text-white transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
