'use client';

import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-blue-600 text-white py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Sobre a Conkist
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Somos uma empresa de desenvolvimento de jogos mobile focada em criar experiências únicas e inovadoras.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
            <p className="text-lg text-gray-600 mb-6">
              Conectar pessoas através de experiências de jogo inovadoras e envolventes. 
              Acreditamos que os jogos têm o poder de unir comunidades e criar momentos únicos.
            </p>
            <p className="text-lg text-gray-600">
              Nossa paixão é desenvolver jogos que não apenas entretêm, mas também 
              inspiram e conectam jogadores ao redor do mundo.
            </p>
          </motion.div>
          
          <motion.div
            className="h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg"
            variants={itemVariants}
          />
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="bg-white py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-12"
            variants={itemVariants}
          >
            Nossos Valores
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-3">Inovação</h3>
              <p className="text-gray-600">
                Sempre buscamos novas formas de surpreender e engajar nossos jogadores.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-3">Qualidade</h3>
              <p className="text-gray-600">
                Comprometidos com a excelência em cada detalhe dos nossos jogos.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-3">Comunidade</h3>
              <p className="text-gray-600">
                Valorizamos nossa comunidade de jogadores e seus feedbacks.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}