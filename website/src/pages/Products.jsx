import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/fadeUp';
import { fadeIn } from '../animations/fadeIn';
import productsData from '../data/products.json';
import { Search, SlidersHorizontal, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Products = () => {
 const [searchTerm, setSearchTerm] = useState('');
 const [selectedCategories, setSelectedCategories] = useState([]);
 const [selectedManufacturer, setSelectedManufacturer] = useState('All Manufacturers');
 const [currentPage, setCurrentPage] = useState(1);
 const [showFilters, setShowFilters] = useState(false);
 const [searchParams] = useSearchParams();
 const itemsPerPage = 6;

 useEffect(() => {
   const brandQuery = searchParams.get('brand');
   if (brandQuery) {
      const options = ['Schneider', 'Siemens', 'ABB', 'Polycab', 'Fuji Electric', 'Rexnord', 'Hilcool', 'Omron', 'Spectrum', 'BN', 'Larsen & Toubro', 'Havells'];
      const matched = options.find(opt => 
        opt.toLowerCase() === brandQuery.toLowerCase() || 
        opt.replace(/\s+/g, '-').toLowerCase() === brandQuery.toLowerCase() ||
        (brandQuery === 'lnt' && opt === 'Larsen & Toubro')
      );
      if (matched) {
        setSelectedManufacturer(matched);
      }
   }
 }, [searchParams]);

 useEffect(() => {
 setCurrentPage(1);
 }, [searchTerm, selectedCategories, selectedManufacturer]);

 const toggleCategory = (cat) => {
 setSelectedCategories(prev => 
 prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
 );
 };

 const filteredProducts = productsData.filter(product => {
 const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
 product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
 product.id.toLowerCase().includes(searchTerm.toLowerCase());
 const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
 const matchesManufacturer = selectedManufacturer === 'All Manufacturers' || product.brand === selectedManufacturer;
 
 return matchesSearch && matchesCategory && matchesManufacturer;
 });

 const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
 const currentProducts = filteredProducts.slice(
 (currentPage - 1) * itemsPerPage,
 currentPage * itemsPerPage
 );

 return (
 <div className="w-full bg-white pb-24 pt-32">
 <Helmet>
 <title>Industrial Inventory | JK Industrial Impex</title>
 <meta name="description" content="Access high-precision components, switchgear, and automation solutions for large-scale enterprise operations." />
 </Helmet>

 {/* Hero Search Section */}
 <section className="bg-white border-b border-border pt-32 pb-16">
 <div className="container mx-auto">
 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="max-w-3xl">
 <h1 className="text-display font-bold text-forest mb-6">Industrial Inventory</h1>
 <p className="text-lg text-muted mb-10 leading-relaxed">
 Access high-precision components, switchgear, and automation solutions for large-scale enterprise operations.
 </p>
 <div className="relative group shadow-sm flex items-center border border-border focus-within:border-gold transition-colors rounded-full overflow-hidden">
 <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
 <Search className="text-muted w-6 h-6" />
 </div>
 <input 
 className="w-full h-16 pl-14 pr-4 bg-transparent border-none text-forest focus:outline-none focus:ring-0 font-medium placeholder:text-muted" 
 placeholder="Search by SKU, Product Name, or Category..." 
 type="text"
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 />
 <button className="absolute inset-y-2 right-2 px-8 bg-forest text-white font-black text-sm uppercase tracking-widest hover:bg-gold hover:text-forest transition-colors duration-300 rounded-full focus-ring">
 Search
 </button>
 </div>
 </motion.div>
 </div>
 </section>

 {/* Product Explorer Section */}
 <section className="container mx-auto py-16">
 <div className="flex flex-col md:flex-row gap-12">
 
 {/* Mobile Filter Toggle */}
 <button 
 className="md:hidden flex items-center justify-between bg-white border border-border p-4 rounded-xl text-forest font-bold"
 onClick={() => setShowFilters(!showFilters)}
 >
 <span className="flex items-center gap-2"><SlidersHorizontal className="w-5 h-5"/> {showFilters ? 'Hide Filters' : 'Show Filters'}</span>
 </button>

 {/* Filter Sidebar */}
 <aside className={`w-full md:w-72 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
 <div className="sticky top-32 space-y-10">
 
 {/* Categories */}
 <div>
 <h3 className="text-sm font-bold uppercase tracking-widest text-forest mb-6 border-b-2 border-border pb-4">Categories</h3>
 <div className="space-y-4">
 {['Switchgear', 'Cables', 'Automation & Control', 'Flame Proof Products', 'Industrial LED Lights', 'Panel Accessories', 'Industrial Components', 'Industrial Sensors', 'Cooling Fan', 'Relay & Socket'].map((cat) => (
 <label key={cat} className="flex items-center gap-4 cursor-pointer group">
 <div className="relative flex items-center justify-center w-5 h-5 border-2 border-border group-hover:border-gold transition-colors">
 <input 
 type="checkbox" 
 className="opacity-0 absolute w-full h-full cursor-pointer peer" 
 checked={selectedCategories.includes(cat)}
 onChange={() => toggleCategory(cat)}
 />
 <div className="w-2.5 h-2.5 bg-gold opacity-0 peer-checked:opacity-100 transition-opacity"></div>
 </div>
 <span className="font-medium text-forest/80 group-hover:text-forest transition-colors">{cat}</span>
 </label>
 ))}
 </div>
 </div>

 {/* Manufacturers */}
 <div>
 <h3 className="text-sm font-bold uppercase tracking-widest text-forest mb-6 border-b-2 border-border pb-4">Manufacturer</h3>
 <select 
 className="w-full h-14 border border-border bg-white text-forest px-4 focus:outline-none focus:border-gold font-medium appearance-none shadow-sm cursor-pointer"
 value={selectedManufacturer}
 onChange={(e) => setSelectedManufacturer(e.target.value)}
 >
 <option>All Manufacturers</option>
 <option>Schneider</option>
 <option>Siemens</option>
 <option>ABB</option>
 <option>Polycab</option>
 <option>Fuji Electric</option>
 <option>Rexnord</option>
 <option>Hilcool</option>
 <option>Omron</option>
 <option>Spectrum</option>
 <option>BN</option>
 <option>Larsen & Toubro</option>
 <option>Havells</option>
 </select>
 </div>

 {/* Bulk Orders Banner */}
 <div className="p-8 bg-surface border border-gold/20 shadow-sm rounded-xl relative overflow-hidden">
 <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
 <h4 className="text-xl font-black mb-3 text-forest relative z-10 tracking-tight">Bulk Orders</h4>
 <p className="text-muted mb-6 text-sm relative z-10">Need a custom procurement list for your facility?</p>
 <Link to="/contact" className="w-full py-4 bg-forest text-white font-black text-sm uppercase tracking-widest hover:bg-gold hover:text-forest transition-colors rounded-full relative z-10 flex items-center justify-center focus-ring">
 Contact Expert
 </Link>
 </div>

 </div>
 </aside>

 {/* Product Grid Area */}
 <div className="flex-grow">
 
 {/* Toolbar */}
 <div className="flex flex-col sm:flex-row justify-between items-center mb-10 pb-6 border-b border-border gap-4">
 <span className="text-sm font-bold text-muted uppercase tracking-widest">Showing {filteredProducts.length} Products</span>
 <button className="flex items-center gap-2 text-sm font-bold text-forest hover:text-gold transition-colors uppercase tracking-widest">
 <SlidersHorizontal className="w-4 h-4" />
 Relevance
 </button>
 </div>

 {/* Grid */}
 <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
 {currentProducts.map((product) => (
 <motion.div 
 key={product.id}
 initial="hidden" 
 whileInView="visible" 
 viewport={{ once: true }} 
 variants={fadeIn}
 className="group bg-white border border-border p-1 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col rounded-2xl overflow-hidden"
 >
 <div className="aspect-square bg-surface overflow-hidden relative p-8 flex items-center justify-center rounded-xl m-1">
 <img 
 src={product.image} 
 alt={product.name}
 className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
 />
 </div>
 <div className="p-8 flex flex-col flex-grow">
 <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">{product.category}</p>
 <h3 className="text-lg font-black text-forest mb-4 leading-tight flex-grow tracking-tight">{product.name}</h3>
 <div className="flex flex-col gap-4 mt-auto">
 <span className="text-sm font-bold text-forest border-t border-border pt-4">{product.id.toUpperCase()}</span>
 <Link to={`/products/${product.slug}`} className="w-full text-center px-4 py-3 bg-surface text-forest font-bold text-xs uppercase tracking-widest hover:bg-forest hover:text-white transition-all rounded-full border border-border group-hover:border-forest">
 View Details
 </Link>
 </div>
 </div>
 </motion.div>
 ))}
 </div>

 {/* Pagination */}
 {totalPages > 1 && (
 <div className="mt-20 flex justify-center items-center gap-2">
 <button 
 onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
 disabled={currentPage === 1}
 className="w-12 h-12 flex items-center justify-center border border-border hover:border-forest hover:bg-surface transition-all text-forest disabled:opacity-50 disabled:cursor-not-allowed"
 >
 <ChevronLeft className="w-5 h-5" />
 </button>
 
 {[...Array(totalPages)].map((_, index) => {
 const pageNumber = index + 1;
 return (
 <button 
 key={pageNumber}
 onClick={() => setCurrentPage(pageNumber)}
 className={`w-12 h-12 flex items-center justify-center border transition-all font-bold text-sm ${
 currentPage === pageNumber 
 ? 'bg-forest border-forest text-white' 
 : 'border-border text-forest hover:border-forest hover:bg-surface'
 }`}
 >
 {pageNumber}
 </button>
 );
 })}

 <button 
 onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
 disabled={currentPage === totalPages}
 className="w-12 h-12 flex items-center justify-center border border-border hover:border-forest hover:bg-surface transition-all text-forest disabled:opacity-50 disabled:cursor-not-allowed"
 >
 <ChevronRight className="w-5 h-5" />
 </button>
 </div>
 )}

 </div>
 </div>
 </section>
 </div>
 );
};

export default Products;
