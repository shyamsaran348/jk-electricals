import { motion } from 'framer-motion';
import { fadeUp } from '../animations/fadeUp';
import { fadeIn } from '../animations/fadeIn';

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-surface flex items-center overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-display font-black text-navy max-w-3xl mb-6 tracking-tight">
            About JK Industrial Impex
          </motion.h1>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-xl text-muted max-w-xl font-medium">
            Pioneering precision engineering and industrial materials supply since 2007.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue mb-4 block">Company Profile</span>
              <h2 className="text-h2 font-bold text-navy mb-8 leading-tight">Setting the Gold Standard in Industrial Infrastructure</h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                J.K Industrial Impex is a specialized industrial materials distributor with a rich history of fulfilling diverse procurement needs. Since our inception in 2007, our mission has been clear: supply premium-quality industrial components with the greatest quantity and consistent professionalism. We operate out of a highly-efficient 2,500 square foot facility in Chennai.
              </p>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                We take pride in our robust supply chain and are authorized dealers for industry-leading brands. Our dedicated team of professionals ensures seamless delivery and unwavering support for global enterprises.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border pt-8">
                <div className="bg-white p-6 border border-border shadow-sm rounded-xl">
                  <div className="text-h2 font-black text-blue mb-1">16+</div>
                  <div className="text-[10px] font-bold text-muted uppercase tracking-widest mt-2">Years Exp</div>
                </div>
                <div className="bg-white p-6 border border-border shadow-sm rounded-xl">
                  <div className="text-h2 font-black text-blue mb-1">1Cr+</div>
                  <div className="text-[10px] font-bold text-muted uppercase tracking-widest mt-2">Annual Turnover</div>
                </div>
                <div className="bg-white p-6 border border-border shadow-sm rounded-xl">
                  <div className="text-h2 font-black text-blue mb-1">10+</div>
                  <div className="text-[10px] font-bold text-muted uppercase tracking-widest mt-2">Authorized Brands</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative group">
              <div className="absolute -inset-4 bg-navy/5 scale-95 group-hover:scale-100 transition-transform duration-500"></div>
              <img 
                className="relative w-full h-[600px] object-cover border border-border shadow-2xl mix-blend-multiply" 
                src="/hero-bg.png" 
                alt="Industrial Facility"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue mb-4 block">Our Journey</span>
            <h2 className="text-h2 font-bold text-navy">Decades of Excellence</h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-surface border-x border-border"></div>
            
            <div className="space-y-24">
              {[
                { year: '2007', desc: 'Inception of J.K Industrial Impex as a specialized industrial materials distributor in Chennai.', align: 'right' },
                { year: '2011', desc: 'Expanded our brand portfolio to become the authorized dealer for 10+ premium international companies.', align: 'left' },
                { year: 'Present', desc: 'Recognized as a major distributor of industrial materials across Southern India, maintaining our core strength in supplying Quality Products & Pricing.', align: 'right' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative flex items-center justify-between"
                >
                  <div className={`w-5/12 ${item.align === 'right' ? 'text-right pr-12' : 'order-last text-left pl-12'}`}>
                    <h3 className="text-h3 font-bold text-navy mb-4">{item.year}</h3>
                    <p className="text-lg text-muted leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-navy border-4 border-white shadow-xl z-10"></div>
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="bg-surface rounded-3xl p-12 lg:p-20 border border-border shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:col-span-5 relative group">
                <div className="absolute inset-0 bg-blue/10 transform translate-x-4 translate-y-4 rounded-2xl"></div>
                <img 
                  className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-lg border border-border" 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Founder"
                />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-7 lg:pl-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue mb-8 block border-l-4 border-blue pl-4">From the Founder's Desk</span>
                <h2 className="text-h2 font-black text-navy mb-10 leading-tight tracking-tight">"Precision is not just a measurement; it is a promise of reliability."</h2>
                <div className="space-y-6 text-lg text-muted leading-relaxed font-medium">
                  <p>When I founded JK Industrial Impex in a small rented warehouse three decades ago, the goal was simple: solve problems that others found too complex. We started with specialized turbine parts, focusing on tolerances that competitors deemed impossible.</p>
                  <p>Today, as we navigate the fourth industrial revolution, that same obsession with the 'impossible' drives us. We've scaled from a workshop to a global conglomerate, but the heartbeat of this company remains rooted in engineering integrity. We don't just ship products; we ship confidence.</p>
                </div>
                <div className="mt-12 pt-8 border-t border-border flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center text-blue font-black text-xl">JS</div>
                  <div>
                    <p className="text-2xl font-black text-navy mb-1">Julian K. Sterling</p>
                    <p className="text-xs font-bold text-blue uppercase tracking-widest">Founder & Executive Chairman</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
