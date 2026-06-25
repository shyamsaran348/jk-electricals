import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Download, Menu, X } from 'lucide-react';

const Navbar = () => {
 const [isScrolled, setIsScrolled] = useState(false);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 20);
 };
 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
 <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
 <div className="container flex justify-between items-center">
 {/* Logo */}
 <Link to="/" className="flex items-center">
 <img src="/logo.png" alt="JK Industrial Impex Logo" className="h-10" />
 </Link>

 {/* Desktop Menu */}
 <div className="hidden lg:flex items-center space-x-8">
 <Link to="/" className="text-sm font-semibold text-forest hover:text-gold :text-gold transition-colors">Home</Link>
 <Link to="/about" className="text-sm font-semibold text-forest hover:text-gold :text-gold transition-colors">About</Link>
 <Link to="/products" className="text-sm font-semibold text-forest hover:text-gold :text-gold transition-colors">Products</Link>
 <Link to="/industries" className="text-sm font-semibold text-forest hover:text-gold :text-gold transition-colors">Industries</Link>
 <Link to="/clients" className="text-sm font-semibold text-forest hover:text-gold :text-gold transition-colors">Clients</Link>
 <Link to="/contact" className="text-sm font-semibold text-forest hover:text-gold :text-gold transition-colors">Contact</Link>
 </div>

 {/* Actions */}
 <div className="hidden lg:flex items-center space-x-4">
 <button className="p-2 text-forest hover:text-gold transition-colors">
 <Search size={20} />
 </button>
 <a href="/jki_profile.pptx" download className="flex items-center space-x-2 text-sm font-semibold text-forest hover:text-gold transition-colors">
 <Download size={16} />
 <span>Catalog</span>
 </a>
 <Link to="/contact" className="bg-gold hover:bg-forest text-white px-6 py-2.5 rounded-full shadow-md text-sm font-bold transition-all duration-300">
 Get Quote
 </Link>
 </div>

 {/* Mobile Toggle */}
 <div className="lg:hidden flex items-center space-x-4">
 <button className="text-forest " onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
 {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
 </button>
 </div>
 </div>

 {/* Mobile Menu */}
 {mobileMenuOpen && (
 <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md p-6 flex flex-col space-y-6 border-t border-border ">
 <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-forest font-semibold text-lg">Home</Link>
 <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-forest font-semibold text-lg">About</Link>
 <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="text-forest font-semibold text-lg">Products</Link>
 <Link to="/industries" onClick={() => setMobileMenuOpen(false)} className="text-forest font-semibold text-lg">Industries</Link>
 <Link to="/clients" onClick={() => setMobileMenuOpen(false)} className="text-forest font-semibold text-lg">Clients</Link>
 <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-forest font-semibold text-lg">Contact</Link>
 
 <div className="pt-4 border-t border-border flex flex-col space-y-4">
 <a href="/jki_profile.pptx" download className="flex items-center space-x-2 text-forest font-semibold">
 <Download size={20} />
 <span>Download Catalog</span>
 </a>
 <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-gold text-white px-6 py-3 rounded-full text-center font-bold">
 Get Quote
 </Link>
 </div>
 </div>
 )}
 </nav>
 );
};

export default Navbar;
