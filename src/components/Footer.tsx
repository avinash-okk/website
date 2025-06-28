import React from 'react';
import { Heart, Instagram, Youtube, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, link: '#', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, link: '#', label: 'YouTube' },
    { icon: <Twitter className="w-5 h-5" />, link: '#', label: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, link: 'mailto:alex@creativestudio.com', label: 'Email' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Alex Rivera</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Content creator passionate about authentic storytelling and building meaningful 
              connections through engaging digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  aria-label={social.label}
                  className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Content Creation</li>
              <li>Brand Partnerships</li>
              <li>Social Media Strategy</li>
              <li>Video Production</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Alex Rivera. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> for creators everywhere
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;