import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (callback: (context: gsap.Context) => void, dependencies: any[] = []) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(ctx);
    }, ref.current);

    return () => ctx.revert();
  }, dependencies);

  return ref;
};

export const useScrollAnimation = (
  selector: string,
  animation: gsap.TweenVars,
  trigger?: ScrollTrigger.Vars
) => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);
    
    elements.forEach((element) => {
      gsap.fromTo(element as Element, 
        { opacity: 0, y: 50 },
        {
          ...animation,
          scrollTrigger: {
            trigger: element as Element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
            ...trigger
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, animation, trigger]);
};