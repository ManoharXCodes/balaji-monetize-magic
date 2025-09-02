import React, { useEffect } from 'react';
import { initSectionAnimations } from '@/animations/sectionAnimations';

const AboutSection = () => {
  useEffect(() => {
    initSectionAnimations();
  }, []);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <h2 className="section-heading">
          🚀 Who I Am
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative">
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-gold rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-copper/30 rounded-full opacity-30 blur-xl"></div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                I'm <span className="gradient-text font-semibold">Pothala Balaji</span>, a YouTube policy and monetization expert with deep
                experience working on the <span className="text-brand-copper font-semibold">YouTube Partner Program (YPP)</span> through a
                Google project (Trust & Safety).
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Over the past few years, I've helped <span className="gradient-text font-semibold">500+ creators</span> successfully 
                monetize their channels — with over <span className="gradient-text font-semibold">20,000 channels</span> monetized 
                under my guidance.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-brand-copper mb-4">✨ My Expertise</h3>
                  <ul className="space-y-3 text-brand-silver">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1">▪</span>
                      <span>YouTube Partner Program policies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1">▪</span>
                      <span>Appeal writing and strategy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1">▪</span>
                      <span>Content optimization for monetization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1">▪</span>
                      <span>Policy compliance auditing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-brand-copper mb-4">🎯 My Mission</h3>
                  <p className="text-brand-silver leading-relaxed">
                    To help content creators navigate YouTube's complex monetization requirements and 
                    build sustainable revenue streams from their passion projects. Every creator deserves 
                    to be rewarded for their hard work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;