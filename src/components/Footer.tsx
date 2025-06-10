
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Story', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' }
    ],
    products: [
      { name: 'Daily Kits', path: '/shop' },
      { name: 'Premium Items', path: '/shop' }
    ],
    support: [
      { name: 'Help Center', path: '/faq' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Shipping Info', path: '/shipping' },
      { name: 'Returns', path: '/returns' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Refund Policy', path: '/refund' },
      { name: 'Security', path: '/security' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/alopi' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/alopi' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/alopi' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/alopi' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/alopi' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Connected with Divine Updates
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get spiritual insights, festival reminders, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-full border-0 text-gray-800 flex-1"
              />
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8">
              
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="bg-white rounded-lg p-2">
                    <img 
                      src="/lovable-uploads/8bb721c4-d73a-49d6-93ab-d40af29e6023.png" 
                      alt="Alopi Logo" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Transforming spiritual practices across India with Authentic, Premium pooja essentials 
                  delivered fresh to your doorstep. Experience the divine connection through our 
                  thoughtfully curated daily kits.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Star className="w-5 h-5 text-orange-400" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Star className="w-5 h-5 text-orange-400" />
                    <span>support@alopi.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Star className="w-5 h-5 text-orange-400" />
                    <span>Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              {/* Links Sections */}
              <div>
                <h4 className="text-lg font-bold text-white mb-6">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => navigate(link.path)}
                        className="text-gray-300 hover:text-orange-400 transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-6">Products</h4>
                <ul className="space-y-3">
                  {footerLinks.products.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => navigate(link.path)}
                        className="text-gray-300 hover:text-orange-400 transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-6">Support</h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => navigate(link.path)}
                        className="text-gray-300 hover:text-orange-400 transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Media & Legal */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                
                {/* Social Media */}
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 mr-2">Follow us:</span>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </a>
                  ))}
                </div>

                {/* Legal Links */}
                <div className="flex flex-wrap items-center gap-6">
                  {footerLinks.legal.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => navigate(link.path)}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                <p className="text-gray-400">
                  © 2024 Alopi Sacred Essentials. All rights reserved. | Made with ❤️ for spiritual souls
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
