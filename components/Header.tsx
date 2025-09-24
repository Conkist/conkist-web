'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, scale } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGamesOpen, setIsGamesOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-full_stroke.svg" 
              alt="Conkist" 
              width={120}
              height={32}
              priority
              className="h-8 w-auto scale-[3]"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              App
            </Link>
            <div className="relative">
              <button
                className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none"
                onClick={() => setIsGamesOpen(!isGamesOpen)}
                onBlur={() => setTimeout(() => setIsGamesOpen(false), 200)}
              >
                Games
              </button>
              {isGamesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
                  <Link 
                    href="/games/trashy-racers" 
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => setIsGamesOpen(false)}
                  >
                    Trashy Racers
                  </Link>
                </div>
              )}
            </div>
            
            {/* CTA Button */}
            <a 
              href="https://app.conkist.me" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Entrar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 border-t pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Logo
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                App
              </Link>
              <div>
                <button
                  className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none w-full text-left"
                  onClick={() => setIsGamesOpen(!isGamesOpen)}
                >
                  Games
                </button>
                {isGamesOpen && (
                  <div className="mt-2 ml-4">
                    <Link 
                      href="/games/trashy-racers" 
                      className="block text-gray-500 hover:text-blue-600 transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsGamesOpen(false);
                      }}
                    >
                      Trashy Racers
                    </Link>
                  </div>
                )}
              </div>
              <a 
                href="https://app.conkist.me" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition-colors shadow-md hover:shadow-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}