import React from 'react';
import { CreditCard } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-jet-black/80 backdrop-blur-lg border-b border-graphite/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-electric-teal rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-text-primary" />
            </div>
            <span className="text-2xl font-bold text-text-primary">PULSE</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text-muted hover:text-electric-teal transition-colors duration-300">
              Features
            </a>
            <a href="#security" className="text-text-muted hover:text-electric-teal transition-colors duration-300">
              Security
            </a>
            <a href="#about" className="text-text-muted hover:text-electric-teal transition-colors duration-300">
              About
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block px-6 py-2 text-text-muted hover:text-electric-teal transition-colors duration-300">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-neon-blue to-electric-teal text-text-primary font-semibold rounded-xl hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;