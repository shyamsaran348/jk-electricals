import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/fadeUp';
import productsData from '../data/products.json';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productsData.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="w-full min-h-[60vh] bg-surface flex flex-col items-center justify-center pt-20">
        <h2 className="text-display font-bold text-navy mb-4">Product Not Found</h2>
        <Link to="/products" className="text-blue font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </Link>
      </div>
    );
  }

  // Placeholder images for the bento grid if the product doesn't have multiple
  const galleryImages = [
    product.image,
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1565814329452-e1efa11c5e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  ];

  return (
    <div className="w-full bg-surface pb-24 pt-28">
      <div className="container mx-auto">
        
        {/* Breadcrumbs */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted mb-12">
          <Link to="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/products" className="hover:text-navy transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-navy">{product.category}</span>
        </motion.div>

        {/* Product Layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Product Gallery (Bento Style) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex-1 space-y-4 w-full sticky top-32">
            <div className="bg-white aspect-video relative group border border-border p-4 shadow-sm flex items-center justify-center rounded-3xl overflow-hidden">
              <img 
                src={galleryImages[0]} 
                alt={product.name} 
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="aspect-square bg-white border border-border p-2 hover:border-blue transition-colors cursor-pointer shadow-sm rounded-2xl overflow-hidden">
                  <img src={img} alt={`Detail ${i+1}`} className="w-full h-full object-cover mix-blend-multiply opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Details & Specs */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex-1">
            <span className="bg-blue/10 text-blue px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
              {product.brand} • {product.category}
            </span>
            <h1 className="text-h2 md:text-h1 font-bold text-navy mb-4 leading-tight">{product.name}</h1>
            <p className="text-sm font-bold text-navy uppercase tracking-widest mb-8 pb-8 border-b border-border">SKU: {product.id.toUpperCase()}</p>
            
            <p className="text-lg text-muted mb-12 leading-relaxed">
              {product.description}
            </p>
            
            <div className="space-y-8 mb-12">
              {/* Dummy Specs representing the industrial nature */}
              <div className="grid grid-cols-2 gap-y-8 border-t border-border pt-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Standard Compliance</p>
                  <p className="text-lg font-bold text-navy">ISO / IEC Certified</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Availability</p>
                  <p className="text-lg font-bold text-[#25D366]">In Stock (Ready to Dispatch)</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Warranty</p>
                  <p className="text-lg font-bold text-navy">2 Years Enterprise</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Support Level</p>
                  <p className="text-lg font-bold text-navy">Tier 1 Technical Support</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue"></div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-navy mb-6">Key Specifications</h4>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-muted">
                      <div className="w-2 h-2 bg-blue/20 rounded-full mt-2 flex-shrink-0 flex items-center justify-center">
                        <div className="w-1 h-1 bg-blue rounded-full"></div>
                      </div>
                      <span className="text-lg font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row gap-4 sticky bottom-8 z-10 bg-surface/90 backdrop-blur-md p-4 border border-border shadow-xl rounded-full">
              <button className="flex-1 py-4 bg-navy text-white font-bold text-xs uppercase tracking-widest hover:bg-blue transition-colors rounded-full shadow-md">
                Request Formal Quote
              </button>
              <button className="flex-1 py-4 border border-border text-navy bg-white font-bold text-xs uppercase tracking-widest hover:border-navy transition-colors rounded-full shadow-sm">
                WhatsApp Sales Team
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
