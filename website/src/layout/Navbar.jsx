import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Download, Menu, X } from 'lucide-react';

const Navbar = () => {
 const [isScrolled, setIsScrolled] = useState(false);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const location = useLocation();

 const isActive = (path) => {
   if (path === '/' && location.pathname !== '/') return false;
   return location.pathname.startsWith(path);
 };

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
        <Link to="/" className="flex items-center gap-3 focus-ring rounded-sm">
          <div className="h-14 w-8 rounded-sm overflow-hidden drop-shadow-sm flex items-center justify-center shrink-0">
            <img src="/logo.png" alt="JK Industrial Impex Logo" className="w-full h-full object-cover object-center scale-[1.35]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl lg:text-2xl font-black tracking-tight text-forest leading-none">J.K Industrial</span>
            <span className="text-[10px] lg:text-xs font-bold text-gold uppercase tracking-widest mt-1">Impex</span>
          </div>
        </Link>

 {/* Desktop Menu */}
 <div className="hidden lg:flex items-center space-x-8">
 <Link to="/" className={`text-sm font-semibold transition-colors focus-ring rounded-sm px-1 py-0.5 ${isActive('/') ? 'text-gold' : 'text-forest hover:text-gold'}`}>Home</Link>
 <Link to="/about" className={`text-sm font-semibold transition-colors focus-ring rounded-sm px-1 py-0.5 ${isActive('/about') ? 'text-gold' : 'text-forest hover:text-gold'}`}>About</Link>
 <Link to="/products" className={`text-sm font-semibold transition-colors focus-ring rounded-sm px-1 py-0.5 ${isActive('/products') ? 'text-gold' : 'text-forest hover:text-gold'}`}>Products</Link>
 <Link to="/clients" className={`text-sm font-semibold transition-colors focus-ring rounded-sm px-1 py-0.5 ${isActive('/clients') ? 'text-gold' : 'text-forest hover:text-gold'}`}>Clients</Link>
 <Link to="/contact" className={`text-sm font-semibold transition-colors focus-ring rounded-sm px-1 py-0.5 ${isActive('/contact') ? 'text-gold' : 'text-forest hover:text-gold'}`}>Contact</Link>
 </div>

 {/* Actions */}
 <div className="hidden lg:flex items-center space-x-4">
 <button className="p-2 text-forest hover:text-gold transition-colors focus-ring rounded-full">
 <Search size={20} />
 </button>
 <Link to="/catalog" className="flex items-center space-x-2 text-sm font-semibold text-forest hover:text-gold transition-colors focus-ring rounded-sm px-1">
 <Download size={16} />
 <span>Catalog</span>
 </Link>
 <Link to="/contact" className="bg-forest text-white hover:bg-gold hover:text-forest px-6 py-2.5 rounded-full shadow-md text-sm font-black transition-all duration-300 focus-ring">
 Get Quote
 </Link>
 </div>

 {/* Mobile Toggle */}
 <div className="lg:hidden flex items-center space-x-4">
 <button className="text-forest focus-ring rounded-sm p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
 {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
 </button>
 </div>
 </div>

 {/* Mobile Menu */}
 {mobileMenuOpen && (
 <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md p-6 flex flex-col space-y-6 border-t border-border ">
 <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`font-semibold text-lg focus-ring rounded-sm px-2 py-1 ${isActive('/') ? 'text-gold bg-surface' : 'text-forest'}`}>Home</Link>
 <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`font-semibold text-lg focus-ring rounded-sm px-2 py-1 ${isActive('/about') ? 'text-gold bg-surface' : 'text-forest'}`}>About</Link>
 <Link to="/products" onClick={() => setMobileMenuOpen(false)} className={`font-semibold text-lg focus-ring rounded-sm px-2 py-1 ${isActive('/products') ? 'text-gold bg-surface' : 'text-forest'}`}>Products</Link>
 <Link to="/clients" onClick={() => setMobileMenuOpen(false)} className={`font-semibold text-lg focus-ring rounded-sm px-2 py-1 ${isActive('/clients') ? 'text-gold bg-surface' : 'text-forest'}`}>Clients</Link>
 <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`font-semibold text-lg focus-ring rounded-sm px-2 py-1 ${isActive('/contact') ? 'text-gold bg-surface' : 'text-forest'}`}>Contact</Link>
 
 <div className="pt-4 border-t border-border flex flex-col space-y-4">
 <Link to="/catalog" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 text-forest font-semibold focus-ring rounded-sm p-2">
 <Download size={20} />
 <span>View Catalog</span>
 </Link>
 <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-forest text-white px-6 py-3 rounded-full text-center font-black focus-ring hover:bg-gold hover:text-forest transition-colors">
 Get Quote
 </Link>
 </div>
 </div>
 )}
 </nav>
 );
};

export default Navbar;
