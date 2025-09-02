import { useState, useEffect } from 'react';

interface DollarSymbol {
  id: number;
  x: number;
  y: number;
  symbol: string;
  animationType: 'float' | 'drift';
  opacity: number;
}

const ScrollingDollars = () => {
  const [dollars, setDollars] = useState<DollarSymbol[]>([]);
  const [scrollY, setScrollY] = useState(0);

  const dollarSymbols = ['💵', '💰', '💎', '🤑', '💸', '🏦', '💳'];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Generate new dollars based on scroll progress
      if (Math.abs(currentScrollY - scrollY) > 100) {
        generateDollars(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const generateDollars = (currentScroll: number) => {
    const newDollars: DollarSymbol[] = [];
    const dollarsToCreate = Math.floor(Math.random() * 3) + 2; // 2-4 dollars
    
    for (let i = 0; i < dollarsToCreate; i++) {
      const dollar: DollarSymbol = {
        id: Date.now() + Math.random(),
        x: Math.random() * (window.innerWidth - 100) + 50,
        y: currentScroll + window.innerHeight * Math.random(),
        symbol: dollarSymbols[Math.floor(Math.random() * dollarSymbols.length)],
        animationType: Math.random() > 0.5 ? 'float' : 'drift',
        opacity: 0.7 + Math.random() * 0.3
      };
      newDollars.push(dollar);
    }
    
    setDollars(prev => {
      // Keep only recent dollars (within viewport range)
      const filtered = prev.filter(d => 
        Math.abs(d.y - currentScroll) < window.innerHeight * 2
      );
      return [...filtered, ...newDollars].slice(-15); // Max 15 dollars
    });
  };

  // Clean up dollars periodically
  useEffect(() => {
    const cleanup = setInterval(() => {
      setDollars(prev => prev.filter(d => 
        Math.abs(d.y - scrollY) < window.innerHeight * 3
      ));
    }, 2000);

    return () => clearInterval(cleanup);
  }, [scrollY]);

  return (
    <>
      {dollars.map((dollar) => (
        <div
          key={dollar.id}
          className={`dollar-symbol ${dollar.animationType}`}
          style={{
            left: `${dollar.x}px`,
            top: `${dollar.y}px`,
            opacity: dollar.opacity,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        >
          {dollar.symbol}
        </div>
      ))}
      
      {/* Section transition dollars */}
      <SectionTransitionDollars scrollY={scrollY} />
    </>
  );
};

const SectionTransitionDollars = ({ scrollY }: { scrollY: number }) => {
  const [transitionDollars, setTransitionDollars] = useState<DollarSymbol[]>([]);
  
  useEffect(() => {
    // Calculate section positions (approximate)
    const sections = ['hero', 'about', 'services', 'testimonials', 'contact'];
    const sectionHeight = window.innerHeight;
    const currentSection = Math.floor(scrollY / sectionHeight);
    
    // Create flowing dollars at section transitions
    if (scrollY % sectionHeight > sectionHeight * 0.8 && scrollY % sectionHeight < sectionHeight * 0.95) {
      const flowDollars = Array.from({ length: 5 }, (_, i) => ({
        id: Date.now() + i,
        x: 100 + i * (window.innerWidth - 200) / 4,
        y: scrollY + window.innerHeight * 0.5,
        symbol: '💰',
        animationType: 'drift' as const,
        opacity: 0.9
      }));
      
      setTransitionDollars(flowDollars);
      
      // Clear after animation
      setTimeout(() => setTransitionDollars([]), 3000);
    }
  }, [scrollY]);

  return (
    <>
      {transitionDollars.map((dollar) => (
        <div
          key={dollar.id}
          className="dollar-symbol drift"
          style={{
            left: `${dollar.x}px`,
            top: `${dollar.y}px`,
            opacity: dollar.opacity,
            fontSize: '3rem',
            animationDuration: '2s'
          }}
        >
          {dollar.symbol}
        </div>
      ))}
    </>
  );
};

export default ScrollingDollars;
