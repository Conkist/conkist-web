'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BiLogoDiscord, BiLogoFacebook, BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="mb-4">
              <Image 
                src="/logo-full.svg" 
                alt="Conkist Studio" 
                width={240}
                height={64}
                className="h-12 w-auto"
              />
            </div>
            <p className="!text-white mb-4">
              Desenvolvemos jogos inovadores que conectam pessoas e criam experiências únicas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/conkist" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <BiLogoFacebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/conkiststudio" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <BiLogoInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://discord.gg/N76N9rScWb" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <BiLogoDiscord className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/conkiststudio" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <BiLogoLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="http://github.com/conkist" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <BiLogoGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/join-us" className="text-gray-400 hover:text-white transition-colors">
                  Junte-se a Nós
                </Link>
              </li>
              <li>
                <Link href="https://links.conkist.me" className="text-gray-400 hover:text-white transition-colors">
                  Links
                </Link>
              </li>
              <li>
                <Link href="/scholar" className="text-gray-400 hover:text-white transition-colors">
                  Acadêmico
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors">
                  Imprensa
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4 text-white">Produtos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/games/trashy-racers" className="text-gray-400 hover:text-white transition-colors">
                  Trashy Racers
                </Link>
              </li>
              <li>
                <a 
                  href="https://app.conkist.me" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Aplicativo
                </a>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">
                  Soluções Empresariais
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className='text-right'>
            <h4 className="font-bold mb-4 text-white">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="!text-white">
            © Conkist Studio, 2025. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}