
import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-4">Get In Touch</h2>
          <p className="text-lg text-[#7B7B7B] max-w-2xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#222222] mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 bg-[#F8F8F8] rounded-lg mr-4">
                  <Mail size={24} className="text-[#222222]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#222222]">Email</h4>
                  <p className="text-[#7B7B7B]">contact@piyush.dev</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-[#F8F8F8] rounded-lg mr-4">
                  <Phone size={24} className="text-[#222222]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#222222]">Phone</h4>
                  <p className="text-[#7B7B7B]">+91 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-[#F8F8F8] rounded-lg mr-4">
                  <MapPin size={24} className="text-[#222222]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#222222]">Location</h4>
                  <p className="text-[#7B7B7B]">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
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
                  required
                  className="w-full px-4 py-3 border border-[#7B7B7B]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent bg-[#F8F8F8]"
                  placeholder="Your Name"
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
                  required
                  className="w-full px-4 py-3 border border-[#7B7B7B]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent bg-[#F8F8F8]"
                  placeholder="your.email@example.com"
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
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-[#7B7B7B]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent bg-[#F8F8F8] resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#222222] text-white py-3 px-6 rounded-lg hover:bg-[#7B7B7B] transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
