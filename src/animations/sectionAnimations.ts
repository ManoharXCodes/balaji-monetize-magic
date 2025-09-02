import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const initSectionAnimations = () => {
  // Animate section headings
  gsap.utils.toArray('.section-heading').forEach((heading: any) => {
    gsap.fromTo(heading, {
      opacity: 0,
      y: 50,
      scale: 0.8
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Animate cards with stagger
  gsap.utils.toArray('.glass-card, .service-card, .testimonial-card').forEach((card: any) => {
    gsap.fromTo(card, {
      opacity: 0,
      y: 30,
      rotateX: 15
    }, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Parallax effect for sections
  gsap.utils.toArray('section').forEach((section: any, index) => {
    const background = section.querySelector('.section-bg');
    if (background) {
      gsap.to(background, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }
  });
};