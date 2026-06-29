import { motion } from 'framer-motion';
import { fadeUp } from '../animations/fadeUp';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ShieldCheck, Truck, PackageCheck, Zap } from 'lucide-react';
import CountUp from '../components/CountUp';

const Home = () => {
  return (
 <div className="w-full">
 <Helmet>
 <title>JK Industrial Impex | Premium B2B Electrical Distributor</title>
 <meta name="description" content="Southern India's premium B2B electrical distributor. Fast delivery of quality switchgears, cables, and automation tools." />
 </Helmet>
 
  {/* 1. Hero Section */}
  <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 flex items-center overflow-hidden bg-white">
  <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full lg:w-1/2">
  <span className="text-sm font-bold text-gold tracking-widest uppercase mb-4 block">Premium B2B Distributor</span>
  <h1 className="text-4xl lg:text-display font-black text-forest mb-6 leading-[1.1] tracking-tight">
  Your Reliable Partner for Electrical Supplies
  </h1>
  <p className="text-xl text-muted mb-8 leading-relaxed max-w-lg">
  Fast delivery of quality switchgears, cables, and automation tools. Empowering projects with genuine OEM products and massive ready stock.
  </p>
  
  <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
  <Link to="/products" className="bg-forest text-white px-8 py-4 rounded-full text-sm text-center uppercase tracking-widest font-black hover:bg-gold hover:text-forest transition-all duration-300 shadow-xl focus-ring flex items-center justify-center gap-2 w-full sm:w-auto">
  Explore Catalog <ArrowRight size={18} />
  </Link>
  <Link to="/contact" className="text-forest text-sm text-center uppercase tracking-widest font-black hover:text-gold transition-colors flex items-center justify-center gap-2 group w-full sm:w-auto">
  Bulk Enquiry <span className="transform transition-transform group-hover:translate-x-1"><ArrowRight size={16} /></span>
  </Link>
  </div>
  </motion.div>
  
  <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2 relative hidden lg:block">
  <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border">
  <img src="/hero-bg.png" alt="Industrial Facility" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent"></div>
  </div>
  </motion.div>
  </div>
  </section>

  {/* 2. Brand Logos (Trust) */}
  <section className="bg-surface py-12 border-b border-border">
 <div className="container overflow-hidden max-w-full px-0">
 <p className="text-center text-xs font-bold text-muted uppercase tracking-widest mb-8">Authorized Distributors For</p>
 
 <div className="relative flex overflow-hidden group">
 {/* Gradient Mask for fading edges */}
 <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-surface via-transparent to-surface w-full h-full"></div>
 
 {/* Scrolling Track */}
 <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] opacity-60 hover:opacity-100 transition-opacity duration-500">
 {/* Duplicate the list twice to create a seamless loop. We set transform to -50% in tailwind. */}
 {[...Array(2)].map((_, i) => (
 <div key={i} className="flex items-center justify-around gap-16 px-8 min-w-max">
 <span className="font-display text-2xl font-bold tracking-tighter hover:text-gold transition-colors cursor-pointer">Schneider</span>
 <span className="font-display text-2xl font-bold tracking-tighter hover:text-gold transition-colors cursor-pointer">SIEMENS</span>
 <span className="font-display text-2xl font-bold tracking-tighter hover:text-gold transition-colors cursor-pointer">ABB</span>
 <span className="font-display text-2xl font-bold tracking-tighter hover:text-gold transition-colors cursor-pointer">Polycab</span>
 <span className="font-display text-2xl font-bold tracking-tighter hover:text-gold transition-colors cursor-pointer">Fuji Electric</span>
 <span className="font-display text-2xl font-bold tracking-tighter hover:text-gold transition-colors cursor-pointer">Rexnord</span>
 <span className="font-display text-2xl font-bold tracking-tighter hover:text-gold transition-colors cursor-pointer">Hilcool</span>
 <span className="font-display text-2xl font-bold tracking-tighter hover:text-gold transition-colors cursor-pointer">Omron</span>
 <span className="font-display text-2xl font-bold tracking-tighter hover:text-gold transition-colors cursor-pointer">Spectrum</span>
 <span className="font-display text-2xl font-bold tracking-tighter hover:text-gold transition-colors cursor-pointer">BN</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

  {/* 3. Product Categories */}
  <section className="py-24 bg-white">
 <div className="container mx-auto">
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
 <span className="text-xs font-bold text-gold tracking-widest uppercase">Comprehensive Inventory</span>
 <h2 className="text-h2 font-bold text-forest mt-4 leading-tight">Shop By Category</h2>
 </motion.div>
 
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 { title: 'Switchgear', img: '/products/abb_mccb.png', slug: 'switchgear' },
 { title: 'Cables', img: '/products/armored_cable.png', slug: 'cables' },
 { title: 'Automation & Control', img: '/products/siemens_plc.png', slug: 'automation' },
 { title: 'Flame Proof Products', img: '/products/flameproof_box.png', slug: 'flame-proof' },
 { title: 'Industrial LED Lights', img: '/products/led_high_bay.png', slug: 'led-lights' },
 { title: 'Panel Accessories', img: '/products/terminal_blocks.png', slug: 'panel-accessories' },
 { title: 'Industrial Components', img: '/products/siemens_contactor.png', slug: 'industrial-components' },
 { title: 'Industrial Sensors', img: '/products/omron_sensor.png', slug: 'sensors' },
 { title: 'Cooling Fan', img: '/products/cooling_fan.png', slug: 'cooling-fan' },
 { title: 'Relay & Socket', img: '/products/omron_relay.png', slug: 'relay-socket' }
 ].map((cat, idx) => (
 <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx} className="group relative overflow-hidden h-72 border border-border bg-white shadow-sm block">
 <Link to={`/products?category=${cat.slug}`} className="block w-full h-full relative p-6">
 <div className="absolute inset-0 bg-contain bg-no-repeat bg-right-bottom transition-transform duration-700 group-hover:scale-110 opacity-40 mix-blend-multiply" style={{ backgroundImage: `url('${cat.img}')` }}></div>
 
 <div className="relative z-10 h-full flex flex-col justify-between">
 <h3 className="text-xl font-black text-forest uppercase tracking-wide max-w-[70%]">{cat.title}</h3>
 <div className="w-10 h-10 bg-white border border-border shadow-sm flex items-center justify-center text-gold transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 rounded-full">
 <ArrowRight size={18} />
 </div>
 </div>
 </Link>
 </motion.div>
 ))}
 </div>
 </div>
 </section>


  {/* 5. Why JK Industrial Impex (Light & Visual) */}
  <section className="py-24 bg-surface text-forest relative overflow-hidden">
  <div className="container mx-auto relative z-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
  <span className="text-xs font-bold text-gold tracking-widest uppercase border-l-4 border-gold pl-4">The Distributor Advantage</span>
  <h2 className="text-h2 font-black leading-tight tracking-tight">Why Sourcing From Us Makes a Difference</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
  <div className="bg-white p-6 border border-border shadow-sm rounded-xl">
  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4"><PackageCheck className="text-gold" size={24} /></div>
  <h4 className="text-lg font-bold mb-2">Massive Ready Stock</h4>
  <p className="text-muted text-sm">Over 500+ SKUs available for immediate dispatch.</p>
  </div>
  <div className="bg-white p-6 border border-border shadow-sm rounded-xl">
  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4"><ShieldCheck className="text-gold" size={24} /></div>
  <h4 className="text-lg font-bold mb-2">100% Genuine Products</h4>
  <p className="text-muted text-sm">Direct procurement from OEMs with test certificates.</p>
  </div>
  <div className="bg-white p-6 border border-border shadow-sm rounded-xl">
  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4"><Truck className="text-gold" size={24} /></div>
  <h4 className="text-lg font-bold mb-2">Pan-India Logistics</h4>
  <p className="text-muted text-sm">Robust delivery network ensuring safe arrival.</p>
  </div>
  <div className="bg-white p-6 border border-border shadow-sm rounded-xl">
  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4"><Zap className="text-gold" size={24} /></div>
  <h4 className="text-lg font-bold mb-2">B2B Pricing</h4>
  <p className="text-muted text-sm">Volume discounts and flexible credit terms.</p>
  </div>
  </div>
  </motion.div>
  
  <div className="grid grid-cols-2 gap-6 mt-12 lg:mt-0">
  <div className="bg-forest text-white p-8 border-none shadow-xl rounded-2xl text-center flex flex-col justify-center items-center h-48 relative overflow-hidden">
  <div className="absolute inset-0 bg-gold/5"></div>
  <div className="text-display font-black text-white mb-2 relative z-10"><CountUp end={15} suffix="+" /></div>
  <div className="text-xs font-bold uppercase tracking-widest text-gold relative z-10">Years Exp</div>
  </div>
  <div className="bg-forest text-white p-8 border-none shadow-xl rounded-2xl text-center flex flex-col justify-center items-center h-48 relative overflow-hidden">
  <div className="absolute inset-0 bg-gold/5"></div>
  <div className="text-display font-black text-white mb-2 relative z-10"><CountUp end={50} suffix="+" /></div>
  <div className="text-xs font-bold uppercase tracking-widest text-gold relative z-10">Brands</div>
  </div>
  <div className="bg-forest text-white p-8 border-none shadow-xl rounded-2xl text-center flex flex-col justify-center items-center h-48 transform lg:translate-y-8 relative overflow-hidden">
  <div className="absolute inset-0 bg-gold/5"></div>
  <div className="text-display font-black text-white mb-2 relative z-10"><CountUp end={5} suffix="K+" /></div>
  <div className="text-xs font-bold uppercase tracking-widest text-gold relative z-10">Deliveries</div>
  </div>
  <div className="bg-forest text-white p-8 border-none shadow-xl rounded-2xl text-center flex flex-col justify-center items-center h-48 transform lg:translate-y-8 relative overflow-hidden">
  <div className="absolute inset-0 bg-gold/5"></div>
  <div className="text-display font-black text-white mb-2 relative z-10"><CountUp end={24} suffix="/7" /></div>
  <div className="text-xs font-bold uppercase tracking-widest text-gold relative z-10">Support</div>
  </div>
  </div>
  </div>
  </div>
  </section>



 {/* 8. Project Highlights (Condensed) */}
 <section className="py-24 bg-white">
 <div className="container mx-auto">
 <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
 <div>
 <span className="text-xs font-bold text-gold tracking-widest uppercase border-l-4 border-gold pl-4">Proven Track Record</span>
 <h2 className="text-h2 font-black text-forest mt-2 tracking-tight">Major Project Supplies</h2>
 </div>
 <Link to="/clients" className="text-sm font-bold uppercase tracking-widest text-gold hover:text-forest transition-colors flex items-center gap-2">
 View All Case Studies <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="bg-white p-8 border border-border shadow-sm rounded-xl hover:shadow-md transition-shadow group">
 <div className="h-16 flex items-center mb-6">
 <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Hatsun_Agro_Product_Logo.svg/512px-Hatsun_Agro_Product_Logo.svg.png" alt="Hatsun Agro Logo" className="h-full object-contain transition-all duration-300" />
 </div>
 <h4 className="text-xl font-bold text-forest mb-2 line-clamp-2">Dairy Plant Electrification for Hatsun Agro</h4>
 <div className="text-xs font-bold text-muted uppercase tracking-widest mt-6">Switchgear & Controls</div>
 </div>
 <div className="bg-white p-8 border border-border shadow-sm rounded-xl hover:shadow-md transition-shadow group">
 <div className="h-16 flex items-center mb-6">
 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Indian_Coast_Guard_logo.svg/512px-Indian_Coast_Guard_logo.svg.png" alt="Indian Coast Guard Logo" className="h-full object-contain transition-all duration-300" />
 </div>
 <h4 className="text-xl font-bold text-forest mb-2 line-clamp-2">Maritime Supply for Indian Coast Guards</h4>
 <div className="text-xs font-bold text-muted uppercase tracking-widest mt-6">Cables & Components</div>
 </div>
 <div className="bg-white p-8 border border-border shadow-sm rounded-xl hover:shadow-md transition-shadow group">
 <div className="h-16 flex items-center mb-6">
 <img src="https://logo.clearbit.com/aston.com" onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Aston&background=0D8ABC&color=fff&rounded=true&bold=true'; }} alt="Aston Shoes Logo" className="h-full object-contain transition-all duration-300" />
 </div>
 <h4 className="text-xl font-bold text-forest mb-2 line-clamp-2">Facility Setup for Aston Shoes</h4>
 <div className="text-xs font-bold text-muted uppercase tracking-widest mt-6">Automation & Lighting</div>
 </div>
 </div>
 </div>
 </section>


  {/* 10. Contact CTA */}
  <section className="py-24 bg-surface text-center">
 <div className="container mx-auto max-w-5xl">
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-surface rounded-3xl p-12 md:p-20 border border-border shadow-sm relative overflow-hidden">
 <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
 <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
 
 <div className="relative z-10">
 <h2 className="text-h1 font-black mb-6 leading-tight text-forest">Need Bulk Electrical Supplies?</h2>
 <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">Upload your Bill of Materials (BOM) or contact our sales team for special corporate pricing.</p>
 <div className="flex flex-col sm:flex-row justify-center gap-6">
  <Link to="/contact" className="bg-forest text-white px-8 py-4 rounded-full text-sm text-center uppercase tracking-widest font-black hover:bg-gold hover:text-forest transition-all duration-300 shadow-xl focus-ring flex items-center justify-center gap-2">
  Request a Quote
  </Link>
 <a href="https://wa.me/918044556677" target="_blank" rel="noreferrer" className="bg-[#128C7E] text-white px-8 py-4 rounded-full text-sm text-center uppercase tracking-widest font-black hover:bg-[#075E54] transition-all shadow-xl focus-ring flex items-center justify-center gap-2 border-2 border-[#128C7E]">
 WhatsApp Us
 </a>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 </div>
 );
};

export default Home;
