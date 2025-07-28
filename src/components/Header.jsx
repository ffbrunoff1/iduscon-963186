import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753712706758_0.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-white/95 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a
          href="#home"
          onClick={e => scrollToSection(e, '#home')}
          className="flex items-center"
        >
          <img src={logoUrl} alt="Iduscon Logo" className="h-12 w-auto" />
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={e => scrollToSection(e, link.href)}
              className="text-brand-dark font-medium hover:text-brand-blue transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={e => scrollToSection(e, '#contact')}
            className="bg-brand-blue text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            Fale Conosco
          </a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-dark"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-white absolute top-full left-0 w-full shadow-lg"
          >
            <nav className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => scrollToSection(e, link.href)}
                  className="text-brand-dark text-lg font-medium hover:text-brand-blue transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={e => scrollToSection(e, '#contact')}
                className="bg-brand-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
