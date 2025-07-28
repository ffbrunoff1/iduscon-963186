import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753712706758_0.png';
  const currentYear = new Date().getFullYear();

  const scrollToTop = e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.footer
      className="bg-brand-dark text-brand-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" onClick={scrollToTop} className="mb-4">
              <img
                src={logoUrl}
                alt="Iduscon Logo"
                className="h-14 w-auto bg-white p-2 rounded-md"
              />
            </a>
            <p className="text-gray-400 max-w-xs">
              Construindo o futuro com excelência, inovação e compromisso em
              cada projeto.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-brand-blue transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-brand-blue transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-brand-blue transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Telefone: +55 44 99104-0774</li>
              <li>E-mail: ffbrunoff@yahoo.com.br</li>
              <li>Endereço: Padre Lebret, 801, G05 Bloco 03</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Iduscon. Todos os direitos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}
