'use client';

import { motion } from 'framer-motion';

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <motion.section
        className="container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Bem-vindo à <span className="text-blue-600">Conkist</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Desenvolvemos jogos mobile inovadores que conectam pessoas e criam experiências únicas.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Baixar Agora
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Ver Jogos
            </button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          variants={itemVariants}
        >
          Nossos Jogos
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Trashy Racers</h3>
              <p className="text-gray-600 mb-4">Um jogo de corrida emocionante com carros personalizáveis.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Saiba Mais
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
