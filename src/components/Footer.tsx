
import React from 'react';
import { Github, Linkedin, Heart, Mail } from 'lucide-react';

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
          <div>
            <h3 className="text-2xl font-bold mb-4 cursor-pointer" onClick={scrollToTop}>
              Piyush
            </h3>
            <p className="text-[#7B7B7B] leading-relaxed">
              Full Stack Web Developer passionate about creating innovative digital solutions 
              that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-[#7B7B7B] hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#7B7B7B] rounded-lg hover:bg-white hover:text-[#222222] transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#7B7B7B] rounded-lg hover:bg-white hover:text-[#222222] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@piyush.dev"
                className="p-2 bg-[#7B7B7B] rounded-lg hover:bg-white hover:text-[#222222] transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-[#7B7B7B] text-sm">
              contact@piyush.dev
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#7B7B7B]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#7B7B7B] text-sm flex items-center">
            © 2024 Piyush. Made with <Heart size={16} className="mx-1 text-red-500" /> and code.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-[#7B7B7B] hover:text-white transition-colors duration-300"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
