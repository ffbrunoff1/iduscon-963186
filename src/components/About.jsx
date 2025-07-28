import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const aboutImageUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-site.jpg';

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const features = [
    {
      icon: <Target size={32} className="text-brand-blue" />,
      title: 'Nossa Missão',
      description:
        'Entregar projetos de construção que superem as expectativas, combinando inovação, qualidade e sustentabilidade para criar valor duradouro para nossos clientes e comunidades.',
    },
    {
      icon: <Building size={32} className="text-brand-blue" />,
      title: 'Nossa Visão',
      description:
        'Ser a empresa de construção referência no mercado, reconhecida pela excelência operacional, compromisso com a segurança e capacidade de transformar desafios complexos em marcos de sucesso.',
    },
    {
      icon: <ShieldCheck size={32} className="text-brand-blue" />,
      title: 'Nossos Valores',
      description:
        'Integridade, compromisso com o cliente, segurança em primeiro lugar e busca contínua pela inovação são os pilares que guiam todas as nossas ações e decisões.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Sobre a Iduscon
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Iduscon é uma empresa dedicada ao setor de construção, oferecendo
            expertise e soluções inovadoras para diversas necessidades de
            infraestrutura e edificação. Nosso compromisso é com a entrega de
            resultados excepcionais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src={aboutImageUrl}
              alt="Canteiro de obras da Iduscon"
              className="w-full h-auto rounded-2xl shadow-soft object-cover aspect-video"
            />
          </motion.div>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={featureVariants}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
