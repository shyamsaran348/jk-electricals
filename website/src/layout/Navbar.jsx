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
        <Link to="/" className="text-2xl font-bold tracking-tight text-navy flex items-center">
          J.K <span className="text-blue ml-1.5">Industrial Impex</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-sm font-semibold text-navy hover:text-blue transition-colors">Home</Link>
          <Link to="/about" className="text-sm font-semibold text-navy hover:text-blue transition-colors">About</Link>
          <Link to="/products" className="text-sm font-semibold text-navy hover:text-blue transition-colors">Products</Link>
          <Link to="/industries" className="text-sm font-semibold text-navy hover:text-blue transition-colors">Industries</Link>
          <Link to="/clients" className="text-sm font-semibold text-navy hover:text-blue transition-colors">Clients</Link>
          <Link to="/contact" className="text-sm font-semibold text-navy hover:text-blue transition-colors">Contact</Link>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="p-2 text-navy hover:text-blue transition-colors">
            <Search size={20} />
          </button>
          <a href="/jki_profile.pptx" download className="flex items-center space-x-2 text-sm font-semibold text-navy hover:text-blue transition-colors">
            <Download size={16} />
            <span>Profile</span>
          </a>
          <Link to="/contact" className="bg-blue hover:bg-navy text-white px-6 py-2.5 rounded-full shadow-md text-sm font-bold transition-all duration-300">
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-navy" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (simplified) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4">
          <Link to="/" className="text-navy font-semibold">Home</Link>
          <Link to="/about" className="text-navy font-semibold">About</Link>
          <Link to="/products" className="text-navy font-semibold">Products</Link>
          <Link to="/contact" className="text-navy font-semibold">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
