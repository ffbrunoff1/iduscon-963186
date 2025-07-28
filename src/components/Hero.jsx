import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = e => {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-brand-light-gray overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-blue-50/50 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-tight mb-4"
          >
            Construindo o Futuro com <br />
            <span className="gradient-text">Excelência e Inovação</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Qualidade e compromisso em cada projeto. A Iduscon transforma suas
            ideias em realidade com soluções de construção de ponta.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Transforme seu Projeto em Realidade
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl h-32 bg-gradient-to-t from-brand-light-gray to-transparent pointer-events-none"></div>
    </section>
  );
}
