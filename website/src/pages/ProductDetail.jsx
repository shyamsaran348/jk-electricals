import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/fadeUp';
import productsData from '../data/products.json';
import { ChevronRight, ArrowLeft, Download } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ProductDetail = () => {
 const { slug } = useParams();
 const product = productsData.find(p => p.slug === slug);

 if (!product) {
 return (
 <div className="w-full min-h-[60vh] bg-surface flex flex-col items-center justify-center pt-20">
 <h2 className="text-display font-bold text-forest mb-4">Product Not Found</h2>
 <Link to="/products" className="text-gold font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
 <ArrowLeft className="w-4 h-4" /> Back to Catalog
 </Link>
 </div>
 );
 }



 return (
 <div className="w-full bg-surface pb-24 pt-28">
 <Helmet>
 <title>{product.name} | JK Industrial Impex</title>
 <meta name="description" content={`Purchase the ${product.name} from JK Industrial Impex. ${product.description.substring(0, 100)}...`} />
 </Helmet>
 <div className="container mx-auto">
 
 {/* Breadcrumbs */}
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted mb-12">
 <Link to="/" className="hover:text-forest transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4" />
 <Link to="/products" className="hover:text-forest transition-colors">Products</Link>
 <ChevronRight className="w-4 h-4" />
 <span className="text-forest">{product.category}</span>
 </motion.div>

 {/* Product Layout */}
 <div className="flex flex-col lg:flex-row gap-16 items-start">
 
 {/* Single Product Image */}
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex-1 w-full sticky top-32">
 <div className="bg-white aspect-square lg:aspect-[4/3] relative group border border-border p-8 shadow-sm flex items-center justify-center rounded-3xl overflow-hidden">
 <img 
 src={product.image} 
 alt={product.name} 
 className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
 />
 </div>
 </motion.div>

 {/* Product Details & Specs */}
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex-1">
 <span className="bg-gold/10 text-gold px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
 {product.brand} • {product.category}
 </span>
 <h1 className="text-h2 md:text-h1 font-bold text-forest mb-4 leading-tight">{product.name}</h1>
 <p className="text-sm font-bold text-forest uppercase tracking-widest mb-8 pb-8 border-b border-border">SKU: {product.id.toUpperCase()}</p>
 
 <p className="text-lg text-muted mb-12 leading-relaxed">
 {product.description}
 </p>
 
 <div className="space-y-8 mb-12">
 {/* Dummy Specs representing the industrial nature */}
 <div className="grid grid-cols-2 gap-y-8 border-t border-border pt-8">
 <div>
 <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Standard Compliance</p>
 <p className="text-lg font-bold text-forest">ISO / IEC Certified</p>
 </div>
 <div>
 <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Availability</p>
 <p className="text-lg font-bold text-[#25D366]">In Stock (Ready to Dispatch)</p>
 </div>
 <div>
 <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Warranty</p>
 <p className="text-lg font-bold text-forest">2 Years Enterprise</p>
 </div>
 <div>
 <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Support Level</p>
 <p className="text-lg font-bold text-forest">Tier 1 Technical Support</p>
 </div>
 </div>

 {/* Key Features */}
 <div className="bg-white p-8 rounded-3xl shadow-sm border border-border relative overflow-hidden">
 <div className="absolute top-0 left-0 w-2 h-full bg-gold"></div>
 <div className="flex items-center justify-between mb-6">
 <h4 className="text-sm font-bold uppercase tracking-widest text-forest">Key Specifications</h4>
 <a href="#" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold hover:text-forest transition-colors">
 <Download className="w-4 h-4" />
 Tech Specs
 </a>
 </div>
 <ul className="space-y-4">
 {product.features.map((feature, idx) => (
 <li key={idx} className="flex items-start gap-4 text-muted">
 <div className="w-2 h-2 bg-gold/20 rounded-full mt-2 flex-shrink-0 flex items-center justify-center">
 <div className="w-1 h-1 bg-gold rounded-full"></div>
 </div>
 <span className="text-lg font-medium">{feature}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>

 {/* Dual CTA */}
 <div className="flex flex-col sm:flex-row gap-4 sticky bottom-8 z-10 bg-surface/90 backdrop-blur-md p-4 border border-border shadow-xl rounded-full">
 <Link to="/contact" className="flex-1 py-4 bg-forest text-white font-bold text-xs uppercase tracking-widest hover:bg-gold transition-colors rounded-full shadow-md text-center">
 Request Formal Quote
 </Link>
 <a href="https://wa.me/918044556677" target="_blank" rel="noreferrer" className="flex-1 py-4 border border-border text-forest bg-white font-bold text-xs uppercase tracking-widest hover:border-forest transition-colors rounded-full shadow-sm text-center">
 WhatsApp Sales Team
 </a>
 </div>
 </motion.div>

 </div>
 </div>
 </div>
 );
};

export default ProductDetail;
