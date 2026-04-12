import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="h-[100svh] min-h-[600px] flex items-center hero-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="block text-nexum-green text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6">
            Consulenza Strategica & Sostenibilità
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight text-balance">
            Una <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexum-green to-nexum-light-green">connessione indispensabile</span>
          </h1>
          <p className="text-lg md:text-2xl mb-12 text-gray-200 font-light max-w-2xl mx-auto leading-relaxed text-balance">
            Connettiamo il presente a un futuro sostenibile per un'Italia a zero emissioni
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#target" className="w-full sm:w-auto bg-nexum-green text-white px-9 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105">
              Chi siamo
            </a>
            <a href="#progetti" className="w-full sm:w-auto text-white px-9 py-4 rounded-full font-bold border border-white/30 hover:bg-white/10 transition-all duration-300">
              I nostri progetti
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70">
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="w-full h-1/2 bg-nexum-green absolute top-0 animate-scrolldown"></div>
        </div>
      </div>
    </section>
  );
}
