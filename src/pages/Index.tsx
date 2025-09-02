import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import ScrollingDollars from "@/components/ScrollingDollars";

const Index = () => {
  const sections = [
    { id: "about", label: "About Me" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact Me" }
  ];

  return (
    <main className="min-h-screen font-sans relative">
      <Navigation sections={sections} />
      <ScrollingDollars />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
