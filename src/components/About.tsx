import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="target" className="py-32 bg-nexum-surface">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="text-nexum-green font-bold tracking-widest uppercase text-sm mb-3 block">Il Team Nexum</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-nexum-blue mb-8">Chi siamo</h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Siamo un gruppo unito di <strong className="text-nexum-blue font-semibold">Consulenti Commerciali</strong> e <strong className="text-nexum-blue font-semibold">Sustainability Manager</strong>. La nostra profonda esperienza sul campo ci ha resi altamente specializzati nello sviluppo e nella gestione di progetti energetici strategici dedicati alla <strong className="text-nexum-blue font-semibold">Pubblica Amministrazione</strong> e alle <strong class="text-nexum-blue font-semibold">PMI</strong>. Uniamo competenza tecnica e visione di mercato per trasformare ogni obbligo di transizione ecologica in una reale opportunità di crescita.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* PA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative rounded-[2.5rem] overflow-hidden shadow-xl min-h-[500px]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=800')" }}
            ></div>
            <div className="absolute inset-0 bg-nexum-blue/80 group-hover:bg-nexum-blue/85 transition-colors"></div>
            <div className="relative p-12 text-white h-full flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-4">Pubblica Amministrazione</h3>
              <ul className="space-y-3 text-gray-300 font-light">
                <li>• Comunità Energetiche (CER)</li>
                <li>• Gestione Strategica Fondi PNRR</li>
                <li>• Conformità ai Criteri ESG</li>
                <li className="text-nexum-light-green font-medium">• Conto Termico 3.0</li>
              </ul>
            </div>
          </motion.div>

          {/* PMI Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative rounded-[2.5rem] overflow-hidden shadow-xl min-h-[500px]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800')" }}
            ></div>
            <div className="absolute inset-0 bg-white/90 group-hover:bg-white/95 transition-colors"></div>
            <div className="relative p-12 text-nexum-blue h-full flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-4">Piccole e Medie Imprese</h3>
              <ul className="space-y-3 text-gray-600 font-light">
                <li>• Piano Transizione Industria 5.0</li>
                <li>• Riduzione Strutturale Costi Fissi</li>
                <li>• Autonomia e Vantaggio Competitivo</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
