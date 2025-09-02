import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  const phrases = [
    "YouTube Monetization Specialist",
    "YPP Appeals Expert", 
    "Trusted by 20,000+ Channels"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen text-center section-padding"
    >
      <div className="container-custom">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-brand-copper/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-brand-gold/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-brand-copper/30 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10">
          <h1 className="hero-title mb-8 fade-in">
            Balaji
          </h1>
          
          <div className="h-20 flex items-center justify-center mb-12">
            <h2 
              key={textIndex}
              className="hero-subtitle slide-up"
            >
              {phrases[textIndex]}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#services" className="btn-primary">
              🚀 Get My Channel Approved
            </a>
            <a href="#about" className="btn-secondary">
              📖 Learn More About Me
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-card p-6">
              <div className="text-3xl md:text-4xl font-bold gradient-text">500+</div>
              <div className="text-brand-silver mt-2">Creators Helped</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl md:text-4xl font-bold gradient-text">20,000+</div>
              <div className="text-brand-silver mt-2">Channels Monetized</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl md:text-4xl font-bold gradient-text">95%</div>
              <div className="text-brand-silver mt-2">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;