import React from 'react';
import { Heart, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: [
      'Features',
      'Security',
      'Pricing',
      'API',
    ],
    Company: [
      'About',
      'Blog',
      'Careers',
      'Press',
    ],
    Resources: [
      'Documentation',
      'Help Center',
      'Privacy Policy',
      'Terms of Service',
    ],
    Community: [
      'Discord',
      'Twitter',
      'GitHub',
      'LinkedIn',
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-jet-black relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl font-bold text-graphite">USDC</div>
        <div className="absolute top-32 right-20 text-4xl font-bold text-graphite">USDT</div>
        <div className="absolute bottom-32 left-32 text-5xl font-bold text-graphite">DAI</div>
        <div className="absolute bottom-16 right-16 text-3xl font-bold text-graphite">BUSD</div>
      </div>

      <div className="relative">
        {/* Glassmorphic panel */}
        <div className="bg-graphite/20 backdrop-blur-sm border-t border-graphite/30">
          <div className="container mx-auto px-6 py-16">
            
            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-5 gap-8 mb-12">
              
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">PULSE</h3>
                  <p className="text-text-muted max-w-sm">
                    The future of digital payments. Bankless, borderless, and always on.
                  </p>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-graphite/50 rounded-lg flex items-center justify-center text-text-muted hover:text-electric-teal hover:bg-electric-teal/10 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Sections */}
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold text-text-primary mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a 
                          href="#" 
                          className="text-text-muted hover:text-electric-teal transition-colors duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="border-t border-graphite/30 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-text-muted mb-4 md:mb-0">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-electric-teal mx-2" />
                <span>for the decentralized future</span>
              </div>
              
              <div className="text-text-muted text-sm">
                © 2024 Pulse. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;