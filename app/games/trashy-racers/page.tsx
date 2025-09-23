'use client';

import { motion } from 'framer-motion';

export default function TrashyRacers() {
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
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Trashy Racers
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Um jogo de corrida emocionante com carros personalizáveis e pistas desafiadoras.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
              Baixar Agora
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-8 rounded-lg transition-colors">
              Ver Trailer
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Game Info */}
      <motion.section
        className="container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre o Jogo</h2>
            <p className="text-lg text-gray-600 mb-6">
              Trashy Racers é um jogo de corrida que combina velocidade, estratégia e 
              personalização. Crie seu carro dos sonhos e participe de corridas emocionantes 
              em pistas únicas ao redor do mundo.
            </p>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Racing</span>
              <span className="text-gray-600">⭐ 4.5/5</span>
              <span className="text-gray-600">📱 10K+ downloads</span>
            </div>
          </motion.div>
          
          <motion.div
            className="h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center"
            variants={itemVariants}
          >
            <span className="text-white text-2xl font-bold">Game Screenshot</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Features */}
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
            Características
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center p-6 border rounded-lg"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏎️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Multiplayer Online</h3>
              <p className="text-gray-600">
                Compita contra jogadores do mundo todo em tempo real.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 border rounded-lg"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Carros Personalizáveis</h3>
              <p className="text-gray-600">
                Customize seu veículo com centenas de opções.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 border rounded-lg"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏁</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Múltiplas Pistas</h3>
              <p className="text-gray-600">
                Explore pistas desafiadoras em diferentes ambientes.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 border rounded-lg"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sistema de Ranking</h3>
              <p className="text-gray-600">
                Suba no ranking e torne-se o melhor piloto.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Platforms */}
      <motion.section
        className="container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Disponível em</h2>
          <div className="flex justify-center gap-8">
            <div className="bg-black text-white px-6 py-3 rounded-lg">
              📱 iOS
            </div>
            <div className="bg-green-600 text-white px-6 py-3 rounded-lg">
              🤖 Android
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}