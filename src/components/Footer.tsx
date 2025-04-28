import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wellness-charcoal text-white py-12">
      <div className="section-container py-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Mindful Growth</h3>
            <p className="text-white/70 text-sm max-w-xs">
              A comprehensive guide to personal wellness, mindfulness, and self-discovery to help you create lasting positive change.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-white/60">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#chapters" className="text-white/70 hover:text-white transition-colors text-sm">Chapters</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-white transition-colors text-sm">Testimonials</a></li>
              <li><a href="#cta" className="text-white/70 hover:text-white transition-colors text-sm">Get eBook</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-white/60">Contact</h4>
            <p className="text-white/70 text-sm mb-4">
              Have questions about the eBook? Reach out to our support team.
            </p>
            <a 
              href="mailto:support@mindfulgrowth.com" 
              className="inline-block text-wellness-sky hover:text-white transition-colors text-sm"
            >
              support@mindfulgrowth.com
            </a>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Mindful Growth. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
