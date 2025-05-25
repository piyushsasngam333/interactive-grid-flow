
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
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'GeminiForms',
      description: 'An intelligent form builder application powered by Google Gemini AI that automatically generates forms based on user requirements and natural language input.',
      techStack: ['React.js', 'TypeScript', 'Gemini AI', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'TaskFlow Pro',
      description: 'A comprehensive project management tool with team collaboration features, real-time updates, and advanced analytics dashboard.',
      techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Redux'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Hub',
      description: 'Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
      techStack: ['Next.js', 'Stripe', 'MongoDB', 'Prisma'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with real-time forecasts, location-based services, and detailed analytics.',
      techStack: ['React.js', 'Weather API', 'Chart.js', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, user authentication, and content management system.',
      techStack: ['Next.js', 'Firebase', 'Markdown', 'Tailwind CSS'],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#F8F8F8] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#222222] to-[#7B7B7B] flex items-center justify-center">
                <div className="text-white text-xl font-bold">{project.title}</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#222222] mb-3">{project.title}</h3>
                <p className="text-[#7B7B7B] mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white text-[#222222] text-xs rounded-full border border-[#7B7B7B]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center px-3 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#7B7B7B] transition-colors duration-300 text-sm"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Live
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center px-3 py-2 border border-[#222222] text-[#222222] rounded-lg hover:bg-[#222222] hover:text-white transition-colors duration-300 text-sm"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={14} className="mr-1" />
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
