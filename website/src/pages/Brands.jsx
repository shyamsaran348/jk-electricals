import { motion } from 'framer-motion';
import { fadeUp } from '../animations/fadeUp';
import brandsData from '../data/brands.json';
import { Link } from 'react-router-dom';

const Brands = () => {
 return (
 <div className="w-full bg-surface pb-24 pt-32">
 <div className="container mx-auto">
 
 {/* Header */}
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20">
 <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 block">Our Partners</span>
 <h1 className="text-display font-bold text-forest mb-6">Global Brand Alliances</h1>
 <p className="text-lg text-muted">
 We partner with the world's most trusted manufacturers to deliver enterprise-grade electrical and automation components.
 </p>
 </motion.div>

 {/* Brands Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {brandsData.map((brand, index) => (
 <motion.div 
 key={brand.id}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeUp}
 custom={index}
 className="bg-white border border-border p-12 text-center group hover:border-forest transition-colors duration-300 shadow-sm"
 >
 <div className="h-24 flex items-center justify-center mb-8">
 {/* Fallback to text logo since we don't have actual SVG paths in JSON */}
 <span className="text-3xl font-black text-forest tracking-widest group-hover:text-gold transition-colors">
 {brand.logo}
 </span>
 </div>
 <h3 className="text-xl font-bold text-forest mb-4">{brand.name}</h3>
 <p className="text-muted leading-relaxed mb-8">
 {brand.description}
 </p>
 <Link to={`/products?brand=${brand.slug}`} className="inline-block px-8 py-3 border-2 border-forest text-forest font-bold text-xs uppercase tracking-widest hover:bg-forest hover:text-white transition-all">
 View Products
 </Link>
 </motion.div>
 ))}
 </div>

 </div>
 </div>
 );
};

export default Brands;
