import React, { useEffect, useRef } from 'react';
import { BookOpen, ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (circleRef.current) {
        const scrollPosition = window.scrollY;
        circleRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div 
        ref={circleRef} 
        className="absolute top-1/4 right-[5%] w-80 h-80 rounded-full bg-wellness-sky/30 blur-3xl opacity-60"
      />
      <div className="absolute bottom-1/4 left-[10%] w-64 h-64 rounded-full bg-wellness-sage/30 blur-3xl opacity-60" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in-left">
            <span className="inline-block mb-3 px-3 py-1 bg-wellness-sand rounded-full text-sm font-medium">
              Your Journey to Well-being
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight text-balance">
              Discover Your Path to <span className="text-gradient">Mindful Growth</span>
            </h1>

            <p className="text-lg md:text-xl text-wellness-slate max-w-xl mx-auto lg:mx-0 mb-8">
              A transformative guide to personal wellness, mindfulness, and self-discovery that helps you create lasting positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#cta" className="btn-primary">
                <BookOpen className="mr-2 h-5 w-5" />
                Get the eBook
              </a>
              <a href="#about" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in-right">
            <div className="relative">
              {/* Book mockup */}
              <div className="relative w-64 md:w-80 h-[400px] md:h-[500px] glass-card p-4 shadow-xl hover-lift">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-wellness-azure/20 to-wellness-sage/20" />
                <div className="h-full w-full bg-white/90 rounded-md flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-sm text-wellness-slate">DISCOVER</span>
                  <h3 className="text-2xl font-serif font-semibold mt-2 mb-4">Mindful Growth</h3>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-wellness-sky/50 flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <p className="text-sm text-wellness-slate mt-4">A guide to personal transformation and well-being</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -left-4 top-1/4 w-8 h-8 rounded-full bg-wellness-sage animate-float" />
              <div className="absolute -right-6 bottom-1/3 w-12 h-12 rounded-full bg-wellness-azure/30 animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute left-1/2 -bottom-6 w-10 h-10 rounded-full bg-wellness-sand animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-wellness-slate mb-2">Scroll to explore</span>
          <ArrowDown className="h-5 w-5 text-wellness-slate animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
