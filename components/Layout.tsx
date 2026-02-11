import React from 'react';
import { IMAGES } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  simpleHeader?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, simpleHeader = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-neutral-gray sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="https://deambitiebar.nl/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src={IMAGES.logo} alt="De Ambitie Bar Logo" className="h-8 md:h-12 object-contain" />
          </a>
          {!simpleHeader && (
            <a href="https://deambitiebar.nl/over-ons/" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block text-black font-bold text-sm tracking-wide hover:text-primary-yellow transition-colors italic">
              De plek waar groei en ambitie samenkomen
            </a>
          )}
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-black text-white py-12 border-t-4 border-primary-yellow">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Logo in footer - adjusted based on feedback */}
          <div className="mb-6 flex justify-center">
            <img src={IMAGES.logo} alt="Logo" className="h-12 object-contain brightness-0 invert" />
          </div>

          <p className="text-sm opacity-60 mb-6 font-sans">
            &copy; {new Date().getFullYear()} De Ambitie Bar. Alle rechten voorbehouden.
          </p>
          <div className="flex justify-center gap-8 text-sm font-medium mb-8 font-sans">
            <a href="https://deambitiebar.nl/privacy-policy/" className="hover:text-primary-yellow transition-colors">Privacy Policy</a>
            <a href="https://deambitiebar.nl/contact/" className="hover:text-primary-yellow transition-colors">Contact</a>
          </div>
          <div className="text-sm opacity-60 max-w-2xl mx-auto italic mt-8 font-title">
            "Wij leveren professionals ervaren genoeg om te weten wat werkt en jong genoeg om het anders te doen."
          </div>
        </div>
      </footer>
    </div>
  );
};