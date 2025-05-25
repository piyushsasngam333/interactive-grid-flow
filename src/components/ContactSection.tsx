
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-4">Get In Touch</h2>
          <p className="text-lg text-[#7B7B7B] max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#222222] font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#F8F8F8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#222222] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#F8F8F8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#222222] font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-[#F8F8F8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-[#222222] text-white py-3 px-6 rounded-lg hover:bg-[#7B7B7B] transition-colors duration-300 flex items-center justify-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#222222] mb-6">Let's Connect</h3>
              <p className="text-[#7B7B7B] leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind or just want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-[#F8F8F8] rounded-lg flex items-center justify-center mr-4">
                  <Mail size={20} className="text-[#222222]" />
                </div>
                <div>
                  <p className="text-[#222222] font-medium">Email</p>
                  <p className="text-[#7B7B7B]">contact@piyush.dev</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-[#F8F8F8] rounded-lg flex items-center justify-center mr-4">
                  <Phone size={20} className="text-[#222222]" />
                </div>
                <div>
                  <p className="text-[#222222] font-medium">Phone</p>
                  <p className="text-[#7B7B7B]">+91 XXXXX XXXXX</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-[#F8F8F8] rounded-lg flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-[#222222]" />
                </div>
                <div>
                  <p className="text-[#222222] font-medium">Location</p>
                  <p className="text-[#7B7B7B]">Himachal Pradesh, India</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-8">
              <p className="text-[#7B7B7B] text-sm">
                Response time: Usually within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
