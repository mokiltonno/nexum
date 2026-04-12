import { motion } from 'motion/react';

export default function Projects() {
  const projects = [
    {
      title: 'CER',
      description: 'Comunità Energetica Rinnovabile per benefici sociali.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600',
      delay: 0
    },
    {
      title: 'Industria 5.0',
      description: 'Digitalizzazione e sostenibilità industriale.',
      image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=600',
      delay: 0.1
    },
    {
      title: 'Metodo OFE',
      description: 'Ottimizzazione energetica analitica ed efficace.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
      delay: 0.2
    },
    {
      title: 'EPC',
      description: 'Riqualificazione finanziata dai risparmi.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600',
      delay: 0.3
    }
  ];

  return (
    <section id="progetti" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-nexum-blue text-4xl md:text-5xl font-extrabold">I nostri progetti.</h2>
          <div className="w-24 h-1 bg-nexum-green rounded-full mt-6"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: project.delay }}
              className="group bg-nexum-surface rounded-3xl overflow-hidden border border-gray-100 hover:shadow-elegant transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-8">
                <h4 className="font-bold text-xl mb-2">{project.title}</h4>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
