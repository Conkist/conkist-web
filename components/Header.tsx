'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      className="bg-white shadow-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Conkist
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              Sobre
            </Link>
            <div className="relative group">
              <span className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                Jogos
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link 
                  href="/games/trashy-racers" 
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Trashy Racers
                </Link>
              </div>
            </div>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contato
            </Link>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Baixar App
          </button>
        </div>
      </nav>
    </motion.header>
  );
}