import { motion } from 'motion/react';

export default function Mission() {
  const values = [
    {
      title: 'Integrità',
      description: 'Operiamo con trasparenza per la sostenibilità ambientale ed economica dei partner.',
      delay: 0
    },
    {
      title: 'Connessione',
      description: 'Uniamo le comunità creando valore condiviso tra pubblico e privato.',
      delay: 0.1
    },
    {
      title: 'Innovazione',
      description: 'Traduciamo tecnologie complesse in soluzioni concrete ed eleganti.',
      delay: 0.2
    }
  ];

  return (
    <section id="mission" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-nexum-green font-bold tracking-widest uppercase text-sm mb-3 block">Valori</span>
          <h2 className="text-nexum-blue text-4xl md:text-5xl font-extrabold mb-6">Il Nesso tra Progresso e Territorio.</h2>
          <div className="w-24 h-1 bg-nexum-green rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((value) => (
            <motion.div 
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: value.delay }}
              className="p-10 bg-nexum-surface rounded-[2rem] border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-nexum-blue mb-4">{value.title}</h3>
              <p className="text-gray-600 font-light">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
