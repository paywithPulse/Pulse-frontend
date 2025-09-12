import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import { ArrowUpDown, X } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-jet-black/80 backdrop-blur-lg border-b border-graphite/30'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to={'/'}>
            <div className='flex items-center space-x-3'>
              <div className='w-8 h-8 bg-gradient-to-r from-neon-blue to-electric-teal rounded-lg flex items-center justify-center'>
                <CreditCard className='w-5 h-5 text-text-primary' />
              </div>
              <span className='text-2xl font-bold text-text-primary'>
                PULSE
              </span>
            </div>
          </Link>

          {/* Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text-muted hover:text-electric-teal transition-colors duration-300">
              Home
            </a>
            <a href="#security" className="text-text-muted hover:text-electric-teal transition-colors duration-300">
              About
            </a>
            <a href="#about" className="text-text-muted hover:text-electric-teal transition-colors duration-300">
              Feature
            </a>
          </nav> */}

          {/* CTA */}
          <div className='flex items-center space-x-4'>
            {/* <button className="hidden sm:block px-6 py-2 text-text-muted hover:text-electric-teal transition-colors duration-300">
              Sign In
            </button> */}
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-2 bg-gradient-to-r from-neon-blue to-electric-teal text-text-primary font-semibold rounded-xl hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Get Started
            </button>

            {isOpen && (
              <div className='fixed inset-0 bg-jet-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-6 pt-20'>
                <div className='bg-graphite/90 backdrop-blur-lg rounded-2xl border border-electric-teal/30 p-8 max-w-md w-full transform animate-in slide-in-from-bottom-5 duration-300'>
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors duration-200'
                  >
                    <X className='w-5 h-5' />
                  </button>

                  {/* Content */}
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-gradient-to-r from-electric-teal to-neon-blue rounded-full flex items-center justify-center mx-auto mb-6'>
                      <ArrowUpDown className='w-8 h-8 text-text-primary' />
                    </div>

                    <h3 className='text-2xl font-bold text-text-primary mb-4'>
                      Quick Off-Ramp
                    </h3>

                    <p className='text-text-muted mb-8'>
                      Convert your stablecoins to local currency instantly
                      without creating a wallet.
                    </p>

                    {/* Action Buttons */}
                    <div className='space-y-3'>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          navigate('/offramp');
                        }}
                        className='w-full px-6 py-4 bg-gradient-to-r from-neon-blue to-electric-teal text-text-primary font-semibold rounded-xl hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105'
                      >
                        Start Off-Ramp
                      </button>
                      <button
                        onClick={() => setIsOpen(false)}
                        className='w-full px-6 py-3 text-text-muted hover:text-text-primary transition-colors duration-200'
                      >
                        Maybe Later
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
