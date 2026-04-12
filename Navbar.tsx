import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Chi siamo', href: '#target' },
    { name: 'I nostri progetti', href: '#progetti' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-gray-100' : 'bg-transparent border-white/10'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 md:py-5 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-nexum-green text-white rounded flex items-center justify-center font-bold text-xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow">
            N
          </div>
          <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-nexum-blue' : 'text-white'
          }`}>
            NEXUM
          </span>
        </a>
        
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`text-sm font-medium transition-colors duration-300 hover:text-nexum-green ${
                isScrolled ? 'text-nexum-blue' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contatti" 
            className="bg-nexum-green text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
          >
            Contatti
          </a>
        </div>

        <button 
          onClick={toggleMenu}
          className={`md:hidden p-2 transition-colors duration-300 ${
            isScrolled ? 'text-nexum-blue' : 'text-white'
          }`}
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-nexum-blue/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <button 
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white p-2"
            >
              <X className="h-8 w-8" />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-2xl font-medium text-white" 
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contatti" 
              className="text-xl font-bold bg-nexum-green text-white px-8 py-3 rounded-full" 
              onClick={toggleMenu}
            >
              Contatti
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
