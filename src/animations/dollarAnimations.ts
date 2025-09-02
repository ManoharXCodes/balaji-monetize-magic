import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface DollarElement {
  id: string;
  element: HTMLElement;
  timeline: gsap.core.Timeline;
}

export class DollarAnimationSystem {
  private dollars: DollarElement[] = [];
  private container: HTMLElement | null = null;
  private dollarSymbols = ['💵', '💰', '💎', '🤑', '💸', '🏦', '💳'];

  constructor(containerSelector: string) {
    this.container = document.querySelector(containerSelector);
    this.setupScrollTriggers();
  }

  private createDollar(x: number, y: number): DollarElement {
    const dollarEl = document.createElement('div');
    const id = `dollar-${Date.now()}-${Math.random()}`;
    
    dollarEl.id = id;
    dollarEl.className = 'fixed pointer-events-none z-10 text-4xl transition-all duration-300';
    dollarEl.style.left = `${x}px`;
    dollarEl.style.top = `${y}px`;
    dollarEl.style.color = '#10b981'; // emerald-500
    dollarEl.style.filter = 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.6))';
    dollarEl.textContent = this.dollarSymbols[Math.floor(Math.random() * this.dollarSymbols.length)];
    
    document.body.appendChild(dollarEl);

    // Create GSAP timeline for paper-like floating animation
    const timeline = gsap.timeline({ repeat: -1, yoyo: true });
    
    // Paper floating effect with random variations
    timeline.to(dollarEl, {
      duration: 3 + Math.random() * 2,
      y: `-=${20 + Math.random() * 30}`,
      x: `+=${(Math.random() - 0.5) * 40}`,
      rotation: (Math.random() - 0.5) * 15,
      ease: "power2.inOut"
    });

    // Add gentle swaying motion
    gsap.to(dollarEl, {
      duration: 2 + Math.random(),
      x: `+=${(Math.random() - 0.5) * 20}`,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return { id, element: dollarEl, timeline };
  }

  private setupScrollTriggers() {
    // Create dollars on scroll progress
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        
        // Create dollars based on scroll velocity
        if (Math.abs(velocity) > 500 && Math.random() > 0.7) {
          this.spawnDollar();
        }
      }
    });

    // Section transition effects
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => this.createSectionTransition(section),
        onLeave: () => this.cleanupSectionDollars(section)
      });
    });
  }

  private spawnDollar() {
    if (this.dollars.length >= 12) {
      this.removeDollar(this.dollars[0]);
    }

    const x = Math.random() * (window.innerWidth - 100) + 50;
    const y = window.scrollY + window.innerHeight * (0.2 + Math.random() * 0.6);
    
    const dollar = this.createDollar(x, y);
    this.dollars.push(dollar);

    // Auto cleanup after 8 seconds
    setTimeout(() => {
      this.removeDollar(dollar);
    }, 8000);
  }

  private createSectionTransition(section: Element) {
    const rect = section.getBoundingClientRect();
    const sectionY = window.scrollY + rect.top;
    
    // Create flowing line of dollars across section
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const x = (window.innerWidth / 6) * (i + 1);
        const y = sectionY + rect.height * 0.1;
        
        const dollar = this.createDollar(x, y);
        
        // Flow animation across section
        gsap.to(dollar.element, {
          duration: 2.5,
          x: x + (Math.random() - 0.5) * 200,
          y: y + rect.height * 0.8,
          rotation: 360 * (Math.random() > 0.5 ? 1 : -1),
          scale: 0.8 + Math.random() * 0.4,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(dollar.element, {
              duration: 1,
              opacity: 0,
              scale: 0.5,
              onComplete: () => this.removeDollar(dollar)
            });
          }
        });
        
        this.dollars.push(dollar);
      }, i * 200);
    }
  }

  private cleanupSectionDollars(section: Element) {
    // Fade out dollars in section area
    this.dollars.forEach(dollar => {
      const rect = dollar.element.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      
      if (rect.top >= sectionRect.top && rect.bottom <= sectionRect.bottom) {
        gsap.to(dollar.element, {
          duration: 0.8,
          opacity: 0,
          scale: 0.3,
          onComplete: () => this.removeDollar(dollar)
        });
      }
    });
  }

  private removeDollar(dollar: DollarElement) {
    const index = this.dollars.findIndex(d => d.id === dollar.id);
    if (index > -1) {
      dollar.timeline.kill();
      dollar.element.remove();
      this.dollars.splice(index, 1);
    }
  }

  public destroy() {
    this.dollars.forEach(dollar => this.removeDollar(dollar));
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}