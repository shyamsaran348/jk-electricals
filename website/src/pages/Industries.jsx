import { motion } from 'framer-motion';
import { fadeUp } from '../animations/fadeUp';
import { fadeIn } from '../animations/fadeIn';
import industriesData from '../data/industries.json';
import { CheckCircle2 } from 'lucide-react';

const Industries = () => {
  return (
    <div className="w-full bg-surface pb-24">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-surface flex items-center overflow-hidden border-b border-border">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-blue block mb-4">
              Market Sectors
            </motion.span>
            <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-display font-black text-navy mb-6 tracking-tight">
              Powering the Core of Global Industry
            </motion.h1>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-xl text-muted font-medium">
              We provide critical engineering components and supply chain solutions across the world's most demanding sectors, ensuring operational continuity and peak performance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industry Grid Section */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {industriesData.map((industry, idx) => (
              <motion.div 
                key={industry.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={idx}
                className="group border border-border bg-white p-8 transition-all hover:shadow-lg shadow-sm flex flex-col rounded-3xl"
              >
                <div className="aspect-video mb-8 overflow-hidden bg-surface flex items-center justify-center p-8 rounded-2xl">
                  {/* We are using a generic abstract industrial image here */}
                  <img 
                    src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? '1581091226825-a6a2a5aee158' : '1537462715879-360eeb61a0ad'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                    alt={industry.name} 
                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-h3 font-black tracking-tight text-navy mb-4">{industry.name}</h3>
                <p className="text-muted mb-8 leading-relaxed flex-grow font-medium">
                  {industry.description}
                </p>
                <ul className="space-y-4 border-t border-border pt-8 mt-auto">
                  <li className="flex items-start gap-3 text-sm font-bold text-navy">
                    <CheckCircle2 className="text-blue w-5 h-5 flex-shrink-0" />
                    Specialized Equipment Procurement
                  </li>
                  <li className="flex items-start gap-3 text-sm font-bold text-navy">
                    <CheckCircle2 className="text-blue w-5 h-5 flex-shrink-0" />
                    Regulatory Compliance Support
                  </li>
                  <li className="flex items-start gap-3 text-sm font-bold text-navy">
                    <CheckCircle2 className="text-blue w-5 h-5 flex-shrink-0" />
                    Bulk Delivery Network
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise in Action Section */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <motion.span initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-blue block mb-4">Core Competency</motion.span>
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-display font-black text-navy mb-12 leading-tight tracking-tight">Expertise in Action</motion.h2>
              <div className="space-y-12">
                {[
                  {
                    title: 'Cross-Industry Component Integration',
                    desc: 'Our deep understanding of universal engineering principles allows us to adapt high-performance components across disparate sectors, maximizing efficiency and reducing R&D costs for our clients.'
                  },
                  {
                    title: 'Global Procurement Network',
                    desc: 'With logistics hubs in three continents, we ensure that critical industrial parts reach your facility with minimal lead times, regardless of the sector or location.'
                  },
                  {
                    title: 'Enterprise-Grade Reliability',
                    desc: 'Every product we supply undergoes rigorous structural and performance testing in our dedicated industrial quality control labs.'
                  }
                ].map((item, idx) => (
                  <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-6">
                    <div className="bg-blue/10 p-4 h-fit rounded-2xl">
                      <div className="w-8 h-8 bg-blue rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-navy mb-2">{item.title}</h4>
                      <p className="text-lg text-muted font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex-1 w-full lg:w-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-surface border border-border p-2 rounded-3xl overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Detail 1" className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square bg-surface border border-border p-2 mt-8 rounded-3xl overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Detail 2" className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square bg-surface border border-border p-2 -mt-8 rounded-3xl overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Detail 3" className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-square bg-surface border border-border p-2 rounded-3xl overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1565814329452-e1efa11c5e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Detail 4" className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto border border-border rounded-3xl p-16 shadow-xl bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-h2 font-black tracking-tight text-navy mb-6 relative z-10">Ready to Optimize Your Industrial Supply Chain?</h2>
            <p className="text-xl text-muted font-medium mb-12 relative z-10">
              Our engineers are standing by to discuss your industry-specific challenges and provide tailored procurement solutions.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
              <button className="bg-navy text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-blue transition-colors rounded-full shadow-md">
                Download Sector Brochure
              </button>
              <button className="bg-surface border border-border text-navy px-10 py-5 font-bold text-xs uppercase tracking-widest hover:border-navy transition-colors rounded-full shadow-sm">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
