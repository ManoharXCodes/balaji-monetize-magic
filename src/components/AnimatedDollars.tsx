import { useEffect, useRef } from 'react';
import { DollarAnimationSystem } from '@/animations/dollarAnimations';

const AnimatedDollars = () => {
  const animationSystemRef = useRef<DollarAnimationSystem | null>(null);

  useEffect(() => {
    // Initialize the dollar animation system
    animationSystemRef.current = new DollarAnimationSystem('body');

    return () => {
      // Clean up on unmount
      if (animationSystemRef.current) {
        animationSystemRef.current.destroy();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default AnimatedDollars;