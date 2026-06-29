import { motion } from 'framer-motion';
import { fadeUp } from '../animations/fadeUp';
import { fadeIn } from '../animations/fadeIn';

const Projects = () => {
 return (
 <div className="w-full bg-white pb-24 pt-32 overflow-hidden">
 <div className="container mx-auto px-4">
 
 <div className="flex flex-col md:flex-row items-center gap-16">
 
 <div className="w-full md:w-1/2">
 <motion.span initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 block">Case Studies</motion.span>
 <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-display font-bold text-forest mb-12 leading-tight">Enterprise Project Highlights</motion.h2>
 
 <div className="space-y-16">
 {[
 {
 id: '01',
 title: 'Smart Foundry Integration',
 desc: 'A digital twin deployment for a heavy-duty steel foundry, enabling real-time thermal monitoring and predictive maintenance across 12 smelting units.'
 },
 {
 id: '02',
 title: 'Offshore Oil Platform Maintenance',
 desc: 'Custom-engineered valve systems for deep-sea extraction platforms, designed for ultra-high pressure and corrosive environments.'
 },
 {
 id: '03',
 title: 'Global Supply Chain Digitization',
 desc: 'End-to-end IoT tracking implementation for a fortune 500 chemical distributor, ensuring thermal stability of sensitive cargo.'
 }
 ].map((project, idx) => (
 <motion.div 
 key={project.id}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeUp}
 custom={idx}
 className="flex gap-8"
 >
 <span className="text-6xl font-black text-border opacity-50">{project.id}</span>
 <div>
 <h4 className="text-xl font-bold text-forest mb-4">{project.title}</h4>
 <p className="text-lg text-muted leading-relaxed">{project.desc}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>

 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="w-full md:w-1/2 relative mt-16 md:mt-0">
 <div className="relative z-10 p-4 bg-white border border-border shadow-2xl transform translate-x-4 -translate-y-4">
 <img 
 className="w-full h-[700px] object-cover mix-blend-multiply" 
 src="https://images.unsplash.com/photo-1565814329452-e1efa11c5e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
 alt="Industrial Machinery"
 />
 </div>
 <div className="absolute top-0 left-0 w-full h-full bg-forest -z-0 translate-x-0 translate-y-0 opacity-10"></div>
 </motion.div>

 </div>

 </div>
 </div>
 );
};

export default Projects;
