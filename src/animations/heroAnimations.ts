import { gsap } from 'gsap';

export const initHeroAnimations = () => {
  const tl = gsap.timeline({ delay: 0.2 });
  
  // Animate hero elements on load
  tl.fromTo('.hero-title', {
    opacity: 0,
    y: 100,
    scale: 0.8
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1.2,
    ease: "power3.out"
  })
  .fromTo('.hero-subtitle', {
    opacity: 0,
    x: -50
  }, {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.6")
  .fromTo('.hero-buttons', {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.4")
  .fromTo('.hero-stats', {
    opacity: 0,
    y: 50,
    stagger: 0.1
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
  }, "-=0.4");

  // Floating animation for decorative elements
  gsap.to('.floating-element', {
    y: -20,
    duration: 3,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
    stagger: 0.5
  });

  // Text rotation animation
  const phrases = document.querySelectorAll('.rotating-text span');
  if (phrases.length > 0) {
    let currentIndex = 0;
    
    const rotateText = () => {
      gsap.to(phrases[currentIndex], {
        opacity: 0,
        x: -30,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          currentIndex = (currentIndex + 1) % phrases.length;
          gsap.fromTo(phrases[currentIndex], {
            opacity: 0,
            x: 30
          }, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      });
    };

    setInterval(rotateText, 3000);
  }
};

export const setupButtonAnimations = () => {
  // Enhanced button hover effects
  document.querySelectorAll('.animated-button').forEach(button => {
    const handleEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        y: -2,
        boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleLeave = () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        boxShadow: "0 4px 15px rgba(16, 185, 129, 0.2)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    button.addEventListener('mouseenter', handleEnter);
    button.addEventListener('mouseleave', handleLeave);
  });
};