import React, { useEffect, useRef } from 'react';
import { BookOpen, Heart, Brain, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const whatsInsideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    benefitRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    if (whatsInsideRef.current) observer.observe(whatsInsideRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      benefitRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      if (whatsInsideRef.current) observer.unobserve(whatsInsideRef.current);
    };
  }, []);

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-wellness-azure" />,
      title: "Emotional Wellness",
      description:
        "Develop emotional resilience and practice self-compassion to navigate life's challenges with ease.",
    },
    {
      icon: <Brain className="h-8 w-8 text-wellness-azure" />,
      title: "Mental Clarity",
      description: "Cultivate mindfulness techniques that promote clear thinking and reduce mental clutter.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-wellness-azure" />,
      title: "Personal Growth",
      description: "Discover practical strategies for continuous personal development and transformation.",
    },
    {
      icon: <Award className="h-8 w-8 text-wellness-azure" />,
      title: "Balanced Living",
      description: "Learn to create harmony between your personal, professional, and spiritual dimensions.",
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-wellness-ivory">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-3 px-3 py-1 bg-wellness-sand rounded-full text-sm font-medium">
            About the eBook
          </span>
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-semibold mb-6 animate-on-scroll">
            Transform Your Life Through <span className="text-gradient">Mindful Practices</span>
          </h2>
          <p ref={paragraphRef} className="text-lg text-wellness-slate animate-on-scroll">
            This comprehensive guide combines ancient wisdom with modern science to help you develop
            sustainable habits for well-being and personal growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                benefitRefs.current[index] = el; // Corrección aquí
              }}
              className="animate-on-scroll glass-card p-6 hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 bg-wellness-sky/20 w-16 h-16 rounded-full flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">{benefit.title}</h3>
              <p className="text-wellness-slate">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div
          ref={whatsInsideRef}
          className="mt-16 p-8 glass-card bg-gradient-to-r from-wellness-sky/30 to-wellness-sage/30 animate-on-scroll"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 text-center">
              <div className="inline-block rounded-full bg-white/60 p-5">
                <BookOpen className="h-10 w-10 text-wellness-azure" />
              </div>
              <h3 className="text-2xl font-serif font-medium mt-4">What's Inside</h3>
            </div>
            <div className="w-full md:w-2/3">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="rounded-full bg-wellness-sand h-6 w-6 flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Foundations of Mindfulness</h4>
                    <p className="text-wellness-slate text-sm">
                      Learn the core principles that will transform your daily practice.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-wellness-sand h-6 w-6 flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Emotional Intelligence</h4>
                    <p className="text-wellness-slate text-sm">
                      Discover techniques to recognize, understand, and manage your emotions effectively.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-wellness-sand h-6 w-6 flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Habits of Well-being</h4>
                    <p className="text-wellness-slate text-sm">
                      Build sustainable daily practices that promote health and happiness.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-wellness-sand h-6 w-6 flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-medium">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Personal Transformation</h4>
                    <p className="text-wellness-slate text-sm">
                      Create a roadmap for lasting change and continuous growth.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;