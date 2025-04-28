import React, { useRef, useEffect } from 'react';
import { BookOpen, Check } from 'lucide-react';

const CTASection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && containerRef.current) {
          containerRef.current.classList.add('is-visible');
        }
      });
    }, observerOptions);
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);
  
  const features = [
    "200+ pages of actionable content",
    "30-day mindfulness program",
    "Guided meditation scripts",
    "Journaling prompts and templates",
    "Lifetime access to updates",
    "Bonus: Audio meditations"
  ];

  return (
    <section id="cta" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-wellness-sand/50" />
      
      <div 
        ref={containerRef}
        className="section-container animate-on-scroll"
      >
        <div className="glass-card overflow-hidden rounded-2xl shadow-lg">
          <div 
            className="p-8 md:p-12 bg-gradient-to-br from-wellness-sky to-wellness-azure text-white relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -ml-32 -mb-32" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                  Begin Your Mindful Journey Today
                </h2>
                <p className="text-white/90 mb-6 max-w-xl">
                  Take the first step toward a more balanced, mindful, and fulfilling life with our comprehensive guide to personal growth.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="rounded-full bg-white/20 w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/3 bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col">
                <div className="text-center mb-4">
                  <span className="inline-block text-sm bg-white/20 rounded-full px-3 py-1 mb-2">
                    Special Launch Offer
                  </span>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-white/60 text-lg line-through">$29.99</span>
                    <span className="text-3xl font-semibold">$19.99</span>
                  </div>
                  <span className="text-sm text-white/80 block mt-1">One-time payment, lifetime access</span>
                </div>
                
                <a 
                  href="#" 
                  className="bg-white text-wellness-azure font-medium py-3 px-6 rounded-lg flex items-center justify-center hover:bg-wellness-sand transition-colors duration-300 mb-4"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Get the eBook Now
                </a>
                
                <span className="text-xs text-center text-white/70">
                  30-day money-back guarantee. <br />No questions asked.
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-serif font-medium mb-6">
            Start Your Transformation Today
          </h3>
          <p className="text-wellness-slate mb-8">
            Join thousands of readers who have already begun their journey to mindful living and personal growth. The path to a more balanced life starts with a single step.
          </p>
          <a 
            href="#" 
            className="btn-primary inline-block mx-auto"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Get Instant Access
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
