const ServicesSection = () => {
  const services = [
    {
      icon: "🔧",
      title: "YPP Appeal Writing & Submission",
      description: "Expert-crafted appeals that address YouTube's specific policy concerns with precision."
    },
    {
      icon: "🧠", 
      title: "Detailed Channel Audit",
      description: "Comprehensive analysis of your channel to identify and fix monetization blockers."
    },
    {
      icon: "🎯",
      title: "Reused Content & Repetition Fixes", 
      description: "Strategic solutions to transform repetitive content into unique, policy-compliant material."
    },
    {
      icon: "📋",
      title: "Monetization Reapplication Assistance",
      description: "Step-by-step guidance through the reapplication process with higher success rates."
    },
    {
      icon: "🎥",
      title: "Custom Strategy Based on Niche",
      description: "Tailored monetization strategies that work specifically for your content vertical."
    },
    {
      icon: "✅",
      title: "100% Policy-Compliant Approach",
      description: "All recommendations strictly follow YouTube's terms of service and best practices."
    }
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="container-custom">
        <h2 className="section-heading">
          💼 Services I Offer
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-copper mb-4 group-hover:text-brand-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-silver leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              🏆 Why Choose My Services?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-brand-copper">3-7 Days</div>
                <div className="text-brand-silver">Average Approval Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-copper">95%</div>
                <div className="text-brand-silver">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-copper">24/7</div>
                <div className="text-brand-silver">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;