import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Trowel, Home, Building2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building2 className="h-10 w-10 text-brand-blue" />,
      title: 'Construção Comercial',
      description:
        'Desenvolvemos projetos comerciais de grande escala, desde edifícios corporativos a complexos de varejo, com foco em funcionalidade e design moderno.',
    },
    {
      icon: <Home className="h-10 w-10 text-brand-blue" />,
      title: 'Edificações Residenciais',
      description:
        'Criamos residências e condomínios que combinam conforto, segurança e qualidade de vida, utilizando materiais de alta performance e acabamentos superiores.',
    },
    {
      icon: <HardHat className="h-10 w-10 text-brand-blue" />,
      title: 'Projetos de Infraestrutura',
      description:
        'Executamos obras de infraestrutura essenciais para o desenvolvimento urbano e industrial, garantindo durabilidade e conformidade com as normas técnicas.',
    },
    {
      icon: <Trowel className="h-10 w-10 text-brand-blue" />,
      title: 'Reformas e Retrofitting',
      description:
        'Modernizamos e revitalizamos estruturas existentes, aplicando tecnologias atuais para melhorar a eficiência, segurança e valor estético dos imóveis.',
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Nossas Áreas de Atuação
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços de construção,
            adaptados para atender às necessidades específicas de cada cliente
            com máxima eficiência e qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-brand-white p-8 rounded-2xl shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
            >
              <div className="mb-6 bg-blue-100 rounded-full p-4 w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
