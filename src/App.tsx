import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
// Importa tus componentes
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ChapterPreview from './components/ChapterPreview';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const HomePage = () => (
  <div>
    <NavBar />
    <HeroSection />
    <AboutSection />
    <ChapterPreview />
    <Testimonials />
    <CTASection />
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Agrega más rutas si tienes páginas en src/pages/ */}
    </Routes>
  );
};

export default App;