import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, ArrowRight, Zap, Smartphone } from 'lucide-react';
import { ArrowUpDown, X } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [hoveredCoin, setHoveredCoin] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const stablecoins = [
    {
      name: 'USDC',
      position: 'top-20 left-20',
      delay: '0s',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'USDT',
      position: 'top-40 right-16',
      delay: '1s',
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'DAI',
      position: 'bottom-32 left-16',
      delay: '2s',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'BUSD',
      position: 'bottom-20 right-24',
      delay: '3s',
      color: 'from-yellow-400 to-yellow-500',
    },
  ];

  return (
    <section className='relative min-h-screen bg-jet-black overflow-hidden flex items-center justify-center pt-20'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-jet-black via-graphite/20 to-jet-black'></div>

      {/* Floating stablecoins */}
      {stablecoins.map((coin) => (
        <div
          key={coin.name}
          className={`absolute ${
            coin.position
          } animate-drift transition-all duration-300 cursor-pointer ${
            hoveredCoin === coin.name
              ? 'opacity-80 scale-110'
              : 'opacity-30 hover:opacity-60'
          }`}
          style={{ animationDelay: coin.delay }}
          onMouseEnter={() => setHoveredCoin(coin.name)}
          onMouseLeave={() => setHoveredCoin(null)}
        >
          <div
            className={`w-12 h-12 bg-gradient-to-br ${
              coin.color
            } rounded-full flex items-center justify-center text-text-primary text-xs font-bold shadow-lg ${
              hoveredCoin === coin.name
                ? 'shadow-2xl shadow-electric-teal/50'
                : ''
            }`}
          >
            {coin.name}
          </div>
        </div>
      ))}

      <div className='container mx-auto px-6 py-20 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          {/* Left Content */}
          <div className='flex-1 text-center lg:text-left max-w-2xl'>
            <div className='mb-6'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-graphite/50 backdrop-blur-sm border border-electric-teal/20 mb-8'>
                <Zap className='w-4 h-4 text-electric-teal mr-2' />
                <span className='text-sm text-text-muted'>Now in Beta</span>
              </div>

              <h1 className='text-5xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight'>
                <span className='bg-gradient-to-r from-neon-blue to-electric-teal bg-clip-text text-transparent'>
                  Bankless,
                </span>
                <br />
                <span className='bg-gradient-to-r from-electric-teal to-neon-blue bg-clip-text text-transparent'>
                  Borderless,
                </span>
                <br />
                and Always On.
              </h1>

              <p className='text-xl text-text-muted mb-8 leading-relaxed'>
                Experience the future of digital payments with Pulse. Seamlessly
                manage stablecoins and spend anywhere with our innovative card
                solution.
              </p>

              {/* Mobile App Coming Soon */}
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-electric-teal/10 border border-electric-teal/20 mb-8'>
                <Smartphone className='w-4 h-4 text-electric-teal mr-2' />
                <span className='text-sm text-electric-teal font-medium'>
                  Mobile App Coming Soon
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <button
                onClick={() => setIsOpen(true)}
                className='group px-8 py-4 bg-gradient-to-r from-neon-blue to-electric-teal text-text-primary font-semibold rounded-2xl hover:shadow-2xl hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105 animate-pulse-glow'
              >
                <span className='flex items-center justify-center'>
                  Get Started
                  <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                </span>
              </button>

              {/* Modal Overlay */}

              {isOpen && (
                <div className='fixed inset-0 bg-jet-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6'>
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
                          onClick={() => navigate('/offramp')}
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

              <button className='px-8 py-4 bg-graphite/50 backdrop-blur-sm border border-electric-teal/30 text-electric-teal font-semibold rounded-2xl hover:bg-graphite/70 hover:border-electric-teal/50 transition-all duration-300 transform hover:scale-105'>
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Right Content - 3D Card Mockup */}
          <div className='flex-1 flex justify-center lg:justify-end'>
            <div className='relative'>
              <div
                className={`relative w-80 h-48 cursor-pointer transform-gpu transition-transform duration-700 ${
                  isCardFlipped ? 'rotate-y-180' : ''
                }`}
                onMouseEnter={() => setIsCardFlipped(true)}
                onMouseLeave={() => setIsCardFlipped(false)}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Card Front */}
                <div className='absolute inset-0 w-full h-full backface-hidden'>
                  <div className='w-full h-full bg-gradient-to-br from-graphite via-graphite to-jet-black rounded-2xl shadow-2xl border border-electric-teal/20 p-6 animate-float'>
                    <div className='flex justify-between items-start mb-8'>
                      <div className='text-text-primary font-bold text-xl'>
                        PULSE
                      </div>
                      <CreditCard className='w-8 h-8 text-electric-teal' />
                    </div>

                    <div className='mb-8'>
                      <div className='w-12 h-8 bg-gradient-to-r from-electric-teal/30 to-neon-blue/30 rounded mb-2'></div>
                    </div>

                    <div className='flex justify-between items-end'>
                      <div>
                        <div className='text-text-muted text-xs mb-1'>
                          Card Holder
                        </div>
                        <div className='text-text-primary text-sm font-semibold'>
                          EMMY.PULSE
                        </div>
                      </div>
                      <div>
                        <div className='text-text-primary text-sm font-mono'>
                          •••• •••• •••• 1234
                        </div>
                      </div>
                    </div>

                    <div className='flex justify-between items-end mt-4'>
                      <div>
                        <div className='text-text-muted text-xs mb-1'>
                          Valid Thru
                        </div>
                        <div className='text-text-primary text-sm'>12/28</div>
                      </div>
                      <div className='text-right'>
                        <div className='text-text-muted text-xs mb-1'>Exp</div>
                        <div className='text-text-primary text-sm'>12/28</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Back */}
                <div className='absolute inset-0 w-full h-full backface-hidden rotate-y-180'>
                  <div className='w-full h-full bg-gradient-to-br from-jet-black via-graphite to-graphite rounded-2xl shadow-2xl border border-neon-blue/20 p-6'>
                    {/* Magnetic stripe */}
                    <div className='h-12 bg-jet-black rounded mb-6 mt-4'></div>

                    {/* Signature strip */}
                    <div className='bg-text-primary h-8 rounded mb-4 flex items-center px-3'>
                      <div className='text-jet-black text-xs italic'>
                        Emmy.pulse
                      </div>
                    </div>

                    {/* CVV and info */}
                    <div className='flex justify-between items-end'>
                      <div>
                        <div className='text-text-muted text-xs mb-1'>CVV</div>
                        <div className='text-text-primary text-sm font-mono'>
                          •••
                        </div>
                      </div>
                      <div className='text-right'>
                        <div className='text-text-muted text-xs'>
                          For customer service call
                        </div>
                        <div className='text-text-primary text-xs'>
                          1-800-PULSE-24
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
