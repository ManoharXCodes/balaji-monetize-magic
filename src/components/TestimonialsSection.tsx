const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I had no hope after two YPP rejections. Balaji not only helped fix the issues but got my channel approved in 3 days!",
      name: "Rahul Vlogs",
      location: "India",
      rating: 5
    },
    {
      quote: "Very professional. Fixed my duplication issue and explained everything clearly. Worth every dollar!",
      name: "Anna Creates", 
      location: "USA",
      rating: 5
    },
    {
      quote: "My channel was stuck under review for months. Balaji's guidance got it approved in less than a week!",
      name: "Mark Tech",
      location: "UK", 
      rating: 5
    },
    {
      quote: "The best investment I made for my YouTube journey. Honest, fast, and effective.",
      name: "Sophia Music",
      location: "Canada",
      rating: 5
    },
    {
      quote: "After 4 failed attempts, Balaji helped me understand exactly what YouTube wanted. Approved on first try!",
      name: "Carlos Gaming",
      location: "Brazil",
      rating: 5
    },
    {
      quote: "Professional service with clear communication. My cooking channel is now monetized thanks to his expertise.",
      name: "Marie Cuisine",
      location: "France",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={i < rating ? "text-brand-gold" : "text-brand-cosmic-gray"}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="container-custom">
        <h2 className="section-heading">
          🗣️ Creator Feedback
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-brand-silver leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-brand-mystic-indigo/30 pt-4">
                <div className="font-semibold gradient-text">
                  {testimonial.name}
                </div>
                <div className="text-brand-cosmic-gray text-sm">
                  📍 {testimonial.location}
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">
                💬
              </div>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16">
          <div className="glass-card p-8 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-8">
              📊 Proven Track Record
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-brand-copper">500+</div>
                <div className="text-brand-silver text-sm">Happy Creators</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-copper">20K+</div>
                <div className="text-brand-silver text-sm">Channels Monetized</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-copper">50+</div>
                <div className="text-brand-silver text-sm">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-copper">24/7</div>
                <div className="text-brand-silver text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;