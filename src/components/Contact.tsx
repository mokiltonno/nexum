import { User, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion'; // Nota: se usi 'motion/react' assicurati che il pacchetto sia installato, altrimenti usa 'framer-motion'

export default function Contact() {
  return (
    <section id="contatti" className="py-32 bg-nexum-surface">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-nexum-blue rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-balance">Richiedi la tua consulenza</h2>
              <div className="space-y-8">
                <div className="flex items-center group">
                  <div className="bg-white/10 p-4 rounded-2xl mr-6 group-hover:bg-nexum-green transition-all">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Referente</p>
                    <p className="text-xl font-bold">Monica Negri</p>
                  </div>
                </div>
                <a href="tel:+393482637543" className="flex items-center group">
                  <div className="bg-white/10 p-4 rounded-2xl mr-6 group-hover:bg-nexum-green transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Telefono</p>
                    <p className="text-lg">+39 348 2637543</p>
                  </div>
                </a>
                <a href="mailto:monicanegri.nexum@gmail.com" className="flex items-center group">
                  <div className="bg-white/10 p-4 rounded-2xl mr-6 group-hover:bg-nexum-green transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Email</p>
                    <p className="text-base break-all">monicanegri.nexum@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full bg-white p-10 rounded-[2rem]">
              {/* Form configurato per Netlify Forms */}
              <form 
                name="contatti" 
                method="POST" 
                data-netlify="true" 
                action="/"
                className="space-y-6"
              >
                {/* Campo nascosto fondamentale per React/Vite */}
                <input type="hidden" name="form-name" value="contatti" />
                
                <input 
                  type="text" 
                  name="nome"
                  placeholder="Nome" 
                  required
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-nexum-green transition-all" 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  required
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-nexum-green transition-all" 
                />
                <textarea 
                  name="messaggio"
                  placeholder="Messaggio" 
                  rows={4} 
                  required
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-nexum-green transition-all"
                ></textarea>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-nexum-blue text-white font-bold rounded-xl hover:bg-nexum-green transition-all"
                >
                  Invia Richiesta
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}