import React from 'react';
import { Wallet, Repeat, CreditCard, TrendingUp, Shield, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Wallet,
      title: 'Wallet Home',
      description: 'Real-time balances across multiple stablecoins with instant portfolio insights and seamless management.',
      gradient: 'from-neon-blue to-electric-teal',
      delay: '0ms',
    },
    {
      icon: Repeat,
      title: 'Instant Off-Ramp',
      description: 'Swap USDT, USDC, and other stablecoins to local currency instantly with competitive rates.',
      gradient: 'from-electric-teal to-neon-blue',
      delay: '200ms',
    },
    {
      icon: CreditCard,
      title: 'Card Management',
      description: 'Order and track your physical Pulse card with real-time spending controls and security features.',
      gradient: 'from-neon-blue via-electric-teal to-neon-blue',
      delay: '400ms',
    },
  ];

  return (
    <section className="py-20 bg-jet-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Powerful features designed for the modern digital economy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
              style={{ animationDelay: feature.delay }}
            >
              {/* Glassmorphic Card */}
              <div className="relative h-full bg-graphite/30 backdrop-blur-lg rounded-2xl border border-graphite/50 p-8 hover:border-electric-teal/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-electric-teal/10">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" 
                     style={{ backgroundImage: `linear-gradient(135deg, #3B82F6, #22D3EE)` }}></div>
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-electric-teal transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed group-hover:text-text-primary/80 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-electric-teal/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-electric-teal" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-graphite/20 backdrop-blur-sm rounded-2xl border border-graphite/30 p-6 hover:border-neon-blue/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-neon-blue mr-3" />
              <h4 className="text-lg font-semibold text-text-primary">Bank-Level Security</h4>
            </div>
            <p className="text-text-muted">Multi-signature wallets and advanced encryption keep your assets secure.</p>
          </div>

          <div className="bg-graphite/20 backdrop-blur-sm rounded-2xl border border-graphite/30 p-6 hover:border-electric-teal/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-electric-teal mr-3" />
              <h4 className="text-lg font-semibold text-text-primary">Lightning Fast</h4>
            </div>
            <p className="text-text-muted">Instant transactions and real-time balance updates across all platforms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;