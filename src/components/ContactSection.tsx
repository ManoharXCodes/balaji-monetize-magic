const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <h2 className="section-heading">
          📬 Let's Fix Your Channel
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-gold rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-brand-copper/20 rounded-full opacity-20 blur-2xl"></div>
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl mb-8 text-brand-silver">
                Ready to monetize your channel the <span className="gradient-text font-semibold">right way</span>?
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-brand-copper mb-4">📧 Contact Information</h3>
                  <div className="space-y-3">
                    <a 
                      href="mailto:ytappealspecialist@gmail.com" 
                      className="flex items-center gap-3 text-brand-silver hover:text-brand-copper transition-colors group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">📧</span>
                      <span className="underline">ytappealspecialist@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-brand-silver">
                      <span className="text-2xl">⏰</span>
                      <span>Response within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3 text-brand-silver">
                      <span className="text-2xl">🌍</span>
                      <span>Serving creators worldwide</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-brand-copper mb-4">🚀 What Happens Next?</h3>
                  <ol className="space-y-3 text-brand-silver">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold font-bold">1.</span>
                      <span>Send me your channel link and describe your issue</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold font-bold">2.</span>
                      <span>I'll perform a free initial assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold font-bold">3.</span>
                      <span>Get a custom strategy and timeline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold font-bold">4.</span>
                      <span>Watch your channel get approved!</span>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="mailto:ytappealspecialist@gmail.com?subject=YouTube%20Channel%20Monetization%20Help" 
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <span>💼</span>
                  Start My Channel Review
                </a>
                <a 
                  href="#testimonials" 
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <span>⭐</span>
                  Read More Reviews
                </a>
              </div>

              <div className="mt-12 p-6 bg-gradient-cosmic rounded-2xl border border-brand-copper/30">
                <p className="text-lg font-semibold gradient-text mb-2">
                  💡 Free Quick Tip
                </p>
                <p className="text-brand-silver">
                  Most YPP rejections happen due to reused content issues. Make sure your videos add 
                  substantial original commentary, editing, or educational value beyond the source material.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-brand-mystic-indigo/30 text-center">
        <div className="text-brand-cosmic-gray">
          <p>© 2024 Balaji - YouTube Monetization Specialist</p>
          <p className="text-sm mt-2">Helping creators build sustainable revenue streams since 2020</p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;