import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const ChapterPreview: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(0);
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
  
  const chapters = [
    {
      number: "01",
      title: "The Journey Begins",
      excerpt: "The path to personal growth starts with a single step. Discover how mindfulness can transform your perception of yourself and the world around you.",
      color: "from-wellness-sky to-wellness-azure"
    },
    {
      number: "02",
      title: "Emotional Intelligence",
      excerpt: "Learn to navigate your emotions with clarity and purpose. This chapter explores techniques to recognize patterns and transform emotional reactions.",
      color: "from-wellness-sage to-wellness-sky"
    },
    {
      number: "03",
      title: "Building New Habits",
      excerpt: "Create lasting change through intentional habit formation. We'll explore the science of habits and how to leverage it for personal transformation.",
      color: "from-wellness-sand to-wellness-sage"
    },
    {
      number: "04",
      title: "Mindful Relationships",
      excerpt: "Discover how mindfulness can transform your connections with others, creating deeper understanding and more authentic interactions.",
      color: "from-wellness-azure to-wellness-slate"
    }
  ];
  
  const nextChapter = () => {
    setActiveChapter((prev) => (prev === chapters.length - 1 ? 0 : prev + 1));
  };
  
  const prevChapter = () => {
    setActiveChapter((prev) => (prev === 0 ? chapters.length - 1 : prev - 1));
  };

  return (
    <section id="chapters" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-wellness-sand/50" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-wellness-sand/50" />
      
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-3 px-3 py-1 bg-wellness-sand rounded-full text-sm font-medium">
            Preview the Content
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Explore the <span className="text-gradient">Chapters</span>
          </h2>
          <p className="text-lg text-wellness-slate">
            Get a glimpse of what awaits you in this transformative journey toward mindful living and personal growth.
          </p>
        </div>
        
        <div 
          ref={containerRef} 
          className="animate-on-scroll relative bg-white rounded-2xl shadow-lg border border-wellness-sand/50 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Chapter navigation sidebar */}
            <div className="w-full md:w-1/3 bg-wellness-ivory border-b md:border-b-0 md:border-r border-wellness-sand/50">
              <div className="p-6">
                <div className="flex items-center space-x-2 text-wellness-slate mb-6">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-sm font-medium">Table of Contents</span>
                </div>
                
                <ul className="space-y-1">
                  {chapters.map((chapter, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setActiveChapter(index)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center",
                          activeChapter === index
                            ? "bg-white shadow-sm text-wellness-charcoal"
                            : "hover:bg-white/50 text-wellness-slate"
                        )}
                      >
                        <span className="text-sm font-medium mr-3 opacity-60">
                          {chapter.number}
                        </span>
                        <span className="font-medium">{chapter.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Chapter content */}
            <div className="w-full md:w-2/3 p-8 md:p-12">
              <div className="relative">
                <span className="text-5xl md:text-8xl font-serif opacity-10 absolute -top-6 -left-4">
                  {chapters[activeChapter].number}
                </span>
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-serif font-medium mb-6 pl-4 border-l-4 border-wellness-azure">
                    {chapters[activeChapter].title}
                  </h3>
                  <p className="text-wellness-slate mb-8 leading-relaxed">
                    {chapters[activeChapter].excerpt}
                  </p>
                  
                  <div className="rounded-lg p-6 bg-gradient-to-br opacity-90 text-white shadow-lg relative overflow-hidden" style={{ background: `linear-gradient(to bottom right, ${chapters[activeChapter].color.split(' ')[0].replace('from-', '')} 0%, ${chapters[activeChapter].color.split(' ')[1].replace('to-', '')} 100%)` }}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-30" />
                    <div className="relative z-10">
                      <h4 className="font-medium mb-2">From this chapter you'll learn:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-white mr-2" />
                          <span>Practical techniques for daily mindfulness</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-white mr-2" />
                          <span>How to integrate these practices into your routine</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-white mr-2" />
                          <span>Ways to measure your progress and growth</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <button 
                      onClick={prevChapter}
                      className="flex items-center text-wellness-slate hover:text-wellness-azure transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5 mr-1" />
                      <span className="text-sm">Previous</span>
                    </button>
                    <button 
                      onClick={nextChapter}
                      className="flex items-center text-wellness-slate hover:text-wellness-azure transition-colors"
                    >
                      <span className="text-sm">Next</span>
                      <ChevronRight className="h-5 w-5 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterPreview;
