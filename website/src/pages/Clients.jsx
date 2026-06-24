import { motion } from 'framer-motion';
import { fadeUp } from '../animations/fadeUp';
import { fadeIn } from '../animations/fadeIn';
import { ArrowRight, Settings, Leaf } from 'lucide-react';

const Clients = () => {
  return (
    <div className="w-full bg-surface pb-24 pt-32">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20 text-center max-w-3xl">
        <motion.span initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-blue mb-4 block">Trusted Enterprise Partners</motion.span>
        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-display font-bold text-navy mb-6">Our Global Industrial Ecosystem</motion.h1>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-lg text-muted">
          Providing precision-engineered solutions for the world's most demanding industrial environments. We build relationships on reliability and technical excellence.
        </motion.p>
      </section>

      {/* Clients Typography List */}
      <section className="py-24 bg-white border-y border-border mb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Domestic Partners */}
            <div className="flex-1">
              <h2 className="text-xl font-bold uppercase tracking-widest text-navy mb-8 border-b border-border pb-4">Our Regular Customers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <span className="text-lg font-semibold text-muted hover:text-blue transition-colors">Hatsun Agro Products Ltd</span>
                <span className="text-lg font-semibold text-muted hover:text-blue transition-colors">Aston Shoes Pvt Ltd</span>
                <span className="text-lg font-semibold text-muted hover:text-blue transition-colors">EMAS Engineering & Contractors Pvt Ltd</span>
                <span className="text-lg font-semibold text-muted hover:text-blue transition-colors">PSL Holdings Ltd</span>
                <span className="text-lg font-semibold text-muted hover:text-blue transition-colors">IGP Engineers Ltd</span>
                <span className="text-lg font-semibold text-muted hover:text-blue transition-colors">Parag Milk Foods Pvt Ltd</span>
                <span className="text-lg font-semibold text-muted hover:text-blue transition-colors">Creamline Dairy Pvt Ltd</span>
                <span className="text-lg font-semibold text-muted hover:text-blue transition-colors">Farida Shoes Pvt Ltd</span>
                <span className="text-lg font-semibold text-muted hover:text-blue transition-colors">Delta Shoes Pvt Ltd</span>
                <span className="text-lg font-semibold text-muted hover:text-blue transition-colors">Indian Coast Guards</span>
              </div>
            </div>

            {/* Overseas Customers */}
            <div className="lg:w-1/3">
              <h2 className="text-xl font-bold uppercase tracking-widest text-blue mb-8 border-b border-border pb-4">Our Overseas Customers</h2>
              <div className="flex flex-col gap-6">
                <div>
                  <span className="block text-lg font-bold text-navy">Al Kuhaimi Metal Industries</span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-muted">Dammam, KSA</span>
                </div>
                <div>
                  <span className="block text-lg font-bold text-navy">Al Khaleej Holding & Co</span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-muted">Alkhobar, KSA</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Success Stories - Bento Grid */}
      <section className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-h2 font-bold text-navy mb-4">Featured Success Stories</h2>
          <div className="w-20 h-1 bg-blue"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Case Study 1 (Large Image Block) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-8 group relative overflow-hidden bg-white border border-border shadow-sm rounded-3xl flex flex-col">
            <div className="h-2/3 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-blue/10"></div>
            </div>
            <div className="p-10 bg-white flex-1 flex flex-col justify-center">
              <div>
                <span className="bg-blue/10 text-blue px-4 py-2 text-[10px] font-bold uppercase tracking-widest mb-6 inline-block rounded-full">Industrial Delivery</span>
                <h3 className="text-h3 font-black text-navy mb-4 tracking-tight">Complete Plant Electrification for Hatsun Agro</h3>
                <p className="text-lg text-muted mb-0 max-w-xl font-medium">
                  Supplied all standard electrical distribution boards, switchgear, and contactors to power a new ISO-certified dairy processing plant safely and effectively.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Case Study 2 & 3 (Stacked Block) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-4 flex flex-col gap-6">
            
            <div className="flex-1 bg-white border border-border p-10 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col justify-center rounded-3xl group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center group-hover:bg-blue/20 transition-colors">
                  <Settings className="text-blue w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-black text-navy mb-4 tracking-tight">Facility Setup for Aston Shoes</h3>
              <p className="text-muted mb-8 font-medium">Delivered end-to-end industrial automation components, switchgears, and heavy-duty lighting for large-scale shoe manufacturing units.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-navy border-t border-border pt-4">100% Quality Rating</span>
            </div>

            <div className="flex-1 bg-surface border border-border p-10 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col justify-center rounded-3xl group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center group-hover:bg-blue/20 transition-colors">
                  <Leaf className="text-blue w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-black text-navy mb-4 tracking-tight">Maritime Supply for Indian Coast Guards</h3>
              <p className="text-muted mb-8 font-medium">Provided heavy-duty specialized cables and reliable electrical components for coastal security operations and vessel maintenance.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-navy border-t border-border pt-4">Reliability Milestone</span>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Clients;
