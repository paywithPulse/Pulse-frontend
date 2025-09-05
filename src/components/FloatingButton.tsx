import React, { useState } from 'react';
import { ArrowUpDown, X } from 'lucide-react';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="group w-16 h-16 bg-gradient-to-r from-neon-blue to-electric-teal rounded-full shadow-lg hover:shadow-2xl hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-110 animate-pulse-glow flex items-center justify-center"
        >
          <ArrowUpDown className="w-6 h-6 text-text-primary group-hover:rotate-180 transition-transform duration-300" />
        </button>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-jet-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-graphite/90 backdrop-blur-lg rounded-2xl border border-electric-teal/30 p-8 max-w-md w-full transform animate-in slide-in-from-bottom-5 duration-300">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-teal to-neon-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowUpDown className="w-8 h-8 text-text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Quick Off-Ramp
              </h3>
              
              <p className="text-text-muted mb-8">
                Convert your stablecoins to local currency instantly without creating a wallet.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full px-6 py-4 bg-gradient-to-r from-neon-blue to-electric-teal text-text-primary font-semibold rounded-xl hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105">
                  Start Off-Ramp
                </button>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full px-6 py-3 text-text-muted hover:text-text-primary transition-colors duration-200"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButton;