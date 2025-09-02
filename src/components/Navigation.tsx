import { useState, useEffect } from 'react';

interface NavigationProps {
  sections: { id: string; label: string }[];
}

const Navigation = ({ sections }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-brand-cosmic-purple/90 backdrop-blur-lg shadow-cosmic border-b border-brand-mystic-indigo/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <div className="text-3xl font-black gradient-text cursor-pointer float">
          Balaji
        </div>
        <ul className="hidden md:flex space-x-8 text-lg">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="nav-link">
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-foreground p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;