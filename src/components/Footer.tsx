
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#222222] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-2xl font-bold mb-4 cursor-pointer"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
            >
              Piyush
            </motion.h3>
            <p className="text-[#7B7B7B] leading-relaxed">
              Full Stack Web Developer passionate about creating innovative digital solutions 
              that make a difference.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-[#7B7B7B] hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#7B7B7B] rounded-lg hover:bg-white hover:text-[#222222] transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#7B7B7B] rounded-lg hover:bg-white hover:text-[#222222] transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
            <p className="text-[#7B7B7B] text-sm">
              contact@piyush.dev
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-[#7B7B7B]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-[#7B7B7B] text-sm flex items-center">
            © 2024 Piyush. Made with <Heart size={16} className="mx-1 text-red-500" /> and code.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-[#7B7B7B] hover:text-white transition-colors duration-300"
            whileHover={{ y: -2 }}
          >
            Back to top ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
