import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Chapters', href: '#chapters' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Get eBook', href: '#cta' }
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="section-container py-0">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-xl md:text-2xl font-serif font-semibold text-wellness-charcoal hover:opacity-90 transition-opacity"
          >
            Mindful Growth
          </a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="font-medium text-lg text-wellness-slate hover:text-wellness-azure transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-wellness-slate" />
            ) : (
              <Menu className="h-6 w-6 text-wellness-slate" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-fade-in">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="block py-3 px-8 font-medium text-wellness-slate hover:text-wellness-azure hover:bg-wellness-ivory transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
